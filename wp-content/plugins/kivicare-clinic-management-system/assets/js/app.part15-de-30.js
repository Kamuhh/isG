// app.part15-de-30.js
              if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "resize",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: ti,
                          usageStatistics: l,
                        })).status = "active"),
                        (r._lockState = !1),
                        (r._originalDimensions = null),
                        (r._els = {
                          widthRange: new Un(
                            {
                              slider: r.selector(".tie-width-range"),
                              input: r.selector(".tie-width-range-value"),
                            },
                            je
                          ),
                          heightRange: new Un(
                            {
                              slider: r.selector(".tie-height-range"),
                              input: r.selector(".tie-height-range-value"),
                            },
                            je
                          ),
                          lockAspectRatio: r.selector(".tie-lock-aspect-ratio"),
                          apply: r.selector(".tie-resize-button .apply"),
                          cancel: r.selector(".tie-resize-button .cancel"),
                        }),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "changeStartMode",
                          value: function () {
                            this.actions.modeChange("resize");
                            var t = this.actions.getCurrentDimensions();
                            (this._originalDimensions = t),
                              this.setWidthValue(t.width),
                              this.setHeightValue(t.height);
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            this.actions.stopDrawingMode(),
                              this.actions.reset(!0);
                          },
                        },
                        {
                          key: "setLimit",
                          value: function (t) {
                            (this._els.widthRange.min = this.calcMinValue(
                              t.minWidth
                            )),
                              (this._els.heightRange.min = this.calcMinValue(
                                t.minHeight
                              )),
                              (this._els.widthRange.max = this.calcMaxValue(
                                t.maxWidth
                              )),
                              (this._els.heightRange.max = this.calcMaxValue(
                                t.maxHeight
                              ));
                          },
                        },
                        {
                          key: "calcMaxValue",
                          value: function (t) {
                            return t <= 0 && (t = je.max), t;
                          },
                        },
                        {
                          key: "calcMinValue",
                          value: function (t) {
                            return t <= 0 && (t = je.min), t;
                          },
                        },
                        {
                          key: "setWidthValue",
                          value: function (t) {
                            var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                            (this._els.widthRange.value = t),
                              e && this._els.widthRange.trigger("change");
                          },
                        },
                        {
                          key: "setHeightValue",
                          value: function (t) {
                            var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                            (this._els.heightRange.value = t),
                              e && this._els.heightRange.trigger("change");
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(), Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e, n, i, r, o;
                            this._els.widthRange.on(
                              "change",
                              T()((e = this._changeWidthRangeHandler)).call(
                                e,
                                this
                              )
                            ),
                              this._els.heightRange.on(
                                "change",
                                T()((n = this._changeHeightRangeHandler)).call(
                                  n,
                                  this
                                )
                              ),
                              this._els.lockAspectRatio.addEventListener(
                                "change",
                                T()((i = this._changeLockAspectRatio)).call(
                                  i,
                                  this
                                )
                              );
                            var a = T()((r = this._applyEventHandler)).call(
                                r,
                                this
                              ),
                              s = T()((o = this._cancelEventHandler)).call(
                                o,
                                this
                              );
                            (this.eventHandler = { apply: a, cancel: s }),
                              (this.actions = t),
                              this._els.apply.addEventListener("click", a),
                              this._els.cancel.addEventListener("click", s);
                          },
                        },
                        {
                          key: "_changeWidthRangeHandler",
                          value: function (t) {
                            this.actions.preview(
                              "width",
                              Ue(t),
                              this._lockState
                            );
                          },
                        },
                        {
                          key: "_changeHeightRangeHandler",
                          value: function (t) {
                            this.actions.preview(
                              "height",
                              Ue(t),
                              this._lockState
                            );
                          },
                        },
                        {
                          key: "_changeLockAspectRatio",
                          value: function (t) {
                            (this._lockState = t.target.checked),
                              this.actions.lockAspectRatio(
                                this._lockState,
                                je.min,
                                je.max
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this._els.apply.removeEventListener(
                              "click",
                              this.eventHandler.apply
                            ),
                              this._els.cancel.removeEventListener(
                                "click",
                                this.eventHandler.cancel
                              );
                          },
                        },
                        {
                          key: "_applyEventHandler",
                          value: function () {
                            this.actions.resize(),
                              this._els.apply.classList.remove("active");
                          },
                        },
                        {
                          key: "_cancelEventHandler",
                          value: function () {
                            this.actions.reset(),
                              this._els.cancel.classList.remove("active");
                          },
                        },
                        {
                          key: "changeApplyButtonStatus",
                          value: function (t) {
                            t
                              ? this._els.apply.classList.add("active")
                              : this._els.apply.classList.remove("active");
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  ni = function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o,
                      a = t.locale,
                      s = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o =
                                '\n    <ul class="tie-flip-button tui-image-editor-submenu-item">\n        <li>\n            <div class="tui-image-editor-button flipX">\n                <div>\n                    '.concat(
                                  s(["normal", "active"], "flip-x", !0),
                                  "\n                </div>\n                <label>\n                    "
                                ))
                            ).call(
                              o,
                              a.localize("Flip X"),
                              '\n                </label>\n            </div>\n            <div class="tui-image-editor-button flipY">\n                <div>\n                    '
                            ))
                          ).call(
                            r,
                            s(["normal", "active"], "flip-y", !0),
                            "\n                </div>\n                <label>\n                    "
                          ))
                        ).call(
                          i,
                          a.localize("Flip Y"),
                          '\n                </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li>\n            <div class="tui-image-editor-button resetFlip">\n                <div>\n                    '
                        ))
                      ).call(
                        n,
                        s(["normal", "active"], "flip-reset", !0),
                        "\n                </div>\n                <label>\n                    "
                      ))
                    ).call(
                      e,
                      a.localize("Reset"),
                      "\n                </label>\n            </div>\n        </li>\n    </ul>\n"
                    );
                  },
                  ii = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "flip",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: ni,
                          usageStatistics: l,
                        })).flipStatus = !1),
                        (r._els = {
                          flipButton: r.selector(".tie-flip-button"),
                        }),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(), Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e;
                            (this.eventHandler.changeFlip = T()(
                              (e = this._changeFlip)
                            ).call(e, this)),
                              (this._actions = t),
                              this._els.flipButton.addEventListener(
                                "click",
                                this.eventHandler.changeFlip
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this._els.flipButton.removeEventListener(
                              "click",
                              this.eventHandler.changeFlip
                            );
                          },
                        },
                        {
                          key: "_changeFlip",
                          value: function (t) {
                            var e = this,
                              n = t.target.closest(".tui-image-editor-button");
                            if (n) {
                              var i = this.getButtonType(n, [
                                "flipX",
                                "flipY",
                                "resetFlip",
                              ]);
                              if (!this.flipStatus && "resetFlip" === i) return;
                              this._actions.flip(i).then(function (t) {
                                var n = e._els.flipButton.classList;
                                (e.flipStatus = !1),
                                  n.remove("resetFlip"),
                                  $()(["flipX", "flipY"], function (i) {
                                    n.remove(i),
                                      t[i] &&
                                        (n.add(i),
                                        n.add("resetFlip"),
                                        (e.flipStatus = !0));
                                  });
                              });
                            }
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  ri = function (t) {
                    var e,
                      n,
                      i = t.locale,
                      r = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n =
                          '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-rotate-button">\n            <div class="tui-image-editor-button clockwise">\n                <div>\n                    '.concat(
                            r(["normal", "active"], "rotate-clockwise", !0),
                            '\n                </div>\n                <label> 30 </label>\n            </div>\n            <div class="tui-image-editor-button counterclockwise">\n                <div>\n                    '
                          ))
                      ).call(
                        n,
                        r(["normal", "active"], "rotate-counterclockwise", !0),
                        '\n                </div>\n                <label> -30 </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-newline tui-image-editor-range-wrap">\n            <label class="range">'
                      ))
                    ).call(
                      e,
                      i.localize("Range"),
                      '</label>\n            <div class="tie-rotate-range"></div>\n            <input class="tie-rotate-range-value tui-image-editor-range-value" value="0" />\n        </li>\n    </ul>\n'
                    );
                  },
                  oi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "rotate",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: ri,
                          usageStatistics: l,
                        }))._value = 0),
                        (r._els = {
                          rotateButton: r.selector(".tie-rotate-button"),
                          rotateRange: new Un(
                            {
                              slider: r.selector(".tie-rotate-range"),
                              input: r.selector(".tie-rotate-range-value"),
                            },
                            Te
                          ),
                        }),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._els.rotateRange.destroy(),
                              Ke(this);
                          },
                        },
                        {
                          key: "setRangeBarAngle",
                          value: function (t, e) {
                            var n = e;
                            "rotate" === t &&
                              (n = Q()(this._els.rotateRange.value, 10) + e),
                              this._setRangeBarRatio(n);
                          },
                        },
                        {
                          key: "_setRangeBarRatio",
                          value: function (t) {
                            this._els.rotateRange.value = t;
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e, n;
                            (this.eventHandler.rotationAngleChanged = T()(
                              (e = this._changeRotateForButton)
                            ).call(e, this)),
                              (this.actions = t),
                              this._els.rotateButton.addEventListener(
                                "click",
                                this.eventHandler.rotationAngleChanged
                              ),
                              this._els.rotateRange.on(
                                "change",
                                T()((n = this._changeRotateForRange)).call(
                                  n,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this._els.rotateButton.removeEventListener(
                              "click",
                              this.eventHandler.rotationAngleChanged
                            ),
                              this._els.rotateRange.off();
                          },
                        },
                        {
                          key: "_changeRotateForRange",
                          value: function (t, e) {
                            var n = Ue(t);
                            this.actions.setAngle(n, !e), (this._value = n);
                          },
                        },
                        {
                          key: "_changeRotateForButton",
                          value: function (t) {
                            var e = t.target.closest(
                                ".tui-image-editor-button"
                              ),
                              n = this._els.rotateRange.value;
                            if (e) {
                              var i = { clockwise: 30, counterclockwise: -30 }[
                                  this.getButtonType(e, [
                                    "counterclockwise",
                                    "clockwise",
                                  ])
                                ],
                                r = Q()(n, 10) + i;
                              r >= -360 && r <= 360 && this.actions.rotate(i);
                            }
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  ai = function (t) {
                    var e,
                      n,
                      i,
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
                      f = t.locale,
                      b = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a = L()(
                                  (s = L()(
                                    (l = L()(
                                      (c = L()(
                                        (d = L()(
                                          (u = L()(
                                            (p = L()(
                                              (h =
                                                '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-text-effect-button">\n            <div class="tui-image-editor-button bold">\n                <div>\n                    '.concat(
                                                  b(
                                                    ["normal", "active"],
                                                    "text-bold",
                                                    !0
                                                  ),
                                                  "\n                </div>\n                <label> "
                                                ))
                                            ).call(
                                              h,
                                              f.localize("Bold"),
                                              ' </label>\n            </div>\n            <div class="tui-image-editor-button italic">\n                <div>\n                    '
                                            ))
                                          ).call(
                                            p,
                                            b(
                                              ["normal", "active"],
                                              "text-italic",
                                              !0
                                            ),
                                            "\n                </div>\n                <label> "
                                          ))
                                        ).call(
                                          u,
                                          f.localize("Italic"),
                                          ' </label>\n            </div>\n            <div class="tui-image-editor-button underline">\n                <div>\n                    '
                                        ))
                                      ).call(
                                        d,
                                        b(
                                          ["normal", "active"],
                                          "text-underline",
                                          !0
                                        ),
                                        "\n                </div>\n                <label> "
                                      ))
                                    ).call(
                                      c,
                                      f.localize("Underline"),
                                      ' </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li class="tie-text-align-button">\n            <div class="tui-image-editor-button left">\n                <div>\n                    '
                                    ))
                                  ).call(
                                    l,
                                    b(
                                      ["normal", "active"],
                                      "text-align-left",
                                      !0
                                    ),
                                    "\n                </div>\n                <label> "
                                  ))
                                ).call(
                                  s,
                                  f.localize("Left"),
                                  ' </label>\n            </div>\n            <div class="tui-image-editor-button center">\n                <div>\n                    '
                                ))
                              ).call(
                                a,
                                b(
                                  ["normal", "active"],
                                  "text-align-center",
                                  !0
                                ),
                                "\n                </div>\n                <label> "
                              ))
                            ).call(
                              o,
                              f.localize("Center"),
                              ' </label>\n            </div>\n            <div class="tui-image-editor-button right">\n                <div>\n                    '
                            ))
                          ).call(
                            r,
                            b(["normal", "active"], "text-align-right", !0),
                            "\n                </div>\n                <label> "
                          ))
                        ).call(
                          i,
                          f.localize("Right"),
                          ' </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li>\n            <div class="tie-text-color" title="'
                        ))
                      ).call(
                        n,
                        f.localize("Color"),
                        '"></div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-newline tui-image-editor-range-wrap">\n            <label class="range">'
                      ))
                    ).call(
                      e,
                      f.localize("Text size"),
                      '</label>\n            <div class="tie-text-range"></div>\n            <input class="tie-text-range-value tui-image-editor-range-value" value="0" />\n        </li>\n    </ul>\n'
                    );
                  },
                  si = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "text",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: ai,
                          usageStatistics: l,
                        })).effect = { bold: !1, italic: !1, underline: !1 }),
                        (r.align = "tie-text-align-left"),
                        (r._els = {
                          textEffectButton: r.selector(
                            ".tie-text-effect-button"
                          ),
                          textAlignButton: r.selector(".tie-text-align-button"),
                          textColorpicker: new $n(
                            r.selector(".tie-text-color"),
                            {
                              defaultColor: "#ffbb3b",
                              toggleDirection: r.toggleDirection,
                              usageStatistics: r.usageStatistics,
                            }
                          ),
                          textRange: new Un(
                            {
                              slider: r.selector(".tie-text-range"),
                              input: r.selector(".tie-text-range-value"),
                            },
                            qe
                          ),
                        }),
                        (r.colorPickerInputBox =
                          r._els.textColorpicker.colorpickerElement.querySelector(
                            me
                          )),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._els.textColorpicker.destroy(),
                              this._els.textRange.destroy(),
                              Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i,
                              r,
                              o,
                              a,
                              s = T()((e = this._setTextEffectHandler)).call(
                                e,
                                this
                              ),
                              l = T()((n = this._setTextAlignHandler)).call(
                                n,
                                this
                              );
                            (this.eventHandler = {
                              setTextEffect: s,
                              setTextAlign: l,
                            }),
                              (this.actions = t),
                              this._els.textEffectButton.addEventListener(
                                "click",
                                s
                              ),
                              this._els.textAlignButton.addEventListener(
                                "click",
                                l
                              ),
                              this._els.textRange.on(
                                "change",
                                T()((i = this._changeTextRnageHandler)).call(
                                  i,
                                  this
                                )
                              ),
                              this._els.textColorpicker.on(
                                "change",
                                T()((r = this._changeColorHandler)).call(
                                  r,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.addEventListener(
                                fe,
                                T()((o = this._onStartEditingInputBox)).call(
                                  o,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.addEventListener(
                                be,
                                T()((a = this._onStopEditingInputBox)).call(
                                  a,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            var t,
                              e,
                              n = this.eventHandler,
                              i = n.setTextEffect,
                              r = n.setTextAlign;
                            this._els.textEffectButton.removeEventListener(
                              "click",
                              i
                            ),
                              this._els.textAlignButton.removeEventListener(
                                "click",
                                r
                              ),
                              this._els.textRange.off(),
                              this._els.textColorpicker.off(),
                              this.colorPickerInputBox.removeEventListener(
                                fe,
                                T()((t = this._onStartEditingInputBox)).call(
                                  t,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.removeEventListener(
                                be,
                                T()((e = this._onStopEditingInputBox)).call(
                                  e,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            this.actions.stopDrawingMode();
                          },
                        },
                        {
                          key: "changeStartMode",
                          value: function () {
                            this.actions.modeChange("text");
                          },
                        },
                        {
                          key: "textColor",
                          get: function () {
                            return this._els.textColorpicker.color;
                          },
                          set: function (t) {
                            this._els.textColorpicker.color = t;
                          },
                        },
                        {
                          key: "fontSize",
                          get: function () {
                            return this._els.textRange.value;
                          },
                          set: function (t) {
                            this._els.textRange.value = t;
                          },
                        },
                        {
                          key: "fontStyle",
                          get: function () {
                            return this.effect.italic ? "italic" : "normal";
                          },
                        },
                        {
                          key: "fontWeight",
                          get: function () {
                            return this.effect.bold ? "bold" : "normal";
                          },
                        },
                        {
                          key: "underline",
                          get: function () {
                            return this.effect.underline;
                          },
                        },
                        {
                          key: "setTextStyleStateOnAction",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              e = it()(t),
                              n = t.fontSize,
                              i = t.fontStyle,
                              r = t.fontWeight,
                              o = t.textDecoration,
                              a = t.textAlign;
                            (this.textColor = e),
                              (this.fontSize = n),
                              this.setEffectState("italic", i),
                              this.setEffectState("bold", r),
                              this.setEffectState("underline", o),
                              this.setAlignState("tie-text-align-".concat(a));
                          },
                        },
                        {
                          key: "setEffectState",
                          value: function (t, e) {
                            var n =
                                "italic" === e ||
                                "bold" === e ||
                                "underline" === e,
                              i = this._els.textEffectButton.querySelector(
                                ".tui-image-editor-button.".concat(t)
                              );
                            (this.effect[t] = n),
                              i.classList[n ? "add" : "remove"]("active");
                          },
                        },
                        {
                          key: "setAlignState",
                          value: function (t) {
                            var e = this._els.textAlignButton;
                            e.classList.remove(this.align),
                              e.classList.add(t),
                              (this.align = t);
                          },
                        },
                        {
                          key: "_setTextEffectHandler",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button"
                            );
                            if (e) {
                              var n = K(
                                  e.className.match(/(bold|italic|underline)/),
                                  1
                                )[0],
                                i = {
                                  bold: { fontWeight: "bold" },
                                  italic: { fontStyle: "italic" },
                                  underline: { textDecoration: "underline" },
                                }[n];
                              (this.effect[n] = !this.effect[n]),
                                e.classList.toggle("active"),
                                this.actions.changeTextStyle(i);
                            }
                          },
                        },
                        {
                          key: "_setTextAlignHandler",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button"
                            );
                            if (e) {
                              var n = this.getButtonType(e, [
                                  "left",
                                  "center",
                                  "right",
                                ]),
                                i = "tie-text-align-".concat(n);
                              t.currentTarget.classList.remove(this.align),
                                this.align !== i &&
                                  t.currentTarget.classList.add(i),
                                this.actions.changeTextStyle({ textAlign: n }),
                                (this.align = i);
                            }
                          },
                        },
                        {
                          key: "_changeTextRnageHandler",
                          value: function (t, e) {
                            this.actions.changeTextStyle({ fontSize: t }, !e);
                          },
                        },
                        {
                          key: "_changeColorHandler",
                          value: function (t) {
                            (t = t || "transparent"),
                              this.actions.changeTextStyle({ fill: t });
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  li = function (t) {
                    var e,
                      n,
                      i,
                      r = t.locale,
                      o = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i =
                            '\n    <ul class="tui-image-editor-submenu-item">\n        <li>\n            <div class="tui-image-editor-button">\n                <div>\n                    <input type="file" accept="image/*" class="tie-mask-image-file">\n                    '.concat(
                              o(["normal", "active"], "mask-load", !0),
                              "\n                </div>\n                <label> "
                            ))
                        ).call(
                          i,
                          r.localize("Load Mask Image"),
                          ' </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tie-mask-apply tui-image-editor-newline apply" style="margin-top: 22px;margin-bottom: 5px">\n            <div class="tui-image-editor-button apply">\n                '
                        ))
                      ).call(
                        n,
                        o(["normal", "active"], "apply"),
                        "\n                <label>\n                    "
                      ))
                    ).call(
                      e,
                      r.localize("Apply"),
                      "\n                </label>\n            </div>\n        </li>\n    </ul>\n"
                    );
                  },
                  ci = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "mask",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: li,
                          usageStatistics: l,
                        }))._els = {
                          applyButton: r.selector(".tie-mask-apply"),
                          maskImageButton: r.selector(".tie-mask-image-file"),
                        }),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(), Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i = T()((e = this._loadMaskFile)).call(e, this),
                              r = T()((n = this._applyMask)).call(n, this);
                            (this.eventHandler = {
                              loadMaskFile: i,
                              applyMask: r,
                            }),
                              (this.actions = t),
                              this._els.maskImageButton.addEventListener(
                                "change",
                                i
                              ),
                              this._els.applyButton.addEventListener(
                                "click",
                                r
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            this._els.maskImageButton.removeEventListener(
                              "change",
                              this.eventHandler.loadMaskFile
                            ),
                              this._els.applyButton.removeEventListener(
                                "click",
                                this.eventHandler.applyMask
                              );
                          },
                        },
                        {
                          key: "_applyMask",
                          value: function () {
                            this.actions.applyFilter(),
                              this._els.applyButton.classList.remove("active");
                          },
                        },
                        {
                          key: "_loadMaskFile",
                          value: function (t) {
                            var e;
                            Ve() ||
                              alert("This browser does not support file-api");
                            var n = K(t.target.files, 1)[0];
                            n &&
                              ((e = P().createObjectURL(n)),
                              this.actions.loadImageFromURL(e, n),
                              this._els.applyButton.classList.add("active"));
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  di = function (t) {
                    var e,
                      n,
                      i,
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
                      v,
                      _,
                      y,
                      M = t.locale,
                      O = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a = L()(
                                  (s = L()(
                                    (l = L()(
                                      (c = L()(
                                        (d = L()(
                                          (u = L()(
                                            (p = L()(
                                              (h = L()(
                                                (f = L()(
                                                  (b = L()(
                                                    (m = L()(
                                                      (g = L()(
                                                        (v = L()(
                                                          (_ = L()(
                                                            (y =
                                                              '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-icon-add-button">\n            <div class="tui-image-editor-button" data-icontype="icon-arrow">\n                <div>\n                    '.concat(
                                                                O(
                                                                  [
                                                                    "normal",
                                                                    "active",
                                                                  ],
                                                                  "icon-arrow",
                                                                  !0
                                                                ),
                                                                "\n                </div>\n                <label>\n                    "
                                                              ))
                                                          ).call(
                                                            y,
                                                            M.localize("Arrow"),
                                                            '\n                </label>\n            </div>\n            <div class="tui-image-editor-button" data-icontype="icon-arrow-2">\n                <div>\n                    '
                                                          ))
                                                        ).call(
                                                          _,
                                                          O(
                                                            [
                                                              "normal",
                                                              "active",
                                                            ],
                                                            "icon-arrow-2",
                                                            !0
                                                          ),
                                                          "\n                </div>\n                <label>\n                    "
                                                        ))
                                                      ).call(
                                                        v,
                                                        M.localize("Arrow-2"),
                                                        '\n                </label>\n            </div>\n            <div class="tui-image-editor-button" data-icontype="icon-arrow-3">\n                <div>\n                    '
                                                      ))
                                                    ).call(
                                                      g,
                                                      O(
                                                        ["normal", "active"],
                                                        "icon-arrow-3",
                                                        !0
                                                      ),
                                                      "\n                </div>\n                <label>\n                    "
                                                    ))
                                                  ).call(
                                                    m,
                                                    M.localize("Arrow-3"),
                                                    '\n                </label>\n            </div>\n            <div class="tui-image-editor-button" data-icontype="icon-star">\n                <div>\n                    '
                                                  ))
                                                ).call(
                                                  b,
                                                  O(
                                                    ["normal", "active"],
                                                    "icon-star",
                                                    !0
                                                  ),
                                                  "\n                </div>\n                <label>\n                    "
                                                ))
                                              ).call(
                                                f,
                                                M.localize("Star-1"),
                                                '\n                </label>\n            </div>\n            <div class="tui-image-editor-button" data-icontype="icon-star-2">\n                <div>\n                    '
                                              ))
                                            ).call(
                                              h,
                                              O(
                                                ["normal", "active"],
                                                "icon-star-2",
                                                !0
                                              ),
                                              "\n                </div>\n                <label>\n                    "
                                            ))
                                          ).call(
                                            p,
                                            M.localize("Star-2"),
                                            '\n                </label>\n            </div>\n\n            <div class="tui-image-editor-button" data-icontype="icon-polygon">\n                <div>\n                    '
                                          ))
                                        ).call(
                                          u,
                                          O(
                                            ["normal", "active"],
                                            "icon-polygon",
                                            !0
                                          ),
                                          "\n                </div>\n                <label>\n                    "
                                        ))
                                      ).call(
                                        d,
                                        M.localize("Polygon"),
                                        '\n                </label>\n            </div>\n\n            <div class="tui-image-editor-button" data-icontype="icon-location">\n                <div>\n                    '
                                      ))
                                    ).call(
                                      c,
                                      O(
                                        ["normal", "active"],
                                        "icon-location",
                                        !0
                                      ),
                                      "\n                </div>\n                <label>\n                    "
                                    ))
                                  ).call(
                                    l,
                                    M.localize("Location"),
                                    '\n                </label>\n            </div>\n\n            <div class="tui-image-editor-button" data-icontype="icon-heart">\n                <div>\n                    '
                                  ))
                                ).call(
                                  s,
                                  O(["normal", "active"], "icon-heart", !0),
                                  "\n                </div>\n                <label>\n                    "
                                ))
                              ).call(
                                a,
                                M.localize("Heart"),
                                '\n                </label>\n            </div>\n\n            <div class="tui-image-editor-button" data-icontype="icon-bubble">\n                <div>\n                    '
                              ))
                            ).call(
                              o,
                              O(["normal", "active"], "icon-bubble", !0),
                              "\n                </div>\n                <label>\n                    "
                            ))
                          ).call(
                            r,
                            M.localize("Bubble"),
                            '\n                </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li class="tie-icon-add-button">\n            <div class="tui-image-editor-button" style="margin:0">\n                <div>\n                    <input type="file" accept="image/*" class="tie-icon-image-file">\n                    '
                          ))
                        ).call(
                          i,
                          O(["normal", "active"], "icon-load", !0),
                          "\n                </div>\n                <label>\n                    "
                        ))
                      ).call(
                        n,
                        M.localize("Custom icon"),
                        '\n                </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li>\n            <div class="tie-icon-color" title="'
                      ))
                    ).call(
                      e,
                      M.localize("Color"),
                      '"></div>\n        </li>\n    </ul>\n'
                    );
                  },
                  ui = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "icon",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: di,
                          usageStatistics: l,
                        })).iconType = null),
                        (r._iconMap = {}),
                        (r._els = {
                          registerIconButton: r.selector(
                            ".tie-icon-image-file"
                          ),
                          addIconButton: r.selector(".tie-icon-add-button"),
                          iconColorpicker: new $n(
                            r.selector(".tie-icon-color"),
                            {
                              defaultColor: "#ffbb3b",
                              toggleDirection: r.toggleDirection,
                              usageStatistics: r.usageStatistics,
                            }
                          ),
                        }),
                        (r.colorPickerInputBox =
                          r._els.iconColorpicker.colorpickerElement.querySelector(
                            me
                          )),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._els.iconColorpicker.destroy(),
                              Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i,
                              r,
                              o,
                              a = T()((e = this._registerIconHandler)).call(
                                e,
                                this
                              ),
                              s = T()((n = this._addIconHandler)).call(n, this);
                            (this.eventHandler = {
                              registerIcon: a,
                              addIcon: s,
                            }),
                              (this.actions = t),
                              this._els.iconColorpicker.on(
                                "change",
                                T()((i = this._changeColorHandler)).call(
                                  i,
                                  this
                                )
                              ),
                              this._els.registerIconButton.addEventListener(
                                "change",
                                a
                              ),
                              this._els.addIconButton.addEventListener(
                                "click",
                                s
                              ),
                              this.colorPickerInputBox.addEventListener(
                                fe,
                                T()((r = this._onStartEditingInputBox)).call(
                                  r,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.addEventListener(
                                be,
                                T()((o = this._onStopEditingInputBox)).call(
                                  o,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            var t, e;
                            this._els.iconColorpicker.off(),
                              this._els.registerIconButton.removeEventListener(
                                "change",
                                this.eventHandler.registerIcon
                              ),
                              this._els.addIconButton.removeEventListener(
                                "click",
                                this.eventHandler.addIcon
                              ),
                              this.colorPickerInputBox.removeEventListener(
                                fe,
                                T()((t = this._onStartEditingInputBox)).call(
                                  t,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.removeEventListener(
                                be,
                                T()((e = this._onStopEditingInputBox)).call(
                                  e,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "clearIconType",
                          value: function () {
                            this._els.addIconButton.classList.remove(
                              this.iconType
                            ),
                              (this.iconType = null);
                          },
                        },
                        {
                          key: "registerDefaultIcon",
                          value: function () {
                            var t = this;
                            $()(Se, function (e, n) {
                              t.actions.registerDefaultIcons(n, e);
                            });
                          },
                        },
                        {
                          key: "setIconPickerColor",
                          value: function (t) {
                            this._els.iconColorpicker.color = t;
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            this.clearIconType(), this.actions.cancelAddIcon();
                          },
                        },
                        {
                          key: "_changeColorHandler",
                          value: function (t) {
                            (t = t || "transparent"),
                              this.actions.changeColor(t);
                          },
                        },
                        {
                          key: "_addIconHandler",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button"
                            );
                            if (e) {
                              var n = e.getAttribute("data-icontype"),
                                i = this._els.iconColorpicker.color;
                              this.actions.discardSelection(),
                                this.actions.changeSelectableAll(!1),
                                this._els.addIconButton.classList.remove(
                                  this.iconType
                                ),
                                this._els.addIconButton.classList.add(n),
                                this.iconType === n
                                  ? this.changeStandbyMode()
                                  : (this.actions.addIcon(n, i),
                                    (this.iconType = n));
                            }
                          },
                        },
                        {
                          key: "_registerIconHandler",
                          value: function (t) {
                            var e;
                            Ve ||
                              alert("This browser does not support file-api");
                            var n = K(t.target.files, 1)[0];
                            n &&
                              ((e = P().createObjectURL(n)),
                              this.actions.registerCustomIcon(e, n));
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  pi = function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o,
                      a = t.locale,
                      s = t.makeSvgIcon;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o =
                                '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tie-draw-line-select-button">\n            <div class="tui-image-editor-button free">\n                <div>\n                    '.concat(
                                  s(["normal", "active"], "draw-free", !0),
                                  "\n                </div>\n                <label>\n                    "
                                ))
                            ).call(
                              o,
                              a.localize("Free"),
                              '\n                </label>\n            </div>\n            <div class="tui-image-editor-button line">\n                <div>\n                    '
                            ))
                          ).call(
                            r,
                            s(["normal", "active"], "draw-line", !0),
                            "\n                </div>\n                <label>\n                    "
                          ))
                        ).call(
                          i,
                          a.localize("Straight"),
                          '\n                </label>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li>\n            <div class="tie-draw-color" title="'
                        ))
                      ).call(
                        n,
                        a.localize("Color"),
                        '"></div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-newline tui-image-editor-range-wrap">\n            <label class="range">'
                      ))
                    ).call(
                      e,
                      a.localize("Range"),
                      '</label>\n            <div class="tie-draw-range"></div>\n            <input class="tie-draw-range-value tui-image-editor-range-value" value="0" />\n        </li>\n    </ul>\n'
                    );
                  },
                  hi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon,
                        s = i.menuBarPosition,
                        l = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "draw",
                          makeSvgIcon: a,
                          menuBarPosition: s,
                          templateHtml: pi,
                          usageStatistics: l,
                        }))._els = {
                          lineSelectButton: r.selector(
                            ".tie-draw-line-select-button"
                          ),
                          drawColorPicker: new $n(
                            r.selector(".tie-draw-color"),
                            {
                              defaultColor: "#00a9ff",
                              toggleDirection: r.toggleDirection,
                              usageStatistics: r.usageStatistics,
                            }
                          ),
                          drawRange: new Un(
                            {
                              slider: r.selector(".tie-draw-range"),
                              input: r.selector(".tie-draw-range-value"),
                            },
                            De
                          ),
                        }),
                        (r.type = null),
                        (r.color = r._els.drawColorPicker.color),
                        (r.width = r._els.drawRange.value),
                        (r.colorPickerInputBox =
                          r._els.drawColorPicker.colorpickerElement.querySelector(
                            me
                          )),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._els.drawColorPicker.destroy(),
                              this._els.drawRange.destroy(),
                              Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e, n, i, r, o;
                            (this.eventHandler.changeDrawType = T()(
                              (e = this._changeDrawType)
                            ).call(e, this)),
                              (this.actions = t),
                              this._els.lineSelectButton.addEventListener(
                                "click",
                                this.eventHandler.changeDrawType
                              ),
                              this._els.drawColorPicker.on(
                                "change",
                                T()((n = this._changeDrawColor)).call(n, this)
                              ),
                              this._els.drawRange.on(
                                "change",
                                T()((i = this._changeDrawRange)).call(i, this)
                              ),
                              this.colorPickerInputBox.addEventListener(
                                fe,
                                T()((r = this._onStartEditingInputBox)).call(
                                  r,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.addEventListener(
                                be,
                                T()((o = this._onStopEditingInputBox)).call(
                                  o,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            var t, e;
                            this._els.lineSelectButton.removeEventListener(
                              "click",
                              this.eventHandler.changeDrawType
                            ),
                              this._els.drawColorPicker.off(),
                              this._els.drawRange.off(),
                              this.colorPickerInputBox.removeEventListener(
                                fe,
                                T()((t = this._onStartEditingInputBox)).call(
                                  t,
                                  this
                                )
                              ),
                              this.colorPickerInputBox.removeEventListener(
                                be,
                                T()((e = this._onStopEditingInputBox)).call(
                                  e,
                                  this
                                )
                              );
                          },
                        },
                        {
                          key: "setDrawMode",
                          value: function () {
                            this.actions.setDrawMode(this.type, {
                              width: this.width,
                              color: Ge(this.color, 0.7),
                            });
                          },
                        },
                        {
                          key: "changeStandbyMode",
                          value: function () {
                            (this.type = null),
                              this.actions.stopDrawingMode(),
                              this.actions.changeSelectableAll(!0),
                              this._els.lineSelectButton.classList.remove(
                                "free"
                              ),
                              this._els.lineSelectButton.classList.remove(
                                "line"
                              );
                          },
                        },
                        {
                          key: "changeStartMode",
                          value: function () {
                            (this.type = "free"),
                              this._els.lineSelectButton.classList.add("free"),
                              this.setDrawMode();
                          },
                        },
                        {
                          key: "_changeDrawType",
                          value: function (t) {
                            var e = t.target.closest(
                              ".tui-image-editor-button"
                            );
                            if (e) {
                              var n = this.getButtonType(e, ["free", "line"]);
                              if (
                                (this.actions.discardSelection(),
                                this.type === n)
                              )
                                return void this.changeStandbyMode();
                              this.changeStandbyMode(),
                                (this.type = n),
                                this._els.lineSelectButton.classList.add(n),
                                this.setDrawMode();
                            }
                          },
                        },
                        {
                          key: "_changeDrawColor",
                          value: function (t) {
                            (this.color = t || "transparent"),
                              this.type
                                ? this.setDrawMode()
                                : this.changeStartMode();
                          },
                        },
                        {
                          key: "_changeDrawRange",
                          value: function (t) {
                            (this.width = t),
                              this.type
                                ? this.setDrawMode()
                                : this.changeStartMode();
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  fi = r(9886),
                  bi = r.n(fi),
                  mi = function (t) {
                    var e,
                      n,
                      i,
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
                      g = t.locale;
                    return L()(
                      (e = L()(
                        (n = L()(
                          (i = L()(
                            (r = L()(
                              (o = L()(
                                (a = L()(
                                  (s = L()(
                                    (l = L()(
                                      (c = L()(
                                        (d = L()(
                                          (u = L()(
                                            (p = L()(
                                              (h = L()(
                                                (f = L()(
                                                  (b = L()(
                                                    (m =
                                                      '\n    <ul class="tui-image-editor-submenu-item">\n        <li class="tui-image-editor-submenu-align">\n            <div class="tui-image-editor-checkbox-wrap fixed-width">\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-grayscale">\n                        <span>'.concat(
                                                        g.localize("Grayscale"),
                                                        '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-invert">\n                        <span>'
                                                      ))
                                                  ).call(
                                                    m,
                                                    g.localize("Invert"),
                                                    '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-sepia">\n                        <span>'
                                                  ))
                                                ).call(
                                                  b,
                                                  g.localize("Sepia"),
                                                  '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-vintage">\n                        <span>'
                                                ))
                                              ).call(
                                                f,
                                                g.localize("Sepia2"),
                                                '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-blur">\n                        <span>'
                                              ))
                                            ).call(
                                              h,
                                              g.localize("Blur"),
                                              '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-sharpen">\n                        <span>'
                                            ))
                                          ).call(
                                            p,
                                            g.localize("Sharpen"),
                                            '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-emboss">\n                        <span>'
                                          ))
                                        ).call(
                                          u,
                                          g.localize("Emboss"),
                                          '</span>\n                    </label>\n                </div>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-submenu-align">\n            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled" style="margin-bottom: 7px;">\n                <div class="tui-image-editor-checkbox-wrap">\n                    <div class="tui-image-editor-checkbox">\n                        <label>\n                            <input type="checkbox" class="tie-remove-white">\n                            <span>'
                                        ))
                                      ).call(
                                        d,
                                        g.localize("Remove White"),
                                        '</span>\n                        </label>\n                    </div>\n                </div>\n                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">\n                    <label>'
                                      ))
                                    ).call(
                                      c,
                                      g.localize("Distance"),
                                      '</label>\n                    <div class="tie-removewhite-distance-range"></div>\n                </div>\n            </div>\n            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-brightness">\n                        <span>'
                                    ))
                                  ).call(
                                    l,
                                    g.localize("Brightness"),
                                    '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-range-wrap short">\n                    <div class="tie-brightness-range"></div>\n                </div>\n            </div>\n            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-noise">\n                        <span>'
                                  ))
                                ).call(
                                  s,
                                  g.localize("Noise"),
                                  '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-range-wrap short">\n                    <div class="tie-noise-range"></div>\n                </div>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition only-left-right">\n            <div></div>\n        </li>\n        <li class="tui-image-editor-submenu-align">\n            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-pixelate">\n                        <span>'
                                ))
                              ).call(
                                a,
                                g.localize("Pixelate"),
                                '</span>\n                    </label>\n                </div>\n                <div class="tui-image-editor-range-wrap short">\n                    <div class="tie-pixelate-range"></div>\n                </div>\n            </div>\n            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">\n                <div class="tui-image-editor-newline tui-image-editor-checkbox-wrap">\n                    <div class="tui-image-editor-checkbox">\n                        <label>\n                            <input type="checkbox" class="tie-color-filter">\n                            <span>'
                              ))
                            ).call(
                              o,
                              g.localize("Color Filter"),
                              '</span>\n                        </label>\n                    </div>\n                </div>\n                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">\n                    <label>'
                            ))
                          ).call(
                            r,
                            g.localize("Threshold"),
                            '</label>\n                    <div class="tie-colorfilter-threshold-range"></div>\n                </div>\n            </div>\n        </li>\n        <li class="tui-image-editor-partition">\n            <div></div>\n        </li>\n        <li>\n            <div class="filter-color-item">\n                <div class="tie-filter-tint-color" title="'
                          ))
                        ).call(
                          i,
                          g.localize("Tint"),
                          '"></div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-tint">\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class="filter-color-item">\n                <div class="tie-filter-multiply-color" title="'
                        ))
                      ).call(
                        n,
                        g.localize("Multiply"),
                        '"></div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-multiply">\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class="filter-color-item">\n                <div class="tie-filter-blend-color" title="'
                      ))
                    ).call(
                      e,
                      g.localize("Blend"),
                      '"></div>\n                <div class="tui-image-editor-checkbox">\n                    <label>\n                        <input type="checkbox" class="tie-blend">\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n        </li>\n    </ul>\n'
                    );
                  },
                  gi = [
                    "add",
                    "diff",
                    "subtract",
                    "multiply",
                    "screen",
                    "lighten",
                    "darken",
                  ],
                  vi = [
                    "grayscale",
                    "invert",
                    "sepia",
                    "vintage",
                    "blur",
                    "sharpen",
                    "emboss",
                    "remove-white",
                    "brightness",
                    "noise",
                    "pixelate",
                    "color-filter",
                    "tint",
                    "multiply",
                    "blend",
                  ],
                  _i = {
                    grayscale: "grayscale",
                    invert: "invert",
                    sepia: "sepia",
                    blur: "blur",
                    sharpen: "sharpen",
                    emboss: "emboss",
                    removeWhite: "removeColor",
                    brightness: "brightness",
                    contrast: "contrast",
                    saturation: "saturation",
                    vintage: "vintage",
                    polaroid: "polaroid",
                    noise: "noise",
                    pixelate: "pixelate",
                    colorFilter: "removeColor",
                    tint: "blendColor",
                    multiply: "blendColor",
                    blend: "blendColor",
                    hue: "hue",
                    gamma: "gamma",
                  },
                  yi = [
                    "removewhiteDistanceRange",
                    "colorfilterThresholdRange",
                    "pixelateRange",
                    "noiseRange",
                    "brightnessRange",
                    "tintOpacity",
                  ],
                  Mi = [
                    "filterBlendColor",
                    "filterMultiplyColor",
                    "filterTintColor",
                  ],
                  Oi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.menuBarPosition,
                        s = i.usageStatistics;
                      return (
                        z(this, n),
                        ((r = e.call(this, t, {
                          locale: o,
                          name: "filter",
                          menuBarPosition: a,
                          templateHtml: mi,
                          usageStatistics: s,
                        })).selectBoxShow = !1),
                        (r.checkedMap = {}),
                        r._makeControlElement(),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeEvent(),
                              this._destroyToolInstance(),
                              Ke(this);
                          },
                        },
                        {
                          key: "_removeEvent",
                          value: function () {
                            var t,
                              e = this;
                            $()(vi, function (t) {
                              var n = e.selector(".tie-".concat(t)),
                                i = Xe(t);
                              n.removeEventListener(
                                "change",
                                e.eventHandler[i]
                              );
                            }),
                              $()(L()((t = [])).call(t, yi, Mi), function (t) {
                                e._els[t].off();
                              }),
                              this._els.blendType.removeEventListener(
                                "change",
                                this.eventHandler.changeBlendFilter
                              ),
                              this._els.blendType.removeEventListener(
                                "click",
                                this.eventHandler.changeBlendFilter
                              ),
                              In()(
                                this.colorPickerInputBoxes,
                                function (t) {
                                  var n, i;
                                  t.removeEventListener(
                                    fe,
                                    T()((n = e._onStartEditingInputBox)).call(
                                      n,
                                      e
                                    )
                                  ),
                                    t.removeEventListener(
                                      be,
                                      T()((i = e._onStopEditingInputBox)).call(
                                        i,
                                        e
                                      )
                                    );
                                },
                                this
                              );
                          },
                        },
                        {
                          key: "_destroyToolInstance",
                          value: function () {
                            var t,
                              e = this;
                            $()(L()((t = [])).call(t, yi, Mi), function (t) {
                              e._els[t].destroy();
                            });
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            var e,
                              n,
                              i,
                              r = this,
                              o = t.applyFilter,
                              a = function (t) {
                                var e;
                                return T()((e = r._changeFilterState)).call(
                                  e,
                                  r,
                                  o,
                                  t
                                );
                              },
                              s = function (t) {
                                return function (e, n) {
                                  return r._changeFilterState(o, t, n);
                                };
                              };
                            (this.eventHandler = {
                              changeBlendFilter: a("blend"),
                              blandTypeClick: function (t) {
                                return t.stopPropagation();
                              },
                            }),
                              $()(vi, function (t) {
                                var e = r.selector(".tie-".concat(t)),
                                  n = Xe(t);
                                (r.checkedMap[n] = e),
                                  (r.eventHandler[n] = a(n)),
                                  e.addEventListener(
                                    "change",
                                    r.eventHandler[n]
                                  );
                              }),
                              this._els.removewhiteDistanceRange.on(
                                "change",
                                s("removeWhite")
                              ),
                              this._els.colorfilterThresholdRange.on(
                                "change",
                                s("colorFilter")
                              ),
                              this._els.pixelateRange.on(
                                "change",
                                s("pixelate")
                              ),
                              this._els.noiseRange.on("change", s("noise")),
                              this._els.brightnessRange.on(
                                "change",
                                s("brightness")
                              ),
                              this._els.filterBlendColor.on(
                                "change",
                                this.eventHandler.changeBlendFilter
                              ),
                              this._els.filterMultiplyColor.on(
                                "change",
                                a("multiply")
                              ),
                              this._els.filterTintColor.on("change", a("tint")),
                              this._els.tintOpacity.on("change", s("tint")),
                              this._els.filterMultiplyColor.on(
                                "changeShow",
                                T()((e = this.colorPickerChangeShow)).call(
                                  e,
                                  this
                                )
                              ),
                              this._els.filterTintColor.on(
                                "changeShow",
                                T()((n = this.colorPickerChangeShow)).call(
                                  n,
                                  this
                                )
                              ),
                              this._els.filterBlendColor.on(
                                "changeShow",
                                T()((i = this.colorPickerChangeShow)).call(
                                  i,
                                  this
                                )
                              ),
                              this._els.blendType.addEventListener(
                                "change",
                                this.eventHandler.changeBlendFilter
                              ),
                              this._els.blendType.addEventListener(
                                "click",
                                this.eventHandler.blandTypeClick
                              ),
                              In()(
                                this.colorPickerInputBoxes,
                                function (t) {
                                  var e, n;
                                  t.addEventListener(
                                    fe,
                                    T()((e = r._onStartEditingInputBox)).call(
                                      e,
                                      r
                                    )
                                  ),
                                    t.addEventListener(
                                      be,
                                      T()((n = r._onStopEditingInputBox)).call(
                                        n,
                                        r
                                      )
                                    );
                                },
                                this
                              );
                          },
                        },
                        {
                          key: "setFilterState",
                          value: function (t) {
                            var e = t.type,
                              n = t.options,
                              i = t.action,
                              r = this._getFilterNameFromOptions(e, n),
                              o = "remove" === i;
                            o || this._setFilterState(r, n),
                              (this.checkedMap[r].checked = !o);
                          },
                        },
                        {
                          key: "initFilterCheckBoxState",
                          value: function () {
                            $()(
                              this.checkedMap,
                              function (t) {
                                t.checked = !1;
                              },
                              this
                            );
                          },
                        },
                        {
                          key: "_setFilterState",
                          value: function (t, e) {
                            "colorFilter" === t
                              ? (this._els.colorfilterThresholdRange.value =
                                  e.distance)
                              : "removeWhite" === t
                              ? (this._els.removewhiteDistanceRange.value =
                                  e.distance)
                              : "pixelate" === t
                              ? (this._els.pixelateRange.value = e.blocksize)
                              : "brightness" === t
                              ? (this._els.brightnessRange.value = e.brightness)
                              : "noise" === t
                              ? (this._els.noiseRange.value = e.noise)
                              : "tint" === t
                              ? ((this._els.tintOpacity.value = e.alpha),
                                (this._els.filterTintColor.color = e.color))
                              : "blend" === t
                              ? (this._els.filterBlendColor.color = e.color)
                              : "multiply" === t &&
                                (this._els.filterMultiplyColor.color = e.color);
                          },
                        },
                        {
                          key: "_getFilterNameFromOptions",
                          value: function (t, e) {
                            var n = t;
                            return (
                              "removeColor" === t
                                ? (n = bi()(e.useAlpha)
                                    ? "removeWhite"
                                    : "colorFilter")
                                : "blendColor" === t &&
                                  (n = {
                                    add: "blend",
                                    multiply: "multiply",
                                    tint: "tint",
                                  }[e.mode]),
                              n
                            );
                          },
                        },
                        {
                          key: "_changeFilterState",
                          value: function (t, e) {
                            var n =
                                !(
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                ) || arguments[2],
                              i = this.checkedMap[e].checked,
                              r = _i[e],
                              o = this.checkedMap[e].closest(
                                ".tui-image-editor-checkbox-group"
                              );
                            o &&
                              (i
                                ? o.classList.remove(
                                    "tui-image-editor-disabled"
                                  )
                                : o.classList.add("tui-image-editor-disabled")),
                              t(i, r, this._getFilterOption(e), !n);
                          },
                        },
                        {
                          key: "_getFilterOption",
                          value: function (t) {
                            var e = {};
                            switch (t) {
                              case "removeWhite":
                                (e.color = "#FFFFFF"),
                                  (e.useAlpha = !1),
                                  (e.distance = _n()(
                                    this._els.removewhiteDistanceRange.value
                                  ));
                                break;
                              case "colorFilter":
                                (e.color = "#FFFFFF"),
                                  (e.distance = _n()(
                                    this._els.colorfilterThresholdRange.value
                                  ));
                                break;
                              case "pixelate":
                                e.blocksize = Ue(this._els.pixelateRange.value);
                                break;
                              case "noise":
                                e.noise = Ue(this._els.noiseRange.value);
                                break;
                              case "brightness":
                                e.brightness = _n()(
                                  this._els.brightnessRange.value
                                );
                                break;
                              case "blend":
                                (e.mode = "add"),
                                  (e.color = this._els.filterBlendColor.color),
                                  (e.mode = this._els.blendType.value);
                                break;
                              case "multiply":
                                (e.mode = "multiply"),
                                  (e.color =
                                    this._els.filterMultiplyColor.color);
                                break;
                              case "tint":
                                (e.mode = "tint"),
                                  (e.color = this._els.filterTintColor.color),
                                  (e.alpha = this._els.tintOpacity.value);
                                break;
                              case "blur":
                                e.blur = this._els.blurRange.value;
                            }
                            return e;
                          },
                        },
                        {
                          key: "_makeControlElement",
                          value: function () {
                            (this._els = {
                              removewhiteDistanceRange: new Un(
                                {
                                  slider: this.selector(
                                    ".tie-removewhite-distance-range"
                                  ),
                                },
                                Ee.removewhiteDistanceRange
                              ),
                              brightnessRange: new Un(
                                {
                                  slider: this.selector(
                                    ".tie-brightness-range"
                                  ),
                                },
                                Ee.brightnessRange
                              ),
                              noiseRange: new Un(
                                { slider: this.selector(".tie-noise-range") },
                                Ee.noiseRange
                              ),
                              pixelateRange: new Un(
                                {
                                  slider: this.selector(".tie-pixelate-range"),
                                },
                                Ee.pixelateRange
                              ),
                              colorfilterThresholdRange: new Un(
                                {
                                  slider: this.selector(
                                    ".tie-colorfilter-threshold-range"
                                  ),
                                },
                                Ee.colorfilterThresholdRange
                              ),
                              filterTintColor: new $n(
                                this.selector(".tie-filter-tint-color"),
                                {
                                  defaultColor: "#03bd9e",
                                  toggleDirection: this.toggleDirection,
                                  usageStatistics: this.usageStatistics,
                                }
                              ),
                              filterMultiplyColor: new $n(
                                this.selector(".tie-filter-multiply-color"),
                                {
                                  defaultColor: "#515ce6",
                                  toggleDirection: this.toggleDirection,
                                  usageStatistics: this.usageStatistics,
                                }
                              ),
                              filterBlendColor: new $n(
                                this.selector(".tie-filter-blend-color"),
                                {
                                  defaultColor: "#ffbb3b",
                                  toggleDirection: this.toggleDirection,
                                  usageStatistics: this.usageStatistics,
                                }
                              ),
                              blurRange: Ee.blurFilterRange,
                            }),
                              (this._els.tintOpacity = this._pickerWithRange(
                                this._els.filterTintColor.pickerControl
                              )),
                              (this._els.blendType = this._pickerWithSelectbox(
                                this._els.filterBlendColor.pickerControl
                              )),
                              this.colorPickerControls.push(
                                this._els.filterTintColor
                              ),
                              this.colorPickerControls.push(
                                this._els.filterMultiplyColor
                              ),
                              this.colorPickerControls.push(
                                this._els.filterBlendColor
                              ),
                              (this.colorPickerInputBoxes = []),
                              this.colorPickerInputBoxes.push(
                                this._els.filterTintColor.colorpickerElement.querySelector(
                                  me
                                )
                              ),
                              this.colorPickerInputBoxes.push(
                                this._els.filterMultiplyColor.colorpickerElement.querySelector(
                                  me
                                )
                              ),
                              this.colorPickerInputBoxes.push(
                                this._els.filterBlendColor.colorpickerElement.querySelector(
                                  me
                                )
                              );
                          },
                        },
                        {
                          key: "_pickerWithRange",
                          value: function (t) {
                            var e = document.createElement("div"),
                              n = document.createElement("label"),
                              i = document.createElement("div");
                            return (
                              (i.id = "tie-filter-tint-opacity"),
                              (n.innerHTML = "Opacity"),
                              e.appendChild(n),
                              e.appendChild(i),
                              t.appendChild(e),
                              (t.style.height = "130px"),
                              new Un({ slider: i }, Ee.tintOpacityRange)
                            );
                          },
                        },
                        {
                          key: "_pickerWithSelectbox",
                          value: function (t) {
                            var e = document.createElement("div"),
                              n = document.createElement("select"),
                              i = document.createElement("ul");
                            return (
                              (e.className =
                                "tui-image-editor-selectlist-wrap"),
                              (i.className = "tui-image-editor-selectlist"),
                              e.appendChild(n),
                              e.appendChild(i),
                              this._makeSelectOptionList(n),
                              t.appendChild(e),
                              (t.style.height = "130px"),
                              this._drawSelectOptionList(n, i),
                              this._pickerWithSelectboxForAddEvent(n, i),
                              n
                            );
                          },
                        },
                        {
                          key: "_drawSelectOptionList",
                          value: function (t, e) {
                            var n = t.querySelectorAll("option");
                            $()(n, function (t) {
                              var n = document.createElement("li");
                              (n.innerHTML = t.innerHTML),
                                n.setAttribute("data-item", t.value),
                                e.appendChild(n);
                            });
                          },
                        },
                        {
                          key: "_pickerWithSelectboxForAddEvent",
                          value: function (t, e) {
                            var n = this;
                            e.addEventListener("click", function (i) {
                              var r = i.target.getAttribute("data-item"),
                                o = document.createEvent("HTMLEvents");
                              (t.querySelector(
                                '[value="'.concat(r, '"]')
                              ).selected = !0),
                                o.initEvent("change", !0, !0),
                                t.dispatchEvent(o),
                                (n.selectBoxShow = !1),
                                (e.style.display = "none");
                            }),
                              t.addEventListener("mousedown", function (i) {
                                i.preventDefault(),
                                  (n.selectBoxShow = !n.selectBoxShow),
                                  (e.style.display = n.selectBoxShow
                                    ? "block"
                                    : "none"),
                                  e.setAttribute("data-selectitem", t.value),
                                  e
                                    .querySelector(
                                      "[data-item='".concat(t.value, "']")
                                    )
                                    .classList.add("active");
                              });
                          },
                        },
                        {
                          key: "_makeSelectOptionList",
                          value: function (t) {
                            $()(gi, function (e) {
                              var n = document.createElement("option");
                              n.setAttribute("value", e),
                                (n.innerHTML = e.replace(
                                  /^[a-z]/,
                                  function (t) {
                                    return t.toUpperCase();
                                  }
                                )),
                                t.appendChild(n);
                            });
                          },
                        },
                      ]),
                      n
                    );
                  })(Vn),
                  wi = r(4383),
                  Ai = r.n(wi),
                  xi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t, i) {
                      var r,
                        o = i.locale,
                        a = i.makeSvgIcon;
                      return (
                        z(this, n),
                        (r = e.call(this, t, { name: "history" })),
                        t.classList.add("enabled"),
                        (r.locale = o),
                        (r.makeSvgIcon = a),
                        (r._eventHandler = {}),
                        (r._historyIndex = r.getListLength()),
                        r
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "add",
                          value: function (t) {
                            var e = t.name,
                              n = t.detail;
                            this._hasDisabledItem() &&
                              this.deleteListItemElement(
                                this._historyIndex + 1,
                                this.getListLength()
                              );
                            var i = (function (t) {
                                var e,
                                  n,
                                  i,
                                  r = t.locale,
                                  o = t.makeSvgIcon,
                                  a = t.name,
                                  s = t.detail;
                                return L()(
                                  (e = L()(
                                    (n = L()(
                                      (i =
                                        '\n    <div class="tui-image-editor-history-item history">\n        <div class="history-item-icon">\n            '.concat(
                                          o(
                                            ["normal", "active"],
                                            "history-".concat(a.toLowerCase()),
                                            !0
                                          ),
                                          "\n        </div>\n        <span>\n            "
                                        ))
                                    ).call(i, r.localize(a), "\n            "))
                                  ).call(
                                    n,
                                    s ? "(".concat(r.localize(s), ")") : "",
                                    '\n        </span>\n        <div class="history-item-checkbox">\n            '
                                  ))
                                ).call(
                                  e,
                                  o(["normal"], "history-check", !0),
                                  "\n        </div>\n    </div>\n"
                                );
                              })({
                                locale: this.locale,
                                makeSvgIcon: this.makeSvgIcon,
                                name: e,
                                detail: n,
                              }),
                              r = this.makeListItemElement(i);
                            this.pushListItemElement(r),
                              (this._historyIndex = this.getListLength() - 1),
                              this._selectItem(this._historyIndex);
                          },
                        },
                        {
                          key: "init",
                          value: function () {
                            this.deleteListItemElement(1, this.getListLength()),
                              (this._historyIndex = 0),
                              this._selectItem(this._historyIndex);
                          },
                        },
                        {
                          key: "clear",
                          value: function () {
                            this.deleteListItemElement(0, this.getListLength()),
                              (this._historyIndex = -1);
                          },
                        },
                        {
                          key: "prev",
                          value: function () {
                            (this._historyIndex -= 1),
                              this._selectItem(this._historyIndex);
                          },
                        },
                        {
                          key: "next",
                          value: function () {
                            (this._historyIndex += 1),
                              this._selectItem(this._historyIndex);
                          },
                        },
                        {
                          key: "_hasDisabledItem",
                          value: function () {
                            return (
                              this.getListLength() - 1 > this._historyIndex
                            );
                          },
                        },
                        {
                          key: "_addHistoryEventListener",
                          value: function () {
                            var t = this;
                            (this._eventHandler.history = function (e) {
                              return t._clickHistoryItem(e);
                            }),
                              this.listElement.addEventListener(
                                "click",
                                this._eventHandler.history
                              );
                          },
                        },
                        {
                          key: "_removeHistoryEventListener",
                          value: function () {
                            this.listElement.removeEventListener(
                              "click",
                              this._eventHandler.history
                            );
                          },
                        },
                        {
                          key: "_clickHistoryItem",
                          value: function (t) {
                            var e = t.target.closest(
                              ".".concat("history-item")
                            );
                            if (e) {
                              var n = Ai()(e.getAttribute("data-index"), 10);
                              if (n !== this._historyIndex) {
                                var i = Math.abs(n - this._historyIndex);
                                n < this._historyIndex
                                  ? this._actions.undo(i)
                                  : this._actions.redo(i);
                              }
                            }
                          },
                        },
                        {
                          key: "_selectItem",
                          value: function (t) {
                            for (var e = 0; e < this.getListLength(); e += 1)
                              this.removeClass(e, "selected-item"),
                                this.removeClass(e, "disabled-item"),
                                e > t && this.addClass(e, "disabled-item");
                            this.addClass(t, "selected-item");
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.removeEvent(), Ke(this);
                          },
                        },
                        {
                          key: "addEvent",
                          value: function (t) {
                            (this._actions = t),
                              this._addHistoryEventListener();
                          },
                        },
                        {
                          key: "removeEvent",
                          value: function () {
                            this._removeHistoryEventListener();
                          },
                        },
                      ]),
                      n
                    );
                  })(
                    (function () {
                      function t(e, n) {
                        var i = n.name;
                        z(this, t),
                          (this.name = i),
                          (this.items = []),
                          (this.panelElement = this._makePanelElement()),
                          (this.listElement = this._makeListElement()),
                          this.panelElement.appendChild(this.listElement),
                          e.appendChild(this.panelElement);
                      }
                      return (
                        k(t, [
                          {
                            key: "_makePanelElement",
                            value: function () {
                              var t = document.createElement("div");
                              return (
                                (t.className = "tie-panel-".concat(this.name)),
                                t
                              );
                            },
                          },
                          {
                            key: "_makeListElement",
                            value: function () {
                              var t = document.createElement("ol");
                              return (
                                (t.className = "".concat(this.name, "-list")), t
                              );
                            },
                          },
                          {
                            key: "makeListItemElement",
                            value: function (t) {
                              var e = document.createElement("li");
                              return (
                                (e.innerHTML = t),
                                (e.className = "".concat(this.name, "-item")),
                                e.setAttribute("data-index", this.items.length),
                                e
                              );
                            },
                          },
                          {
                            key: "pushListItemElement",
                            value: function (t) {
                              this.listElement.appendChild(t),
                                (this.listElement.scrollTop += t.offsetHeight),
                                this.items.push(t);
                            },
                          },
                          {
                            key: "deleteListItemElement",
                            value: function (t, e) {
                              for (var n = this.items, i = t; i < e; i += 1)
                                this.listElement.removeChild(n[i]);
                              s()(n).call(n, t, e - t + 1);
                            },
                          },
                          {
                            key: "getListLength",
                            value: function () {
                              return this.items.length;
                            },
                          },
                          {
                            key: "addClass",
                            value: function (t, e) {
                              this.items[t] && this.items[t].classList.add(e);
                            },
                          },
                          {
                            key: "removeClass",
                            value: function (t, e) {
                              this.items[t] &&
                                this.items[t].classList.remove(e);
                            },
                          },
                          {
                            key: "toggleClass",
                            value: function (t, e) {
                              this.items[t] &&
                                this.items[t].classList.toggle(e);
                            },
                          },
                        ]),
                        t
                      );
                    })()
                  ),
                  zi = (function () {
                    function t(e) {
                      z(this, t), (this._locale = e);
                    }
                    return (
                      k(t, [
                        {
                          key: "localize",
                          value: function (t) {
                            return this._locale[t] || t;
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  Ci = {
                    Shape: Zn,
                    Crop: Qn,
                    Resize: ei,
                    Flip: ii,
                    Rotate: oi,
                    Text: si,
                    Mask: ci,
                    Icon: ui,
                    Draw: hi,
                    Filter: Oi,
                  },
                  ki = "zoomIn",
                  Si = "hand",
                  Ti = (function () {
                    function t(e, n, i) {
                      z(this, t),
                        (this.options = this._initializeOption(n)),
                        (this._actions = i),
                        (this.submenu = !1),
                        (this.imageSize = {}),
                        (this.uiSize = {}),
                        (this._locale = new zi(this.options.locale)),
                        (this.theme = new An(this.options.theme)),
                        (this.eventHandler = {}),
                        (this._submenuChangeTransection = !1),
                        (this._selectedElement = null),
                        (this._mainElement = null),
                        (this._editorElementWrap = null),
                        (this._editorElement = null),
                        (this._menuBarElement = null),
                        (this._subMenuElement = null),
                        this._makeUiElement(e),
                        this._setUiSize(),
                        (this._initMenuEvent = !1),
                        this._makeSubMenu(),
                        this._attachHistoryEvent(),
                        this._attachZoomEvent();
                    }
                    return (
                      k(t, [
                        {
                          key: "destroy",
                          value: function () {
                            this._removeUiEvent(),
                              this._destroyAllMenu(),
                              (this._selectedElement.innerHTML = ""),
                              Ke(this);
                          },
                        },
                        {
                          key: "setUiDefaultSelectionStyle",
                          value: function (t) {
                            return W()(
                              {
                                applyCropSelectionStyle: !0,
                                applyGroupSelectionStyle: !0,
                                selectionStyle: {
                                  cornerStyle: "circle",
                                  cornerSize: 16,
                                  cornerColor: "#fff",
                                  cornerStrokeColor: "#fff",
                                  transparentCorners: !1,
                                  lineWidth: 2,
                                  borderColor: "#fff",
                                },
                              },
                              t
                            );
                          },
                        },
                        {
                          key: "resizeEditor",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              e = t.uiSize,
                              n = t.imageSize,
                              i = void 0 === n ? this.imageSize : n;
                            i !== this.imageSize && (this.imageSize = i),
                              e && this._setUiSize(e);
                            var r = this._getCanvasMaxDimension(),
                              o = r.width,
                              a = r.height,
                              s = this._editorElement.style,
                              l = this.options.menuBarPosition;
                            (s.height = "".concat(a, "px")),
                              (s.width = "".concat(o, "px")),
                              this._setEditorPosition(l),
                              (this._editorElementWrap.style.bottom = "0px"),
                              (this._editorElementWrap.style.top = "0px"),
                              (this._editorElementWrap.style.left = "0px"),
                              (this._editorElementWrap.style.width = "100%");
                            var c = this._selectedElement.classList;
                            "top" === l &&
                            this._selectedElement.offsetWidth < "1300"
                              ? c.add("tui-image-editor-top-optimization")
                              : c.remove("tui-image-editor-top-optimization");
                          },
                        },
                        {
                          key: "toggleZoomButtonStatus",
                          value: function (t) {
                            this._buttonElements[t].classList.toggle("on"),
                              t === ki
                                ? this._buttonElements[Si].classList.remove(
                                    "on"
                                  )
                                : this._buttonElements[ki].classList.remove(
                                    "on"
                                  );
                          },
                        },
                        {
                          key: "offZoomInButtonStatus",
                          value: function () {
                            this._buttonElements[ki].classList.remove("on");
                          },
                        },
                        {
                          key: "changeHandButtonStatus",
                          value: function (t) {
                            this._buttonElements[Si].classList[
                              t ? "add" : "remove"
                            ]("on");
                          },
                        },
                        {
                          key: "changeHelpButtonEnabled",
                          value: function (t, e) {
                            this._buttonElements[t].classList[
                              e ? "add" : "remove"
                            ]("enabled");
                          },
                        },
                        {
                          key: "_initializeOption",
                          value: function (t) {
                            return W()(
                              {
                                loadImage: { path: "", name: "" },
                                locale: {},
                                menuIconPath: "",
                                menu: [
                                  "resize",
                                  "crop",
                                  "flip",
                                  "rotate",
                                  "draw",
                                  "shape",
                                  "icon",
                                  "text",
                                  "mask",
                                  "filter",
                                ],
                                initMenu: "",
                                uiSize: { width: "100%", height: "100%" },
                                menuBarPosition: "bottom",
                              },
                              t
                            );
                          },
                        },
                        {
                          key: "_setUiSize",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : this.options.uiSize,
                              e = this._selectedElement.style;
                            (e.width = t.width), (e.height = t.height);
                          },
                        },
                        {
                          key: "_makeSubMenu",
                          value: function () {
                            var t = this;
                            $()(this.options.menu, function (e) {
                              var n,
                                i =
                                  Ci[
                                    e.replace(/^[a-z]/, function (t) {
                                      return t.toUpperCase();
                                    })
                                  ];
                              t._makeMenuElement(e),
                                (t._buttonElements[e] =
                                  t._menuBarElement.querySelector(
                                    ".tie-btn-".concat(e)
                                  )),
                                (t[e] = new i(t._subMenuElement, {
                                  locale: t._locale,
                                  makeSvgIcon: T()(
                                    (n = t.theme.makeMenSvgIconSet)
                                  ).call(n, t.theme),
                                  menuBarPosition: t.options.menuBarPosition,
                                  usageStatistics: t.options.usageStatistics,
                                }));
                            });
                          },
                        },
                        {
                          key: "_attachHistoryEvent",
                          value: function () {
                            var t, e, n;
                            this.on(
                              se,
                              T()((t = this._addHistory)).call(t, this)
                            ),
                              this.on(
                                le,
                                T()((e = this._selectPrevHistory)).call(e, this)
                              ),
                              this.on(
                                ce,
                                T()((n = this._selectNextHistory)).call(n, this)
                              );
                          },
                        },
                        {
                          key: "_attachZoomEvent",
                          value: function () {
                            var t = this;
                            this.on(de, function () {
                              t.offZoomInButtonStatus(),
                                t.changeHandButtonStatus(!0);
                            }),
                              this.on(ue, function () {
                                return t.changeHandButtonStatus(!1);
                              });
                          },
                        },
                        {
                          key: "_makeUiElement",
                          value: function (t) {
                            var e, n;
                            n = t.nodeType ? t : document.querySelector(t);
                            var i,
                              r =
                                ((i = n),
                                function (t) {
                                  return i.querySelector(t);
                                });
                            n.classList.add("tui-image-editor-container"),
                              (n.innerHTML =
                                (function (t) {
                                  var e,
                                    n,
                                    i,
                                    r,
                                    o,
                                    a,
                                    s = t.locale,
                                    l = t.biImage,
                                    c = t.loadButtonStyle,
                                    d = t.downloadButtonStyle,
                                    u = t.menuBarPosition;
                                  return L()(
                                    (e = L()(
                                      (n = L()(
                                        (i = L()(
                                          (r = L()(
                                            (o =
                                              '\n    <ul class="tui-image-editor-help-menu '.concat(
                                                ((a = u),
                                                "top" === a
                                                  ? "bottom"
                                                  : "left" === a
                                                  ? "right"
                                                  : "right" === a
                                                  ? "left"
                                                  : "top"),
                                                '"></ul>\n    <div class="tui-image-editor-controls">\n        <div class="tui-image-editor-controls-logo">\n            <img src="'
                                              ))
                                          ).call(
                                            o,
                                            l,
                                            '" />\n        </div>\n        <ul class="tui-image-editor-menu"></ul>\n\n        <div class="tui-image-editor-controls-buttons">\n            <div style="'
                                          ))
                                        ).call(r, c, '">\n                '))
                                      ).call(
                                        i,
                                        s.localize("Load"),
                                        '\n                <input type="file" class="tui-image-editor-load-btn" />\n            </div>\n            <button class="tui-image-editor-download-btn" style="'
                                      ))
                                    ).call(n, d, '">\n                '))
                                  ).call(
                                    e,
                                    s.localize("Download"),
                                    "\n            </button>\n        </div>\n    </div>\n"
                                  );
                                })({
                                  locale: this._locale,
                                  biImage: this.theme.getStyle("common.bi"),
                                  loadButtonStyle:
                                    this.theme.getStyle("loadButton"),
                                  downloadButtonStyle:
                                    this.theme.getStyle("downloadButton"),
                                  menuBarPosition: this.options.menuBarPosition,
                                }) +
                                (function (t) {
                                  var e,
                                    n,
                                    i,
                                    r,
                                    o,
                                    a,
                                    s,
                                    l = t.locale,
                                    c = t.biImage,
                                    d = t.commonStyle,
                                    u = t.headerStyle,
                                    p = t.loadButtonStyle,
                                    h = t.downloadButtonStyle,
                                    f = t.submenuStyle;
                                  return L()(
                                    (e = L()(
                                      (n = L()(
                                        (i = L()(
                                          (r = L()(
                                            (o = L()(
                                              (a = L()(
                                                (s =
                                                  '\n    <div class="tui-image-editor-main-container" style="'.concat(
                                                    d,
                                                    '">\n        <div class="tui-image-editor-header" style="'
                                                  ))
                                              ).call(
                                                s,
                                                u,
                                                '">\n            <div class="tui-image-editor-header-logo">\n                <img src="'
                                              ))
                                            ).call(
                                              a,
                                              c,
                                              '" />\n            </div>\n            <div class="tui-image-editor-header-buttons">\n                <div style="'
                                            ))
                                          ).call(
                                            o,
                                            p,
                                            '">\n                    '
                                          ))
                                        ).call(
                                          r,
                                          l.localize("Load"),
                                          '\n                    <input type="file" class="tui-image-editor-load-btn" />\n                </div>\n                <button class="tui-image-editor-download-btn" style="'
                                        ))
                                      ).call(i, h, '">\n                    '))
                                    ).call(
                                      n,
                                      l.localize("Download"),
                                      '\n                </button>\n            </div>\n        </div>\n        <div class="tui-image-editor-main">\n            <div class="tui-image-editor-submenu">\n                <div class="tui-image-editor-submenu-style" style="'
                                    ))
                                  ).call(
                                    e,
                                    f,
                                    '"></div>\n            </div>\n            <div class="tui-image-editor-wrap">\n                <div class="tui-image-editor-size-wrap">\n                    <div class="tui-image-editor-align-wrap">\n                        <div class="tui-image-editor"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n'
                                  );
                                })({
                                  locale: this._locale,
                                  biImage: this.theme.getStyle("common.bi"),
                                  commonStyle: this.theme.getStyle("common"),
                                  headerStyle: this.theme.getStyle("header"),
                                  loadButtonStyle:
                                    this.theme.getStyle("loadButton"),
                                  downloadButtonStyle:
                                    this.theme.getStyle("downloadButton"),
                                  submenuStyle: this.theme.getStyle("submenu"),
                                })),
                              (this._selectedElement = n),
                              this._selectedElement.classList.add(
                                this.options.menuBarPosition
                              ),
                              (this._mainElement = r(".tui-image-editor-main")),
                              (this._editorElementWrap = r(
                                ".tui-image-editor-wrap"
                              )),
                              (this._editorElement = r(".tui-image-editor")),
                              (this._helpMenuBarElement = r(
                                ".tui-image-editor-help-menu"
                              )),
                              (this._menuBarElement = r(
                                ".tui-image-editor-menu"
                              )),
                              (this._subMenuElement = r(
                                ".tui-image-editor-submenu"
                              )),
                              (this._buttonElements = {
                                download:
                                  this._selectedElement.querySelectorAll(
                                    ".tui-image-editor-download-btn"
                                  ),
                                load: this._selectedElement.querySelectorAll(
                                  ".tui-image-editor-load-btn"
                                ),
                              }),
                              this._addHelpMenus(),
                              (this._historyMenu = new xi(
                                this._buttonElements.history,
                                {
                                  locale: this._locale,
                                  makeSvgIcon: T()(
                                    (e = this.theme.makeMenSvgIconSet)
                                  ).call(e, this.theme),
                                }
                              )),
                              this._activateZoomMenus();
                          },
                        },
                        {
                          key: "_activateZoomMenus",
                          value: function () {
                            var t = this;
                            $()(dt, function (e) {
                              t.changeHelpButtonEnabled(e, !0);
                            });
                          },
                        },
                        {
                          key: "_makeHelpMenuWithPartition",
                          value: function () {
                            var t;
                            return L()((t = [])).call(
                              t,
                              w(dt),
                              [""],
                              w(ut),
                              [""],
                              w(pt)
                            );
                          },
                        },
                        {
                          key: "_addHelpMenus",
                          value: function () {
                            var t = this,
                              e = this._makeHelpMenuWithPartition();
                            $()(e, function (e) {
                              e
                                ? (t._makeMenuElement(
                                    e,
                                    ["normal", "disabled", "hover"],
                                    "help"
                                  ),
                                  (t._buttonElements[e] =
                                    t._helpMenuBarElement.querySelector(
                                      ".tie-btn-".concat(e)
                                    )))
                                : t._makeMenuPartitionElement();
                            });
                          },
                        },
                        {
                          key: "_makeMenuPartitionElement",
                          value: function () {
                            var t = document.createElement("li"),
                              e = document.createElement("div");
                            (t.className = Ze("item")),
                              (e.className = Ze("icpartition")),
                              t.appendChild(e),
                              this._helpMenuBarElement.appendChild(t);
                          },
                        },
                        {
                          key: "_makeMenuElement",
                          value: function (t) {
                            var e,
                              n,
                              i =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : ["normal", "active", "hover"],
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : "normal",
                              o = document.createElement("li"),
                              a = this.theme.makeMenSvgIconSet(i, t);
                            this._addTooltipAttribute(o, t),
                              (o.className = L()(
                                (e = L()((n = "tie-btn-".concat(t, " "))).call(
                                  n,
                                  Ze("item"),
                                  " "
                                ))
                              ).call(e, r)),
                              (o.innerHTML = a),
                              "normal" === r
                                ? this._menuBarElement.appendChild(o)
                                : this._helpMenuBarElement.appendChild(o);
                          },
                        },
                        {
                          key: "_addHelpActionEvent",
                          value: function () {
                            var t = this;
                            $()(ht, function (e) {
                              (t.eventHandler[e] = function (n) {
                                return t._actions.main[e](n);
                              }),
                                t._buttonElements[e].addEventListener(
                                  "click",
                                  t.eventHandler[e]
                                );
                            });
                          },
                        },
                        {
                          key: "_removeHelpActionEvent",
                          value: function () {
                            var t = this;
                            $()(ht, function (e) {
                              t._buttonElements[e].removeEventListener(
                                "click",
                                t.eventHandler[e]
                              );
                            });
                          },
                        },
                        {
                          key: "_addHistory",
                          value: function (t) {
                            if (
                              !(function (t) {
                                return "string" == typeof t
                                  ? Ct === t
                                  : Ct === t.name;
                              })(t)
                            ) {
                              var e =
                                "string" == typeof t
                                  ? { name: t }
                                  : (function (t) {
                                      var e,
                                        n,
                                        i,
                                        r = t.name,
                                        o = t.args;
                                      switch (r) {
                                        case "flip":
                                          i = {
                                            name: r,
                                            detail:
                                              "reset" === o[1]
                                                ? o[1]
                                                : u()((e = o[1])).call(e, 4),
                                          };
                                          break;
                                        case "rotate":
                                          i = { name: r, detail: o[2] };
                                          break;
                                        case "applyFilter":
                                          i = {
                                            name: "Filter",
                                            detail: an(o[1], o[2]),
                                          };
                                          break;
                                        case "removeFilter":
                                          i = {
                                            name: "Filter",
                                            detail: "Remove",
                                          };
                                          break;
                                        case "changeShape":
                                          i = {
                                            name: "Shape",
                                            detail: "Change",
                                          };
                                          break;
                                        case "changeIconColor":
                                          i = {
                                            name: "Icon",
                                            detail: "Change",
                                          };
                                          break;
                                        case "changeTextStyle":
                                          i = {
                                            name: "Text",
                                            detail: "Change",
                                          };
                                          break;
                                        case "removeObject":
                                          i = { name: "Delete", detail: o[2] };
                                          break;
                                        case "clearObjects":
                                          i = { name: "Delete", detail: "All" };
                                          break;
                                        case "addImageObject":
                                          i = { name: "Mask", detail: "Add" };
                                          break;
                                        case "addText":
                                          i = { name: "Text" };
                                          break;
                                        case "resize":
                                          i = {
                                            name: "Resize",
                                            detail: L()(
                                              (n = "".concat(~~o[1].width, "x"))
                                            ).call(n, ~~o[1].height),
                                          };
                                          break;
                                        default:
                                          i = { name: r };
                                      }
                                      return (
                                        "mask" === o[1] &&
                                          (i = { name: ve, detail: "Apply" }),
                                        i
                                      );
                                    })(t);
                              this._historyMenu.add(e);
                            }
                          },
                        },
                        {
                          key: "initHistory",
                          value: function () {
                            this._historyMenu.init();
                          },
                        },
                        {
                          key: "clearHistory",
                          value: function () {
                            this._historyMenu.clear();
                          },
                        },
                        {
                          key: "_selectPrevHistory",
                          value: function () {
                            this._historyMenu.prev();
                          },
                        },
                        {
                          key: "_selectNextHistory",
                          value: function () {
                            this._historyMenu.next();
                          },
                        },
                        {
                          key: "toggleHistoryMenu",
                          value: function (t) {
                            t.target.closest(".".concat("tie-panel-history")) ||
                              this._buttonElements.history.classList.toggle(
                                "opened"
                              );
                          },
                        },
                        {
                          key: "_addTooltipAttribute",
                          value: function (t, e) {
                            t.setAttribute(
                              "tooltip-content",
                              this._locale.localize(
                                e.replace(/^[a-z]/g, function (t) {
                                  return t.toUpperCase();
                                })
                              )
                            );
                          },
                        },
                        {
                          key: "_addDownloadEvent",
                          value: function () {
                            var t = this;
                            (this.eventHandler.download = function () {
                              return t._actions.main.download();
                            }),
                              $()(this._buttonElements.download, function (e) {
                                e.addEventListener(
                                  "click",
                                  t.eventHandler.download
                                );
                              });
                          },
                        },
                        {
                          key: "_removeDownloadEvent",
                          value: function () {
                            var t = this;
                            $()(this._buttonElements.download, function (e) {
                              e.removeEventListener(
                                "click",
                                t.eventHandler.download
                              );
                            });
                          },
                        },
                        {
                          key: "_addLoadEvent",
                          value: function () {
                            var t = this;
                            (this.eventHandler.loadImage = function (e) {
                              return t._actions.main.load(e.target.files[0]);
                            }),
                              $()(this._buttonElements.load, function (e) {
                                e.addEventListener(
                                  "change",
                                  t.eventHandler.loadImage
                                );
                              });
                          },
                        },
                        {
                          key: "_removeLoadEvent",
                          value: function () {
                            var t = this;
                            $()(this._buttonElements.load, function (e) {
                              e.removeEventListener(
                                "change",
                                t.eventHandler.loadImage
                              );
                            });
                          },
                        },
                        {
                          key: "_addMainMenuEvent",
                          value: function (t) {
                            var e = this;
                            (this.eventHandler[t] = function () {
                              return e.changeMenu(t);
                            }),
                              this._buttonElements[t].addEventListener(
                                "click",
                                this.eventHandler[t]
                              );
                          },
                        },
                        {
                          key: "_addSubMenuEvent",
                          value: function (t) {
                            var e = this;
                            this[t].addEvent(this._actions[t]),
                              this[t].on(pe, function () {
                                return e.fire(pe);
                              }),
                              this[t].on(he, function () {
                                return e.fire(he);
                              });
                          },
                        },
                        {
                          key: "_addMenuEvent",
                          value: function () {
                            var t = this;
                            $()(this.options.menu, function (e) {
                              t._addMainMenuEvent(e), t._addSubMenuEvent(e);
                            });
                          },
                        },
                        {
                          key: "_removeMainMenuEvent",
                          value: function () {
                            var t = this;
                            $()(this.options.menu, function (e) {
                              t._buttonElements[e].removeEventListener(
                                "click",
                                t.eventHandler[e]
                              ),
                                t[e].off(pe),
                                t[e].off(he);
                            });
                          },
                        },
                        {
                          key: "getEditorArea",
                          value: function () {
                            return this._editorElement;
                          },
                        },
                        {
                          key: "activeMenuEvent",
                          value: function () {
                            this._initMenuEvent ||
                              (this._addHelpActionEvent(),
                              this._addDownloadEvent(),
                              this._addMenuEvent(),
                              this._initMenu(),
                              this._historyMenu.addEvent(this._actions.history),
                              (this._initMenuEvent = !0));
                          },
                        },
                        {
                          key: "_removeUiEvent",
                          value: function () {
                            this._removeHelpActionEvent(),
                              this._removeDownloadEvent(),
                              this._removeLoadEvent(),
                              this._removeMainMenuEvent(),
                              this._historyMenu.removeEvent();
                          },
                        },
                        {
                          key: "_destroyAllMenu",
                          value: function () {
                            var t = this;
                            $()(this.options.menu, function (e) {
                              t[e].destroy();
                            }),
                              this._historyMenu.destroy();
                          },
                        },
                        {
                          key: "initCanvas",
                          value: function () {
                            var t = this,
                              e = this._getLoadImage();
                            e.path &&
                              this._actions.main
                                .initLoadImage(e.path, e.name)
                                .then(function () {
                                  t.activeMenuEvent();
                                }),
                              this._addLoadEvent();
                            var n = document.createElement("div");
                            (n.className = Ze("grid-visual")),
                              (n.innerHTML =
                                '<table>\n           <tr><td class="dot left-top"></td><td></td><td class="dot right-top"></td></tr>\n           <tr><td></td><td></td><td></td></tr>\n           <tr><td class="dot left-bottom"></td><td></td><td class="dot right-bottom"></td></tr>\n         </table>'),
                              (this._editorContainerElement =
                                this._editorElement.querySelector(
                                  ".tui-image-editor-canvas-container"
                                )),
                              this._editorContainerElement.appendChild(n);
                          },
                        },
                        {
                          key: "_getLoadImage",
                          value: function () {
                            return this.options.loadImage;
                          },
                        },
                        {
                          key: "changeMenu",
                          value: function (t) {
                            var e =
                                !(
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                ) || arguments[1],
                              n =
                                !(
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                ) || arguments[2];
                            this._submenuChangeTransection ||
                              ((this._submenuChangeTransection = !0),
                              this._changeMenu(t, e, n),
                              (this._submenuChangeTransection = !1));
                          },
                        },
                        {
                          key: "_changeMenu",
                          value: function (t, e, n) {
                            this.submenu &&
                              (this._buttonElements[
                                this.submenu
                              ].classList.remove("active"),
                              this._mainElement.classList.remove(
                                "tui-image-editor-menu-".concat(this.submenu)
                              ),
                              n && this._actions.main.discardSelection(),
                              this._actions.main.changeSelectableAll(!0),
                              this[this.submenu].changeStandbyMode()),
                              this.submenu === t && e
                                ? (this.submenu = null)
                                : (this._buttonElements[t].classList.add(
                                    "active"
                                  ),
                                  this._mainElement.classList.add(
                                    "tui-image-editor-menu-".concat(t)
                                  ),
                                  (this.submenu = t),
                                  this[this.submenu].changeStartMode()),
                              this.resizeEditor();
                          },
                        },
                        {
                          key: "_initMenu",
                          value: function () {
                            if (this.options.initMenu) {
                              var t = document.createEvent("MouseEvents");
                              t.initEvent("click", !0, !1),
                                this._buttonElements[
                                  this.options.initMenu
                                ].dispatchEvent(t);
                            }
                            this.icon && this.icon.registerDefaultIcon();
                          },
                        },
                        {
                          key: "_getCanvasMaxDimension",
                          value: function () {
                            var t = this._editorContainerElement.style,
                              e = t.maxWidth,
                              n = t.maxHeight;
                            return { width: _n()(e), height: _n()(n) };
                          },
                        },
                        {
                          key: "_setEditorPosition",
                          value: function (t) {
                            var e = this._getCanvasMaxDimension(),
                              n = e.width,
                              i = e.height,
                              r = this._editorElement.style,
                              o = 0,
                              a = 0;
                            this.submenu &&
                              ("bottom" === t
                                ? (o =
                                    i >
                                    this._editorElementWrap.scrollHeight - 150
                                      ? (i -
                                          this._editorElementWrap
                                            .scrollHeight) /
                                        2
                                      : -75)
                                : "top" === t
                                ? (o =
                                    i >
                                    this._editorElementWrap.offsetHeight - 150
                                      ? 75 -
                                        (i -
                                          (this._editorElementWrap
                                            .offsetHeight -
                                            150)) /
                                          2
                                      : 75)
                                : "left" === t
                                ? (a =
                                    n >
                                    this._editorElementWrap.offsetWidth - 248
                                      ? 124 -
                                        (n -
                                          (this._editorElementWrap.offsetWidth -
                                            248)) /
                                          2
                                      : 124)
                                : "right" === t &&
                                  (a =
                                    n >
                                    this._editorElementWrap.scrollWidth - 248
                                      ? (n -
                                          this._editorElementWrap.scrollWidth) /
                                        2
                                      : -124)),
                              (r.top = "".concat(o, "px")),
                              (r.left = "".concat(a, "px"));
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(Ti);
                var Di = Ti,
                  Li = r(381),
                  qi = r.n(Li),
                  Ei = (function () {
                    function t() {
                      z(this, t),
                        (this.versionnumber = "1.2.4"),
                        (this.optionpresets = {
                          default: {
                            corsenabled: !1,
                            ltres: 1,
                            qtres: 1,
                            pathomit: 8,
                            rightangleenhance: !0,
                            colorsampling: 2,
                            numberofcolors: 16,
                            mincolorratio: 0,
                            colorquantcycles: 3,
                            layering: 0,
                            strokewidth: 1,
                            linefilter: !1,
                            scale: 1,
                            roundcoords: 1,
                            viewbox: !1,
                            desc: !1,
                            lcpr: 0,
                            qcpr: 0,
                            blurradius: 0,
                            blurdelta: 20,
                          },
                          posterized1: { colorsampling: 0, numberofcolors: 2 },
                          posterized2: { numberofcolors: 4, blurradius: 5 },
                          curvy: {
                            ltres: 0.01,
                            linefilter: !0,
                            rightangleenhance: !1,
                          },
                          sharp: { qtres: 0.01, linefilter: !1 },
                          detailed: {
                            pathomit: 0,
                            roundcoords: 2,
                            ltres: 0.5,
                            qtres: 0.5,
                            numberofcolors: 64,
                          },
                          smoothed: { blurradius: 5, blurdelta: 64 },
                          grayscale: {
                            colorsampling: 0,
                            colorquantcycles: 1,
                            numberofcolors: 7,
                          },
                          fixedpalette: {
                            colorsampling: 0,
                            colorquantcycles: 1,
                            numberofcolors: 27,
                          },
                          randomsampling1: {
                            colorsampling: 1,
                            numberofcolors: 8,
                          },
                          randomsampling2: {
                            colorsampling: 1,
                            numberofcolors: 64,
                          },
                          artistic1: {
                            colorsampling: 0,
                            colorquantcycles: 1,
                            pathomit: 0,
                            blurradius: 5,
                            blurdelta: 64,
                            ltres: 0.01,
                            linefilter: !0,
                            numberofcolors: 16,
                            strokewidth: 2,
                          },
                          artistic2: {
                            qtres: 0.01,
                            colorsampling: 0,
                            colorquantcycles: 1,
                            numberofcolors: 4,
                            strokewidth: 0,
                          },
                          artistic3: {
                            qtres: 10,
                            ltres: 10,
                            numberofcolors: 8,
                          },
                          artistic4: {
                            qtres: 10,
                            ltres: 10,
                            numberofcolors: 64,
                            blurradius: 5,
                            blurdelta: 256,
                            strokewidth: 2,
                          },
                          posterized3: {
                            ltres: 1,
                            qtres: 1,
                            pathomit: 20,
                            rightangleenhance: !0,
                            colorsampling: 0,
                            numberofcolors: 3,
                            mincolorratio: 0,
                            colorquantcycles: 3,
                            blurradius: 3,
                            blurdelta: 20,
                            strokewidth: 0,
                            linefilter: !1,
                            roundcoords: 1,
                            pal: [
                              { r: 0, g: 0, b: 100, a: 255 },
                              { r: 255, g: 255, b: 255, a: 255 },
                            ],
                          },
                        }),
                        (this.pathscan_combined_lookup = [
                          [
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [0, 1, 0, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [0, 2, -1, 0],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [0, 1, 0, -1],
                            [0, 0, 1, 0],
                          ],
                          [
                            [0, 0, 1, 0],
                            [-1, -1, -1, -1],
                            [0, 2, -1, 0],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [0, 0, 1, 0],
                            [0, 3, 0, 1],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [13, 3, 0, 1],
                            [13, 2, -1, 0],
                            [7, 1, 0, -1],
                            [7, 0, 1, 0],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [0, 1, 0, -1],
                            [-1, -1, -1, -1],
                            [0, 3, 0, 1],
                          ],
                          [
                            [0, 3, 0, 1],
                            [0, 2, -1, 0],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [0, 3, 0, 1],
                            [0, 2, -1, 0],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [0, 1, 0, -1],
                            [-1, -1, -1, -1],
                            [0, 3, 0, 1],
                          ],
                          [
                            [11, 1, 0, -1],
                            [14, 0, 1, 0],
                            [14, 3, 0, 1],
                            [11, 2, -1, 0],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [0, 0, 1, 0],
                            [0, 3, 0, 1],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [0, 0, 1, 0],
                            [-1, -1, -1, -1],
                            [0, 2, -1, 0],
                            [-1, -1, -1, -1],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [0, 1, 0, -1],
                            [0, 0, 1, 0],
                          ],
                          [
                            [0, 1, 0, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [0, 2, -1, 0],
                          ],
                          [
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                            [-1, -1, -1, -1],
                          ],
                        ]),
                        (this.gks = [
                          [0.27901, 0.44198, 0.27901],
                          [0.135336, 0.228569, 0.272192, 0.228569, 0.135336],
                          [
                            0.086776, 0.136394, 0.178908, 0.195843, 0.178908,
                            0.136394, 0.086776,
                          ],
                          [
                            0.063327, 0.093095, 0.122589, 0.144599, 0.152781,
                            0.144599, 0.122589, 0.093095, 0.063327,
                          ],
                          [
                            0.049692, 0.069304, 0.089767, 0.107988, 0.120651,
                            0.125194, 0.120651, 0.107988, 0.089767, 0.069304,
                            0.049692,
                          ],
                        ]),
                        (this.specpalette = [
                          { r: 0, g: 0, b: 0, a: 255 },
                          { r: 128, g: 128, b: 128, a: 255 },
                          { r: 0, g: 0, b: 128, a: 255 },
                          { r: 64, g: 64, b: 128, a: 255 },
                          { r: 192, g: 192, b: 192, a: 255 },
                          { r: 255, g: 255, b: 255, a: 255 },
                          { r: 128, g: 128, b: 192, a: 255 },
                          { r: 0, g: 0, b: 192, a: 255 },
                          { r: 128, g: 0, b: 0, a: 255 },
                          { r: 128, g: 64, b: 64, a: 255 },
                          { r: 128, g: 0, b: 128, a: 255 },
                          { r: 168, g: 168, b: 168, a: 255 },
                          { r: 192, g: 128, b: 128, a: 255 },
                          { r: 192, g: 0, b: 0, a: 255 },
                          { r: 255, g: 255, b: 255, a: 255 },
                          { r: 0, g: 128, b: 0, a: 255 },
                        ]);
                    }
                    return (
                      k(
                        t,
                        [
                          {
                            key: "imageToSVG",
                            value: function (t, e, n) {
                              var i = this;
                              (n = this.checkoptions(n)),
                                this.loadImage(
                                  t,
                                  function (t) {
                                    e(i.imagedataToSVG(i.getImgdata(t), n));
                                  },
                                  n
                                );
                            },
                          },
                          {
                            key: "imagedataToSVG",
                            value: function (t, e) {
                              e = this.checkoptions(e);
                              var n = this.imagedataToTracedata(t, e);
                              return this.getsvgstring(n, e);
                            },
                          },
                          {
                            key: "imageToTracedata",
                            value: function (t, e, n) {
                              var i = this;
                              (n = this.checkoptions(n)),
                                this.loadImage(
                                  t,
                                  function (t) {
                                    e(
                                      i.imagedataToTracedata(i.getImgdata(t), n)
                                    );
                                  },
                                  n
                                );
                            },
                          },
                          {
                            key: "imagedataToTracedata",
                            value: function (t, e) {
                              e = this.checkoptions(e);
                              var n,
                                i = this.colorquantization(t, e);
                              if (0 === e.layering) {
                                n = {
                                  layers: [],
                                  palette: i.palette,
                                  width: i.array[0].length - 2,
                                  height: i.array.length - 2,
                                };
                                for (var r = 0; r < i.palette.length; r += 1) {
                                  var o = this.batchtracepaths(
                                    this.internodes(
                                      this.pathscan(
                                        this.layeringstep(i, r),
                                        e.pathomit
                                      ),
                                      e
                                    ),
                                    e.ltres,
                                    e.qtres
                                  );
                                  n.layers.push(o);
                                }
                              } else {
                                var a = this.layering(i);
                                e.layercontainerid &&
                                  this.drawLayers(
                                    a,
                                    this.specpalette,
                                    e.scale,
                                    e.layercontainerid
                                  );
                                var s = this.batchpathscan(a, e.pathomit),
                                  l = this.batchinternodes(s, e);
                                n = {
                                  layers: this.batchtracelayers(
                                    l,
                                    e.ltres,
                                    e.qtres
                                  ),
                                  palette: i.palette,
                                  width: t.width,
                                  height: t.height,
                                };
                              }
                              return n;
                            },
                          },
                          {
                            key: "checkoptions",
                            value: function (t) {
                              "string" == typeof (t = t || {}) &&
                                ((t = t.toLowerCase()),
                                (t = this.optionpresets[t]
                                  ? this.optionpresets[t]
                                  : {}));
                              for (
                                var e = G()(this.optionpresets.default), n = 0;
                                n < e.length;
                                n += 1
                              )
                                t.hasOwnProperty(e[n]) ||
                                  (t[e[n]] = this.optionpresets.default[e[n]]);
                              return t;
                            },
                          },
                          {
                            key: "colorquantization",
                            value: function (t, e) {
                              var n,
                                i,
                                r,
                                o,
                                a,
                                s,
                                l,
                                c,
                                d = [],
                                u = 0,
                                p = [],
                                h = t.width * t.height;
                              for (a = 0; a < t.height + 2; a += 1)
                                for (d[a] = [], o = 0; o < t.width + 2; o += 1)
                                  d[a][o] = -1;
                              for (
                                c = e.pal
                                  ? e.pal
                                  : 0 === e.colorsampling
                                  ? this.generatepalette(e.numberofcolors)
                                  : 1 === e.colorsampling
                                  ? this.samplepalette(e.numberofcolors, t)
                                  : this.samplepalette2(e.numberofcolors, t),
                                  e.blurradius > 0 &&
                                    (t = this.blur(
                                      t,
                                      e.blurradius,
                                      e.blurdelta
                                    )),
                                  l = 0;
                                l < e.colorquantcycles;
                                l += 1
                              ) {
                                if (l > 0)
                                  for (s = 0; s < c.length; s += 1)
                                    p[s].n > 0 &&
                                      (c[s] = {
                                        r: Math.floor(p[s].r / p[s].n),
                                        g: Math.floor(p[s].g / p[s].n),
                                        b: Math.floor(p[s].b / p[s].n),
                                        a: Math.floor(p[s].a / p[s].n),
                                      }),
                                      p[s].n / h < e.mincolorratio &&
                                        l < e.colorquantcycles - 1 &&
                                        (c[s] = {
                                          r: Math.floor(255 * Math.random()),
                                          g: Math.floor(255 * Math.random()),
                                          b: Math.floor(255 * Math.random()),
                                          a: Math.floor(255 * Math.random()),
                                        });
                                for (o = 0; o < c.length; o += 1)
                                  p[o] = { r: 0, g: 0, b: 0, a: 0, n: 0 };
                                for (a = 0; a < t.height; a += 1)
                                  for (o = 0; o < t.width; o += 1) {
                                    for (
                                      u = 4 * (a * t.width + o),
                                        r = 0,
                                        i = 1024,
                                        s = 0;
                                      s < c.length;
                                      s += 1
                                    )
                                      (n =
                                        Math.abs(c[s].r - t.data[u]) +
                                        Math.abs(c[s].g - t.data[u + 1]) +
                                        Math.abs(c[s].b - t.data[u + 2]) +
                                        Math.abs(c[s].a - t.data[u + 3])) < i &&
                                        ((i = n), (r = s));
                                    (p[r].r += t.data[u]),
                                      (p[r].g += t.data[u + 1]),
                                      (p[r].b += t.data[u + 2]),
                                      (p[r].a += t.data[u + 3]),
                                      (p[r].n += 1),
                                      (d[a + 1][o + 1] = r);
                                  }
                              }
                              return { array: d, palette: c };
                            },
                          },
                          {
                            key: "samplepalette",
                            value: function (t, e) {
                              for (var n, i = [], r = 0; r < t; r += 1)
                                (n =
                                  4 *
                                  Math.floor(
                                    (Math.random() * e.data.length) / 4
                                  )),
                                  i.push({
                                    r: e.data[n],
                                    g: e.data[n + 1],
                                    b: e.data[n + 2],
                                    a: e.data[n + 3],
                                  });
                              return i;
                            },
                          },
                          {
                            key: "samplepalette2",
                            value: function (t, e) {
                              for (
                                var n,
                                  i = [],
                                  r = Math.ceil(Math.sqrt(t)),
                                  o = Math.ceil(t / r),
                                  a = e.width / (r + 1),
                                  s = e.height / (o + 1),
                                  l = 0;
                                l < o;
                                l += 1
                              )
                                for (var c = 0; c < r && i.length !== t; c += 1)
                                  (n =
                                    4 *
                                    Math.floor(
                                      (l + 1) * s * e.width + (c + 1) * a
                                    )),
                                    i.push({
                                      r: e.data[n],
                                      g: e.data[n + 1],
                                      b: e.data[n + 2],
                                      a: e.data[n + 3],
                                    });
                              return i;
                            },
                          },
                          {
                            key: "generatepalette",
                            value: function (t) {
                              var e,
                                n,
                                i,
                                r = [];
                              if (t < 8)
                                for (
                                  var o = Math.floor(255 / (t - 1)), a = 0;
                                  a < t;
                                  a += 1
                                )
                                  r.push({
                                    r: a * o,
                                    g: a * o,
                                    b: a * o,
                                    a: 255,
                                  });
                              else {
                                var s = Math.floor(Math.pow(t, 1 / 3)),
                                  l = Math.floor(255 / (s - 1)),
                                  c = t - s * s * s;
                                for (e = 0; e < s; e += 1)
                                  for (n = 0; n < s; n += 1)
                                    for (i = 0; i < s; i += 1)
                                      r.push({
                                        r: e * l,
                                        g: n * l,
                                        b: i * l,
                                        a: 255,
                                      });
                                for (e = 0; e < c; e += 1)
                                  r.push({
                                    r: Math.floor(255 * Math.random()),
                                    g: Math.floor(255 * Math.random()),
                                    b: Math.floor(255 * Math.random()),
                                    a: Math.floor(255 * Math.random()),
                                  });
                              }
                              return r;
                            },
                          },
                          {
                            key: "layering",
                            value: function (t) {
                              var e,
                                n,
                                i,
                                r,
                                o,
                                a,
                                s,
                                l,
                                c,
                                d,
                                u,
                                p = [],
                                h = 0,
                                f = t.array.length,
                                b = t.array[0].length;
                              for (u = 0; u < t.palette.length; u += 1)
                                for (p[u] = [], d = 0; d < f; d += 1)
                                  for (p[u][d] = [], c = 0; c < b; c += 1)
                                    p[u][d][c] = 0;
                              for (d = 1; d < f - 1; d += 1)
                                for (c = 1; c < b - 1; c += 1)
                                  (h = t.array[d][c]),
                                    (e = t.array[d - 1][c - 1] === h ? 1 : 0),
                                    (n = t.array[d - 1][c] === h ? 1 : 0),
                                    (i = t.array[d - 1][c + 1] === h ? 1 : 0),
                                    (r = t.array[d][c - 1] === h ? 1 : 0),
                                    (o = t.array[d][c + 1] === h ? 1 : 0),
                                    (a = t.array[d + 1][c - 1] === h ? 1 : 0),
                                    (s = t.array[d + 1][c] === h ? 1 : 0),
                                    (l = t.array[d + 1][c + 1] === h ? 1 : 0),
                                    (p[h][d + 1][c + 1] =
                                      1 + 2 * o + 4 * l + 8 * s),
                                    r || (p[h][d + 1][c] = 2 + 4 * s + 8 * a),
                                    n ||
                                      (p[h][d][c + 1] = 0 + 2 * i + 4 * o + 8),
                                    e || (p[h][d][c] = 0 + 2 * n + 4 + 8 * r);
                              return p;
                            },
                          },
                          {
                            key: "layeringstep",
                            value: function (t, e) {
                              var n,
                                i,
                                r = [],
                                o = t.array.length,
                                a = t.array[0].length;
                              for (i = 0; i < o; i += 1)
                                for (r[i] = [], n = 0; n < a; n += 1)
                                  r[i][n] = 0;
                              for (i = 1; i < o; i += 1)
                                for (n = 1; n < a; n += 1)
                                  r[i][n] =
                                    (t.array[i - 1][n - 1] === e ? 1 : 0) +
                                    (t.array[i - 1][n] === e ? 2 : 0) +
                                    (t.array[i][n - 1] === e ? 8 : 0) +
                                    (t.array[i][n] === e ? 4 : 0);
                              return r;
                            },
                          },
                          {
                            key: "pathscan",
                            value: function (t, e) {
                              for (
                                var n,
                                  i = [],
                                  r = 0,
                                  o = 0,
                                  a = 0,
                                  s = 0,
                                  l = t[0].length,
                                  c = t.length,
                                  d = 0,
                                  u = !0,
                                  p = !1,
                                  h = 0;
                                h < c;
                                h += 1
                              )
                                for (var f = 0; f < l; f += 1)
                                  if (4 === t[h][f] || 11 === t[h][f])
                                    for (
                                      a = f,
                                        s = h,
                                        i[r] = {},
                                        i[r].points = [],
                                        i[r].boundingbox = [a, s, a, s],
                                        i[r].holechildren = [],
                                        u = !1,
                                        o = 0,
                                        p = 11 === t[h][f],
                                        d = 1;
                                      !u;

                                    ) {
                                      if (
                                        ((i[r].points[o] = {}),
                                        (i[r].points[o].x = a - 1),
                                        (i[r].points[o].y = s - 1),
                                        (i[r].points[o].t = t[s][a]),
                                        a - 1 < i[r].boundingbox[0] &&
                                          (i[r].boundingbox[0] = a - 1),
                                        a - 1 > i[r].boundingbox[2] &&
                                          (i[r].boundingbox[2] = a - 1),
                                        s - 1 < i[r].boundingbox[1] &&
                                          (i[r].boundingbox[1] = s - 1),
                                        s - 1 > i[r].boundingbox[3] &&
                                          (i[r].boundingbox[3] = s - 1),
                                        (n =
                                          this.pathscan_combined_lookup[
                                            t[s][a]
                                          ][d]),
                                        (t[s][a] = n[0]),
                                        (d = n[1]),
                                        (a += n[2]),
                                        (s += n[3]),
                                        a - 1 === i[r].points[0].x &&
                                          s - 1 === i[r].points[0].y)
                                      )
                                        if (((u = !0), i[r].points.length < e))
                                          i.pop();
                                        else {
                                          if (((i[r].isholepath = !!p), p)) {
                                            for (
                                              var b = 0,
                                                m = [-1, -1, l + 1, c + 1],
                                                g = 0;
                                              g < r;
                                              g++
                                            )
                                              !i[g].isholepath &&
                                                this.boundingboxincludes(
                                                  i[g].boundingbox,
                                                  i[r].boundingbox
                                                ) &&
                                                this.boundingboxincludes(
                                                  m,
                                                  i[g].boundingbox
                                                ) &&
                                                ((b = g),
                                                (m = i[g].boundingbox));
                                            i[b].holechildren.push(r);
                                          }
                                          r += 1;
                                        }
                                      o += 1;
                                    }
                              return i;
                            },
                          },
                          {
                            key: "boundingboxincludes",
                            value: function (t, e) {
                              return (
                                t[0] < e[0] &&
                                t[1] < e[1] &&
                                t[2] > e[2] &&
                                t[3] > e[3]
                              );
                            },
                          },
                          {
                            key: "batchpathscan",
                            value: function (t, e) {
                              var n = [];
                              for (var i in t)
                                t.hasOwnProperty(i) &&
                                  (n[i] = this.pathscan(t[i], e));
                              return n;
                            },
                          },
                          {
                            key: "internodes",
                            value: function (t, e) {
                              var n,
                                i,
                                r = [],
                                o = 0,
                                a = 0,
                                s = 0,
                                l = 0,
                                c = 0;
                              for (n = 0; n < t.length; n += 1)
                                for (
                                  r[n] = {},
                                    r[n].points = [],
                                    r[n].boundingbox = t[n].boundingbox,
                                    r[n].holechildren = t[n].holechildren,
                                    r[n].isholepath = t[n].isholepath,
                                    o = t[n].points.length,
                                    i = 0;
                                  i < o;
                                  i += 1
                                )
                                  (a = (i + 1) % o),
                                    (s = (i + 2) % o),
                                    (l = (i - 1 + o) % o),
                                    (c = (i - 2 + o) % o),
                                    e.rightangleenhance &&
                                      this.testrightangle(
                                        t[n],
                                        c,
                                        l,
                                        i,
                                        a,
                                        s
                                      ) &&
                                      (r[n].points.length > 0 &&
                                        (r[n].points[
                                          r[n].points.length - 1
                                        ].linesegment = this.getdirection(
                                          r[n].points[r[n].points.length - 1].x,
                                          r[n].points[r[n].points.length - 1].y,
                                          t[n].points[i].x,
                                          t[n].points[i].y
                                        )),
                                      r[n].points.push({
                                        x: t[n].points[i].x,
                                        y: t[n].points[i].y,
                                        linesegment: this.getdirection(
                                          t[n].points[i].x,
                                          t[n].points[i].y,
                                          (t[n].points[i].x +
                                            t[n].points[a].x) /
                                            2,
                                          (t[n].points[i].y +
                                            t[n].points[a].y) /
                                            2
                                        ),
                                      })),
                                    r[n].points.push({
                                      x:
                                        (t[n].points[i].x + t[n].points[a].x) /
                                        2,
                                      y:
                                        (t[n].points[i].y + t[n].points[a].y) /
                                        2,
                                      linesegment: this.getdirection(
                                        (t[n].points[i].x + t[n].points[a].x) /
                                          2,
                                        (t[n].points[i].y + t[n].points[a].y) /
                                          2,
                                        (t[n].points[a].x + t[n].points[s].x) /
                                          2,
                                        (t[n].points[a].y + t[n].points[s].y) /
                                          2
                                      ),
                                    });
                              return r;
                            },
                          },
                          {
                            key: "testrightangle",
                            value: function (t, e, n, i, r, o) {
                              return (
                                (t.points[i].x === t.points[e].x &&
                                  t.points[i].x === t.points[n].x &&
                                  t.points[i].y === t.points[r].y &&
                                  t.points[i].y === t.points[o].y) ||
                                (t.points[i].y === t.points[e].y &&
                                  t.points[i].y === t.points[n].y &&
                                  t.points[i].x === t.points[r].x &&
                                  t.points[i].x === t.points[o].x)
                              );
                            },
                          },
                          {
                            key: "getdirection",
                            value: function (t, e, n, i) {
                              return t < n
                                ? e < i
                                  ? 1
                                  : e > i
                                  ? 7
                                  : 0
                                : t > n
                                ? e < i
                                  ? 3
                                  : e > i
                                  ? 5
                                  : 4
                                : e < i
                                ? 2
                                : e > i
                                ? 6
                                : 8;
                            },
                          },
                          {
                            key: "batchinternodes",
                            value: function (t, e) {
                              var n = [];
                              for (var i in t)
                                t.hasOwnProperty(i) &&
                                  (n[i] = this.internodes(t[i], e));
                              return n;
                            },
                          },
                          {
                            key: "tracepath",
                            value: function (t, e, n) {
                              var i,
                                r,
                                o,
                                a = 0,
                                s = { segments: [] };
                              for (
                                s.boundingbox = t.boundingbox,
                                  s.holechildren = t.holechildren,
                                  s.isholepath = t.isholepath;
                                a < t.points.length;

                              ) {
                                var l;
                                for (
                                  i = t.points[a].linesegment,
                                    r = -1,
                                    o = a + 1;
                                  (t.points[o].linesegment === i ||
                                    t.points[o].linesegment === r ||
                                    -1 === r) &&
                                  o < t.points.length - 1;

                                )
                                  t.points[o].linesegment !== i &&
                                    -1 === r &&
                                    (r = t.points[o].linesegment),
                                    (o += 1);
                                o === t.points.length - 1 && (o = 0),
                                  (s.segments = L()((l = s.segments)).call(
                                    l,
                                    this.fitseq(t, e, n, a, o)
                                  )),
                                  (a = o > 0 ? o : t.points.length);
                              }
                              return s;
                            },
                          },
                          {
                            key: "fitseq",
                            value: function (t, e, n, i, r) {
                              var o;
                              if (r > t.points.length || r < 0) return [];
                              var a,
                                s,
                                l,
                                c = i,
                                d = 0,
                                u = !0,
                                p = r - i;
                              p < 0 && (p += t.points.length);
                              for (
                                var h,
                                  f = (t.points[r].x - t.points[i].x) / p,
                                  b = (t.points[r].y - t.points[i].y) / p,
                                  m = (i + 1) % t.points.length;
                                m != r;

                              )
                                (h = m - i) < 0 && (h += t.points.length),
                                  (a = t.points[i].x + f * h),
                                  (s = t.points[i].y + b * h),
                                  (l =
                                    (t.points[m].x - a) * (t.points[m].x - a) +
                                    (t.points[m].y - s) * (t.points[m].y - s)) >
                                    e && (u = !1),
                                  l > d && ((c = m), (d = l)),
                                  (m = (m + 1) % t.points.length);
                              if (u)
                                return [
                                  {
                                    type: "L",
                                    x1: t.points[i].x,
                                    y1: t.points[i].y,
                                    x2: t.points[r].x,
                                    y2: t.points[r].y,
                                  },
                                ];
                              var g = c;
                              (u = !0), (d = 0);
                              var v = (g - i) / p,
                                _ = (1 - v) * (1 - v),
                                y = 2 * (1 - v) * v,
                                M = v * v,
                                O =
                                  (_ * t.points[i].x +
                                    M * t.points[r].x -
                                    t.points[g].x) /
                                  -y,
                                w =
                                  (_ * t.points[i].y +
                                    M * t.points[r].y -
                                    t.points[g].y) /
                                  -y;
                              for (m = i + 1; m != r; )
                                (y = 2 * (1 - (v = (m - i) / p)) * v),
                                  (M = v * v),
                                  (a =
                                    (_ = (1 - v) * (1 - v)) * t.points[i].x +
                                    y * O +
                                    M * t.points[r].x),
                                  (s =
                                    _ * t.points[i].y +
                                    y * w +
                                    M * t.points[r].y),
                                  (l =
                                    (t.points[m].x - a) * (t.points[m].x - a) +
                                    (t.points[m].y - s) * (t.points[m].y - s)) >
                                    n && (u = !1),
                                  l > d && ((c = m), (d = l)),
                                  (m = (m + 1) % t.points.length);
                              if (u)
                                return [
                                  {
                                    type: "Q",
                                    x1: t.points[i].x,
                                    y1: t.points[i].y,
                                    x2: O,
                                    y2: w,
                                    x3: t.points[r].x,
                                    y3: t.points[r].y,
                                  },
                                ];
                              var A = g;
                              return L()((o = this.fitseq(t, e, n, i, A))).call(
                                o,
                                this.fitseq(t, e, n, A, r)
                              );
                            },
                          },
                          {
                            key: "batchtracepaths",
                            value: function (t, e, n) {
                              var i = [];
                              for (var r in t)
                                t.hasOwnProperty(r) &&
                                  i.push(this.tracepath(t[r], e, n));
                              return i;
                            },
                          },
                          {
                            key: "batchtracelayers",
                            value: function (t, e, n) {
                              var i = [];
                              for (var r in t)
                                t.hasOwnProperty(r) &&
                                  (i[r] = this.batchtracepaths(t[r], e, n));
                              return i;
                            },
                          },
                          {
                            key: "roundtodec",
                            value: function (t, e) {
                              return Number(t.toFixed(e));
                            },
                          },
                          {
                            key: "svgpathstring",
                            value: function (t, e, n, i) {
                              var r,
                                o,
                                a,
                                s = t.layers[e],
                                l = s[n],
                                c = "";
                              if (i.linefilter && l.segments.length < 3)
                                return c;
                              if (
                                ((c = L()(
                                  (r = "<path ".concat(
                                    i.desc
                                      ? L()(
                                          (o = 'desc="l '.concat(e, " p "))
                                        ).call(o, n, '" ')
                                      : ""
                                  ))
                                ).call(
                                  r,
                                  this.tosvgcolorstr(t.palette[e], i),
                                  'd="'
                                )),
                                -1 === i.roundcoords)
                              ) {
                                var d;
                                for (
                                  c += L()(
                                    (d = "M ".concat(
                                      l.segments[0].x1 * i.scale,
                                      " "
                                    ))
                                  ).call(d, l.segments[0].y1 * i.scale, " "),
                                    a = 0;
                                  a < l.segments.length;
                                  a++
                                ) {
                                  var u, p, h;
                                  (c += L()(
                                    (u = L()(
                                      (p = "".concat(l.segments[a].type, " "))
                                    ).call(p, l.segments[a].x2 * i.scale, " "))
                                  ).call(u, l.segments[a].y2 * i.scale, " ")),
                                    l.segments[a].hasOwnProperty("x3") &&
                                      (c += L()(
                                        (h = "".concat(
                                          l.segments[a].x3 * i.scale,
                                          " "
                                        ))
                                      ).call(
                                        h,
                                        l.segments[a].y3 * i.scale,
                                        " "
                                      ));
                                }
                                c += "Z ";
                              } else {
                                var f;
                                for (
                                  c += L()(
                                    (f = "M ".concat(
                                      this.roundtodec(
                                        l.segments[0].x1 * i.scale,
                                        i.roundcoords
                                      ),
                                      " "
                                    ))
                                  ).call(
                                    f,
                                    this.roundtodec(
                                      l.segments[0].y1 * i.scale,
                                      i.roundcoords
                                    ),
                                    " "
                                  ),
                                    a = 0;
                                  a < l.segments.length;
                                  a++
                                ) {
                                  var b, m, g;
                                  (c += L()(
                                    (b = L()(
                                      (m = "".concat(l.segments[a].type, " "))
                                    ).call(
                                      m,
                                      this.roundtodec(
                                        l.segments[a].x2 * i.scale,
                                        i.roundcoords
                                      ),
                                      " "
                                    ))
                                  ).call(
                                    b,
                                    this.roundtodec(
                                      l.segments[a].y2 * i.scale,
                                      i.roundcoords
                                    ),
                                    " "
                                  )),
                                    l.segments[a].hasOwnProperty("x3") &&
                                      (c += L()(
                                        (g = "".concat(
                                          this.roundtodec(
                                            l.segments[a].x3 * i.scale,
                                            i.roundcoords
                                          ),
                                          " "
                                        ))
                                      ).call(
                                        g,
                                        this.roundtodec(
                                          l.segments[a].y3 * i.scale,
                                          i.roundcoords
                                        ),
                                        " "
                                      ));
                                }
                                c += "Z ";
                              }
                              for (var v = 0; v < l.holechildren.length; v++) {
                                var _,
                                  y,
                                  M,
                                  O,
                                  w = s[l.holechildren[v]];
                                if (-1 === i.roundcoords)
                                  for (
                                    w.segments[
                                      w.segments.length - 1
                                    ].hasOwnProperty("x3")
                                      ? (c += L()(
                                          (_ = "M ".concat(
                                            w.segments[w.segments.length - 1]
                                              .x3 * i.scale,
                                            " "
                                          ))
                                        ).call(
                                          _,
                                          w.segments[w.segments.length - 1].y3 *
                                            i.scale,
                                          " "
                                        ))
                                      : (c += L()(
                                          (y = "M ".concat(
                                            w.segments[w.segments.length - 1]
                                              .x2 * i.scale,
                                            " "
                                          ))
                                        ).call(
                                          y,
                                          w.segments[w.segments.length - 1].y2 *
                                            i.scale,
                                          " "
                                        )),
                                      a = w.segments.length - 1;
                                    a >= 0;
                                    a--
                                  ) {
                                    var A, x;
                                    (c += "".concat(w.segments[a].type, " ")),
                                      w.segments[a].hasOwnProperty("x3") &&
                                        (c += L()(
                                          (x = "".concat(
                                            w.segments[a].x2 * i.scale,
                                            " "
                                          ))
                                        ).call(
                                          x,
                                          w.segments[a].y2 * i.scale,
                                          " "
                                        )),
                                      (c += L()(
                                        (A = "".concat(
                                          w.segments[a].x1 * i.scale,
                                          " "
                                        ))
                                      ).call(
                                        A,
                                        w.segments[a].y1 * i.scale,
                                        " "
                                      ));
                                  }
                                else
                                  for (
                                    w.segments[
                                      w.segments.length - 1
                                    ].hasOwnProperty("x3")
                                      ? (c += L()(
                                          (M = "M ".concat(
                                            this.roundtodec(
                                              w.segments[w.segments.length - 1]
                                                .x3 * i.scale
                                            ),
                                            " "
                                          ))
                                        ).call(
                                          M,
                                          this.roundtodec(
                                            w.segments[w.segments.length - 1]
                                              .y3 * i.scale
                                          ),
                                          " "
                                        ))
                                      : (c += L()(
                                          (O = "M ".concat(
                                            this.roundtodec(
                                              w.segments[w.segments.length - 1]
                                                .x2 * i.scale
                                            ),
                                            " "
                                          ))
                                        ).call(
                                          O,
                                          this.roundtodec(
                                            w.segments[w.segments.length - 1]
                                              .y2 * i.scale
                                          ),
                                          " "
                                        )),
                                      a = w.segments.length - 1;
                                    a >= 0;
                                    a--
                                  ) {
                                    var z, C;
                                    (c += "".concat(w.segments[a].type, " ")),
                                      w.segments[a].hasOwnProperty("x3") &&
                                        (c += L()(
                                          (C = "".concat(
                                            this.roundtodec(
                                              w.segments[a].x2 * i.scale
                                            ),
                                            " "
                                          ))
                                        ).call(
                                          C,
                                          this.roundtodec(
                                            w.segments[a].y2 * i.scale
                                          ),
                                          " "
                                        )),
                                      (c += L()(
                                        (z = "".concat(
                                          this.roundtodec(
                                            w.segments[a].x1 * i.scale
                                          ),
                                          " "
                                        ))
                                      ).call(
                                        z,
                                        this.roundtodec(
                                          w.segments[a].y1 * i.scale
                                        ),
                                        " "
                                      ));
                                  }
                                c += "Z ";
                              }
                              if (((c += '" />'), i.lcpr || i.qcpr)) {
                                for (a = 0; a < l.segments.length; a++) {
                                  var k,
                                    S,
                                    T,
                                    D,
                                    q,
                                    E,
                                    j,
                                    P,
                                    R,
                                    I,
                                    W,
                                    N,
                                    B,
                                    F,
                                    $,
                                    H,
                                    Y;
                                  l.segments[a].hasOwnProperty("x3") &&
                                    i.qcpr &&
                                    ((c += L()(
                                      (k = L()(
                                        (S = L()(
                                          (T = '<circle cx="'.concat(
                                            l.segments[a].x2 * i.scale,
                                            '" cy="'
                                          ))
                                        ).call(
                                          T,
                                          l.segments[a].y2 * i.scale,
                                          '" r="'
                                        ))
                                      ).call(
                                        S,
                                        i.qcpr,
                                        '" fill="cyan" stroke-width="'
                                      ))
                                    ).call(
                                      k,
                                      0.2 * i.qcpr,
                                      '" stroke="black" />'
                                    )),
                                    (c += L()(
                                      (D = L()(
                                        (q = L()(
                                          (E = '<circle cx="'.concat(
                                            l.segments[a].x3 * i.scale,
                                            '" cy="'
                                          ))
                                        ).call(
                                          E,
                                          l.segments[a].y3 * i.scale,
                                          '" r="'
                                        ))
                                      ).call(
                                        q,
                                        i.qcpr,
                                        '" fill="white" stroke-width="'
                                      ))
                                    ).call(
                                      D,
                                      0.2 * i.qcpr,
                                      '" stroke="black" />'
                                    )),
                                    (c += L()(
                                      (j = L()(
                                        (P = L()(
                                          (R = L()(
                                            (I = '<line x1="'.concat(
                                              l.segments[a].x1 * i.scale,
                                              '" y1="'
                                            ))
                                          ).call(
                                            I,
                                            l.segments[a].y1 * i.scale,
                                            '" x2="'
                                          ))
                                        ).call(
                                          R,
                                          l.segments[a].x2 * i.scale,
                                          '" y2="'
                                        ))
                                      ).call(
                                        P,
                                        l.segments[a].y2 * i.scale,
                                        '" stroke-width="'
                                      ))
                                    ).call(
                                      j,
                                      0.2 * i.qcpr,
                                      '" stroke="cyan" />'
                                    )),
                                    (c += L()(
                                      (W = L()(
                                        (N = L()(
                                          (B = L()(
                                            (F = '<line x1="'.concat(
                                              l.segments[a].x2 * i.scale,
                                              '" y1="'
                                            ))
                                          ).call(
                                            F,
                                            l.segments[a].y2 * i.scale,
                                            '" x2="'
                                          ))
                                        ).call(
                                          B,
                                          l.segments[a].x3 * i.scale,
                                          '" y2="'
                                        ))
                                      ).call(
                                        N,
                                        l.segments[a].y3 * i.scale,
                                        '" stroke-width="'
                                      ))
                                    ).call(
                                      W,
                                      0.2 * i.qcpr,
                                      '" stroke="cyan" />'
                                    ))),
                                    !l.segments[a].hasOwnProperty("x3") &&
                                      i.lcpr &&
                                      (c += L()(
                                        ($ = L()(
                                          (H = L()(
                                            (Y = '<circle cx="'.concat(
                                              l.segments[a].x2 * i.scale,
                                              '" cy="'
                                            ))
                                          ).call(
                                            Y,
                                            l.segments[a].y2 * i.scale,
                                            '" r="'
                                          ))
                                        ).call(
                                          H,
                                          i.lcpr,
                                          '" fill="white" stroke-width="'
                                        ))
                                      ).call(
                                        $,
                                        0.2 * i.lcpr,
                                        '" stroke="black" />'
                                      ));
                                }
                                for (v = 0; v < l.holechildren.length; v++)
                                  for (
                                    w = s[l.holechildren[v]], a = 0;
                                    a < w.segments.length;
                                    a++
                                  ) {
                                    var U,
                                      X,
                                      V,
                                      G,
                                      K,
                                      Z,
                                      J,
                                      Q,
                                      tt,
                                      et,
                                      nt,
                                      it,
                                      rt,
                                      ot,
                                      at,
                                      st,
                                      lt;
                                    w.segments[a].hasOwnProperty("x3") &&
                                      i.qcpr &&
                                      ((c += L()(
                                        (U = L()(
                                          (X = L()(
                                            (V = '<circle cx="'.concat(
                                              w.segments[a].x2 * i.scale,
                                              '" cy="'
                                            ))
                                          ).call(
                                            V,
                                            w.segments[a].y2 * i.scale,
                                            '" r="'
                                          ))
                                        ).call(
                                          X,
                                          i.qcpr,
                                          '" fill="cyan" stroke-width="'
                                        ))
                                      ).call(
                                        U,
                                        0.2 * i.qcpr,
                                        '" stroke="black" />'
                                      )),
                                      (c += L()(
                                        (G = L()(
                                          (K = L()(
                                            (Z = '<circle cx="'.concat(
                                              w.segments[a].x3 * i.scale,
                                              '" cy="'
                                            ))
                                          ).call(
                                            Z,
                                            w.segments[a].y3 * i.scale,
                                            '" r="'
                                          ))
                                        ).call(
                                          K,
                                          i.qcpr,
                                          '" fill="white" stroke-width="'
                                        ))
                                      ).call(
                                        G,
                                        0.2 * i.qcpr,
                                        '" stroke="black" />'
                                      )),
                                      (c += L()(
                                        (J = L()(
                                          (Q = L()(
                                            (tt = L()(
                                              (et = '<line x1="'.concat(
                                                w.segments[a].x1 * i.scale,
                                                '" y1="'
                                              ))
                                            ).call(
                                              et,
                                              w.segments[a].y1 * i.scale,
                                              '" x2="'
                                            ))
                                          ).call(
                                            tt,
                                            w.segments[a].x2 * i.scale,
                                            '" y2="'
                                          ))
                                        ).call(
                                          Q,
                                          w.segments[a].y2 * i.scale,
                                          '" stroke-width="'
                                        ))
                                      ).call(
                                        J,
                                        0.2 * i.qcpr,
                                        '" stroke="cyan" />'
                                      )),
                                      (c += L()(
                                        (nt = L()(
                                          (it = L()(
                                            (rt = L()(
                                              (ot = '<line x1="'.concat(
                                                w.segments[a].x2 * i.scale,
                                                '" y1="'
                                              ))
                                            ).call(
                                              ot,
                                              w.segments[a].y2 * i.scale,
                                              '" x2="'
                                            ))
                                          ).call(
                                            rt,
                                            w.segments[a].x3 * i.scale,
                                            '" y2="'
                                          ))
                                        ).call(
                                          it,
                                          w.segments[a].y3 * i.scale,
                                          '" stroke-width="'
                                        ))
                                      ).call(
                                        nt,
                                        0.2 * i.qcpr,
                                        '" stroke="cyan" />'
                                      ))),
                                      !w.segments[a].hasOwnProperty("x3") &&
                                        i.lcpr &&
                                        (c += L()(
                                          (at = L()(
                                            (st = L()(
                                              (lt = '<circle cx="'.concat(
                                                w.segments[a].x2 * i.scale,
                                                '" cy="'
                                              ))
                                            ).call(
                                              lt,
                                              w.segments[a].y2 * i.scale,
                                              '" r="'
                                            ))
                                          ).call(
                                            st,
                                            i.lcpr,
                                            '" fill="white" stroke-width="'
                                          ))
                                        ).call(
                                          at,
                                          0.2 * i.lcpr,
                                          '" stroke="black" />'
                                        ));
                                  }
                              }
                              return c;
                            },
                          },
                          {
                            key: "getsvgstring",
                            value: function (t, e) {
                              var n, i, r;
                              e = this.checkoptions(e);
                              for (
                                var o = t.width * e.scale,
                                  a = t.height * e.scale,
                                  s = L()(
                                    (n = "<svg ".concat(
                                      e.viewbox
                                        ? L()(
                                            (i = 'viewBox="0 0 '.concat(o, " "))
                                          ).call(i, a, '" ')
                                        : L()(
                                            (r = 'width="'.concat(
                                              o,
                                              '" height="'
                                            ))
                                          ).call(r, a, '" '),
                                      'version="1.1" xmlns="http://www.w3.org/2000/svg" desc="Created with imagetracer.js version '
                                    ))
                                  ).call(n, this.versionnumber, '" >'),
                                  l = 0;
                                l < t.layers.length;
                                l += 1
                              )
                                for (var c = 0; c < t.layers[l].length; c += 1)
                                  t.layers[l][c].isholepath ||
                                    (s += this.svgpathstring(t, l, c, e));
                              return (s += "</svg>");
                            },
                          },
                          {
                            key: "compareNumbers",
                            value: function (t, e) {
                              return t - e;
                            },
                          },
                          {
                            key: "torgbastr",
                            value: function (t) {
                              var e, n, i;
                              return L()(
                                (e = L()(
                                  (n = L()((i = "rgba(".concat(t.r, ","))).call(
                                    i,
                                    t.g,
                                    ","
                                  ))
                                ).call(n, t.b, ","))
                              ).call(e, t.a, ")");
                            },
                          },
                          {
                            key: "tosvgcolorstr",
                            value: function (t, e) {
                              var n, i, r, o, a, s, l;
                              return L()(
                                (n = L()(
                                  (i = L()(
                                    (r = L()(
                                      (o = L()(
                                        (a = L()(
                                          (s = L()(
                                            (l = 'fill="rgb('.concat(t.r, ","))
                                          ).call(l, t.g, ","))
                                        ).call(s, t.b, ')" stroke="rgb('))
                                      ).call(a, t.r, ","))
                                    ).call(o, t.g, ","))
                                  ).call(r, t.b, ')" stroke-width="'))
                                ).call(i, e.strokewidth, '" opacity="'))
                              ).call(n, t.a / 255, '" ');
                            },
                          },
                          {
                            key: "appendSVGString",
                            value: function (t, e) {
                              var n;
                              e
                                ? (n = document.getElementById(e)) ||
                                  (((n = document.createElement("div")).id = e),
                                  document.body.appendChild(n))
                                : ((n = document.createElement("div")),
                                  document.body.appendChild(n)),
                                (n.innerHTML += t);
                            },
                          },
                          {
                            key: "blur",
                            value: function (t, e, n) {
                              var i,
                                r,
                                o,
                                a,
                                s,
                                l,
                                c,
                                d,
                                u,
                                p = {
                                  width: t.width,
                                  height: t.height,
                                  data: [],
                                };
                              if ((e = Math.floor(e)) < 1) return t;
                              e > 5 && (e = 5),
                                (n = Math.abs(n)) > 1024 && (n = 1024);
                              var h = this.gks[e - 1];
                              for (r = 0; r < t.height; r++)
                                for (i = 0; i < t.width; i++) {
                                  for (
                                    s = 0, l = 0, c = 0, d = 0, u = 0, o = -e;
                                    o < e + 1;
                                    o++
                                  )
                                    i + o > 0 &&
                                      i + o < t.width &&
                                      ((a = 4 * (r * t.width + i + o)),
                                      (s += t.data[a] * h[o + e]),
                                      (l += t.data[a + 1] * h[o + e]),
                                      (c += t.data[a + 2] * h[o + e]),
                                      (d += t.data[a + 3] * h[o + e]),
                                      (u += h[o + e]));
                                  (a = 4 * (r * t.width + i)),
                                    (p.data[a] = Math.floor(s / u)),
                                    (p.data[a + 1] = Math.floor(l / u)),
                                    (p.data[a + 2] = Math.floor(c / u)),
                                    (p.data[a + 3] = Math.floor(d / u));
                                }
                              var f = new Uint8ClampedArray(p.data);
                              for (r = 0; r < t.height; r++)
                                for (i = 0; i < t.width; i++) {
                                  for (
                                    s = 0, l = 0, c = 0, d = 0, u = 0, o = -e;
                                    o < e + 1;
                                    o++
                                  )
                                    r + o > 0 &&
                                      r + o < t.height &&
                                      ((s +=
                                        f[(a = 4 * ((r + o) * t.width + i))] *
                                        h[o + e]),
                                      (l += f[a + 1] * h[o + e]),
                                      (c += f[a + 2] * h[o + e]),
                                      (d += f[a + 3] * h[o + e]),
                                      (u += h[o + e]));
                                  (a = 4 * (r * t.width + i)),
                                    (p.data[a] = Math.floor(s / u)),
                                    (p.data[a + 1] = Math.floor(l / u)),
                                    (p.data[a + 2] = Math.floor(c / u)),
                                    (p.data[a + 3] = Math.floor(d / u));
                                }
                              for (r = 0; r < t.height; r++)
                                for (i = 0; i < t.width; i++)
                                  (a = 4 * (r * t.width + i)),
                                    Math.abs(p.data[a] - t.data[a]) +
                                      Math.abs(p.data[a + 1] - t.data[a + 1]) +
                                      Math.abs(p.data[a + 2] - t.data[a + 2]) +
                                      Math.abs(p.data[a + 3] - t.data[a + 3]) >
                                      n &&
                                      ((p.data[a] = t.data[a]),
                                      (p.data[a + 1] = t.data[a + 1]),
                                      (p.data[a + 2] = t.data[a + 2]),
                                      (p.data[a + 3] = t.data[a + 3]));
                              return p;
                            },
                          },
                          {
                            key: "loadImage",
                            value: function (t, e, n) {
                              var i = new Image();
                              n &&
                                n.corsenabled &&
                                (i.crossOrigin = "Anonymous"),
                                (i.src = t),
                                (i.onload = function () {
                                  var t = document.createElement("canvas");
                                  (t.width = i.width),
                                    (t.height = i.height),
                                    t.getContext("2d").drawImage(i, 0, 0),
                                    e(t);
                                });
                            },
                          },
                          {
                            key: "getImgdata",
                            value: function (t) {
                              return t
                                .getContext("2d")
                                .getImageData(0, 0, t.width, t.height);
                            },
                          },
                          {
                            key: "drawLayers",
                            value: function (t, e, n, i) {
                              var r, o, a, s, l, c;
                              for (l in ((n = n || 1),
                              i
                                ? (c = document.getElementById(i)) ||
                                  (((c = document.createElement("div")).id = i),
                                  document.body.appendChild(c))
                                : ((c = document.createElement("div")),
                                  document.body.appendChild(c)),
                              t))
                                if (t.hasOwnProperty(l)) {
                                  (r = t[l][0].length), (o = t[l].length);
                                  var d = document.createElement("canvas");
                                  (d.width = r * n), (d.height = o * n);
                                  var u = d.getContext("2d");
                                  for (s = 0; s < o; s += 1)
                                    for (a = 0; a < r; a += 1)
                                      (u.fillStyle = this.torgbastr(
                                        e[t[l][s][a] % e.length]
                                      )),
                                        u.fillRect(a * n, s * n, n, n);
                                  c.appendChild(d);
                                }
                            },
                          },
                        ],
                        [
                          {
                            key: "tracerDefaultOption",
                            value: function () {
                              return {
                                pathomit: 100,
                                ltres: 0.1,
                                qtres: 1,
                                scale: 1,
                                strokewidth: 5,
                                viewbox: !1,
                                linefilter: !0,
                                desc: !1,
                                rightangleenhance: !1,
                                pal: [
                                  { r: 0, g: 0, b: 0, a: 255 },
                                  { r: 255, g: 255, b: 255, a: 255 },
                                ],
                              };
                            },
                          },
                        ]
                      ),
                      t
                    );
                  })(),
                  ji = {
                    getActions: function () {
                      return {
                        main: this._mainAction(),
                        shape: this._shapeAction(),
                        crop: this._cropAction(),
                        resize: this._resizeAction(),
                        flip: this._flipAction(),
                        rotate: this._rotateAction(),
                        text: this._textAction(),
                        mask: this._maskAction(),
                        draw: this._drawAction(),
                        icon: this._iconAction(),
                        filter: this._filterAction(),
                        history: this._historyAction(),
                      };
                    },
                    _mainAction: function () {
                      var t = this,
                        e = function () {
                          "crop" === t.ui.submenu &&
                            (t.stopDrawingMode(), t.ui.changeMenu("crop"));
                        },
                        n = function (e) {
                          var n, i;
                          return (
                            (n = e),
                            "rotate" === t.ui.submenu &&
                              t.ui.rotate.setRangeBarAngle("setAngle", n),
                            (i = e),
                            "filter" === t.ui.submenu &&
                              qi()(t.ui).setFilterState(i),
                            e
                          );
                        },
                        i = function () {
                          qi()(t.ui) && qi()(t.ui).initFilterCheckBoxState();
                        };
                      return W()(
                        {
                          initLoadImage: function (n, i) {
                            return t.loadImageFromURL(n, i).then(function (i) {
                              e(),
                                (t.ui.initializeImgUrl = n),
                                t.ui.resizeEditor({ imageSize: i }),
                                t.clearUndoStack(),
                                t._invoker.fire(se, ge);
                            });
                          },
                          undo: function () {
                            t.isEmptyUndoStack() ||
                              (e(), t.deactivateAll(), t.undo().then(n));
                          },
                          redo: function () {
                            t.isEmptyRedoStack() ||
                              (e(), t.deactivateAll(), t.redo().then(n));
                          },
                          reset: function () {
                            e(),
                              t
                                .loadImageFromURL(
                                  t.ui.initializeImgUrl,
                                  "resetImage"
                                )
                                .then(function (n) {
                                  e(),
                                    i(),
                                    t.ui.resizeEditor({ imageSize: n }),
                                    t.clearUndoStack(),
                                    t._initHistory();
                                });
                          },
                          delete: function () {
                            t.ui.changeHelpButtonEnabled("delete", !1),
                              e(),
                              t.removeActiveObject(),
                              (t.activeObjectId = null);
                          },
                          deleteAll: function () {
                            e(),
                              t.clearObjects(),
                              t.ui.changeHelpButtonEnabled("delete", !1),
                              t.ui.changeHelpButtonEnabled("deleteAll", !1);
                          },
                          load: function (n) {
                            Ve() ||
                              alert("This browser does not support file-api"),
                              (t.ui.initializeImgUrl = P().createObjectURL(n)),
                              t
                                .loadImageFromFile(n)
                                .then(function (n) {
                                  e(),
                                    i(),
                                    t.clearUndoStack(),
                                    t.ui.activeMenuEvent(),
                                    t.ui.resizeEditor({ imageSize: n }),
                                    t._clearHistory(),
                                    t._invoker.fire(se, ge);
                                })
                                .catch(function (t) {
                                  return E().reject(t);
                                });
                          },
                          download: function () {
                            var e,
                              n,
                              i = t.toDataURL(),
                              r = t.getImageName();
                            Ve() && window.saveAs
                              ? ((n = (e = (function (t) {
                                  var e,
                                    n,
                                    i,
                                    r = "";
                                  e = t.replace(
                                    /data:(image\/.+);base64,/,
                                    function (t, e) {
                                      return (r = e), "";
                                    }
                                  );
                                  var o = (e = atob(e)).length;
                                  for (
                                    n = new Uint8Array(o), i = 0;
                                    i < o;
                                    i += 1
                                  )
                                    n[i] = e.charCodeAt(i);
                                  return new Blob([n], { type: r });
                                })(i)).type.split("/")[1]),
                                r.split(".").pop() !== n &&
                                  (r += ".".concat(n)),
                                saveAs(e, r))
                              : (window.open().document.body.innerHTML =
                                  "<img src='".concat(i, "'>"));
                          },
                          history: function (e) {
                            t.ui.toggleHistoryMenu(e);
                          },
                          zoomIn: function () {
                            var e;
                            t.ui.toggleZoomButtonStatus("zoomIn"),
                              t.deactivateAll(),
                              (e = t._graphics.getZoomMode()),
                              t.stopDrawingMode(),
                              e !== Me
                                ? (t.startDrawingMode(_e.ZOOM),
                                  t._graphics.startZoomInMode())
                                : t._graphics.endZoomInMode();
                          },
                          zoomOut: function () {
                            t._graphics.zoomOut();
                          },
                          hand: function () {
                            var e;
                            t.ui.offZoomInButtonStatus(),
                              t.ui.toggleZoomButtonStatus("hand"),
                              t.deactivateAll(),
                              (e = t._graphics.getZoomMode()),
                              t.stopDrawingMode(),
                              e !== Oe
                                ? (t.startDrawingMode(_e.ZOOM),
                                  t._graphics.startHandMode())
                                : t._graphics.endHandMode();
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _iconAction: function () {
                      var t = this;
                      return W()(
                        {
                          changeColor: function (e) {
                            t.activeObjectId &&
                              t.changeIconColor(t.activeObjectId, e);
                          },
                          addIcon: function (e, n) {
                            t.startDrawingMode("ICON"), t.setDrawingIcon(e, n);
                          },
                          cancelAddIcon: function () {
                            t.ui.icon.clearIconType(),
                              t.changeSelectableAll(!0),
                              t.changeCursor("default"),
                              t.stopDrawingMode();
                          },
                          registerDefaultIcons: function (e, n) {
                            var i = {};
                            (i[e] = n), t.registerIcons(i);
                          },
                          registerCustomIcon: function (e, n) {
                            new Ei().imageToSVG(
                              e,
                              function (e) {
                                var i = K(
                                    e.match(/path[^>]*d="([^"]*)"/),
                                    2
                                  )[1],
                                  r = {};
                                (r[n.name] = i),
                                  t.registerIcons(r),
                                  t.addIcon(n.name, { left: 100, top: 100 });
                              },
                              Ei.tracerDefaultOption()
                            );
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _drawAction: function () {
                      var t = this;
                      return W()(
                        {
                          setDrawMode: function (e, n) {
                            t.stopDrawingMode(),
                              "free" === e
                                ? t.startDrawingMode("FREE_DRAWING", n)
                                : t.startDrawingMode("LINE_DRAWING", n);
                          },
                          setColor: function (e) {
                            t.setBrush({ color: e });
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _maskAction: function () {
                      var t = this;
                      return W()(
                        {
                          loadImageFromURL: function (e, n) {
                            return t
                              .loadImageFromURL(t.toDataURL(), "FilterImage")
                              .then(function () {
                                t.addImageObject(e).then(function () {
                                  P().revokeObjectURL(n);
                                }),
                                  t._invoker.fire(se, ve);
                              });
                          },
                          applyFilter: function () {
                            t.applyFilter("mask", {
                              maskObjId: t.activeObjectId,
                            });
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _textAction: function () {
                      var t = this;
                      return W()(
                        {
                          changeTextStyle: function (e, n) {
                            t.activeObjectId &&
                              t.changeTextStyle(t.activeObjectId, e, n);
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _rotateAction: function () {
                      var t = this;
                      return W()(
                        {
                          rotate: function (e, n) {
                            t.rotate(e, n),
                              t.ui.resizeEditor(),
                              t.ui.rotate.setRangeBarAngle("rotate", e);
                          },
                          setAngle: function (e, n) {
                            t.setAngle(e, n),
                              t.ui.resizeEditor(),
                              t.ui.rotate.setRangeBarAngle("setAngle", e);
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _shapeAction: function () {
                      var t = this;
                      return W()(
                        {
                          changeShape: function (e, n) {
                            t.activeObjectId &&
                              t.changeShape(t.activeObjectId, e, n);
                          },
                          setDrawingShape: function (e) {
                            t.setDrawingShape(e);
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _cropAction: function () {
                      var t = this;
                      return W()(
                        {
                          crop: function () {
                            var e = t.getCropzoneRect();
                            e &&
                              !(function (t) {
                                var e = t.left,
                                  n = t.top,
                                  i = t.width,
                                  r = t.height;
                                return (
                                  0 === e && 0 === n && 0.5 === i && 0.5 === r
                                );
                              })(e) &&
                              t
                                .crop(e)
                                .then(function () {
                                  t.stopDrawingMode(),
                                    t.ui.resizeEditor(),
                                    t.ui.changeMenu("crop"),
                                    t._invoker.fire(se, "Crop");
                                })
                                .catch(function (t) {
                                  return E().reject(t);
                                });
                          },
                          cancel: function () {
                            t.stopDrawingMode(), t.ui.changeMenu("crop");
                          },
                          preset: function (e) {
                            switch (e) {
                              case "preset-square":
                                t.setCropzoneRect(1);
                                break;
                              case "preset-3-2":
                                t.setCropzoneRect(1.5);
                                break;
                              case "preset-4-3":
                                t.setCropzoneRect(4 / 3);
                                break;
                              case "preset-5-4":
                                t.setCropzoneRect(5 / 4);
                                break;
                              case "preset-7-5":
                                t.setCropzoneRect(1.4);
                                break;
                              case "preset-16-9":
                                t.setCropzoneRect(16 / 9);
                                break;
                              default:
                                t.setCropzoneRect(),
                                  t.ui.crop.changeApplyButtonStatus(!1);
                            }
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _resizeAction: function () {
                      var t = this;
                      return W()(
                        {
                          getCurrentDimensions: function () {
                            return t._graphics.getCurrentDimensions();
                          },
                          preview: function (e, n, i) {
                            var r = t._graphics.getCurrentDimensions(),
                              o = function () {
                                return r.width / r.height;
                              },
                              a = {};
                            switch (e) {
                              case "width":
                                (a.width = n),
                                  (a.height = i ? n / o() : r.height);
                                break;
                              case "height":
                                (a.height = n),
                                  (a.width = i ? n * o() : r.width);
                                break;
                              default:
                                a = r;
                            }
                            t._graphics.resize(a).then(function () {
                              t.ui.resizeEditor();
                            }),
                              i &&
                                (t.ui.resize.setWidthValue(a.width),
                                t.ui.resize.setHeightValue(a.height));
                          },
                          lockAspectRatio: function (e, n, i) {
                            var r = t._graphics.getCurrentDimensions(),
                              o = r.width,
                              a = r.height,
                              s = o / a;
                            if (e)
                              if (o > a) {
                                var l = i / s,
                                  c = n * s;
                                t.ui.resize.setLimit({
                                  minWidth: c > n ? c : n,
                                  minHeight: n,
                                  maxWidth: i,
                                  maxHeight: l < i ? l : i,
                                });
                              } else {
                                var d = i * s,
                                  u = n / s;
                                t.ui.resize.setLimit({
                                  minWidth: n,
                                  minHeight: u > n ? u : n,
                                  maxWidth: d < i ? d : i,
                                  maxHeight: i,
                                });
                              }
                            else
                              t.ui.resize.setLimit({
                                minWidth: n,
                                minHeight: n,
                                maxWidth: i,
                                maxHeight: i,
                              });
                          },
                          resize: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                            e || (e = t._graphics.getCurrentDimensions()),
                              t
                                .resize(e)
                                .then(function () {
                                  t._graphics.setOriginalDimensions(e),
                                    t.stopDrawingMode(),
                                    t.ui.resizeEditor(),
                                    t.ui.changeMenu("resize");
                                })
                                .catch(function (t) {
                                  return E().reject(t);
                                });
                          },
                          reset: function () {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                              n = t._graphics.getOriginalDimensions();
                            t.ui.resize.setWidthValue(n.width, !0),
                              t.ui.resize.setHeightValue(n.height, !0),
                              t._graphics.resize(n).then(function () {
                                e ||
                                  (t.stopDrawingMode(),
                                  t.ui.resizeEditor(),
                                  t.ui.changeMenu("resize"));
                              });
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _flipAction: function () {
                      var t = this;
                      return W()(
                        {
                          flip: function (e) {
                            return t[e]();
                          },
                        },
                        this._commonAction()
                      );
                    },
                    _filterAction: function () {
                      var t = this;
                      return W()(
                        {
                          applyFilter: function (e, n, i, r) {
                            e
                              ? t.applyFilter(n, i, r)
                              : t.hasFilter(n) && t.removeFilter(n);
                          },
                        },
                        this._commonAction()
                      );
                    },
                    setReAction: function () {
                      var t = this;
                      this.on({
                        undoStackChanged: function (e) {
                          e
                            ? (t.ui.changeHelpButtonEnabled("undo", !0),
                              t.ui.changeHelpButtonEnabled("reset", !0))
                            : (t.ui.changeHelpButtonEnabled("undo", !1),
                              t.ui.changeHelpButtonEnabled("reset", !1)),
                            t.ui.resizeEditor();
                        },
                        redoStackChanged: function (e) {
                          e
                            ? t.ui.changeHelpButtonEnabled("redo", !0)
                            : t.ui.changeHelpButtonEnabled("redo", !1),
                            t.ui.resizeEditor();
                        },
                        objectActivated: function (e) {
                          var n, r;
                          (t.activeObjectId = e.id),
                            t.ui.changeHelpButtonEnabled("delete", !0),
                            t.ui.changeHelpButtonEnabled("deleteAll", !0),
                            "cropzone" === e.type
                              ? t.ui.crop.changeApplyButtonStatus(!0)
                              : i()((n = ["rect", "circle", "triangle"])).call(
                                  n,
                                  e.type
                                ) > -1
                              ? (t.stopDrawingMode(),
                                "shape" !== t.ui.submenu &&
                                  t.ui.changeMenu("shape", !1, !1),
                                t.ui.shape.setShapeStatus({
                                  strokeColor: e.stroke,
                                  strokeWidth: e.strokeWidth,
                                  fillColor: it()(e),
                                }),
                                t.ui.shape.setMaxStrokeValue(
                                  Math.min(e.width, e.height)
                                ))
                              : "path" === e.type || "line" === e.type
                              ? "draw" !== t.ui.submenu &&
                                (t.ui.changeMenu("draw", !1, !1),
                                t.ui.draw.changeStandbyMode())
                              : i()((r = ["i-text", "text"])).call(r, e.type) >
                                -1
                              ? ("text" !== t.ui.submenu &&
                                  t.ui.changeMenu("text", !1, !1),
                                t.ui.text.setTextStyleStateOnAction(e))
                              : "icon" === e.type &&
                                (t.stopDrawingMode(),
                                "icon" !== t.ui.submenu &&
                                  t.ui.changeMenu("icon", !1, !1),
                                t.ui.icon.setIconPickerColor(it()(e)));
                        },
                        addText: function (e) {
                          var n = t.ui.text,
                            i = n.textColor,
                            r = n.fontSize,
                            o = n.fontStyle,
                            a = n.fontWeight,
                            s = n.underline;
                          t.addText("Double Click", {
                            position: e.originPosition,
                            styles: {
                              fill: i,
                              fontSize: r,
                              fontFamily: "Noto Sans",
                              fontStyle: o,
                              fontWeight: a,
                              underline: s,
                            },
                          }).then(function () {
                            t.changeCursor("default");
                          });
                        },
                        addObjectAfter: function (e) {
                          var n;
                          "icon" === e.type
                            ? t.ui.icon.changeStandbyMode()
                            : i()((n = ["rect", "circle", "triangle"])).call(
                                n,
                                e.type
                              ) > -1 &&
                              (t.ui.shape.setMaxStrokeValue(
                                Math.min(e.width, e.height)
                              ),
                              t.ui.shape.changeStandbyMode());
                        },
                        objectScaled: function (e) {
                          var n, r;
                          if (
                            i()((n = ["i-text", "text"])).call(n, e.type) > -1
                          )
                            t.ui.text.fontSize = Ue(e.fontSize);
                          else if (
                            i()((r = ["rect", "circle", "triangle"])).call(
                              r,
                              e.type
                            ) >= 0
                          ) {
                            var o = e.width,
                              a = e.height,
                              s = t.ui.shape.getStrokeValue();
                            o < s && t.ui.shape.setStrokeValue(o),
                              a < s && t.ui.shape.setStrokeValue(a);
                          }
                        },
                        selectionCleared: function () {
                          (t.activeObjectId = null),
                            "text" === t.ui.submenu
                              ? t.changeCursor("text")
                              : tn(["draw", "crop", "resize"], t.ui.submenu) ||
                                t.stopDrawingMode();
                        },
                      });
                    },
                    _historyAction: function () {
                      var t = this;
                      return {
                        undo: function (e) {
                          return t.undo(e);
                        },
                        redo: function (e) {
                          return t.redo(e);
                        },
                      };
                    },
                    _commonAction: function () {
                      var t,
                        e,
                        n,
                        i,
                        r = this,
                        o = _e.TEXT,
                        a = _e.CROPPER,
                        s = _e.SHAPE,
                        l = _e.ZOOM,
                        c = _e.RESIZE;
                      return {
                        modeChange: function (t) {
                          switch (t) {
                            case "text":
                              r._changeActivateMode(o);
                              break;
                            case "crop":
                              r.startDrawingMode(a);
                              break;
                            case "shape":
                              r._changeActivateMode(s),
                                r.setDrawingShape(
                                  r.ui.shape.type,
                                  r.ui.shape.options
                                );
                              break;
                            case "zoom":
                              r.startDrawingMode(l);
                              break;
                            case "resize":
                              r.startDrawingMode(c);
                          }
                        },
                        deactivateAll: T()((t = this.deactivateAll)).call(
                          t,
                          this
                        ),
                        changeSelectableAll: T()(
                          (e = this.changeSelectableAll)
                        ).call(e, this),
                        discardSelection: T()((n = this.discardSelection)).call(
                          n,
                          this
                        ),
                        stopDrawingMode: T()((i = this.stopDrawingMode)).call(
                          i,
                          this
                        ),
                      };
                    },
                    mixin: function (t) {
                      W()(t.prototype, this);
                    },
                  },
                  Pi = r(602),
                  Ri = r.n(Pi),
                  Ii = r(5573),
                  Wi = r.n(Ii),
                  Ni = (function () {
                    function t(e, n) {
                      z(this, t), (this.name = e), (this.graphics = n);
                    }
                    return (
                      k(t, [
                        {
                          key: "fire",
                          value: function () {
                            for (
                              var t = this.graphics,
                                e = arguments.length,
                                n = new Array(e),
                                i = 0;
                              i < e;
                              i++
                            )
                              n[i] = arguments[i];
                            return this.graphics.fire.apply(t, n);
                          },
                        },
                        {
                          key: "setCanvasImage",
                          value: function (t, e) {
                            this.graphics.setCanvasImage(t, e);
                          },
                        },
                        {
                          key: "getCanvasElement",
                          value: function () {
                            return this.graphics.getCanvasElement();
                          },
                        },
                        {
                          key: "getCanvas",
                          value: function () {
                            return this.graphics.getCanvas();
                          },
                        },
                        {
                          key: "getCanvasImage",
                          value: function () {
                            return this.graphics.getCanvasImage();
                          },
                        },
                        {
                          key: "getImageName",
                          value: function () {
                            return this.graphics.getImageName();
                          },
                        },
                        {
                          key: "getEditor",
                          value: function () {
                            return this.graphics.getEditor();
                          },
                        },
                        {
                          key: "getName",
                          value: function () {
                            return this.name;
                          },
                        },
                        {
                          key: "setImageProperties",
                          value: function (t, e) {
                            this.graphics.setImageProperties(t, e);
                          },
                        },
                        {
                          key: "setCanvasCssDimension",
                          value: function (t) {
                            this.graphics.setCanvasCssDimension(t);
                          },
                        },
                        {
                          key: "setCanvasBackstoreDimension",
                          value: function (t) {
                            this.graphics.setCanvasBackstoreDimension(t);
                          },
                        },
                        {
                          key: "adjustCanvasDimension",
                          value: function () {
                            this.graphics.adjustCanvasDimension();
                          },
                        },
                        {
                          key: "adjustCanvasDimensionBase",
                          value: function () {
                            this.graphics.adjustCanvasDimensionBase();
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  Bi = { padding: 0, crossOrigin: "Anonymous" },
                  Fi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      return z(this, n), e.call(this, At.IMAGE_LOADER, t);
                    }
                    return (
                      k(n, [
                        {
                          key: "load",
                          value: function (t, e) {
                            var n,
                              i = this;
                            if (t || e)
                              n = this._setBackgroundImage(e).then(function (
                                e
                              ) {
                                return (
                                  i.setCanvasImage(t, e),
                                  i.adjustCanvasDimension(),
                                  e
                                );
                              });
                            else {
                              var r = this.getCanvas();
                              (r.backgroundImage = null),
                                r.renderAll(),
                                (n = new (E())(function (t) {
                                  i.setCanvasImage("", null), t();
                                }));
                            }
                            return n;
                          },
                        },
                        {
                          key: "_setBackgroundImage",
                          value: function (t) {
                            var e = this;
                            return t
                              ? new (E())(function (n, i) {
                                  var r = e.getCanvas();
                                  r.setBackgroundImage(
                                    t,
                                    function () {
                                      var t = r.backgroundImage;
                                      t && t.getElement()
                                        ? n(t)
                                        : i("Invalid image loaded.");
                                    },
                                    Bi
                                  );
                                })
                              : E().reject("The background image is empty.");
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  $i = ["tl", "tr", "mt", "ml", "mr", "mb", "bl", "br"],
                  Hi = function () {};
                function Yi(t, e) {
                  return t > e ? "width" : "height";
                }
                var Ui = R.fabric.util.createClass(R.fabric.Rect, {
                    initialize: function (t, e, n) {
                      ((e = W()(e, n)).type = "cropzone"),
                        this.callSuper("initialize", e),
                        this._addEventHandler(),
                        (this.canvas = t),
                        (this.options = e);
                    },
                    canvasEventDelegation: function (t) {
                      var e,
                        n = "unregistered";
                      return (
                        this.canvasEventTrigger[t] !== Hi
                          ? (n = "registered")
                          : i()((e = [Vt, Gt])).call(e, t) < 0 && (n = "none"),
                        n
                      );
                    },
                    canvasEventRegister: function (t, e) {
                      this.canvasEventTrigger[t] = e;
                    },
                    _addEventHandler: function () {
                      var t, e, n, i, r;
                      (this.canvasEventTrigger =
                        (x((t = {}), Vt, Hi), x(t, Gt, Hi), t)),
                        this.on({
                          moving: T()((e = this._onMoving)).call(e, this),
                          scaling: T()((n = this._onScaling)).call(n, this),
                        }),
                        R.fabric.util.addListener(
                          document,
                          "keydown",
                          T()((i = this._onKeyDown)).call(i, this)
                        ),
                        R.fabric.util.addListener(
                          document,
                          "keyup",
                          T()((r = this._onKeyUp)).call(r, this)
                        );
                    },
                    _renderCropzone: function (t) {
                      var e = this.flipX ? -1 : 1,
                        n = this.flipY ? -1 : 1,
                        i = e / this.scaleX,
                        r = n / this.scaleY;
                      t.scale(i, r),
                        this._fillOuterRect(t, "rgba(0, 0, 0, 0.5)"),
                        this.options.lineWidth
                          ? (this._fillInnerRect(t),
                            this._strokeBorder(t, "rgb(255, 255, 255)", {
                              lineWidth: this.options.lineWidth,
                            }))
                          : (this._strokeBorder(t, "rgb(0, 0, 0)", {
                              lineDashWidth: 7,
                            }),
                            this._strokeBorder(t, "rgb(255, 255, 255)", {
                              lineDashWidth: 7,
                              lineDashOffset: 7,
                            })),
                        t.scale(1 / i, 1 / r);
                    },
                    _render: function (t) {
                      this.callSuper("_render", t), this._renderCropzone(t);
                    },
                    _fillOuterRect: function (t, e) {
                      var n = this._getCoordinates(),
                        i = n.x,
                        r = n.y;
                      t.save(),
                        (t.fillStyle = e),
                        t.beginPath(),
                        t.moveTo(i[0] - 1, r[0] - 1),
                        t.lineTo(i[3] + 1, r[0] - 1),
                        t.lineTo(i[3] + 1, r[3] + 1),
                        t.lineTo(i[0] - 1, r[3] + 1),
                        t.lineTo(i[0] - 1, r[0] - 1),
                        t.closePath(),
                        t.moveTo(i[1], r[1]),
                        t.lineTo(i[1], r[2]),
                        t.lineTo(i[2], r[2]),
                        t.lineTo(i[2], r[1]),
                        t.lineTo(i[1], r[1]),
                        t.closePath(),
                        it()(t).call(t),
                        t.restore();
                    },
                    _fillInnerRect: function (t) {
                      var e = this._getCoordinates(),
                        n = e.x,
                        i = e.y,
                        r = this._caculateInnerPosition(n, (n[2] - n[1]) / 3),
                        o = this._caculateInnerPosition(i, (i[2] - i[1]) / 3);
                      t.save(),
                        (t.strokeStyle = "rgba(255, 255, 255, 0.7)"),
                        (t.lineWidth = this.options.lineWidth),
                        t.beginPath(),
                        t.moveTo(r[0], o[1]),
                        t.lineTo(r[3], o[1]),
                        t.moveTo(r[0], o[2]),
                        t.lineTo(r[3], o[2]),
                        t.moveTo(r[1], o[0]),
                        t.lineTo(r[1], o[3]),
                        t.moveTo(r[2], o[0]),
                        t.lineTo(r[2], o[3]),
                        t.stroke(),
                        t.closePath(),
                        t.restore();
                    },
                    _caculateInnerPosition: function (t, e) {
                      var n = [];
                      return (
                        (n[0] = t[1]),
                        (n[1] = t[1] + e),
                        (n[2] = t[1] + 2 * e),
                        (n[3] = t[2]),
                        n
                      );
                    },
                    _getCoordinates: function () {
                      var t,
                        e,
                        n = this.canvas,
                        i = this.width,
                        r = this.height,
                        o = this.left,
                        a = this.top,
                        s = i / 2,
                        l = r / 2,
                        c = n.getHeight(),
                        d = n.getWidth();
                      return {
                        x: Mn()((t = [-(s + o), -s, s, s + (d - o - i)])).call(
                          t,
                          Math.ceil
                        ),
                        y: Mn()((e = [-(l + a), -l, l, l + (c - a - r)])).call(
                          e,
                          Math.ceil
                        ),
                      };
                    },
                    _strokeBorder: function (t, e, n) {
                      var i = n.lineDashWidth,
                        r = n.lineDashOffset,
                        o = n.lineWidth,
                        a = this.width / 2,
                        s = this.height / 2;
                      t.save(),
                        (t.strokeStyle = e),
                        t.setLineDash && t.setLineDash([i, i]),
                        r && (t.lineDashOffset = r),
                        o && (t.lineWidth = o),
                        t.beginPath(),
                        t.moveTo(-a, -s),
                        t.lineTo(a, -s),
                        t.lineTo(a, s),
                        t.lineTo(-a, s),
                        t.lineTo(-a, -s),
                        t.stroke(),
                        t.restore();
                    },
                    _onMoving: function () {
                      var t = this.height,
                        e = this.width,
                        n = this.left,
                        i = this.top,
                        r = this.canvas.getWidth() - e,
                        o = this.canvas.getHeight() - t;
                      (this.left = $e(n, 0, r)),
                        (this.top = $e(i, 0, o)),
                        this.canvasEventTrigger[Vt](this);
                    },
                    _onScaling: function (t) {
                      var e = t.transform.corner,
                        n = this.canvas.getPointer(t.e),
                        i = this._calcScalingSizeFromPointer(n, e);
                      this.scale(1).set(i), this.canvasEventTrigger[Gt](this);
                    },
                    _calcScalingSizeFromPointer: function (t, e) {
                      return (
                        (function (t) {
                          return i()($i).call($i, t) >= 0;
                        })(e) && this._resizeCropZone(t, e)
                      );
                    },
                    adjustRatioCropzoneSize: function (t) {
                      var e = t.width,
                        n = t.height,
                        i = t.leftMaker,
                        r = t.topMaker,
                        o = t.maxWidth,
                        a = t.maxHeight,
                        s = t.scaleTo;
                      if (
                        ((e = o ? $e(e, 1, o) : e),
                        (n = a ? $e(n, 1, a) : n),
                        !this.presetRatio)
                      )
                        return (
                          this._withShiftKey &&
                            (e > n ? (n = e) : n > e && (e = n)),
                          { width: e, height: n, left: i(e), top: r(n) }
                        );
                      "width" === s
                        ? (n = e / this.presetRatio)
                        : (e = n * this.presetRatio);
                      var l = Math.min(o / e, a / n);
                      if (l <= 1) {
                        var c,
                          d = K(
                            Mn()((c = [e, n])).call(c, function (t) {
                              return t * l;
                            }),
                            2
                          );
                        (e = d[0]), (n = d[1]);
                      }
                      return { width: e, height: n, left: i(e), top: r(n) };
                    },
                    _getCropzoneRectInfo: function () {
                      var t = this.canvas,
                        e = t.width,
                        n = t.height,
                        i = this.getBoundingRect(!1, !0),
                        r = i.top,
                        o = i.left,
                        a = i.width,
                        s = i.height;
                      return {
                        rectTop: r,
                        rectLeft: o,
                        rectWidth: a,
                        rectHeight: s,
                        rectRight: o + a,
                        rectBottom: r + s,
                        canvasWidth: e,
                        canvasHeight: n,
                      };
                    },
                    _resizeCropZone: function (t, e) {
                      var n = t.x,
                        i = t.y,
                        r = this._getCropzoneRectInfo(),
                        o = r.rectWidth,
                        a = r.rectHeight,
                        s = r.rectTop,
                        l = r.rectLeft,
                        c = r.rectBottom,
                        d = r.rectRight,
                        u = r.canvasWidth,
                        p = r.canvasHeight,
                        h = {
                          tl: {
                            width: d - n,
                            height: c - i,
                            leftMaker: function (t) {
                              return d - t;
                            },
                            topMaker: function (t) {
                              return c - t;
                            },
                            maxWidth: d,
                            maxHeight: c,
                            scaleTo: Yi(l - n, s - i),
                          },
                          tr: {
                            width: n - l,
                            height: c - i,
                            leftMaker: function () {
                              return l;
                            },
                            topMaker: function (t) {
                              return c - t;
                            },
                            maxWidth: u - l,
                            maxHeight: c,
                            scaleTo: Yi(n - d, s - i),
                          },
                          mt: {
                            width: o,
                            height: c - i,
                            leftMaker: function () {
                              return l;
                            },
                            topMaker: function (t) {
                              return c - t;
                            },
                            maxWidth: u - l,
                            maxHeight: c,
                            scaleTo: "height",
                          },
                          ml: {
                            width: d - n,
                            height: a,
                            leftMaker: function (t) {
                              return d - t;
                            },
                            topMaker: function () {
                              return s;
                            },
                            maxWidth: d,
                            maxHeight: p - s,
                            scaleTo: "width",
                          },
                          mr: {
                            width: n - l,
                            height: a,
                            leftMaker: function () {
                              return l;
                            },
                            topMaker: function () {
                              return s;
                            },
                            maxWidth: u - l,
                            maxHeight: p - s,
                            scaleTo: "width",
                          },
                          mb: {
                            width: o,
                            height: i - s,
                            leftMaker: function () {
                              return l;
                            },
                            topMaker: function () {
                              return s;
                            },
                            maxWidth: u - l,
                            maxHeight: p - s,
                            scaleTo: "height",
                          },
                          bl: {
                            width: d - n,
                            height: i - s,
                            leftMaker: function (t) {
                              return d - t;
                            },
                            topMaker: function () {
                              return s;
                            },
                            maxWidth: d,
                            maxHeight: p - s,
                            scaleTo: Yi(l - n, i - c),
                          },
                          br: {
                            width: n - l,
                            height: i - s,
                            leftMaker: function () {
                              return l;
                            },
                            topMaker: function () {
                              return s;
                            },
                            maxWidth: u - l,
                            maxHeight: p - s,
                            scaleTo: Yi(n - d, i - c),
                          },
                        };
                      return this.adjustRatioCropzoneSize(h[e]);
                    },
                    isValid: function () {
                      return (
                        this.left >= 0 &&
                        this.top >= 0 &&
                        this.width > 0 &&
                        this.height > 0
                      );
                    },
                    _onKeyDown: function (t) {
                      t.keyCode === we && (this._withShiftKey = !0);
                    },
                    _onKeyUp: function (t) {
                      t.keyCode === we && (this._withShiftKey = !1);
                    },
                  }),
                  Xi = {
                    presetRatio: null,
                    top: -10,
                    left: -10,
                    height: 1,
                    width: 1,
                  },
                  Vi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a, s, l;
                      return (
                        z(this, n),
                        ((l = e.call(this, At.CROPPER, t))._cropzone = null),
                        (l._startX = null),
                        (l._startY = null),
                        (l._withShiftKey = !1),
                        (l._listeners = {
                          keydown: T()((i = l._onKeyDown)).call(i, qn(l)),
                          keyup: T()((r = l._onKeyUp)).call(r, qn(l)),
                          mousedown: T()((o = l._onFabricMouseDown)).call(
                            o,
                            qn(l)
                          ),
                          mousemove: T()((a = l._onFabricMouseMove)).call(
                            a,
                            qn(l)
                          ),
                          mouseup: T()((s = l._onFabricMouseUp)).call(s, qn(l)),
                        }),
                        l
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function () {
                            if (!this._cropzone) {
                              var t = this.getCanvas();
                              t.forEachObject(function (t) {
                                t.evented = !1;
                              }),
                                (this._cropzone = new Ui(
                                  t,
                                  W()(
                                    {
                                      left: 0,
                                      top: 0,
                                      width: 0.5,
                                      height: 0.5,
                                      strokeWidth: 0,
                                      cornerSize: 10,
                                      cornerColor: "black",
                                      fill: "transparent",
                                    },
                                    xt,
                                    this.graphics.cropSelectionStyle
                                  )
                                )),
                                t.discardActiveObject(),
                                t.add(this._cropzone),
                                t.on("mouse:down", this._listeners.mousedown),
                                (t.selection = !1),
                                (t.defaultCursor = "crosshair"),
                                R.fabric.util.addListener(
                                  document,
                                  "keydown",
                                  this._listeners.keydown
                                ),
                                R.fabric.util.addListener(
                                  document,
                                  "keyup",
                                  this._listeners.keyup
                                );
                            }
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            var t = this.getCanvas(),
                              e = this._cropzone;
                            e &&
                              (t.remove(e),
                              (t.selection = !0),
                              (t.defaultCursor = "default"),
                              t.off("mouse:down", this._listeners.mousedown),
                              t.forEachObject(function (t) {
                                t.evented = !0;
                              }),
                              (this._cropzone = null),
                              R.fabric.util.removeListener(
                                document,
                                "keydown",
                                this._listeners.keydown
                              ),
                              R.fabric.util.removeListener(
                                document,
                                "keyup",
                                this._listeners.keyup
                              ));
                          },
                        },
                        {
                          key: "changeVisibility",
                          value: function (t) {
                            this._cropzone &&
                              this._cropzone.set({ visible: t });
                          },
                        },
                        {
                          key: "_onFabricMouseDown",
                          value: function (t) {
                            var e = this.getCanvas();
                            if (!t.target) {
                              e.selection = !1;
                              var n = e.getPointer(t.e);
                              (this._startX = n.x),
                                (this._startY = n.y),
                                e.on({
                                  "mouse:move": this._listeners.mousemove,
                                  "mouse:up": this._listeners.mouseup,
                                });
                            }
                          },
                        },
                        {
                          key: "_onFabricMouseMove",
                          value: function (t) {
                            var e = this.getCanvas(),
                              n = e.getPointer(t.e),
                              i = n.x,
                              r = n.y,
                              o = this._cropzone;
                            Math.abs(i - this._startX) +
                              Math.abs(r - this._startY) >
                              10 &&
                              (e.remove(o),
                              o.set(
                                this._calcRectDimensionFromPoint(
                                  i,
                                  r,
                                  o.presetRatio
                                )
                              ),
                              e.add(o),
                              e.setActiveObject(o));
                          },
                        },
                        {
                          key: "_calcRectDimensionFromPoint",
                          value: function (t, e) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : null,
                              i = this.getCanvas(),
                              r = i.getWidth(),
                              o = i.getHeight(),
                              a = this._startX,
                              s = this._startY,
                              l = $e(t, 0, a),
                              c = $e(e, 0, s),
                              d = $e(t, a, r) - l,
                              u = $e(e, s, o) - c;
                            return (
                              this._withShiftKey && !n
                                ? (d > u ? (u = d) : u > d && (d = u),
                                  a >= t && (l = a - d),
                                  s >= e && (c = s - u))
                                : n &&
                                  ((u = d / n),
                                  a >= t && (l = $e(a - d, 0, r)),
                                  s >= e && (c = $e(s - u, 0, o)),
                                  c + u > o &&
                                    ((d = (u = o - c) * n),
                                    a >= t && (l = $e(a - d, 0, r)),
                                    s >= e && (c = $e(s - u, 0, o)))),
                              { left: l, top: c, width: d, height: u }
                            );
                          },
                        },
                        {
                          key: "_onFabricMouseUp",
                          value: function () {
                            var t = this._cropzone,
                              e = this._listeners,
                              n = this.getCanvas();
                            n.setActiveObject(t),
                              n.off({
                                "mouse:move": e.mousemove,
                                "mouse:up": e.mouseup,
                              });
                          },
                        },
                        {
                          key: "getCroppedImageData",
                          value: function (t) {
                            var e = this.getCanvas(),
                              n = e.contains(this._cropzone);
                            if (!t) return null;
                            n && e.remove(this._cropzone);
                            var i = {
                              imageName: this.getImageName(),
                              url: e.toDataURL(t),
                            };
                            return n && e.add(this._cropzone), i;
                          },
                        },
                        {
                          key: "getCropzoneRect",
                          value: function () {
                            var t = this._cropzone;
                            return t.isValid()
                              ? {
                                  left: t.left,
                                  top: t.top,
                                  width: t.width,
                                  height: t.height,
                                }
                              : null;
                          },
                        },
                        {
                          key: "setCropzoneRect",
                          value: function (t) {
                            var e = this.getCanvas(),
                              n = this._cropzone;
                            e.discardActiveObject(),
                              (e.selection = !1),
                              e.remove(n),
                              n.set(
                                t ? this._getPresetPropertiesForCropSize(t) : Xi
                              ),
                              e.add(n),
                              (e.selection = !0),
                              t && e.setActiveObject(n);
                          },
                        },
                        {
                          key: "_getPresetPropertiesForCropSize",
                          value: function (t) {
                            var e,
                              n,
                              i = this.getCanvas(),
                              r = i.getWidth(),
                              o = i.getHeight(),
                              a = r >= o ? r : o,
                              s = function (t, e) {
                                return t > e ? e / t : 1;
                              },
                              l = a * t,
                              c = a,
                              d = s(l, r),
                              u = K(
                                Mn()((e = [l, c])).call(e, function (t) {
                                  return t * d;
                                }),
                                2
                              );
                            l = u[0];
                            var p = s((c = u[1]), o),
                              h = K(
                                Mn()((n = [l, c])).call(n, function (t) {
                                  return Number((t * p).toFixed(2));
                                }),
                                2
                              );
                            return (
                              (l = h[0]),
                              {
                                presetRatio: t,
                                top: (o - (c = h[1])) / 2,
                                left: (r - l) / 2,
                                width: l,
                                height: c,
                              }
                            );
                          },
                        },
                        {
                          key: "_onKeyDown",
                          value: function (t) {
                            t.keyCode === we && (this._withShiftKey = !0);
                          },
                        },
                        {
                          key: "_onKeyUp",
                          value: function (t) {
                            t.keyCode === we && (this._withShiftKey = !1);
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Gi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      return z(this, n), e.call(this, At.FLIP, t);
                    }
                    return (
                      k(n, [
                        {
                          key: "getCurrentSetting",
                          value: function () {
                            var t = this.getCanvasImage();
                            return { flipX: t.flipX, flipY: t.flipY };
                          },
                        },
                        {
                          key: "set",
                          value: function (t) {
                            var e = this.getCurrentSetting(),
                              n = e.flipX !== t.flipX,
                              i = e.flipY !== t.flipY;
                            return n || i
                              ? (W()(e, t),
                                this.setImageProperties(e, !0),
                                this._invertAngle(n, i),
                                this._flipObjects(n, i),
                                E().resolve({
                                  flipX: e.flipX,
                                  flipY: e.flipY,
                                  angle: this.getCanvasImage().angle,
                                }))
                              : E().reject(
                                  "The flipX and flipY setting values are not changed."
                                );
                          },
                        },
                        {
                          key: "_invertAngle",
                          value: function (t, e) {
                            var n = this.getCanvasImage(),
                              i = n.angle;
                            t && (i *= -1),
                              e && (i *= -1),
                              n.rotate(_n()(i)).setCoords();
                          },
                        },
                        {
                          key: "_flipObjects",
                          value: function (t, e) {
                            var n = this.getCanvas();
                            t &&
                              n.forEachObject(function (t) {
                                t.set({
                                  angle: _n()(-1 * t.angle),
                                  flipX: !t.flipX,
                                  left: n.width - t.left,
                                }).setCoords();
                              }),
                              e &&
                                n.forEachObject(function (t) {
                                  t.set({
                                    angle: _n()(-1 * t.angle),
                                    flipY: !t.flipY,
                                    top: n.height - t.top,
                                  }).setCoords();
                                }),
                              n.renderAll();
                          },
                        },
                        {
                          key: "reset",
                          value: function () {
                            return this.set({ flipX: !1, flipY: !1 });
                          },
                        },
                        {
                          key: "flipX",
                          value: function () {
                            var t = this.getCurrentSetting();
                            return this.set({
                              flipX: !t.flipX,
                              flipY: t.flipY,
                            });
                          },
                        },
                        {
                          key: "flipY",
                          value: function () {
                            var t = this.getCurrentSetting();
                            return this.set({
                              flipX: t.flipX,
                              flipY: !t.flipY,
                            });
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Ki = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      return z(this, n), e.call(this, At.ROTATION, t);
                    }
                    return (
                      k(n, [
                        {
                          key: "getCurrentAngle",
                          value: function () {
                            return this.getCanvasImage().angle;
                          },
                        },
                        {
                          key: "setAngle",
                          value: function (t) {
                            var e = this.getCurrentAngle() % 360;
                            t %= 360;
                            var n = this.getCanvasImage(),
                              i = n.getCenterPoint();
                            n.set({ angle: t }).setCoords(),
                              this.adjustCanvasDimension();
                            var r = n.getCenterPoint();
                            return (
                              this._rotateForEachObject(i, r, t - e),
                              E().resolve(t)
                            );
                          },
                        },
                        {
                          key: "_rotateForEachObject",
                          value: function (t, e, n) {
                            var i = this.getCanvas(),
                              r = t.x - e.x,
                              o = t.y - e.y;
                            i.forEachObject(function (e) {
                              var i = e.getCenterPoint(),
                                a = R.fabric.util.degreesToRadians(n),
                                s = R.fabric.util.rotatePoint(i, t, a);
                              e.set({
                                left: s.x - r,
                                top: s.y - o,
                                angle: (e.angle + n) % 360,
                              }),
                                e.setCoords();
                            }),
                              i.renderAll();
                          },
                        },
                        {
                          key: "rotate",
                          value: function (t) {
                            var e = this.getCurrentAngle();
                            return this.setAngle(e + t);
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Zi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i;
                      return (
                        z(this, n),
                        ((i = e.call(this, At.FREE_DRAWING, t)).width = 12),
                        (i.oColor = new R.fabric.Color("rgba(0, 0, 0, 0.5)")),
                        i
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            (this.getCanvas().isDrawingMode = !0),
                              this.setBrush(t);
                          },
                        },
                        {
                          key: "setBrush",
                          value: function (t) {
                            var e = this.getCanvas().freeDrawingBrush;
                            (t = t || {}),
                              (this.width = t.width || this.width),
                              t.color &&
                                (this.oColor = new R.fabric.Color(t.color)),
                              (e.width = this.width),
                              (e.color = this.oColor.toRgba());
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            this.getCanvas().isDrawingMode = !1;
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Ji = R.fabric.util.createClass(R.fabric.Line, {
                    type: "line",
                    initialize: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      this.callSuper("initialize", t, e),
                        (this.arrowType = e.arrowType);
                    },
                    _render: function (t) {
                      var e = this.calcLinePoints(),
                        n = { fromX: e.x1, fromY: e.y1, toX: e.x2, toY: e.y2 };
                      (this.ctx = t),
                        (t.lineWidth = this.strokeWidth),
                        this._renderBasicLinePath(n),
                        this._drawDecoratorPath(n),
                        this._renderStroke(t);
                    },
                    _renderBasicLinePath: function (t) {
                      var e = t.fromX,
                        n = t.fromY,
                        i = t.toX,
                        r = t.toY;
                      this.ctx.beginPath(),
                        this.ctx.moveTo(e, n),
                        this.ctx.lineTo(i, r);
                    },
                    _drawDecoratorPath: function (t) {
                      this._drawDecoratorPathType("head", t),
                        this._drawDecoratorPathType("tail", t);
                    },
                    _drawDecoratorPathType: function (t, e) {
                      switch (this.arrowType[t]) {
                        case "triangle":
                          this._drawTrianglePath(t, e);
                          break;
                        case "chevron":
                          this._drawChevronPath(t, e);
                      }
                    },
                    _drawTrianglePath: function (t, e) {
                      var n = 1.7 * this.ctx.lineWidth;
                      this._drawChevronPath(t, e, n), this.ctx.closePath();
                    },
                    _drawChevronPath: function (t, e, n) {
                      var i = this,
                        r = e.fromX,
                        o = e.fromY,
                        a = e.toX,
                        s = e.toY,
                        l = this.ctx;
                      n || (n = 2.7 * this.ctx.lineWidth);
                      var c = K("head" === t ? [r, o] : [a, s], 2),
                        d = c[0],
                        u = c[1],
                        p = K("head" === t ? [a, s] : [r, o], 2),
                        h = p[0],
                        f = p[1],
                        b = (180 * Math.atan2(f - u, h - d)) / Math.PI,
                        m = function (t) {
                          return i.getRotatePosition(n, t, { x: d, y: u });
                        };
                      l.moveTo.apply(l, w(m(b + 30))),
                        l.lineTo(d, u),
                        l.lineTo.apply(l, w(m(b - 30)));
                    },
                    getRotatePosition: function (t, e, n) {
                      var i = (e * Math.PI) / 180,
                        r = n.x,
                        o = n.y;
                      return [t * Math.cos(i) + r, t * Math.sin(i) + o];
                    },
                  }),
                  Qi = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a;
                      return (
                        z(this, n),
                        ((a = e.call(this, At.LINE, t))._width = 12),
                        (a._oColor = new R.fabric.Color("rgba(0, 0, 0, 0.5)")),
                        (a._listeners = {
                          mousedown: T()((i = a._onFabricMouseDown)).call(
                            i,
                            qn(a)
                          ),
                          mousemove: T()((r = a._onFabricMouseMove)).call(
                            r,
                            qn(a)
                          ),
                          mouseup: T()((o = a._onFabricMouseUp)).call(o, qn(a)),
                        }),
                        a
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "setHeadOption",
                          value: function (t) {
                            var e = t.arrowType,
                              n = void 0 === e ? { head: null, tail: null } : e;
                            this._arrowType = n;
                          },
                        },
                        {
                          key: "start",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              e = this.getCanvas();
                            (e.defaultCursor = "crosshair"),
                              (e.selection = !1),
                              this.setHeadOption(t),
                              this.setBrush(t),
                              e.forEachObject(function (t) {
                                t.set({ evented: !1 });
                              }),
                              e.on({ "mouse:down": this._listeners.mousedown });
                          },
                        },
                        {
                          key: "setBrush",
                          value: function (t) {
                            var e = this.getCanvas().freeDrawingBrush;
                            (t = t || {}),
                              (this._width = t.width || this._width),
                              t.color &&
                                (this._oColor = new R.fabric.Color(t.color)),
                              (e.width = this._width),
                              (e.color = this._oColor.toRgba());
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            var t = this.getCanvas();
                            (t.defaultCursor = "default"),
                              (t.selection = !0),
                              t.forEachObject(function (t) {
                                t.set({ evented: !0 });
                              }),
                              t.off("mouse:down", this._listeners.mousedown);
                          },
                        },
                        {
                          key: "_onFabricMouseDown",
                          value: function (t) {
                            var e = this.getCanvas(),
                              n = e.getPointer(t.e),
                              i = n.x,
                              r = n.y,
                              o = [i, r, i, r];
                            (this._line = new Ji(o, {
                              stroke: this._oColor.toRgba(),
                              strokeWidth: this._width,
                              arrowType: this._arrowType,
                              evented: !1,
                            })),
                              this._line.set(Ae),
                              e.add(this._line),
                              e.on({
                                "mouse:move": this._listeners.mousemove,
                                "mouse:up": this._listeners.mouseup,
                              }),
                              this.fire(
                                ee,
                                this._createLineEventObjectProperties()
                              );
                          },
                        },
                        {
                          key: "_onFabricMouseMove",
                          value: function (t) {
                            var e = this.getCanvas(),
                              n = e.getPointer(t.e);
                            this._line.set({ x2: n.x, y2: n.y }),
                              this._line.setCoords(),
                              e.renderAll();
                          },
                        },
                        {
                          key: "_onFabricMouseUp",
                          value: function () {
                            var t = this.getCanvas();
                            this.fire(
                              Zt,
                              this._createLineEventObjectProperties()
                            ),
                              (this._line = null),
                              t.off({
                                "mouse:move": this._listeners.mousemove,
                                "mouse:up": this._listeners.mouseup,
                              });
                          },
                        },
                        {
                          key: "_createLineEventObjectProperties",
                          value: function () {
                            var t = this.graphics.createObjectProperties(
                                this._line
                              ),
                              e = this._line,
                              n = e.x1,
                              i = e.x2,
                              r = e.y1,
                              o = e.y2;
                            return W()({}, t, {
                              startPosition: { x: n, y: r },
                              endPosition: { x: i, y: o },
                            });
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  tr = { fill: "#000000", left: 0, top: 0 },
                  er = {
                    fill: "#000000",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textAlign: "tie-text-align-left",
                    underline: !1,
                  },
                  nr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a, s, l;
                      return (
                        z(this, n),
                        ((l = e.call(this, At.TEXT, t))._defaultStyles = tr),
                        (l._isSelected = !1),
                        (l._selectedObj = {}),
                        (l._editingObj = {}),
                        (l._listeners = {
                          mousedown: T()((i = l._onFabricMouseDown)).call(
                            i,
                            qn(l)
                          ),
                          select: T()((r = l._onFabricSelect)).call(r, qn(l)),
                          selectClear: T()((o = l._onFabricSelectClear)).call(
                            o,
                            qn(l)
                          ),
                          scaling: T()((a = l._onFabricScaling)).call(a, qn(l)),
                          textChanged: T()((s = l._onFabricTextChanged)).call(
                            s,
                            qn(l)
                          ),
                        }),
                        (l._textarea = null),
                        (l._ratio = 1),
                        (l._lastClickTime = new Date().getTime()),
                        (l._editingObjInfos = {}),
                        (l.isPrevEditing = !1),
                        l
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function () {
                            var t = this,
                              e = this.getCanvas();
                            (e.selection = !1),
                              (e.defaultCursor = "text"),
                              e.on({
                                "mouse:down": this._listeners.mousedown,
                                "selection:created": this._listeners.select,
                                "selection:updated": this._listeners.select,
                                "before:selection:cleared":
                                  this._listeners.selectClear,
                                "object:scaling": this._listeners.scaling,
                                "text:changed": this._listeners.textChanged,
                              }),
                              e.forEachObject(function (e) {
                                "i-text" === e.type &&
                                  t.adjustOriginPosition(e, "start");
                              }),
                              this.setCanvasRatio();
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            var t = this,
                              e = this.getCanvas();
                            (e.selection = !0),
                              (e.defaultCursor = "default"),
                              e.forEachObject(function (n) {
                                "i-text" === n.type &&
                                  ("" === n.text
                                    ? e.remove(n)
                                    : t.adjustOriginPosition(n, "end"));
                              }),
                              e.off({
                                "mouse:down": this._listeners.mousedown,
                                "selection:created": this._listeners.select,
                                "selection:updated": this._listeners.select,
                                "before:selection:cleared":
                                  this._listeners.selectClear,
                                "object:selected": this._listeners.select,
                                "object:scaling": this._listeners.scaling,
                                "text:changed": this._listeners.textChanged,
                              });
                          },
                        },
                        {
                          key: "adjustOriginPosition",
                          value: function (t, e) {
                            var n = "center",
                              i = "center";
                            "start" === e && ((n = "left"), (i = "top"));
                            var r = t.getPointByOrigin(n, i),
                              o = r.x,
                              a = r.y;
                            t.set({ left: o, top: a, originX: n, originY: i }),
                              t.setCoords();
                          },
                        },
                        {
                          key: "add",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i) {
                              var r,
                                o = n.getCanvas(),
                                a = null,
                                s = Ae,
                                l = n._defaultStyles;
                              n._setInitPos(e.position),
                                e.styles && (l = W()(l, e.styles)),
                                bi()(e.autofocus) || (e.autofocus = !0),
                                (a = new R.fabric.IText(t, l)),
                                (s = W()({}, s, {
                                  originX: "left",
                                  originY: "top",
                                })),
                                a.set(s),
                                a.on({
                                  mouseup: T()((r = n._onFabricMouseUp)).call(
                                    r,
                                    n
                                  ),
                                }),
                                o.add(a),
                                e.autofocus &&
                                  (a.enterEditing(), a.selectAll()),
                                o.getActiveObject() || o.setActiveObject(a),
                                (n.isPrevEditing = !0),
                                i(n.graphics.createObjectProperties(a));
                            });
                          },
                        },
                        {
                          key: "change",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i) {
                              t.set("text", e), n.getCanvas().renderAll(), i();
                            });
                          },
                        },
                        {
                          key: "setStyle",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i) {
                              $()(
                                e,
                                function (n, i) {
                                  t[i] === n &&
                                    "fontSize" !== i &&
                                    (e[i] = er[i] || "");
                                },
                                n
                              ),
                                "textDecoration" in e &&
                                  W()(
                                    e,
                                    n._getTextDecorationAdaptObject(
                                      e.textDecoration
                                    )
                                  ),
                                t.set(e),
                                n.getCanvas().renderAll(),
                                i();
                            });
                          },
                        },
                        {
                          key: "getText",
                          value: function (t) {
                            return t.text;
                          },
                        },
                        {
                          key: "setSelectedInfo",
                          value: function (t, e) {
                            (this._selectedObj = t), (this._isSelected = e);
                          },
                        },
                        {
                          key: "isSelected",
                          value: function () {
                            return this._isSelected;
                          },
                        },
                        {
                          key: "getSelectedObj",
                          value: function () {
                            return this._selectedObj;
                          },
                        },
                        {
                          key: "setCanvasRatio",
                          value: function () {
                            var t = this.getCanvasElement(),
                              e = Q()(t.style.maxWidth, 10),
                              n = t.width;
                            this._ratio = n / e;
                          },
                        },
                        {
                          key: "getCanvasRatio",
                          value: function () {
                            return this._ratio;
                          },
                        },
                        {
                          key: "_getTextDecorationAdaptObject",
                          value: function (t) {
                            return {
                              underline: "underline" === t,
                              linethrough: "line-through" === t,
                              overline: "overline" === t,
                            };
                          },
                        },
                        {
                          key: "_setInitPos",
                          value: function (t) {
                            (t = t || this.getCanvasImage().getCenterPoint()),
                              (this._defaultStyles.left = t.x),
                              (this._defaultStyles.top = t.y);
                          },
                        },
                        {
                          key: "_onInput",
                          value: function () {
                            var t = this.getCanvasRatio(),
                              e = this._editingObj,
                              n = this._textarea.style;
                            (n.width = "".concat(Math.ceil(e.width / t), "px")),
                              (n.height = "".concat(
                                Math.ceil(e.height / t),
                                "px"
                              ));
                          },
                        },
                        {
                          key: "_onKeyDown",
                          value: function () {
                            var t = this,
                              e = this.getCanvasRatio(),
                              n = this._editingObj,
                              i = this._textarea.style;
                            b()(function () {
                              n.text(t._textarea.value),
                                (i.width = "".concat(
                                  Math.ceil(n.width / e),
                                  "px"
                                )),
                                (i.height = "".concat(
                                  Math.ceil(n.height / e),
                                  "px"
                                ));
                            }, 0);
                          },
                        },
                        {
                          key: "_onBlur",
                          value: function () {
                            var t = this.getCanvasRatio(),
                              e = this._editingObj,
                              n = this._editingObjInfos,
                              i = this._textarea.value,
                              r = e.width / t - n.width / t,
                              o = e.height / t - n.height / t;
                            if (
                              (1 === t && ((r /= 2), (o /= 2)),
                              (this._textarea.style.display = "none"),
                              e.set({ left: n.left + r, top: n.top + o }),
                              i.length)
                            ) {
                              this.getCanvas().add(e);
                              var a = { id: Be(e), type: e.type, text: i };
                              this.fire(Qt, a);
                            }
                          },
                        },
                        {
                          key: "_onScroll",
                          value: function () {
                            (this._textarea.scrollLeft = 0),
                              (this._textarea.scrollTop = 0);
                          },
                        },
                        {
                          key: "_onFabricScaling",
                          value: function (t) {
                            var e = t.target;
                            (e.fontSize = e.fontSize * e.scaleY),
                              (e.scaleX = 1),
                              (e.scaleY = 1);
                          },
                        },
                        {
                          key: "_onFabricTextChanged",
                          value: function (t) {
                            this.fire(Qt, t.target);
                          },
                        },
                        {
                          key: "_onFabricSelectClear",
                          value: function (t) {
                            var e = this.getSelectedObj();
                            (this.isPrevEditing = !0),
                              this.setSelectedInfo(t.target, !1),
                              e && "" === e.text && this.getCanvas().remove(e);
                          },
                        },
                        {
                          key: "_onFabricSelect",
                          value: function (t) {
                            (this.isPrevEditing = !0),
                              this.setSelectedInfo(t.target, !0);
                          },
                        },
                        {
                          key: "_onFabricMouseDown",
                          value: function (t) {
                            var e = t.target;
                            (e && !e.isType("text")) ||
                              (this.isPrevEditing
                                ? (this.isPrevEditing = !1)
                                : this._fireAddText(t));
                          },
                        },
                        {
                          key: "_fireAddText",
                          value: function (t) {
                            var e = t.target,
                              n = t.e || {},
                              i = this.getCanvas().getPointer(n);
                            e ||
                              this.fire(te, {
                                originPosition: { x: i.x, y: i.y },
                                clientPosition: {
                                  x: n.clientX || 0,
                                  y: n.clientY || 0,
                                },
                              });
                          },
                        },
                        {
                          key: "_onFabricMouseUp",
                          value: function (t) {
                            var e = t.target,
                              n = new Date().getTime();
                            this._isDoubleClick(n) &&
                              !e.isEditing &&
                              e.enterEditing(),
                              e.isEditing && this.fire(Jt),
                              (this._lastClickTime = n);
                          },
                        },
                        {
                          key: "_isDoubleClick",
                          value: function (t) {
                            return t - this._lastClickTime < 500;
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  ir = {
                    arrow: "M 0 90 H 105 V 120 L 160 60 L 105 0 V 30 H 0 Z",
                    cancel:
                      "M 0 30 L 30 60 L 0 90 L 30 120 L 60 90 L 90 120 L 120 90 L 90 60 L 120 30 L 90 0 L 60 30 L 30 0 Z",
                  },
                  rr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a;
                      return (
                        z(this, n),
                        ((a = e.call(this, At.ICON, t))._oColor = "#000000"),
                        (a._pathMap = ir),
                        (a._type = null),
                        (a._iconColor = null),
                        (a._handlers = {
                          mousedown: T()((i = a._onFabricMouseDown)).call(
                            i,
                            qn(a)
                          ),
                          mousemove: T()((r = a._onFabricMouseMove)).call(
                            r,
                            qn(a)
                          ),
                          mouseup: T()((o = a._onFabricMouseUp)).call(o, qn(a)),
                        }),
                        a
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "setStates",
                          value: function (t, e) {
                            (this._type = t), (this._iconColor = e);
                          },
                        },
                        {
                          key: "start",
                          value: function () {
                            var t = this.getCanvas();
                            (t.selection = !1),
                              t.on("mouse:down", this._handlers.mousedown);
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            var t = this.getCanvas();
                            (t.selection = !0),
                              t.off({ "mouse:down": this._handlers.mousedown });
                          },
                        },
                        {
                          key: "add",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i, r) {
                              var o = n.getCanvas(),
                                a = n._pathMap[t],
                                s = Ae,
                                l = a ? n._createIcon(a) : null;
                              (n._icon = l),
                                l || r(xe),
                                l.set(
                                  W()(
                                    { type: "icon", fill: n._oColor },
                                    s,
                                    e,
                                    n.graphics.controlStyle
                                  )
                                ),
                                o.add(l).setActiveObject(l),
                                i(n.graphics.createObjectProperties(l));
                            });
                          },
                        },
                        {
                          key: "registerPaths",
                          value: function (t) {
                            var e = this;
                            $()(
                              t,
                              function (t, n) {
                                e._pathMap[n] = t;
                              },
                              this
                            );
                          },
                        },
                        {
                          key: "setColor",
                          value: function (t, e) {
                            (this._oColor = t),
                              e &&
                                "icon" === e.get("type") &&
                                (e.set({ fill: this._oColor }),
                                this.getCanvas().renderAll());
                          },
                        },
                        {
                          key: "getColor",
                          value: function (t) {
                            return it()(t);
                          },
                        },
                        {
                          key: "_createIcon",
                          value: function (t) {
                            return new R.fabric.Path(t);
                          },
                        },
                        {
                          key: "_onFabricMouseDown",
                          value: function (t) {
                            var e = this,
                              n = this.getCanvas();
                            this._startPoint = n.getPointer(t.e);
                            var i = this._startPoint,
                              r = i.x,
                              o = i.y;
                            this.add(this._type, {
                              left: r,
                              top: o,
                              fill: this._iconColor,
                            }).then(function () {
                              e.fire(
                                ee,
                                e.graphics.createObjectProperties(e._icon)
                              ),
                                n.on("mouse:move", e._handlers.mousemove),
                                n.on("mouse:up", e._handlers.mouseup);
                            });
                          },
                        },
                        {
                          key: "_onFabricMouseMove",
                          value: function (t) {
                            var e = this.getCanvas();
                            if (this._icon) {
                              var n = e.getPointer(t.e),
                                i =
                                  (n.x - this._startPoint.x) / this._icon.width,
                                r =
                                  (n.y - this._startPoint.y) /
                                  this._icon.height;
                              this._icon.set({
                                scaleX: Math.abs(2 * i),
                                scaleY: Math.abs(2 * r),
                              }),
                                this._icon.setCoords(),
                                e.renderAll();
                            }
                          },
                        },
                        {
                          key: "_onFabricMouseUp",
                          value: function () {
                            var t = this.getCanvas();
                            this.fire(
                              Zt,
                              this.graphics.createObjectProperties(this._icon)
                            ),
                              (this._icon = null),
                              t.off("mouse:down", this._handlers.mousedown),
                              t.off("mouse:move", this._handlers.mousemove),
                              t.off("mouse:up", this._handlers.mouseup);
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  or = R.fabric.util.createClass(
                    R.fabric.Image.filters.BlendImage,
                    {
                      applyTo: function (t) {
                        if (this.mask) {
                          var e = t.canvasEl,
                            n = e.width,
                            i = e.height,
                            r = this._createCanvasOfMask(n, i),
                            o = e.getContext("2d"),
                            a = r.getContext("2d"),
                            s = o.getImageData(0, 0, n, i);
                          this._drawMask(a, e, o),
                            this._mapData(a, s, n, i),
                            (t.imageData = s);
                        }
                      },
                      _createCanvasOfMask: function (t, e) {
                        var n = R.fabric.util.createCanvasElement();
                        return (n.width = t), (n.height = e), n;
                      },
                      _drawMask: function (t) {
                        var e = this.mask,
                          n = e.getElement(),
                          i = e.angle,
                          r = e.left,
                          o = e.scaleX,
                          a = e.scaleY,
                          s = e.top;
                        t.save(),
                          t.translate(r, s),
                          t.rotate((i * Math.PI) / 180),
                          t.scale(o, a),
                          t.drawImage(n, -n.width / 2, -n.height / 2),
                          t.restore();
                      },
                      _mapData: function (t, e, n, i) {
                        for (
                          var r = e.data,
                            o = e.height,
                            a = r,
                            s = e.width * o * 4,
                            l = t.getImageData(0, 0, n, i).data,
                            c = 0;
                          c < s;
                          c += 4
                        )
                          a[c + 3] = l[c];
                      },
                    }
                  ),
                  ar = R.fabric.util.createClass(
                    R.fabric.Image.filters.Convolute,
                    {
                      type: "Sharpen",
                      initialize: function () {
                        this.matrix = [0, -1, 0, -1, 5, -1, 0, -1, 0];
                      },
                    }
                  ),
                  sr = R.fabric.util.createClass(
                    R.fabric.Image.filters.Convolute,
                    {
                      type: "Emboss",
                      initialize: function () {
                        this.matrix = [1, 1, 1, 1, 0.7, -1, -1, -1, -1];
                      },
                    }
                  ),
                  lr = R.fabric.util.createClass(
                    R.fabric.Image.filters.BaseFilter,
                    {
                      type: "ColorFilter",
                      initialize: function (t) {
                        t || (t = {}),
                          (this.color = t.color || "#FFFFFF"),
                          (this.threshold = t.threshold || 45),
                          (this.x = t.x || null),
                          (this.y = t.y || null);
                      },
                      applyTo: function (t) {
                        var e,
                          n,
                          i = t.canvasEl,
                          r = i.getContext("2d"),
                          o = r.getImageData(0, 0, i.width, i.height),
                          a = o.data,
                          s = this.threshold,
                          l = R.fabric.Color.sourceFromHex(this.color);
                        for (
                          this.x &&
                            this.y &&
                            (l = this._getColor(o, this.x, this.y)),
                            e = 0,
                            n = a.length;
                          e < n;
                          e += 4
                        )
                          this._isOutsideThreshold(a[e], l[0], s) ||
                            this._isOutsideThreshold(a[e + 1], l[1], s) ||
                            this._isOutsideThreshold(a[e + 2], l[2], s) ||
                            (a[e] = a[e + 1] = a[e + 2] = a[e + 3] = 0);
                        r.putImageData(o, 0, 0);
                      },
                      _isOutsideThreshold: function (t, e, n) {
                        var i = t - e;
                        return Math.abs(i) > n;
                      },
                      _getColor: function (t, e, n) {
                        var i = [0, 0, 0, 0],
                          r = t.data,
                          o = 4 * (t.width * n + e);
                        return (
                          (i[0] = r[o]),
                          (i[1] = r[o + 1]),
                          (i[2] = r[o + 2]),
                          (i[3] = r[o + 3]),
                          i
                        );
                      },
                    }
                  ),
                  cr = R.fabric.Image.filters;
                (cr.Mask = or),
                  (cr.Sharpen = ar),
                  (cr.Emboss = sr),
                  (cr.ColorFilter = lr);
                var dr,
                  ur,
                  pr,
                  hr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      return z(this, n), e.call(this, At.FILTER, t);
                    }
                    return (
                      k(n, [
                        {
                          key: "add",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i, r) {
                              var o = n._getSourceImage(),
                                a = n.getCanvas(),
                                s = n._getFilter(o, t);
                              s || (s = n._createFilter(o, t, e)),
                                s || r(xe),
                                n._changeFilterValues(s, e),
                                n._apply(o, function () {
                                  a.renderAll(),
                                    i({ type: t, action: "add", options: e });
                                });
                            });
                          },
                        },
                        {
                          key: "remove",
                          value: function (t) {
                            var e = this;
                            return new (E())(function (n, i) {
                              var r = e._getSourceImage(),
                                o = e.getCanvas(),
                                a = e.getOptions(t);
                              r.filters.length || i("Unsupported operation."),
                                e._removeFilter(r, t),
                                e._apply(r, function () {
                                  o.renderAll(),
                                    n({
                                      type: t,
                                      action: "remove",
                                      options: a,
                                    });
                                });
                            });
                          },
                        },
                        {
                          key: "hasFilter",
                          value: function (t) {
                            return !!this._getFilter(this._getSourceImage(), t);
                          },
                        },
                        {
                          key: "getOptions",
                          value: function (t) {
                            var e = this._getSourceImage(),
                              n = this._getFilter(e, t);
                            return n ? W()({}, n.options) : null;
                          },
                        },
                        {
                          key: "_changeFilterValues",
                          value: function (t, e) {
                            $()(e, function (e, n) {
                              B()(t[n]) || (t[n] = e);
                            }),
                              $()(t.options, function (n, i) {
                                B()(e[i]) || (t.options[i] = e[i]);
                              });
                          },
                        },
                        {
                          key: "_apply",
                          value: function (t, e) {
                            t.filters.push(), t.applyFilters() && e();
                          },
                        },
                        {
                          key: "_getSourceImage",
                          value: function () {
                            return this.getCanvasImage();
                          },
                        },
                        {
                          key: "_createFilter",
                          value: function (t, e, n) {
                            var i,
                              r = this._getFabricFilterType(e),
                              o = R.fabric.Image.filters[r];
                            return (
                              o &&
                                (((i = new o(n)).options = n),
                                t.filters.push(i)),
                              i
                            );
                          },
                        },
                        {
                          key: "_getFilter",
                          value: function (t, e) {
                            var n = null;
                            if (t) {
                              var i,
                                r,
                                o = this._getFabricFilterType(e),
                                a = t.filters.length;
                              for (r = 0; r < a; r += 1)
                                if ((i = t.filters[r]).type === o) {
                                  n = i;
                                  break;
                                }
                            }
                            return n;
                          },
                        },
                        {
                          key: "_removeFilter",
                          value: function (t, e) {
                            var n,
                              i = this._getFabricFilterType(e);
                            t.filters = qi()((n = t.filters)).call(
                              n,
                              function (t) {
                                return t.type !== i;
                              }
                            );
                          },
                        },
                        {
                          key: "_getFabricFilterType",
                          value: function (t) {
                            return (
                              t.charAt(0).toUpperCase() + u()(t).call(t, 1)
                            );
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  fr = r(1801),
                  br = r.n(fr),
                  mr = { pixelate: "blocksize", blur: "blur" },
                  gr = { x: "width", y: "height" },
                  vr =
                    ((dr = mr),
                    (pr = {}),
                    et()((ur = G()(dr))).call(ur, function (t) {
                      pr[dr[t]] = t;
                    }),
                    pr),
                  _r = null;
                function yr(t) {
                  return K(
                    Qe(
                      t,
                      "patternSourceCanvas"
                    ).patternSourceCanvas.getObjects(),
                    1
                  )[0];
                }
                function Mr(t) {
                  var e;
                  return Mn()((e = t.filters)).call(e, function (t) {
                    var e = K(G()(t), 1)[0];
                    return x({}, vr[e], t[e]);
                  });
                }
                function Or(t, e, n) {
                  var i = xr(wr(t), t.angle, e);
                  n.add(i);
                  var r = {
                    fill: new R.fabric.Pattern({
                      source: n.getElement(),
                      repeat: "no-repeat",
                    }),
                  };
                  return Je(r, { patternSourceCanvas: n }), r;
                }
                function wr(t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return (_r && !e) || (_r = t.toCanvasElement()), _r;
                }
                function Ar(t) {
                  return [
                    t.getPointByOrigin("left", "top"),
                    t.getPointByOrigin("right", "top"),
                    t.getPointByOrigin("left", "bottom"),
                    t.getPointByOrigin("right", "bottom"),
                  ];
                }
                function xr(t, e, n) {
                  var i,
                    r = new R.fabric.Image(t);
                  return (
                    $()(
                      W().apply(void 0, L()((i = [{}])).call(i, w(n))),
                      function (t, e) {
                        var n,
                          i =
                            (n = e).charAt(0).toUpperCase() + u()(n).call(n, 1),
                          o = new R.fabric.Image.filters[i](x({}, mr[e], t));
                        r.filters.push(o);
                      }
                    ),
                    r.applyFilters(),
                    Je(r, {
                      originalAngle: e,
                      fillImageMaxSize: Math.max(r.width, r.height),
                    }),
                    br().adjustOriginToCenter(r),
                    r
                  );
                }
                var zr = W()(
                  {
                    strokeWidth: 1,
                    stroke: "#000000",
                    fill: "#ffffff",
                    width: 1,
                    height: 1,
                    rx: 0,
                    ry: 0,
                  },
                  {
                    lockSkewingX: !0,
                    lockSkewingY: !0,
                    bringForward: !0,
                    isRegular: !1,
                  }
                );
                function Cr(t, e, n) {
                  var i = it()(t),
                    r = en(it()(t)),
                    o = i;
                  i.color && (o = i.color);
                  var a = null;
                  if ("filter" === r) {
                    var s = n();
                    a = Or(e, qi()(i), s);
                  } else a = { fill: o };
                  return W()({}, t, a);
                }
                var kr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a, s, l;
                      return (
                        z(this, n),
                        ((l = e.call(this, At.SHAPE, t))._shapeObj = null),
                        (l._type = "rect"),
                        (l._options = W()({}, zr)),
                        (l._isSelected = !1),
                        (l._startPoint = {}),
                        (l._withShiftKey = !1),
                        (l._handlers = {
                          mousedown: T()((i = l._onFabricMouseDown)).call(
                            i,
                            qn(l)
                          ),
                          mousemove: T()((r = l._onFabricMouseMove)).call(
                            r,
                            qn(l)
                          ),
                          mouseup: T()((o = l._onFabricMouseUp)).call(o, qn(l)),
                          keydown: T()((a = l._onKeyDown)).call(a, qn(l)),
                          keyup: T()((s = l._onKeyUp)).call(s, qn(l)),
                        }),
                        l
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function () {
                            var t = this.getCanvas();
                            (this._isSelected = !1),
                              (t.defaultCursor = "crosshair"),
                              (t.selection = !1),
                              (t.uniformScaling = !0),
                              t.on({ "mouse:down": this._handlers.mousedown }),
                              R.fabric.util.addListener(
                                document,
                                "keydown",
                                this._handlers.keydown
                              ),
                              R.fabric.util.addListener(
                                document,
                                "keyup",
                                this._handlers.keyup
                              );
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            var t = this.getCanvas();
                            (this._isSelected = !1),
                              (t.defaultCursor = "default"),
                              (t.selection = !0),
                              (t.uniformScaling = !1),
                              t.off({ "mouse:down": this._handlers.mousedown }),
                              R.fabric.util.removeListener(
                                document,
                                "keydown",
                                this._handlers.keydown
                              ),
                              R.fabric.util.removeListener(
                                document,
                                "keyup",
                                this._handlers.keyup
                              );
                          },
                        },
                        {
                          key: "setStates",
                          value: function (t, e) {
                            (this._type = t),
                              e && (this._options = W()(this._options, e));
                          },
                        },
                        {
                          key: "add",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i) {
                              var r = n.getCanvas(),
                                o = n._extendOptions(e),
                                a = n._createInstance(t, o),
                                s = n.graphics.createObjectProperties(a);
                              n._bindEventOnShape(a),
                                r.add(a).setActiveObject(a),
                                n._resetPositionFillFilter(a),
                                i(s);
                            });
                          },
                        },
                        {
                          key: "change",
                          value: function (t, e) {
                            var n = this;
                            return new (E())(function (i, r) {
                              rn(t) || r("Unsupported object type.");
                              var o = "filter" === en(it()(e)),
                                a = n.graphics,
                                s = a.canvasImage,
                                l = a.createStaticCanvas;
                              t.set(o ? Cr(e, s, l) : e),
                                o && n._resetPositionFillFilter(t),
                                n.getCanvas().renderAll(),
                                i();
                            });
                          },
                        },
                        {
                          key: "makeFillPropertyForUserEvent",
                          value: function (t) {
                            var e = nn(t),
                              n = {};
                            if (e === ft) {
                              var i = Mr(yr(t));
                              (n.type = e), (n.filter = i);
                            } else
                              (n.type = bt),
                                (n.color = it()(t) || "transparent");
                            return n;
                          },
                        },
                        {
                          key: "processForCopiedObject",
                          value: function (t, e) {
                            if (
                              (this._bindEventOnShape(t), "filter" === nn(t))
                            ) {
                              var n = Mr(yr(e)),
                                i = this.graphics.createStaticCanvas();
                              t.set(Or(this.graphics.canvasImage, n, i)),
                                this._resetPositionFillFilter(t);
                            }
                          },
                        },
                        {
                          key: "_createInstance",
                          value: function (t, e) {
                            var n;
                            switch (t) {
                              case "rect":
                                n = new R.fabric.Rect(e);
                                break;
                              case "circle":
                                n = new R.fabric.Ellipse(
                                  W()({ type: "circle" }, e)
                                );
                                break;
                              case "triangle":
                                n = new R.fabric.Triangle(e);
                                break;
                              default:
                                n = {};
                            }
                            return n;
                          },
                        },
                        {
                          key: "_extendOptions",
                          value: function (t) {
                            var e = Ae,
                              n = this.graphics,
                              i = n.canvasImage,
                              r = n.createStaticCanvas;
                            return Cr(
                              (t = W()({}, zr, this._options, e, t)),
                              i,
                              r
                            );
                          },
                        },
                        {
                          key: "_bindEventOnShape",
                          value: function (t) {
                            var e = this,
                              n = this.getCanvas();
                            t.on({
                              added: function () {
                                (e._shapeObj = this),
                                  br().setOrigins(e._shapeObj);
                              },
                              selected: function () {
                                (e._isSelected = !0),
                                  (e._shapeObj = this),
                                  (n.uniformScaling = !0),
                                  (n.defaultCursor = "default"),
                                  br().setOrigins(e._shapeObj);
                              },
                              deselected: function () {
                                (e._isSelected = !1),
                                  (e._shapeObj = null),
                                  (n.defaultCursor = "crosshair"),
                                  (n.uniformScaling = !1);
                              },
                              modified: function () {
                                var t = e._shapeObj;
                                br().adjustOriginToCenter(t),
                                  br().setOrigins(t);
                              },
                              modifiedInGroup: function (n) {
                                e._fillFilterRePositionInGroupSelection(t, n);
                              },
                              moving: function () {
                                e._resetPositionFillFilter(this);
                              },
                              rotating: function () {
                                e._resetPositionFillFilter(this);
                              },
                              scaling: function (t) {
                                var i = n.getPointer(t.e),
                                  r = e._shapeObj;
                                n.setCursor("crosshair"),
                                  br().resize(r, i, !0),
                                  e._resetPositionFillFilter(this);
                              },
                            });
                          },
                        },
                        {
                          key: "_onFabricMouseDown",
                          value: function (t) {
                            if (
                              (t.target ||
                                ((this._isSelected = !1),
                                (this._shapeObj = !1)),
                              !this._isSelected && !this._shapeObj)
                            ) {
                              var e = this.getCanvas();
                              (this._startPoint = e.getPointer(t.e)),
                                e.on({
                                  "mouse:move": this._handlers.mousemove,
                                  "mouse:up": this._handlers.mouseup,
                                });
                            }
                          },
                        },
                        {
                          key: "_onFabricMouseMove",
                          value: function (t) {
                            var e = this,
                              n = this.getCanvas(),
                              i = n.getPointer(t.e),
                              r = this._startPoint.x,
                              o = this._startPoint.y,
                              a = r - i.x,
                              s = o - i.y,
                              l = this._shapeObj;
                            l
                              ? (this._shapeObj.set({
                                  isRegular: this._withShiftKey,
                                }),
                                br().resize(l, i),
                                n.renderAll(),
                                this._resetPositionFillFilter(l))
                              : this.add(this._type, {
                                  left: r,
                                  top: o,
                                  width: a,
                                  height: s,
                                }).then(function (t) {
                                  e.fire(ee, t);
                                });
                          },
                        },
                        {
                          key: "_onFabricMouseUp",
                          value: function () {
                            var t = this,
                              e = this.getCanvas(),
                              n = this._startPoint.x,
                              i = this._startPoint.y,
                              r = this._shapeObj;
                            r
                              ? r &&
                                (br().adjustOriginToCenter(r),
                                this.fire(
                                  Zt,
                                  this.graphics.createObjectProperties(r)
                                ))
                              : this.add(this._type, {
                                  left: n,
                                  top: i,
                                  width: 20,
                                  height: 20,
                                }).then(function (e) {
                                  t.fire(ee, e);
                                }),
                              e.off({
                                "mouse:move": this._handlers.mousemove,
                                "mouse:up": this._handlers.mouseup,
                              });
                          },
                        },
                        {
                          key: "_onKeyDown",
                          value: function (t) {
                            t.keyCode === we &&
                              ((this._withShiftKey = !0),
                              this._shapeObj &&
                                (this._shapeObj.isRegular = !0));
                          },
                        },
                        {
                          key: "_onKeyUp",
                          value: function (t) {
                            t.keyCode === we &&
                              ((this._withShiftKey = !1),
                              this._shapeObj &&
                                (this._shapeObj.isRegular = !1));
                          },
                        },
                        {
                          key: "_resetPositionFillFilter",
                          value: function (t) {
                            if ("filter" === nn(t)) {
                              var e = Qe(
                                  t,
                                  "patternSourceCanvas"
                                ).patternSourceCanvas,
                                n = Qe(yr(t), "originalAngle").originalAngle;
                              this.graphics.canvasImage.angle !== n &&
                                (function (t, e) {
                                  var n = Qe(
                                      t,
                                      "patternSourceCanvas"
                                    ).patternSourceCanvas,
                                    i = K(n.getObjects(), 1)[0],
                                    r = Mr(i);
                                  n.remove(i);
                                  var o = xr(wr(e, !0), e.angle, r);
                                  n.add(o);
                                })(t, this.graphics.canvasImage);
                              var i = t.originX,
                                r = t.originY;
                              br().adjustOriginToCenter(t),
                                (t.width *= t.scaleX),
                                (t.height *= t.scaleY),
                                (t.rx *= t.scaleX),
                                (t.ry *= t.scaleY),
                                (t.scaleX = 1),
                                (t.scaleY = 1),
                                (function (t) {
                                  var e = t.angle,
                                    n = t.flipX,
                                    i = t.flipY,
                                    r = yr(t),
                                    o = (function (t) {
                                      var e = K(Ar(t), 4),
                                        n = e[0],
                                        i = n.x,
                                        r = n.y,
                                        o = e[1],
                                        a = o.x,
                                        s = o.y,
                                        l = e[2],
                                        c = l.x,
                                        d = l.y,
                                        u = e[3],
                                        p = u.x,
                                        h = u.y,
                                        f = Math.min(i, a, c, p),
                                        b = Math.min(r, s, d, h),
                                        m = Math.max(i, a, c, p),
                                        g = Math.max(r, s, d, h);
                                      return {
                                        left: f,
                                        top: b,
                                        right: m,
                                        bottom: g,
                                        width: m - f,
                                        height: g - b,
                                      };
                                    })(t),
                                    a = o.right,
                                    s = o.bottom,
                                    l = o.width,
                                    c = o.height,
                                    d = (l - t.width) / 2,
                                    u = (c - t.height) / 2,
                                    p = t.left - t.width / 2 - d,
                                    h = t.top - t.height / 2 - u,
                                    f = l / 2 - d,
                                    b = c / 2 - u,
                                    m = Math.max(l, c) + Math.max(d, u),
                                    g = (function (t) {
                                      var e = t.shapeObj,
                                        n = t.left,
                                        i = t.top,
                                        r = t.width,
                                        o = t.height,
                                        a = t.cropX,
                                        s = t.cropY,
                                        l = t.flipX,
                                        c = t.flipY,
                                        d = t.right,
                                        u = t.bottom,
                                        p = function (t, n, i, r) {
                                          return (function (t) {
                                            var e = t.type,
                                              n = t.outDistance,
                                              i = t.left,
                                              r = t.top,
                                              o = t.flipX,
                                              a = t.flipY,
                                              s = Ar(t.shapeObj),
                                              l = (function (t, e, n) {
                                                var i = 0,
                                                  r = 0;
                                                $()(e, function (e, n) {
                                                  e[t] < i &&
                                                    ((i = e[t]), (r = n));
                                                });
                                                var o = K(
                                                    [
                                                      [1, 2],
                                                      [0, 3],
                                                      [0, 3],
                                                      [1, 2],
                                                    ][r],
                                                    2
                                                  ),
                                                  a = o[0],
                                                  s = o[1];
                                                return {
                                                  startPointIndex: r,
                                                  endPointIndex1: a,
                                                  endPointIndex2: s,
                                                };
                                              })(e, s),
                                              c = (function (t, e, n) {
                                                var i,
                                                  r = n.startPointIndex,
                                                  o = n.endPointIndex1,
                                                  a = n.endPointIndex2,
                                                  s = "x" === t ? 180 : 270;
                                                return Mn()((i = [o, a])).call(
                                                  i,
                                                  function (t) {
                                                    var n = e[r],
                                                      i = e[t],
                                                      o = n.y - i.y,
                                                      a = n.x - i.x;
                                                    return (
                                                      (180 * Math.atan2(o, a)) /
                                                        Math.PI -
                                                      s
                                                    );
                                                  }
                                                );
                                              })(e, s, l),
                                              d = (function (t) {
                                                var e = t.outDistance,
                                                  n = t.startPointIndex,
                                                  i = t.flipX,
                                                  r = t.flipY,
                                                  o = t.reatAngles,
                                                  a =
                                                    e *
                                                    Math.cos(
                                                      (o[0] * Math.PI) / 180
                                                    ),
                                                  s =
                                                    e *
                                                    Math.cos(
                                                      (o[1] * Math.PI) / 180
                                                    ),
                                                  l = 2 === n || 3 === n,
                                                  c = {
                                                    top: l ? a : s,
                                                    left: l ? s : a,
                                                  };
                                                return (
                                                  (function (t, e, n) {
                                                    return (
                                                      (((!e && n) ||
                                                        (!e && !n)) &&
                                                        0 === t) ||
                                                      (((e && n) ||
                                                        (e && !n)) &&
                                                        1 === t) ||
                                                      (((!e && !n) ||
                                                        (!e && n)) &&
                                                        2 === t) ||
                                                      (((e && !n) ||
                                                        (e && n)) &&
                                                        3 === t)
                                                    );
                                                  })(n, i, r) &&
                                                    (c.left = -1 * c.left),
                                                  (function (t, e, n) {
                                                    return (
                                                      (((e && !n) ||
                                                        (!e && !n)) &&
                                                        0 === t) ||
                                                      (((!e && !n) ||
                                                        (e && !n)) &&
                                                        1 === t) ||
                                                      (((e && n) ||
                                                        (!e && n)) &&
                                                        2 === t) ||
                                                      (((!e && n) ||
                                                        (e && n)) &&
                                                        3 === t)
                                                    );
                                                  })(n, i, r) &&
                                                    (c.top = -1 * c.top),
                                                  c
                                                );
                                              })({
                                                outDistance: n,
                                                startPointIndex:
                                                  l.startPointIndex,
                                                flipX: o,
                                                flipY: a,
                                                reatAngles: c,
                                              });
                                            return [i + d.left, r + d.top];
                                          })({
                                            type: t,
                                            outDistance: n,
                                            shapeObj: e,
                                            flipX: l,
                                            flipY: c,
                                            left: i,
                                            top: r,
                                          });
                                        },
                                        h = r,
                                        f = o,
                                        b = K(
                                          (function (t, e) {
                                            var n = e.left,
                                              i = e.top,
                                              r = e.cropX,
                                              o = e.cropY,
                                              a = {
                                                width: e.width,
                                                height: e.height,
                                              };
                                            return (
                                              $()(["x", "y"], function (e) {
                                                var s = "x" === e ? r : o,
                                                  l = a[gr[e]],
                                                  c = _r[gr[e]];
                                                if (l > c) {
                                                  var d = (l - c) / 2;
                                                  a[gr[e]] = c;
                                                  var u = K(t(e, d, n, i), 2);
                                                  (n = u[0]), (i = u[1]);
                                                }
                                                if (s < 0) {
                                                  var p = K(t(e, s, n, i), 2);
                                                  (n = p[0]), (i = p[1]);
                                                }
                                              }),
                                              [n, i, a.width, a.height]
                                            );
                                          })(p, {
                                            left: n,
                                            top: i,
                                            width: r,
                                            height: o,
                                            cropX: a,
                                            cropY: s,
                                          }),
                                          4
                                        ),
                                        m = K(
                                          (function (t, e) {
                                            var n = e.left,
                                              i = e.top,
                                              r = e.insideCanvasRealImageWidth,
                                              o = e.insideCanvasRealImageHeight,
                                              a = e.right,
                                              s = e.bottom,
                                              l = e.cropX,
                                              c = e.cropY,
                                              d = e.originalWidth,
                                              u = e.originalHeight,
                                              p = r,
                                              h = o,
                                              f = _r,
                                              b = f.width,
                                              m = f.height;
                                            a > b &&
                                              l > 0 &&
                                              (p = d - Math.abs(a - b)),
                                              s > m &&
                                                c > 0 &&
                                                (h = u - Math.abs(s - m));
                                            var g = {
                                              x: (r - p) / 2,
                                              y: (o - h) / 2,
                                            };
                                            return (
                                              $()(["x", "y"], function (e) {
                                                var r = g[e];
                                                if (r > 0) {
                                                  var o = K(t(e, r, n, i), 2);
                                                  (n = o[0]), (i = o[1]);
                                                }
                                              }),
                                              [n, i, p, h]
                                            );
                                          })(p, {
                                            left: (n = b[0]),
                                            top: (i = b[1]),
                                            insideCanvasRealImageWidth: (r =
                                              b[2]),
                                            insideCanvasRealImageHeight: (o =
                                              b[3]),
                                            right: d,
                                            bottom: u,
                                            cropX: a,
                                            cropY: s,
                                            originalWidth: h,
                                            originalHeight: f,
                                          }),
                                          4
                                        );
                                      return [
                                        (n = m[0]),
                                        (i = m[1]),
                                        (r = m[2]),
                                        (o = m[3]),
                                      ];
                                    })({
                                      shapeObj: t,
                                      left: f,
                                      top: b,
                                      width: l,
                                      height: c,
                                      cropX: p,
                                      cropY: h,
                                      flipX: n,
                                      flipY: i,
                                      right: a,
                                      bottom: s,
                                    }),
                                    v = K(g, 4);
                                  (f = v[0]),
                                    (b = v[1]),
                                    (l = v[2]),
                                    (c = v[3]),
                                    r.set({
                                      angle: n === i ? -e : e,
                                      left: f,
                                      top: b,
                                      width: l,
                                      height: c,
                                      cropX: p,
                                      cropY: h,
                                      flipX: n,
                                      flipY: i,
                                    }),
                                    Je(r, { fillImageMaxSize: m });
                                })(t),
                                (function (t, e) {
                                  var n = e.originX,
                                    i = e.originY,
                                    r = t.getPointByOrigin(n, i),
                                    o = r.x,
                                    a = r.y;
                                  t.set({
                                    left: o,
                                    top: a,
                                    originX: n,
                                    originY: i,
                                  }),
                                    t.setCoords();
                                })(t, { originX: i, originY: r }),
                                (function (t) {
                                  var e = Qe(
                                    K(t.getObjects(), 1)[0],
                                    "fillImageMaxSize"
                                  ).fillImageMaxSize;
                                  (e = Math.max(1, e)),
                                    t.setDimensions({ width: e, height: e }),
                                    t.renderAll();
                                })(e);
                            }
                          },
                        },
                        {
                          key: "_fillFilterRePositionInGroupSelection",
                          value: function (t, e) {
                            (1 === e.scaleX && 1 === e.scaleY) ||
                              e.addWithUpdate();
                            var n = t.angle,
                              i = t.left,
                              r = t.top;
                            R.fabric.util.addTransformToObject(
                              t,
                              e.calcTransformMatrix()
                            ),
                              this._resetPositionFillFilter(t),
                              t.set({ angle: n, left: i, top: r });
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Sr = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    stroke: "#000000",
                    strokeWidth: 0,
                    fill: "#000000",
                    opacity: 0.4,
                    evented: !1,
                    selectable: !1,
                    hoverCursor: "auto",
                  },
                  Tr = "zoomChanged",
                  Dr = "keydown",
                  Lr = "keyup",
                  qr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i, r, o, a, s, l, c, d, u, p, h, f, b;
                      z(this, n),
                        ((b = e.call(this, At.ZOOM, t)).zoomArea = null),
                        (b._startPoint = null),
                        (b._centerPoints = []),
                        (b.zoomLevel = 1),
                        (b.zoomMode = ye),
                        (b._listeners = {
                          startZoom: T()((i = b._onMouseDownWithZoomMode)).call(
                            i,
                            qn(b)
                          ),
                          moveZoom: T()((r = b._onMouseMoveWithZoomMode)).call(
                            r,
                            qn(b)
                          ),
                          stopZoom: T()((o = b._onMouseUpWithZoomMode)).call(
                            o,
                            qn(b)
                          ),
                          startHand: T()((a = b._onMouseDownWithHandMode)).call(
                            a,
                            qn(b)
                          ),
                          moveHand: T()((s = b._onMouseMoveWithHandMode)).call(
                            s,
                            qn(b)
                          ),
                          stopHand: T()((l = b._onMouseUpWithHandMode)).call(
                            l,
                            qn(b)
                          ),
                          zoomChanged: T()((c = b._changeScrollState)).call(
                            c,
                            qn(b)
                          ),
                          keydown: T()((d = b._startHandModeWithSpaceBar)).call(
                            d,
                            qn(b)
                          ),
                          keyup: T()((u = b._endHandModeWithSpaceBar)).call(
                            u,
                            qn(b)
                          ),
                        });
                      var m = b.getCanvas();
                      return (
                        (b.aspectRatio = m.width / m.height),
                        (b._verticalScroll = new R.fabric.Rect(Sr)),
                        (b._horizontalScroll = new R.fabric.Rect(Sr)),
                        m.on(Tr, b._listeners.zoomChanged),
                        b.graphics.on(
                          "addText",
                          T()((p = b._startTextEditingHandler)).call(p, qn(b))
                        ),
                        b.graphics.on(
                          "textEditing",
                          T()((h = b._startTextEditingHandler)).call(h, qn(b))
                        ),
                        b.graphics.on(
                          "objectModified",
                          T()((f = b._stopTextEditingHandler)).call(f, qn(b))
                        ),
                        b
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "attachKeyboardZoomEvents",
                          value: function () {
                            R.fabric.util.addListener(
                              document,
                              Dr,
                              this._listeners.keydown
                            ),
                              R.fabric.util.addListener(
                                document,
                                Lr,
                                this._listeners.keyup
                              );
                          },
                        },
                        {
                          key: "detachKeyboardZoomEvents",
                          value: function () {
                            R.fabric.util.removeListener(
                              document,
                              Dr,
                              this._listeners.keydown
                            ),
                              R.fabric.util.removeListener(
                                document,
                                Lr,
                                this._listeners.keyup
                              );
                          },
                        },
                        {
                          key: "_startTextEditingHandler",
                          value: function () {
                            this.isTextEditing = !0;
                          },
                        },
                        {
                          key: "_stopTextEditingHandler",
                          value: function () {
                            this.isTextEditing = !1;
                          },
                        },
                        {
                          key: "_startHandModeWithSpaceBar",
                          value: function (t) {
                            this.withSpace ||
                              this.isTextEditing ||
                              (32 === t.keyCode &&
                                ((this.withSpace = !0), this.startHandMode()));
                          },
                        },
                        {
                          key: "_endHandModeWithSpaceBar",
                          value: function (t) {
                            32 === t.keyCode &&
                              ((this.withSpace = !1), this.endHandMode());
                          },
                        },
                        {
                          key: "startZoomInMode",
                          value: function () {
                            if (!this.zoomArea) {
                              this.endHandMode(), (this.zoomMode = Me);
                              var t = this.getCanvas();
                              this._changeObjectsEventedState(!1),
                                (this.zoomArea = new R.fabric.Rect({
                                  left: 0,
                                  top: 0,
                                  width: 0.5,
                                  height: 0.5,
                                  stroke: "black",
                                  strokeWidth: 1,
                                  fill: "transparent",
                                  hoverCursor: "zoom-in",
                                })),
                                t.discardActiveObject(),
                                t.add(this.zoomArea),
                                t.on("mouse:down", this._listeners.startZoom),
                                (t.selection = !1),
                                (t.defaultCursor = "zoom-in");
                            }
                          },
                        },
                        {
                          key: "endZoomInMode",
                          value: function () {
                            this.zoomMode = ye;
                            var t = this.getCanvas(),
                              e = this._listeners,
                              n = e.startZoom,
                              i = e.moveZoom,
                              r = e.stopZoom;
                            (t.selection = !0),
                              (t.defaultCursor = "auto"),
                              t.off({
                                "mouse:down": n,
                                "mouse:move": i,
                                "mouse:up": r,
                              }),
                              this._changeObjectsEventedState(!0),
                              t.remove(this.zoomArea),
                              (this.zoomArea = null);
                          },
                        },
                        {
                          key: "start",
                          value: function () {
                            (this.zoomArea = null),
                              (this._startPoint = null),
                              (this._startHandPoint = null);
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            this.endZoomInMode(), this.endHandMode();
                          },
                        },
                        {
                          key: "startHandMode",
                          value: function () {
                            this.endZoomInMode(), (this.zoomMode = Oe);
                            var t = this.getCanvas();
                            this._changeObjectsEventedState(!1),
                              t.discardActiveObject(),
                              t.off("mouse:down", this._listeners.startHand),
                              t.on("mouse:down", this._listeners.startHand),
                              (t.selection = !1),
                              (t.defaultCursor = "grab"),
                              t.fire("handStarted");
                          },
                        },
                        {
                          key: "endHandMode",
                          value: function () {
                            this.zoomMode = ye;
                            var t = this.getCanvas();
                            this._changeObjectsEventedState(!0),
                              t.off("mouse:down", this._listeners.startHand),
                              (t.selection = !0),
                              (t.defaultCursor = "auto"),
                              (this._startHandPoint = null),
                              t.fire("handStopped");
                          },
                        },
                        {
                          key: "_onMouseDownWithZoomMode",
                          value: function (t) {
                            var e = t.target,
                              n = t.e;
                            if (!e) {
                              var i = this.getCanvas();
                              (i.selection = !1),
                                (this._startPoint = i.getPointer(n)),
                                this.zoomArea.set({ width: 0, height: 0 });
                              var r = this._listeners,
                                o = r.moveZoom,
                                a = r.stopZoom;
                              i.on({ "mouse:move": o, "mouse:up": a });
                            }
                          },
                        },
                        {
                          key: "_onMouseMoveWithZoomMode",
                          value: function (t) {
                            var e = t.e,
                              n = this.getCanvas(),
                              i = n.getPointer(e),
                              r = i.x,
                              o = i.y,
                              a = this.zoomArea,
                              s = this._startPoint;
                            Math.abs(r - s.x) + Math.abs(o - s.y) > 10 &&
                              (n.remove(a),
                              a.set(this._calcRectDimensionFromPoint(r, o)),
                              n.add(a));
                          },
                        },
                        {
                          key: "_calcRectDimensionFromPoint",
                          value: function (t, e) {
                            var n = this.getCanvas(),
                              i = n.getWidth(),
                              r = n.getHeight(),
                              o = this._startPoint,
                              a = o.x,
                              s = o.y,
                              l = Math.min,
                              c = l(a, t),
                              d = l(s, e);
                            return {
                              left: c,
                              top: d,
                              width: $e(t, a, i) - c,
                              height: $e(e, s, r) - d,
                            };
                          },
                        },
                        {
                          key: "_onMouseUpWithZoomMode",
                          value: function () {
                            var t = this.zoomLevel,
                              e = this.zoomArea,
                              n = this._listeners,
                              i = n.moveZoom,
                              r = n.stopZoom,
                              o = this.getCanvas(),
                              a = this._getCenterPoint(),
                              s = a.x,
                              l = a.y;
                            this._isMaxZoomLevel() ||
                              (this._centerPoints.push({
                                x: s,
                                y: l,
                                prevZoomLevel: t,
                                zoomLevel: t + 1,
                              }),
                              (t += 1),
                              o.zoomToPoint({ x: s, y: l }, t),
                              this._fireZoomChanged(o, t),
                              (this.zoomLevel = t)),
                              o.off({ "mouse:move": i, "mouse:up": r }),
                              o.remove(e),
                              (this._startPoint = null);
                          },
                        },
                        {
                          key: "_getCenterPoint",
                          value: function () {
                            var t = this.zoomArea,
                              e = t.left,
                              n = t.top,
                              i = t.width,
                              r = t.height,
                              o = this._startPoint,
                              a = o.x,
                              s = o.y,
                              l = this.aspectRatio;
                            return i < 10 && r < 10
                              ? { x: a, y: s }
                              : i > r
                              ? { x: e + (l * r) / 2, y: n + r / 2 }
                              : { x: e + i / 2, y: n + i / l / 2 };
                          },
                        },
                        {
                          key: "zoom",
                          value: function (t) {
                            for (
                              var e = t.x,
                                n = t.y,
                                i =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.zoomLevel,
                                r = this.getCanvas(),
                                o = this._centerPoints,
                                a = o.length - 1;
                              a >= 0 && !(o[a].zoomLevel < i);
                              a -= 1
                            ) {
                              var s = o.pop(),
                                l = s.x,
                                c = s.y,
                                d = s.prevZoomLevel;
                              r.zoomToPoint({ x: l, y: c }, d),
                                (this.zoomLevel = d);
                            }
                            r.zoomToPoint({ x: e, y: n }, i),
                              this._isDefaultZoomLevel(i) ||
                                this._centerPoints.push({
                                  x: e,
                                  y: n,
                                  zoomLevel: i,
                                  prevZoomLevel: this.zoomLevel,
                                }),
                              (this.zoomLevel = i),
                              this._fireZoomChanged(r, i);
                          },
                        },
                        {
                          key: "zoomOut",
                          value: function () {
                            var t = this._centerPoints;
                            if (t.length) {
                              var e = this.getCanvas(),
                                n = t.pop(),
                                i = n.x,
                                r = n.y,
                                o = n.prevZoomLevel;
                              this._isDefaultZoomLevel(o)
                                ? e.setViewportTransform([1, 0, 0, 1, 0, 0])
                                : e.zoomToPoint({ x: i, y: r }, o),
                                (this.zoomLevel = o),
                                this._fireZoomChanged(e, this.zoomLevel);
                            }
                          },
                        },
                        {
                          key: "resetZoom",
                          value: function () {
                            var t = this.getCanvas();
                            t.setViewportTransform([1, 0, 0, 1, 0, 0]),
                              (this.zoomLevel = 1),
                              (this._centerPoints = []),
                              this._fireZoomChanged(t, this.zoomLevel);
                          },
                        },
                        {
                          key: "_isMaxZoomLevel",
                          value: function () {
                            return this.zoomLevel >= 5;
                          },
                        },
                        {
                          key: "_movePointOfZoom",
                          value: function (t) {
                            var e = t.x,
                              n = t.y,
                              i = this._centerPoints;
                            if (i.length) {
                              var r = this.getCanvas(),
                                o = this.zoomLevel,
                                a = i.pop(),
                                s = a.x,
                                l = a.y,
                                c = a.prevZoomLevel,
                                d = s - e,
                                u = l - n;
                              r.zoomToPoint({ x: s, y: l }, c),
                                r.zoomToPoint({ x: d, y: u }, o),
                                i.push({
                                  x: d,
                                  y: u,
                                  prevZoomLevel: c,
                                  zoomLevel: o,
                                }),
                                this._fireZoomChanged(r, o);
                            }
                          },
                        },
                        {
                          key: "_onMouseDownWithHandMode",
                          value: function (t) {
                            var e = t.target,
                              n = t.e;
                            if (!e) {
                              var i = this.getCanvas();
                              if (!(this.zoomLevel <= 1)) {
                                (i.selection = !1),
                                  (this._startHandPoint = i.getPointer(n));
                                var r = this._listeners,
                                  o = r.moveHand,
                                  a = r.stopHand;
                                i.on({ "mouse:move": o, "mouse:up": a });
                              }
                            }
                          },
                        },
                        {
                          key: "_onMouseMoveWithHandMode",
                          value: function (t) {
                            var e = t.e,
                              n = this.getCanvas().getPointer(e),
                              i = n.x,
                              r = n.y,
                              o = i - this._startHandPoint.x,
                              a = r - this._startHandPoint.y;
                            this._movePointOfZoom({ x: o, y: a });
                          },
                        },
                        {
                          key: "_onMouseUpWithHandMode",
                          value: function () {
                            var t = this.getCanvas(),
                              e = this._listeners,
                              n = e.moveHand,
                              i = e.stopHand;
                            t.off({ "mouse:move": n, "mouse:up": i }),
                              (this._startHandPoint = null);
                          },
                        },
                        {
                          key: "_changeScrollState",
                          value: function (t) {
                            var e = t.viewport,
                              n = t.zoomLevel,
                              i = this.getCanvas();
                            if (
                              (i.remove(this._verticalScroll),
                              i.remove(this._horizontalScroll),
                              !this._isDefaultZoomLevel(n))
                            ) {
                              var r = i.width,
                                o = i.height,
                                a = e.tl,
                                s = e.tr,
                                l = e.bl,
                                c = s.x - a.x,
                                d = l.y - a.y,
                                u = (c * c) / r,
                                p = 0.0066 * d,
                                h = $e(a.x + (a.x / r) * c, a.x, s.x - u),
                                f = 0.0044 * d,
                                b = 0.003 * d;
                              this._horizontalScroll.set({
                                left: h,
                                top: l.y - p - f,
                                width: u,
                                height: p,
                                rx: b,
                                ry: b,
                              });
                              var m = 0.0045 * c,
                                g = (d * d) / o,
                                v = $e(a.y + (a.y / o) * d, s.y, l.y - g),
                                _ = 0.003 * c,
                                y = 0.003 * c;
                              this._verticalScroll.set({
                                left: s.x - m - _,
                                top: v,
                                width: m,
                                height: g,
                                rx: y,
                                ry: y,
                              }),
                                this._addScrollBar();
                            }
                          },
                        },
                        {
                          key: "_changeObjectsEventedState",
                          value: function () {
                            var t =
                                !(
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                ) || arguments[0],
                              e = this.getCanvas();
                            e.forEachObject(function (e) {
                              e.evented = t;
                            });
                          },
                        },
                        {
                          key: "_addScrollBar",
                          value: function () {
                            var t = this,
                              e = this.getCanvas();
                            e.add(this._horizontalScroll),
                              e.add(this._verticalScroll),
                              this.scrollBarTid &&
                                clearTimeout(this.scrollBarTid),
                              (this.scrollBarTid = b()(function () {
                                e.remove(t._horizontalScroll),
                                  e.remove(t._verticalScroll);
                              }, 3e3));
                          },
                        },
                        {
                          key: "_isDefaultZoomLevel",
                          value: function (t) {
                            return 1 === t;
                          },
                        },
                        {
                          key: "_fireZoomChanged",
                          value: function (t, e) {
                            t.fire(Tr, {
                              viewport: t.calcViewportBoundaries(),
                              zoomLevel: e,
                            });
                          },
                        },
                        {
                          key: "mode",
                          get: function () {
                            return this.zoomMode;
                          },
                        },
                      ]),
                      n
                    );
                  })(Ni),
                  Er = dn.create,
                  jr = dn.types,
                  Pr = (function () {
                    function t(e) {
                      z(this, t), (this.name = e);
                    }
                    return (
                      k(t, [
                        {
                          key: "getName",
                          value: function () {
                            return this.name;
                          },
                        },
                        {
                          key: "start",
                          value: function () {
                            throw new Error(Er(jr.UN_IMPLEMENTATION, "start"));
                          },
                        },
                        {
                          key: "end",
                          value: function () {
                            throw new Error(Er(jr.UN_IMPLEMENTATION, "stop"));
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  Rr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.CROPPER);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.CROPPER).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.CROPPER).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Ir = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.FREE_DRAWING);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t, e) {
                            t.getComponent(At.FREE_DRAWING).start(e);
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.FREE_DRAWING).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Wr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.LINE_DRAWING);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t, e) {
                            t.getComponent(At.LINE).start(e);
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.LINE).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Nr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.SHAPE);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.SHAPE).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.SHAPE).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Br = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.TEXT);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.TEXT).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.TEXT).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Fr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.ICON);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.ICON).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.ICON).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  $r = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.ZOOM);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.ZOOM).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.ZOOM).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Hr = null;
                function Yr(t) {
                  Hr = t;
                }
                function Ur(t, e) {
                  var n;
                  return "activeSelection" === t.type
                    ? Mn()((n = t.getObjects())).call(n, function (n) {
                        var i = n.angle,
                          r = n.left,
                          o = n.top,
                          a = n.scaleX,
                          s = n.scaleY,
                          l = n.width,
                          c = n.height;
                        R.fabric.util.addTransformToObject(
                          n,
                          t.calcTransformMatrix()
                        );
                        var d = e(n);
                        return (
                          n.set({
                            angle: i,
                            left: r,
                            top: o,
                            width: l,
                            height: c,
                            scaleX: a,
                            scaleY: s,
                          }),
                          d
                        );
                      })
                    : [e(t)];
                }
                function Xr(t, e, n) {
                  return n
                    ? {
                        id: t,
                        width: e.width,
                        height: e.height,
                        top: e.top,
                        left: e.left,
                        angle: e.angle,
                        scaleX: e.scaleX,
                        scaleY: e.scaleY,
                      }
                    : W()({ id: t }, e);
                }
                var Vr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n(t) {
                      var i;
                      return (
                        z(this, n),
                        ((i = e.call(this, At.RESIZE, t))._dimensions = null),
                        (i._originalDimensions = null),
                        i
                      );
                    }
                    return (
                      k(n, [
                        {
                          key: "getCurrentDimensions",
                          value: function () {
                            var t = this.getCanvasImage();
                            if (!this._dimensions && t) {
                              var e = t.width,
                                n = t.height;
                              this._dimensions = { width: e, height: n };
                            }
                            return this._dimensions;
                          },
                        },
                        {
                          key: "getOriginalDimensions",
                          value: function () {
                            return this._originalDimensions;
                          },
                        },
                        {
                          key: "setOriginalDimensions",
                          value: function (t) {
                            this._originalDimensions = t;
                          },
                        },
                        {
                          key: "resize",
                          value: function (t) {
                            var e = this.getCanvasImage(),
                              n = e.width,
                              i = e.height,
                              r = e.scaleX,
                              o = e.scaleY,
                              a = t.width,
                              s = t.height,
                              l = {
                                scaleX: a ? a / n : r,
                                scaleY: s ? s / i : o,
                              };
                            return (
                              (r === l.scaleX && o === l.scaleY) ||
                                (e.set(l).setCoords(),
                                (this._dimensions = {
                                  width: e.width * e.scaleX,
                                  height: e.height * e.scaleY,
                                })),
                              this.adjustCanvasDimensionBase(),
                              E().resolve()
                            );
                          },
                        },
                        {
                          key: "start",
                          value: function () {
                            var t = this.getCurrentDimensions();
                            this.setOriginalDimensions(t);
                          },
                        },
                        { key: "end", value: function () {} },
                      ]),
                      n
                    );
                  })(Ni),
                  Gr = (function (t) {
                    Tn(n, t);
                    var e = (function (t) {
                      var e = (function () {
                        if ("undefined" == typeof Reflect || !zn()) return !1;
                        if (zn().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              zn()(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          i = Pn(t);
                        if (e) {
                          var r = Pn(this).constructor;
                          n = zn()(i, arguments, r);
                        } else n = i.apply(this, arguments);
                        return En(this, n);
                      };
                    })(n);
                    function n() {
                      return z(this, n), e.call(this, _e.RESIZE);
                    }
                    return (
                      k(n, [
                        {
                          key: "start",
                          value: function (t) {
                            t.getComponent(At.RESIZE).start();
                          },
                        },
                        {
                          key: "end",
                          value: function (t) {
                            t.getComponent(At.RESIZE).end();
                          },
                        },
                      ]),
                      n
                    );
                  })(Pr),
                  Kr = { cssOnly: !0 },
                  Zr = { backstoreOnly: !0 },
                  Jr = (function () {
                    function t(e) {
                      var n,
                        i,
                        r,
                        o,
                        a,
                        s,
                        l,
                        c,
                        d,
                        u,
                        p,
                        h =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        f = h.cssMaxWidth,
                        b = h.cssMaxHeight;
                      z(this, t),
                        (this.canvasImage = null),
                        (this.cssMaxWidth = f || 1e3),
                        (this.cssMaxHeight = b || 800),
                        (this.cropSelectionStyle = {}),
                        (this.targetObjectForCopyPaste = null),
                        (this.imageName = ""),
                        (this._objects = {}),
                        (this._canvas = null),
                        (this._drawingMode = _e.NORMAL),
                        (this._drawingModeMap = {}),
                        (this._componentMap = {}),
                        (this._handler = {
                          onMouseDown: T()((n = this._onMouseDown)).call(
                            n,
                            this
                          ),
                          onObjectAdded: T()((i = this._onObjectAdded)).call(
                            i,
                            this
                          ),
                          onObjectRemoved: T()(
                            (r = this._onObjectRemoved)
                          ).call(r, this),
                          onObjectMoved: T()((o = this._onObjectMoved)).call(
                            o,
                            this
                          ),
                          onObjectScaled: T()((a = this._onObjectScaled)).call(
                            a,
                            this
                          ),
                          onObjectModified: T()(
                            (s = this._onObjectModified)
                          ).call(s, this),
                          onObjectRotated: T()(
                            (l = this._onObjectRotated)
                          ).call(l, this),
                          onObjectSelected: T()(
                            (c = this._onObjectSelected)
                          ).call(c, this),
                          onPathCreated: T()((d = this._onPathCreated)).call(
                            d,
                            this
                          ),
                          onSelectionCleared: T()(
                            (u = this._onSelectionCleared)
                          ).call(u, this),
                          onSelectionCreated: T()(
                            (p = this._onSelectionCreated)
                          ).call(p, this),
                        }),
                        this._setObjectCachingToFalse(),
                        this._setCanvasElement(e),
                        this._createDrawingModeInstances(),
                        this._createComponents(),
                        this._attachCanvasEvents(),
                        this._attachZoomEvents();
                    }
                    return (
                      k(t, [
                        {
                          key: "destroy",
                          value: function () {
                            var t = this._canvas.wrapperEl;
                            this._canvas.clear(),
                              t.parentNode.removeChild(t),
                              this._detachZoomEvents();
                          },
                        },
                        {
                          key: "_attachZoomEvents",
                          value: function () {
                            this.getComponent(
                              At.ZOOM
                            ).attachKeyboardZoomEvents();
                          },
                        },
                        {
                          key: "_detachZoomEvents",
                          value: function () {
                            this.getComponent(
                              At.ZOOM
                            ).detachKeyboardZoomEvents();
                          },
                        },
                        {
                          key: "deactivateAll",
                          value: function () {
                            return this._canvas.discardActiveObject(), this;
                          },
                        },
                        {
                          key: "renderAll",
                          value: function () {
                            return this._canvas.renderAll(), this;
                          },
                        },
                        {
                          key: "add",
                          value: function (t) {
                            var e,
                              n = [];
                            Ri()(t) ? (n = t) : n.push(t),
                              (e = this._canvas).add.apply(e, w(n));
                          },
                        },
                        {
                          key: "contains",
                          value: function (t) {
                            return this._canvas.contains(t);
                          },
                        },
                        {
                          key: "getObjects",
                          value: function () {
                            var t;
                            return u()((t = this._canvas.getObjects())).call(t);
                          },
                        },
                        {
                          key: "getObject",
                          value: function (t) {
                            return this._objects[t];
                          },
                        },
                        {
                          key: "remove",
                          value: function (t) {
                            this._canvas.remove(t);
                          },
                        },
                        {
                          key: "removeAll",
                          value: function (t) {
                            var e,
                              n = this._canvas,
                              i = u()((e = n.getObjects())).call(e);
                            return (
                              n.remove.apply(n, w(this._canvas.getObjects())),
                              t && n.clear(),
                              i
                            );
                          },
                        },
                        {
                          key: "removeObjectById",
                          value: function (t) {
                            var e = [],
                              n = this._canvas,
                              i = this.getObject(t);
                            return (
                              i && i.isType("group") && !i.isEmpty()
                                ? (n.discardActiveObject(),
                                  i.forEachObject(function (t) {
                                    e.push(t), n.remove(t);
                                  }))
                                : n.contains(i) && (e.push(i), n.remove(i)),
                              e
                            );
                          },
                        },
                        {
                          key: "getObjectId",
                          value: function (t) {
                            var e = null;
                            for (e in this._objects)
                              if (
                                this._objects.hasOwnProperty(e) &&
                                t === this._objects[e]
                              )
                                return e;
                            return null;
                          },
                        },
                        {
                          key: "getActiveObject",
                          value: function () {
                            return this._canvas._activeObject;
                          },
                        },
                        {
                          key: "getActiveObjectIdForRemove",
                          value: function () {
                            var t = this.getActiveObject(),
                              e = t.type,
                              n = t.left,
                              i = t.top;
                            if ("activeSelection" === e) {
                              var r = new R.fabric.Group(w(t.getObjects()), {
                                left: n,
                                top: i,
                              });
                              return this._addFabricObject(r);
                            }
                            return this.getObjectId(t);
                          },
                        },
                        {
                          key: "isReadyRemoveObject",
                          value: function () {
                            var t = this.getActiveObject();
                            return t && !t.isEditing;
                          },
                        },
                        {
                          key: "getActiveObjects",
                          value: function () {
                            var t = this._canvas._activeObject;
                            return t && "activeSelection" === t.type ? t : null;
                          },
                        },
                        {
                          key: "getActiveSelectionFromObjects",
                          value: function (t) {
                            var e = this.getCanvas();
                            return new R.fabric.ActiveSelection(t, {
                              canvas: e,
                            });
                          },
                        },
                        {
                          key: "setActiveObject",
                          value: function (t) {
                            this._canvas.setActiveObject(t);
                          },
                        },
                        {
                          key: "setCropSelectionStyle",
                          value: function (t) {
                            this.cropSelectionStyle = t;
                          },
                        },
                        {
                          key: "getComponent",
                          value: function (t) {
                            return this._componentMap[t];
                          },
                        },
                        {
                          key: "getDrawingMode",
                          value: function () {
                            return this._drawingMode;
                          },
                        },
                        {
                          key: "startDrawingMode",
                          value: function (t, e) {
                            if (this._isSameDrawingMode(t)) return !0;
                            this.stopDrawingMode();
                            var n = this._getDrawingModeInstance(t);
                            return (
                              n &&
                                n.start &&
                                (n.start(this, e), (this._drawingMode = t)),
                              !!n
                            );
                          },
                        },
                        {
                          key: "stopDrawingMode",
                          value: function () {
                            if (!this._isSameDrawingMode(_e.NORMAL)) {
                              var t = this._getDrawingModeInstance(
                                this.getDrawingMode()
                              );
                              t && t.end && t.end(this),
                                (this._drawingMode = _e.NORMAL);
                            }
                          },
                        },
                        {
                          key: "zoom",
                          value: function (t, e) {
                            var n = t.x,
                              i = t.y;
                            this.getComponent(At.ZOOM).zoom({ x: n, y: i }, e);
                          },
                        },
                        {
                          key: "getZoomMode",
                          value: function () {
                            return this.getComponent(At.ZOOM).mode;
                          },
                        },
                        {
                          key: "startZoomInMode",
                          value: function () {
                            this.getComponent(At.ZOOM).startZoomInMode();
                          },
                        },
                        {
                          key: "endZoomInMode",
                          value: function () {
                            this.getComponent(At.ZOOM).endZoomInMode();
                          },
                        },
                        {
                          key: "zoomOut",
                          value: function () {
                            this.getComponent(At.ZOOM).zoomOut();
                          },
                        },
                        {
                          key: "startHandMode",
                          value: function () {
                            this.getComponent(At.ZOOM).startHandMode();
                          },
                        },
                        {
                          key: "endHandMode",
                          value: function () {
                            this.getComponent(At.ZOOM).endHandMode();
                          },
                        },
                        {
                          key: "resetZoom",
                          value: function () {
                            this.getComponent(At.ZOOM).resetZoom();
                          },
                        },
                        {
                          key: "toDataURL",
                          value: function (t) {
                            var e = this.getComponent(At.CROPPER);
                            e.changeVisibility(!1);
                            var n = this._canvas && this._canvas.toDataURL(t);
                            return e.changeVisibility(!0), n;
                          },
                        },
                        {
                          key: "setCanvasImage",
                          value: function (t, e) {
                            e && Be(e),
                              (this.imageName = t),
                              (this.canvasImage = e);
                          },
                        },
                        {
                          key: "setCssMaxDimension",
                          value: function (t) {
                            (this.cssMaxWidth = t.width || this.cssMaxWidth),
                              (this.cssMaxHeight =
                                t.height || this.cssMaxHeight);
                          },
                        },
                        {
                          key: "adjustCanvasDimension",
                          value: function () {
                            this.adjustCanvasDimensionBase(
                              this.canvasImage.scale(1)
                            );
                          },
                        },
                        {
                          key: "adjustCanvasDimensionBase",
                          value: function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                            t || (t = this.canvasImage);
                            var e = t.getBoundingRect(),
                              n = e.width,
                              i = e.height,
                              r = this._calcMaxDimension(n, i);
                            this.setCanvasCssDimension({
                              width: "100%",
                              height: "100%",
                              "max-width": "".concat(r.width, "px"),
                              "max-height": "".concat(r.height, "px"),
                            }),
                              this.setCanvasBackstoreDimension({
                                width: n,
                                height: i,
                              }),
                              this._canvas.centerObject(t);
                          },
                        },
                        {
                          key: "setCanvasCssDimension",
                          value: function (t) {
                            this._canvas.setDimensions(t, Kr);
                          },
                        },
                        {
                          key: "setCanvasBackstoreDimension",
                          value: function (t) {
                            this._canvas.setDimensions(t, Zr);
                          },
                        },
                        {
                          key: "setImageProperties",
                          value: function (t, e) {
                            var n = this.canvasImage;
                            n &&
                              (n.set(t).setCoords(),
                              e && this._canvas.renderAll());
                          },
                        },
                        {
                          key: "getCanvasElement",
                          value: function () {
                            return this._canvas.getElement();
                          },
                        },
                        {
                          key: "getCanvas",
                          value: function () {
                            return this._canvas;
                          },
                        },
                        {
                          key: "getCanvasImage",
                          value: function () {
                            return this.canvasImage;
                          },
                        },
                        {
                          key: "getImageName",
                          value: function () {
                            return this.imageName;
                          },
                        },
                        {
                          key: "addImageObject",
                          value: function (t) {
                            var e,
                              n = this,
                              i = T()(
                                (e = this._callbackAfterLoadingImageObject)
                              ).call(e, this);
                            return new (E())(function (e) {
                              R.fabric.Image.fromURL(
                                t,
                                function (t) {
                                  i(t), e(n.createObjectProperties(t));
                                },
                                { crossOrigin: "Anonymous" }
                              );
                            });
                          },
                        },
                        {
                          key: "getCenter",
                          value: function () {
                            return this._canvas.getCenter();
                          },
                        },
                        {
                          key: "getCropzoneRect",
                          value: function () {
                            return this.getComponent(
                              At.CROPPER
                            ).getCropzoneRect();
                          },
                        },
                        {
                          key: "setCropzoneRect",
                          value: function (t) {
                            this.getComponent(At.CROPPER).setCropzoneRect(t);
                          },
                        },
                        {
                          key: "getCroppedImageData",
                          value: function (t) {
                            return this.getComponent(
                              At.CROPPER
                            ).getCroppedImageData(t);
                          },
                        },
                        {
                          key: "setBrush",
                          value: function (t) {
                            var e = this._drawingMode,
                              n = At.FREE_DRAWING;
                            e === _e.LINE_DRAWING && (n = At.LINE),
                              this.getComponent(n).setBrush(t);
                          },
                        },
                        {
                          key: "setDrawingShape",
                          value: function (t, e) {
                            this.getComponent(At.SHAPE).setStates(t, e);
                          },
                        },
                        {
                          key: "setIconStyle",
                          value: function (t, e) {
                            this.getComponent(At.ICON).setStates(t, e);
                          },
                        },
                        {
                          key: "registerPaths",
                          value: function (t) {
                            this.getComponent(At.ICON).registerPaths(t);
                          },
                        },
                        {
                          key: "changeCursor",
                          value: function (t) {
                            var e = this.getCanvas();
                            (e.defaultCursor = t), e.renderAll();
                          },
                        },
                        {
                          key: "hasFilter",
                          value: function (t) {
                            return this.getComponent(At.FILTER).hasFilter(t);
                          },
                        },
                        {
                          key: "setSelectionStyle",
                          value: function (t) {
                            W()(Ae, t);
                          },
                        },
                        {
                          key: "setObjectProperties",
                          value: function (t, e) {
                            var n = this.getObject(t),
                              i = W()({}, e);
                            return (
                              n.set(i),
                              n.setCoords(),
                              this.getCanvas().renderAll(),
                              i
                            );
                          },
                        },
                        {
                          key: "getObjectProperties",
                          value: function (t, e) {
                            var n = this.getObject(t),
                              i = {};
                            return (
                              X()(e)
                                ? (i[e] = n[e])
                                : Ri()(e)
                                ? In()(e, function (t) {
                                    i[t] = n[t];
                                  })
                                : Wi()(e, function (t, e) {
                                    i[e] = n[e];
                                  }),
                              i
                            );
                          },
                        },
                        {
                          key: "getObjectPosition",
                          value: function (t, e, n) {
                            var i = this.getObject(t);
                            return i ? i.getPointByOrigin(e, n) : null;
                          },
                        },
                        {
                          key: "setObjectPosition",
                          value: function (t, e) {
                            var n = this.getObject(t),
                              i = e.x,
                              r = e.y,
                              o = e.originX,
                              a = e.originY;
                            if (!n) return !1;
                            var s = n.getPointByOrigin(o, a),
                              l = n.getPointByOrigin("center", "center"),
                              c = l.x - s.x,
                              d = l.y - s.y;
                            return (
                              n.set({ left: i + c, top: r + d }),
                              n.setCoords(),
                              !0
                            );
                          },
                        },
                        {
                          key: "getCanvasSize",
                          value: function () {
                            var t = this.getCanvasImage();
                            return {
                              width: t ? t.width : 0,
                              height: t ? t.height : 0,
                            };
                          },
                        },
                        {
                          key: "createStaticCanvas",
                          value: function () {
                            var t = new R.fabric.StaticCanvas();
                            return t.set({ enableRetinaScaling: !1 }), t;
                          },
                        },
                        {
                          key: "_getDrawingModeInstance",
                          value: function (t) {
                            return this._drawingModeMap[t];
                          },
                        },
                        {
                          key: "_setObjectCachingToFalse",
                          value: function () {
                            R.fabric.Object.prototype.objectCaching = !1;
                          },
                        },
                        {
                          key: "_setCanvasElement",
                          value: function (t) {
                            var e, n;
                            "CANVAS" !==
                              (e = t.nodeType
                                ? t
                                : document.querySelector(
                                    t
                                  )).nodeName.toUpperCase() &&
                              ((n = document.createElement("canvas")),
                              e.appendChild(n)),
                              (this._canvas = new R.fabric.Canvas(n, {
                                containerClass:
                                  "tui-image-editor-canvas-container",
                                enableRetinaScaling: !1,
                              }));
                          },
                        },
                        {
                          key: "_createDrawingModeInstances",
                          value: function () {
                            this._register(this._drawingModeMap, new Rr()),
                              this._register(this._drawingModeMap, new Ir()),
                              this._register(this._drawingModeMap, new Wr()),
                              this._register(this._drawingModeMap, new Nr()),
                              this._register(this._drawingModeMap, new Br()),
                              this._register(this._drawingModeMap, new Fr()),
                              this._register(this._drawingModeMap, new $r()),
                              this._register(this._drawingModeMap, new Gr());
                          },
                        },
                        {
                          key: "_createComponents",
                          value: function () {
                            this._register(this._componentMap, new Fi(this)),
                              this._register(this._componentMap, new Vi(this)),
                              this._register(this._componentMap, new Gi(this)),
                              this._register(this._componentMap, new Ki(this)),
                              this._register(this._componentMap, new Zi(this)),
                              this._register(this._componentMap, new Qi(this)),
                              this._register(this._componentMap, new nr(this)),
                              this._register(this._componentMap, new rr(this)),
                              this._register(this._componentMap, new hr(this)),
                              this._register(this._componentMap, new kr(this)),
                              this._register(this._componentMap, new qr(this)),
                              this._register(this._componentMap, new Vr(this));
                          },
                        },
                        {
                          key: "_register",
                          value: function (t, e) {
                            t[e.getName()] = e;
                          },
                        },
                        {
                          key: "_isSameDrawingMode",
                          value: function (t) {
                            return this.getDrawingMode() === t;
                          },
                        },
                        {
                          key: "_calcMaxDimension",
                          value: function (t, e) {
                            var n = this.cssMaxWidth / t,
                              i = this.cssMaxHeight / e,
                              r = Math.min(t, this.cssMaxWidth),
                              o = Math.min(e, this.cssMaxHeight);
                            return (
                              n < 1 && n < i
                                ? ((r = t * n), (o = e * n))
                                : i < 1 && i < n && ((r = t * i), (o = e * i)),
                              { width: Math.floor(r), height: Math.floor(o) }
                            );
                          },
                        },
                        {
                          key: "_callbackAfterLoadingImageObject",
                          value: function (t) {
                            var e = this.getCanvasImage().getCenterPoint();
                            t.set(Ae),
                              t.set({
                                left: e.x,
                                top: e.y,
                                crossOrigin: "Anonymous",
                              }),
                              this.getCanvas().add(t).setActiveObject(t);
                          },
                        },
                        {
                          key: "_attachCanvasEvents",
                          value: function () {
                            var t = this._canvas,
                              e = this._handler;
                            t.on({
                              "mouse:down": e.onMouseDown,
                              "object:added": e.onObjectAdded,
                              "object:removed": e.onObjectRemoved,
                              "object:moving": e.onObjectMoved,
                              "object:scaling": e.onObjectScaled,
                              "object:modified": e.onObjectModified,
                              "object:rotating": e.onObjectRotated,
                              "path:created": e.onPathCreated,
                              "selection:cleared": e.onSelectionCleared,
                              "selection:created": e.onSelectionCreated,
                              "selection:updated": e.onObjectSelected,
                            });
                          },
                        },
                        {
                          key: "_onMouseDown",
                          value: function (t) {
                            var e = this,
                              n = t.e,
                              i = t.target,
                              r = this._canvas.getPointer(n);
                            if (i) {
                              var o = i.type;
                              Yr(
                                Ur(i, function (t) {
                                  return Xr(
                                    e.getObjectId(t),
                                    t,
                                    "activeSelection" === o
                                  );
                                })
                              );
                            }
                            this.fire(ne, n, r);
                          },
                        },
                        {
                          key: "_onObjectAdded",
                          value: function (t) {
                            var e = t.target;
                            e.isType("cropzone") || this._addFabricObject(e);
                          },
                        },
                        {
                          key: "_onObjectRemoved",
                          value: function (t) {
                            var e = t.target;
                            this._removeFabricObject(Be(e));
                          },
                        },
                        {
                          key: "_onObjectMoved",
                          value: function (t) {
                            var e = this;
                            this._lazyFire(
                              Vt,
                              function (t) {
                                return e.createObjectProperties(t);
                              },
                              t.target
                            );
                          },
                        },
                        {
                          key: "_onObjectScaled",
                          value: function (t) {
                            var e = this;
                            this._lazyFire(
                              Gt,
                              function (t) {
                                return e.createObjectProperties(t);
                              },
                              t.target
                            );
                          },
                        },
                        {
                          key: "_onObjectModified",
                          value: function (t) {
                            var e = t.target;
                            if ("activeSelection" === e.type) {
                              var n = e.getObjects();
                              et()(n).call(n, function (t) {
                                return t.fire("modifiedInGroup", e);
                              });
                            }
                            this.fire("objectModified", e, this.getObjectId(e));
                          },
                        },
                        {
                          key: "_onObjectRotated",
                          value: function (t) {
                            var e = this;
                            this._lazyFire(
                              Kt,
                              function (t) {
                                return e.createObjectProperties(t);
                              },
                              t.target
                            );
                          },
                        },
                        {
                          key: "_lazyFire",
                          value: function (t, e, n) {
                            var i = this,
                              r =
                                n && n.canvasEventDelegation
                                  ? n.canvasEventDelegation(t)
                                  : "none";
                            "unregistered" === r &&
                              n.canvasEventRegister(t, function (n) {
                                i.fire(t, e(n));
                              }),
                              "none" === r && this.fire(t, e(n));
                          },
                        },
                        {
                          key: "_onObjectSelected",
                          value: function (t) {
                            var e = t.target,
                              n = this.createObjectProperties(e);
                            this.fire(Xt, n);
                          },
                        },
                        {
                          key: "_onPathCreated",
                          value: function (t) {
                            var e = t.path.getCenterPoint(),
                              n = e.x,
                              i = e.y;
                            t.path.set(W()({ left: n, top: i }, Ae));
                            var r = this.createObjectProperties(t.path);
                            this.fire(ee, r);
                          },
                        },
                        {
                          key: "_onSelectionCleared",
                          value: function () {
                            this.fire(oe);
                          },
                        },
                        {
                          key: "_onSelectionCreated",
                          value: function (t) {
                            var e = t.target,
                              n = this.createObjectProperties(e);
                            this.fire(Xt, n), this.fire(ae, t.target);
                          },
                        },
                        {
                          key: "discardSelection",
                          value: function () {
                            this._canvas.discardActiveObject(),
                              this._canvas.renderAll();
                          },
                        },
                        {
                          key: "changeSelectableAll",
                          value: function (t) {
                            this._canvas.forEachObject(function (e) {
                              (e.selectable = t),
                                (e.hoverCursor = t ? "move" : "crosshair");
                            });
                          },
                        },
                        {
                          key: "createObjectProperties",
                          value: function (t) {
                            var e = { id: Be(t), type: t.type };
                            if (
                              (W()(
                                e,
                                Ye(t, [
                                  "left",
                                  "top",
                                  "width",
                                  "height",
                                  "fill",
                                  "stroke",
                                  "strokeWidth",
                                  "opacity",
                                  "angle",
                                ])
                              ),
                              tn(["i-text", "text"], t.type))
                            )
                              W()(e, this._createTextProperties(t, e));
                            else if (
                              tn(["rect", "triangle", "circle"], t.type)
                            ) {
                              var n = this.getComponent(At.SHAPE);
                              W()(e, {
                                fill: n.makeFillPropertyForUserEvent(t),
                              });
                            }
                            return e;
                          },
                        },
                        {
                          key: "_createTextProperties",
                          value: function (t) {
                            var e = {};
                            return (
                              W()(
                                e,
                                Ye(t, [
                                  "text",
                                  "fontFamily",
                                  "fontSize",
                                  "fontStyle",
                                  "textAlign",
                                  "textDecoration",
                                  "fontWeight",
                                ])
                              ),
                              e
                            );
                          },
                        },
                        {
                          key: "_addFabricObject",
                          value: function (t) {
                            var e = Be(t);
                            return (this._objects[e] = t), e;
                          },
                        },
                        {
                          key: "_removeFabricObject",
                          value: function (t) {
                            delete this._objects[t];
                          },
                        },
                        {
                          key: "resetTargetObjectForCopyPaste",
                          value: function () {
                            var t = this.getActiveObject();
                            t && (this.targetObjectForCopyPaste = t);
                          },
                        },
                        {
                          key: "pasteObject",
                          value: function () {
                            var t = this;
                            if (!this.targetObjectForCopyPaste)
                              return E().resolve([]);
                            var e = this.targetObjectForCopyPaste,
                              n =
                                "activeSelection" === e.type
                                  ? e.getObjects()
                                  : [e],
                              i = null;
                            return (
                              this.discardSelection(),
                              this._cloneObject(n).then(function (e) {
                                if (e.length > 1)
                                  i = t.getActiveSelectionFromObjects(e);
                                else {
                                  var n = K(e, 1);
                                  i = n[0];
                                }
                                (t.targetObjectForCopyPaste = i),
                                  t.setActiveObject(i);
                              })
                            );
                          },
                        },
                        {
                          key: "_cloneObject",
                          value: function (t) {
                            var e = this,
                              n = Mn()(t).call(t, function (t) {
                                return e._cloneObjectItem(t);
                              });
                            return E().all(n);
                          },
                        },
                        {
                          key: "_cloneObjectItem",
                          value: function (t) {
                            var e = this;
                            return this._copyFabricObjectForPaste(t).then(
                              function (t) {
                                var n = e.createObjectProperties(t);
                                return e.add(t), e.fire(ee, n), t;
                              }
                            );
                          },
                        },
                        {
                          key: "_copyFabricObjectForPaste",
                          value: function (t) {
                            var e = this,
                              n = function (t, e) {
                                return e ? t - 10 : t + 10;
                              };
                            return this._copyFabricObject(t).then(function (t) {
                              var i = t.left,
                                r = t.top,
                                o = t.width,
                                a = t.height,
                                s = e.getCanvasSize(),
                                l = s.width,
                                c = s.height,
                                d = i + o / 2,
                                u = r + a / 2;
                              return (
                                t.set(
                                  W()(
                                    {
                                      left: n(i, d + 10 > l),
                                      top: n(r, u + 10 > c),
                                    },
                                    Ae
                                  )
                                ),
                                t
                              );
                            });
                          },
                        },
                        {
                          key: "_copyFabricObject",
                          value: function (t) {
                            var e = this;
                            return new (E())(function (n) {
                              t.clone(function (i) {
                                var r = e.getComponent(At.SHAPE);
                                rn(i) && r.processForCopiedObject(i, t), n(i);
                              });
                            });
                          },
                        },
                        {
                          key: "getCurrentDimensions",
                          value: function () {
                            return this.getComponent(
                              At.RESIZE
                            ).getCurrentDimensions();
                          },
                        },
                        {
                          key: "getOriginalDimensions",
                          value: function () {
                            return this.getComponent(
                              At.RESIZE
                            ).getOriginalDimensions();
                          },
                        },
                        {
                          key: "setOriginalDimensions",
                          value: function (t) {
                            this.getComponent(At.RESIZE).setOriginalDimensions(
                              t
                            );
                          },
                        },
                        {
                          key: "resize",
                          value: function (t) {
                            return this.getComponent(At.RESIZE).resize(t);
                          },
                        },
                      ]),
                      t
                    );
                  })();
                Y().mixin(Jr);
                var Qr = Jr,
                  to = Zt,
                  eo = oe,
                  no = ae,
                  io = (function () {
                    function t(e, n) {
                      var i, r, o, a, s, l, c, d, u, p, h, f, b, m, g, v;
                      if (
                        (z(this, t),
                        (n = W()({ includeUI: !1, usageStatistics: !0 }, n)),
                        (this.mode = null),
                        (this.activeObjectId = null),
                        n.includeUI)
                      ) {
                        var _ = n.includeUI;
                        (_.usageStatistics = n.usageStatistics),
                          (this.ui = new Di(e, _, this.getActions())),
                          (n = this.ui.setUiDefaultSelectionStyle(n));
                      }
                      (this._invoker = new gn()),
                        (this._graphics = new Qr(
                          this.ui ? this.ui.getEditorArea() : e,
                          {
                            cssMaxWidth: n.cssMaxWidth,
                            cssMaxHeight: n.cssMaxHeight,
                          }
                        )),
                        (this._handlers = {
                          keydown: T()((i = this._onKeyDown)).call(i, this),
                          mousedown: T()((r = this._onMouseDown)).call(r, this),
                          objectActivated: T()(
                            (o = this._onObjectActivated)
                          ).call(o, this),
                          objectMoved: T()((a = this._onObjectMoved)).call(
                            a,
                            this
                          ),
                          objectScaled: T()((s = this._onObjectScaled)).call(
                            s,
                            this
                          ),
                          objectRotated: T()((l = this._onObjectRotated)).call(
                            l,
                            this
                          ),
                          objectAdded: T()((c = this._onObjectAdded)).call(
                            c,
                            this
                          ),
                          objectModified: T()(
                            (d = this._onObjectModified)
                          ).call(d, this),
                          createdPath: this._onCreatedPath,
                          addText: T()((u = this._onAddText)).call(u, this),
                          addObject: T()((p = this._onAddObject)).call(p, this),
                          textEditing: T()((h = this._onTextEditing)).call(
                            h,
                            this
                          ),
                          textChanged: T()((f = this._onTextChanged)).call(
                            f,
                            this
                          ),
                          iconCreateResize: T()(
                            (b = this._onIconCreateResize)
                          ).call(b, this),
                          iconCreateEnd: T()((m = this._onIconCreateEnd)).call(
                            m,
                            this
                          ),
                          selectionCleared: T()(
                            (g = this._selectionCleared)
                          ).call(g, this),
                          selectionCreated: T()(
                            (v = this._selectionCreated)
                          ).call(v, this),
                        }),
                        this._attachInvokerEvents(),
                        this._attachGraphicsEvents(),
                        this._attachDomEvents(),
                        this._setSelectionStyle(n.selectionStyle, {
                          applyCropSelectionStyle: n.applyCropSelectionStyle,
                          applyGroupSelectionStyle: n.applyGroupSelectionStyle,
                        }),
                        n.usageStatistics &&
                          (We ||
                            ((We = !0),
                            ot()("image-editor", "UA-129999381-1"))),
                        this.ui &&
                          (this.ui.initCanvas(),
                          this.setReAction(),
                          this._attachColorPickerInputBoxEvents()),
                        (R.fabric.enableGLFiltering = !1);
                    }
                    return (
                      k(t, [
                        {
                          key: "_attachColorPickerInputBoxEvents",
                          value: function () {
                            var t = this;
                            this.ui.on(pe, function () {
                              t.isColorPickerInputBoxEditing = !0;
                            }),
                              this.ui.on(he, function () {
                                t.isColorPickerInputBoxEditing = !1;
                              });
                          },
                        },
                        {
                          key: "_detachColorPickerInputBoxEvents",
                          value: function () {
                            this.ui.off(pe), this.ui.off(he);
                          },
                        },
                        {
                          key: "_setSelectionStyle",
                          value: function (t, e) {
                            var n = e.applyCropSelectionStyle,
                              i = e.applyGroupSelectionStyle;
                            t && this._graphics.setSelectionStyle(t),
                              n && this._graphics.setCropSelectionStyle(t),
                              i &&
                                this.on("selectionCreated", function (e) {
                                  "activeSelection" === e.type && e.set(t);
                                });
                          },
                        },
                        {
                          key: "_attachInvokerEvents",
                          value: function () {
                            var t,
                              e,
                              n = this,
                              i = re,
                              r = ie,
                              o = se,
                              a = le,
                              s = ce,
                              l = de,
                              c = ue;
                            if (
                              (this._invoker.on(
                                i,
                                T()((t = this.fire)).call(t, this, i)
                              ),
                              this._invoker.on(
                                r,
                                T()((e = this.fire)).call(e, this, r)
                              ),
                              this.ui)
                            ) {
                              var d = this._graphics.getCanvas();
                              this._invoker.on(o, function (t) {
                                return n.ui.fire(o, t);
                              }),
                                this._invoker.on(a, function (t) {
                                  return n.ui.fire(a, t);
                                }),
                                this._invoker.on(s, function (t) {
                                  return n.ui.fire(s, t);
                                }),
                                d.on(l, function () {
                                  return n.ui.fire(l);
                                }),
                                d.on(c, function () {
                                  return n.ui.fire(c);
                                });
                            }
                          },
                        },
                        {
                          key: "_attachGraphicsEvents",
                          value: function () {
                            var t;
                            this._graphics.on(
                              (x(
                                (t = {}),
                                "mousedown",
                                this._handlers.mousedown
                              ),
                              x(t, "objectMoved", this._handlers.objectMoved),
                              x(t, "objectScaled", this._handlers.objectScaled),
                              x(
                                t,
                                "objectRotated",
                                this._handlers.objectRotated
                              ),
                              x(
                                t,
                                "objectActivated",
                                this._handlers.objectActivated
                              ),
                              x(t, to, this._handlers.objectAdded),
                              x(
                                t,
                                "objectModified",
                                this._handlers.objectModified
                              ),
                              x(t, "addText", this._handlers.addText),
                              x(t, "addObject", this._handlers.addObject),
                              x(t, "textEditing", this._handlers.textEditing),
                              x(t, "textChanged", this._handlers.textChanged),
                              x(
                                t,
                                "iconCreateResize",
                                this._handlers.iconCreateResize
                              ),
                              x(
                                t,
                                "iconCreateEnd",
                                this._handlers.iconCreateEnd
                              ),
                              x(t, eo, this._handlers.selectionCleared),
                              x(t, no, this._handlers.selectionCreated),
                              t)
                            );
                          },
                        },
                        {
                          key: "_attachDomEvents",
                          value: function () {
                            document.addEventListener(
                              "keydown",
                              this._handlers.keydown
                            );
                          },
                        },
                        {
                          key: "_detachDomEvents",
                          value: function () {
                            document.removeEventListener(
                              "keydown",
                              this._handlers.keydown
                            );
                          },
                        },
                        {
                          key: "_onKeyDown",
                          value: function (t) {
                            var e = t.ctrlKey,
                              n = t.keyCode,
                              i = t.metaKey;
                            (e || i) &&
                              (67 === n
                                ? this._graphics.resetTargetObjectForCopyPaste()
                                : 86 === n
                                ? (this._graphics.pasteObject(),
                                  this.clearRedoStack())
                                : 90 === n
                                ? this.undo().catch(function () {})
                                : 89 === n &&
                                  this.redo().catch(function () {}));
                            var r = 8 === n || 46 === n,
                              o = this._graphics.isReadyRemoveObject();
                            !this.isColorPickerInputBoxEditing &&
                              o &&
                              r &&
                              (t.preventDefault(), this.removeActiveObject());
                          },
                        },
                        {
                          key: "removeActiveObject",
                          value: function () {
                            var t = this._graphics.getActiveObjectIdForRemove();
                            this.removeObject(t);
                          },
                        },
                        {
                          key: "_onMouseDown",
                          value: function (t, e) {
                            this.fire(ne, t, e);
                          },
                        },
                        {
                          key: "_pushAddObjectCommand",
                          value: function (t) {
                            var e = bn.create(Tt, this._graphics, t);
                            this._invoker.pushUndoStack(e);
                          },
                        },
                        {
                          key: "_pushModifyObjectCommand",
                          value: function (t) {
                            var e = this,
                              n = t.type,
                              i = Ur(t, function (t) {
                                return Xr(
                                  e._graphics.getObjectId(t),
                                  t,
                                  "activeSelection" === n
                                );
                              }),
                              r = bn.create(Yt, this._graphics, i);
                            r.execute(this._graphics, i),
                              this._invoker.pushUndoStack(r);
                          },
                        },
                        {
                          key: "_onObjectActivated",
                          value: function (t) {
                            this.fire(Xt, t);
                          },
                        },
                        {
                          key: "_onObjectMoved",
                          value: function (t) {
                            this.fire(Vt, t);
                          },
                        },
                        {
                          key: "_onObjectScaled",
                          value: function (t) {
                            this.fire(Gt, t);
                          },
                        },
                        {
                          key: "_onObjectRotated",
                          value: function (t) {
                            this.fire(Kt, t);
                          },
                        },
                        {
                          key: "getDrawingMode",
                          value: function () {
                            return this._graphics.getDrawingMode();
                          },
                        },
                        {
                          key: "clearObjects",
                          value: function () {
                            return this.execute(zt);
                          },
                        },
                        {
                          key: "deactivateAll",
                          value: function () {
                            this._graphics.deactivateAll(),
                              this._graphics.renderAll();
                          },
                        },
                        {
                          key: "discardSelection",
                          value: function () {
                            this._graphics.discardSelection();
                          },
                        },
                        {
                          key: "changeSelectableAll",
                          value: function (t) {
                            this._graphics.changeSelectableAll(t);
                          },
                        },
                        {
                          key: "_initHistory",
                          value: function () {
                            this.ui && this.ui.initHistory();
                          },
                        },
                        {
                          key: "_clearHistory",
                          value: function () {
                            this.ui && this.ui.clearHistory();
                          },
                        },
                        {
                          key: "execute",
                          value: function (t) {
                            for (
                              var e,
                                n,
                                i,
                                r = arguments.length,
                                o = new Array(r > 1 ? r - 1 : 0),
                                a = 1;
                              a < r;
                              a++
                            )
                              o[a - 1] = arguments[a];
                            var s = L()((e = [this._graphics])).call(e, o);
                            return (n = this._invoker).execute.apply(
                              n,
                              L()((i = [t])).call(i, w(s))
                            );
                          },
                        },
                        {
                          key: "executeSilent",
                          value: function (t) {
                            for (
                              var e,
                                n,
                                i,
                                r = arguments.length,
                                o = new Array(r > 1 ? r - 1 : 0),
                                a = 1;
                              a < r;
                              a++
                            )
                              o[a - 1] = arguments[a];
                            var s = L()((e = [this._graphics])).call(e, o);
                            return (n = this._invoker).executeSilent.apply(
                              n,
                              L()((i = [t])).call(i, w(s))
                            );
                          },
                        },
                        {
                          key: "undo",
                          value: function () {
                            for (
                              var t = this,
                                e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 1,
                                n = E().resolve(),
                                i = 0;
                              i < e;
                              i += 1
                            )
                              n = n.then(function () {
                                return t._invoker.undo();
                              });
                            return n;
                          },
                        },
                        {
                          key: "redo",
                          value: function () {
                            for (
                              var t = this,
                                e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 1,
                                n = E().resolve(),
                                i = 0;
                              i < e;
                              i += 1
                            )
                              n = n.then(function () {
                                return t._invoker.redo();
                              });
                            return n;
                          },
                        },
                        {
                          key: "zoom",
                          value: function (t) {
                            var e = t.x,
                              n = t.y,
                              i = t.zoomLevel;
                            this._graphics.zoom({ x: e, y: n }, i);
                          },
                        },
                        {
                          key: "resetZoom",
                          value: function () {
                            this._graphics.resetZoom();
                          },
                        },
                        {
                          key: "loadImageFromFile",
                          value: function (t, e) {
                            if (!t) return E().reject(xe);
                            var n = P().createObjectURL(t);
                            return (
                              (e = e || t.name),
                              this.loadImageFromURL(n, e).then(function (e) {
                                return P().revokeObjectURL(t), e;
                              })
                            );
                          },
                        },
                        {
                          key: "loadImageFromURL",
                          value: function (t, e) {
                            return e && t
                              ? this.execute(Ct, e, t)
                              : E().reject(xe);
                          },
                        },
                        {
                          key: "addImageObject",
                          value: function (t) {
                            return t ? this.execute(Bt, t) : E().reject(xe);
                          },
                        },
                        {
                          key: "startDrawingMode",
                          value: function (t, e) {
                            return this._graphics.startDrawingMode(t, e);
                          },
                        },
                        {
                          key: "stopDrawingMode",
                          value: function () {
                            this._graphics.stopDrawingMode();
                          },
                        },
                        {
                          key: "crop",
                          value: function (t) {
                            var e = this._graphics.getCroppedImageData(t);
                            return e
                              ? this.loadImageFromURL(e.url, e.imageName)
                              : E().reject(xe);
                          },
                        },
                        {
                          key: "getCropzoneRect",
                          value: function () {
                            return this._graphics.getCropzoneRect();
                          },
                        },
                        {
                          key: "setCropzoneRect",
                          value: function (t) {
                            this._graphics.setCropzoneRect(t);
                          },
                        },
                        {
                          key: "_flip",
                          value: function (t) {
                            return this.execute(kt, t);
                          },
                        },
                        {
                          key: "flipX",
                          value: function () {
                            return this._flip("flipX");
                          },
                        },
                        {
                          key: "flipY",
                          value: function () {
                            return this._flip("flipY");
                          },
                        },
                        {
                          key: "resetFlip",
                          value: function () {
                            return this._flip("reset");
                          },
                        },
                        {
                          key: "_rotate",
                          value: function (t, e, n) {
                            return n
                              ? this.executeSilent(St, t, e)
                              : this.execute(St, t, e);
                          },
                        },
                        {
                          key: "rotate",
                          value: function (t, e) {
                            return this._rotate("rotate", t, e);
                          },
                        },
                        {
                          key: "setAngle",
                          value: function (t, e) {
                            return this._rotate("setAngle", t, e);
                          },
                        },
                        {
                          key: "setBrush",
                          value: function (t) {
                            this._graphics.setBrush(t);
                          },
                        },
                        {
                          key: "setDrawingShape",
                          value: function (t, e) {
                            this._graphics.setDrawingShape(t, e);
                          },
                        },
                        {
                          key: "setDrawingIcon",
                          value: function (t, e) {
                            this._graphics.setIconStyle(t, e);
                          },
                        },
                        {
                          key: "addShape",
                          value: function (t, e) {
                            return (
                              (e = e || {}),
                              this._setPositions(e),
                              this.execute(Pt, t, e)
                            );
                          },
                        },
                        {
                          key: "changeShape",
                          value: function (t, e, n) {
                            return this[n ? "executeSilent" : "execute"](
                              Rt,
                              t,
                              e
                            );
                          },
                        },
                        {
                          key: "addText",
                          value: function (t, e) {
                            return (
                              (t = t || ""),
                              (e = e || {}),
                              this.execute(It, t, e)
                            );
                          },
                        },
                        {
                          key: "changeText",
                          value: function (t, e) {
                            return (e = e || ""), this.execute(Wt, t, e);
                          },
                        },
                        {
                          key: "changeTextStyle",
                          value: function (t, e, n) {
                            return this[n ? "executeSilent" : "execute"](
                              Nt,
                              t,
                              e
                            );
                          },
                        },
                        {
                          key: "_changeActivateMode",
                          value: function (t) {
                            "ICON" !== t &&
                              this.getDrawingMode() !== t &&
                              this.startDrawingMode(t);
                          },
                        },
                        {
                          key: "_onTextChanged",
                          value: function (t) {
                            this.fire(Qt, t);
                          },
                        },
                        {
                          key: "_onIconCreateResize",
                          value: function (t) {
                            this.fire("iconCreateResize", t);
                          },
                        },
                        {
                          key: "_onIconCreateEnd",
                          value: function (t) {
                            this.fire("iconCreateEnd", t);
                          },
                        },
                        {
                          key: "_onTextEditing",
                          value: function () {
                            this.fire(Jt);
                          },
                        },
                        {
                          key: "_onAddText",
                          value: function (t) {
                            this.fire(te, {
                              originPosition: t.originPosition,
                              clientPosition: t.clientPosition,
                            });
                          },
                        },
                        {
                          key: "_onAddObject",
                          value: function (t) {
                            var e = this._graphics.getObject(t.id);
                            this._invoker.fire(se, on(e.type)),
                              this._pushAddObjectCommand(e);
                          },
                        },
                        {
                          key: "_onObjectAdded",
                          value: function (t) {
                            this.fire(to, t), this.fire("addObjectAfter", t);
                          },
                        },
                        {
                          key: "_onObjectModified",
                          value: function (t) {
                            "cropzone" !== t.type &&
                              (this._invoker.fire(se, on(t.type)),
                              this._pushModifyObjectCommand(t));
                          },
                        },
                        {
                          key: "_selectionCleared",
                          value: function () {
                            this.fire(eo);
                          },
                        },
                        {
                          key: "_selectionCreated",
                          value: function (t) {
                            this.fire(no, t);
                          },
                        },
                        {
                          key: "registerIcons",
                          value: function (t) {
                            this._graphics.registerPaths(t);
                          },
                        },
                        {
                          key: "changeCursor",
                          value: function (t) {
                            this._graphics.changeCursor(t);
                          },
                        },
                        {
                          key: "addIcon",
                          value: function (t, e) {
                            return (
                              (e = e || {}),
                              this._setPositions(e),
                              this.execute(Et, t, e)
                            );
                          },
                        },
                        {
                          key: "changeIconColor",
                          value: function (t, e) {
                            return this.execute(jt, t, e);
                          },
                        },
                        {
                          key: "removeObject",
                          value: function (t) {
                            var e = this._graphics.getObject(t).type;
                            return this.execute(Dt, t, on(e));
                          },
                        },
                        {
                          key: "hasFilter",
                          value: function (t) {
                            return this._graphics.hasFilter(t);
                          },
                        },
                        {
                          key: "removeFilter",
                          value: function (t) {
                            return this.execute(qt, t);
                          },
                        },
                        {
                          key: "applyFilter",
                          value: function (t, e, n) {
                            return this[n ? "executeSilent" : "execute"](
                              Lt,
                              t,
                              e
                            );
                          },
                        },
                        {
                          key: "toDataURL",
                          value: function (t) {
                            return this._graphics.toDataURL(t);
                          },
                        },
                        {
                          key: "getImageName",
                          value: function () {
                            return this._graphics.getImageName();
                          },
                        },
                        {
                          key: "clearUndoStack",
                          value: function () {
                            this._invoker.clearUndoStack();
                          },
                        },
                        {
                          key: "clearRedoStack",
                          value: function () {
                            this._invoker.clearRedoStack();
                          },
                        },
                        {
                          key: "isEmptyUndoStack",
                          value: function () {
                            return this._invoker.isEmptyUndoStack();
                          },
                        },
                        {
                          key: "isEmptyRedoStack",
                          value: function () {
                            return this._invoker.isEmptyRedoStack();
                          },
                        },
                        {
                          key: "resizeCanvasDimension",
                          value: function (t) {
                            return t ? this.execute(Ft, t) : E().reject(xe);
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            var t = this;
                            this.stopDrawingMode(),
                              this._detachDomEvents(),
                              this._graphics.destroy(),
                              (this._graphics = null),
                              this.ui &&
                                (this._detachColorPickerInputBoxEvents(),
                                this.ui.destroy()),
                              $()(
                                this,
                                function (e, n) {
                                  t[n] = null;
                                },
                                this
                              );
                          },
                        },
                        {
                          key: "_setPositions",
                          value: function (t) {
                            var e = this._graphics.getCenter();
                            B()(t.left) && (t.left = e.left),
                              B()(t.top) && (t.top = e.top);
                          },
                        },
                        {
                          key: "setObjectProperties",
                          value: function (t, e) {
                            return this.execute($t, t, e);
                          },
                        },
                        {
                          key: "setObjectPropertiesQuietly",
                          value: function (t, e) {
                            this._graphics.setObjectProperties(t, e);
                          },
                        },
                        {
                          key: "getObjectProperties",
                          value: function (t, e) {
                            return this._graphics.getObject(t)
                              ? this._graphics.getObjectProperties(t, e)
                              : null;
                          },
                        },
                        {
                          key: "getCanvasSize",
                          value: function () {
                            return this._graphics.getCanvasSize();
                          },
                        },
                        {
                          key: "getObjectPosition",
                          value: function (t, e, n) {
                            return this._graphics.getObjectPosition(t, e, n);
                          },
                        },
                        {
                          key: "setObjectPosition",
                          value: function (t, e) {
                            return this.execute(Ht, t, e);
                          },
                        },
                        {
                          key: "resize",
                          value: function (t) {
                            return this.execute(Ut, t);
                          },
                        },
                      ]),
                      t
                    );
                  })();
                ji.mixin(io), Y().mixin(io);
                var ro = io,
                  oo = At.ICON,
                  ao = {
                    name: Et,
                    execute: function (t, e, n) {
                      var i = this;
                      return t
                        .getComponent(oo)
                        .add(e, n)
                        .then(function (e) {
                          return (i.undoData.object = t.getObject(e.id)), e;
                        });
                    },
                    undo: function (t) {
                      return t.remove(this.undoData.object), E().resolve();
                    },
                  };
                bn.register(ao);
                var so = {
                  name: Bt,
                  execute: function (t, e) {
                    var n = this;
                    return t.addImageObject(e).then(function (e) {
                      return (n.undoData.object = t.getObject(e.id)), e;
                    });
                  },
                  undo: function (t) {
                    return t.remove(this.undoData.object), E().resolve();
                  },
                };
                bn.register(so);
                var lo = {
                  name: Tt,
                  execute: function (t, e) {
                    return new (E())(function (n, i) {
                      t.contains(e)
                        ? i("The object is already added.")
                        : (t.add(e), n(e));
                    });
                  },
                  undo: function (t, e) {
                    return new (E())(function (n, i) {
                      t.contains(e) ? (t.remove(e), n(e)) : i(Ce);
                    });
                  },
                };
                bn.register(lo);
                var co = At.SHAPE,
                  uo = {
                    name: Pt,
                    execute: function (t, e, n) {
                      var i = this;
                      return t
                        .getComponent(co)
                        .add(e, n)
                        .then(function (e) {
                          var n = e.id;
                          return (i.undoData.object = t.getObject(n)), e;
                        });
                    },
                    undo: function (t) {
                      return t.remove(this.undoData.object), E().resolve();
                    },
                  };
                bn.register(uo);
                var po = At.TEXT,
                  ho = {
                    name: It,
                    execute: function (t, e, n) {
                      var i = this,
                        r = t.getComponent(po);
                      if (this.undoData.object) {
                        var o = this.undoData.object;
                        return new (E())(function (e, n) {
                          t.contains(o) ? n(ke) : (t.add(o), e(o));
                        });
                      }
                      return r.add(e, n).then(function (e) {
                        var n = e.id,
                          r = t.getObject(n);
                        return (
                          (i.undoData.object = r),
                          Yr(
                            Ur(r, function () {
                              return Xr(n, r, !1);
                            })
                          ),
                          e
                        );
                      });
                    },
                    undo: function (t) {
                      return t.remove(this.undoData.object), E().resolve();
                    },
                  };
                bn.register(ho);
                var fo = At.FILTER,
                  bo = null,
                  mo = {
                    name: Lt,
                    execute: function (t, e, n, i) {
                      var r = t.getComponent(fo);
                      if ("mask" === e) {
                        var o = t.getObject(n.maskObjId);
                        if (!o || !o.isType("image")) return E().reject(xe);
                        W()(n, { mask: o }), t.remove(n.mask);
                      }
                      if (!this.isRedo) {
                        var a = (function (t, e, n) {
                          var i = {};
                          return (
                            "mask" === t && (i.object = n.mask),
                            (i.options = e),
                            i
                          );
                        })(e, r.getOptions(e), n);
                        bo = this.setUndoData(a, bo, i);
                      }
                      return r.add(e, n);
                    },
                    undo: function (t, e) {
                      var n = t.getComponent(fo);
                      if ("mask" === e) {
                        var i = this.undoData.object;
                        return t.add(i), t.setActiveObject(i), n.remove(e);
                      }
                      return this.undoData.options
                        ? n.add(e, this.undoData.options)
                        : n.remove(e);
                    },
                  };
                bn.register(mo);
                var go = At.ICON,
                  vo = {
                    name: jt,
                    execute: function (t, e, n) {
                      var i = this;
                      return new (E())(function (r, o) {
                        var a = t.getComponent(go),
                          s = t.getObject(e);
                        s || o(Ce),
                          (i.undoData.object = s),
                          (i.undoData.color = a.getColor(s)),
                          a.setColor(n, s),
                          r();
                      });
                    },
                    undo: function (t) {
                      var e = t.getComponent(go),
                        n = this.undoData,
                        i = n.object,
                        r = n.color;
                      return e.setColor(r, i), E().resolve();
                    },
                  };
                bn.register(vo);
                var _o = At.SHAPE,
                  yo = null,
                  Mo = {
                    name: Rt,
                    execute: function (t, e, n, i) {
                      var r = t.getComponent(_o),
                        o = t.getObject(e);
                      if (!o) return E().reject(Ce);
                      if (!this.isRedo) {
                        var a = (function (t, e) {
                          var n = { object: e, options: {} };
                          return (
                            Wi()(t, function (t, i) {
                              n.options[i] = e[i];
                            }),
                            n
                          );
                        })(n, o);
                        yo = this.setUndoData(a, yo, i);
                      }
                      return r.change(o, n);
                    },
                    undo: function (t) {
                      var e = t.getComponent(_o),
                        n = this.undoData,
                        i = n.object,
                        r = n.options;
                      return e.change(i, r);
                    },
                  };
                bn.register(Mo);
                var Oo = At.TEXT,
                  wo = {
                    name: Wt,
                    execute: function (t, e, n) {
                      var i = t.getComponent(Oo),
                        r = t.getObject(e);
                      return r
                        ? ((this.undoData.object = r),
                          (this.undoData.text = i.getText(r)),
                          i.change(r, n))
                        : E().reject(Ce);
                    },
                    undo: function (t) {
                      var e = t.getComponent(Oo),
                        n = this.undoData,
                        i = n.object,
                        r = n.text;
                      return e.change(i, r);
                    },
                  };
                bn.register(wo);
                var Ao = At.TEXT,
                  xo = null,
                  zo = {
                    name: Nt,
                    execute: function (t, e, n, i) {
                      var r = t.getComponent(Ao),
                        o = t.getObject(e);
                      if (!o) return E().reject(Ce);
                      if (!this.isRedo) {
                        var a = (function (t, e) {
                          var n = { object: e, styles: {} };
                          return (
                            Wi()(t, function (t, i) {
                              var r = e[i];
                              n.styles[i] = r;
                            }),
                            n
                          );
                        })(n, o);
                        xo = this.setUndoData(a, xo, i);
                      }
                      return r.setStyle(o, n);
                    },
                    undo: function (t) {
                      var e = t.getComponent(Ao),
                        n = this.undoData,
                        i = n.object,
                        r = n.styles;
                      return e.setStyle(i, r);
                    },
                  };
                bn.register(zo);
                var Co = {
                  name: zt,
                  execute: function (t) {
                    var e = this;
                    return new (E())(function (n) {
                      (e.undoData.objects = t.removeAll()), n();
                    });
                  },
                  undo: function (t) {
                    return t.add(this.undoData.objects), E().resolve();
                  },
                };
                bn.register(Co);
                var ko = At.FLIP,
                  So = {
                    name: kt,
                    execute: function (t, e) {
                      var n = t.getComponent(ko);
                      return (
                        (this.undoData.setting = n.getCurrentSetting()), n[e]()
                      );
                    },
                    undo: function (t) {
                      return t.getComponent(ko).set(this.undoData.setting);
                    },
                  };
                bn.register(So);
                var To = At.IMAGE_LOADER,
                  Do = {
                    name: Ct,
                    execute: function (t, e, n) {
                      var i,
                        r = t.getComponent(To),
                        o = r.getCanvasImage(),
                        a = o ? o.width : 0,
                        s = o ? o.height : 0,
                        l = qi()((i = t.removeAll(!0))).call(i, function (t) {
                          return "cropzone" !== t.type;
                        });
                      return (
                        et()(l).call(l, function (t) {
                          t.evented = !0;
                        }),
                        (this.undoData = {
                          name: r.getImageName(),
                          image: o,
                          objects: l,
                        }),
                        r.load(e, n).then(function (t) {
                          return {
                            oldWidth: a,
                            oldHeight: s,
                            newWidth: t.width,
                            newHeight: t.height,
                          };
                        })
                      );
                    },
                    undo: function (t) {
                      var e = t.getComponent(To),
                        n = this.undoData,
                        i = n.objects,
                        r = n.name,
                        o = n.image;
                      return t.removeAll(!0), t.add(i), e.load(r, o);
                    },
                  };
                bn.register(Do);
                var Lo = At.FILTER,
                  qo = {
                    name: qt,
                    execute: function (t, e) {
                      var n = t.getComponent(Lo);
                      return (
                        (this.undoData.options = n.getOptions(e)), n.remove(e)
                      );
                    },
                    undo: function (t, e) {
                      var n = t.getComponent(Lo),
                        i = this.undoData.options;
                      return n.add(e, i);
                    },
                  };
                bn.register(qo);
                var Eo = {
                  name: Dt,
                  execute: function (t, e) {
                    var n = this;
                    return new (E())(function (i, r) {
                      (n.undoData.objects = t.removeObjectById(e)),
                        n.undoData.objects.length ? i() : r(Ce);
                    });
                  },
                  undo: function (t) {
                    return t.add(this.undoData.objects), E().resolve();
                  },
                };
                bn.register(Eo);
                var jo = {
                  name: Ft,
                  execute: function (t, e) {
                    var n = this;
                    return new (E())(function (i) {
                      (n.undoData.size = {
                        width: t.cssMaxWidth,
                        height: t.cssMaxHeight,
                      }),
                        t.setCssMaxDimension(e),
                        t.adjustCanvasDimension(),
                        i();
                    });
                  },
                  undo: function (t) {
                    return (
                      t.setCssMaxDimension(this.undoData.size),
                      t.adjustCanvasDimension(),
                      E().resolve()
                    );
                  },
                };
                bn.register(jo);
                var Po = At.ROTATION,
                  Ro = null,
                  Io = {
                    name: St,
                    execute: function (t, e, n, i) {
                      var r = t.getComponent(Po);
                      if (!this.isRedo) {
                        var o = (function (t) {
                          return { angle: t.getCurrentAngle() };
                        })(r);
                        Ro = this.setUndoData(o, Ro, i);
                      }
                      return r[e](n);
                    },
                    undo: function (t) {
                      var e = t.getComponent(Po),
                        n = K(this.args, 3),
                        i = n[1],
                        r = n[2];
                      return "setAngle" === i
                        ? e[i](this.undoData.angle)
                        : e.rotate(-r);
                    },
                  };
                bn.register(Io);
                var Wo = {
                  name: $t,
                  execute: function (t, e, n) {
                    var i = this,
                      r = t.getObject(e);
                    return r
                      ? ((this.undoData.props = {}),
                        Wi()(n, function (t, e) {
                          i.undoData.props[e] = r[e];
                        }),
                        t.setObjectProperties(e, n),
                        E().resolve())
                      : E().reject(Ce);
                  },
                  undo: function (t, e) {
                    var n = this.undoData.props;
                    return t.setObjectProperties(e, n), E().resolve();
                  },
                };
                bn.register(Wo);
                var No = {
                  name: Ht,
                  execute: function (t, e, n) {
                    return t.getObject(e)
                      ? ((this.undoData.objectId = e),
                        (this.undoData.props = t.getObjectProperties(e, [
                          "left",
                          "top",
                        ])),
                        t.setObjectPosition(e, n),
                        t.renderAll(),
                        E().resolve())
                      : E().reject(Ce);
                  },
                  undo: function (t) {
                    var e = this.undoData,
                      n = e.objectId,
                      i = e.props;
                    return (
                      t.setObjectProperties(n, i), t.renderAll(), E().resolve()
                    );
                  },
                };
                bn.register(No);
                var Bo = {
                  name: Yt,
                  execute: function (t, e) {
                    return (
                      this.isRedo
                        ? et()(e).call(e, function (e) {
                            t.setObjectProperties(e.id, e);
                          })
                        : (this.undoData = Hr),
                      E().resolve()
                    );
                  },
                  undo: function (t) {
                    var e;
                    return (
                      et()((e = this.undoData)).call(e, function (e) {
                        t.setObjectProperties(e.id, e);
                      }),
                      E().resolve()
                    );
                  },
                };
                bn.register(Bo);
                var Fo = At.RESIZE,
                  $o = {
                    name: Ut,
                    execute: function (t, e) {
                      var n = t.getComponent(Fo),
                        i = n.getOriginalDimensions();
                      return (
                        i || (i = n.getCurrentDimensions()),
                        (this.undoData.dimensions = i),
                        n.resize(e)
                      );
                    },
                    undo: function (t) {
                      return t
                        .getComponent(Fo)
                        .resize(this.undoData.dimensions);
                    },
                  };
                bn.register($o);
                var Ho = ro;
              })(),
              (o = o.default)
            );
          })();
        }),
        (t.exports = i(n(733)));
    }).call(this, n(192).Buffer);
  },
  function (module, exports, __webpack_require__) {
    var factory;
    (factory = function () {
      return (function (t) {
        var e = {};
        function n(i) {
          if (e[i]) return e[i].exports;
          var r = (e[i] = { exports: {}, id: i, loaded: !1 });
          return (
            t[i].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports
          );
        }
        return (n.m = t), (n.c = e), (n.p = ""), n(0);
      })([
        function (t, e, n) {
          "use strict";
          var i;
          try {
            i = n(1);
          } catch (t) {}
          var r = n(51),
            o = n(62),
            a = n(54);
          function s(t, e, n) {
            if (!(this instanceof s))
              throw new Error('JSONEditor constructor called without "new".');
            var i = a.getInternetExplorerVersion();
            if (-1 != i && i < 9)
              throw new Error(
                "Unsupported browser, IE9 or newer required. Please install the newest version of your browser."
              );
            if (
              e &&
              (e.error && ((e.onError = e.error), delete e.error),
              e.change && ((e.onChange = e.change), delete e.change),
              e.editable && ((e.onEditable = e.editable), delete e.editable),
              e)
            ) {
              var r = [
                "ace",
                "theme",
                "ajv",
                "schema",
                "onChange",
                "onEditable",
                "onError",
                "onModeChange",
                "escapeUnicode",
                "history",
                "search",
                "mode",
                "modes",
                "name",
                "indentation",
                "sortObjectKeys",
              ];
              Object.keys(e).forEach(function (t) {
                r.indexOf(t);
              });
            }
            arguments.length && this._create(t, e, n);
          }
          (s.modes = {}),
            (s.prototype.DEBOUNCE_INTERVAL = 150),
            (s.prototype._create = function (t, e, n) {
              (this.container = t),
                (this.options = e || {}),
                (this.json = n || {});
              var i = this.options.mode || "tree";
              this.setMode(i);
            }),
            (s.prototype.destroy = function () {}),
            (s.prototype.set = function (t) {
              this.json = t;
            }),
            (s.prototype.get = function () {
              return this.json;
            }),
            (s.prototype.setText = function (t) {
              this.json = a.parse(t);
            }),
            (s.prototype.getText = function () {
              return JSON.stringify(this.json);
            }),
            (s.prototype.setName = function (t) {
              this.options || (this.options = {}), (this.options.name = t);
            }),
            (s.prototype.getName = function () {
              return this.options && this.options.name;
            }),
            (s.prototype.setMode = function (t) {
              var e,
                n,
                i = this.container,
                r = a.extend({}, this.options),
                o = r.mode;
              r.mode = t;
              var l = s.modes[t];
              if (!l) throw new Error('Unknown mode "' + r.mode + '"');
              try {
                var c = "text" == l.data;
                if (
                  ((n = this.getName()),
                  (e = this[c ? "getText" : "get"]()),
                  this.destroy(),
                  a.clear(this),
                  a.extend(this, l.mixin),
                  this.create(i, r),
                  this.setName(n),
                  this[c ? "setText" : "set"](e),
                  "function" == typeof l.load)
                )
                  try {
                    l.load.call(this);
                  } catch (t) {}
                if ("function" == typeof r.onModeChange && t !== o)
                  try {
                    r.onModeChange(t, o);
                  } catch (t) {}
              } catch (t) {
                this._onError(t);
              }
            }),
            (s.prototype.getMode = function () {
              return this.options.mode;
            }),
            (s.prototype._onError = function (t) {
              if (!this.options || "function" != typeof this.options.onError)
                throw t;
              this.options.onError(t);
            }),
            (s.prototype.setSchema = function (t) {
              if (t) {
                var e;
                try {
                  e = this.options.ajv || i({ allErrors: !0, verbose: !0 });
                } catch (t) {}
                e &&
                  ((this.validateSchema = e.compile(t)),
                  (this.options.schema = t),
                  this.validate()),
                  this.refresh();
              } else
                (this.validateSchema = null),
                  (this.options.schema = null),
                  this.validate(),
                  this.refresh();
            }),
            (s.prototype.validate = function () {}),
            (s.prototype.refresh = function () {}),
            (s.registerMode = function (t) {
              var e, n;
              if (a.isArray(t))
                for (e = 0; e < t.length; e++) s.registerMode(t[e]);
              else {
                if (!("mode" in t)) throw new Error('Property "mode" missing');
                if (!("mixin" in t))
                  throw new Error('Property "mixin" missing');
                if (!("data" in t)) throw new Error('Property "data" missing');
                var i = t.mode;
                if (i in s.modes)
                  throw new Error('Mode "' + i + '" already registered');
                if ("function" != typeof t.mixin.create)
                  throw new Error(
                    'Required function "create" missing on mixin'
                  );
                var r = ["setMode", "registerMode", "modes"];
                for (e = 0; e < r.length; e++)
                  if ((n = r[e]) in t.mixin)
                    throw new Error(
                      'Reserved property "' + n + '" not allowed in mixin'
                    );
                s.modes[i] = t;
              }
            }),
            s.registerMode(r),
            s.registerMode(o),
            (t.exports = s);
        },
        function (t, e, n) {
          "use strict";
          var i = n(2),
            r = n(3),
            o = n(21),
            a = n(16),
            s = n(12),
            l = n(22),
            c = n(23),
            d = n(43),
            u = n(11),
            p = n(17),
            h = n(19);
          (t.exports = v),
            (v.prototype.compileAsync = p.compile),
            (v.prototype.addKeyword = n(49)),
            (v.ValidationError = n(20));
          var f = "http://json-schema.org/draft-04/schema",
            b = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i;
          function m(t) {
            return b.test(t);
          }
          var g = ["removeAdditional", "useDefaults", "coerceTypes"];
          function v(t) {
            if (!(this instanceof v)) return new v(t);
            var e = this;
            function _(t, n) {
              var i;
              if ("string" == typeof t) {
                if (!(i = w(t)))
                  throw new Error('no schema with key or ref "' + t + '"');
              } else {
                var r = z(t);
                i = r.validate || C(r);
              }
              var o = i(n);
              return i.async
                ? "*" == e._opts.async
                  ? h(o)
                  : o
                : ((e.errors = i.errors), o);
            }
            function y(t, n, i, o) {
              if (Array.isArray(t))
                for (var a = 0; a < t.length; a++) y(t[a], void 0, i, o);
              else
                T((n = r.normalizeId(n || t.id))),
                  ((e._schemas[n] = z(t, i, !0)).meta = o);
            }
            function M(t, e, n) {
              y(t, e, n, !0);
            }
            function O(t, n) {
              var i,
                r =
                  t.$schema ||
                  e._opts.defaultMeta ||
                  ((i = e._opts.meta),
                  (e._opts.defaultMeta =
                    "object" == typeof i
                      ? i.id || i
                      : e._opts.v5
                      ? d.META_SCHEMA_ID
                      : f),
                  e._opts.defaultMeta),
                o = e._formats.uri;
              e._formats.uri = "function" == typeof o ? m : b;
              var a = _(r, t);
              if (((e._formats.uri = o), !a && n)) {
                var s = "schema is invalid:" + k();
                if ("log" != e._opts.validateSchema) throw new Error(s);
              }
              return a;
            }
            function w(t) {
              var e = A(t);
              switch (typeof e) {
                case "object":
                  return e.validate || C(e);
                case "string":
                  return w(e);
              }
            }
            function A(t) {
              return (t = r.normalizeId(t)), e._schemas[t] || e._refs[t];
            }
            function x(t, n) {
              for (var i in t) {
                var r = t[i];
                r.meta ||
                  (n && !n.test(i)) ||
                  (e._cache.del(r.jsonStr), delete t[i]);
              }
            }
            function z(t, n, i) {
              if ("object" != typeof t)
                throw new Error("schema should be object");
              var o = s(t),
                l = e._cache.get(o);
              if (l) return l;
              i = i || !1 !== e._opts.addUsedSchema;
              var c = r.normalizeId(t.id);
              c && i && T(c), !1 === e._opts.validateSchema || n || O(t, !0);
              var d = r.ids.call(e, t),
                u = new a({ id: c, schema: t, localRefs: d, jsonStr: o });
              return (
                "#" != c[0] && i && (e._refs[c] = u), e._cache.put(o, u), u
              );
            }
            function C(t, n) {
              if (t.compiling)
                return (
                  (t.validate = a),
                  (a.schema = t.schema),
                  (a.errors = null),
                  (a.root = n || a),
                  !0 === t.schema.$async && (a.async = !0),
                  a
                );
              var r, o;
              (t.compiling = !0),
                t.meta && ((r = e._opts), (e._opts = e._metaOpts));
              try {
                o = i.call(e, t.schema, n, t.localRefs);
              } finally {
                (t.compiling = !1), t.meta && (e._opts = r);
              }
              return (
                (t.validate = o),
                (t.refs = o.refs),
                (t.refVal = o.refVal),
                (t.root = o.root),
                o
              );
              function a() {
                var e = t.validate,
                  n = e.apply(null, arguments);
                return (a.errors = e.errors), n;
              }
            }
            function k(t, n) {
              if (!(t = t || e.errors)) return "No errors";
              for (
                var i = void 0 === (n = n || {}).separator ? ", " : n.separator,
                  r = void 0 === n.dataVar ? "data" : n.dataVar,
                  o = "",
                  a = 0;
                a < t.length;
                a++
              ) {
                var s = t[a];
                s && (o += r + s.dataPath + " " + s.message + i);
              }
              return o.slice(0, -i.length);
            }
            function S(t, n) {
              "string" == typeof n && (n = new RegExp(n)), (e._formats[t] = n);
            }
            function T(t) {
              if (e._schemas[t] || e._refs[t])
                throw new Error(
                  'schema with key or id "' + t + '" already exists'
                );
            }
            (t = this._opts = u.copy(t) || {}),
              (this._schemas = {}),
              (this._refs = {}),
              (this._formats = l(t.format)),
              (this._cache = t.cache || new o()),
              (this._loadingSchemas = {}),
              (this.RULES = c()),
              (this.validate = _),
              (this.compile = function (t) {
                var e = z(t);
                return e.validate || C(e);
              }),
              (this.addSchema = y),
              (this.addMetaSchema = M),
              (this.validateSchema = O),
              (this.getSchema = w),
              (this.removeSchema = function (t) {
                switch (typeof t) {
                  case "undefined":
                    return x(e._schemas), x(e._refs), void e._cache.clear();
                  case "string":
                    var n = A(t);
                    return (
                      n && e._cache.del(n.jsonStr),
                      delete e._schemas[t],
                      void delete e._refs[t]
                    );
                  case "object":
                    if (t instanceof RegExp)
                      return x(e._schemas, t), void x(e._refs, t);
                    var i = s(t);
                    e._cache.del(i);
                    var o = t.id;
                    o &&
                      ((o = r.normalizeId(o)),
                      delete e._schemas[o],
                      delete e._refs[o]);
                }
              }),
              (this.addFormat = S),
              (this.errorsText = k),
              (this._addSchema = z),
              (this._compile = C),
              (t.loopRequired = t.loopRequired || 1 / 0),
              (t.async || t.transpile) && p.setup(t),
              !0 === t.beautify && (t.beautify = { indent_size: 2 }),
              "property" == t.errorDataPath && (t._errorDataPathProperty = !0),
              (this._metaOpts = (function () {
                for (var t = u.copy(e._opts), n = 0; n < g.length; n++)
                  delete t[g[n]];
                return t;
              })()),
              (function () {
                !1 !== e._opts.meta &&
                  (M(n(50), f, !0),
                  (e._refs["http://json-schema.org/schema"] = f));
                var t = e._opts.schemas;
                if (t)
                  if (Array.isArray(t)) y(t);
                  else for (var i in t) y(t[i], i);
              })(),
              t.formats &&
                (function () {
                  for (var t in e._opts.formats) S(t, e._opts.formats[t]);
                })(),
              t.v5 && d.enable(this),
              "object" == typeof t.meta && M(t.meta);
          }
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          var resolve = __webpack_require__(3),
            util = __webpack_require__(11),
            stableStringify = __webpack_require__(12),
            async = __webpack_require__(17),
            beautify = (function () {
              try {
                return __webpack_require__(
                  !(function () {
                    var t = new Error('Cannot find module "js-beautify"');
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  })()
                ).js_beautify;
              } catch (t) {}
            })(),
            validateGenerator = __webpack_require__(18);
          function compile(schema, root, localRefs, baseId) {
            var self = this,
              opts = this._opts,
              refVal = [void 0],
              refs = {},
              patterns = [],
              patternsHash = {},
              defaults = [],
              defaultsHash = {},
              customRules = [];
            root = root || { schema: schema, refVal: refVal, refs: refs };
            var formats = this._formats,
              RULES = this.RULES;
            return localCompile(schema, root, localRefs, baseId);
            function localCompile(_schema, _root, localRefs, baseId) {
              var isRoot = !_root || (_root && _root.schema == _schema);
              if (_root.schema != root.schema)
                return compile.call(self, _schema, _root, localRefs, baseId);
              var $async = !0 === _schema.$async;
              $async && !opts.transpile && async.setup(opts);
              var sourceCode = validateGenerator({
                isTop: !0,
                schema: _schema,
                isRoot: isRoot,
                baseId: baseId,
                root: _root,
                schemaPath: "",
                errSchemaPath: "#",
                errorPath: '""',
                RULES: RULES,
                validate: validateGenerator,
                util: util,
                resolve: resolve,
                resolveRef: resolveRef,
                usePattern: usePattern,
                useDefault: useDefault,
                useCustomRule: useCustomRule,
                opts: opts,
                formats: formats,
                self: self,
              });
              (sourceCode =
                vars(refVal, refValCode) +
                vars(patterns, patternCode) +
                vars(defaults, defaultCode) +
                vars(customRules, customRuleCode) +
                sourceCode),
                opts.beautify &&
                  beautify &&
                  (sourceCode = beautify(sourceCode, opts.beautify));
              var validate,
                validateCode,
                transpile = opts._transpileFunc;
              try {
                (validateCode =
                  $async && transpile ? transpile(sourceCode) : sourceCode),
                  eval(validateCode),
                  (refVal[0] = validate);
              } catch (t) {
                throw t;
              }
              return (
                (validate.schema = _schema),
                (validate.errors = null),
                (validate.refs = refs),
                (validate.refVal = refVal),
                (validate.root = isRoot ? validate : _root),
                $async && (validate.async = !0),
                (validate.sourceCode = sourceCode),
                validate
              );
            }
            function resolveRef(t, e, n) {
              e = resolve.url(t, e);
              var i,
                r,
                o = refs[e];
              if (void 0 !== o)
                return resolvedRef((i = refVal[o]), (r = "refVal[" + o + "]"));
              if (!n) {
                var a = root.refs[e];
                if (void 0 !== a)
                  return resolvedRef(
                    (i = root.refVal[a]),
                    (r = addLocalRef(e, i))
                  );
              }
              r = addLocalRef(e);
              var s = resolve.call(self, localCompile, root, e);
              if (!s) {
                var l = localRefs && localRefs[e];
                l &&
                  (s = resolve.inlineRef(l, opts.inlineRefs)
                    ? l
                    : compile.call(self, l, root, localRefs, t));
              }
              return s ? (replaceLocalRef(e, s), resolvedRef(s, r)) : void 0;
            }
            function addLocalRef(t, e) {
              var n = refVal.length;
              return (refVal[n] = e), (refs[t] = n), "refVal" + n;
            }
            function replaceLocalRef(t, e) {
              var n = refs[t];
              refVal[n] = e;
            }
            function resolvedRef(t, e) {
              return "object" == typeof t
                ? { code: e, schema: t, inline: !0 }
                : { code: e, async: t && t.async };
            }
            function usePattern(t) {
              var e = patternsHash[t];
              return (
                void 0 === e &&
                  ((e = patternsHash[t] = patterns.length), (patterns[e] = t)),
                "pattern" + e
              );
            }
            function useDefault(t) {
              switch (typeof t) {
                case "boolean":
                case "number":
                  return "" + t;
                case "string":
                  return util.toQuotedString(t);
                case "object":
                  if (null === t) return "null";
                  var e = stableStringify(t),
                    n = defaultsHash[e];
                  return (
                    void 0 === n &&
                      ((n = defaultsHash[e] = defaults.length),
                      (defaults[n] = t)),
                    "default" + n
                  );
              }
            }
            function useCustomRule(t, e, n, i) {
              var r,
                o = t.definition.compile,
                a = t.definition.inline,
                s = t.definition.macro;
              o
                ? (r = o.call(self, e, n))
                : s
                ? ((r = s.call(self, e, n)),
                  !1 !== opts.validateSchema && self.validateSchema(r, !0))
                : (r = a
                    ? a.call(self, i, t.keyword, e, n)
                    : t.definition.validate);
              var l = customRules.length;
              return (
                (customRules[l] = r), { code: "customRule" + l, validate: r }
              );
            }
          }
          function patternCode(t, e) {
            return (
              "var pattern" +
              t +
              " = new RegExp(" +
              util.toQuotedString(e[t]) +
              ");"
            );
          }
          function defaultCode(t) {
            return "var default" + t + " = defaults[" + t + "];";
          }
          function refValCode(t, e) {
            return e[t] ? "var refVal" + t + " = refVal[" + t + "];" : "";
          }
          function customRuleCode(t) {
            return "var customRule" + t + " = customRules[" + t + "];";
          }
          function vars(t, e) {
            if (!t.length) return "";
            for (var n = "", i = 0; i < t.length; i++) n += e(i, t);
            return n;
          }
          module.exports = compile;
          var co = __webpack_require__(19),
            ucs2length = util.ucs2length,
            equal = __webpack_require__(10),
            ValidationError = __webpack_require__(20);
        },
        function (t, e, n) {
          "use strict";
          var i = n(4),
            r = n(10),
            o = n(11),
            a = n(16);
          function s(t, e, n) {
            var i = this._refs[n];
            if ("string" == typeof i) {
              if (!this._refs[i]) return s.call(this, t, e, i);
              i = this._refs[i];
            }
            if ((i = i || this._schemas[n]) instanceof a)
              return h(i.schema, this._opts.inlineRefs)
                ? i.schema
                : i.validate || this._compile(i);
            var r,
              o,
              c,
              d = l.call(this, e, n);
            return (
              d && ((r = d.schema), (e = d.root), (c = d.baseId)),
              r instanceof a
                ? (o = r.validate || t.call(this, r.schema, e, void 0, c))
                : r &&
                  (o = h(r, this._opts.inlineRefs)
                    ? r
                    : t.call(this, r, e, void 0, c)),
              o
            );
          }
          function l(t, e) {
            var n = i.parse(e, !1, !0),
              r = b(n),
              o = f(t.schema.id);
            if (r !== o) {
              var s = g(r),
                l = this._refs[s];
              if ("string" == typeof l) return c.call(this, t, l, n);
              if (l instanceof a) l.validate || this._compile(l), (t = l);
              else if ((l = this._schemas[s]) instanceof a) {
                if ((l.validate || this._compile(l), s == g(e)))
                  return { schema: l, root: t, baseId: o };
                t = l;
              }
              if (!t.schema) return;
              o = f(t.schema.id);
            }
            return u.call(this, n, o, t.schema, t);
          }
          function c(t, e, n) {
            var i = l.call(this, t, e);
            if (i) {
              var r = i.schema,
                o = i.baseId;
              return (
                (t = i.root), r.id && (o = v(o, r.id)), u.call(this, n, o, r, t)
              );
            }
          }
          (t.exports = s),
            (s.normalizeId = g),
            (s.fullPath = f),
            (s.url = v),
            (s.ids = function (t) {
              var e = g(t.id),
                n = {};
              return (
                function t(e, a, s) {
                  if (Array.isArray(e))
                    for (var l = 0; l < e.length; l++)
                      t.call(this, e[l], a + "/" + l, s);
                  else if (e && "object" == typeof e) {
                    if ("string" == typeof e.id) {
                      var c = (s = s ? i.resolve(s, e.id) : e.id);
                      c = g(c);
                      var d = this._refs[c];
                      if (
                        ("string" == typeof d && (d = this._refs[d]),
                        d && d.schema)
                      ) {
                        if (!r(e, d.schema))
                          throw new Error(
                            'id "' + c + '" resolves to more than one schema'
                          );
                      } else if (c != g(a))
                        if ("#" == c[0]) {
                          if (n[c] && !r(e, n[c]))
                            throw new Error(
                              'id "' + c + '" resolves to more than one schema'
                            );
                          n[c] = e;
                        } else this._refs[c] = a;
                    }
                    for (var u in e)
                      t.call(this, e[u], a + "/" + o.escapeFragment(u), s);
                  }
                }.call(this, t, f(e, !1), e),
                n
              );
            }),
            (s.inlineRef = h);
          var d = o.toHash([
            "properties",
            "patternProperties",
            "enum",
            "dependencies",
            "definitions",
          ]);
          function u(t, e, n, i) {
            if (((t.hash = t.hash || ""), "#/" == t.hash.slice(0, 2))) {
              for (var r = t.hash.split("/"), a = 1; a < r.length; a++) {
                var s = r[a];
                if (s) {
                  if (!(n = n[(s = o.unescapeFragment(s))])) break;
                  if ((n.id && !d[s] && (e = v(e, n.id)), n.$ref)) {
                    var c = v(e, n.$ref),
                      u = l.call(this, i, c);
                    u && ((n = u.schema), (i = u.root), (e = u.baseId));
                  }
                }
              }
              return n && n != i.schema
                ? { schema: n, root: i, baseId: e }
                : void 0;
            }
          }
          var p = o.toHash([
            "type",
            "format",
            "pattern",
            "maxLength",
            "minLength",
            "maxProperties",
            "minProperties",
            "maxItems",
            "minItems",
            "maximum",
            "minimum",
            "uniqueItems",
            "multipleOf",
            "required",
            "enum",
          ]);
          function h(t, e) {
            return (
              !1 !== e &&
              (void 0 === e || !0 === e
                ? (function t(e) {
                    var n;
                    if (Array.isArray(e)) {
                      for (var i = 0; i < e.length; i++)
                        if ("object" == typeof (n = e[i]) && !t(n)) return !1;
                    } else
                      for (var r in e) {
                        if ("$ref" == r) return !1;
                        if ("object" == typeof (n = e[r]) && !t(n)) return !1;
                      }
                    return !0;
                  })(t)
                : e
                ? (function t(e) {
                    var n,
                      i = 0;
                    if (Array.isArray(e)) {
                      for (var r = 0; r < e.length; r++)
                        if (
                          ("object" == typeof (n = e[r]) && (i += t(n)),
                          i == 1 / 0)
                        )
                          return 1 / 0;
                    } else
                      for (var o in e) {
                        if ("$ref" == o) return 1 / 0;
                        if (p[o]) i++;
                        else if (
                          ("object" == typeof (n = e[o]) && (i += t(n) + 1),
                          i == 1 / 0)
                        )
                          return 1 / 0;
                      }
                    return i;
                  })(t) <= e
                : void 0)
            );
          }
          function f(t, e) {
            return !1 !== e && (t = g(t)), b(i.parse(t, !1, !0));
          }
          function b(t) {
            return (
              (t.protocol || "") +
              (t.protocol ? "//" : "") +
              (t.host || "") +
              (t.path || "") +
              "#"
            );
          }
          var m = /#\/?$/;
          function g(t) {
            return t ? t.replace(m, "") : "";
          }
          function v(t, e) {
            return (e = g(e)), i.resolve(t, e);
          }
        },
        function (t, e, n) {
          var i = n(5);
          function r() {
            (this.protocol = null),
              (this.slashes = null),
              (this.auth = null),
              (this.host = null),
              (this.port = null),
              (this.hostname = null),
              (this.hash = null),
              (this.search = null),
              (this.query = null),
              (this.pathname = null),
              (this.path = null),
              (this.href = null);
          }
          (e.parse = g),
            (e.resolve = function (t, e) {
              return g(t, !1, !0).resolve(e);
            }),
            (e.resolveObject = function (t, e) {
              return t ? g(t, !1, !0).resolveObject(e) : e;
            }),
            (e.format = function (t) {
              return (
                v(t) && (t = g(t)),
                t instanceof r ? t.format() : r.prototype.format.call(t)
              );
            }),
            (e.Url = r);
          var o = /^([a-z0-9.+-]+:)/i,
            a = /:[0-9]*$/,
            s = ["{", "}", "|", "\\", "^", "`"].concat([
              "<",
              ">",
              '"',
              "`",
              " ",
              "\r",
              "\n",
              "\t",
            ]),
            l = ["'"].concat(s),
            c = ["%", "/", "?", ";", "#"].concat(l),
            d = ["/", "?", "#"],
            u = /^[a-z0-9A-Z_-]{0,63}$/,
            p = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            h = { javascript: !0, "javascript:": !0 },
            f = { javascript: !0, "javascript:": !0 },
            b = {
              http: !0,
              https: !0,
              ftp: !0,
              gopher: !0,
              file: !0,
              "http:": !0,
              "https:": !0,
              "ftp:": !0,
              "gopher:": !0,
              "file:": !0,
            },
            m = n(7);
          function g(t, e, n) {
            if (t && _(t) && t instanceof r) return t;
            var i = new r();
            return i.parse(t, e, n), i;
          }
          function v(t) {
            return "string" == typeof t;
          }
          function _(t) {
            return "object" == typeof t && null !== t;
          }
          function y(t) {
            return null === t;
          }
          (r.prototype.parse = function (t, e, n) {
            if (!v(t))
              throw new TypeError(
                "Parameter 'url' must be a string, not " + typeof t
              );
            var r = t;
            r = r.trim();
            var a = o.exec(r);
            if (a) {
              var s = (a = a[0]).toLowerCase();
              (this.protocol = s), (r = r.substr(a.length));
            }
            if (n || a || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
              var g = "//" === r.substr(0, 2);
              !g || (a && f[a]) || ((r = r.substr(2)), (this.slashes = !0));
            }
            if (!f[a] && (g || (a && !b[a]))) {
              for (var _, y, M = -1, O = 0; O < d.length; O++)
                -1 !== (w = r.indexOf(d[O])) && (-1 === M || w < M) && (M = w);
              for (
                -1 !==
                  (y = -1 === M ? r.lastIndexOf("@") : r.lastIndexOf("@", M)) &&
                  ((_ = r.slice(0, y)),
                  (r = r.slice(y + 1)),
                  (this.auth = decodeURIComponent(_))),
                  M = -1,
                  O = 0;
                O < c.length;
                O++
              ) {
                var w;
                -1 !== (w = r.indexOf(c[O])) && (-1 === M || w < M) && (M = w);
              }
              -1 === M && (M = r.length),
                (this.host = r.slice(0, M)),
                (r = r.slice(M)),
                this.parseHost(),
                (this.hostname = this.hostname || "");
              var A =
                "[" === this.hostname[0] &&
                "]" === this.hostname[this.hostname.length - 1];
              if (!A)
                for (
                  var x = this.hostname.split(/\./), z = ((O = 0), x.length);
                  O < z;
                  O++
                ) {
                  var C = x[O];
                  if (C && !C.match(u)) {
                    for (var k = "", S = 0, T = C.length; S < T; S++)
                      C.charCodeAt(S) > 127 ? (k += "x") : (k += C[S]);
                    if (!k.match(u)) {
                      var D = x.slice(0, O),
                        L = x.slice(O + 1),
                        q = C.match(p);
                      q && (D.push(q[1]), L.unshift(q[2])),
                        L.length && (r = "/" + L.join(".") + r),
                        (this.hostname = D.join("."));
                      break;
                    }
                  }
                }
              if (
                (this.hostname.length > 255
                  ? (this.hostname = "")
                  : (this.hostname = this.hostname.toLowerCase()),
                !A)
              ) {
                var E = this.hostname.split("."),
                  j = [];
                for (O = 0; O < E.length; ++O) {
                  var P = E[O];
                  j.push(P.match(/[^A-Za-z0-9_-]/) ? "xn--" + i.encode(P) : P);
                }
                this.hostname = j.join(".");
              }
              var R = this.port ? ":" + this.port : "",
                I = this.hostname || "";
              (this.host = I + R),
                (this.href += this.host),
                A &&
                  ((this.hostname = this.hostname.substr(
                    1,
                    this.hostname.length - 2
                  )),
                  "/" !== r[0] && (r = "/" + r));
            }
            if (!h[s])
              for (O = 0, z = l.length; O < z; O++) {
                var W = l[O],
                  N = encodeURIComponent(W);
                N === W && (N = escape(W)), (r = r.split(W).join(N));
              }
            var B = r.indexOf("#");
            -1 !== B && ((this.hash = r.substr(B)), (r = r.slice(0, B)));
            var F = r.indexOf("?");
            return (
              -1 !== F
                ? ((this.search = r.substr(F)),
                  (this.query = r.substr(F + 1)),
                  e && (this.query = m.parse(this.query)),
                  (r = r.slice(0, F)))
                : e && ((this.search = ""), (this.query = {})),
              r && (this.pathname = r),
              b[s] && this.hostname && !this.pathname && (this.pathname = "/"),
              (this.pathname || this.search) &&
                ((R = this.pathname || ""),
                (P = this.search || ""),
                (this.path = R + P)),
              (this.href = this.format()),
              this
            );
          }),
            (r.prototype.format = function () {
              var t = this.auth || "";
              t &&
                ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
                (t += "@"));
              var e = this.protocol || "",
                n = this.pathname || "",
                i = this.hash || "",
                r = !1,
                o = "";
              this.host
                ? (r = t + this.host)
                : this.hostname &&
                  ((r =
                    t +
                    (-1 === this.hostname.indexOf(":")
                      ? this.hostname
                      : "[" + this.hostname + "]")),
                  this.port && (r += ":" + this.port)),
                this.query &&
                  _(this.query) &&
                  Object.keys(this.query).length &&
                  (o = m.stringify(this.query));
              var a = this.search || (o && "?" + o) || "";
              return (
                e && ":" !== e.substr(-1) && (e += ":"),
                this.slashes || ((!e || b[e]) && !1 !== r)
                  ? ((r = "//" + (r || "")),
                    n && "/" !== n.charAt(0) && (n = "/" + n))
                  : r || (r = ""),
                i && "#" !== i.charAt(0) && (i = "#" + i),
                a && "?" !== a.charAt(0) && (a = "?" + a),
                e +
                  r +
                  (n = n.replace(/[?#]/g, function (t) {
                    return encodeURIComponent(t);
                  })) +
                  (a = a.replace("#", "%23")) +
                  i
              );
            }),
            (r.prototype.resolve = function (t) {
              return this.resolveObject(g(t, !1, !0)).format();
            }),
            (r.prototype.resolveObject = function (t) {
              if (v(t)) {
                var e = new r();
                e.parse(t, !1, !0), (t = e);
              }
              var n = new r();
              if (
                (Object.keys(this).forEach(function (t) {
                  n[t] = this[t];
                }, this),
                (n.hash = t.hash),
                "" === t.href)
              )
                return (n.href = n.format()), n;
              if (t.slashes && !t.protocol)
                return (
                  Object.keys(t).forEach(function (e) {
                    "protocol" !== e && (n[e] = t[e]);
                  }),
                  b[n.protocol] &&
                    n.hostname &&
                    !n.pathname &&
                    (n.path = n.pathname = "/"),
                  (n.href = n.format()),
                  n
                );
              if (t.protocol && t.protocol !== n.protocol) {
                if (!b[t.protocol])
                  return (
                    Object.keys(t).forEach(function (e) {
                      n[e] = t[e];
                    }),
                    (n.href = n.format()),
                    n
                  );
                if (((n.protocol = t.protocol), t.host || f[t.protocol]))
                  n.pathname = t.pathname;
                else {
                  for (
                    var i = (t.pathname || "").split("/");
                    i.length && !(t.host = i.shift());

                  );
                  t.host || (t.host = ""),
                    t.hostname || (t.hostname = ""),
                    "" !== i[0] && i.unshift(""),
                    i.length < 2 && i.unshift(""),
                    (n.pathname = i.join("/"));
                }
                if (
                  ((n.search = t.search),
                  (n.query = t.query),
                  (n.host = t.host || ""),
                  (n.auth = t.auth),
                  (n.hostname = t.hostname || t.host),
                  (n.port = t.port),
                  n.pathname || n.search)
                ) {
                  var o = n.pathname || "",
                    a = n.search || "";
                  n.path = o + a;
                }
                return (
                  (n.slashes = n.slashes || t.slashes), (n.href = n.format()), n
                );
              }
              var s = n.pathname && "/" === n.pathname.charAt(0),
                l = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
                c = l || s || (n.host && t.pathname),
                d = c,
                u = (n.pathname && n.pathname.split("/")) || [],
                p =
                  ((i = (t.pathname && t.pathname.split("/")) || []),
                  n.protocol && !b[n.protocol]);
              if (
                (p &&
                  ((n.hostname = ""),
                  (n.port = null),
                  n.host && ("" === u[0] ? (u[0] = n.host) : u.unshift(n.host)),
                  (n.host = ""),
                  t.protocol &&
                    ((t.hostname = null),
                    (t.port = null),
                    t.host &&
                      ("" === i[0] ? (i[0] = t.host) : i.unshift(t.host)),
                    (t.host = null)),
                  (c = c && ("" === i[0] || "" === u[0]))),
                l)
              )
                (n.host = t.host || "" === t.host ? t.host : n.host),
                  (n.hostname =
                    t.hostname || "" === t.hostname ? t.hostname : n.hostname),
                  (n.search = t.search),
                  (n.query = t.query),
                  (u = i);
              else if (i.length)
                u || (u = []),
                  u.pop(),
                  (u = u.concat(i)),
                  (n.search = t.search),
                  (n.query = t.query);
              else if (null != t.search)
                return (
                  p &&
                    ((n.hostname = n.host = u.shift()),
                    (M =
                      !!(n.host && n.host.indexOf("@") > 0) &&
                      n.host.split("@")) &&
                      ((n.auth = M.shift()),
                      (n.host = n.hostname = M.shift()))),
                  (n.search = t.search),
                  (n.query = t.query),
                  (y(n.pathname) && y(n.search)) ||
                    (n.path =
                      (n.pathname ? n.pathname : "") +
                      (n.search ? n.search : "")),
                  (n.href = n.format()),
                  n
                );
              if (!u.length)
                return (
                  (n.pathname = null),
                  n.search ? (n.path = "/" + n.search) : (n.path = null),
                  (n.href = n.format()),
                  n
                );
              for (
                var h = u.slice(-1)[0],
                  m =
                    ((n.host || t.host) && ("." === h || ".." === h)) ||
                    "" === h,
                  g = 0,
                  _ = u.length;
                _ >= 0;
                _--
              )
                "." == (h = u[_])
                  ? u.splice(_, 1)
                  : ".." === h
                  ? (u.splice(_, 1), g++)
                  : g && (u.splice(_, 1), g--);
              if (!c && !d) for (; g--; g) u.unshift("..");
              !c ||
                "" === u[0] ||
                (u[0] && "/" === u[0].charAt(0)) ||
                u.unshift(""),
                m && "/" !== u.join("/").substr(-1) && u.push("");
              var M,
                O = "" === u[0] || (u[0] && "/" === u[0].charAt(0));
              return (
                p &&
                  ((n.hostname = n.host = O ? "" : u.length ? u.shift() : ""),
                  (M =
                    !!(n.host && n.host.indexOf("@") > 0) &&
                    n.host.split("@")) &&
                    ((n.auth = M.shift()), (n.host = n.hostname = M.shift()))),
                (c = c || (n.host && u.length)) && !O && u.unshift(""),
                u.length
                  ? (n.pathname = u.join("/"))
                  : ((n.pathname = null), (n.path = null)),
                (y(n.pathname) && y(n.search)) ||
                  (n.path =
                    (n.pathname ? n.pathname : "") +
                    (n.search ? n.search : "")),
                (n.auth = t.auth || n.auth),
                (n.slashes = n.slashes || t.slashes),
                (n.href = n.format()),
                n
              );
            }),
            (r.prototype.parseHost = function () {
              var t = this.host,
                e = a.exec(t);
              e &&
                (":" !== (e = e[0]) && (this.port = e.substr(1)),
                (t = t.substr(0, t.length - e.length))),
                t && (this.hostname = t);
            });
        },
        function (t, e, n) {
          var i;
          (function (t, r) {
            !(function (o) {
              "object" == typeof e && e && e.nodeType,
                "object" == typeof t && t && t.nodeType;
              var a = "object" == typeof r && r;
              a.global !== a && a.window !== a && a.self;
              var s,
                l = 2147483647,
                c = /^xn--/,
                d = /[^\x20-\x7E]/,
                u = /[\x2E\u3002\uFF0E\uFF61]/g,
                p = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input",
                },
                h = Math.floor,
                f = String.fromCharCode;
              function b(t) {
                throw RangeError(p[t]);
              }
              function m(t, e) {
                for (var n = t.length, i = []; n--; ) i[n] = e(t[n]);
                return i;
              }
              function g(t, e) {
                var n = t.split("@"),
                  i = "";
                return (
                  n.length > 1 && ((i = n[0] + "@"), (t = n[1])),
                  i + m((t = t.replace(u, ".")).split("."), e).join(".")
                );
              }
              function v(t) {
                for (var e, n, i = [], r = 0, o = t.length; r < o; )
                  (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < o
                    ? 56320 == (64512 & (n = t.charCodeAt(r++)))
                      ? i.push(((1023 & e) << 10) + (1023 & n) + 65536)
                      : (i.push(e), r--)
                    : i.push(e);
                return i;
              }
              function _(t) {
                return m(t, function (t) {
                  var e = "";
                  return (
                    t > 65535 &&
                      ((e += f((((t -= 65536) >>> 10) & 1023) | 55296)),
                      (t = 56320 | (1023 & t))),
                    (e += f(t))
                  );
                }).join("");
              }
              function y(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
              }
              function M(t, e, n) {
                var i = 0;
                for (
                  t = n ? h(t / 700) : t >> 1, t += h(t / e);
                  t > 455;
                  i += 36
                )
                  t = h(t / 35);
                return h(i + (36 * t) / (t + 38));
              }
              function O(t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  c,
                  d,
                  u,
                  p,
                  f = [],
                  m = t.length,
                  g = 0,
                  v = 128,
                  y = 72;
                for ((n = t.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i)
                  t.charCodeAt(i) >= 128 && b("not-basic"),
                    f.push(t.charCodeAt(i));
                for (r = n > 0 ? n + 1 : 0; r < m; ) {
                  for (
                    o = g, a = 1, s = 36;
                    r >= m && b("invalid-input"),
                      ((c =
                        (p = t.charCodeAt(r++)) - 48 < 10
                          ? p - 22
                          : p - 65 < 26
                          ? p - 65
                          : p - 97 < 26
                          ? p - 97
                          : 36) >= 36 ||
                        c > h((l - g) / a)) &&
                        b("overflow"),
                      (g += c * a),
                      !(c < (d = s <= y ? 1 : s >= y + 26 ? 26 : s - y));
                    s += 36
                  )
                    a > h(l / (u = 36 - d)) && b("overflow"), (a *= u);
                  (y = M(g - o, (e = f.length + 1), 0 == o)),
                    h(g / e) > l - v && b("overflow"),
                    (v += h(g / e)),
                    (g %= e),
                    f.splice(g++, 0, v);
                }
                return _(f);
              }
              function w(t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  c,
                  d,
                  u,
                  p,
                  m,
                  g,
                  _,
                  O,
                  w = [];
                for (
                  m = (t = v(t)).length, e = 128, n = 0, o = 72, a = 0;
                  a < m;
                  ++a
                )
                  (p = t[a]) < 128 && w.push(f(p));
                for (i = r = w.length, r && w.push("-"); i < m; ) {
                  for (s = l, a = 0; a < m; ++a)
                    (p = t[a]) >= e && p < s && (s = p);
                  for (
                    s - e > h((l - n) / (g = i + 1)) && b("overflow"),
                      n += (s - e) * g,
                      e = s,
                      a = 0;
                    a < m;
                    ++a
                  )
                    if (((p = t[a]) < e && ++n > l && b("overflow"), p == e)) {
                      for (
                        c = n, d = 36;
                        !(c < (u = d <= o ? 1 : d >= o + 26 ? 26 : d - o));
                        d += 36
                      )
                        (O = c - u),
                          (_ = 36 - u),
                          w.push(f(y(u + (O % _), 0))),
                          (c = h(O / _));
                      w.push(f(y(c, 0))), (o = M(n, g, i == r)), (n = 0), ++i;
                    }
                  ++n, ++e;
                }
                return w.join("");
              }
              (s = {
                version: "1.3.2",
                ucs2: { decode: v, encode: _ },
                decode: O,
                encode: w,
                toASCII: function (t) {
                  return g(t, function (t) {
                    return d.test(t) ? "xn--" + w(t) : t;
                  });
                },
                toUnicode: function (t) {
                  return g(t, function (t) {
                    return c.test(t) ? O(t.slice(4).toLowerCase()) : t;
                  });
                },
              }),
                void 0 ===
                  (i = function () {
                    return s;
                  }.call(e, n, e, t)) || (t.exports = i);
            })();
          }).call(
            e,
            n(6)(t),
            (function () {
              return this;
            })()
          );
        },
        function (t, e) {
          t.exports = function (t) {
            return (
              t.webpackPolyfill ||
                ((t.deprecate = function () {}),
                (t.paths = []),
                (t.children = []),
                (t.webpackPolyfill = 1)),
              t
            );
          };
        },
        function (t, e, n) {
          "use strict";
          (e.decode = e.parse = n(8)), (e.encode = e.stringify = n(9));
        },
        function (t, e) {
          "use strict";
          function n(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          t.exports = function (t, e, i, r) {
            (e = e || "&"), (i = i || "=");
            var o = {};
            if ("string" != typeof t || 0 === t.length) return o;
            var a = /\+/g;
            t = t.split(e);
            var s = 1e3;
            r && "number" == typeof r.maxKeys && (s = r.maxKeys);
            var l = t.length;
            s > 0 && l > s && (l = s);
            for (var c = 0; c < l; ++c) {
              var d,
                u,
                p,
                h,
                f = t[c].replace(a, "%20"),
                b = f.indexOf(i);
              b >= 0
                ? ((d = f.substr(0, b)), (u = f.substr(b + 1)))
                : ((d = f), (u = "")),
                (p = decodeURIComponent(d)),
                (h = decodeURIComponent(u)),
                n(o, p)
                  ? Array.isArray(o[p])
                    ? o[p].push(h)
                    : (o[p] = [o[p], h])
                  : (o[p] = h);
            }
            return o;
          };
        },
        function (t, e) {
          "use strict";
          var n = function (t) {
            switch (typeof t) {
              case "string":
                return t;
              case "boolean":
                return t ? "true" : "false";
              case "number":
                return isFinite(t) ? t : "";
              default:
                return "";
            }
          };
          t.exports = function (t, e, i, r) {
            return (
              (e = e || "&"),
              (i = i || "="),
              null === t && (t = void 0),
              "object" == typeof t
                ? Object.keys(t)
                    .map(function (r) {
                      var o = encodeURIComponent(n(r)) + i;
                      return Array.isArray(t[r])
                        ? t[r]
                            .map(function (t) {
                              return o + encodeURIComponent(n(t));
                            })
                            .join(e)
                        : o + encodeURIComponent(n(t[r]));
                    })
                    .join(e)
                : r
                ? encodeURIComponent(n(r)) + i + encodeURIComponent(n(t))
                : ""
            );
          };
        },
        function (t, e) {
          "use strict";
          t.exports = function t(e, n) {
            if (e === n) return !0;
            var i,
              r = Array.isArray(e),
              o = Array.isArray(n);
            if (r && o) {
              if (e.length != n.length) return !1;
              for (i = 0; i < e.length; i++) if (!t(e[i], n[i])) return !1;
              return !0;
            }
            if (r != o) return !1;
            if (e && n && "object" == typeof e && "object" == typeof n) {
              var a = Object.keys(e);
              if (a.length !== Object.keys(n).length) return !1;
              for (i = 0; i < a.length; i++) if (void 0 === n[a[i]]) return !1;
              for (i = 0; i < a.length; i++)
                if (!t(e[a[i]], n[a[i]])) return !1;
              return !0;
            }
            return !1;
          };
        },
        function (t, e, n) {
          "use strict";
          function i(t, e, n) {
            var i = n ? " !== " : " === ",
              r = n ? " || " : " && ",
              o = n ? "!" : "",
              a = n ? "" : "!";
            switch (t) {
              case "null":
                return e + i + "null";
              case "array":
                return o + "Array.isArray(" + e + ")";
              case "object":
                return (
                  "(" +
                  o +
                  e +
                  r +
                  "typeof " +
                  e +
                  i +
                  '"object"' +
                  r +
                  a +
                  "Array.isArray(" +
                  e +
                  "))"
                );
              case "integer":
                return (
                  "(typeof " + e + i + '"number"' + r + a + "(" + e + " % 1))"
                );
              default:
                return "typeof " + e + i + '"' + t + '"';
            }
          }
          t.exports = {
            copy: function (t, e) {
              for (var n in ((e = e || {}), t)) e[n] = t[n];
              return e;
            },
            checkDataType: i,
            checkDataTypes: function (t, e) {
              switch (t.length) {
                case 1:
                  return i(t[0], e, !0);
                default:
                  var n = "",
                    r = o(t);
                  for (var a in (r.array &&
                    r.object &&
                    ((n = r.null ? "(" : "(!" + e + " || "),
                    (n += "typeof " + e + ' !== "object")'),
                    delete r.null,
                    delete r.array,
                    delete r.object),
                  r.number && delete r.integer,
                  r))
                    n += (n ? " && " : "") + i(a, e, !0);
                  return n;
              }
            },
            coerceToTypes: function (t) {
              if (Array.isArray(t)) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var i = t[n];
                  r[i] && (e[e.length] = i);
                }
                if (e.length) return e;
              } else if (r[t]) return [t];
            },
            toHash: o,
            getProperty: l,
            escapeQuotes: c,
            ucs2length: function (t) {
              for (var e, n = 0, i = t.length, r = 0; r < i; )
                n++,
                  (e = t.charCodeAt(r++)) >= 55296 &&
                    e <= 56319 &&
                    r < i &&
                    56320 == (64512 & (e = t.charCodeAt(r))) &&
                    r++;
              return n;
            },
            varOccurences: function (t, e) {
              e += "[^0-9]";
              var n = t.match(new RegExp(e, "g"));
              return n ? n.length : 0;
            },
            varReplace: function (t, e, n) {
              return (
                (e += "([^0-9])"),
                (n = n.replace(/\$/g, "$$$$")),
                t.replace(new RegExp(e, "g"), n + "$1")
              );
            },
            cleanUpCode: function (t) {
              return t.replace(d, "").replace(u, "").replace(p, "if (!($1))");
            },
            cleanUpVarErrors: function (t, e) {
              var n = t.match(h);
              return n && 2 === n.length
                ? e
                  ? t.replace(b, "").replace(m, "return true;")
                  : t
                      .replace(f, "")
                      .replace(
                        "return errors === 0;",
                        "validate.errors = null; return true;"
                      )
                : t;
            },
            schemaHasRules: function (t, e) {
              for (var n in t) if (e[n]) return !0;
            },
            stableStringify: n(12),
            toQuotedString: g,
            getPathExpr: function (t, e, n, i) {
              return _(
                t,
                n
                  ? "'/' + " +
                      e +
                      (i ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')")
                  : i
                  ? "'[' + " + e + " + ']'"
                  : "'[\\'' + " + e + " + '\\']'"
              );
            },
            getPath: function (t, e, n) {
              return _(t, g(n ? "/" + y(e) : l(e)));
            },
            getData: function (t, e, n) {
              var i = t.match(v);
              if (!i) throw new Error("Invalid relative JSON-pointer: " + t);
              var r = +i[1],
                o = i[2];
              if ("#" == o) {
                if (r >= e)
                  throw new Error(
                    "Cannot access property/index " +
                      r +
                      " levels up, current level is " +
                      e
                  );
                return n[e - r];
              }
              if (r > e)
                throw new Error(
                  "Cannot access data " +
                    r +
                    " levels up, current level is " +
                    e
                );
              var a = "data" + (e - r || "");
              if (!o) return a;
              for (var s = a, c = o.split("/"), d = 0; d < c.length; d++) {
                var u = c[d];
                u && (s += " && " + (a += l(M(u))));
              }
              return s;
            },
            unescapeFragment: function (t) {
              return M(decodeURIComponent(t));
            },
            escapeFragment: function (t) {
              return encodeURIComponent(y(t));
            },
            escapeJsonPointer: y,
          };
          var r = o(["string", "number", "integer", "boolean", "null"]);
          function o(t) {
            for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
            return e;
          }
          var a = /^[a-z$_][a-z$_0-9]*$/i,
            s = /'|\\/g;
          function l(t) {
            return "number" == typeof t
              ? "[" + t + "]"
              : a.test(t)
              ? "." + t
              : "['" + t.replace(s, "\\$&") + "']";
          }
          function c(t) {
            return t.replace(s, "\\$&");
          }
          var d = /else\s*{\s*}/g,
            u = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
            p = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g,
            h = /[^v\.]errors/g,
            f =
              /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
            b = /var errors = 0;|var vErrors = null;/g,
            m =
              /if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/;
          function g(t) {
            return "'" + c(t) + "'";
          }
          var v = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
          function _(t, e) {
            return '""' == t ? e : (t + " + " + e).replace(/' \+ '/g, "");
          }
          function y(t) {
            return t.replace(/~/g, "~0").replace(/\//g, "~1");
          }
          function M(t) {
            return t.replace(/~1/g, "/").replace(/~0/g, "~");
          }
        },
        function (t, e, n) {
          var i = "undefined" != typeof JSON ? JSON : n(13);
          t.exports = function (t, e) {
            e || (e = {}), "function" == typeof e && (e = { cmp: e });
            var n = e.space || "";
            "number" == typeof n && (n = Array(n + 1).join(" "));
            var a,
              s = "boolean" == typeof e.cycles && e.cycles,
              l =
                e.replacer ||
                function (t, e) {
                  return e;
                },
              c =
                e.cmp &&
                ((a = e.cmp),
                function (t) {
                  return function (e, n) {
                    var i = { key: e, value: t[e] },
                      r = { key: n, value: t[n] };
                    return a(i, r);
                  };
                }),
              d = [];
            return (function t(e, a, u, p) {
              var h = n ? "\n" + new Array(p + 1).join(n) : "",
                f = n ? ": " : ":";
              if (
                (u &&
                  u.toJSON &&
                  "function" == typeof u.toJSON &&
                  (u = u.toJSON()),
                void 0 !== (u = l.call(e, a, u)))
              ) {
                if ("object" != typeof u || null === u) return i.stringify(u);
                if (r(u)) {
                  for (var b = [], m = 0; m < u.length; m++) {
                    var g = t(u, m, u[m], p + 1) || i.stringify(null);
                    b.push(h + n + g);
                  }
                  return "[" + b.join(",") + h + "]";
                }
                if (-1 !== d.indexOf(u)) {
                  if (s) return i.stringify("__cycle__");
                  throw new TypeError("Converting circular structure to JSON");
                }
                d.push(u);
                var v = o(u).sort(c && c(u));
                for (b = [], m = 0; m < v.length; m++) {
                  var _ = t(u, (a = v[m]), u[a], p + 1);
                  if (_) {
                    var y = i.stringify(a) + f + _;
                    b.push(h + n + y);
                  }
                }
                return d.splice(d.indexOf(u), 1), "{" + b.join(",") + h + "}";
              }
            })({ "": t }, "", t, 0);
          };
          var r =
              Array.isArray ||
              function (t) {
                return "[object Array]" === {}.toString.call(t);
              },
            o =
              Object.keys ||
              function (t) {
                var e =
                    Object.prototype.hasOwnProperty ||
                    function () {
                      return !0;
                    },
                  n = [];
                for (var i in t) e.call(t, i) && n.push(i);
                return n;
              };
        },
        function (t, e, n) {
          (e.parse = n(14)), (e.stringify = n(15));
        },
        function (t, e) {
          var n,
            i,
            r,
            o,
            a = {
              '"': '"',
              "\\": "\\",
              "/": "/",
              b: "\b",
              f: "\f",
              n: "\n",
              r: "\r",
              t: "\t",
            },
            s = function (t) {
              throw { name: "SyntaxError", message: t, at: n, text: r };
            },
            l = function (t) {
              return (
                t &&
                  t !== i &&
                  s("Expected '" + t + "' instead of '" + i + "'"),
                (i = r.charAt(n)),
                (n += 1),
                i
              );
            },
            c = function () {
              var t,
                e = "";
              for ("-" === i && ((e = "-"), l("-")); i >= "0" && i <= "9"; )
                (e += i), l();
              if ("." === i)
                for (e += "."; l() && i >= "0" && i <= "9"; ) e += i;
              if ("e" === i || "E" === i)
                for (
                  e += i, l(), ("-" !== i && "+" !== i) || ((e += i), l());
                  i >= "0" && i <= "9";

                )
                  (e += i), l();
              if (((t = +e), isFinite(t))) return t;
              s("Bad number");
            },
            d = function () {
              var t,
                e,
                n,
                r = "";
              if ('"' === i)
                for (; l(); ) {
                  if ('"' === i) return l(), r;
                  if ("\\" === i)
                    if ((l(), "u" === i)) {
                      for (
                        n = 0, e = 0;
                        e < 4 && ((t = parseInt(l(), 16)), isFinite(t));
                        e += 1
                      )
                        n = 16 * n + t;
                      r += String.fromCharCode(n);
                    } else {
                      if ("string" != typeof a[i]) break;
                      r += a[i];
                    }
                  else r += i;
                }
              s("Bad string");
            },
            u = function () {
              for (; i && i <= " "; ) l();
            };
          (o = function () {
            switch ((u(), i)) {
              case "{":
                return (function () {
                  var t,
                    e = {};
                  if ("{" === i) {
                    if ((l("{"), u(), "}" === i)) return l("}"), e;
                    for (; i; ) {
                      if (
                        ((t = d()),
                        u(),
                        l(":"),
                        Object.hasOwnProperty.call(e, t) &&
                          s('Duplicate key "' + t + '"'),
                        (e[t] = o()),
                        u(),
                        "}" === i)
                      )
                        return l("}"), e;
                      l(","), u();
                    }
                  }
                  s("Bad object");
                })();
              case "[":
                return (function () {
                  var t = [];
                  if ("[" === i) {
                    if ((l("["), u(), "]" === i)) return l("]"), t;
                    for (; i; ) {
                      if ((t.push(o()), u(), "]" === i)) return l("]"), t;
                      l(","), u();
                    }
                  }
                  s("Bad array");
                })();
              case '"':
                return d();
              case "-":
                return c();
              default:
                return i >= "0" && i <= "9"
                  ? c()
                  : (function () {
                      switch (i) {
                        case "t":
                          return l("t"), l("r"), l("u"), l("e"), !0;
                        case "f":
                          return l("f"), l("a"), l("l"), l("s"), l("e"), !1;
                        case "n":
                          return l("n"), l("u"), l("l"), l("l"), null;
                      }
                      s("Unexpected '" + i + "'");
                    })();
            }
          }),
            (t.exports = function (t, e) {
              var a;
              return (
                (r = t),
                (n = 0),
                (i = " "),
                (a = o()),
                u(),
                i && s("Syntax error"),
                "function" == typeof e
                  ? (function t(n, i) {
                      var r,
                        o,
                        a = n[i];
                      if (a && "object" == typeof a)
                        for (r in a)
                          Object.prototype.hasOwnProperty.call(a, r) &&
                            (void 0 !== (o = t(a, r))
                              ? (a[r] = o)
                              : delete a[r]);
                      return e.call(n, i, a);
                    })({ "": a }, "")
                  : a
              );
            });
        },
        function (t, e) {
          var n,
            i,
            r,
            o =
              /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            a = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\",
            };
          function s(t) {
            return (
              (o.lastIndex = 0),
              o.test(t)
                ? '"' +
                  t.replace(o, function (t) {
                    var e = a[t];
                    return "string" == typeof e
                      ? e
                      : "\\u" +
                          ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + t + '"'
            );
          }
          t.exports = function (t, e, o) {
            var a;
            if (((n = ""), (i = ""), "number" == typeof o))
              for (a = 0; a < o; a += 1) i += " ";
            else "string" == typeof o && (i = o);
            if (
              ((r = e),
              e &&
                "function" != typeof e &&
                ("object" != typeof e || "number" != typeof e.length))
            )
              throw new Error("JSON.stringify");
            return (function t(e, o) {
              var a,
                l,
                c,
                d,
                u,
                p = n,
                h = o[e];
              switch (
                (h &&
                  "object" == typeof h &&
                  "function" == typeof h.toJSON &&
                  (h = h.toJSON(e)),
                "function" == typeof r && (h = r.call(o, e, h)),
                typeof h)
              ) {
                case "string":
                  return s(h);
                case "number":
                  return isFinite(h) ? String(h) : "null";
                case "boolean":
                case "null":
                  return String(h);
                case "object":
                  if (!h) return "null";
                  if (
                    ((n += i),
                    (u = []),
                    "[object Array]" === Object.prototype.toString.apply(h))
                  ) {
                    for (d = h.length, a = 0; a < d; a += 1)
                      u[a] = t(a, h) || "null";
                    return (
                      (c =
                        0 === u.length
                          ? "[]"
                          : n
                          ? "[\n" + n + u.join(",\n" + n) + "\n" + p + "]"
                          : "[" + u.join(",") + "]"),
                      (n = p),
                      c
                    );
                  }
                  if (r && "object" == typeof r)
                    for (d = r.length, a = 0; a < d; a += 1)
                      "string" == typeof (l = r[a]) &&
                        (c = t(l, h)) &&
                        u.push(s(l) + (n ? ": " : ":") + c);
                  else
                    for (l in h)
                      Object.prototype.hasOwnProperty.call(h, l) &&
                        (c = t(l, h)) &&
                        u.push(s(l) + (n ? ": " : ":") + c);
                  return (
                    (c =
                      0 === u.length
                        ? "{}"
                        : n
                        ? "{\n" + n + u.join(",\n" + n) + "\n" + p + "}"
                        : "{" + u.join(",") + "}"),
                    (n = p),
                    c
                  );
              }
            })("", { "": t });
          };
        },
        function (t, e, n) {
          "use strict";
          var i = n(11);
          t.exports = function (t) {
            i.copy(t, this);
          };
        },
        function (module, exports, __webpack_require__) {
          "use strict";
          module.exports = { setup: setupAsync, compile: compileAsync };
          var util = __webpack_require__(11),
            ASYNC = {
              "*": checkGenerators,
              "co*": checkGenerators,
              es7: checkAsyncFunction,
            },
            TRANSPILE = { nodent: getNodent, regenerator: getRegenerator },
            MODES = [
              { async: "co*" },
              { async: "es7", transpile: "nodent" },
              { async: "co*", transpile: "regenerator" },
            ],
            regenerator,
            nodent;
          function setupAsync(t, e) {
            !1 !== e && (e = !0);
            var n,
              i = t.async,
              r = t.transpile;
            switch (typeof r) {
              case "string":
                var o = TRANSPILE[r];
                if (!o) throw new Error("bad transpiler: " + r);
                return (t._transpileFunc = o(t, e));
              case "undefined":
              case "boolean":
                if ("string" == typeof i) {
                  if (!(n = ASYNC[i])) throw new Error("bad async mode: " + i);
                  return (t.transpile = n(t, e));
                }
                for (var a = 0; a < MODES.length; a++) {
                  var s = MODES[a];
                  if (setupAsync(s, !1)) return util.copy(s, t), t.transpile;
                }
                throw new Error(
                  "generators, nodent and regenerator are not available"
                );
              case "function":
                return (t._transpileFunc = t.transpile);
              default:
                throw new Error("bad transpiler: " + r);
            }
          }
          function checkGenerators(opts, required) {
            try {
              return eval("(function*(){})()"), !0;
            } catch (t) {
              if (required) throw new Error("generators not supported");
            }
          }
          function checkAsyncFunction(opts, required) {
            try {
              return eval("(async function(){})()"), !0;
            } catch (t) {
              if (required)
                throw new Error("es7 async functions not supported");
            }
          }
          function getRegenerator(t, e) {
            try {
              return (
                regenerator ||
                  (regenerator = __webpack_require__(
                    !(function () {
                      var t = new Error('Cannot find module "regenerator"');
                      throw ((t.code = "MODULE_NOT_FOUND"), t);
                    })()
                  )).runtime(),
                (t.async && !0 !== t.async) || (t.async = "es7"),
                regeneratorTranspile
              );
            } catch (t) {
              if (e) throw new Error("regenerator not available");
            }
          }
          function regeneratorTranspile(t) {
            return regenerator.compile(t).code;
          }
          function getNodent(t, e) {
            try {
              return (
                nodent ||
                  (nodent = __webpack_require__(
                    !(function () {
                      var t = new Error('Cannot find module "nodent"');
                      throw ((t.code = "MODULE_NOT_FOUND"), t);
                    })()
                  )({ log: !1, dontInstallRequireHook: !0 })),
                "es7" != t.async && (t.async && t.async, (t.async = "es7")),
                nodentTranspile
              );
            } catch (t) {
              if (e) throw new Error("nodent not available");
            }
          }
          function nodentTranspile(t) {
            return nodent.compile(t, "", { promises: !0, sourcemap: !1 }).code;
          }
          function compileAsync(t, e) {
            var n,
              i = this;
            try {
              n = this._addSchema(t);
            } catch (t) {
              return void setTimeout(function () {
                e(t);
              });
            }
            if (n.validate)
              setTimeout(function () {
                e(null, n.validate);
              });
            else {
              if ("function" != typeof this._opts.loadSchema)
                throw new Error("options.loadSchema should be a function");
              !(function t(e, n, r) {
                var o;
                try {
                  o = i.compile(e);
                } catch (t) {
                  return void (t.missingSchema ? a(t) : s(t));
                }
                function a(r) {
                  var o = r.missingSchema;
                  if (i._refs[o] || i._schemas[o])
                    return n(
                      new Error(
                        "Schema " +
                          o +
                          " is loaded but" +
                          r.missingRef +
                          "cannot be resolved"
                      )
                    );
                  var a = i._loadingSchemas[o];
                  function s(r, a) {
                    if (r) return n(r);
                    if (!i._refs[o] && !i._schemas[o])
                      try {
                        i.addSchema(a, o);
                      } catch (t) {
                        return void n(t);
                      }
                    t(e, n);
                  }
                  a
                    ? "function" == typeof a
                      ? (i._loadingSchemas[o] = [a, s])
                      : (a[a.length] = s)
                    : ((i._loadingSchemas[o] = s),
                      i._opts.loadSchema(o, function (t, e) {
                        var n = i._loadingSchemas[o];
                        if (
                          (delete i._loadingSchemas[o], "function" == typeof n)
                        )
                          n(t, e);
                        else for (var r = 0; r < n.length; r++) n[r](t, e);
                      }));
                }
                function s(t, e) {
                  if (!r) return n(t, e);
                  setTimeout(function () {
                    n(t, e);
                  });
                }
                s(null, o);
              })(t, e, !0);
            }
          }
        },
        function (t, e) {
          "use strict";
          t.exports = function (t, e) {
            var n = "",
              i = !0 === t.schema.$async;
            if (t.isTop) {
              var r = t.isTop,
                o = (t.level = 0),
                a = (t.dataLevel = 0),
                s = "data";
              if (
                ((t.rootId = t.resolve.fullPath(t.root.schema.id)),
                (t.baseId = t.baseId || t.rootId),
                i)
              ) {
                t.async = !0;
                var l = "es7" == t.opts.async;
                t.yieldAwait = l ? "await" : "yield";
              }
              delete t.isTop,
                (t.dataPathArr = [void 0]),
                (n += " validate = "),
                i
                  ? l
                    ? (n += " (async function ")
                    : ("co*" == t.opts.async && (n += "co.wrap"),
                      (n += "(function* "))
                  : (n += " (function "),
                (n +=
                  " (data, dataPath, parentData, parentDataProperty) { 'use strict'; var vErrors = null; "),
                (n += " var errors = 0;     ");
            } else {
              if (
                ((o = t.level),
                (s = "data" + ((a = t.dataLevel) || "")),
                t.schema.id &&
                  (t.baseId = t.resolve.url(t.baseId, t.schema.id)),
                i && !t.async)
              )
                throw new Error("async schema in sync schema");
              n += " var errs_" + o + " = errors;";
            }
            var c,
              d = "valid" + o,
              u = !t.opts.allErrors,
              p = "",
              h = "",
              f = t.schema.type,
              b = Array.isArray(f);
            if (f && t.opts.coerceTypes) {
              var m = t.util.coerceToTypes(f);
              if (m) {
                var g = t.schemaPath + ".type",
                  v = t.errSchemaPath + "/type",
                  _ = b ? "checkDataTypes" : "checkDataType";
                n += " if (" + t.util[_](f, s, !0) + ") {  ";
                var y = "dataType" + o,
                  M = "coerced" + o;
                n +=
                  " var " +
                  y +
                  " = typeof " +
                  s +
                  "; var " +
                  M +
                  " = undefined; ";
                var O = "",
                  w = m;
                if (w)
                  for (var A, x = -1, z = w.length - 1; x < z; )
                    (A = w[(x += 1)]),
                      x &&
                        ((n += " if (" + M + " === undefined) { "), (O += "}")),
                      "string" == A
                        ? (n +=
                            " if (" +
                            y +
                            " == 'number' || " +
                            y +
                            " == 'boolean') " +
                            M +
                            " = '' + " +
                            s +
                            "; else if (" +
                            s +
                            " === null) " +
                            M +
                            " = ''; ")
                        : "number" == A || "integer" == A
                        ? ((n +=
                            " if (" +
                            y +
                            " == 'boolean' || " +
                            s +
                            " === null || (" +
                            y +
                            " == 'string' && " +
                            s +
                            " && " +
                            s +
                            " == +" +
                            s +
                            " "),
                          "integer" == A && (n += " && !(" + s + " % 1)"),
                          (n += ")) " + M + " = +" + s + "; "))
                        : "boolean" == A
                        ? (n +=
                            " if (" +
                            s +
                            " === 'false' || " +
                            s +
                            " === 0 || " +
                            s +
                            " === null) " +
                            M +
                            " = false; else if (" +
                            s +
                            " === 'true' || " +
                            s +
                            " === 1) " +
                            M +
                            " = true; ")
                        : "null" == A &&
                          (n +=
                            " if (" +
                            s +
                            " === '' || " +
                            s +
                            " === 0 || " +
                            s +
                            " === false) " +
                            M +
                            " = null; ");
                (n += " " + O + " if (" + M + " === undefined) {   "),
                  (k = k || []).push(n),
                  (n = ""),
                  !1 !== t.createErrors
                    ? ((n +=
                        " { keyword: '" +
                        (c || "type") +
                        "' , dataPath: (dataPath || '') + " +
                        t.errorPath +
                        ' , schemaPath: "' +
                        v +
                        "\" , params: { type: '"),
                      (n += b ? "" + f.join(",") : "" + f),
                      (n += "' } "),
                      !1 !== t.opts.messages &&
                        ((n += " , message: 'should be "),
                        (n += b ? "" + f.join(",") : "" + f),
                        (n += "' ")),
                      t.opts.verbose &&
                        (n +=
                          " , schema: validate.schema" +
                          g +
                          " , parentSchema: validate.schema" +
                          t.schemaPath +
                          " , data: " +
                          s +
                          " "),
                      (n += " } "))
                    : (n += " {} ");
                var C = n;
                (n = k.pop()),
                  !t.compositeRule && u
                    ? t.async
                      ? (n += " throw new ValidationError([" + C + "]); ")
                      : (n += " validate.errors = [" + C + "]; return false; ")
                    : (n +=
                        " var err = " +
                        C +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (n += " } else { "),
                  (n += a
                    ? " " +
                      s +
                      " = data" +
                      (a - 1 || "") +
                      "[" +
                      t.dataPathArr[a] +
                      "] = " +
                      M +
                      "; "
                    : " data = " +
                      M +
                      "; if (parentData !== undefined) parentData[parentDataProperty] = " +
                      M +
                      "; "),
                  (n += " } } ");
              }
            }
            var k,
              S = t.RULES;
            if (S)
              for (var T, D = -1, L = S.length - 1; D < L; )
                if (at((T = S[(D += 1)]))) {
                  if (
                    (T.type &&
                      (n += " if (" + t.util.checkDataType(T.type, s) + ") { "),
                    t.opts.useDefaults && !t.compositeRule)
                  )
                    if ("object" == T.type && t.schema.properties) {
                      var q = t.schema.properties,
                        E = Object.keys(q);
                      if (E)
                        for (var j, P = -1, R = E.length - 1; P < R; )
                          void 0 !== (W = q[(j = E[(P += 1)])]).default &&
                            ((n +=
                              "  if (" +
                              (B = s + t.util.getProperty(j)) +
                              " === undefined) " +
                              B +
                              " = "),
                            "clone" == t.opts.useDefaults
                              ? (n += " " + JSON.stringify(W.default) + " ")
                              : (n += " " + t.useDefault(W.default) + " "),
                            (n += "; "));
                    } else if (
                      "array" == T.type &&
                      Array.isArray(t.schema.items)
                    ) {
                      var I = t.schema.items;
                      if (I) {
                        x = -1;
                        for (var W, N = I.length - 1; x < N; ) {
                          var B;
                          void 0 !== (W = I[(x += 1)]).default &&
                            ((n +=
                              "  if (" +
                              (B = s + "[" + x + "]") +
                              " === undefined) " +
                              B +
                              " = "),
                            "clone" == t.opts.useDefaults
                              ? (n += " " + JSON.stringify(W.default) + " ")
                              : (n += " " + t.useDefault(W.default) + " "),
                            (n += "; "));
                        }
                      }
                    }
                  var F = T.rules;
                  if (F)
                    for (var $, H = -1, Y = F.length - 1; H < Y; )
                      if (st(($ = F[(H += 1)]))) {
                        if ($.custom) {
                          q = t.schema[$.keyword];
                          var U = t.useCustomRule($, q, t.schema, t),
                            X = U.code + ".errors",
                            V =
                              ((g = t.schemaPath + "." + $.keyword),
                              (v = t.errSchemaPath + "/" + $.keyword),
                              "errs" + o),
                            G = ((x = "i" + o), "ruleErr" + o),
                            K = $.definition,
                            Z = K.async,
                            J = K.inline,
                            Q = K.macro;
                          if (Z && !t.async)
                            throw new Error("async keyword in sync schema");
                          if (
                            (J || Q || (n += X + " = null;"),
                            (n += "var " + V + " = errors;var valid" + o + ";"),
                            J && K.statements)
                          )
                            n += " " + U.validate;
                          else if (Q) {
                            var tt = t.util.copy(t);
                            tt.level++,
                              (tt.schema = U.validate),
                              (tt.schemaPath = "");
                            var et = t.compositeRule;
                            t.compositeRule = tt.compositeRule = !0;
                            var nt = t
                              .validate(tt)
                              .replace(/validate\.schema/g, U.code);
                            (t.compositeRule = tt.compositeRule = et),
                              (n += " " + nt);
                          } else if (K.compile || K.validate) {
                            (k = k || []).push(n),
                              (n = ""),
                              (n += "  " + U.code + ".call( "),
                              t.opts.passContext
                                ? (n += "this")
                                : (n += "self"),
                              U.validate.length,
                              K.compile || !1 === K.schema
                                ? (n += " , " + s + " ")
                                : (n +=
                                    " , validate.schema" +
                                    g +
                                    " , " +
                                    s +
                                    " , validate.schema" +
                                    t.schemaPath +
                                    " "),
                              (n += " , (dataPath || '')"),
                              '""' != t.errorPath && (n += " + " + t.errorPath),
                              (n += a
                                ? " , data" +
                                  (a - 1 || "") +
                                  " , " +
                                  t.dataPathArr[a] +
                                  " "
                                : " , parentData , parentDataProperty ");
                            var it = (n += " )  ");
                            (n = k.pop()),
                              !1 !== K.errors &&
                                (n += Z
                                  ? " var " +
                                    (X = "customErrors" + o) +
                                    " = null; try { valid" +
                                    o +
                                    " = " +
                                    t.yieldAwait +
                                    it +
                                    "; } catch (e) { valid" +
                                    o +
                                    " = false; if (e instanceof ValidationError) " +
                                    X +
                                    " = e.errors; else throw e; } "
                                  : " " + U.code + ".errors = null; ");
                          }
                          (n += "if (! "),
                            J
                              ? K.statements
                                ? (n += " valid" + o + " ")
                                : (n += " (" + U.validate + ") ")
                              : Q
                              ? (n += " valid" + tt.level + " ")
                              : Z
                              ? !1 === K.errors
                                ? (n += " (" + t.yieldAwait + it + ") ")
                                : (n += " valid" + o + " ")
                              : (n += " " + it + " "),
                            (n += ") { "),
                            (c = $.keyword),
                            (k = k || []).push(n),
                            (n = ""),
                            (k = k || []).push(n),
                            (n = ""),
                            !1 !== t.createErrors
                              ? ((n +=
                                  " { keyword: '" +
                                  (c || "custom") +
                                  "' , dataPath: (dataPath || '') + " +
                                  t.errorPath +
                                  ' , schemaPath: "' +
                                  v +
                                  "\" , params: { keyword: '" +
                                  $.keyword +
                                  "' } "),
                                !1 !== t.opts.messages &&
                                  (n +=
                                    " , message: 'should pass \"" +
                                    $.keyword +
                                    "\" keyword validation' "),
                                t.opts.verbose &&
                                  (n +=
                                    " , schema: validate.schema" +
                                    g +
                                    " , parentSchema: validate.schema" +
                                    t.schemaPath +
                                    " , data: " +
                                    s +
                                    " "),
                                (n += " } "))
                              : (n += " {} "),
                            (C = n),
                            (n = k.pop()),
                            !t.compositeRule && u
                              ? t.async
                                ? (n +=
                                    " throw new ValidationError([" + C + "]); ")
                                : (n +=
                                    " validate.errors = [" +
                                    C +
                                    "]; return false; ")
                              : (n +=
                                  " var err = " +
                                  C +
                                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                          var rt = n;
                          (n = k.pop()),
                            J
                              ? K.errors
                                ? "full" != K.errors &&
                                  ((n +=
                                    "  for (var " +
                                    x +
                                    "=" +
                                    V +
                                    "; " +
                                    x +
                                    "<errors; " +
                                    x +
                                    "++) { var " +
                                    G +
                                    " = vErrors[" +
                                    x +
                                    "]; if (" +
                                    G +
                                    ".dataPath === undefined) { " +
                                    G +
                                    ".dataPath = (dataPath || '') + " +
                                    t.errorPath +
                                    "; } if (" +
                                    G +
                                    ".schemaPath === undefined) { " +
                                    G +
                                    '.schemaPath = "' +
                                    v +
                                    '"; } '),
                                  t.opts.verbose &&
                                    (n +=
                                      " " +
                                      G +
                                      ".schema = validate.schema" +
                                      g +
                                      "; " +
                                      G +
                                      ".data = " +
                                      s +
                                      "; "),
                                  (n += " } "))
                                : !1 === K.errors
                                ? (n += " " + rt + " ")
                                : ((n +=
                                    " if (" +
                                    V +
                                    " == errors) { " +
                                    rt +
                                    " } else {  for (var " +
                                    x +
                                    "=" +
                                    V +
                                    "; " +
                                    x +
                                    "<errors; " +
                                    x +
                                    "++) { var " +
                                    G +
                                    " = vErrors[" +
                                    x +
                                    "]; if (" +
                                    G +
                                    ".dataPath === undefined) { " +
                                    G +
                                    ".dataPath = (dataPath || '') + " +
                                    t.errorPath +
                                    "; } if (" +
                                    G +
                                    ".schemaPath === undefined) { " +
                                    G +
                                    '.schemaPath = "' +
                                    v +
                                    '"; } '),
                                  t.opts.verbose &&
                                    (n +=
                                      " " +
                                      G +
                                      ".schema = validate.schema" +
                                      g +
                                      "; " +
                                      G +
                                      ".data = " +
                                      s +
                                      "; "),
                                  (n += " } } "))
                              : Q
                              ? ((n += "   var err =   "),
                                !1 !== t.createErrors
                                  ? ((n +=
                                      " { keyword: '" +
                                      (c || "custom") +
                                      "' , dataPath: (dataPath || '') + " +
                                      t.errorPath +
                                      ' , schemaPath: "' +
                                      v +
                                      "\" , params: { keyword: '" +
                                      $.keyword +
                                      "' } "),
                                    !1 !== t.opts.messages &&
                                      (n +=
                                        " , message: 'should pass \"" +
                                        $.keyword +
                                        "\" keyword validation' "),
                                    t.opts.verbose &&
                                      (n +=
                                        " , schema: validate.schema" +
                                        g +
                                        " , parentSchema: validate.schema" +
                                        t.schemaPath +
                                        " , data: " +
                                        s +
                                        " "),
                                    (n += " } "))
                                  : (n += " {} "),
                                (n +=
                                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                                !t.compositeRule &&
                                  u &&
                                  (t.async
                                    ? (n +=
                                        " throw new ValidationError(vErrors); ")
                                    : (n +=
                                        " validate.errors = vErrors; return false ")))
                              : !1 === K.errors
                              ? (n += " " + rt + " ")
                              : ((n +=
                                  " if (Array.isArray(" +
                                  X +
                                  ")) { if (vErrors === null) vErrors = " +
                                  X +
                                  "; else vErrors.concat(" +
                                  X +
                                  "); errors = vErrors.length;  for (var " +
                                  x +
                                  "=" +
                                  V +
                                  "; " +
                                  x +
                                  "<errors; " +
                                  x +
                                  "++) { var " +
                                  G +
                                  " = vErrors[" +
                                  x +
                                  "];  " +
                                  G +
                                  ".dataPath = (dataPath || '') + " +
                                  t.errorPath +
                                  ";   " +
                                  G +
                                  '.schemaPath = "' +
                                  v +
                                  '";  '),
                                t.opts.verbose &&
                                  (n +=
                                    " " +
                                    G +
                                    ".schema = validate.schema" +
                                    g +
                                    "; " +
                                    G +
                                    ".data = " +
                                    s +
                                    "; "),
                                (n += " } } else { " + rt + " } ")),
                            (c = void 0),
                            (n += " } "),
                            u && (n += " else { ");
                        } else n += " " + $.code(t, $.keyword) + " ";
                        u && (p += "}");
                      }
                  if (
                    (u && ((n += " " + p + " "), (p = "")),
                    T.type && ((n += " } "), f && f === T.type))
                  ) {
                    var ot = !0;
                    (n += " else { "),
                      (g = t.schemaPath + ".type"),
                      (v = t.errSchemaPath + "/type"),
                      (k = k || []).push(n),
                      (n = ""),
                      !1 !== t.createErrors
                        ? ((n +=
                            " { keyword: '" +
                            (c || "type") +
                            "' , dataPath: (dataPath || '') + " +
                            t.errorPath +
                            ' , schemaPath: "' +
                            v +
                            "\" , params: { type: '"),
                          (n += b ? "" + f.join(",") : "" + f),
                          (n += "' } "),
                          !1 !== t.opts.messages &&
                            ((n += " , message: 'should be "),
                            (n += b ? "" + f.join(",") : "" + f),
                            (n += "' ")),
                          t.opts.verbose &&
                            (n +=
                              " , schema: validate.schema" +
                              g +
                              " , parentSchema: validate.schema" +
                              t.schemaPath +
                              " , data: " +
                              s +
                              " "),
                          (n += " } "))
                        : (n += " {} "),
                      (C = n),
                      (n = k.pop()),
                      !t.compositeRule && u
                        ? t.async
                          ? (n += " throw new ValidationError([" + C + "]); ")
                          : (n +=
                              " validate.errors = [" + C + "]; return false; ")
                        : (n +=
                            " var err = " +
                            C +
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                      (n += " } ");
                  }
                  u &&
                    ((n += " if (errors === "),
                    (n += r ? "0" : "errs_" + o),
                    (n += ") { "),
                    (h += "}"));
                }
            function at(t) {
              for (var e = 0; e < t.rules.length; e++)
                if (st(t.rules[e])) return !0;
            }
            function st(e) {
              return (
                void 0 !== t.schema[e.keyword] ||
                ("properties" == e.keyword &&
                  (!1 === t.schema.additionalProperties ||
                    "object" == typeof t.schema.additionalProperties ||
                    (t.schema.patternProperties &&
                      Object.keys(t.schema.patternProperties).length) ||
                    (t.opts.v5 &&
                      t.schema.patternGroups &&
                      Object.keys(t.schema.patternGroups).length)))
              );
            }
            return (
              !f ||
                ot ||
                (t.opts.coerceTypes && m) ||
                ((g = t.schemaPath + ".type"),
                (v = t.errSchemaPath + "/type"),
                (_ = b ? "checkDataTypes" : "checkDataType"),
                (n += " if (" + t.util[_](f, s, !0) + ") {   "),
                (k = k || []).push(n),
                (n = ""),
                !1 !== t.createErrors
                  ? ((n +=
                      " { keyword: '" +
                      (c || "type") +
                      "' , dataPath: (dataPath || '') + " +
                      t.errorPath +
                      ' , schemaPath: "' +
                      v +
                      "\" , params: { type: '"),
                    (n += b ? "" + f.join(",") : "" + f),
                    (n += "' } "),
                    !1 !== t.opts.messages &&
                      ((n += " , message: 'should be "),
                      (n += b ? "" + f.join(",") : "" + f),
                      (n += "' ")),
                    t.opts.verbose &&
                      (n +=
                        " , schema: validate.schema" +
                        g +
                        " , parentSchema: validate.schema" +
                        t.schemaPath +
                        " , data: " +
                        s +
                        " "),
                    (n += " } "))
                  : (n += " {} "),
                (C = n),
                (n = k.pop()),
                !t.compositeRule && u
                  ? t.async
                    ? (n += " throw new ValidationError([" + C + "]); ")
                    : (n += " validate.errors = [" + C + "]; return false; ")
                  : (n +=
                      " var err = " +
                      C +
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                (n += " }")),
              u && (n += " " + h + " "),
              r
                ? (i
                    ? ((n += " if (errors === 0) return true;           "),
                      (n += " else throw new ValidationError(vErrors); "))
                    : ((n += " validate.errors = vErrors; "),
                      (n += " return errors === 0;       ")),
                  (n += " });"))
                : (n += " var " + d + " = errors === errs_" + o + ";"),
              (n = t.util.cleanUpCode(n)),
              r && u && (n = t.util.cleanUpVarErrors(n, i)),
              n
            );
          };
        },
        function (t, e) {
          var n = Array.prototype.slice;
          function i(t) {
            var e = this,
              i = n.call(arguments, 1);
            return new Promise(function (n, o) {
              if (
                ("function" == typeof t && (t = t.apply(e, i)),
                !t || "function" != typeof t.next)
              )
                return n(t);
              function a(e) {
                var n;
                try {
                  n = t.next(e);
                } catch (t) {
                  return o(t);
                }
                c(n);
              }
              function s(e) {
                var n;
                try {
                  n = t.throw(e);
                } catch (t) {
                  return o(t);
                }
                c(n);
              }
              function c(t) {
                if (t.done) return n(t.value);
                var i = r.call(e, t.value);
                return i && l(i)
                  ? i.then(a, s)
                  : s(
                      new TypeError(
                        'You may only yield a function, promise, generator, array, or object, but the following object was passed: "' +
                          String(t.value) +
                          '"'
                      )
                    );
              }
              a();
            });
          }
          function r(t) {
            return t
              ? l(t)
                ? t
                : (function (t) {
                    var e = t.constructor;
                    return (
                      !!e &&
                      ("GeneratorFunction" === e.name ||
                        "GeneratorFunction" === e.displayName ||
                        c(e.prototype))
                    );
                  })(t) || c(t)
                ? i.call(this, t)
                : "function" == typeof t
                ? o.call(this, t)
                : Array.isArray(t)
                ? a.call(this, t)
                : (function (t) {
                    return Object == t.constructor;
                  })(t)
                ? s.call(this, t)
                : t
              : t;
          }
          function o(t) {
            var e = this;
            return new Promise(function (i, r) {
              t.call(e, function (t, e) {
                if (t) return r(t);
                arguments.length > 2 && (e = n.call(arguments, 1)), i(e);
              });
            });
          }
          function a(t) {
            return Promise.all(t.map(r, this));
          }
          function s(t) {
            for (
              var e = new t.constructor(), n = Object.keys(t), i = [], o = 0;
              o < n.length;
              o++
            ) {
              var a = n[o],
                s = r.call(this, t[a]);
              s && l(s) ? c(s, a) : (e[a] = t[a]);
            }
            return Promise.all(i).then(function () {
              return e;
            });
            function c(t, n) {
              (e[n] = void 0),
                i.push(
                  t.then(function (t) {
                    e[n] = t;
                  })
                );
            }
          }
          function l(t) {
            return "function" == typeof t.then;
          }
          function c(t) {
            return "function" == typeof t.next && "function" == typeof t.throw;
          }
          (t.exports = i.default = i.co = i),
            (i.wrap = function (t) {
              return (e.__generatorFunction__ = t), e;
              function e() {
                return i.call(this, t.apply(this, arguments));
              }
            });
        },
        function (t, e) {
          "use strict";
          function n(t) {
            (this.message = "validation failed"),
              (this.errors = t),
              (this.ajv = this.validation = !0);
          }
          (t.exports = n),
            (n.prototype = Object.create(Error.prototype)),
            (n.prototype.constructor = n);
        },
        function (t, e) {
          "use strict";
          var n = (t.exports = function () {
            this._cache = {};
          });
          (n.prototype.put = function (t, e) {
            this._cache[t] = e;
          }),
            (n.prototype.get = function (t) {
              return this._cache[t];
            }),
            (n.prototype.del = function (t) {
              delete this._cache[t];
            }),
            (n.prototype.clear = function () {
              this._cache = {};
            });
        },
        function (t, e, n) {
          "use strict";
          var i = n(11),
            r = /^\d\d\d\d-(\d\d)-(\d\d)$/,
            o = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            a = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,
            s =
              /^[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?(\.[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?)*$/i,
            l =
              /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i,
            c =
              /^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
            d =
              /^(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)+)*(?:\/)?$/i,
            u = /^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?)$/;
          function p(t) {
            t = "full" == t ? "full" : "fast";
            var e = i.copy(p[t]);
            for (var n in p.compare)
              e[n] = { validate: e[n], compare: p.compare[n] };
            return e;
          }
          function h(t) {
            var e = t.match(r);
            if (!e) return !1;
            var n = +e[1],
              i = +e[2];
            return n >= 1 && n <= 12 && i >= 1 && i <= o[n];
          }
          function f(t, e) {
            var n = t.match(a);
            if (!n) return !1;
            var i = n[1],
              r = n[2],
              o = n[3],
              s = n[5];
            return i <= 23 && r <= 59 && o <= 59 && (!e || s);
          }
          (t.exports = p),
            (p.fast = {
              date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
              time: /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
              "date-time":
                /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
              uri: /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
              email:
                /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
              hostname: s,
              ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
              ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
              regex: g,
              uuid: c,
              "json-pointer": d,
              "relative-json-pointer": u,
            }),
            (p.full = {
              date: h,
              time: f,
              "date-time": function (t) {
                var e = t.split(b);
                return h(e[0]) && f(e[1], !0);
              },
              uri: function (t) {
                return m.test(t) && l.test(t);
              },
              email:
                /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
              hostname: function (t) {
                return t.length <= 255 && s.test(t);
              },
              ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
              ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2