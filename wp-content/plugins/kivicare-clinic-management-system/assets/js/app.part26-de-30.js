// app.part26-de-30.js
                      ]
                                          ),
                                          r._v(" "),
                                          o(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "4",
                                                lg: "4",
                                              },
                                            },
                                            [
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end",
                                                },
                                                [
                                                  o(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: {
                                                        to: {
                                                          name: "".concat(
                                                            r.name
                                                          ),
                                                        },
                                                      },
                                                    },
                                                    [
                                                      o("i", {
                                                        staticClass:
                                                          "fa fa-angle-double-left",
                                                      }),
                                                      r._v(
                                                        "\n                    " +
                                                          r._s(
                                                            r.formTranslation
                                                              .common.back
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                },
                                {
                                  key: "footer",
                                  fn: function () {
                                    return [
                                      o("div", { staticClass: "row" }, [
                                        o(
                                          "div",
                                          { staticClass: "col-md-12 p-0" },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-end",
                                              },
                                              [
                                                1 === r.formStep
                                                  ? o(
                                                      "div",
                                                      [
                                                        o(
                                                          "router-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline-primary",
                                                            attrs: {
                                                              to: {
                                                                name: "".concat(
                                                                  r.name
                                                                ),
                                                              },
                                                            },
                                                          },
                                                          [
                                                            r._v(
                                                              "\n                      " +
                                                                r._s(
                                                                  r
                                                                    .formTranslation
                                                                    .common
                                                                    .cancel
                                                                ) +
                                                                "\n                    "
                                                            ),
                                                          ]
                                                        ),
                                                        r._v(" "),
                                                        o(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-primary",
                                                            on: {
                                                              click: function (
                                                                t
                                                              ) {
                                                                return (
                                                                  t.preventDefault(),
                                                                  r.updateFormStep(
                                                                    2
                                                                  )
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            o("i", {
                                                              staticClass:
                                                                "fas fa-step-forward",
                                                            }),
                                                            r._v(
                                                              "  " +
                                                                r._s(
                                                                  r
                                                                    .formTranslation
                                                                    .datatable
                                                                    .next_text
                                                                ) +
                                                                "\n                    "
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : o("div", [
                                                      o(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-outline-primary",
                                                          on: {
                                                            click: function (
                                                              t
                                                            ) {
                                                              return (
                                                                t.preventDefault(),
                                                                r.updateFormStep(
                                                                  1
                                                                )
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          o("i", {
                                                            staticClass:
                                                              "fas fa-step-backward",
                                                          }),
                                                          r._v(
                                                            "  " +
                                                              r._s(
                                                                r
                                                                  .formTranslation
                                                                  .datatable
                                                                  .prev_text
                                                              ) +
                                                              "\n                    "
                                                          ),
                                                        ]
                                                      ),
                                                      r._v(" "),
                                                      r.loading
                                                        ? o(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-primary",
                                                              attrs: {
                                                                disabled: "",
                                                              },
                                                            },
                                                            [
                                                              o("i", {
                                                                staticClass:
                                                                  "fa fa-sync fa-spin",
                                                              }),
                                                              r._v(
                                                                "  " +
                                                                  r._s(
                                                                    r
                                                                      .formTranslation
                                                                      .common
                                                                      .loading
                                                                  ) +
                                                                  "\n                    "
                                                              ),
                                                            ]
                                                          )
                                                        : o(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-primary",
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    return (
                                                                      t.preventDefault(),
                                                                      r.handleSubmit.apply(
                                                                        null,
                                                                        arguments
                                                                      )
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              o("i", {
                                                                staticClass:
                                                                  "fa fa-save",
                                                              }),
                                                              r._v(
                                                                " " +
                                                                  r._s(
                                                                    r
                                                                      .formTranslation
                                                                      .patient
                                                                      .save_btn
                                                                  ) +
                                                                  "\n                    "
                                                              ),
                                                            ]
                                                          ),
                                                    ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ]),
                            },
                            [
                              r._v(" "),
                              1 === r.formStep
                                ? o("div", { staticClass: "row" }, [
                                    o("div", { staticClass: "col-md-4" }, [
                                      o("div", { staticClass: "form-group" }, [
                                        o(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "name" },
                                          },
                                          [
                                            r._v(
                                              "\n                  " +
                                                r._s(
                                                  r.formTranslation.common.name
                                                ) +
                                                "\n                  "
                                            ),
                                            o(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [r._v("*")]
                                            ),
                                          ]
                                        ),
                                        r._v(" "),
                                        o("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: r.formData.step_1.name,
                                              expression:
                                                "formData.step_1.name",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "name",
                                            name: "name",
                                            type: "text",
                                            placeholder:
                                              r.formTranslation.common
                                                .enter_name,
                                          },
                                          domProps: {
                                            value: r.formData.step_1.name,
                                          },
                                          on: {
                                            input: function (t) {
                                              t.target.composing ||
                                                r.$set(
                                                  r.formData.step_1,
                                                  "name",
                                                  t.target.value
                                                );
                                            },
                                          },
                                        }),
                                        r._v(" "),
                                        r.submitted &&
                                        !r.$v.formData.step_1.name.required
                                          ? o(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                r._v(
                                                  "\n                  " +
                                                    r._s(
                                                      r.formTranslation.common
                                                        .name_required
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            )
                                          : r._e(),
                                      ]),
                                    ]),
                                    r._v(" "),
                                    o("div", { staticClass: "col-md-4" }, [
                                      o(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          o(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "module_name" },
                                            },
                                            [
                                              r._v(
                                                "\n                  " +
                                                  r._s(
                                                    r.formTranslation.webhooks
                                                      .module_name
                                                  ) +
                                                  "\n                  "
                                              ),
                                              o(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [r._v("*")]
                                              ),
                                            ]
                                          ),
                                          r._v(" "),
                                          o("multi-select", {
                                            attrs: {
                                              placeholder:
                                                r.formTranslation.webhooks
                                                  .select_module_name,
                                              id: "module_name",
                                              customLabel: function (t) {
                                                return r.customLabel(
                                                  t,
                                                  r.moduleNameOption
                                                );
                                              },
                                              options: r.moduleNameOptionsValue,
                                              loading:
                                                !r.moduleNameOptionsValue
                                                  .length,
                                            },
                                            on: {
                                              select: r.moduleNameChange,
                                              remove: r.moduleNameChange,
                                            },
                                            scopedSlots: r._u(
                                              [
                                                {
                                                  key: "noResult",
                                                  fn: function () {
                                                    return [
                                                      r._v(
                                                        "\n                  " +
                                                          r._s(
                                                            r.formTranslation
                                                              .common
                                                              .no_result_found
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ],
                                              null,
                                              !1,
                                              1780630358
                                            ),
                                            model: {
                                              value:
                                                r.formData.step_1.module_name,
                                              callback: function (t) {
                                                r.$set(
                                                  r.formData.step_1,
                                                  "module_name",
                                                  t
                                                );
                                              },
                                              expression:
                                                "formData.step_1.module_name",
                                            },
                                          }),
                                          r._v(" "),
                                          r.submitted &&
                                          !r.$v.formData.step_1.module_name
                                            .required
                                            ? o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  r._v(
                                                    "\n                  " +
                                                      r._s(
                                                        r.formTranslation
                                                          .webhooks
                                                          .module_name_required
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    r._v(" "),
                                    o("div", { staticClass: "col-md-4" }, [
                                      o(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          o(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "event_name" },
                                            },
                                            [
                                              r._v(
                                                "\n                  " +
                                                  r._s(
                                                    r.formTranslation.webhooks
                                                      .event_name
                                                  ) +
                                                  "\n                  "
                                              ),
                                              o(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [r._v("*")]
                                              ),
                                            ]
                                          ),
                                          r._v(" "),
                                          o("multi-select", {
                                            attrs: {
                                              placeholder: r.formData.step_1
                                                .module_name
                                                ? r.formTranslation.webhooks
                                                    .select_event_name
                                                : r.formTranslation.webhooks
                                                    .please_first_select_module,
                                              id: "event_name",
                                              customLabel: function (t) {
                                                return r.customLabel(
                                                  t,
                                                  r.eventNameOption
                                                );
                                              },
                                              options: r.eventNameOptionsValue,
                                            },
                                            scopedSlots: r._u(
                                              [
                                                {
                                                  key: "noResult",
                                                  fn: function () {
                                                    return [
                                                      r._v(
                                                        "\n                  " +
                                                          r._s(
                                                            r.formTranslation
                                                              .common
                                                              .no_result_found
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ],
                                              null,
                                              !1,
                                              1780630358
                                            ),
                                            model: {
                                              value:
                                                r.formData.step_1.event_name,
                                              callback: function (t) {
                                                r.$set(
                                                  r.formData.step_1,
                                                  "event_name",
                                                  t
                                                );
                                              },
                                              expression:
                                                "formData.step_1.event_name",
                                            },
                                          }),
                                          r._v(" "),
                                          r.submitted &&
                                          !r.$v.formData.step_1.event_name
                                            .required
                                            ? o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  r._v(
                                                    "\n                  " +
                                                      r._s(
                                                        r.formTranslation
                                                          .webhooks
                                                          .event_name_required
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    r._v(" "),
                                    o("div", { staticClass: "col-md-4" }, [
                                      o(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          o(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "status" },
                                            },
                                            [
                                              r._v(
                                                "\n                  " +
                                                  r._s(
                                                    r.formTranslation.common
                                                      .status
                                                  ) +
                                                  "\n                  "
                                              ),
                                              o(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [r._v("*")]
                                              ),
                                            ]
                                          ),
                                          r._v(" "),
                                          o("multi-select", {
                                            attrs: {
                                              id: "status",
                                              customLabel: function (t) {
                                                return r.customLabel(
                                                  t,
                                                  r.statusOptions
                                                );
                                              },
                                              options: r.statusOptionsValue,
                                              preselectFirst: !r.editID,
                                            },
                                            scopedSlots: r._u(
                                              [
                                                {
                                                  key: "noResult",
                                                  fn: function () {
                                                    return [
                                                      r._v(
                                                        "\n                  " +
                                                          r._s(
                                                            r.formTranslation
                                                              .common
                                                              .no_result_found
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ],
                                              null,
                                              !1,
                                              1780630358
                                            ),
                                            model: {
                                              value: r.formData.step_1.status,
                                              callback: function (t) {
                                                r.$set(
                                                  r.formData.step_1,
                                                  "status",
                                                  t
                                                );
                                              },
                                              expression:
                                                "formData.step_1.status",
                                            },
                                          }),
                                          r._v(" "),
                                          r.submitted &&
                                          !r.$v.formData.step_1.status.required
                                            ? o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  r._v(
                                                    "\n                  " +
                                                      r._s(
                                                        r.formTranslation
                                                          .appointments
                                                          .status_required
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ])
                                : r._e(),
                              r._v(" "),
                              2 === r.formStep
                                ? o("div", { staticClass: "row" }, [
                                    o("div", { staticClass: "col-md-12" }, [
                                      o(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          o(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "methods" },
                                            },
                                            [
                                              r._v(
                                                "\n                  " +
                                                  r._s(
                                                    r.formTranslation.webhooks
                                                      .webhooks_method
                                                  ) +
                                                  "\n                  "
                                              ),
                                              o(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [r._v("*")]
                                              ),
                                            ]
                                          ),
                                          r._v(" "),
                                          o(
                                            "b-input-group",
                                            {
                                              scopedSlots: r._u(
                                                [
                                                  {
                                                    key: "prepend",
                                                    fn: function () {
                                                      return [
                                                        o("multi-select", {
                                                          attrs: {
                                                            placeholder:
                                                              r.formTranslation
                                                                .webhooks
                                                                .select_webhooks_method,
                                                            id: "methods",
                                                            customLabel:
                                                              function (t) {
                                                                return r.customLabel(
                                                                  t,
                                                                  r.webhooksMethodsOption
                                                                );
                                                              },
                                                            options:
                                                              r.webhooksMethodsOptionValue,
                                                            loading:
                                                              !r
                                                                .webhooksMethodsOptionValue
                                                                .length,
                                                          },
                                                          scopedSlots: r._u(
                                                            [
                                                              {
                                                                key: "noResult",
                                                                fn: function () {
                                                                  return [
                                                                    r._v(
                                                                      "\n                  " +
                                                                        r._s(
                                                                          r
                                                                            .formTranslation
                                                                            .common
                                                                            .no_result_found
                                                                        ) +
                                                                        "\n                "
                                                                    ),
                                                                  ];
                                                                },
                                                                proxy: !0,
                                                              },
                                                            ],
                                                            null,
                                                            !1,
                                                            1780630358
                                                          ),
                                                          model: {
                                                            value:
                                                              r.formData.step_2
                                                                .methods,
                                                            callback: function (
                                                              t
                                                            ) {
                                                              r.$set(
                                                                r.formData
                                                                  .step_2,
                                                                "methods",
                                                                t
                                                              );
                                                            },
                                                            expression:
                                                              "formData.step_2.methods",
                                                          },
                                                        }),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  },
                                                ],
                                                null,
                                                !1,
                                                1202892462
                                              ),
                                            },
                                            [
                                              r._v(" "),
                                              o("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      r.formData.step_2
                                                        .webhook_data.url,
                                                    expression:
                                                      "formData.step_2.webhook_data.url",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "url",
                                                  autocomplete: "on",
                                                  placeholder:
                                                    r.formTranslation.webhooks
                                                      .url_placeholder,
                                                },
                                                domProps: {
                                                  value:
                                                    r.formData.step_2
                                                      .webhook_data.url,
                                                },
                                                on: {
                                                  input: function (t) {
                                                    t.target.composing ||
                                                      r.$set(
                                                        r.formData.step_2
                                                          .webhook_data,
                                                        "url",
                                                        t.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                          r._v(" "),
                                          r.submitted &&
                                          !r.$v.formData.step_2.webhook_data.url
                                            .required
                                            ? o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  r._v(
                                                    "\n                  " +
                                                      r._s(
                                                        r.formTranslation
                                                          .webhooks.url_required
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                          r._v(" "),
                                          r.submitted &&
                                          !r.$v.formData.step_2.methods.required
                                            ? o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  r._v(
                                                    "\n                  " +
                                                      r._s(
                                                        r.formTranslation
                                                          .webhooks
                                                          .webhooks_method_required
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    r._v(" "),
                                    o("div", { staticClass: "col-md-12" }, [
                                      o(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          o(
                                            "label",
                                            { attrs: { for: "header-data" } },
                                            [
                                              r._v(
                                                r._s(
                                                  r.formTranslation.common
                                                    .headers
                                                ) + "  \n                  "
                                              ),
                                              null !==
                                                (t =
                                                  r.formData.step_2
                                                    .webhook_data) &&
                                              void 0 !== t &&
                                              null !== (t = t.headers) &&
                                              void 0 !== t &&
                                              t.length
                                                ? r._e()
                                                : o(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary btn-sm",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (t) {
                                                          return r.pushData(
                                                            "headers"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      r._v(
                                                        r._s(
                                                          r.formTranslation
                                                            .common.add_header
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                            ]
                                          ),
                                          r._v(" "),
                                          r._l(
                                            r.formData.step_2.webhook_data
                                              .headers,
                                            function (t, e) {
                                              var n;
                                              return null !==
                                                (n =
                                                  r.formData.step_2
                                                    .webhook_data) &&
                                                void 0 !== n &&
                                                null !== (n = n.headers) &&
                                                void 0 !== n &&
                                                n.length
                                                ? o(
                                                    "div",
                                                    {
                                                      key: e,
                                                      staticClass: "row mb-2",
                                                    },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass: "col-5",
                                                        },
                                                        [
                                                          o("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value: t.key,
                                                                expression:
                                                                  "header.key",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                r
                                                                  .formTranslation
                                                                  .common
                                                                  .enter_key,
                                                            },
                                                            domProps: {
                                                              value: t.key,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  r.$set(
                                                                    t,
                                                                    "key",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                            },
                                                          }),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .headers.$each[e]
                                                            .key.required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.key_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ]
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-5",
                                                        },
                                                        [
                                                          o(
                                                            "multi-select",
                                                            {
                                                              attrs: {
                                                                placeholder:
                                                                  r
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .select_or_enter_value,
                                                                taggable: !0,
                                                                options:
                                                                  r.dynamicKeysOption,
                                                                loading:
                                                                  r.formData
                                                                    .step_1
                                                                    .event_name &&
                                                                  !r
                                                                    .dynamicKeysOption
                                                                    .length,
                                                              },
                                                              on: {
                                                                tag: function (
                                                                  e
                                                                ) {
                                                                  (t.value = e),
                                                                    r.dynamicKeysOption.push(
                                                                      e
                                                                    );
                                                                },
                                                              },
                                                              model: {
                                                                value: t.value,
                                                                callback:
                                                                  function (e) {
                                                                    r.$set(
                                                                      t,
                                                                      "value",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "header.value",
                                                              },
                                                            },
                                                            [
                                                              o(
                                                                "span",
                                                                {
                                                                  attrs: {
                                                                    slot: "noOptions",
                                                                  },
                                                                  slot: "noOptions",
                                                                },
                                                                [
                                                                  r._v(
                                                                    "\n                      " +
                                                                      r._s(
                                                                        r
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .select_event_name_to_dynamic_key
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .headers.$each[e]
                                                            .value.required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.value_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ],
                                                        1
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-2",
                                                        },
                                                        [
                                                          o(
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
                                                                "btn btn-outline-danger",
                                                              attrs: {
                                                                title:
                                                                  r
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .delete_header_data,
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    return r.popData(
                                                                      "headers",
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              o("i", {
                                                                staticClass:
                                                                  "fa fa-trash",
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : r._e();
                                            }
                                          ),
                                          r._v(" "),
                                          null !==
                                            (e =
                                              r.formData.step_2.webhook_data) &&
                                          void 0 !== e &&
                                          null !== (e = e.headers) &&
                                          void 0 !== e &&
                                          e.length
                                            ? o(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary btn-sm",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function (t) {
                                                      return r.pushData(
                                                        "headers"
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.formTranslation.common
                                                        .add_header
                                                    )
                                                  ),
                                                ]
                                              )
                                            : r._e(),
                                        ],
                                        2
                                      ),
                                    ]),
                                    r._v(" "),
                                    r.selectedMethodType === r.httpGetMethodName
                                      ? o("div", { staticClass: "col-md-12" }, [
                                          o(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              o(
                                                "label",
                                                {
                                                  attrs: {
                                                    for: "query-params",
                                                  },
                                                },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.formTranslation.common
                                                        .query_parameters
                                                    ) + "  \n                  "
                                                  ),
                                                  null !== (n = r.formData) &&
                                                  void 0 !== n &&
                                                  null !== (n = n.step_2) &&
                                                  void 0 !== n &&
                                                  null !==
                                                    (n = n.webhook_data) &&
                                                  void 0 !== n &&
                                                  null !==
                                                    (n = n.query_parameters) &&
                                                  void 0 !== n &&
                                                  n.length
                                                    ? r._e()
                                                    : o(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary btn-sm",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              t
                                                            ) {
                                                              return r.pushData(
                                                                "query_parameters"
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          r._v(
                                                            r._s(
                                                              r.formTranslation
                                                                .common
                                                                .add_query_parameter
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                ]
                                              ),
                                              r._v(" "),
                                              r._l(
                                                r.formData.step_2.webhook_data
                                                  .query_parameters,
                                                function (t, e) {
                                                  return o(
                                                    "div",
                                                    {
                                                      key: e,
                                                      staticClass: "row mb-2",
                                                    },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-5",
                                                        },
                                                        [
                                                          o("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value: t.key,
                                                                expression:
                                                                  "param.key",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                r
                                                                  .formTranslation
                                                                  .common
                                                                  .enter_key,
                                                            },
                                                            domProps: {
                                                              value: t.key,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  r.$set(
                                                                    t,
                                                                    "key",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                            },
                                                          }),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .query_parameters
                                                            .$each[e].key
                                                            .required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.key_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ]
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-5",
                                                        },
                                                        [
                                                          o(
                                                            "multi-select",
                                                            {
                                                              attrs: {
                                                                placeholder:
                                                                  r
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .select_or_enter_value,
                                                                taggable: !0,
                                                                options:
                                                                  r.dynamicKeysOption,
                                                                loading:
                                                                  r.formData
                                                                    .step_1
                                                                    .event_name &&
                                                                  !r
                                                                    .dynamicKeysOption
                                                                    .length,
                                                              },
                                                              on: {
                                                                tag: function (
                                                                  e
                                                                ) {
                                                                  (t.value = e),
                                                                    r.dynamicKeysOption.push(
                                                                      e
                                                                    );
                                                                },
                                                              },
                                                              model: {
                                                                value: t.value,
                                                                callback:
                                                                  function (e) {
                                                                    r.$set(
                                                                      t,
                                                                      "value",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "param.value",
                                                              },
                                                            },
                                                            [
                                                              o(
                                                                "span",
                                                                {
                                                                  attrs: {
                                                                    slot: "noOptions",
                                                                  },
                                                                  slot: "noOptions",
                                                                },
                                                                [
                                                                  r._v(
                                                                    "\n                      " +
                                                                      r._s(
                                                                        r
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .select_event_name_to_dynamic_key
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .query_parameters
                                                            .$each[e].value
                                                            .required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.value_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ],
                                                        1
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-2",
                                                        },
                                                        [
                                                          o(
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
                                                                "btn btn-outline-danger",
                                                              attrs: {
                                                                title:
                                                                  r
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .delete_query_parameter,
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    return r.popData(
                                                                      "query_parameters",
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              o("i", {
                                                                staticClass:
                                                                  "fa fa-trash",
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  );
                                                }
                                              ),
                                              r._v(" "),
                                              null !== (i = r.formData) &&
                                              void 0 !== i &&
                                              null !== (i = i.step_2) &&
                                              void 0 !== i &&
                                              null !== (i = i.webhook_data) &&
                                              void 0 !== i &&
                                              null !==
                                                (i = i.query_parameters) &&
                                              void 0 !== i &&
                                              i.length
                                                ? o(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary btn-sm",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (t) {
                                                          return r.pushData(
                                                            "query_parameters"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      r._v(
                                                        "\n                  " +
                                                          r._s(
                                                            r.formTranslation
                                                              .common
                                                              .add_query_parameter
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ]
                                                  )
                                                : r._e(),
                                            ],
                                            2
                                          ),
                                        ])
                                      : o("div", { staticClass: "col-md-12" }, [
                                          o(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              o(
                                                "label",
                                                {
                                                  attrs: {
                                                    for: "content-type",
                                                  },
                                                },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.$t(
                                                        "webhooks.content_type"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                              r._v(" "),
                                              o("multi-select", {
                                                attrs: {
                                                  placeholder:
                                                    r.formTranslation.webhooks
                                                      .select_content_type,
                                                  id: "content-type",
                                                  options: r.contentTypeOption,
                                                  trackBy: "value",
                                                  label: "text",
                                                },
                                                scopedSlots: r._u(
                                                  [
                                                    {
                                                      key: "noResult",
                                                      fn: function () {
                                                        return [
                                                          r._v(
                                                            "\n                  " +
                                                              r._s(
                                                                r
                                                                  .formTranslation
                                                                  .common
                                                                  .no_result_found
                                                              ) +
                                                              "\n                "
                                                          ),
                                                        ];
                                                      },
                                                      proxy: !0,
                                                    },
                                                  ],
                                                  null,
                                                  !1,
                                                  1780630358
                                                ),
                                                model: {
                                                  value:
                                                    r.formData.step_2
                                                      .webhook_data
                                                      .content_type,
                                                  callback: function (t) {
                                                    r.$set(
                                                      r.formData.step_2
                                                        .webhook_data,
                                                      "content_type",
                                                      t
                                                    );
                                                  },
                                                  expression:
                                                    "formData.step_2.webhook_data.content_type",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]),
                                    r._v(" "),
                                    r.selectedMethodType !==
                                      r.httpGetMethodName &&
                                    "json_data" === r.selectedContentType
                                      ? o("div", { staticClass: "col-md-12" }, [
                                          o(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              o(
                                                "label",
                                                { attrs: { for: "json_body" } },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.$t("webhooks.json_data")
                                                    )
                                                  ),
                                                ]
                                              ),
                                              r._v(" "),
                                              o("vue-json-editor", {
                                                attrs: {
                                                  showBtns: !1,
                                                  mode: "code",
                                                  expandedOnStart: !0,
                                                },
                                                on: {
                                                  "json-change":
                                                    r.jsonEditorChange,
                                                  "has-error": r.jsonError,
                                                },
                                                model: {
                                                  value:
                                                    r.formData.step_2
                                                      .webhook_data.json_data,
                                                  callback: function (t) {
                                                    r.$set(
                                                      r.formData.step_2
                                                        .webhook_data,
                                                      "json_data",
                                                      t
                                                    );
                                                  },
                                                  expression:
                                                    "formData.step_2.webhook_data.json_data",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ])
                                      : r._e(),
                                    r._v(" "),
                                    r.selectedMethodType !==
                                      r.httpGetMethodName &&
                                    "form_data" === r.selectedContentType
                                      ? o("div", { staticClass: "col-md-12" }, [
                                          o(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              o(
                                                "label",
                                                { attrs: { for: "form_data" } },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.$t("webhooks.form_data")
                                                    ) + "  \n                  "
                                                  ),
                                                  r.formData.step_2.webhook_data
                                                    .form_data.length
                                                    ? r._e()
                                                    : o(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary btn-sm",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              t
                                                            ) {
                                                              return r.pushData(
                                                                "form_data"
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          r._v(
                                                            "\n                    " +
                                                              r._s(
                                                                r
                                                                  .formTranslation
                                                                  .webhooks
                                                                  .add_form_data
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ]
                                                      ),
                                                ]
                                              ),
                                              r._v(" "),
                                              r._l(
                                                r.formData.step_2.webhook_data
                                                  .form_data,
                                                function (t, e) {
                                                  return o(
                                                    "div",
                                                    {
                                                      key: e,
                                                      staticClass: "row mb-2",
                                                    },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-5",
                                                        },
                                                        [
                                                          o("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value: t.key,
                                                                expression:
                                                                  "form_data.key",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                r
                                                                  .formTranslation
                                                                  .common
                                                                  .enter_key,
                                                            },
                                                            domProps: {
                                                              value: t.key,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  r.$set(
                                                                    t,
                                                                    "key",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                            },
                                                          }),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .form_data.$each[e]
                                                            .key.required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.key_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ]
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-5",
                                                        },
                                                        [
                                                          o(
                                                            "multi-select",
                                                            {
                                                              attrs: {
                                                                placeholder:
                                                                  "Select or enter value",
                                                                taggable: !0,
                                                                options:
                                                                  r.dynamicKeysOption,
                                                                loading:
                                                                  r.formData
                                                                    .step_1
                                                                    .event_name &&
                                                                  !r
                                                                    .dynamicKeysOption
                                                                    .length,
                                                              },
                                                              on: {
                                                                tag: function (
                                                                  e
                                                                ) {
                                                                  (t.value = e),
                                                                    r.dynamicKeysOption.push(
                                                                      e
                                                                    );
                                                                },
                                                              },
                                                              model: {
                                                                value: t.value,
                                                                callback:
                                                                  function (e) {
                                                                    r.$set(
                                                                      t,
                                                                      "value",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "form_data.value",
                                                              },
                                                            },
                                                            [
                                                              o(
                                                                "span",
                                                                {
                                                                  attrs: {
                                                                    slot: "noOptions",
                                                                  },
                                                                  slot: "noOptions",
                                                                },
                                                                [
                                                                  r._v(
                                                                    "\n                        " +
                                                                      r._s(
                                                                        r
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .select_event_name_to_dynamic_key
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          r._v(" "),
                                                          r.submitted &&
                                                          !r.$v.formData.step_2
                                                            .webhook_data
                                                            .form_data.$each[e]
                                                            .value.required
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "invalid-feedback",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      r.$t(
                                                                        "webhooks.value_required"
                                                                      )
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : r._e(),
                                                        ],
                                                        1
                                                      ),
                                                      r._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-2",
                                                        },
                                                        [
                                                          o(
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
                                                                "btn btn-outline-danger",
                                                              attrs: {
                                                                title:
                                                                  r
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .delete_form_data,
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    return r.popData(
                                                                      "form_data",
                                                                      e
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              o("i", {
                                                                staticClass:
                                                                  "fa fa-trash",
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  );
                                                }
                                              ),
                                              r._v(" "),
                                              r.formData.step_2.webhook_data
                                                .form_data.length
                                                ? o(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary btn-sm",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (t) {
                                                          return r.pushData(
                                                            "form_data"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      r._v(
                                                        "\n                  " +
                                                          r._s(
                                                            r.formTranslation
                                                              .webhooks
                                                              .add_form_data
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ]
                                                  )
                                                : r._e(),
                                            ],
                                            2
                                          ),
                                        ])
                                      : r._e(),
                                    r._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "col-md-12" },
                                      [
                                        o("p", { staticClass: "mb-0" }, [
                                          r._v(
                                            "\n                " +
                                              r._s(
                                                r.formTranslation.settings
                                                  .dynamic_keys_list
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                        r._v(" "),
                                        r._l(
                                          r.dynamicKeysOption,
                                          function (t, e) {
                                            return o(
                                              "button",
                                              {
                                                directives: [
                                                  {
                                                    name: "b-tooltip",
                                                    rawName:
                                                      "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                  },
                                                ],
                                                key: e,
                                                staticClass:
                                                  "btn btn-sm btn-primary mt-2",
                                                attrs: {
                                                  title: r.copyToolTipText,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      r.copyToClipboard(
                                                        t,
                                                        r.formTranslation
                                                          .webhooks
                                                          .template_dynamic_key
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                r._v(
                                                  "\n                " +
                                                    r._s(t) +
                                                    "\n              "
                                                ),
                                              ]
                                            );
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                  ])
                                : r._e(),
                            ]
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
          null,
          null
        ).exports);
    function Li(t) {
      return (Li =
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
    function qi() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          Ei(
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
          : (Ei((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), Ei(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        Ei(u, "constructor", c),
        Ei(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        Ei(c, r, "GeneratorFunction"),
        Ei(u),
        Ei(u, r, "Generator"),
        Ei(u, i, function () {
          return this;
        }),
        Ei(u, "toString", function () {
          return "[object Generator]";
        }),
        (qi = function () {
          return { w: o, m: p };
        })()
      );
    }
    function Ei(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (Ei = function (t, e, n, i) {
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
            Ei(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function ji(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function Pi(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = t.apply(e, n);
          function a(t) {
            ji(o, i, r, a, s, "next", t);
          }
          function s(t) {
            ji(o, i, r, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Ri(t, e) {
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
    function Ii(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ri(Object(n), !0).forEach(function (e) {
              Wi(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ri(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Wi(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != Li(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != Li(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Li(e) ? e : e + "";
        })(e)) in t
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
    var Ni = {
        components: { ModalPopup: u.a, vueJsonEditor: yi },
        data: function () {
          return {
            name: "webhooks",
            column: [],
            rows: [],
            totalRows: 0,
            isRowLoading: !1,
            isColumnLoading: !1,
            serverParams: {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            deleteRowId: -1,
            apiEndpoint: {
              list: "webhooks_log_list",
              column: "webhooks_log_column",
              delete: "webhooks_log_delete",
            },
            delete_ele: "webhook_log_delete_",
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            webhook_id: -1,
            webhook_data: {},
            openModal: !1,
            modalData: {},
          };
        },
        mounted: function () {
          var t;
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            null != this &&
              null !== (t = this.userData) &&
              void 0 !== t &&
              null !== (t = t.addOns) &&
              void 0 !== t &&
              t.webhooks &&
              this.$route.params.webhook_id &&
              ((this.webhook_id = this.$route.params.webhook_id), this.init());
        },
        methods: Ii(
          Ii(
            Ii({}, Jn),
            {},
            {
              init: function () {
                this.getTableColumn(),
                  this.getTableData(),
                  (this.globalCheckboxApplyData =
                    this.helperDefaultGlobalCheckboxApplyData(this.name)),
                  (this.globalCheckboxApplyDataActions =
                    this.helperDefaultGlobalCheckboxApplyDataActions());
              },
              getTableData: function () {
                var t = this;
                return Pi(
                  qi().m(function e() {
                    var n, i;
                    return qi().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (t.isRowLoading = !0),
                              (t.serverParams.webhook_id = t.webhook_id),
                              (e.n = 1),
                              Object(Zn.c)(t.apiEndpoint.list, t.serverParams)
                            );
                          case 1:
                            (i = e.v),
                              (t.webhook_data =
                                (null == i ||
                                null === (n = i.response) ||
                                void 0 === n
                                  ? void 0
                                  : n.webhook_data) || {}),
                              (t.rows = i.rows || []),
                              (t.totalRows = i.totalRows || 0),
                              (t.isRowLoading = !1);
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  })
                )();
              },
              deleteData: function (t) {
                var e = this,
                  n = {
                    id: t,
                    delete_ele: this.delete_ele,
                    content_message:
                      this.formTranslation.webhooks.delete_webhooks,
                    endpoint: this.apiEndpoint.delete,
                  };
                Object(Qn.a)(
                  n,
                  function () {
                    e.getTableData();
                  },
                  function () {
                    e.deleteRowId = -1;
                  }
                );
              },
              updateParamsAndTable: function (t) {
                (this.serverParams = Object.assign({}, this.serverParams, t)),
                  this.getTableData();
              },
              onPageChange: function (t) {
                this.updateParamsAndTable({ page: t.currentPage });
              },
              onPerPageChange: function (t) {
                this.oldServerParams.perPage !== t.currentPerPage &&
                  ((this.oldServerParams.perPage = t.currentPerPage),
                  this.updateParamsAndTable({
                    perPage: t.currentPerPage,
                    page: t.currentPage,
                  }));
              },
              onSortChange: function (t) {
                this.updateParamsAndTable({ sort: t });
              },
              globalFilter: _.debounce(function (t) {
                this.oldServerParams.searchTerm !== t.searchTerm &&
                  ((this.oldServerParams.searchTerm = t.searchTerm),
                  this.updateParamsAndTable({
                    searchTerm: t.searchTerm,
                    perPage: this.serverParams.perPage,
                    page: 1,
                  }));
              }, 500),
              onColumnFilter: _.debounce(function (t) {
                var e = !0,
                  n = !0;
                Object.values(t.columnFilters).map(function (t) {
                  t && (e = !1);
                }),
                  Object.values(this.oldServerParams.columnFilters).map(
                    function (t) {
                      t && (n = !1);
                    }
                  ),
                  (e && n) ||
                    ((this.oldServerParams.columnFilters = Object.assign(
                      {},
                      t.columnFilters
                    )),
                    this.updateParamsAndTable({
                      columnFilters: t.columnFilters,
                      perPage: this.serverParams.perPage,
                      page: 1,
                    }));
              }, 300),
              viewLogData: function (t) {
                (this.modalData = t), (this.openModal = !0);
              },
              formatLogValue: function (t) {
                var e = this;
                return "object" === Li(t) && null !== t
                  ? Array.isArray(t)
                    ? t
                        .map(function (t) {
                          return "<div>".concat(e.formatLogValue(t), "</div>");
                        })
                        .join("")
                    : "<pre>".concat(JSON.stringify(t, null, 2), "</pre>")
                  : t;
              },
            },
            Object(ti.b)("tableModule", ["fetchTableColumns"])
          ),
          {},
          {
            getTableColumn: function () {
              var t = this;
              return Pi(
                qi().m(function e() {
                  var n;
                  return qi().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (t.isColumnLoading = !0),
                            (e.n = 1),
                            t.fetchTableColumns({
                              endpoint: t.apiEndpoint.column,
                              module: "webhooks_log",
                            })
                          );
                        case 1:
                          (n = e.v) && (t.column = Object.values(n)),
                            (t.isColumnLoading = !1);
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
          }
        ),
        computed: {
          userData: function () {
            var t, e;
            return null != this &&
              null !== (t = this.$store) &&
              void 0 !== t &&
              null !== (t = t.state) &&
              void 0 !== t &&
              t.userDataModule &&
              null != this &&
              null !== (e = this.$store) &&
              void 0 !== e &&
              null !== (e = e.state) &&
              void 0 !== e &&
              null !== (e = e.userDataModule) &&
              void 0 !== e &&
              e.user
              ? this.$store.state.userDataModule.user
              : [];
          },
        },
      },
      Bi = Object(h.a)(
        Ni,
        function () {
          var t,
            e,
            n,
            i,
            r,
            o = this,
            a = o._self._c;
          return a(
            "b-row",
            [
              a(
                "b-col",
                { attrs: { sm: "12" } },
                [
                  a(
                    "b-overlay",
                    {
                      attrs: {
                        show: !(
                          null !== (t = o.userData) &&
                          void 0 !== t &&
                          null !== (t = t.addOns) &&
                          void 0 !== t &&
                          t.webhooks
                        ),
                        variant: "white",
                        opacity: o.overlayOpacity,
                      },
                      scopedSlots: o._u([
                        {
                          key: "overlay",
                          fn: function () {
                            return [
                              a("overlay-message", {
                                attrs: { addon_type: o.name },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      o._v(" "),
                      a(
                        "b-card",
                        {
                          staticClass: "p-0 shadow",
                          attrs: {
                            "body-class": "p-0",
                            "header-tag": "header",
                            "footer-tag": "footer",
                          },
                          scopedSlots: o._u([
                            {
                              key: "header",
                              fn: function () {
                                var t, e;
                                return [
                                  a(
                                    "b-row",
                                    [
                                      a(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "8", lg: "8" },
                                        },
                                        [
                                          a("h3", { staticClass: "mb-0" }, [
                                            o._v(
                                              "\n                " +
                                                o._s(
                                                  ((null ===
                                                    (t = o.webhook_data) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.name) || "") +
                                                    " " +
                                                    ((null ===
                                                      (e =
                                                        o.formTranslation
                                                          .webhooks) ||
                                                    void 0 === e
                                                      ? void 0
                                                      : e.webhooks_log_list) ||
                                                      "webhook logs list")
                                                ) +
                                                "\n              "
                                            ),
                                          ]),
                                        ]
                                      ),
                                      o._v(" "),
                                      a(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "4", lg: "4" },
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-end",
                                            },
                                            [
                                              a(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  attrs: {
                                                    to: {
                                                      name: "".concat(o.name),
                                                    },
                                                  },
                                                },
                                                [
                                                  a("i", {
                                                    staticClass:
                                                      "fa fa-angle-double-left",
                                                  }),
                                                  o._v(
                                                    "\n                  " +
                                                      o._s(
                                                        o.formTranslation.common
                                                          .back
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ]),
                        },
                        [
                          o._v(" "),
                          o.openModal
                            ? a(
                                "ModalPopup",
                                {
                                  attrs: {
                                    modalId: "webhook_log_data",
                                    modalSize: "lg",
                                    openModal: o.openModal,
                                    modalTitle:
                                      (null === (e = o.webhook_data) ||
                                      void 0 === e
                                        ? void 0
                                        : e.name) +
                                      (null ===
                                        (n = o.formTranslation.webhooks) ||
                                      void 0 === n
                                        ? void 0
                                        : n.log_entry),
                                  },
                                  on: {
                                    closeModal: function (t) {
                                      (o.openModal = !1), (o.modalData = {});
                                    },
                                  },
                                },
                                [
                                  a("div", { staticClass: "log-entry" }, [
                                    a("h3", { staticClass: "text-center" }, [
                                      o._v("Webhook details"),
                                    ]),
                                    o._v(" "),
                                    a("div", { staticClass: "row" }, [
                                      a("div", { staticClass: "col-md-6" }, [
                                        a("p", { staticClass: "mb-0" }, [
                                          a(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              o._v(
                                                o._s(o.$t("webhooks.id")) + ":"
                                              ),
                                            ]
                                          ),
                                          o._v(
                                            " " +
                                              o._s(
                                                o.modalData.id ||
                                                  o.$t("webhooks.n_a")
                                              )
                                          ),
                                        ]),
                                      ]),
                                      o._v(" "),
                                      a("div", { staticClass: "col-md-6" }, [
                                        a("p", { staticClass: "mb-0" }, [
                                          a(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              o._v(
                                                o._s(
                                                  o.$t("webhooks.module_id")
                                                ) + ":"
                                              ),
                                            ]
                                          ),
                                          o._v(
                                            " " +
                                              o._s(
                                                o.modalData.module_id ||
                                                  o.$t("webhooks.n_a")
                                              )
                                          ),
                                        ]),
                                      ]),
                                      o._v(" "),
                                      a("div", { staticClass: "col-md-6" }, [
                                        a("p", { staticClass: "mb-0" }, [
                                          a(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              o._v(
                                                o._s(
                                                  o.$t("webhooks.webhooks_id")
                                                ) + ":"
                                              ),
                                            ]
                                          ),
                                          o._v(
                                            " " +
                                              o._s(
                                                o.modalData.webhook_id ||
                                                  o.$t("webhooks.n_a")
                                              )
                                          ),
                                        ]),
                                      ]),
                                      o._v(" "),
                                      a("div", { staticClass: "col-md-6" }, [
                                        a("p", { staticClass: "mb-0" }, [
                                          a(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              o._v(
                                                o._s(
                                                  o.$t("webhooks.created_at")
                                                ) + ":"
                                              ),
                                            ]
                                          ),
                                          o._v(
                                            " " +
                                              o._s(
                                                o.modalData.created_at ||
                                                  o.$t("webhooks.n_a")
                                              )
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    o._v(" "),
                                    null !== (i = o.modalData) &&
                                    void 0 !== i &&
                                    null !== (i = i.log_data) &&
                                    void 0 !== i &&
                                    i.request
                                      ? a("div", [
                                          a("hr"),
                                          o._v(" "),
                                          a(
                                            "h3",
                                            { staticClass: "text-center" },
                                            [
                                              o._v(
                                                o._s(o.$t("webhooks.request"))
                                              ),
                                            ]
                                          ),
                                          o._v(" "),
                                          a("div", { staticClass: "row" }, [
                                            a(
                                              "div",
                                              { staticClass: "col-12" },
                                              [
                                                a("vue-json-editor", {
                                                  attrs: {
                                                    showBtns: !1,
                                                    mode: "code",
                                                    expandedOnStart: !0,
                                                  },
                                                  model: {
                                                    value:
                                                      o.modalData.log_data
                                                        .request,
                                                    callback: function (t) {
                                                      o.$set(
                                                        o.modalData.log_data,
                                                        "request",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "modalData.log_data.request",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]),
                                        ])
                                      : o._e(),
                                    o._v(" "),
                                    null !== (r = o.modalData) &&
                                    void 0 !== r &&
                                    null !== (r = r.log_data) &&
                                    void 0 !== r &&
                                    r.response
                                      ? a("div", [
                                          a("hr"),
                                          o._v(" "),
                                          a(
                                            "h3",
                                            { staticClass: "text-center" },
                                            [
                                              o._v(
                                                o._s(o.$t("webhooks.response"))
                                              ),
                                            ]
                                          ),
                                          o._v(" "),
                                          a("div", { staticClass: "row" }, [
                                            a(
                                              "div",
                                              { staticClass: "col-12" },
                                              [
                                                a("vue-json-editor", {
                                                  attrs: {
                                                    showBtns: !1,
                                                    mode: "code",
                                                    expandedOnStart: !0,
                                                  },
                                                  model: {
                                                    value:
                                                      o.modalData.log_data
                                                        .response,
                                                    callback: function (t) {
                                                      o.$set(
                                                        o.modalData.log_data,
                                                        "response",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "modalData.log_data.response",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]),
                                        ])
                                      : o._e(),
                                  ]),
                                ]
                              )
                            : o._e(),
                          o._v(" "),
                          a(
                            "b-row",
                            [
                              a(
                                "b-col",
                                { attrs: { sm: "12", md: "12", lg: "12" } },
                                [
                                  a(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            o.isColumnLoading || o.isRowLoading,
                                          expression:
                                            "isColumnLoading || isRowLoading",
                                        },
                                      ],
                                    },
                                    [a("loader-component-2")],
                                    1
                                  ),
                                  o._v(" "),
                                  a(
                                    "div",
                                    { attrs: { id: o.name + "Print" } },
                                    [
                                      a(
                                        "vue-good-table",
                                        {
                                          ref: "dataTable",
                                          attrs: {
                                            columns: o.column,
                                            rows: o.rows,
                                            mode: "remote",
                                            "search-options": {
                                              enabled: !0,
                                              placeholder:
                                                o.formTranslation.common
                                                  .search_webhooks_log_data_global_placeholder,
                                            },
                                            totalRows: o.totalRows,
                                            "pagination-options": {
                                              enabled: !0,
                                              mode: "pages",
                                            },
                                            "select-options": {
                                              enabled: o.column,
                                              selectOnCheckboxOnly: !0,
                                              selectionInfoClass:
                                                "text-primary bg-white",
                                              selectionText:
                                                o.formTranslation.common
                                                  .rows_selected,
                                              clearSelectionText:
                                                o.formTranslation.common.clear,
                                              disableSelectInfo: !1,
                                              selectAllByGroup: !0,
                                            },
                                            styleClass: "vgt-table striped",
                                            compactMode: "",
                                          },
                                          on: {
                                            "on-sort-change": o.onSortChange,
                                            "on-column-filter":
                                              o.onColumnFilter,
                                            "on-page-change": o.onPageChange,
                                            "on-per-page-change":
                                              o.onPerPageChange,
                                            "on-search": o.globalFilter,
                                            "on-selected-rows-change":
                                              function (t) {
                                                o.globalCheckboxApplyData.data =
                                                  t;
                                              },
                                          },
                                          scopedSlots: o._u([
                                            {
                                              key: "table-row",
                                              fn: function (t) {
                                                return [
                                                  "actions" === t.column.field
                                                    ? a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          a(
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
                                                                  o
                                                                    .formTranslation
                                                                    .common
                                                                    .view,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return o.viewLogData(
                                                                      t.row
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              a("i", {
                                                                staticClass:
                                                                  "fa fa-eye",
                                                              }),
                                                            ]
                                                          ),
                                                          o._v(" "),
                                                          a(
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
                                                                id:
                                                                  o.delete_ele +
                                                                  t.row.id,
                                                                title:
                                                                  o
                                                                    .formTranslation
                                                                    .clinic_schedule
                                                                    .dt_lbl_dlt,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return o.deleteData(
                                                                      t.row.id
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              a("i", {
                                                                staticClass:
                                                                  "fa fa-trash",
                                                              }),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : "status" ===
                                                      t.column.field
                                                    ? a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          "1" ===
                                                          t.row.status.toString()
                                                            ? a(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success",
                                                                },
                                                                [
                                                                  o._v(
                                                                    "\n                      " +
                                                                      o._s(
                                                                        o
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .success
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : o._e(),
                                                          o._v(" "),
                                                          "0" ===
                                                          t.row.status.toString()
                                                            ? a(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  o._v(
                                                                    "\n                      " +
                                                                      o._s(
                                                                        o
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .failed
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : o._e(),
                                                        ]
                                                      )
                                                    : a("div", [
                                                        o._v(
                                                          "\n                    " +
                                                            o._s(
                                                              t.formattedRow[
                                                                t.column.field
                                                              ]
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                      ]),
                                                ];
                                              },
                                            },
                                          ]),
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass: "text-center",
                                              attrs: { slot: "emptystate" },
                                              slot: "emptystate",
                                            },
                                            [
                                              o._v(
                                                "\n                  " +
                                                  o._s(
                                                    o.isColumnLoading ||
                                                      o.isRowLoading
                                                      ? o.formTranslation
                                                          .webhooks.loading
                                                      : o.formTranslation.common
                                                          .no_data_found
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                          o._v(" "),
                                          a(
                                            "div",
                                            {
                                              attrs: {
                                                slot: "selected-row-actions",
                                              },
                                              slot: "selected-row-actions",
                                            },
                                            [
                                              a(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end align-items-center",
                                                },
                                                [
                                                  a(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            o
                                                              .globalCheckboxApplyData
                                                              .action_perform,
                                                          expression:
                                                            "globalCheckboxApplyData.action_perform",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      on: {
                                                        change: function (t) {
                                                          var e =
                                                            Array.prototype.filter
                                                              .call(
                                                                t.target
                                                                  .options,
                                                                function (t) {
                                                                  return t.selected;
                                                                }
                                                              )
                                                              .map(function (
                                                                t
                                                              ) {
                                                                return "_value" in
                                                                  t
                                                                  ? t._value
                                                                  : t.value;
                                                              });
                                                          o.$set(
                                                            o.globalCheckboxApplyData,
                                                            "action_perform",
                                                            t.target.multiple
                                                              ? e
                                                              : e[0]
                                                          );
                                                        },
                                                      },
                                                    },
                                                    o._l(
                                                      o.globalCheckboxApplyDataActions,
                                                      function (t) {
                                                        return a(
                                                          "option",
                                                          {
                                                            domProps: {
                                                              value: t.value,
                                                            },
                                                          },
                                                          [
                                                            o._v(
                                                              "\n                        " +
                                                                o._s(t.label) +
                                                                "\n                      "
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    0
                                                  ),
                                                  o._v(" "),
                                                  a(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "ml-2 btn btn-sm btn-primary",
                                                      on: {
                                                        click: function (t) {
                                                          return o.helperGlobalAction(
                                                            t,
                                                            o.getTableData
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      o._v(
                                                        "\n                      " +
                                                          o._s(
                                                            o.formTranslation
                                                              .common.apply
                                                          ) +
                                                          "\n                    "
                                                      ),
                                                    ]
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
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
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
      ).exports;
    function Fi() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          $i(
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
          : ($i((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), $i(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        $i(u, "constructor", c),
        $i(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        $i(c, r, "GeneratorFunction"),
        $i(u),
        $i(u, r, "Generator"),
        $i(u, i, function () {
          return this;
        }),
        $i(u, "toString", function () {
          return "[object Generator]";
        }),
        (Fi = function () {
          return { w: o, m: p };
        })()
      );
    }
    function $i(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      ($i = function (t, e, n, i) {
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
            $i(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function Hi(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    r.a.use(Je.a), r.a.use(o.b);
    var Yi = [
        { path: "/", name: "dashboard", component: A, meta: { label: "Home" } },
        {
          path: "/appointment-list",
          name: "appointment-list",
          meta: { label: "Appointments" },
          component: k,
        },
        {
          path: "/setup",
          name: "setup",
          meta: { setup: !0, fullPage: !0 },
          component: Q,
          children: [
            {
              path: "/setup/step-1",
              name: "setup.step1",
              meta: { setup: !0, fullPage: !0 },
              component: D,
            },
            {
              path: "/setup/step-2",
              name: "setup.step2",
              meta: { setup: !0, fullPage: !0 },
              component: K,
            },
            {
              path: "/setup/step-3",
              name: "setup.step3",
              meta: { setup: !0, fullPage: !0 },
              component: q,
            },
            {
              path: "/setup/clinic/admin",
              name: "setup.clinic.admin",
              meta: { setup: !0, fullPage: !0 },
              component: Ye,
            },
            {
              path: "/setup/step-4",
              name: "setup.step4",
              meta: { setup: !0, fullPage: !0 },
              component: j,
            },
            {
              path: "/setup/step-5",
              name: "setup.step5",
              meta: { setup: !0, fullPage: !0 },
              component: R,
            },
            {
              path: "/setup/step-6",
              name: "setup.step6",
              meta: { setup: !0, fullPage: !0 },
              component: N,
            },
          ],
        },
        { path: "/403", name: "403", component: S, meta: { fullPage: !0 } },
        { path: "/update", name: "update", component: Nt },
        {
          path: "/static-data",
          name: "static-data",
          component: et,
          meta: {
            label: "Static Data",
            permission: "static_data_list",
            module: "static_data",
          },
        },
        {
          path: "/static-data/create",
          name: "static-data.create",
          component: nt.a,
          meta: {
            label: "Add Static Data",
            permission: "static_data_add",
            module: "static_data",
          },
        },
        {
          path: "/static-data/edit/:id",
          name: "static-data.edit",
          component: nt.a,
          meta: {
            label: "Edit Static Data",
            permission: "static_data_edit",
            module: "static_data",
          },
        },
        {
          path: "/service",
          name: "service",
          component: rt,
          meta: {
            label: "Services",
            permission: "service_list",
            module: "service",
          },
        },
        {
          path: "/service/create",
          name: "service.create",
          component: ot.a,
          meta: {
            label: "Add Service",
            permission: "service_add",
            module: "service",
          },
        },
        {
          path: "/service/edit/:id",
          name: "service.edit",
          component: ot.a,
          meta: {
            label: "Edit Service",
            permission: "service_edit",
            module: "service",
          },
        },
        {
          path: "/doctor",
          name: "doctor",
          component: st,
          meta: {
            label: "Doctors",
            permission: "doctor_list",
            module: "doctor",
          },
        },
        {
          path: "/doctor/create",
          name: "doctor.create",
          component: ct,
          meta: {
            label: "Add Doctor",
            permission: "doctor_add",
            module: "doctor",
          },
        },
        {
          path: "/doctor/edit/:id",
          name: "doctor.edit",
          component: ct,
          meta: {
            label: "Edit Doctor",
            permission: "doctor_edit",
            module: "doctor",
          },
        },
        {
          path: "/doctor/profile",
          name: "doctor.profile",
          component: ut,
          meta: {
            label: "Profile",
            permission: "doctor_profile",
            module: "doctor",
          },
        },
        {
          path: "/doctor/zoom-configuration",
          name: "doctor.zoom-configuration",
          component: Ke,
          meta: {
            label: "Zoom configuration",
            permission: "doctor_profile",
            module: "doctor",
          },
        },
        {
          path: "/receptionist",
          name: "receptionist",
          component: Zt,
          meta: {
            label: "Receptionists",
            permission: "receptionist_list",
            module: "receptionist",
            dynamicModule: "receptionist",
          },
        },
        {
          path: "/receptionist/create",
          name: "receptionist.create",
          component: Qt,
          meta: {
            label: "Add Receptionist",
            permission: "receptionist_add",
            module: "receptionist",
            dynamicModule: "receptionist",
          },
        },
        {
          path: "/receptionist/edit/:id",
          name: "receptionist.edit",
          component: Qt,
          meta: {
            label: "Edit Receptionist",
            permission: "receptionist_edit",
            module: "receptionist",
            dynamicModule: "receptionist",
          },
        },
        {
          path: "/receptionist/profile/",
          name: "receptionist.profile",
          component: ee,
          meta: {
            label: "Profile",
            permission: "receptionist_profile",
            module: "receptionist",
            dynamicModule: "receptionist",
          },
        },
        {
          path: "/patient",
          name: "patient",
          component: ht,
          meta: { label: "Patients", permission: "patient_list" },
        },
        {
          path: "/patient/create",
          name: "patient.create",
          component: gt,
          meta: {
            label: "Add Patient",
            permission: "patient_add",
            module: "patient",
          },
        },
        {
          path: "/patient/edit/:id",
          name: "patient.edit",
          component: gt,
          meta: {
            label: "Edit Patient",
            permission: "patient_edit",
            module: "patient",
          },
        },
        {
          path: "/patient/profile",
          name: "patient.profile",
          component: Mt,
          meta: {
            label: "Profile",
            permission: "patient_profile",
            module: "patient",
          },
        },
        {
          path: "/patient/profile-view/:id",
          name: "patient-profile-view",
          component: Ct,
          meta: {
            label: "Patients",
            permission: "patient_profile",
            module: "patient",
          },
        },
        {
          path: "/clinic",
          name: "clinic",
          component: Et,
          meta: {
            label: "Clinics",
            permission: "clinic_list",
            module: "clinic",
          },
        },
        {
          path: "/clinic/create",
          name: "clinic.create",
          component: Pt,
          meta: {
            label: "Add Clinic",
            permission: "clinic_add",
            module: "clinic",
          },
        },
        {
          path: "/clinic/edit/:id",
          name: "clinic.edit",
          component: Pt,
          meta: {
            label: "Edit Clinic",
            permission: "clinic_edit",
            module: "clinic",
          },
        },
        {
          path: "/clinic/profile",
          name: "clinic.profile",
          component: Wt,
          meta: {
            label: "Profile",
            permission: "clinic_edit",
            module: "clinic",
          },
        },
        {
          path: "/appointment-list",
          name: "appointment",
          component: k,
          meta: {
            label: "Appointments",
            permission: "appointment_list",
            module: "appointment",
          },
        },
        {
          path: "/appointment/create",
          name: "appointment.create",
          component: Pt,
          meta: {
            label: "Add Appointments",
            permission: "appointment_add",
            module: "appointment",
          },
        },
        {
          path: "/appointment/edit/:id",
          name: "appointment.edit",
          component: Pt,
          meta: {
            label: "Edit Appointments",
            permission: "appointment_edit",
            module: "appointment",
          },
        },
        {
          path: "/custom-field",
          name: "custom-field",
          component: ie,
          meta: {
            label: "Custom Fields",
            permission: "custom_field_list",
            dynamicModule: "custom_fields",
            module: "custom_fields",
          },
        },
        {
          path: "/custom-field/create",
          name: "custom-field.create",
          component: se,
          meta: {
            label: "Add Custom Fields",
            permission: "custom_field_add",
            dynamicModule: "custom_fields",
            module: "custom_fields",
          },
        },
        {
          path: "/custom-field/edit/:id",
          name: "custom-field.edit",
          component: se,
          meta: {
            label: "Edit Custom Fields",
            permission: "custom_field_edit",
            dynamicModule: "custom_fields",
            module: "custom_fields",
          },
        },
        {
          path: "/patient-encounter/:patient_id",
          name: "patient-encounter",
          component: Ut,
          meta: {
            label: "Encounters",
            permission: "patient_encounter_list",
            module: "patient",
          },
        },
        {
          path: "/encounter-list",
          name: "encounter-list",
          component: Ut,
          meta: {
            label: "Encounters",
            permission: "patient_encounter_list",
            module: "patient_encounter",
          },
        },
        {
          path: "/encounter-template-list",
          name: "encounter-template",
          component: Ut,
          meta: {
            label: "Encounters",
            permission: "encounters_template_list",
            module: "encounter_template",
          },
        },
        {
          path: "/encounters/:patient_id",
          name: "encounters",
          component: Ut,
          meta: {
            label: "Encounters",
            permission: "patient_encounter_view",
            module: "patient",
          },
        },
        {
          path: "/patient-encounter/create/:patient_id",
          name: "patient-encounter.create",
          component: Xt.a,
          meta: {
            label: "Add Encounters",
            permission: "patient_encounter_add",
            module: "patient",
          },
        },
        {
          path: "/patient-encounter/edit/:id",
          name: "patient-encounter.edit",
          component: Xt.a,
          meta: {
            label: "Edit Encounters",
            permission: "patient_encounter_edit",
            module: "patient",
          },
        },
        {
          path: "/patient-encounter/dashboard/:encounter_id",
          name: "patient-encounter.dashboard",
          component: Gt,
          meta: {
            label: "Encounter Dashboard",
            permission: "patient_encounter_view",
            module: "patient_encounter_list",
          },
        },
        {
          path: "/patient-encounter/body-chart/:encounter_id",
          name: "patient-encounter.body-chart",
          component: $n,
          meta: {
            label: "Encounter Body chart list",
            permission: "body_chart_list",
            module: "patient_encounter_list",
          },
        },
        {
          path: "/patient-encounter/body-chart/create/:encounter_id",
          name: "patient-encounter.body-create",
          component: Kn,
          meta: {
            label: "Encounter Body chart create",
            permission: "body_chart_add",
            module: "patient_encounter_list",
          },
        },
        {
          path: "/patient-encounter/body-chart/edit/:body_chart_id",
          name: "patient-encounter.body-edit",
          component: Kn,
          meta: {
            label: "Encounter Body chart edit",
            permission: "body_chart_edit",
            module: "patient_encounter",
          },
        },
        {
          path: "/terms-condition/create",
          name: "terms-condition.create",
          component: ce,
          meta: { label: "Terms & Condition" },
        },
        {
          path: "/common-settings/create",
          name: "common-settings.create",
          component: ye,
          meta: { label: "Configuration" },
        },
        {
          path: "/settings",
          name: "settings.index",
          component: xe,
          meta: {
            label: "General Settings",
            permission: "settings",
            module: "settings",
          },
          children: [
            {
              path: "/setting/general",
              name: "setting.general",
              component: Wt,
              meta: { module: "general_settings", permission: "settings" },
            },
            {
              path: "/setting/patient-setting",
              name: "setting.patient_setting",
              component: F,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/setting/widget-setting",
              name: "setting.widget_setting",
              component: Lt,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/setting/comman-settings",
              name: "setting.comman_settings",
              component: Ft,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/setting/language-settings",
              name: "setting.language_settings",
              component: Ht,
              meta: { module: "language_settings", permission: "settings" },
            },
            {
              path: "/setting/google_calender",
              name: "setting.google_calender",
              component: sn,
              meta: { module: "google_calender", permission: "settings" },
            },
            {
              path: "/setting/google_meet_config",
              name: "setting.google_meet_config",
              component: cn,
              meta: { module: "google_meet_config", permission: "settings" },
            },
            {
              path: "/setting/ZoomOAuth",
              name: "doctor.ZoomOAuth",
              component: un,
              meta: { module: "ZoomOAuth", permission: "settings" },
            },
            {
              path: "/setting/ZoomOAuthConfig",
              name: "setting.ZoomOAuthConfig",
              component: hn,
              meta: { module: "ZoomOAuthConfig", permission: "settings" },
            },
            {
              path: "/setting/session",
              name: "doctor.session.setting",
              component: Ve,
              meta: { module: "doctor_session", permission: "settings" },
            },
            {
              path: "/setting/telemed",
              name: "doctor.telemed.setting",
              component: Ke,
              meta: { module: "telemed", permission: "settings" },
            },
            {
              path: "/clinic/schedule",
              name: "clinic.schedule",
              component: ue,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/configuration",
              name: "clinic.configuration",
              component: ye,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/app-config",
              name: "app-config",
              component: Oe,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/email/template",
              name: "email.template",
              component: be,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/sms/template",
              name: "sms.template",
              component: ge,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/custom-notification",
              name: "custom_notification",
              component: qn,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/custom-form",
              name: "custom_form",
              component: jn,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/body-chart-setting",
              name: "body_chart_setting",
              component: Bn,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/google/event/template",
              name: "google.event.template",
              component: gn,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/terms-condition",
              name: "terms.condition",
              component: ce,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/static-data/list",
              name: "static.data",
              component: et,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/custom-fields",
              name: "custom.field",
              component: ie,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/payment",
              name: "payment.setting",
              component: Ce,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/appointment-setting",
              name: "setting.appointment-setting",
              component: Se,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/general-setting",
              name: "setting.general-setting",
              component: qe,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/googlemeet",
              name: "setting.googlemeet",
              component: je,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/setting/patient-setting",
              name: "setting.patient_setting",
              component: F,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/permission-setting",
              name: "setting.permission-setting",
              component: Re,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "/dashboard-sidebar-setting",
              name: "setting.dashboard-sidebar-setting",
              component: We,
              meta: { module: "settings", permission: "settings" },
            },
            {
              path: "webhooks",
              name: "webhooks",
              component: di,
              meta: {
                label: "Webhooks",
                module: "settings",
                permission: "settings",
              },
            },
            {
              path: "webhooks/create",
              name: "webhooks.create",
              component: Di,
              meta: {
                label: "Add webhooks",
                module: "settings",
                permission: "settings",
              },
            },
            {
              path: "webhooks/edit/:id",
              name: "webhooks.edit",
              component: Di,
              meta: {
                label: "Edit webhooks",
                module: "settings",
                permission: "settings",
              },
            },
            {
              path: "webhooks/log/:webhook_id",
              name: "webhooks.log",
              component: Bi,
              meta: {
                label: "Webhooks logs",
                module: "settings",
                permission: "settings",
              },
            },
          ],
        },
        {
          path: "/custom-form/create",
          name: "custom-form.create",
          component: Wn,
          meta: { module: "custom-form", permission: "custom_form_add" },
        },
        {
          path: "/custom-form/edit/:id",
          name: "custom-form.edit",
          component: Wn,
          meta: { module: "custom-form", permission: "custom_form_add" },
        },
        {
          path: "/account-setting/change-password",
          name: "account-setting.password",
          component: Be,
          meta: { label: "Change Password", permission: "change_password" },
        },
        {
          path: "/clinic-schedule/",
          name: "clinic-schedule",
          component: ue,
          meta: { label: "Holidays", module: "clinic_schedule" },
        },
        {
          path: "/clinic-schedule/create",
          name: "clinic-schedule.create",
          component: pe.a,
          meta: { label: "Add Holiday", module: "clinic_schedule" },
        },
        {
          path: "/clinic-schedule/edit/:id",
          name: "clinic-schedule.edit",
          component: pe.a,
          meta: { label: "Edit Holiday", module: "clinic_schedule" },
        },
        {
          path: "/doctor-session",
          name: "doctor-session.create",
          component: Ve,
          meta: { label: "Doctor Session", module: "doctor_session" },
        },
        {
          path: "/doctor-session/:id",
          name: "doctor-session.create",
          component: Ve,
          meta: { label: "Doctor Session", module: "doctor_session" },
        },
        {
          path: "/notification/create",
          name: "notification.create",
          component: be,
          meta: { label: "Notification" },
        },
        {
          path: "/all-appointment",
          name: "all-appointment",
          component: Xe,
          meta: { label: "Appointments" },
        },
        {
          path: "/all-appointment-list",
          name: "appointment-list.index",
          component: xt,
          meta: { label: "Appointments", module: "appointment_list" },
        },
        {
          path: "/patient-appointment-list/:patient_id",
          name: "patient-appointment-list",
          component: xt,
          meta: { label: "Appointments", module: "appointment_list" },
        },
        {
          path: "/patient-medical-report_id/:patient_id",
          name: "patient-medical-report_id",
          component: wt,
          meta: { label: "Patient Medical Report", module: "patient" },
        },
        {
          path: "/patient-medical-report/:encounter_id",
          name: "patient-medical-report",
          component: wt,
          meta: { label: "Patient Medical Report" },
        },
        {
          path: "/billings",
          name: "billings",
          component: nn,
          meta: { label: "Billing Records" },
        },
        {
          path: "/clinic-revenue-report",
          name: "clinic-revenue-reports",
          component: on,
          meta: { label: "Revenue Reports" },
        },
        {
          path: "/help",
          name: "get_help",
          component: wn,
          meta: { label: "Get help" },
        },
        {
          path: "/pro",
          name: "get_pro",
          component: xn,
          meta: { label: "Get pro" },
        },
        {
          path: "/patient-clinic",
          name: "patient-clinic",
          component: Cn,
          meta: { label: "Patient Clinic" },
        },
        {
          path: "/tax",
          name: "tax",
          component: _n,
          meta: { label: "Taxes", module: "tax" },
        },
        {
          path: "/tax/create",
          name: "tax.create",
          component: Mn,
          meta: { label: "Add Tax", module: "tax" },
        },
        {
          path: "/tax/edit/:id",
          name: "tax.edit",
          component: Mn,
          meta: { label: "Edit Tax", module: "tax" },
        },
      ],
      Ui = new o.b({ routes: Yi });
    Ui.beforeEach(function (t, e, n) {
      var i = ve.a.state.userDataModule.user;
      ve.a.commit("TOGGLE_SIDEBAR", !0),
        void 0 === i.ID
          ? ve.a.dispatch("userDataModule/fetchUserData").then(function (e) {
              var i = ve.a.state.userDataModule.user;
              void 0 !== i && void 0 !== i.addOns.kiviPro && i.addOns.kiviPro,
                ve.a.dispatch("fetchAllClinic", { self: void 0 }),
                Xi(t, i, n).then(function () {
                  return ve.a.commit("TOGGLE_LOADER", !1);
                });
            })
          : Xi(t, i, n).then(function () {
              return ve.a.commit("TOGGLE_LOADER", !1);
            });
    }),
      Ui.afterEach(function (t, e) {
        setTimeout(function () {}, 1300);
      });
    var Xi = (function () {
      var t,
        e =
          ((t = Fi().m(function t(e, n, i) {
            var r, o, a, s, l;
            return Fi().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    void 0 !== e.meta.setup && e.meta.setup
                      ? n.step_config.filter(function (t) {
                          return e.name === t.routeName && !t.completed;
                        }).length > 0
                        ? (r = n.step_config.filter(function (t) {
                            return !t.completed;
                          })).length > 0 && r[0].routeName !== e.name
                          ? i({ name: r[0].routeName })
                          : i()
                        : n.step_config.filter(function (t) {
                            return !t.completed;
                          }).length > 0
                        ? i()
                        : i({ name: "dashboard" })
                      : void 0 !== e.meta.dynamicModule
                      ? void 0 !==
                          (o =
                            ve.a.state.userDataModule.user.module.module_config.filter(
                              function (t) {
                                return (
                                  t.name === e.meta.dynamicModule &&
                                  "1" === t.status
                                );
                              }
                            )) && o.length > 0
                        ? i()
                        : i({ name: "dashboard" })
                      : void 0 !== n.step_config &&
                        ((a = n.step_config.filter(function (t) {
                          return !t.completed;
                        })).length > 0
                          ? i({ name: a[0].routeName })
                          : void 0 !== e.meta.permission
                          ? ((s = !1),
                            void 0 !== n.permissions
                              ? ((l = window.pluginPREFIX + e.meta.permission),
                                void 0 === n.permissions[l] ||
                                  (!0 !== n.permissions[l] &&
                                    1 !== n.permissions[l]) ||
                                  (s = !0))
                              : "{}" === JSON.stringify(n) && (s = !0),
                            !1 === s ? i({ name: "403" }) : i())
                          : i());
                  case 1:
                    return t.a(2);
                }
            }, t);
          })),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var o = t.apply(e, n);
              function a(t) {
                Hi(o, i, r, a, s, "next", t);
              }
              function s(t) {
                Hi(o, i, r, a, s, "throw", t);
              }
              a(void 0);
            });
          });
      return function (t, n, i) {
        return e.apply(this, arguments);
      };
    })();
    e.a = Ui;
  },
  function (t, e, n) {
    "use strict";
    var i = n(343),
      r = n.n(i),
      o = {
        name: "vue-excel-xlsx",
        props: {
          columns: { type: Array, default: () => [] },
          data: { type: Array, default: () => [] },
          fileName: { type: String, default: "excel" },
          sheetName: { type: String, default: "SheetName" },
          fileType: {
            type: String,
            default: "xlsx",
            validator: (t) => ["xlsx", "xls"].includes(t),
          },
        },
        methods: {
          exportExcel() {
            let t = [],
              e = [],
              n = this;
            if (0 === n.columns.length) return;
            if (0 === n.data.length) return;
            n.columns.map((t) => {
              e.push(t.label);
            }),
              t.push(e),
              n.data.map((e) => {
                let i = [];
                n.columns.map((t) => {
                  let n = e[t.field];
                  t.field.split(".").length > 1 &&
                    (n = this.getNestedValue(e, t.field)),
                    t.dataFormat && "function" == typeof t.dataFormat
                      ? i.push(t.dataFormat(n))
                      : i.push(n);
                }),
                  t.push(i);
              });
            let i = n.fileName + "." + n.fileType,
              o = n.sheetName,
              a = r.a.utils.book_new(),
              s = r.a.utils.aoa_to_sheet(t);
            r.a.utils.book_append_sheet(a, s, o), r.a.writeFile(a, i);
          },
          getNestedValue(t, e) {
            let n = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(
              /^\./,
              ""
            )).split(".");
            for (let e = 0, i = n.length; e < i; ++e) {
              let i = n[e];
              if (!(i in t)) return;
              t = t[i];
            }
            return t;
          },
        },
      },
      a = n(15),
      s = Object(a.a)(
        o,
        function () {
          return (0, this._self._c)(
            "button",
            { on: { click: this.exportExcel } },
            [this._t("default")],
            2
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
    e.a = {
      install(t, e) {
        t.component("vue-excel-xlsx", s);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    var i = {
        name: "twilloGuide",
        props: { twilloType: [String] },
        data: function () {
          return {};
        },
      },
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e("div", { staticClass: "row" }, [
                e("div", { staticClass: "col-md-12" }, [
                  e("h4", { staticClass: "mb-3" }, [
                    t._v(
                      "\n        " +
                        t._s(
                          "sms" === t.twilloType
                            ? t.formTranslation.pro_setting.twilo_sms_guide
                            : t.formTranslation.pro_setting.twilo_whatsapp_guide
                        ) +
                        "\n      "
                    ),
                  ]),
                ]),
              ]),
              t._v(" "),
              e(
                "b-list-group",
                [
                  e("b-list-group-item", [
                    t._v(
                      t._s(t.formTranslation.pro_setting.twilio_step_1) +
                        ":\n      "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://www.twilio.com/try-twilio",
                          target: "_blank",
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.formTranslation.pro_setting.twilio_step_1)
                        ),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  e("b-list-group-item", [
                    t._v(
                      t._s(t.formTranslation.pro_setting.twilio_step_2) +
                        " ,\n      "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://www.twilio.com/console",
                          target: "_blank",
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(
                              t.formTranslation.pro_setting.twilo_sms_portal
                            ) +
                            "\n      "
                        ),
                      ]
                    ),
                    t._v(
                      "\n      " +
                        t._s(t.formTranslation.pro_setting.unique_sid) +
                        "\n    "
                    ),
                  ]),
                  t._v(" "),
                  e("b-list-group-item", [
                    t._v(
                      t._s(t.formTranslation.pro_setting.twilio_step_3) +
                        "\n    "
                    ),
                  ]),
                  t._v(" "),
                  e("b-list-group-item", [
                    t._v(
                      t._s(t.formTranslation.pro_setting.twilio_step_4) +
                        " ,\n      "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://www.twilio.com/console/phone-numbers/search",
                          target: "_blank",
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(
                              t.formTranslation.pro_setting.head_on_console
                            ) +
                            "\n      "
                        ),
                      ]
                    ),
                    t._v(
                      "\n      " +
                        t._s(t.formTranslation.pro_setting.phone_msg_sid) +
                        ".\n    "
                    ),
                  ]),
                  t._v(" "),
                  e("b-list-group-item", [
                    t._v(
                      t._s(t.formTranslation.pro_setting.twillo_imp_note) +
                        " ,\n      "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://www.twilio.com/docs/api/errors/21211",
                          target: "_blank",
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(
                              t.formTranslation.pro_setting.twillo_help_note
                            ) +
                            "\n      "
                        ),
                      ]
                    ),
                  ]),
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
        "0397aeb8",
        null
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(8),
      r = n(9),
      o = n(24);
    function a(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return s(t);
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
            if ("string" == typeof t) return s(t, e);
            var n = {}.toString.call(t).slice(8, -1);
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
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var l = {
        validations: {
          medicalHistory: {
            title: { required: r.required },
            encounter_id: { required: r.required },
            type: { required: r.required },
          },
        },
        props: {
          recordData: {
            type: [Object, Array],
            default: function () {
              return {};
            },
          },
          ecounterStatus: 0,
          isEcounterTemplateModule: !1,
          updateCounter: 0,
        },
        data: function () {
          return {
            medicalHistoryList: [],
            medicalHistory: {},
            buttonText: '<i class="fa fa-plus"></i> Add',
            loading: !1,
            submitted: !1,
            medical_options: [],
            medicalHistoryListLoader: !0,
            specializationMultiselectLoader: !1,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            (this.medicalHistory = this.defaultFormData()),
              (this.medicalHistory.type = this.recordData.type);
          },
          defaultFormData: function () {
            return { title: "", type: "", encounter_id: "" };
          },
          handleSubmitForm: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.medicalHistory.$invalid
                ? (this.loading = !1)
                : Object(o.n)("historyDataForm") &&
                  Object(i.b)(
                    this.isEcounterTemplateModule
                      ? "save_encounter_template_medical_history"
                      : "medical_history_save",
                    this.medicalHistory
                  )
                    .then(function (e) {
                      var n;
                      (t.loading = !1),
                        (void 0 !== e.data.status && !0 === e.data.status) ||
                        !0 ===
                          (null == e || null === (n = e.data) || void 0 === n
                            ? void 0
                            : n.success)
                          ? ((t.submitted = !1),
                            t.medicalHistoryList.push(e.data.data),
                            (t.medicalHistory = t.defaultFormData()),
                            (t.medicalHistory.encounter_id =
                              t.recordData.encounter_id),
                            (t.medicalHistory.type = t.recordData.type))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          deleteMedicalHistoryData: function (t) {
            var e = this;
            void 0 !== this.medicalHistoryList[t - 1] &&
              Object(i.a)(
                this.isEcounterTemplateModule
                  ? "delete_encounter_template_medical_history"
                  : "medical_history_delete",
                { id: this.medicalHistoryList[t - 1].id }
              )
                .then(function (n) {
                  var i;
                  ((void 0 !== n.data.status && !0 === n.data.status) ||
                    !0 ===
                      (null == n || null === (i = n.data) || void 0 === i
                        ? void 0
                        : i.success)) &&
                    (e.medical_options.push(e.medicalHistoryList[t - 1].title),
                    (e.medical_options = a(new Set(e.medical_options))),
                    e.medicalHistoryList.splice(t - 1, 1),
                    displayMessage(n.data.message));
                })
                .catch(function (t) {
                  void 0 !== t.response.data &&
                  void 0 !== t.response.data.message
                    ? displayErrorMessage(t.response.data.message)
                    : displayErrorMessage(
                        e.formTranslation.common.internal_server_error
                      );
                });
          },
          addNewMedicalRecord: function (t) {
            var e = this,
              n = { type: "", label: t, status: { id: 1, label: "Active" } };
            "problem" === this.medicalHistory.type
              ? (n.type = {
                  id: "clinical_problems",
                  type: "clinical problems",
                })
              : (n.type = {
                  id: "clinical_observations",
                  type: "clinical Observations",
                }),
              a(
                new Set(
                  this.medicalHistoryList.map(function (t) {
                    return t.title;
                  })
                )
              ).includes(t.trim())
                ? displayErrorMessage(
                    this.formTranslation.patient_encounter
                      .msg_data_already_available
                  )
                : (this.medical_options.push(t),
                  (this.medicalHistory.title = t),
                  Object(i.b)("static_data_save", n)
                    .then(function (t) {
                      void 0 !== t.data.status && !0 === t.data.status
                        ? e.handleSubmitForm()
                        : displayErrorMessage(t.data.message);
                    })
                    .catch(function (t) {
                      displayErrorMessage(
                        e.formTranslation.common.internal_server_error
                      );
                    }));
          },
          clinical_detail_select: function (t) {
            (this.medicalHistory.title = t), this.handleSubmitForm();
          },
          get_medical_options: function () {
            var t;
            t =
              "problem" === this.medicalHistory.type
                ? "clinical_problems"
                : "clinical_observations";
            var e = this;
            Object(i.a)("get_static_data", {
              data_type: "static_data_with_label",
              static_data_type: t,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  t.data.data.length > 0 &&
                  ((e.medical_options = []),
                  t.data.data.map(function (t, n) {
                    e.medical_options.push(t.label);
                  }));
              })
              .catch(function (t) {});
          },
        },
        watch: {
          recordData: function (t, e) {
            (this.medicalHistory.encounter_id = t.encounter_id),
              (this.medicalHistory.type = t.type),
              "note" !== this.medicalHistory.type && this.get_medical_options();
          },
          medicalHistoryList: function () {
            var t = a(
              new Set(
                this.medicalHistoryList.map(function (t) {
                  return t.title;
                })
              )
            );
            this.medical_options = this.medical_options.filter(function (e) {
              return !t.includes(e);
            });
          },
          updateCounter: function () {
            (this.medicalHistoryList.length = 0),
              (this.medicalHistoryListLoader = !0);
          },
        },
        computed: {
          encounterStatus: function () {
            return void 0 !== this.recordData.status
              ? this.recordData.status
              : "1";
          },
          tagPlaceholder: function () {
            return "problem" === this.recordData.type
              ? this.formTranslation.patient_encounter.select_problem
              : "observation" === this.recordData.type
              ? this.formTranslation.patient_encounter.select_observation
              : "Select " + this.recordData.type;
          },
          placeholder: function () {
            return "problem" === this.recordData.type
              ? this.formTranslation.patient_encounter.select_problem
              : "observation" === this.recordData.type
              ? this.formTranslation.patient_encounter.select_observation
              : "Select " + this.recordData.type;
          },
        },
      },
      c = n(15),
      d = Object(c.a)(
        l,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e("b-col", { attrs: { sm: "12" } }, [
                e("div", { staticClass: "card p-0 shadow" }, [
                  e("div", { staticClass: "card-header" }, [
                    e("h3", { staticClass: "mb-0" }, [
                      t._v(t._s(t.recordData.title)),
                    ]),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "card-body medical-history-card p-0" },
                    [
                      e("div", { staticClass: "col-md-12" }, [
                        t.medicalHistoryList.length > 0
                          ? e(
                              "ul",
                              { staticClass: "list-group list-group-flush" },
                              t._l(t.medicalHistoryList, function (n, i) {
                                return void 0 !== n
                                  ? e(
                                      "li",
                                      {
                                        key: i,
                                        staticClass:
                                          "animated fadeInUp list-group-item",
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(i + 1) +
                                            ".\n              " +
                                            t._s(n.title) +
                                            "\n              "
                                        ),
                                        0 != t.ecounterStatus &&
                                        "patient" != t.getUserRole() &&
                                        t.kcCheckPermission(
                                          "medical_records_delete"
                                        )
                                          ? e("i", {
                                              directives: [
                                                {
                                                  name: "b-tooltip",
                                                  rawName: "v-b-tooltip.hover",
                                                  modifiers: { hover: !0 },
                                                },
                                              ],
                                              staticClass:
                                                "float-right fa fa-times font-weight-bold text-danger cursor-pointer",
                                              attrs: {
                                                title:
                                                  t.formTranslation.common
                                                    .remove,
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.deleteMedicalHistoryData(
                                                    ++i
                                                  );
                                                },
                                              },
                                            })
                                          : t._e(),
                                      ]
                                    )
                                  : t._e();
                              }),
                              0
                            )
                          : t.medicalHistoryListLoader
                          ? e(
                              "div",
                              {
                                staticClass:
                                  "h2 font-weight-bold mb-0 text-center",
                              },
                              [
                                e("i", {
                                  staticClass: "fa fa-spinner fa-spin",
                                  attrs: { "aria-hidden": "true" },
                                }),
                              ]
                            )
                          : e(
                              "h4",
                              {
                                staticClass:
                                  "text-center small text-danger p-3",
                              },
                              [
                                t._v(
                                  t._s(
                                    t.formTranslation.common.no_records_found
                                  )
                                ),
                              ]
                            ),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  t.kcCheckPermission("medical_records_add") &&
                  "1" === t.encounterStatus
                    ? e("div", { staticClass: "card-footer" }, [
                        e(
                          "form",
                          {
                            attrs: { id: "historyDataForm", novalidate: !0 },
                            on: {
                              submit: function (e) {
                                return (
                                  e.preventDefault(),
                                  t.handleSubmitForm.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            e("div", { staticClass: "row" }, [
                              "note" === t.medicalHistory.type
                                ? e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group mb-0" },
                                      [
                                        e(
                                          "label",
                                          {
                                            staticClass: "sr-only",
                                            attrs: { for: "title" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.title
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        0 != t.ecounterStatus
                                          ? e("b-form-textarea", {
                                              staticClass: "form-control",
                                              attrs: {
                                                id: "title",
                                                placeholder:
                                                  t.formTranslation
                                                    .patient_encounter.enter +
                                                  " " +
                                                  t.recordData.title,
                                              },
                                              model: {
                                                value: t.medicalHistory.title,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.medicalHistory,
                                                    "title",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "medicalHistory.title",
                                              },
                                            })
                                          : t._e(),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.medicalHistory.title.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(t.recordData.title) +
                                                    " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .patient_encounter
                                                        .is_required
                                                    ) +
                                                    "\n                "
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
                              0 != t.ecounterStatus &&
                              "note" === t.medicalHistory.type
                                ? e(
                                    "div",
                                    {
                                      staticClass: "col-md-12 text-center mt-3",
                                    },
                                    [
                                      t.loading
                                        ? e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-block btn-primary",
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
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-block btn-primary",
                                              attrs: { type: "submit" },
                                            },
                                            [
                                              e("i", {
                                                staticClass: "fa fa-plus",
                                              }),
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .encounter_dashboard
                                                      .add_btn
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                    ]
                                  )
                                : 0 != t.ecounterStatus
                                ? e(
                                    "div",
                                    { staticClass: "col-md-12" },
                                    [
                                      e("multi-select", {
                                        attrs: {
                                          "deselect-label": "",
                                          "select-label": "",
                                          id: t.medicalHistory.type,
                                          "tag-placeholder": t.tagPlaceholder,
                                          placeholder: t.placeholder,
                                          options: t.medical_options,
                                          taggable: !0,
                                          loading:
                                            t.specializationMultiselectLoader,
                                        },
                                        on: {
                                          select: t.clinical_detail_select,
                                          tag: t.addNewMedicalRecord,
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
                                      }),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "mt-2 clinical_details_notes",
                                        },
                                        [
                                          "Problems" === t.recordData.title
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-primary small font-weight-bold",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .patient_encounter
                                                        .note_problem
                                                    )
                                                  ),
                                                ]
                                              )
                                            : "Observations" ===
                                              t.recordData.title
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-primary small font-weight-bold",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .patient_encounter
                                                        .note_observation
                                                    )
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.medicalHistory.title.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(t.recordData.title) +
                                                  " " +
                                                  t._s(
                                                    t.formTranslation
                                                      .patient_encounter
                                                      .is_required
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ]),
                          ]
                        ),
                      ])
                    : t._e(),
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
      );
    e.a = d.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(543),
      r = n.n(i),
      o = {
        props: {
          text: { type: String, required: !0 },
          size: { type: Number, required: !1, default: 256 },
          color: { type: String, required: !1, default: "#000" },
          bgColor: { type: String, required: !1, default: "#FFF" },
          errorLevel: {
            type: String,
            validator: function (t) {
              return "L" === t || "M" === t || "Q" === t || "H" === t;
            },
            required: !1,
            default: "H",
          },
        },
        watch: {
          text: function () {
            this.clear(), this.makeCode(this.text);
          },
        },
        data: () => ({ qrCode: {} }),
        mounted() {
          this.qrCode = new r.a(this.$el, {
            text: this.text,
            width: this.size,
            height: this.size,
            colorDark: this.color,
            colorLight: this.bgColor,
            correctLevel: r.a.CorrectLevel[this.errorLevel],
          });
        },
        methods: {
          clear: function () {
            this.qrCode.clear();
          },
          makeCode: function (t) {
            this.qrCode.makeCode(t);
          },
        },
      },
      a = n(15),
      s = Object(a.a)(
        o,
        function () {
          return (0, this._self._c)("div");
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.a = s.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = {
        name: "AppointmentViewCard",
        components: { ModalPopup: n(43).a },
        props: {
          appointmentDetailsModel: {
            type: [Boolean],
            default: function () {
              return !1;
            },
          },
          appointmentDetails: {
            type: [Object, Array],
            default: function () {
              return {};
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
          closeModal: function () {
            this.$emit("closeModal");
          },
        },
      },
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.appointmentDetailsModel
                ? e(
                    "ModalPopup",
                    {
                      attrs: {
                        modalId: "appointment-details-modal",
                        modalSize: "lg",
                        openModal: t.appointmentDetailsModel,
                        modalTitle:
                          t.formTranslation.appointments.appointment_details,
                      },
                      on: { closeModal: t.closeModal },
                    },
                    [
                      e("div", { staticClass: "row border-bottom p-2" }, [
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(t._s(t.formTranslation.common.date) + ": "),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(
                                t._s(
                                  t.appointmentDetails
                                    .appointment_formated_start_date
                                )
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(t._s(t.formTranslation.common.time) + ": "),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(
                                t._s(
                                  t.appointmentDetails.appointment_start_time
                                )
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row border-bottom p-2" }, [
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(t.formTranslation.common.doctor) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(t._s(t.appointmentDetails.doctor_id.label)),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(t.formTranslation.common.patient) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(t._s(t.appointmentDetails.patient_id.label)),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row border-bottom p-2" }, [
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(t.formTranslation.common.clinic) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(t._s(t.appointmentDetails.clinic_id.label)),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(t.formTranslation.common.patient_contact) +
                                  ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(
                                t._s(t.appointmentDetails.patient_contact_no)
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row border-bottom p-2" }, [
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(
                                  1 ===
                                    t.appointmentDetails.service_array.length
                                    ? t.formTranslation.common.service
                                    : t.formTranslation.common.services
                                ) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(t._s(t.appointmentDetails.all_services)),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(t.formTranslation.service.charges) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(
                                t._s(
                                  void 0 !== t.appointmentDetails.clinic_prefix
                                    ? t.appointmentDetails.clinic_prefix
                                    : ""
                                ) +
                                  t._s(
                                    "" !==
                                      t.appointmentDetails.all_service_charges
                                      ? t.appointmentDetails.all_service_charges
                                      : "0"
                                  ) +
                                  t._s(
                                    void 0 !==
                                      t.appointmentDetails.clinic_postfix
                                      ? t.appointmentDetails.clinic_postfix
                                      : ""
                                  )
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row border-bottom p-2" }, [
                        e("div", { staticClass: "col-md-6" }, [
                          e(
                            "p",
                            { staticClass: "mb-0 font-weight-bold d-flex" },
                            [
                              e("span", { staticClass: "font-weight-bold" }, [
                                t._v(
                                  t._s(t.formTranslation.common.status) + ": "
                                ),
                              ]),
                              t._v(" "),
                              "1" == t.appointmentDetails.status
                                ? e("span", { staticClass: "text-primary" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments.booked
                                        )
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              "4" == t.appointmentDetails.status
                                ? e("span", { staticClass: "text-primary" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .check_in
                                        )
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              "0" == t.appointmentDetails.status
                                ? e("span", { staticClass: "text-danger" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .cancelled
                                        )
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              "2" == t.appointmentDetails.status
                                ? e("span", { staticClass: "text-warning" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments.pending
                                        )
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              "3" == t.appointmentDetails.status
                                ? e("span", { staticClass: "text-success" }, [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .check_out
                                        )
                                    ),
                                  ])
                                : t._e(),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-6" }, [
                          e("p", { staticClass: "mb-0 d-flex" }, [
                            e("span", { staticClass: "font-weight-bold" }, [
                              t._v(
                                t._s(
                                  t.formTranslation.settings.payment +
                                    " " +
                                    t.formTranslation.paypal.mode
                                ) + ": "
                              ),
                            ]),
                            t._v(" "),
                            e("span", [
                              t._v(t._s(t.appointmentDetails.payment_mode)),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      null !== t.appointmentDetails.description &&
                      void 0 !== t.appointmentDetails.description &&
                      "" !== t.appointmentDetails.description
                        ? e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("p", { staticClass: "mb-0 d-flex" }, [
                                e("span", { staticClass: "font-weight-bold" }, [
                                  t._v(
                                    t._s(
                                      t.formTranslation.appointments.description
                                    ) + ": "
                                  ),
                                ]),
                                t._v(" "),
                                e("span", [
                                  t._v(t._s(t.appointmentDetails.description)),
                                ]),
                              ]),
                            ]),
                          ])
                        : t._e(),
                      t._v(" "),
                      !0 ===
                        Array.isArray(
                          this.appointmentDetails.appointment_report
                        ) &&
                      void 0 !== t.appointmentDetails.appointment_report &&
                      null !== t.appointmentDetails.appointment_report &&
                      "" !== t.appointmentDetails.appointment_report &&
                      t.appointmentDetails.appointment_report.length > 0
                        ? e("div", { staticClass: "row border-bottom p-2" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("div", [
                                e(
                                  "p",
                                  { staticClass: "mb-0 text-center d-flex" },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.patient
                                              .medical_report
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "row mb-2" },
                                  t._l(
                                    t.appointmentDetails.appointment_report,
                                    function (n, i) {
                                      return e(
                                        "div",
                                        { key: i, staticClass: "col-6" },
                                        [
                                          e(
                                            "a",
                                            {
                                              directives: [
                                                {
                                                  name: "b-tooltip",
                                                  rawName: "v-b-tooltip.hover",
                                                  modifiers: { hover: !0 },
                                                },
                                              ],
                                              attrs: {
                                                variant: "outline-primary",
                                                title:
                                                  t.formTranslation.appointments
                                                    .view_report,
                                                href: n.url,
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-external-link-alt",
                                              }),
                                              t._v(
                                                "  " +
                                                  t._s(n.name) +
                                                  "\n            "
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                              ]),
                            ]),
                          ])
                        : t._e(),
                      t._v(" "),
                      void 0 !== t.appointmentDetails.custom_fields &&
                      null !== t.appointmentDetails.custom_fields &&
                      "" !== t.appointmentDetails.custom_fields &&
                      t.appointmentDetails.custom_fields.length > 0
                        ? e("div", { staticClass: "row p-2" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("div", [
                                e(
                                  "p",
                                  { staticClass: "mb-0 text-center d-flex" },
                                  [
                                    e(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        t._v(
                                          "\n           " +
                                            t._s(
                                              t.formTranslation.doctor
                                                .extra_detail
                                            ) +
                                            "\n        "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "row" },
                                  t._l(
                                    t.appointmentDetails.custom_fields,
                                    function (n, i) {
                                      return e(
                                        "div",
                                        { key: i, staticClass: "col-6" },
                                        [
                                          e(
                                            "p",
                                            {
                                              staticClass:
                                                "mb-0 font-weight-bold d-flex",
                                            },
                                            [
                                              e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold",
                                                },
                                                [t._v(t._s(n.label) + ": ")]
                                              ),
                                              t._v(" "),
                                              n.field_data &&
                                              "file_upload" ===
                                                n.field_data.type
                                                ? [
                                                    e(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href: n.field_data
                                                            .url,
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            n.field_data.name
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                : [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          n.field_data
                                                            ? Array.isArray(
                                                                n.field_data
                                                              )
                                                              ? n.field_data.join(
                                                                  ", "
                                                                )
                                                              : n.field_data
                                                            : " "
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ],
                                            ],
                                            2
                                          ),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                              ]),
                            ]),
                          ])
                        : t._e(),
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
        "3b067bf7",
        null
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(394).a,
      r = (n(747), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            void 0 !== t.formTranslationData &&
            void 0 !== t.formTranslationData.common &&
            "common.clinic_is_required" !==
              t.formTranslation.common.clinic_is_required &&
            void 0 !== t.userData.addOns
              ? e(
                  "div",
                  [
                    e("loader-component"),
                    t._v(" "),
                    void 0 === t.$route.meta.fullPage ||
                    !1 === t.$route.meta.fullPage
                      ? e(
                          "div",
                          [
                            e("SideBar", { attrs: { mode: t.getMode } }),
                            t._v(" "),
                            e("Body"),
                          ],
                          1
                        )
                      : e(
                          "div",
                          { staticClass: "container-fluid" },
                          [
                            e(
                              "transition",
                              { attrs: { name: "fade", mode: "out-in" } },
                              [e("router-view")],
                              1
                            ),
                          ],
                          1
                        ),
                  ],
                  1
                )
              : e("div", [e("loader-component")], 1),
          ]);
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
    "use strict";
    var i = n(395).a,
      r = (n(745), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "nav",
            {
              class: "sidenav navbar navbar-vertical navbar-expand-xs ".concat(
                "true" == t.mode ? "fixed-right" : " fixed-left",
                " navbar-light bg-white"
              ),
              attrs: { id: "sidenav-main" },
              on: { mouseenter: t.handleMouseIn, mouseleave: t.handleMouseOut },
            },
            [
              e(
                "div",
                {
                  staticClass: "scrollbar-inner",
                  attrs: { id: "scrollbar-inner" },
                },
                [
                  e(
                    "div",
                    { staticClass: "sidenav-header d-flex align-items-center" },
                    [
                      e(
                        "b-navbar-brand",
                        {
                          staticClass: "p-0",
                          attrs: { to: { name: "dashboard" } },
                        },
                        [
                          -1 != t.getSiteLogo &&
                          null != t.getSiteLogo &&
                          "" != t.getSiteLogo
                            ? e("img", {
                                staticClass: "navbar-brand-img ml-2",
                                attrs: { src: t.getSiteLogo, alt: "get" },
                              })
                            : e("img", {
                                staticClass: "navbar-brand-img ml-2",
                                attrs: { src: t.logoURL, alt: "else" },
                              }),
                        ]
                      ),
                      t._v(" "),
                      e("div", { staticClass: "ml-auto" }, [
                        e(
                          "div",
                          {
                            staticClass: "sidenav-toggler active",
                            attrs: {
                              "data-action": "sidenav-unpin",
                              "data-target": "#sidenav-main",
                            },
                            on: { click: t.handleSideBarToggle },
                          },
                          [t._m(0)]
                        ),
                      ]),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "navbar-inner kivicare-navbar-inner" },
                    [
                      e(
                        "div",
                        {
                          staticClass: "collapse navbar-collapse",
                          attrs: { id: "sidenav-collapse-main" },
                        },
                        [
                          e(
                            "ul",
                            { staticClass: "navbar-nav" },
                            t._l(t.sideBarJson, function (n, i) {
                              return t.sideBarTabWiseData(n, "show")
                                ? e(
                                    "div",
                                    { key: i },
                                    [
                                      "route" === n.type
                                        ? e(
                                            "b-nav-item",
                                            {
                                              attrs: {
                                                "link-classes":
                                                  t.currentRouteModule ===
                                                  n.routeClass
                                                    ? t.activeRouteClass
                                                    : "",
                                                to:
                                                  "patient-medical-report_id" ===
                                                  n.link
                                                    ? {
                                                        name: n.link,
                                                        params: {
                                                          patient_id:
                                                            t.userData.ID,
                                                        },
                                                      }
                                                    : { name: n.link },
                                              },
                                            },
                                            [
                                              e("i", {
                                                class:
                                                  n.iconClass + " text-primary",
                                              }),
                                              t._v(" "),
                                              e(
                                                "span",
                                                {
                                                  staticClass: "nav-link-text",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.sidebar[
                                                        n.routeClass
                                                      ]
                                                    )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              1 != t.userData.addOns.kiviPro &&
                                              [
                                                "clinic",
                                                "tax",
                                                "billings",
                                                "clinic-revenue-reports",
                                                "reports.reports",
                                                "patient-medical-report_id",
                                                "patient-clinic",
                                              ].includes(n.link)
                                                ? e("span", {
                                                    domProps: {
                                                      innerHTML: t._s(
                                                        t.kivicareProFeatureIcon(
                                                          "pro"
                                                        )
                                                      ),
                                                    },
                                                  })
                                                : t._e(),
                                              t._v(" "),
                                              "doctor" !== n.link ||
                                              t.userData.doctor_available
                                                ? t._e()
                                                : e("i", {
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
                                                      "fas fa-question-circle ml-1 text-danger",
                                                    attrs: {
                                                      title:
                                                        "Please Add Doctor",
                                                    },
                                                  }),
                                              t._v(" "),
                                              "service" !== n.link ||
                                              t.userData
                                                .doctor_service_available
                                                ? t._e()
                                                : e("i", {
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
                                                      "fas fa-question-circle ml-1 text-danger",
                                                    attrs: {
                                                      title:
                                                        "Please Add Doctor Service",
                                                    },
                                                  }),
                                              t._v(" "),
                                              "doctor-session.create" !==
                                                n.link ||
                                              t.userData
                                                .doctor_session_available
                                                ? t._e()
                                                : e("i", {
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
                                                      "fas fa-question-circle ml-1 text-danger",
                                                    attrs: {
                                                      title:
                                                        "Please Add Doctor Session",
                                                    },
                                                  }),
                                            ]
                                          )
                                        : "parent" == n.type
                                        ? e(
                                            "div",
                                            [
                                              e(
                                                "b-nav-item",
                                                {
                                                  attrs: { target: n.link },
                                                  on: {
                                                    click: function (e) {
                                                      return t.dropDownToggler(
                                                        n.link,
                                                        e
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e("i", {
                                                    class:
                                                      n.iconClass +
                                                      " text-primary",
                                                  }),
                                                  t._v(" "),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "nav-link-text",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .sidebar[
                                                            n.routeClass
                                                          ]
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  1 !=
                                                    t.userData.addOns.kiviPro &&
                                                  [
                                                    "clinic",
                                                    "tax",
                                                    "billings",
                                                    "clinic-revenue-reports",
                                                    "reports.reports",
                                                    "patient-medical-report_id",
                                                    "patient-clinic",
                                                  ].includes(n.link)
                                                    ? e("span", {
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            t.kivicareProFeatureIcon(
                                                              "pro"
                                                            )
                                                          ),
                                                        },
                                                      })
                                                    : t._e(),
                                                  t._v(" "),
                                                  "doctor" !== n.link ||
                                                  t.userData.doctor_available
                                                    ? t._e()
                                                    : e("i", {
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
                                                          "fas fa-question-circle ml-1 text-danger",
                                                        attrs: {
                                                          title:
                                                            "Please Add Doctor",
                                                        },
                                                      }),
                                                  t._v(" "),
                                                  "service" !== n.link ||
                                                  t.userData
                                                    .doctor_service_available
                                                    ? t._e()
                                                    : e("i", {
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
                                                          "fas fa-question-circle ml-1 text-danger",
                                                        attrs: {
                                                          title:
                                                            "Please Add Doctor Service",
                                                        },
                                                      }),
                                                  t._v(" "),
                                                  "doctor-session.create" !==
                                                    n.link ||
                                                  t.userData
                                                    .doctor_session_available
                                                    ? t._e()
                                                    : e("i", {
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
                                                          "fas fa-question-circle ml-1 text-danger",
                                                        attrs: {
                                                          title:
                                                            "Please Add Doctor Session",
                                                        },
                                                      }),
                                                  t._v(" "),
                                                  e(
                                                    "span",
                                                    { staticClass: "ml-auto" },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "fa fa-chevron-right",
                                                        attrs: {
                                                          "aria-hidden": "true",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "b-collapse",
                                                {
                                                  ref: "collapse-" + n.link,
                                                  refInFor: !0,
                                                  attrs: {
                                                    visible: t.isCollapse,
                                                    id: n.link,
                                                  },
                                                },
                                                [
                                                  e(
                                                    "b-navbar-nav",
                                                    { staticClass: "mx-3" },
                                                    t._l(
                                                      n.childrens,
                                                      function (n, i) {
                                                        return t.sideBarTabWiseData(
                                                          n,
                                                          "show"
                                                        )
                                                          ? e(
                                                              "b-nav-item",
                                                              {
                                                                key: i,
                                                                attrs: {
                                                                  "link-classes":
                                                                    t.currentRouteModule ===
                                                                    n.routeClass
                                                                      ? t.activeRouteClass
                                                                      : "",
                                                                  to:
                                                                    "patient-medical-report_id" ===
                                                                    n.link
                                                                      ? {
                                                                          name: n.link,
                                                                          params:
                                                                            {
                                                                              patient_id:
                                                                                t
                                                                                  .userData
                                                                                  .ID,
                                                                            },
                                                                        }
                                                                      : {
                                                                          name: n.link,
                                                                        },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  class:
                                                                    n.iconClass +
                                                                    " text-primary",
                                                                }),
                                                                t._v(" "),
                                                                e(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "nav-link-text",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .sidebar[
                                                                          n
                                                                            .routeClass
                                                                        ]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" "),
                                                                1 !=
                                                                  t.userData
                                                                    .addOns
                                                                    .kiviPro &&
                                                                [
                                                                  "encounter-template",
                                                                ].includes(
                                                                  n.link
                                                                )
                                                                  ? e("span", {
                                                                      domProps:
                                                                        {
                                                                          innerHTML:
                                                                            t._s(
                                                                              t.kivicareProFeatureIcon(
                                                                                "pro"
                                                                              )
                                                                            ),
                                                                        },
                                                                    })
                                                                  : t._e(),
                                                                t._v(" "),
                                                                "doctor" !==
                                                                  n.link ||
                                                                t.userData
                                                                  .doctor_available
                                                                  ? t._e()
                                                                  : e("i", {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            modifiers:
                                                                              {
                                                                                hover:
                                                                                  !0,
                                                                              },
                                                                          },
                                                                        ],
                                                                      staticClass:
                                                                        "fas fa-question-circle ml-1 text-danger",
                                                                      attrs: {
                                                                        title:
                                                                          "Please Add Doctor",
                                                                      },
                                                                    }),
                                                                t._v(" "),
                                                                "service" !==
                                                                  n.link ||
                                                                t.userData
                                                                  .doctor_service_available
                                                                  ? t._e()
                                                                  : e("i", {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            modifiers:
                                                                              {
                                                                                hover:
                                                                                  !0,
                                                                              },
                                                                          },
                                                                        ],
                                                                      staticClass:
                                                                        "fas fa-question-circle ml-1 text-danger",
                                                                      attrs: {
                                                                        title:
                                                                          "Please Add Doctor Service",
                                                                      },
                                                                    }),
                                                                t._v(" "),
                                                                "doctor-session.create" !==
                                                                  n.link ||
                                                                t.userData
                                                                  .doctor_session_available
                                                                  ? t._e()
                                                                  : e("i", {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            modifiers:
                                                                              {
                                                                                hover:
                                                                                  !0,
                                                                              },
                                                                          },
                                                                        ],
                                                                      staticClass:
                                                                        "fas fa-question-circle ml-1 text-danger",
                                                                      attrs: {
                                                                        title:
                                                                          "Please Add Doctor Session",
                                                                      },
                                                                    }),
                                                              ]
                                                            )
                                                          : t._e();
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : e(
                                            "b-nav-item",
                                            {
                                              attrs: {
                                                href: n.link,
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              e("i", {
                                                class:
                                                  n.iconClass + " text-primary",
                                              }),
                                              t._v(" "),
                                              e(
                                                "span",
                                                {
                                                  staticClass: "nav-link-text",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.sidebar[
                                                        n.routeClass
                                                      ]
                                                        ? t.formTranslation
                                                            .sidebar[
                                                            n.routeClass
                                                          ]
                                                        : n.label
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                    ],
                                    1
                                  )
                                : t._e();
                            }),
                            0
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              t._t("default"),
            ],
            2
          );
        },
        [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "sidenav-toggler-inner" }, [
              t("i", { staticClass: "sidenav-toggler-line" }),
              this._v(" "),
              t("i", { staticClass: "sidenav-toggler-line" }),
              this._v(" "),
              t("i", { staticClass: "sidenav-toggler-line" }),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(396).a,
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "main-content", attrs: { id: "panel" } },
            [
              t.demoPluginActive && "administrator" === t.getUserRole()
                ? e(
                    "div",
                    [
                      t.showQrcode
                        ? e(
                            "ModalPopup",
                            {
                              attrs: {
                                modalId: "appointment-details-modal",
                                modalSize: "md",
                                openModal: t.showQrcode,
                                modalTitle: t.formTranslation.common.qrcode,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.showQrcode = !1;
                                },
                              },
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-content-center p-2",
                                },
                                [
                                  e("VueQRCodeComponent", {
                                    attrs: { text: t.qrUrl },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              e("div", { staticClass: "row p-2" }, [
                                e("div", { staticClass: "col-12" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.qrUrl,
                                          expression: "qrUrl",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      domProps: { value: t.qrUrl },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            (t.qrUrl = e.target.value);
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                              ]),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t.showChatBot
                        ? e(
                            "ModalPopup",
                            {
                              attrs: {
                                modalId: "credentials",
                                modalSize: "md",
                                openModal: t.showChatBot,
                                modalTitle: "Demo User Credentials",
                              },
                              on: {
                                closeModal: function (e) {
                                  t.showChatBot = !1;
                                },
                              },
                            },
                            [
                              t._l(t.demoUser, function (n, i, r) {
                                return e("div", { key: i }, [
                                  e("hr", { staticClass: "m-2" }),
                                  t._v(" "),
                                  e("div", { staticClass: "row" }, [
                                    e(
                                      "div",
                                      { staticClass: "col-12 text-center" },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(t._s(i)),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("hr", { staticClass: "m-2" }),
                                  t._v(" "),
                                  e("div", { staticClass: "row m-2" }, [
                                    e("div", { staticClass: "col-12" }, [
                                      e("p", { staticClass: "mb-0" }, [
                                        e("span", [
                                          t._v(
                                            "\n              Email:\n              "
                                          ),
                                        ]),
                                        t._v(" "),
                                        e(
                                          "span",
                                          {
                                            staticClass: "font-weight-bold",
                                            attrs: {
                                              id: "copy-text" + n + "email",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(
                                                  n +
                                                    t.splitEmail +
                                                    "@kivicare.com"
                                                ) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "span",
                                          {
                                            staticClass: "text-primary",
                                            attrs: {
                                              title:
                                                t.formTranslation.common.copy,
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.copyParentText(
                                                    n +
                                                      t.splitEmail +
                                                      "@kivicare.com",
                                                    e
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-copy",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "col-12" }, [
                                      e("p", { staticClass: "mb-0" }, [
                                        e("span", [
                                          t._v(
                                            "\n               Password:\n              "
                                          ),
                                        ]),
                                        t._v(" "),
                                        e(
                                          "span",
                                          {
                                            staticClass: "font-weight-bold",
                                            attrs: {
                                              id: "copy-text" + n + "password",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                123456\n              "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "span",
                                          {
                                            staticClass: "text-primary",
                                            attrs: {
                                              title:
                                                t.formTranslation.common.copy,
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.copyParentText(123456, e)
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-copy",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]);
                              }),
                              t._v(" "),
                              e("input", {
                                staticStyle: { opacity: "0" },
                                attrs: {
                                  type: "text",
                                  id: "modal-hidden-field",
                                },
                              }),
                            ],
                            2
                          )
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              e(
                "nav",
                {
                  staticClass:
                    "navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom",
                },
                [
                  e("div", { staticClass: "container-fluid" }, [
                    e(
                      "div",
                      {
                        staticClass: "collapse navbar-collapse",
                        attrs: { id: "navbarSupportedContent" },
                      },
                      [
                        "administrator" === t.getUserRole()
                          ? e(
                              "div",
                              {
                                staticClass:
                                  "navbar-search navbar-search-light form-inline mr-sm-3",
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: t.adminUrl,
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    e(
                                      "span",
                                      {
                                        staticClass: "cursor",
                                        attrs: { id: "wp-logo" },
                                      },
                                      [
                                        e("img", {
                                          staticClass: "navbar-brand-img ml-2",
                                          staticStyle: {
                                            width: "40px",
                                            height: "40px",
                                          },
                                          attrs: {
                                            src: t.wordpress_logo_status
                                              ? t.wordpressLogo
                                              : t.default_wordpress_logo,
                                            alt: "...",
                                          },
                                        }),
                                        t._v(" "),
                                        e(
                                          "b-tooltip",
                                          {
                                            attrs: {
                                              placement: "right",
                                              target: "wp-logo",
                                              "custom-class":
                                                "my-tooltip-class",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .back_to_wordpress
                                              )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        e(
                          "ul",
                          { staticClass: "navbar-nav align-items-center" },
                          [
                            e("li", { staticClass: "nav-item d-xl-none" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "pr-3 sidenav-toggler sidenav-toggler-dark",
                                  on: { click: t.handleSideBarToggle },
                                },
                                [t._m(0)]
                              ),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        t._l(t.userData.head_external_toolbar, function (n, i) {
                          return e("div", { key: i }, [
                            n.link && n.label
                              ? e(
                                  "ul",
                                  {
                                    staticClass:
                                      "navbar-nav align-items-center ml-auto",
                                  },
                                  [
                                    e("li", { staticClass: "nav-item mr-2" }, [
                                      e(
                                        "a",
                                        {
                                          attrs: {
                                            href: n.link,
                                            target: "_blank",
                                          },
                                        },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-white" },
                                            [
                                              n.icon
                                                ? e("i", { class: n.icon })
                                                : t._e(),
                                              t._v(" " + t._s(n.label) + " "),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                )
                              : t._e(),
                          ]);
                        }),
                        t._v(" "),
                        e(
                          "ul",
                          {
                            staticClass:
                              "navbar-nav align-items-center ml-auto",
                          },
                          [
                            "administrator" == t.getUserRole() &&
                            t.demoPluginActive
                              ? e(
                                  "li",
                                  {
                                    staticClass: "nav-item mr-2",
                                    on: {
                                      click: function (e) {
                                        e.preventDefault(), (t.showQrcode = !0);
                                      },
                                    },
                                  },
                                  [t._m(1)]
                                )
                              : t._e(),
                            t._v(" "),
                            "administrator" == t.getUserRole() &&
                            t.demoPluginActive
                              ? e(
                                  "li",
                                  {
                                    staticClass: "nav-item mr-2",
                                    on: {
                                      click: function (e) {
                                        e.preventDefault(),
                                          (t.showChatBot = !0);
                                      },
                                    },
                                  },
                                  [t._m(2)]
                                )
                              : t._e(),
                            t._v(" "),
                            "off" == t.documentationLink &&
                            "administrator" == t.getUserRole()
                              ? e("li", { staticClass: "nav-item" }, [
                                  e(
                                    "a",
                                    {
                                      staticClass: "text-white",
                                      attrs: {
                                        href: "https://apps.iqonic.design/docs/product/kivicare/what-is-kivicare/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "fas fa-external-link-alt",
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common
                                              .documentation
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ])
                              : t._e(),
                            t._v(" "),
                            e(
                              "li",
                              {
                                staticClass: "nav-item",
                                attrs: { id: "hero-navbar" },
                              },
                              [
                                e(
                                  "b-dropdown",
                                  {
                                    staticClass: "pr-0",
                                    attrs: {
                                      variant: "link",
                                      "no-caret": "",
                                      right: "",
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "button-content",
                                        fn: function () {
                                          return [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "media align-items-center",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "avatar avatar-sm rounded-circle",
                                                  },
                                                  [
                                                    e("img", {
                                                      staticStyle: {
                                                        height: "100%",
                                                      },
                                                      attrs: {
                                                        alt: "img",
                                                        src: t.userData
                                                          .profile_photo
                                                          ? t.userData
                                                              .profile_photo
                                                          : t.adminImage,
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "media-body ml-2 d-none d-lg-block",
                                                  },
                                                  [
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "mb-0 text-sm font-weight-bold text-white text-capitalize",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                                            " +
                                                            t._s(
                                                              "administrator" ==
                                                                t.getUserRole() &&
                                                                t.demoPluginActive
                                                                ? "SuperAdmin"
                                                                : t.displayUsername
                                                            ) +
                                                            "\n                                        "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ]),
                                  },
                                  [
                                    t._v(" "),
                                    t.kcCheckPermission(
                                      "receptionist_profile"
                                    ) && "receptionist" === t.getUserRole()
                                      ? e(
                                          "b-dropdown-item",
                                          {
                                            attrs: {
                                              to: {
                                                name: "receptionist.profile",
                                              },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-user",
                                            }),
                                            t._v(
                                              "  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .my_profile
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.kcCheckPermission("doctor_profile") &&
                                    "doctor" === t.getUserRole()
                                      ? e(
                                          "b-dropdown-item",
                                          {
                                            attrs: {
                                              to: { name: "doctor.profile" },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-user-md",
                                            }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .my_profile
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.kcCheckPermission("patient_profile") &&
                                    "patient" === t.getUserRole()
                                      ? e(
                                          "b-dropdown-item",
                                          {
                                            attrs: {
                                              to: { name: "patient.profile" },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fas fa-user-injured",
                                            }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .my_profile
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    !t.kcCheckPermission("clinic_profile") ||
                                    ("clinic_admin" !== t.getUserRole() &&
                                      "administrator" !== t.getUserRole())
                                      ? t._e()
                                      : e(
                                          "b-dropdown-item",
                                          {
                                            attrs: {
                                              to: { name: "clinic.profile" },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-user",
                                            }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .my_profile
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                    t._v(" "),
                                    t.kcCheckPermission("change_password")
                                      ? e(
                                          "b-dropdown-item",
                                          {
                                            attrs: {
                                              to: {
                                                name: "account-setting.password",
                                              },
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-unlock-alt",
                                            }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .change_password
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    e(
                                      "b-dropdown-item",
                                      { on: { click: t.logout } },
                                      [
                                        e("i", {
                                          staticClass: "fas fa-sign-out-alt",
                                        }),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common.logout
                                            ) +
                                            "\n                            "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            e("li", { staticClass: "nav-item" }, [
                              e(
                                "div",
                                {
                                  staticClass: "full-screen",
                                  attrs: { id: "full-screen" },
                                },
                                [
                                  e(
                                    "a",
                                    {
                                      attrs: { href: "#", id: "btnFullscreen" },
                                      on: { click: t.toggleFullScreen },
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "mb-0 text-sm font-weight-bold text-white text-capitalize",
                                        },
                                        [
                                          t.isFullScreen
                                            ? e("i", {
                                                staticClass: "fas fa-compress",
                                              })
                                            : e("i", {
                                                staticClass: "fa fa-expand",
                                              }),
                                          t._v(" "),
                                          e(
                                            "b-tooltip",
                                            {
                                              attrs: {
                                                placement: "right",
                                                target: "btnFullscreen",
                                                "custom-class":
                                                  "my-tooltip-class",
                                                triggers: "hover",
                                                noninteractive: "",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .full_screen
                                                )
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]),
                ]
              ),
              t._v(" "),
              t._m(3),
              t._v(" "),
              e(
                "div",
                { staticClass: "container-fluid mt--5" },
                [
                  e(
                    "div",
                    { staticStyle: { "min-height": "70vh" } },
                    [
                      e(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [e("router-view")],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e("Footer"),
                ],
                1
              ),
            ]
          );
        },
        [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "sidenav-toggler-inner" }, [
              t("i", { staticClass: "sidenav-toggler-line" }),
              this._v(" "),
              t("i", { staticClass: "sidenav-toggler-line" }),
              this._v(" "),
              t("i", { staticClass: "sidenav-toggler-line" }),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "text-white" }, [
              t("i", { staticClass: "fa fa-qrcode" }),
              this._v(" QR for App "),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "text-white" }, [
              t("i", { staticClass: "fas fa-id-card" }),
              this._v(" Demo User Credentials "),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "header bg-primary pb-6" }, [
              t("div", { staticClass: "container-fluid" }),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(368).a,
      r = (n(688), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return 1 != t.userData.addOns.kiviPro ||
            1 == t.getEnablePrescription[0].status
            ? e(
                "b-row",
                [
                  e("b-col", { attrs: { sm: "12" } }, [
                    t.kcCheckPermission("prescription_list")
                      ? e("div", { staticClass: "card p-0 shadow" }, [
                          e(
                            "div",
                            { staticClass: "card-header" },
                            [
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-lg-3" }, [
                                  e("h3", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.patient_encounter
                                          .prescription
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-lg-9 mt-lg-0 mt-4" },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-end align-items-center",
                                      },
                                      [
                                        t.prescriptionList.length > 0 &&
                                        !t.isEcounterTemplateModule
                                          ? e(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                attrs: {
                                                  id: "send_prescription",
                                                  type: "button",
                                                },
                                                on: {
                                                  click: t.mailPrescriptionAdd,
                                                },
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fas fa-paper-plane",
                                                }),
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.clinic
                                                        .dt_lbl_email
                                                    ) +
                                                    "\n                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.userData.addOns.kiviPro &&
                                        t.kivicareCompareVersion(
                                          t.requireProVersion,
                                          t.userData.pro_version
                                        ) &&
                                        "patient" !== t.getUserRole() &&
                                        "1" === t.encounterStatus &&
                                        t.kcCheckPermission(
                                          "prescription_add"
                                        ) &&
                                        !t.isEcounterTemplateModule
                                          ? e(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                on: {
                                                  click: function (e) {
                                                    t.$refs.module_data_import.openModel =
                                                      !0;
                                                  },
                                                },
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fas fa-file-import",
                                                }),
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .import_data
                                                  ) +
                                                    "\n                            "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        0 != t.encounterData.status &&
                                        t.kcCheckPermission("prescription_add")
                                          ? e(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                attrs: {
                                                  to: {
                                                    name: "prescription_add",
                                                  },
                                                },
                                                on: {
                                                  click:
                                                    t.handlePrescriptionAdd,
                                                },
                                              },
                                              [
                                                t.showAddForm
                                                  ? e("i", {
                                                      staticClass:
                                                        "fas fa-times",
                                                    })
                                                  : e("i", {
                                                      staticClass: "fa fa-plus",
                                                    }),
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.showAddForm
                                                        ? t.formTranslation
                                                            .common
                                                            .close_form_btn
                                                        : t.formTranslation
                                                            .encounter_dashboard
                                                            .add_prescription_btn
                                                    ) +
                                                    "\n                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.kcCheckPermission(
                                          "prescription_export"
                                        ) && !t.isEcounterTemplateModule
                                          ? e("module-data-export", {
                                              attrs: {
                                                module_data:
                                                  t.exportPrescription,
                                                module_name:
                                                  t.formTranslation
                                                    .patient_encounter
                                                    .prescription,
                                                module_type: "prescription",
                                              },
                                            })
                                          : t._e(),
                                        t._v(" "),
                                        1 == t.userData.addOns.kiviPro &&
                                        t.prescriptionList.length > 0 &&
                                        !t.isEcounterTemplateModule
                                          ? e(
                                              "button",
                                              {
                                                directives: [
                                                  {
                                                    name: "b-tooltip",
                                                    rawName:
                                                      "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                  },
                                                ],
                                                staticClass:
                                                  "btn btn-sm pr-0 pl-2 ml-1",
                                                attrs: {
                                                  title:
                                                    t.formTranslation
                                                      .widget_setting.print,
                                                  disabled:
                                                    t.printPrescriptionLoader,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.printPrescription.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                e("i", {
                                                  class:
                                                    t.printPrescriptionLoader
                                                      ? "fa fa-sync fa-spin"
                                                      : "fa fa-print",
                                                }),
                                              ]
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              t.userData.addOns.kiviPro
                                ? e("module-data-import", {
                                    ref: "module_data_import",
                                    attrs: {
                                      encounter_id:
                                        t.encounterData.encounter_id,
                                      required_data: [
                                        {
                                          label:
                                            t.formTranslation.common
                                              .prescription_name,
                                          value: "name",
                                        },
                                        {
                                          label:
                                            t.formTranslation.common
                                              .prescription_frequency,
                                          value: "frequency",
                                        },
                                        {
                                          label:
                                            t.formTranslation.common
                                              .prescription_duration,
                                          value: "duration",
                                        },
                                      ],
                                      module_name:
                                        t.formTranslation.common.prescription,
                                      module_type: "prescription",
                                    },
                                    on: {
                                      reloadList: t.getPrescriptionRecords,
                                    },
                                  })
                                : t._e(),
                              t._v(" "),
                              t.showAddForm
                                ? e(
                                    "ModalPopup",
                                    {
                                      attrs: {
                                        modalId: "appointment-details-modal",
                                        modalSize: "lg",
                                        openModal: t.showAddForm,
                                        modalTitle: t.prescriptionData.id
                                          ? t.formTranslation.patient_encounter
                                              .edit_prescription
                                          : t.formTranslation.patient_encounter
                                              .add_prescription,
                                      },
                                      on: {
                                        closeModal: function (e) {
                                          t.showAddForm = !1;
                                        },
                                      },
                                    },
                                    [
                                      t.kcCheckPermission("prescription_add") &&
                                      "1" === t.encounterStatus
                                        ? e("div", { staticClass: "m-4" }, [
                                            e(
                                              "form",
                                              {
                                                attrs: {
                                                  id: "prescriptionDataForm",
                                                  novalidate: !0,
                                                },
                                                on: {
                                                  submit: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.handleSubmit.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    e(
                                                      "div",
                                                      { staticClass: "col-6" },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group",
                                                          },
                                                          [
                                                            e(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "form-control-label",
                                                                attrs: {
                                                                  for: "prescription",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .name
                                                                  ) + " "
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
                                                            e("multi-select", {
                                                              attrs: {
                                                                "deselect-label":
                                                                  "",
                                                                "select-label":
                                                                  "",
                                                                id: "prescription",
                                                                "tag-placeholder":
                                                                  t
                                                                    .formTranslation
                                                                    .patient_encounter
                                                                    .tag_name_plh,
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .settings
                                                                    .tag_plh_option,
                                                                label: "label",
                                                                "track-by":
                                                                  "id",
                                                                taggable: !0,
                                                                options:
                                                                  t.prescriptionNames,
                                                                loading:
                                                                  t.isLoading,
                                                              },
                                                              on: {
                                                                tag: t.addPrescriptionOption,
                                                                "search-change":
                                                                  t.searchPrescriptionNames,
                                                              },
                                                              scopedSlots: t._u(
                                                                [
                                                                  {
                                                                    key: "noResult",
                                                                    fn: function () {
                                                                      return [
                                                                        t._v(
                                                                          "\n                                " +
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .no_result_found
                                                                            ) +
                                                                            "\n                              "
                                                                        ),
                                                                      ];
                                                                    },
                                                                    proxy: !0,
                                                                  },
                                                                ],
                                                                null,
                                                                !1,
                                                                2208772054
                                                              ),
                                                              model: {
                                                                value:
                                                                  t
                                                                    .prescriptionData
                                                                    .name,
                                                                callback:
                                                                  function (e) {
                                                                    t.$set(
                                                                      t.prescriptionData,
                                                                      "name",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "prescriptionData.name",
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            e(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "text-primary small",
                                                              },
                                                              [
                                                                e("b", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .note_prescription
                                                                    )
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            t.submitted &&
                                                            !t.$v
                                                              .prescriptionData
                                                              .name.required
                                                              ? e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "invalid-feedback",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                              " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .name_required
                                                                        ) +
                                                                        "\n                            "
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
                                                    e(
                                                      "div",
                                                      { staticClass: "col-6" },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group",
                                                          },
                                                          [
                                                            e(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "form-control-label",
                                                                attrs: {
                                                                  for: "frequency",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                              " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .frequency
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
                                                            e("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t
                                                                      .prescriptionData
                                                                      .frequency,
                                                                  expression:
                                                                    "prescriptionData.frequency",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                id: "frequency",
                                                                type: "text",
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .patient_encounter
                                                                    .frequency_plh,
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t
                                                                    .prescriptionData
                                                                    .frequency,
                                                              },
                                                              on: {
                                                                input:
                                                                  function (e) {
                                                                    e.target
                                                                      .composing ||
                                                                      t.$set(
                                                                        t.prescriptionData,
                                                                        "frequency",
                                                                        e.target
                                                                          .value
                                                                      );
                                                                  },
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            t.submitted &&
                                                            !t.$v
                                                              .prescriptionData
                                                              .frequency
                                                              .required
                                                              ? e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "invalid-feedback",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                              " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .patient_encounter
                                                                            .frequency_required
                                                                        ) +
                                                                        "\n                            "
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    e(
                                                      "div",
                                                      { staticClass: "col-6" },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group",
                                                          },
                                                          [
                                                            e(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "form-control-label",
                                                                attrs: {
                                                                  for: "duration",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                              " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .duration_Days
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
                                                            e("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t
                                                                      .prescriptionData
                                                                      .duration,
                                                                  expression:
                                                                    "prescriptionData.duration",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                type: "number",
                                                                name: "duration",
                                                                id: "duration",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t
                                                                    .prescriptionData
                                                                    .duration,
                                                              },
                                                              on: {
                                                                keypress:
                                                                  function (e) {
                                                                    return t.filterNonNumeric(
                                                                      e
                                                                    );
                                                                  },
                                                                input:
                                                                  function (e) {
                                                                    e.target
                                                                      .composing ||
                                                                      t.$set(
                                                                        t.prescriptionData,
                                                                        "duration",
                                                                        e.target
                                                                          .value
                                                                      );
                                                                  },
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            t.submitted &&
                                                            !t.$v
                                                              .prescriptionData
                                                              .duration.required
                                                              ? e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "invalid-feedback",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                              " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .patient_encounter
                                                                            .duration_required
                                                                        ) +
                                                                        "\n                            "
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      { staticClass: "col-6" },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group",
                                                          },
                                                          [
                                                            e(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "form-control-label",
                                                                attrs: {
                                                                  for: "instruction",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                              " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .instruction
                                                                    ) +
                                                                    "\n                            "
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            e("textarea", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t
                                                                      .prescriptionData
                                                                      .instruction,
                                                                  expression:
                                                                    "prescriptionData.instruction",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                name: "instruction",
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .patient_encounter
                                                                    .enter_instruction_plh,
                                                                id: "instruction",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t
                                                                    .prescriptionData
                                                                    .instruction,
                                                              },
                                                              on: {
                                                                input:
                                                                  function (e) {
                                                                    e.target
                                                                      .composing ||
                                                                      t.$set(
                                                                        t.prescriptionData,
                                                                        "instruction",
                                                                        e.target
                                                                          .value
                                                                      );
                                                                  },
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col-md-12",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "float-right",
                                                          },
                                                          [
                                                            t.loading
                                                              ? e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-primary",
                                                                    attrs: {
                                                                      type: "button",
                                                                      disabled:
                                                                        "",
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
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .loading
                                                                        ) +
                                                                        "\n                            "
                                                                    ),
                                                                  ]
                                                                )
                                                              : e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-primary",
                                                                    attrs: {
                                                                      type: "submit",
                                                                    },
                                                                  },
                                                                  [
                                                                    e("i", {
                                                                      staticClass:
                                                                        "fa fa-plus",
                                                                    }),
                                                                    t._v(
                                                                      " " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .encounter_dashboard
                                                                            .presciption_save_btn
                                                                        ) +
                                                                        "\n                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                            t._v(" "),
                                                            e(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-outline-primary",
                                                                attrs: {
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.close();
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .cancel
                                                                    )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ])
                                        : t._e(),
                                    ]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("div", { staticClass: "card-body" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "row text-uppercase mb-3 d-md-flex d-none",
                              },
                              [
                                e("div", { staticClass: "col-5 text-left" }, [
                                  e("h5", { staticClass: "mb-0" }, [
                                    t._v(t._s(t.formTranslation.common.name)),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-3" }, [
                                  e("h5", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.patient_encounter
                                          .frequency
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-2" }, [
                                  e("h5", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.patient_encounter
                                          .duration
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                "patient" !== t.getUserRole()
                                  ? e("div", { staticClass: "col-2" }, [
                                      e("h5", { staticClass: "mb-0" }, [
                                        t._v(
                                          t._s(t.formTranslation.common.action)
                                        ),
                                      ]),
                                    ])
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            t.prescriptionList.length > 0
                              ? e(
                                  "div",
                                  t._l(t.prescriptionList, function (n, i) {
                                    return void 0 !== n
                                      ? e(
                                          "div",
                                          {
                                            key: i,
                                            staticClass:
                                              "card encounter-prescription mb-3 p-3 shadow-lg",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "row animated fadeInUp",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "col-md-5" },
                                                  [
                                                    e(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "mb-2 d-md-none",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.name
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          "text-primary mb-0",
                                                      },
                                                      [t._v(t._s(n.name.label))]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "mb-0 small",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(n.instruction)
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
                                                      "col-md-3 col-6 mt-md-0 mt-3",
                                                  },
                                                  [
                                                    e(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "mb-2 d-md-none",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .patient_encounter
                                                              .frequency
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "h5",
                                                      { staticClass: "mb-0" },
                                                      [t._v(t._s(n.frequency))]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-md-2 col-6 mt-md-0 mt-3",
                                                  },
                                                  [
                                                    e(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "mb-2 d-md-none",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .patient_encounter
                                                              .duration
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "h5",
                                                      { staticClass: "mb-0" },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            n.duration +
                                                              " " +
                                                              t.formTranslation
                                                                .fullcalendar
                                                                .day
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                "patient" !== t.getUserRole()
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col-md-2 col-12 mt-md-0 mt-4",
                                                      },
                                                      [
                                                        e(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "mb-2 d-md-none",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.action
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        "1" ===
                                                        t.encounterStatus
                                                          ? e(
                                                              "div",
                                                              [
                                                                e(
                                                                  "b-button-group",
                                                                  {
                                                                    attrs: {
                                                                      size: "sm",
                                                                    },
                                                                  },
                                                                  [
                                                                    t.kcCheckPermission(
                                                                      "prescription_edit"
                                                                    )
                                                                      ? e(
                                                                          "b-button",
                                                                          {
                                                                            directives:
                                                                              [
                                                                                {
                                                                                  name: "b-tooltip",
                                                                                  rawName:
                                                                                    "v-b-tooltip.hover",
                                                                                  modifiers:
                                                                                    {
                                                                                      hover:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                              ],
                                                                            attrs:
                                                                              {
                                                                                variant:
                                                                                  "outline-primary",
                                                                                title:
                                                                                  t
                                                                                    .formTranslation
                                                                                    .common
                                                                                    .edit,
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  return t.handlePrescriptionEdit(
                                                                                    n,
                                                                                    n.id
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            e(
                                                                              "i",
                                                                              {
                                                                                staticClass:
                                                                                  "fa fa-edit",
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    t._v(" "),
                                                                    t.kcCheckPermission(
                                                                      "prescription_delete"
                                                                    )
                                                                      ? e(
                                                                          "b-button",
                                                                          {
                                                                            directives:
                                                                              [
                                                                                {
                                                                                  name: "b-tooltip",
                                                                                  rawName:
                                                                                    "v-b-tooltip.hover",
                                                                                  modifiers:
                                                                                    {
                                                                                      hover:
                                                                                        !0,
                                                                                    },
                                                                                },
                                                                              ],
                                                                            attrs:
                                                                              {
                                                                                variant:
                                                                                  "outline-danger",
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
                                                                                  return t.deletePrescriptionData(
                                                                                    i
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            e(
                                                                              "i",
                                                                              {
                                                                                staticClass:
                                                                                  "fa fa-trash",
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : e("span", [
                                                              t._v(" - "),
                                                            ]),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e();
                                  }),
                                  0
                                )
                              : t.prescriptionLoader
                              ? e(
                                  "div",
                                  {
                                    staticClass:
                                      "h2 font-weight-bold mb-0 text-center",
                                  },
                                  [
                                    e("i", {
                                      staticClass: "fa fa-spinner fa-spin",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                )
                              : e("div", [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e(
                                        "h4",
                                        {
                                          staticClass:
                                            "text-danger text-center my-3",
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation
                                                .patient_encounter
                                                .no_prescription_found
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                          ]),
                        ])
                      : t._e(),
                  ]),
                ],
                1
              )
            : t._e();
        },
        [],
        !1,
        null,
        "7c43dc9c",
        null
      );
    e.a = o.exports;
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
    var a,
      s = function () {
        return (s =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      },
      l = (function () {
        function t() {
          (this.gutters = {}),
            (this.el = Object(i.Db)(
              '<div class="fc-scroller-canvas"> <div class="fc-content"></div> <div class="fc-bg"></div> </div>'
            )),
            (this.contentEl = this.el.querySelector(".fc-content")),
            (this.bgEl = this.el.querySelector(".fc-bg"));
        }
        return (
          (t.prototype.setGutters = function (t) {
            t ? s(this.gutters, t) : (this.gutters = {}), this.updateSize();
          }),
          (t.prototype.setWidth = function (t) {
            (this.width = t), this.updateSize();
          }),
          (t.prototype.setMinWidth = function (t) {
            (this.minWidth = t), this.updateSize();
          }),
          (t.prototype.clearWidth = function () {
            (this.width = null), (this.minWidth = null), this.updateSize();
          }),
          (t.prototype.updateSize = function () {
            var t = this.gutters,
              e = this.el;
            Object(i.ub)(e, "fc-gutter-left", t.left),
              Object(i.ub)(e, "fc-gutter-right", t.right),
              Object(i.ub)(e, "fc-gutter-top", t.top),
              Object(i.ub)(e, "fc-gutter-bottom", t.bottom),
              Object(i.C)(e, {
                paddingLeft: t.left || "",
                paddingRight: t.right || "",
                paddingTop: t.top || "",
                paddingBottom: t.bottom || "",
                width:
                  null != this.width
                    ? this.width + (t.left || 0) + (t.right || 0)
                    : "",
                minWidth:
                  null != this.minWidth
                    ? this.minWidth + (t.left || 0) + (t.right || 0)
                    : "",
              }),
              Object(i.C)(this.bgEl, {
                left: t.left || "",
                right: t.right || "",
                top: t.top || "",
                bottom: t.bottom || "",
              });
          }),
          t
        );
      })(),
      c = (function (t) {
        function e(e, n) {
          var r = t.call(this, e, n) || this;
          return (
            (r.reportScroll = function () {
              r.isScrolling || r.reportScrollStart(),
                r.trigger("scroll"),
                (r.isMoving = !0),
                r.requestMovingEnd();
            }),
            (r.reportScrollStart = function () {
              r.isScrolling ||
                ((r.isScrolling = !0), r.trigger("scrollStart", r.isTouching));
            }),
            (r.reportTouchStart = function () {
              r.isTouching = !0;
            }),
            (r.reportTouchEnd = function () {
              r.isTouching &&
                ((r.isTouching = !1),
                r.isTouchScrollEnabled && r.unbindPreventTouchScroll(),
                r.isMoving || r.reportScrollEnd());
            }),
            (r.isScrolling = !1),
            (r.isTouching = !1),
            (r.isMoving = !1),
            (r.isTouchScrollEnabled = !0),
            (r.requestMovingEnd = Object(i.fb)(r.reportMovingEnd, 500)),
            (r.canvas = new l()),
            r.el.appendChild(r.canvas.el),
            r.applyOverflow(),
            r.bindHandlers(),
            r
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.unbindHandlers();
          }),
          (e.prototype.disableTouchScroll = function () {
            (this.isTouchScrollEnabled = !1), this.bindPreventTouchScroll();
          }),
          (e.prototype.enableTouchScroll = function () {
            (this.isTouchScrollEnabled = !0),
              this.isTouching || this.unbindPreventTouchScroll();
          }),
          (e.prototype.bindPreventTouchScroll = function () {
            this.preventTouchScrollHandler ||
              this.el.addEventListener(
                "touchmove",
                (this.preventTouchScrollHandler = i.hc)
              );
          }),
          (e.prototype.unbindPreventTouchScroll = function () {
            this.preventTouchScrollHandler &&
              (this.el.removeEventListener(
                "touchmove",
                this.preventTouchScrollHandler
              ),
              (this.preventTouchScrollHandler = null));
          }),
          (e.prototype.bindHandlers = function () {
            this.el.addEventListener("scroll", this.reportScroll),
              this.el.addEventListener("touchstart", this.reportTouchStart, {
                passive: !0,
              }),
              this.el.addEventListener("touchend", this.reportTouchEnd);
          }),
          (e.prototype.unbindHandlers = function () {
            this.el.removeEventListener("scroll", this.reportScroll),
              this.el.removeEventListener("touchstart", this.reportTouchStart, {
                passive: !0,
              }),
              this.el.removeEventListener("touchend", this.reportTouchEnd);
          }),
          (e.prototype.reportMovingEnd = function () {
            (this.isMoving = !1), this.isTouching || this.reportScrollEnd();
          }),
          (e.prototype.reportScrollEnd = function () {
            this.isScrolling &&
              (this.trigger("scrollEnd"), (this.isScrolling = !1));
          }),
          (e.prototype.getScrollLeft = function () {
            var t = this.el,
              e = window.getComputedStyle(t).direction,
              n = t.scrollLeft;
            if ("rtl" === e)
              switch (d()) {
                case "positive":
                  n = n + t.clientWidth - t.scrollWidth;
                  break;
                case "reverse":
                  n = -n;
              }
            return n;
          }),
          (e.prototype.setScrollLeft = function (t) {
            var e = this.el;
            if ("rtl" === window.getComputedStyle(e).direction)
              switch (d()) {
                case "positive":
                  t = t - e.clientWidth + e.scrollWidth;
                  break;
                case "reverse":
                  t = -t;
              }
            e.scrollLeft = t;
          }),
          (e.prototype.getScrollFromLeft = function () {
            var t = this.el,
              e = window.getComputedStyle(t).direction,
              n = t.scrollLeft;
            if ("rtl" === e)
              switch (d()) {
                case "negative":
                  n = n - t.clientWidth + t.scrollWidth;
                  break;
                case "reverse":
                  n = -n - t.clientWidth + t.scrollWidth;
              }
            return n;
          }),
          e
        );
      })(i.p);
    function d() {
      return (
        a ||
        (a = (function () {
          var t,
            e = Object(i.Db)(
              '<div style=" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; ">A</div>'
            );
          return (
            document.body.appendChild(e),
            e.scrollLeft > 0
              ? (t = "positive")
              : ((e.scrollLeft = 1),
                (t = e.scrollLeft > 0 ? "reverse" : "negative")),
            Object(i.pc)(e),
            t
          );
        })())
      );
    }
    i.j.mixInto(c);
    var u = (function () {
        function t(t, e, n) {
          (this.isHScrollbarsClipped = !1),
            (this.isVScrollbarsClipped = !1),
            "clipped-scroll" === t &&
              ((t = "scroll"), (this.isHScrollbarsClipped = !0)),
            "clipped-scroll" === e &&
              ((e = "scroll"), (this.isVScrollbarsClipped = !0)),
            (this.enhancedScroll = new c(t, e)),
            n.appendChild(
              (this.el = Object(i.Z)("div", { className: "fc-scroller-clip" }))
            ),
            this.el.appendChild(this.enhancedScroll.el);
        }
        return (
          (t.prototype.destroy = function () {
            Object(i.pc)(this.el);
          }),
          (t.prototype.updateSize = function () {
            var t = this.enhancedScroll,
              e = t.el,
              n = Object(i.N)(e),
              r = {
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
              };
            this.isVScrollbarsClipped &&
              ((r.marginLeft = -n.scrollbarLeft),
              (r.marginRight = -n.scrollbarRight)),
              this.isHScrollbarsClipped &&
                (r.marginBottom = -n.scrollbarBottom),
              Object(i.C)(e, r),
              (!this.isHScrollbarsClipped && "hidden" !== t.overflowX) ||
              (!this.isVScrollbarsClipped && "hidden" !== t.overflowY) ||
              n.scrollbarLeft ||
              n.scrollbarRight ||
              n.scrollbarBottom
                ? e.classList.remove("fc-no-scrollbars")
                : e.classList.add("fc-no-scrollbars");
          }),
          (t.prototype.setHeight = function (t) {
            this.enhancedScroll.setHeight(t);
          }),
          (t.prototype.getScrollbarWidths = function () {
            var t = this.enhancedScroll.getScrollbarWidths();
            return (
              this.isVScrollbarsClipped && ((t.left = 0), (t.right = 0)),
              this.isHScrollbarsClipped && (t.bottom = 0),
              t
            );
          }),
          t
        );
      })(),
      p = (function () {
        function t(t, e) {
          (this.axis = t), (this.scrollers = e);
          for (var n = 0, i = this.scrollers; n < i.length; n++) {
            var r = i[n];
            this.initScroller(r);
          }
        }
        return (
          (t.prototype.initScroller = function (t) {
            var e = this,
              n = t.enhancedScroll,
              i = function () {
                e.assignMasterScroller(t);
              };
            "wheel mousewheel DomMouseScroll MozMousePixelScroll"
              .split(" ")
              .forEach(function (t) {
                n.el.addEventListener(t, i);
              }),
              n
                .on("scrollStart", function () {
                  e.masterScroller || e.assignMasterScroller(t);
                })
                .on("scroll", function () {
                  if (t === e.masterScroller)
                    for (var i = 0, r = e.scrollers; i < r.length; i++) {
                      var o = r[i];
                      if (o !== t)
                        switch (e.axis) {
                          case "horizontal":
                            o.enhancedScroll.el.scrollLeft = n.el.scrollLeft;
                            break;
                          case "vertical":
                            o.enhancedScroll.setScrollTop(n.getScrollTop());
                        }
                    }
                })
                .on("scrollEnd", function () {
                  t === e.masterScroller && e.unassignMasterScroller();
                });
          }),
          (t.prototype.assignMasterScroller = function (t) {
            this.unassignMasterScroller(), (this.masterScroller = t);
            for (var e = 0, n = this.scrollers; e < n.length; e++) {
              var i = n[e];
              i !== t && i.enhancedScroll.disableTouchScroll();
            }
          }),
          (t.prototype.unassignMasterScroller = function () {
            if (this.masterScroller) {
              for (var t = 0, e = this.scrollers; t < e.length; t++)
                e[t].enhancedScroll.enableTouchScroll();
              this.masterScroller = null;
            }
          }),
          (t.prototype.update = function () {
            for (
              var t,
                e,
                n = this.scrollers.map(function (t) {
                  return t.getScrollbarWidths();
                }),
                i = 0,
                r = 0,
                o = 0,
                a = 0,
                s = 0,
                l = n;
              s < l.length;
              s++
            )
              (t = l[s]),
                (i = Math.max(i, t.left)),
                (r = Math.max(r, t.right)),
                (o = Math.max(o, t.top)),
                (a = Math.max(a, t.bottom));
            for (e = 0; e < this.scrollers.length; e++) {
              var c = this.scrollers[e];
              (t = n[e]),
                c.enhancedScroll.canvas.setGutters(
                  "horizontal" === this.axis
                    ? { left: i - t.left, right: r - t.right }
                    : { top: o - t.top, bottom: a - t.bottom }
                );
            }
          }),
          t
        );
      })(),
      h = (function () {
        function t(t, e, n) {
          (this.headerScroller = new u("clipped-scroll", "hidden", t)),
            (this.bodyScroller = new u("auto", n, e)),
            (this.scrollJoiner = new p("horizontal", [
              this.headerScroller,
              this.bodyScroller,
            ]));
        }
        return (
          (t.prototype.destroy = function () {
            this.headerScroller.destroy(), this.bodyScroller.destroy();
          }),
          (t.prototype.setHeight = function (t, e) {
            var n;
            (n = e ? "auto" : t - this.queryHeadHeight()),
              this.bodyScroller.setHeight(n),
              this.headerScroller.updateSize(),
              this.bodyScroller.updateSize(),
              this.scrollJoiner.update();
          }),
          (t.prototype.queryHeadHeight = function () {
            return this.headerScroller.enhancedScroll.canvas.contentEl.getBoundingClientRect()
              .height;
          }),
          t
        );
      })(),
      f = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.parentEl = e), n;
        }
        return (
          o(e, t),
          (e.prototype.firstContext = function (t) {
            this.parentEl.appendChild(
              (this.tableEl = Object(i.Z)("table", {
                className: t.theme.getClass("tableGrid"),
              }))
            );
          }),
          (e.prototype.destroy = function () {
            Object(i.pc)(this.tableEl), t.prototype.destroy.call(this);
          }),
          (e.prototype.render = function (t) {
            this.renderDates(t.tDateProfile);
          }),
          (e.prototype.renderDates = function (t) {
            for (
              var e = this.context,
                n = e.dateEnv,
                r = e.theme,
                o = t.cellRows,
                a = o[o.length - 1],
                s = Object(i.F)(t.labelInterval) > Object(i.F)(t.slotDuration),
                l = Object(i.Pb)(t.slotDuration),
                c = "<colgroup>",
                d = t.slotCnt - 1;
              d >= 0;
              d--
            )
              c += "<col/>";
            (c += "</colgroup>"), (c += "<tbody>");
            for (var u = 0, p = o; u < p.length; u++) {
              var h = p[u];
              c += "<tr" + (s && h === a ? ' class="fc-chrono"' : "") + ">";
              for (var f = 0, b = h; f < b.length; f++) {
                var m = b[f],
                  g = [r.getClass("widgetHeader")];
                m.isWeekStart && g.push("fc-em-cell"),
                  l &&
                    (g = g.concat(
                      Object(i.wb)(
                        m.date,
                        this.props.dateProfile,
                        this.context,
                        !0
                      )
                    )),
                  (c +=
                    '<th class="' +
                    g.join(" ") +
                    '" data-date="' +
                    n.formatIso(m.date, {
                      omitTime: !t.isTimeScale,
                      omitTimeZoneOffset: !0,
                    }) +
                    '"' +
                    (m.colspan > 1 ? ' colspan="' + m.colspan + '"' : "") +
                    '><div class="fc-cell-content">' +
                    m.spanHtml +
                    "</div></th>");
              }
              c += "</tr>";
            }
            (c += "</tbody>"),
              (this.tableEl.innerHTML = c),
              (this.slatColEls = Object(i.sb)(this.tableEl, "col")),
              (this.innerEls = Object(i.sb)(
                this.tableEl.querySelector("tr:last-child"),
                "th .fc-cell-text"
              )),
              Object(i.sb)(
                this.tableEl.querySelectorAll("tr:not(:last-child)"),
                "th .fc-cell-text"
              ).forEach(function (t) {
                t.classList.add("fc-sticky");
              });
          }),
          e
        );
      })(i.b),
      b = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            e.appendChild(
              (n.el = Object(i.Z)("div", { className: "fc-slats" }))
            ),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            Object(i.pc)(this.el), t.prototype.destroy.call(this);
          }),
          (e.prototype.render = function (t) {
            this.renderDates(t.tDateProfile);
          }),
          (e.prototype.renderDates = function (t) {
            for (
              var e = this.context,
                n = e.calendar,
                r = e.view,
                o = e.theme,
                a = e.dateEnv,
                s = t.slotDates,
                l = t.isWeekStarts,
                c = '<table class="' + o.getClass("tableGrid") + '"><colgroup>',
                d = 0;
              d < s.length;
              d++
            )
              c += "<col/>";
            for (
              c += "</colgroup>", c += "<tbody><tr>", d = 0;
              d < s.length;
              d++
            )
              c += this.slatCellHtml(s[d], l[d], t);
            for (
              c += "</tr></tbody></table>",
                this.el.innerHTML = c,
                this.slatColEls = Object(i.sb)(this.el, "col"),
                this.slatEls = Object(i.sb)(this.el, "td"),
                d = 0;
              d < s.length;
              d++
            )
              n.publiclyTrigger("dayRender", [
                { date: a.toDate(s[d]), el: this.slatEls[d], view: r },
              ]);
            (this.outerCoordCache = new i.o(this.el, this.slatEls, !0, !1)),
              (this.innerCoordCache = new i.o(
                this.el,
                Object(i.rb)(this.slatEls, "div"),
                !0,
                !1
              ));
          }),
          (e.prototype.slatCellHtml = function (t, e, n) {
            var r,
              o = this.context,
              a = o.theme,
              s = o.dateEnv;
            return (
              n.isTimeScale
                ? (r = []).push(
                    Object(i.Lb)(
                      s.countDurationsBetween(
                        n.normalizedRange.start,
                        t,
                        n.labelInterval
                      )
                    )
                      ? "fc-major"
                      : "fc-minor"
                  )
                : (r = Object(i.wb)(
                    t,
                    this.props.dateProfile,
                    this.context
                  )).push("fc-day"),
              r.unshift(a.getClass("widgetContent")),
              e && r.push("fc-em-cell"),
              '<td class="' +
                r.join(" ") +
                '" data-date="' +
                s.formatIso(t, {
                  omitTime: !n.isTimeScale,
                  omitTimeZoneOffset: !0,
                }) +
                '"><div></div></td>'
            );
          }),
          (e.prototype.updateSize = function () {
            this.outerCoordCache.build(), this.innerCoordCache.build();
          }),
          (e.prototype.positionToHit = function (t) {
            var e = this.outerCoordCache,
              n = this.context,
              r = n.dateEnv,
              o = n.isRtl,
              a = this.props.tDateProfile,
              s = e.leftToIndex(t);
            if (null != s) {
              var l = e.getWidth(s),
                c = o ? (e.rights[s] - t) / l : (t - e.lefts[s]) / l,
                d = Math.floor(c * a.snapsPerSlot),
                u = r.add(a.slotDates[s], Object(i.Yb)(a.snapDuration, d));
              return {
                dateSpan: {
                  range: { start: u, end: r.add(u, a.snapDuration) },
                  allDay: !this.props.tDateProfile.isTimeScale,
                },
                dayEl: this.slatColEls[s],
                left: e.lefts[s],
                right: e.rights[s],
              };
            }
            return null;
          }),
          e
        );
      })(i.b);
    i.W.MAX_TIMELINE_SLOTS = 1e3;
    var m = [
      { years: 1 },
      { months: 1 },
      { days: 1 },
      { hours: 1 },
      { minutes: 30 },
      { minutes: 15 },
      { minutes: 10 },
      { minutes: 5 },
      { minutes: 1 },
      { seconds: 30 },
      { seconds: 15 },
      { seconds: 10 },
      { seconds: 5 },
      { seconds: 1 },
      { milliseconds: 500 },
      { milliseconds: 100 },
      { milliseconds: 10 },
      { milliseconds: 1 },
    ];
    function g(t, e, n, r) {
      var o = {
        labelInterval: y(n, "slotLabelInterval"),
        slotDuration: y(n, "slotDuration"),
      };
      !(function (t, e, n) {
        var r = e.currentRange;
        if (
          (t.labelInterval &&
            n.countDurationsBetween(r.start, r.end, t.labelInterval) >
              i.W.MAX_TIMELINE_SLOTS &&
            (t.labelInterval = null),
          t.slotDuration &&
            n.countDurationsBetween(r.start, r.end, t.slotDuration) >
              i.W.MAX_TIMELINE_SLOTS &&
            (t.slotDuration = null),
          t.labelInterval && t.slotDuration)
        ) {
          var o = Object(i.zc)(t.labelInterval, t.slotDuration);
          (null === o || o < 1) && (t.slotDuration = null);
        }
      })(o, t, e),
        M(o, t, e),
        (function (t, e, n) {
          var r = e.currentRange,
            o = t.slotDuration;
          if (!o) {
            for (var a = M(t, e, n), s = 0, l = m; s < l.length; s++) {
              var c = l[s],
                d = Object(i.Y)(c),
                u = Object(i.zc)(a, d);
              if (null !== u && u > 1 && u <= 6) {
                o = d;
                break;
              }
            }
            o && n.countDurationsBetween(r.start, r.end, o) > 200 && (o = null),
              o || (o = a),
              (t.slotDuration = o);
          }
        })(o, t, e);
      var a = n.slotLabelFormat,
        s = Array.isArray(a)
          ? a
          : null != a
          ? [a]
          : (function (t, e, n, r) {
              var o,
                a,
                s = t.labelInterval,
                l = Object(i.Bb)(s).unit,
                c = r.weekNumbers,
                d = (o = a = null);
              switch (("week" !== l || c || (l = "day"), l)) {
                case "year":
                  d = { year: "numeric" };
                  break;
                case "month":
                  O("years", e, n) > 1 && (d = { year: "numeric" }),
                    (o = { month: "short" });
                  break;
                case "week":
                  O("years", e, n) > 1 && (d = { year: "numeric" }),
                    (o = { week: "narrow" });
                  break;
                case "day":
                  O("years", e, n) > 1
                    ? (d = { year: "numeric", month: "long" })
                    : O("months", e, n) > 1 && (d = { month: "long" }),
                    c && (o = { week: "short" }),
                    (a = { weekday: "narrow", day: "numeric" });
                  break;
                case "hour":
                  c && (d = { week: "short" }),
                    O("days", e, n) > 1 &&
                      (o = {
                        weekday: "short",
                        day: "numeric",
                        month: "numeric",
                        omitCommas: !0,
                      }),
                    (a = {
                      hour: "numeric",
                      minute: "2-digit",
                      omitZeroMinute: !0,
                      meridiem: "short",
                    });
                  break;
                case "minute":
                  Object(i.E)(s) / 60 >= 6
                    ? ((d = { hour: "numeric", meridiem: "short" }),
                      (o = function (t) {
                        return ":" + Object(i.Zb)(t.date.minute, 2);
                      }))
                    : (d = {
                        hour: "numeric",
                        minute: "numeric",
                        meridiem: "short",
                      });
                  break;
                case "second":
                  Object(i.G)(s) / 60 >= 6
                    ? ((d = {
                        hour: "numeric",
                        minute: "2-digit",
                        meridiem: "lowercase",
                      }),
                      (o = function (t) {
                        return ":" + Object(i.Zb)(t.date.second, 2);
                      }))
                    : (d = {
                        hour: "numeric",
                        minute: "2-digit",
                        second: "2-digit",
                        meridiem: "lowercase",
                      });
                  break;
                case "millisecond":
                  (d = {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    meridiem: "lowercase",
                  }),
                    (o = function (t) {
                      return "." + Object(i.Zb)(t.millisecond, 3);
                    });
              }
              return [].concat(d || [], o || [], a || []);
            })(o, t, e, n);
      (o.headerFormats = s.map(function (t) {
        return Object(i.cb)(t);
      })),
        (o.isTimeScale = Boolean(o.slotDuration.milliseconds));
      var l = null;
      if (!o.isTimeScale) {
        var c = Object(i.Bb)(o.slotDuration).unit;
        /year|month|week/.test(c) && (l = c);
      }
      (o.largeUnit = l),
        (o.emphasizeWeeks =
          Object(i.Pb)(o.slotDuration) &&
          O("weeks", t, e) >= 2 &&
          !n.businessHours);
      var d,
        u,
        p = n.snapDuration;
      p && ((d = Object(i.Y)(p)), (u = Object(i.zc)(o.slotDuration, d))),
        null == u && ((d = o.slotDuration), (u = 1)),
        (o.snapDuration = d),
        (o.snapsPerSlot = u);
      var h = Object(i.F)(t.maxTime) - Object(i.F)(t.minTime),
        f = v(t.renderRange.start, o, e),
        b = v(t.renderRange.end, o, e);
      o.isTimeScale &&
        ((f = e.add(f, t.minTime)), (b = e.add(Object(i.v)(b, -1), t.maxTime))),
        (o.timeWindowMs = h),
        (o.normalizedRange = { start: f, end: b });
      for (var g = [], A = f; A < b; )
        _(A, o, t, r) && g.push(A), (A = e.add(A, o.slotDuration));
      o.slotDates = g;
      var x = -1,
        z = 0,
        C = [],
        k = [];
      for (A = f; A < b; )
        _(A, o, t, r) ? (x++, C.push(x), k.push(z)) : C.push(x + 0.5),
          (A = e.add(A, o.snapDuration)),
          z++;
      return (
        (o.snapDiffToIndex = C),
        (o.snapIndexToDiff = k),
        (o.snapCnt = x + 1),
        (o.slotCnt = o.snapCnt / o.snapsPerSlot),
        (o.isWeekStarts = (function (t, e) {
          for (
            var n = t.slotDates,
              i = t.emphasizeWeeks,
              r = null,
              o = [],
              a = 0,
              s = n;
            a < s.length;
            a++
          ) {
            var l = s[a],
              c = e.computeWeekNumber(l),
              d = i && null !== r && r !== c;
            (r = c), o.push(d);
          }
          return o;
        })(o, e)),
        (o.cellRows = (function (t, e, n) {
          for (
            var r = t.slotDates,
              o = t.headerFormats,
              a = o.map(function (t) {
                return [];
              }),
              s = o.map(function (t) {
                return t.getLargestUnit ? t.getLargestUnit() : null;
              }),
              l = 0;
            l < r.length;
            l++
          )
            for (
              var c = r[l], d = t.isWeekStarts[l], u = 0;
              u < o.length;
              u++
            ) {
              var p = o[u],
                h = a[u],
                f = h[h.length - 1],
                b = null;
              if (o.length > 1 && u < o.length - 1) {
                var m = e.format(c, p);
                f && f.text === m
                  ? (f.colspan += 1)
                  : (b = w(c, m, s[u], n, e));
              } else
                !f ||
                Object(i.Lb)(
                  e.countDurationsBetween(
                    t.normalizedRange.start,
                    c,
                    t.labelInterval
                  )
                )
                  ? (b = w(c, (m = e.format(c, p)), s[u], n, e))
                  : (f.colspan += 1);
              b && ((b.weekStart = d), h.push(b));
            }
          return a;
        })(o, e, n)),
        o
      );
    }
    function v(t, e, n) {
      var r = t;
      return (
        e.isTimeScale ||
          ((r = Object(i.sc)(r)),
          e.largeUnit && (r = n.startOf(r, e.largeUnit))),
        r
      );
    }
    function _(t, e, n, r) {
      if (r.isHiddenDay(t)) return !1;
      if (e.isTimeScale) {
        var o = Object(i.sc)(t),
          a = t.valueOf() - o.valueOf() - Object(i.F)(n.minTime);
        return (a = ((a % 864e5) + 864e5) % 864e5) < e.timeWindowMs;
      }
      return !0;
    }
    function y(t, e) {
      var n = t[e];
      if (null != n) return Object(i.Y)(n);
    }
    function M(t, e, n) {
      var r = e.currentRange,
        o = t.labelInterval;
      if (!o) {
        var a = void 0;
        if (t.slotDuration) {
          for (var s = 0, l = m; s < l.length; s++) {
            a = l[s];
            var c = Object(i.Y)(a),
              d = Object(i.zc)(c, t.slotDuration);
            if (null !== d && d <= 6) {
              o = c;
              break;
            }
          }
          o || (o = t.slotDuration);
        } else
          for (
            var u = 0, p = m;
            u < p.length &&
            ((a = p[u]),
            (o = Object(i.Y)(a)),
            !(n.countDurationsBetween(r.start, r.end, o) >= 18));
            u++
          );
        t.labelInterval = o;
      }
      return o;
    }
    function O(t, e, n) {
      var r = e.currentRange,
        o = null;
      return (
        "years" === t
          ? (o = n.diffWholeYears(r.start, r.end))
          : "months" === t || "weeks" === t
          ? (o = n.diffWholeMonths(r.start, r.end))
          : "days" === t && (o = Object(i.jb)(r.start, r.end)),
        o || 0
      );
    }
    function w(t, e, n, r, o) {
      return {
        text: e,
        spanHtml: Object(i.H)(
          r,
          o,
          { date: t, type: n, forceOff: !n },
          { class: "fc-cell-text" },
          Object(i.Cb)(e)
        ),
        date: t,
        colspan: 1,
        isWeekStart: !1,
      };
    }
    var A = (function () {
        function t(t, e) {
          (this.headParent = t), (this.bodyParent = e);
        }
        return (
          (t.prototype.render = function (t, e) {
            var n = e ? { right: -t } : { left: t };
            this.headParent.appendChild(
              (this.arrowEl = Object(i.Z)("div", {
                className: "fc-now-indicator fc-now-indicator-arrow",
                style: n,
              }))
            ),
              this.bodyParent.appendChild(
                (this.lineEl = Object(i.Z)("div", {
                  className: "fc-now-indicator fc-now-indicator-line",
                  style: n,
                }))
              );
          }),
          (t.prototype.unrender = function () {
            this.arrowEl && Object(i.pc)(this.arrowEl),
              this.lineEl && Object(i.pc)(this.lineEl);
          }),
          t
        );
      })(),
      x = (function () {
        var t = Object(i.Db)(
          '<div style="position:-webkit-sticky;position:sticky"></div>'
        ).style.position;
        return -1 !== t.indexOf("sticky") ? t : null;
      })(),
      z = /Edge/.test(navigator.userAgent),
      C = "-webkit-sticky" === x,
      k = (function () {
        function t(t, e, n) {
          var r = this;
          (this.usingRelative = null),
            (this.updateSize = function () {
              var t = Array.prototype.slice.call(
                  r.scroller.canvas.el.querySelectorAll(".fc-sticky")
                ),
                e = r.queryElGeoms(t),
                n = r.scroller.el.clientWidth;
              r.usingRelative
                ? (function (t, e, n) {
                    t.forEach(function (t, r) {
                      var o = e[r].naturalBound;
                      Object(i.C)(t, {
                        position: "relative",
                        left: n[r].left - o.left,
                        top: n[r].top - o.top,
                      });
                    });
                  })(t, e, r.computeElDestinations(e, n))
                : (function (t, e, n) {
                    t.forEach(function (t, r) {
                      var o = 0;
                      "center" === e[r].intendedTextAlign &&
                        ((o = (n - e[r].elWidth) / 2),
                        "center" === e[r].computedTextAlign &&
                          (t.setAttribute("data-sticky-center", ""),
                          (t.parentNode.style.textAlign = "left"))),
                        Object(i.C)(t, {
                          position: x,
                          left: o,
                          right: 0,
                          top: 0,
                        });
                    });
                  })(t, e, n);
            }),
            (this.scroller = t),
            (this.usingRelative = !x || (z && e) || ((z || C) && n)),
            this.usingRelative && t.on("scrollEnd", this.updateSize);
        }
        return (
          (t.prototype.destroy = function () {
            this.scroller.off("scrollEnd", this.updateSize);
          }),
          (t.prototype.queryElGeoms = function (t) {
            for (
              var e = this.scroller.canvas.el.getBoundingClientRect(),
                n = [],
                r = 0,
                o = t;
              r < o.length;
              r++
            ) {
              var a = o[r],
                s = Object(i.uc)(
                  a.parentNode.getBoundingClientRect(),
                  -e.left,
                  -e.top
                ),
                l = a.getBoundingClientRect(),
                c = window.getComputedStyle(a),
                d = window.getComputedStyle(a.parentNode).textAlign,
                u = d,
                p = null;
              "sticky" !== c.position &&
                (p = Object(i.uc)(
                  l,
                  -e.left - (parseFloat(c.left) || 0),
                  -e.top - (parseFloat(c.top) || 0)
                )),
                a.hasAttribute("data-sticky-center") && (u = "center"),
                n.push({
                  parentBound: s,
                  naturalBound: p,
                  elWidth: l.width,
                  elHeight: l.height,
                  computedTextAlign: d,
                  intendedTextAlign: u,
                });
            }
            return n;
          }),
          (t.prototype.computeElDestinations = function (t, e) {
            var n = this.scroller.getScrollFromLeft(),
              i = this.scroller.getScrollTop(),
              r = n + e;
            return t.map(function (t) {
              var e,
                o,
                a = t.elWidth,
                s = t.elHeight,
                l = t.parentBound,
                c = t.naturalBound;
              switch (t.intendedTextAlign) {
                case "left":
                  e = n;
                  break;
                case "right":
                  e = r - a;
                  break;
                case "center":
                  e = (n + r) / 2 - a / 2;
              }
              return (
                (e = Math.min(e, l.right - a)),
                (e = Math.max(e, l.left)),
                (o = i),
                (o = Math.min(o, l.bottom - s)),
                { left: e, top: (o = Math.max(o, c.top)) }
              );
            });
          }),
          t
        );
      })(),
      S = (function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (
            (r.renderSkeleton = Object(i.Wb)(
              r._renderSkeleton,
              r._unrenderSkeleton
            )),
            (r.layout = new h(e, n, "auto")),
            r
          );
        }
        return (
          o(e, t),
          (e.prototype.render = function (t, e) {
            var n = (this.tDateProfile = g(
              t.dateProfile,
              e.dateEnv,
              e.options,
              t.dateProfileGenerator
            ));
            this.renderSkeleton(e),
              this.header.receiveProps(
                { dateProfile: t.dateProfile, tDateProfile: n },
                e
              ),
              this.slats.receiveProps(
                { dateProfile: t.dateProfile, tDateProfile: n },
                e
              );
          }),
          (e.prototype.destroy = function () {
            this.renderSkeleton.unrender(),
              this.layout.destroy(),
              t.prototype.destroy.call(this);
          }),
          (e.prototype._renderSkeleton = function (t) {
            var e = this.layout,
              n = e.headerScroller.enhancedScroll,
              i = e.bodyScroller.enhancedScroll;
            (this.headStickyScroller = new k(n, t.isRtl, !1)),
              (this.bodyStickyScroller = new k(i, t.isRtl, !1)),
              (this.header = new f(n.canvas.contentEl)),
              (this.slats = new b(i.canvas.bgEl)),
              (this.nowIndicator = new A(n.canvas.el, i.canvas.el));
          }),
          (e.prototype._unrenderSkeleton = function () {
            this.header.destroy(),
              this.slats.destroy(),
              this.nowIndicator.unrender(),
              this.headStickyScroller.destroy(),
              this.bodyStickyScroller.destroy();
          }),
          (e.prototype.getNowIndicatorUnit = function (t, e) {
            var n = this.context,
              r = (this.tDateProfile = g(t, n.dateEnv, n.options, e));
            if (r.isTimeScale) return Object(i.Bb)(r.slotDuration).unit;
          }),
          (e.prototype.renderNowIndicator = function (t) {
            Object(i.kc)(this.tDateProfile.normalizedRange, t) &&
              this.nowIndicator.render(this.dateToCoord(t), this.context.isRtl);
          }),
          (e.prototype.unrenderNowIndicator = function () {
            this.nowIndicator.unrender();
          }),
          (e.prototype.updateSize = function (t, e, n) {
            this.applySlotWidth(this.computeSlotWidth()),
              this.layout.setHeight(e, n),
              this.slats.updateSize();
          }),
          (e.prototype.updateStickyScrollers = function () {
            this.headStickyScroller.updateSize(),
              this.bodyStickyScroller.updateSize();
          }),
          (e.prototype.computeSlotWidth = function () {
            var t = this.context.options.slotWidth || "";
            return (
              "" === t && (t = this.computeDefaultSlotWidth(this.tDateProfile)),
              t
            );
          }),
          (e.prototype.computeDefaultSlotWidth = function (t) {
            var e = 0;
            this.header.innerEls.forEach(function (t, n) {
              e = Math.max(e, t.getBoundingClientRect().width);
            });
            var n = Math.ceil(e) + 1,
              r = Object(i.zc)(t.labelInterval, t.slotDuration),
              o = Math.ceil(n / r),
              a = window.getComputedStyle(this.header.slatColEls[0]).minWidth;
            return a && (a = parseInt(a, 10)) && (o = Math.max(o, a)), o;
          }),
          (e.prototype.applySlotWidth = function (t) {
            var e = this.layout,
              n = this.tDateProfile,
              i = "",
              r = "",
              o = "";
            if ("" !== t) {
              (i = (t = Math.round(t)) * n.slotDates.length), (r = ""), (o = t);
              var a = e.bodyScroller.enhancedScroll.getClientWidth();
              a > i &&
                ((r = a), (i = ""), (o = Math.floor(a / n.slotDates.length)));
            }
            e.headerScroller.enhancedScroll.canvas.setWidth(i),
              e.headerScroller.enhancedScroll.canvas.setMinWidth(r),
              e.bodyScroller.enhancedScroll.canvas.setWidth(i),
              e.bodyScroller.enhancedScroll.canvas.setMinWidth(r),
              "" !== o &&
                this.header.slatColEls
                  .slice(0, -1)
                  .concat(this.slats.slatColEls.slice(0, -1))
                  .forEach(function (t) {
                    (t.style.width = o + "px"), (t.style.minWidth = "0");
                  });
          }),
          (e.prototype.computeDateSnapCoverage = function (t) {
            var e = this.tDateProfile,
              n = this.context.dateEnv.countDurationsBetween(
                e.normalizedRange.start,
                t,
                e.snapDuration
              );
            if (n < 0) return 0;
            if (n >= e.snapDiffToIndex.length) return e.snapCnt;
            var r = Math.floor(n),
              o = e.snapDiffToIndex[r];
            return Object(i.Lb)(o) ? (o += n - r) : (o = Math.ceil(o)), o;
          }),
          (e.prototype.dateToCoord = function (t) {
            var e = this.tDateProfile,
              n = this.computeDateSnapCoverage(t) / e.snapsPerSlot,
              i = Math.floor(n),
              r = n - (i = Math.min(i, e.slotCnt - 1)),
              o = this.slats,
              a = o.innerCoordCache,
              s = o.outerCoordCache;
            return this.context.isRtl
              ? s.rights[i] - a.getWidth(i) * r - s.originClientRect.width
              : s.lefts[i] + a.getWidth(i) * r;
          }),
          (e.prototype.rangeToCoords = function (t) {
            return this.context.isRtl
              ? {
                  right: this.dateToCoord(t.start),
                  left: this.dateToCoord(t.end),
                }
              : {
                  left: this.dateToCoord(t.start),
                  right: this.dateToCoord(t.end),
                };
          }),
          (e.prototype.computeDateScroll = function (t) {
            var e = this.context,
              n = e.dateEnv,
              r = e.isRtl,
              o = this.props.dateProfile,
              a = 0;
            return (
              o &&
                ((a = this.dateToCoord(
                  n.add(Object(i.sc)(o.activeRange.start), t)
                )),
                !r && a && (a += 1)),
              { left: a }
            );
          }),
          (e.prototype.queryDateScroll = function () {
            return {
              left: this.layout.bodyScroller.enhancedScroll.getScrollLeft(),
            };
          }),
          (e.prototype.applyDateScroll = function (t) {
            this.layout.bodyScroller.enhancedScroll.setScrollLeft(t.left || 0),
              this.layout.headerScroller.enhancedScroll.setScrollLeft(
                t.left || 0
              );
          }),
          e
        );
      })(i.b),
      T = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (i.masterContainerEl = e), (i.timeAxis = n), i;
        }
        return (
          o(e, t),
          (e.prototype.renderSegHtml = function (t, e) {
            var n = this.context,
              r = t.eventRange,
              o = r.def,
              a = r.ui,
              s = Object(i.O)(n, o, a),
              l = t.isStart && Object(i.Q)(n, o, a),
              c = t.isEnd && Object(i.P)(n, o, a),
              d = this.getSegClasses(t, s, l || c, e);
            d.unshift("fc-timeline-event", "fc-h-event");
            var u = this.getTimeText(r);
            return (
              '<a class="' +
              d.join(" ") +
              '" style="' +
              Object(i.eb)(this.getSkinCss(a)) +
              '"' +
              (o.url ? ' href="' + Object(i.Cb)(o.url) + '"' : "") +
              ">" +
              (u
                ? '<span class="fc-time-wrap"><span class="fc-time">' +
                  Object(i.Cb)(u) +
                  "</span></span>"
                : "") +
              '<span class="fc-title-wrap"><span class="fc-title fc-sticky">' +
              (o.title ? Object(i.Cb)(o.title) : "&nbsp;") +
              "</span></span>" +
              (l ? '<div class="fc-resizer fc-start-resizer"></div>' : "") +
              (c ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
              "</a>"
            );
          }),
          (e.prototype.computeDisplayEventTime = function () {
            return !this.timeAxis.tDateProfile.isTimeScale;
          }),
          (e.prototype.computeDisplayEventEnd = function () {
            return !1;
          }),
          (e.prototype.computeEventTimeFormat = function () {
            return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow",
            };
          }),
          (e.prototype.attachSegs = function (t, e) {
            if (
              (!this.el &&
                this.masterContainerEl &&
                ((this.el = Object(i.Z)("div", {
                  className: "fc-event-container",
                })),
                e && this.el.classList.add("fc-mirror-container"),
                this.masterContainerEl.appendChild(this.el)),
              this.el)
            )
              for (var n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                this.el.appendChild(o.el);
              }
          }),
          (e.prototype.detachSegs = function (t) {
            for (var e = 0, n = t; e < n.length; e++) {
              var r = n[e];
              Object(i.pc)(r.el);
            }
          }),
          (e.prototype.computeSegSizes = function (t) {
            for (var e = this.timeAxis, n = 0, r = t; n < r.length; n++) {
              var o = r[n],
                a = e.rangeToCoords(o);
              Object(i.C)(o.el, {
                left: (o.left = a.left),
                right: -(o.right = a.right),
              });
            }
          }),
          (e.prototype.assignSegSizes = function (t) {
            if (this.el) {
              for (var e = 0, n = t; e < n.length; e++)
                (s = n[e]).height = Object(i.S)(s.el);
              this.buildSegLevels(t);
              var r = D(t);
              Object(i.D)(this.el, "height", r);
              for (var o = 0, a = t; o < a.length; o++) {
                var s = a[o];
                Object(i.D)(s.el, "top", s.top);
              }
            }
          }),
          (e.prototype.buildSegLevels = function (t) {
            for (
              var e = [], n = 0, i = (t = this.sortEventSegs(t));
              n < i.length;
              n++
            ) {
              var r = i[n];
              r.above = [];
              for (var o = 0; o < e.length; ) {
                for (var a = !1, s = 0, l = e[o]; s < l.length; s++) {
                  var c = l[s];
                  q(r, c) && (r.above.push(c), (a = !0));
                }
                if (!a) break;
                o += 1;
              }
              for ((e[o] || (e[o] = [])).push(r), o += 1; o < e.length; ) {
                for (var d = 0, u = e[o]; d < u.length; d++) {
                  var p = u[d];
                  q(r, p) && p.above.push(r);
                }
                o += 1;
              }
            }
            return e;
          }),
          e
        );
      })(i.l);
    function D(t) {
      for (var e = 0, n = 0, i = t; n < i.length; n++) {
        var r = i[n];
        e = Math.max(e, L(r));
      }
      return e;
    }
    function L(t) {
      return null == t.top && (t.top = D(t.above)), t.top + t.height;
    }
    function q(t, e) {
      return t.left < e.right && t.right > e.left;
    }
    var E = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (i.masterContainerEl = e), (i.timeAxis = n), i;
        }
        return (
          o(e, t),
          (e.prototype.attachSegs = function (t, e) {
            if (e.length) {
              var n;
              n = "businessHours" === t ? "bgevent" : t.toLowerCase();
              var r = Object(i.Z)("div", {
                className: "fc-" + n + "-container",
              });
              this.masterContainerEl.appendChild(r);
              for (var o = 0, a = e; o < a.length; o++) {
                var s = a[o];
                r.appendChild(s.el);
              }
              return [r];
            }
          }),
          (e.prototype.computeSegSizes = function (t) {
            for (var e = this.timeAxis, n = 0, i = t; n < i.length; n++) {
              var r = i[n],
                o = e.rangeToCoords(r);
              (r.left = o.left), (r.right = o.right);
            }
          }),
          (e.prototype.assignSegSizes = function (t) {
            for (var e = 0, n = t; e < n.length; e++) {
              var r = n[e];
              Object(i.C)(r.el, { left: r.left, right: -r.right });
            }
          }),
          e
        );
      })(i.m),
      j = (function (t) {
        function e(e, n, r) {
          var o = t.call(this, n) || this;
          (o.slicer = new P()),
            (o.renderEventDrag = Object(i.Wb)(
              o._renderEventDrag,
              o._unrenderEventDrag
            )),
            (o.renderEventResize = Object(i.Wb)(
              o._renderEventResize,
              o._unrenderEventResize
            )),
            (o.fgContainerEl = e),
            (o.timeAxis = r);
          var a = (o.fillRenderer = new E(n, r)),
            s = (o.eventRenderer = new T(e, r));
          return (
            (o.mirrorRenderer = new T(e, r)),
            (o.renderBusinessHours = Object(i.Wb)(
              a.renderSegs.bind(a, "businessHours"),
              a.unrender.bind(a, "businessHours")
            )),
            (o.renderDateSelection = Object(i.Wb)(
              a.renderSegs.bind(a, "highlight"),
              a.unrender.bind(a, "highlight")
            )),
            (o.renderBgEvents = Object(i.Wb)(
              a.renderSegs.bind(a, "bgEvent"),
              a.unrender.bind(a, "bgEvent")
            )),
            (o.renderFgEvents = Object(i.Wb)(
              s.renderSegs.bind(s),
              s.unrender.bind(s)
            )),
            (o.renderEventSelection = Object(i.Wb)(
              s.selectByInstanceId.bind(s),
              s.unselectByInstanceId.bind(s),
              [o.renderFgEvents]
            )),
            o
          );
        }
        return (
          o(e, t),
          (e.prototype.render = function (t, e) {
            var n = this.timeAxis,
              i = this.slicer.sliceProps(
                t,
                t.dateProfile,
                n.tDateProfile.isTimeScale ? null : t.nextDayThreshold,
                e.calendar,
                this,
                n
              );
            this.renderBusinessHours(e, i.businessHourSegs),
              this.renderDateSelection(e, i.dateSelectionSegs),
              this.renderBgEvents(e, i.bgEventSegs),
              this.renderFgEvents(e, i.fgEventSegs),
              this.renderEventSelection(i.eventSelection),
              this.renderEventDrag(i.eventDrag),
              this.renderEventResize(i.eventResize);
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.renderBusinessHours.unrender(),
              this.renderDateSelection.unrender(),
              this.renderBgEvents.unrender(),
              this.renderFgEvents.unrender(),
              this.renderEventSelection.unrender(),
              this.renderEventDrag.unrender(),
              this.renderEventResize.unrender();
          }),
          (e.prototype._renderEventDrag = function (t) {
            t &&
              (this.eventRenderer.hideByHash(t.affectedInstances),
              this.mirrorRenderer.renderSegs(this.context, t.segs, {
                isDragging: !0,
                sourceSeg: t.sourceSeg,
              }));
          }),
          (e.prototype._unrenderEventDrag = function (t) {
            t &&
              (this.eventRenderer.showByHash(t.affectedInstances),
              this.mirrorRenderer.unrender(this.context, t.segs, {
                isDragging: !0,
                sourceSeg: t.sourceSeg,
              }));
          }),
          (e.prototype._renderEventResize = function (t) {
            if (t) {
              var e = t.segs.map(function (t) {
                return s({}, t);
              });
              this.eventRenderer.hideByHash(t.affectedInstances),
                this.fillRenderer.renderSegs("highlight", this.context, e),
                this.mirrorRenderer.renderSegs(this.context, t.segs, {
                  isDragging: !0,
                  sourceSeg: t.sourceSeg,
                });
            }
          }),
          (e.prototype._unrenderEventResize = function (t) {
            t &&
              (this.eventRenderer.showByHash(t.affectedInstances),
              this.fillRenderer.unrender("highlight", this.context),
              this.mirrorRenderer.unrender(this.context, t.segs, {
                isDragging: !0,
                sourceSeg: t.sourceSeg,
              }));
          }),
          (e.prototype.updateSize = function (t) {
            var e = this.fillRenderer,
              n = this.eventRenderer,
              i = this.mirrorRenderer;
            e.computeSizes(t),
              n.computeSizes(t),
              i.computeSizes(t),
              e.assignSizes(t),
              n.assignSizes(t),
              i.assignSizes(t);
          }),
          e
        );
      })(i.c),
      P = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.sliceRange = function (t, e) {
            var n = e.tDateProfile,
              r = e.props,
              o = r.dateProfile,
              a = r.dateProfileGenerator,
              s = (function (t, e, n) {
                if (!e.isTimeScale && ((t = Object(i.V)(t)), e.largeUnit)) {
                  var r = t;
                  ((t = {
                    start: n.startOf(t.start, e.largeUnit),
                    end: n.startOf(t.end, e.largeUnit),
                  }).end.valueOf() !== r.end.valueOf() ||
                    t.end <= t.start) &&
                    (t = { start: t.start, end: n.add(t.end, e.slotDuration) });
                }
                return t;
              })(t, n, e.context.dateEnv),
              l = [];
            if (
              e.computeDateSnapCoverage(s.start) <
              e.computeDateSnapCoverage(s.end)
            ) {
              var c = Object(i.Hb)(s, n.normalizedRange);
              c &&
                l.push({
                  start: c.start,
                  end: c.end,
                  isStart:
                    c.start.valueOf() === s.start.valueOf() &&
                    _(c.start, n, o, a),
                  isEnd:
                    c.end.valueOf() === s.end.valueOf() &&
                    _(Object(i.w)(c.end, -1), n, o, a),
                });
            }
            return l;
          }),
          e
        );
      })(i.r),
      R = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.renderSkeleton = Object(i.Wb)(
              e._renderSkeleton,
              e._unrenderSkeleton
            )),
            (e.startInteractive = Object(i.Wb)(
              e._startInteractive,
              e._stopInteractive
            )),
            e
          );
        }
        return (
          o(e, t),
          (e.prototype._startInteractive = function (t) {
            this.context.calendar.registerInteractiveComponent(this, { el: t });
          }),
          (e.prototype._stopInteractive = function () {
            this.context.calendar.unregisterInteractiveComponent(this);
          }),
          (e.prototype.render = function (e, n) {
            t.prototype.render.call(this, e, n),
              this.renderSkeleton(this.context),
              this.timeAxis.receiveProps(
                {
                  dateProfileGenerator: e.dateProfileGenerator,
                  dateProfile: e.dateProfile,
                },
                n
              ),
              this.startInteractive(this.timeAxis.slats.el),
              this.lane.receiveProps(
                s({}, e, { nextDayThreshold: this.context.nextDayThreshold }),
                n
              ),
              this.startNowIndicator(e.dateProfile, e.dateProfileGenerator);
          }),
          (e.prototype.destroy = function () {
            this.startInteractive.unrender(),
              this.renderSkeleton.unrender(),
              t.prototype.destroy.call(this);
          }),
          (e.prototype._renderSkeleton = function (t) {
            this.el.classList.add("fc-timeline"),
              !1 === t.options.eventOverlap &&
                this.el.classList.add("fc-no-overlap"),
              (this.el.innerHTML = this.renderSkeletonHtml()),
              (this.timeAxis = new S(
                this.el.querySelector("thead .fc-time-area"),
                this.el.querySelector("tbody .fc-time-area")
              )),
              (this.lane = new j(
                this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl,
                this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,
                this.timeAxis
              ));
          }),
          (e.prototype._unrenderSkeleton = function () {
            this.el.classList.remove("fc-timeline"),
              this.el.classList.remove("fc-no-overlap"),
              this.timeAxis.destroy(),
              this.lane.destroy();
          }),
          (e.prototype.renderSkeletonHtml = function () {
            var t = this.context.theme;
            return (
              '<table class="' +
              t.getClass("tableGrid") +
              '"> <thead class="fc-head"> <tr> <td class="fc-time-area ' +
              t.getClass("widgetHeader") +
              '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-time-area ' +
              t.getClass("widgetContent") +
              '"></td> </tr> </tbody> </table>'
            );
          }),
          (e.prototype.updateSize = function (t, e, n) {
            this.timeAxis.updateSize(t, e, n), this.lane.updateSize(t);
          }),
          (e.prototype.getNowIndicatorUnit = function (t, e) {
            return this.timeAxis.getNowIndicatorUnit(t, e);
          }),
          (e.prototype.renderNowIndicator = function (t) {
            this.timeAxis.renderNowIndicator(t);
          }),
          (e.prototype.unrenderNowIndicator = function () {
            this.timeAxis.unrenderNowIndicator();
          }),
          (e.prototype.computeDateScroll = function (t) {
            return this.timeAxis.computeDateScroll(t);
          }),
          (e.prototype.applyScroll = function (e, n) {
            t.prototype.applyScroll.call(this, e, n);
            var i = this.context.calendar;
            (n || i.isViewUpdated || i.isDatesUpdated || i.isEventsUpdated) &&
              this.timeAxis.updateStickyScrollers();
          }),
          (e.prototype.applyDateScroll = function (t) {
            this.timeAxis.applyDateScroll(t);
          }),
          (e.prototype.queryScroll = function () {
            var t = this.timeAxis.layout.bodyScroller.enhancedScroll;
            return { top: t.getScrollTop(), left: t.getScrollLeft() };
          }),
          (e.prototype.buildPositionCaches = function () {
            this.timeAxis.slats.updateSize();
          }),
          (e.prototype.queryHit = function (t, e, n, i) {
            var r = this.timeAxis.slats.positionToHit(t);
            if (r)
              return {
                component: this,
                dateSpan: r.dateSpan,
                rect: { left: r.left, right: r.right, top: 0, bottom: i },
                dayEl: r.dayEl,
                layer: 0,
              };
          }),
          e
        );
      })(i.t),
      I = Object(i.db)({
        defaultView: "timelineDay",
        views: {
          timeline: { class: R, eventResizableFromStart: !0 },
          timelineDay: { type: "timeline", duration: { days: 1 } },
          timelineWeek: { type: "timeline", duration: { weeks: 1 } },
          timelineMonth: { type: "timeline", duration: { months: 1 } },
          timelineYear: { type: "timeline", duration: { years: 1 } },
        },
      }),
      W = function (t, e) {
        return (W =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    function N(t, e) {
      function n() {
        this.constructor = t;
      }
      W(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var B = function () {
      return (B =
        Object.assign ||
        function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    function F(t, e) {
      var n = t.resourceEditable;
      if (null == n) {
        var i = t.sourceId && e.state.eventSources[t.sourceId];
        i && (n = i.extendedProps.resourceEditable),
          null == n &&
            null == (n = e.opt("eventResourceEditable")) &&
            (n = e.opt("editable"));
      }
      return n;
    }
    var $ = (function () {
      function t() {
        this.filterResources = Object(i.Ub)(H);
      }
      return (
        (t.prototype.transform = function (t, e, n, i) {
          if (e.class.needsResourceData)
            return {
              resourceStore: this.filterResources(
                n.resourceStore,
                i.filterResourcesWithEvents,
                n.eventStore,
                n.dateProfile.activeRange
              ),
              resourceEntityExpansions: n.resourceEntityExpansions,
            };
        }),
        t
      );
    })();
    function H(t, e, n, r) {
      if (e) {
        var o = (function (t, e) {
          var n = {};
          for (var i in t)
            for (var r = 0, o = e[t[i].defId].resourceIds; r < o.length; r++)
              n[o[r]] = !0;
          return n;
        })(
          (function (t, e) {
            return Object(i.qb)(t, function (t) {
              return Object(i.nc)(t.range, e);
            });
          })(n.instances, r),
          n.defs
        );
        return (
          B(
            o,
            (function (t, e) {
              var n = {};
              for (var i in t)
                for (var r = void 0; (r = e[i]) && (i = r.parentId); )
                  n[i] = !0;
              return n;
            })(o, t)
          ),
          Object(i.qb)(t, function (t, e) {
            return o[e];
          })
        );
      }
      return t;
    }
    var Y = (function () {
      function t() {
        (this.buildResourceEventUis = Object(i.Vb)(U, i.Nb)),
          (this.injectResourceEventUis = Object(i.Ub)(X));
      }
      return (
        (t.prototype.transform = function (t, e, n) {
          if (!e.class.needsResourceData)
            return {
              eventUiBases: this.injectResourceEventUis(
                t.eventUiBases,
                t.eventStore.defs,
                this.buildResourceEventUis(n.resourceStore)
              ),
            };
        }),
        t
      );
    })();
    function U(t) {
      return Object(i.Sb)(t, function (t) {
        return t.ui;
      });
    }
    function X(t, e, n) {
      return Object(i.Sb)(t, function (t, r) {
        return r
          ? (function (t, e, n) {
              for (var r = [], o = 0, a = e.resourceIds; o < a.length; o++) {
                var s = a[o];
                n[s] && r.unshift(n[s]);
              }
              return r.unshift(t), Object(i.I)(r);
            })(t, e[r], n)
          : t;
      });
    }
    var V = { id: String },
      G = [],
      K = 0;
    function Z(t) {
      G.push(t);
    }
    function J(t, e, n) {
      var r = Object(i.oc)(t, V);
      return (
        (r.sourceId = String(K++)),
        (r.sourceDefId = n),
        (r.meta = e),
        (r.publicId = r.id),
        (r.isFetching = !1),
        (r.latestFetchId = ""),
        (r.fetchRange = null),
        delete r.id,
        r
      );
    }
    function Q(t, e, n, r) {
      switch (e.type) {
        case "INIT":
          return et(r.opt("resources"), r);
        case "RESET_RESOURCE_SOURCE":
          return et(e.resourceSourceInput, r, !0);
        case "PREV":
        case "NEXT":
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          return (function (t, e, n) {
            return !n.opt("refetchResourcesOnNavigate") ||
              (function (t) {
                return Boolean(G[t.sourceDefId].ignoreRange);
              })(t) ||
              (t.fetchRange && Object(i.mc)(t.fetchRange, e))
              ? t
              : nt(t, e, n);
          })(t, n.activeRange, r);
        case "RECEIVE_RESOURCES":
        case "RECEIVE_RESOURCE_ERROR":
          return (function (t, e, n) {
            return e === t.latestFetchId
              ? B({}, t, { isFetching: !1, fetchRange: n })
              : t;
          })(t, e.fetchId, e.fetchRange);
        case "REFETCH_RESOURCES":
          return nt(t, n.activeRange, r);
        default:
          return t;
      }
    }
    var tt = 0;
    function et(t, e, n) {
      if (t) {
        var i = (function (t) {
          for (var e = G.length - 1; e >= 0; e--) {
            var n = G[e].parseMeta(t);
            if (n) {
              var i = J("object" == typeof t && t ? t : {}, n, e);
              return (i._raw = t), i;
            }
          }
          return null;
        })(t);
        return (
          (!n && e.opt("refetchResourcesOnNavigate")) || (i = nt(i, null, e)), i
        );
      }
      return null;
    }
    function nt(t, e, n) {
      var i,
        r = ((i = t.sourceDefId), G[i]),
        o = String(tt++);
      return (
        r.fetch(
          { resourceSource: t, calendar: n, range: e },
          function (t) {
            (n.afterSizingTriggers._resourcesRendered = [null]),
              n.dispatch({
                type: "RECEIVE_RESOURCES",
                fetchId: o,
                fetchRange: e,
                rawResources: t.rawResources,
              });
          },
          function (t) {
            n.dispatch({
              type: "RECEIVE_RESOURCE_ERROR",
              fetchId: o,
              fetchRange: e,
              error: t,
            });
          }
        ),
        B({}, t, { isFetching: !0, latestFetchId: o })
      );
    }
    var it = {
        id: String,
        title: String,
        parentId: String,
        businessHours: null,
        children: null,
        extendedProps: null,
      },
      rt = 0;
    function ot(t, e, n, r) {
      void 0 === e && (e = "");
      var o = {},
        a = Object(i.oc)(t, it, {}, o),
        s = {},
        l = Object(i.jc)("event", o, r, s);
      if (
        (a.id || (a.id = "_fc:" + rt++),
        a.parentId || (a.parentId = e),
        (a.businessHours = a.businessHours
          ? Object(i.ac)(a.businessHours, r)
          : null),
        (a.ui = l),
        (a.extendedProps = B({}, s, a.extendedProps)),
        Object.freeze(l.classNames),
        Object.freeze(a.extendedProps),
        n[a.id])
      );
      else if (((n[a.id] = a), a.children)) {
        for (var c = 0, d = a.children; c < d.length; c++) ot(d[c], a.id, n, r);
        delete a.children;
      }
      return a;
    }
    function at(t, e, n, r) {
      switch (e.type) {
        case "INIT":
          return {};
        case "RECEIVE_RESOURCES":
          return (function (t, e, n, i, r) {
            if (i.latestFetchId === n) {
              for (var o = {}, a = 0, s = e; a < s.length; a++)
                ot(s[a], "", o, r);
              return o;
            }
            return t;
          })(t, e.rawResources, e.fetchId, n, r);
        case "ADD_RESOURCE":
          return (o = t), (a = e.resourceHash), B({}, o, a);
        case "REMOVE_RESOURCE":
          return (function (t, e) {
            var n = B({}, t);
            for (var i in (delete n[e], n))
              n[i].parentId === e && (n[i] = B({}, n[i], { parentId: "" }));
            return n;
          })(t, e.resourceId);
        case "SET_RESOURCE_PROP":
          return (function (t, e, n, i) {
            var r,
              o,
              a = t[e];
            return a
              ? B({}, t, (((r = {})[e] = B({}, a, (((o = {})[n] = i), o))), r))
              : t;
          })(t, e.resourceId, e.propName, e.propValue);
        case "RESET_RESOURCES":
          return Object(i.Sb)(t, function (t) {
            return B({}, t);
          });
        default:
          return t;
      }
      var o, a;
    }
    var st = {
        resourceId: String,
        resourceIds: function (t) {
          return (t || []).map(function (t) {
            return String(t);
          });
        },
        resourceEditable: Boolean,
      },
      lt = (function () {
        function t(t, e) {
          (this._calendar = t), (this._resource = e);
        }
        return (
          (t.prototype.setProp = function (t, e) {
            this._calendar.dispatch({
              type: "SET_RESOURCE_PROP",
              resourceId: this._resource.id,
              propName: t,
              propValue: e,
            });
          }),
          (t.prototype.remove = function () {
            this._calendar.dispatch({
              type: "REMOVE_RESOURCE",
              resourceId: this._resource.id,
            });
          }),
          (t.prototype.getParent = function () {
            var e = this._calendar,
              n = this._resource.parentId;
            return n ? new t(e, e.state.resourceSource[n]) : null;
          }),
          (t.prototype.getChildren = function () {
            var e = this._resource.id,
              n = this._calendar,
              i = n.state.resourceStore,
              r = [];
            for (var o in i) i[o].parentId === e && r.push(new t(n, i[o]));
            return r;
          }),
          (t.prototype.getEvents = function () {
            var t = this._resource.id,
              e = this._calendar,
              n = e.state.eventStore,
              r = n.defs,
              o = n.instances,
              a = [];
            for (var s in o) {
              var l = o[s],
                c = r[l.defId];
              -1 !== c.resourceIds.indexOf(t) && a.push(new i.k(e, c, l));
            }
            return a;
          }),
          Object.defineProperty(t.prototype, "id", {
            get: function () {
              return this._resource.id;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "title", {
            get: function () {
              return this._resource.title;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventConstraint", {
            get: function () {
              return this._resource.ui.constraints[0] || null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventOverlap", {
            get: function () {
              return this._resource.ui.overlap;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventAllow", {
            get: function () {
              return this._resource.ui.allows[0] || null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventBackgroundColor", {
            get: function () {
              return this._resource.ui.backgroundColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventBorderColor", {
            get: function () {
              return this._resource.ui.borderColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventTextColor", {
            get: function () {
              return this._resource.ui.textColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "eventClassNames", {
            get: function () {
              return this._resource.ui.classNames;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "extendedProps", {
            get: function () {
              return this._resource.extendedProps;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
    (i.a.prototype.addResource = function (t, e) {
      var n, i, r;
      return (
        void 0 === e && (e = !0),
        t instanceof lt
          ? (((n = {})[(r = t._resource).id] = r), (i = n))
          : (r = ot(t, "", (i = {}), this)),
        e && this.component.view.addScroll({ forcedRowId: r.id }),
        this.dispatch({ type: "ADD_RESOURCE", resourceHash: i }),
        new lt(this, r)
      );
    }),
      (i.a.prototype.getResourceById = function (t) {
        if (((t = String(t)), this.state.resourceStore)) {
          var e = this.state.resourceStore[t];
          if (e) return new lt(this, e);
        }
        return null;
      }),
      (i.a.prototype.getResources = function () {
        var t = this.state.resourceStore,
          e = [];
        if (t) for (var n in t) e.push(new lt(this, t[n]));
        return e;
      }),
      (i.a.prototype.getTopLevelResources = function () {
        var t = this.state.resourceStore,
          e = [];
        if (t) for (var n in t) t[n].parentId || e.push(new lt(this, t[n]));
        return e;
      }),
      (i.a.prototype.rerenderResources = function () {
        this.dispatch({ type: "RESET_RESOURCES" });
      }),
      (i.a.prototype.refetchResources = function () {
        this.dispatch({ type: "REFETCH_RESOURCES" });
      });
    var ct = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        N(e, t),
        (e.prototype.getKeyInfo = function (t) {
          return B({ "": {} }, t.resourceStore);
        }),
        (e.prototype.getKeysForDateSpan = function (t) {
          return [t.resourceId || ""];
        }),
        (e.prototype.getKeysForEventDef = function (t) {
          var e = t.resourceIds;
          return e.length ? e : [""];
        }),
        e
      );
    })(i.s);
    function dt(t, e) {
      return B({}, e, { constraints: ut(t, e.constraints) });
    }
    function ut(t, e) {
      return e.map(function (e) {
        var n = e.defs;
        if (n)
          for (var i in n) {
            var r = n[i].resourceIds;
            if (r.length && -1 === r.indexOf(t)) return !1;
          }
        return e;
      });
    }
    (i.k.prototype.getResources = function () {
      var t = this._calendar;
      return this._def.resourceIds.map(function (e) {
        return t.getResourceById(e);
      });
    }),
      (i.k.prototype.setResources = function (t) {
        for (var e = [], n = 0, i = t; n < i.length; n++) {
          var r = i[n],
            o = null;
          "string" == typeof r
            ? (o = r)
            : "number" == typeof r
            ? (o = String(r))
            : r instanceof lt && (o = r.id),
            o && e.push(o);
        }
        this.mutate({ standardProps: { resourceIds: e } });
      });
    var pt = [
        "GPL-My-Project-Is-Open-Source",
        "CC-Attribution-NonCommercial-NoDerivatives",
      ],
      ht = {
        position: "absolute",
        "z-index": 99999,
        bottom: "1px",
        left: "1px",
        background: "#eee",
        "border-color": "#ddd",
        "border-style": "solid",
        "border-width": "1px 1px 0 0",
        padding: "2px 4px",
        "font-size": "12px",
        "border-top-right-radius": "3px",
      };
    function ft(t, e) {
      return "function" == typeof t
        ? function (n) {
            return t(new lt(e, n));
          }
        : function (t) {
            return t.title || (0 === (e = t.id).indexOf("_fc:") ? "" : e);
            var e;
          };
    }
    Z({
      ignoreRange: !0,
      parseMeta: function (t) {
        return Array.isArray(t)
          ? t
          : Array.isArray(t.resources)
          ? t.resources
          : null;
      },
      fetch: function (t, e) {
        e({ rawResources: t.resourceSource.meta });
      },
    }),
      Z({
        parseMeta: function (t) {
          return "function" == typeof t
            ? t
            : "function" == typeof t.resources
            ? t.resources
            : null;
        },
        fetch: function (t, e, n) {
          var r = t.calendar.dateEnv,
            o = t.resourceSource.meta,
            a = {};
          t.range &&
            (a = {
              start: r.toDate(t.range.start),
              end: r.toDate(t.range.end),
              startStr: r.formatIso(t.range.start),
              endStr: r.formatIso(t.range.end),
              timeZone: r.timeZone,
            }),
            Object(i.xc)(
              o.bind(null, a),
              function (t) {
                e({ rawResources: t });
              },
              n
            );
        },
      }),
      Z({
        parseMeta: function (t) {
          if ("string" == typeof t) t = { url: t };
          else if (!t || "object" != typeof t || !t.url) return null;
          return {
            url: t.url,
            method: (t.method || "GET").toUpperCase(),
            extraParams: t.extraParams,
          };
        },
        fetch: function (t, e, n) {
          var r = t.resourceSource.meta,
            o = (function (t, e, n) {
              var i,
                r,
                o,
                a,
                s = n.dateEnv,
                l = {};
              return (
                e &&
                  ((i = n.opt("startParam")),
                  (r = n.opt("endParam")),
                  (o = n.opt("timeZoneParam")),
                  (l[i] = s.formatIso(e.start)),
                  (l[r] = s.formatIso(e.end)),
                  "local" !== s.timeZone && (l[o] = s.timeZone)),
                (a =
                  "function" == typeof t.extraParams
                    ? t.extraParams()
                    : t.extraParams || {}),
                B(l, a),
                l
              );
            })(r, t.range, t.calendar);
          Object(i.rc)(
            r.method,
            r.url,
            o,
            function (t, n) {
              e({ rawResources: t, xhr: n });
            },
            function (t, e) {
              n({ message: t, xhr: e });
            }
          );
        },
      }),
      (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.processOptions = Object(i.Ub)(n._processOptions)),
            (n.parentEl = e),
            n
          );
        }
        N(e, t),
          (e.prototype._processOptions = function (t, e) {
            (this.datesAboveResources = t.datesAboveResources),
              (this.resourceTextFunc = ft(t.resourceText, e));
          }),
          (e.prototype.render = function (t, e) {
            var n,
              r = e.options,
              o = e.calendar,
              a = e.theme;
            this.processOptions(r, o),
              (this.parentEl.innerHTML = ""),
              this.parentEl.appendChild(
                (this.el = Object(i.Db)(
                  '<div class="fc-row ' +
                    a.getClass("headerRow") +
                    '"><table class="' +
                    a.getClass("tableGrid") +
                    '"><thead></thead></table></div>'
                ))
              ),
              (this.thead = this.el.querySelector("thead")),
              (this.dateFormat = Object(i.cb)(
                r.columnHeaderFormat ||
                  Object(i.R)(t.datesRepDistinctDays, t.dates.length)
              )),
              (n =
                1 === t.dates.length
                  ? this.renderResourceRow(t.resources)
                  : this.datesAboveResources
                  ? this.renderDayAndResourceRows(t.dates, t.resources)
                  : this.renderResourceAndDayRows(t.resources, t.dates)),
              (this.thead.innerHTML = n),
              this.processResourceEls(t.resources);
          }),
          (e.prototype.destroy = function () {
            Object(i.pc)(this.el);
          }),
          (e.prototype.renderResourceRow = function (t) {
            var e = this,
              n = t.map(function (t) {
                return e.renderResourceCell(t, 1);
              });
            return this.buildTr(n);
          }),
          (e.prototype.renderDayAndResourceRows = function (t, e) {
            for (var n = [], i = [], r = 0, o = t; r < o.length; r++) {
              var a = o[r];
              n.push(this.renderDateCell(a, e.length));
              for (var s = 0, l = e; s < l.length; s++) {
                var c = l[s];
                i.push(this.renderResourceCell(c, 1, a));
              }
            }
            return this.buildTr(n) + this.buildTr(i);
          }),
          (e.prototype.renderResourceAndDayRows = function (t, e) {
            for (var n = [], i = [], r = 0, o = t; r < o.length; r++) {
              var a = o[r];
              n.push(this.renderResourceCell(a, e.length));
              for (var s = 0, l = e; s < l.length; s++) {
                var c = l[s];
                i.push(this.renderDateCell(c, 1, a));
              }
            }
            return this.buildTr(n) + this.buildTr(i);
          }),
          (e.prototype.renderResourceCell = function (t, e, n) {
            var r = this.context.dateEnv;
            return (
              '<th class="fc-resource-cell" data-resource-id="' +
              t.id +
              '"' +
              (n
                ? ' data-date="' + r.formatIso(n, { omitTime: !0 }) + '"'
                : "") +
              (e > 1 ? ' colspan="' + e + '"' : "") +
              ">" +
              Object(i.Cb)(this.resourceTextFunc(t)) +
              "</th>"
            );
          }),
          (e.prototype.renderDateCell = function (t, e, n) {
            var r = this.props;
            return Object(i.qc)(
              t,
              r.dateProfile,
              r.datesRepDistinctDays,
              r.dates.length * r.resources.length,
              this.dateFormat,
              this.context,
              e,
              n ? 'data-resource-id="' + n.id + '"' : ""
            );
          }),
          (e.prototype.buildTr = function (t) {
            return (
              t.length || (t = ["<td>&nbsp;</td>"]),
              this.props.renderIntroHtml &&
                (t = [this.props.renderIntroHtml()].concat(t)),
              this.context.isRtl && t.reverse(),
              "<tr>" + t.join("") + "</tr>"
            );
          }),
          (e.prototype.processResourceEls = function (t) {
            var e = this.context,
              n = e.calendar,
              r = e.isRtl,
              o = e.view;
            Object(i.sb)(this.thead, ".fc-resource-cell").forEach(function (
              e,
              i
            ) {
              (i %= t.length), r && (i = t.length - 1 - i);
              var a = t[i];
              n.publiclyTrigger("resourceRender", [
                { resource: new lt(n, a), el: e, view: o },
              ]);
            });
          });
      })(i.b);
    var bt = (function () {
        function t(t, e) {
          (this.dayTable = t),
            (this.resources = e),
            (this.resourceIndex = new mt(e)),
            (this.rowCnt = t.rowCnt),
            (this.colCnt = t.colCnt * e.length),
            (this.cells = this.buildCells());
        }
        return (
          (t.prototype.buildCells = function () {
            for (
              var t = this.rowCnt,
                e = this.dayTable,
                n = this.resources,
                i = [],
                r = 0;
              r < t;
              r++
            ) {
              for (var o = [], a = 0; a < e.colCnt; a++)
                for (var s = 0; s < n.length; s++) {
                  var l = n[s],
                    c = 'data-resource-id="' + l.id + '"';
                  o[this.computeCol(a, s)] = {
                    date: e.cells[r][a].date,
                    resource: l,
                    htmlAttrs: c,
                  };
                }
              i.push(o);
            }
            return i;
          }),
          t
        );
      })(),
      mt =
        ((function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          N(e, t),
            (e.prototype.computeCol = function (t, e) {
              return e * this.dayTable.colCnt + t;
            }),
            (e.prototype.computeColRanges = function (t, e, n) {
              return [
                {
                  firstCol: this.computeCol(t, n),
                  lastCol: this.computeCol(e, n),
                  isStart: !0,
                  isEnd: !0,
                },
              ];
            });
        })(bt),
        (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          N(e, t),
            (e.prototype.computeCol = function (t, e) {
              return t * this.resources.length + e;
            }),
            (e.prototype.computeColRanges = function (t, e, n) {
              for (var i = [], r = t; r <= e; r++) {
                var o = this.computeCol(r, n);
                i.push({
                  firstCol: o,
                  lastCol: o,
                  isStart: r === t,
                  isEnd: r === e,
                });
              }
              return i;
            });
        })(bt),
        function (t) {
          for (var e = {}, n = [], i = 0; i < t.length; i++) {
            var r = t[i].id;
            n.push(r), (e[r] = i);
          }
          (this.ids = n), (this.indicesById = e), (this.length = t.length);
        }),
      gt =
        ((function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          N(e, t),
            (e.prototype.getKeyInfo = function (t) {
              var e = t.resourceDayTable,
                n = Object(i.Sb)(e.resourceIndex.indicesById, function (t) {
                  return e.resources[t];
                });
              return (n[""] = {}), n;
            }),
            (e.prototype.getKeysForDateSpan = function (t) {
              return [t.resourceId || ""];
            }),
            (e.prototype.getKeysForEventDef = function (t) {
              var e = t.resourceIds;
              return e.length ? e : [""];
            });
        })(i.s),
        []);
    function vt(t, e, n, i, r, o) {
      var a = [];
      return (
        (function t(e, n, i, r, o, a, s) {
          for (var l = 0; l < e.length; l++) {
            var c = e[l],
              d = c.group;
            if (d)
              if (i) {
                var u = n.length,
                  p = r.length;
                if ((t(c.children, n, i, r.concat(0), o, a, s), u < n.length)) {
                  var h = n[u];
                  (h.rowSpans = h.rowSpans.slice())[p] = n.length - u;
                }
              } else {
                var f = d.spec.field + ":" + d.value,
                  b = null != a[f] ? a[f] : s;
                n.push({ id: f, group: d, isExpanded: b }),
                  b && t(c.children, n, i, r, o + 1, a, s);
              }
            else
              c.resource &&
                ((b = null != a[(f = c.resource.id)] ? a[f] : s),
                n.push({
                  id: f,
                  rowSpans: r,
                  depth: o,
                  isExpanded: b,
                  hasChildren: Boolean(c.children.length),
                  resource: c.resource,
                  resourceFields: c.resourceFields,
                }),
                b && t(c.children, n, i, r, o + 1, a, s));
          }
        })(
          (function (t, e, n, i) {
            var r = (function (t, e) {
                var n = {};
                for (var i in t) {
                  var r = t[i];
                  n[i] = { resource: r, resourceFields: Mt(r), children: [] };
                }
                for (var i in t)
                  if ((r = t[i]).parentId) {
                    var o = n[r.parentId];
                    o && yt(n[i], o.children, e);
                  }
                return n;
              })(t, i),
              o = [];
            for (var a in r) {
              var s = r[a];
              s.resource.parentId || _t(s, o, n, 0, e, i);
            }
            return o;
          })(t, i ? -1 : 1, e, n),
          a,
          i,
          [],
          0,
          r,
          o
        ),
        a
      );
    }
    function _t(t, e, n, r, o, a) {
      n.length && (-1 === o || r <= o)
        ? _t(
            t,
            (function (t, e, n) {
              var r,
                o,
                a = t.resourceFields[n.field];
              if (n.order) {
                for (o = 0; o < e.length; o++)
                  if ((l = e[o]).group) {
                    var s = Object(i.tb)(a, l.group.value) * n.order;
                    if (0 === s) {
                      r = l;
                      break;
                    }
                    if (s < 0) break;
                  }
              } else
                for (o = 0; o < e.length; o++) {
                  var l;
                  if ((l = e[o]).group && a === l.group.value) {
                    r = l;
                    break;
                  }
                }
              return (
                r ||
                  ((r = { group: { value: a, spec: n }, children: [] }),
                  e.splice(o, 0, r)),
                r
              );
            })(t, e, n[0]).children,
            n.slice(1),
            r + 1,
            o,
            a
          )
        : yt(t, e, a);
    }
    function yt(t, e, n) {
      var r;
      for (
        r = 0;
        r < e.length &&
        !(Object(i.J)(e[r].resourceFields, t.resourceFields, n) > 0);
        r++
      );
      e.splice(r, 0, t);
    }
    function Mt(t) {
      var e = B({}, t.extendedProps, t.ui, t);
      return delete e.ui, delete e.extendedProps, e;
    }
    !(function () {
      function t() {
        (this.joinDateSelection = Object(i.Ub)(this.joinSegs)),
          (this.joinBusinessHours = Object(i.Ub)(this.joinSegs)),
          (this.joinFgEvents = Object(i.Ub)(this.joinSegs)),
          (this.joinBgEvents = Object(i.Ub)(this.joinSegs)),
          (this.joinEventDrags = Object(i.Ub)(this.joinInteractions)),
          (this.joinEventResizes = Object(i.Ub)(this.joinInteractions));
      }
      (t.prototype.joinProps = function (t, e) {
        for (
          var n = [],
            i = [],
            r = [],
            o = [],
            a = [],
            s = [],
            l = "",
            c = 0,
            d = e.resourceIndex.ids.concat([""]);
          c < d.length;
          c++
        ) {
          var u = d[c],
            p = t[u];
          n.push(p.dateSelectionSegs),
            i.push(u ? p.businessHourSegs : gt),
            r.push(u ? p.fgEventSegs : gt),
            o.push(p.bgEventSegs),
            a.push(p.eventDrag),
            s.push(p.eventResize),
            (l = l || p.eventSelection);
        }
        return {
          dateSelectionSegs: this.joinDateSelection.apply(this, [e].concat(n)),
          businessHourSegs: this.joinBusinessHours.apply(this, [e].concat(i)),
          fgEventSegs: this.joinFgEvents.apply(this, [e].concat(r)),
          bgEventSegs: this.joinBgEvents.apply(this, [e].concat(o)),
          eventDrag: this.joinEventDrags.apply(this, [e].concat(a)),
          eventResize: this.joinEventResizes.apply(this, [e].concat(s)),
          eventSelection: l,
        };
      }),
        (t.prototype.joinSegs = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          for (var i = t.resources.length, r = [], o = 0; o < i; o++) {
            for (var a = 0, s = e[o]; a < s.length; a++) {
              var l = s[a];
              r.push.apply(r, this.transformSeg(l, t, o));
            }
            for (var c = 0, d = e[i]; c < d.length; c++)
              (l = d[c]), r.push.apply(r, this.transformSeg(l, t, o));
          }
          return r;
        }),
        (t.prototype.expandSegs = function (t, e) {
          for (var n = t.resources.length, i = [], r = 0; r < n; r++)
            for (var o = 0, a = e; o < a.length; o++) {
              var s = a[o];
              i.push.apply(i, this.transformSeg(s, t, r));
            }
          return i;
        }),
        (t.prototype.joinInteractions = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          for (
            var i = t.resources.length, r = {}, o = [], a = !1, s = null, l = 0;
            l < i;
            l++
          ) {
            var c = e[l];
            if (c) {
              for (var d = 0, u = c.segs; d < u.length; d++) {
                var p = u[d];
                o.push.apply(o, this.transformSeg(p, t, l));
              }
              B(r, c.affectedInstances),
                (a = a || c.isEvent),
                (s = s || c.sourceSeg);
            }
            if (e[i])
              for (var h = 0, f = e[i].segs; h < f.length; h++)
                (p = f[h]), o.push.apply(o, this.transformSeg(p, t, l));
          }
          return { affectedInstances: r, segs: o, isEvent: a, sourceSeg: s };
        });
    })();
    var Ot = Object(i.db)({
        reducers: [
          function (t, e, n) {
            var i = Q(t.resourceSource, e, t.dateProfile, n),
              r = at(t.resourceStore, e, i, n),
              o = (function (t, e) {
                var n;
                switch (e.type) {
                  case "INIT":
                    return {};
                  case "SET_RESOURCE_ENTITY_EXPANDED":
                    return B({}, t, (((n = {})[e.id] = e.isExpanded), n));
                  default:
                    return t;
                }
              })(t.resourceEntityExpansions, e),
              a = t.loadingLevel + (i && i.isFetching ? 1 : 0);
            return B({}, t, {
              resourceSource: i,
              resourceStore: r,
              resourceEntityExpansions: o,
              loadingLevel: a,
            });
          },
        ],
        eventDefParsers: [
          function (t, e, n) {
            var r = Object(i.oc)(e, st, {}, n),
              o = r.resourceIds;
            r.resourceId && o.push(r.resourceId),
              (t.resourceIds = o),
              (t.resourceEditable = r.resourceEditable);
          },
        ],
        isDraggableTransformers: [
          function (t, e, n, i) {
            return (
              !(
                t ||
                !i.viewSpec.class.needsResourceData ||
                !F(e, i.context.calendar)
              ) || t
            );
          },
        ],
        eventDragMutationMassagers: [
          function (t, e, n) {
            var i = e.dateSpan.resourceId,
              r = n.dateSpan.resourceId;
            i &&
              r &&
              i !== r &&
              (t.resourceMutation = { matchResourceId: i, setResourceId: r });
          },
        ],
        eventDefMutationAppliers: [
          function (t, e, n) {
            var i = e.resourceMutation;
            if (i && F(t, n)) {
              var r = t.resourceIds.indexOf(i.matchResourceId);
              if (-1 !== r) {
                var o = t.resourceIds.slice();
                o.splice(r, 1),
                  -1 === o.indexOf(i.setResourceId) && o.push(i.setResourceId),
                  (t.resourceIds = o);
              }
            }
          },
        ],
        dateSelectionTransformers: [
          function (t, e) {
            var n = t.dateSpan.resourceId,
              i = e.dateSpan.resourceId;
            if (n && i)
              return (
                (!1 !== t.component.allowAcrossResources || n === i) && {
                  resourceId: n,
                }
              );
          },
        ],
        datePointTransforms: [
          function (t, e) {
            return t.resourceId
              ? { resource: e.getResourceById(t.resourceId) }
              : {};
          },
        ],
        dateSpanTransforms: [
          function (t, e) {
            return t.resourceId
              ? { resource: e.getResourceById(t.resourceId) }
              : {};
          },
        ],
        viewPropsTransformers: [$, Y],
        isPropsValid: function (t, e) {
          var n = new ct().splitProps(
            B({}, t, { resourceStore: e.state.resourceStore })
          );
          for (var r in n) {
            var o = n[r];
            if (
              (r &&
                n[""] &&
                (o = B({}, o, {
                  eventStore: Object(i.Xb)(n[""].eventStore, o.eventStore),
                  eventUiBases: B({}, n[""].eventUiBases, o.eventUiBases),
                })),
              !Object(i.Ob)(o, e, { resourceId: r }, dt.bind(null, r)))
            )
              return !1;
          }
          return !0;
        },
        externalDefTransforms: [
          function (t) {
            return t.resourceId ? { resourceId: t.resourceId } : {};
          },
        ],
        eventResizeJoinTransforms: [
          function (t, e) {
            if (
              !1 === t.component.allowAcrossResources &&
              t.dateSpan.resourceId !== e.dateSpan.resourceId
            )
              return !1;
          },
        ],
        viewContainerModifiers: [
          function (t, e) {
            var n,
              r = e.opt("schedulerLicenseKey");
            (n = window.location.href),
              /\w+\:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(n) ||
                (function (t) {
                  if (-1 !== pt.indexOf(t)) return !0;
                  var e = (t || "").match(/^(\d+)\-fcs\-(\d+)$/);
                  if (e && 10 === e[1].length) {
                    var n = new Date(1e3 * parseInt(e[2], 10)),
                      r = new Date(
                        i.W.mockSchedulerReleaseDate || "2020-05-28"
                      );
                    if (Object(i.Qb)(r) && Object(i.v)(r, -372) < n) return !0;
                  }
                  return !1;
                })(r) ||
                Object(i.A)(
                  t,
                  '<div class="fc-license-message" style="' +
                    Object(i.Cb)(Object(i.eb)(ht)) +
                    '">Please use a valid license key. <a href="http://fullcalendar.io/scheduler/license/">More Info</a></div>'
                );
          },
        ],
        eventDropTransformers: [
          function (t, e) {
            var n = t.resourceMutation;
            return n
              ? {
                  oldResource: e.getResourceById(n.matchResourceId),
                  newResource: e.getResourceById(n.setResourceId),
                }
              : { oldResource: null, newResource: null };
          },
        ],
        optionChangeHandlers: {
          resources: function (t, e, n) {
            n(e.state.resourceSource._raw, t) ||
              e.dispatch({
                type: "RESET_RESOURCE_SOURCE",
                resourceSourceInput: t,
              });
          },
        },
      }),
      wt = function (t, e) {
        return (wt =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    function At(t, e) {
      function n() {
        this.constructor = t;
      }
      wt(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var xt = function () {
        return (xt =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      },
      zt = (function (t) {
        function e(e, n, i, r) {
          var o = t.call(this) || this;
          return (
            (o.isSizeDirty = !1),
            e.insertBefore((o.spreadsheetTr = document.createElement("tr")), n),
            i.insertBefore((o.timeAxisTr = document.createElement("tr")), r),
            o
          );
        }
        return (
          At(e, t),
          (e.prototype.destroy = function () {
            Object(i.pc)(this.spreadsheetTr),
              Object(i.pc)(this.timeAxisTr),
              t.prototype.destroy.call(this);
          }),
          (e.prototype.updateSize = function (t) {
            this.isSizeDirty = !1;
          }),
          e
        );
      })(i.b);
    function Ct(t, e) {
      var n = t.classList;
      e
        ? (n.remove("fc-icon-plus-square"), n.add("fc-icon-minus-square"))
        : (n.remove("fc-icon-minus-square"), n.add("fc-icon-plus-square"));
    }
    function kt(t, e) {
      t.setAttribute("data-resource-id", e);
    }
    var St = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e._renderCells = Object(i.Wb)(e.renderCells, e.unrenderCells)),
          (e._updateExpanderIcon = Object(i.Wb)(e.updateExpanderIcon, null, [
            e._renderCells,
          ])),
          (e.onExpanderClick = function (t) {
            var n = e.props;
            e.context.calendar.dispatch({
              type: "SET_RESOURCE_ENTITY_EXPANDED",
              id: n.id,
              isExpanded: !n.isExpanded,
            });
          }),
          e
        );
      }
      return (
        At(e, t),
        (e.prototype.render = function (t) {
          this._renderCells(t.group, t.spreadsheetColCnt),
            this._updateExpanderIcon(t.isExpanded),
            (this.isSizeDirty = !0);
        }),
        (e.prototype.destroy = function () {
          t.prototype.destroy.call(this), this._renderCells.unrender();
        }),
        (e.prototype.renderCells = function (t, e) {
          var n = this.renderSpreadsheetContent(t);
          this.spreadsheetTr.appendChild(
            Object(i.Z)(
              "td",
              { className: "fc-divider", colSpan: e },
              (this.spreadsheetHeightEl = Object(i.Z)("div", null, n))
            )
          ),
            (this.expanderIconEl = n.querySelector(".fc-icon")),
            this.expanderIconEl.parentElement.addEventListener(
              "click",
              this.onExpanderClick
            ),
            this.timeAxisTr.appendChild(
              Object(i.Z)(
                "td",
                { className: "fc-divider" },
                (this.timeAxisHeightEl = document.createElement("div"))
              )
            );
        }),
        (e.prototype.unrenderCells = function () {
          (this.spreadsheetTr.innerHTML = ""), (this.timeAxisTr.innerHTML = "");
        }),
        (e.prototype.renderSpreadsheetContent = function (t) {
          var e = this.renderCellText(t),
            n = Object(i.Db)(
              '<div class="fc-cell-content"><span class="fc-expander"><span class="fc-icon"></span></span><span class="fc-cell-text">' +
                (e ? Object(i.Cb)(e) : "&nbsp;") +
                "</span></div>"
            ),
            r = t.spec.render;
          return "function" == typeof r && (n = r(n, t.value) || n), n;
        }),
        (e.prototype.renderCellText = function (t) {
          var e = t.value || "",
            n = t.spec.text;
          return "function" == typeof n && (e = n(e) || e), e;
        }),
        (e.prototype.getHeightEls = function () {
          return [this.spreadsheetHeightEl, this.timeAxisHeightEl];
        }),
        (e.prototype.updateExpanderIcon = function (t) {
          Ct(this.expanderIconEl, t);
        }),
        e
      );
    })(zt);
    St.addEqualityFuncs({
      group: function (t, e) {
        return t.spec === e.spec && t.value === e.value;
      },
    });
    var Tt = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (
          (n._renderRow = Object(i.Wb)(n.renderRow, n.unrenderRow)),
          (n._updateTrResourceId = Object(i.Wb)(kt, null, [n._renderRow])),
          (n._updateExpanderIcon = Object(i.Wb)(n.updateExpanderIcon, null, [
            n._renderRow,
          ])),
          (n.onExpanderClick = function (t) {
            var e = n.props;
            n.context.calendar.dispatch({
              type: "SET_RESOURCE_ENTITY_EXPANDED",
              id: e.id,
              isExpanded: !e.isExpanded,
            });
          }),
          (n.tr = e),
          n
        );
      }
      return (
        At(e, t),
        (e.prototype.render = function (t) {
          this._renderRow(t.resource, t.rowSpans, t.depth, t.colSpecs),
            this._updateTrResourceId(this.tr, t.resource.id),
            this._updateExpanderIcon(t.hasChildren, t.isExpanded);
        }),
        (e.prototype.destroy = function () {
          t.prototype.destroy.call(this), this._renderRow.unrender();
        }),
        (e.prototype.renderRow = function (t, e, n, r) {
          for (
            var o,
              a = this.context,
              s = a.calendar,
              l = a.view,
              c = a.theme,
              d = this.tr,
              u = Mt(t),
              p = 0;
            p < r.length;
            p++
          ) {
            var h = r[p],
              f = e[p];
            if (0 !== f) {
              var b;
              null == f && (f = 1),
                (b = h.field ? u[h.field] : ft(h.text, s)(t));
              var m = Object(i.Db)(
                '<div class="fc-cell-content">' +
                  (h.isMain ? Dt(n) : "") +
                  '<span class="fc-cell-text">' +
                  (b ? Object(i.Cb)(b) : "&nbsp;") +
                  "</span></div>"
              );
              "function" == typeof h.render &&
                (m = h.render(new lt(s, t), m) || m),
                f > 1 && m.classList.add("fc-sticky");
              var g = Object(i.Z)(
                "td",
                { className: c.getClass("widgetContent"), rowspan: f },
                m
              );
              h.isMain &&
                (g.appendChild(
                  (this.heightEl = Object(i.Z)("div", null, g.childNodes))
                ),
                (o = g)),
                d.appendChild(g);
            }
          }
          (this.expanderIconEl = d.querySelector(
            ".fc-expander-space .fc-icon"
          )),
            s.publiclyTrigger("resourceRender", [
              { resource: new lt(s, t), el: o, view: l },
            ]);
        }),
        (e.prototype.unrenderRow = function () {
          this.tr.innerHTML = "";
        }),
        (e.prototype.updateExpanderIcon = function (t, e) {
          var n,
            i = this.expanderIconEl,
            r = i.parentElement;
          i &&
            r &&
            (t
              ? (r.addEventListener("click", this.onExpanderClick),
                r.classList.add("fc-expander"),
                Ct(i, e))
              : (r.removeEventListener("click", this.onExpanderClick),
                r.classList.remove("fc-expander"),
                (n = i.classList).remove("fc-icon-minus-square"),
                n.remove("fc-icon-plus-square")));
        }),
        e
      );
    })(i.b);
    function Dt(t) {
      for (var e = "", n = 0; n < t; n++) e += '<span class="fc-icon"></span>';
      return (e +=
        '<span class="fc-expander-space"><span class="fc-icon"></span></span>');
    }
    var Lt = (function (t) {
      function e(e, n, r, o, a) {
        var s = t.call(this, e, n, r, o) || this;
        return (
          (s.renderSkeleton = Object(i.Wb)(
            s._renderSkeleton,
            s._unrenderSkeleton
          )),
          (s.updateTrResourceId = Object(i.Wb)(kt)),
          (s.timeAxis = a),
          s
        );
      }
      return (
        At(e, t),
        (e.prototype.render = function (t, e) {
          this.renderSkeleton(e),
            this.spreadsheetRow.receiveProps(
              {
                colSpecs: t.colSpecs,
                id: t.id,
                rowSpans: t.rowSpans,
                depth: t.depth,
                isExpanded: t.isExpanded,
                hasChildren: t.hasChildren,
                resource: t.resource,
              },
              e
            ),
            this.updateTrResourceId(this.timeAxisTr, t.resource.id),
            this.lane.receiveProps(
              {
                dateProfile: t.dateProfile,
                nextDayThreshold: t.nextDayThreshold,
                businessHours: t.businessHours,
                eventStore: t.eventStore,
                eventUiBases: t.eventUiBases,
                dateSelection: t.dateSelection,
                eventSelection: t.eventSelection,
                eventDrag: t.eventDrag,
                eventResize: t.eventResize,
              },
              e
            ),
            (this.isSizeDirty = !0);
        }),
        (e.prototype.destroy = function () {
          this.renderSkeleton.unrender(), t.prototype.destroy.call(this);
        }),
        (e.prototype._renderSkeleton = function (t) {
          this.timeAxisTr.appendChild(
            (this.cellEl = Object(i.Z)(
              "td",
              { className: t.theme.getClass("widgetContent") },
              (this.innerContainerEl = document.createElement("div"))
            ))
          ),
            (this.spreadsheetRow = new Tt(this.spreadsheetTr)),
            (this.lane = new j(
              this.innerContainerEl,
              this.innerContainerEl,
              this.timeAxis
            ));
        }),
        (e.prototype._unrenderSkeleton = function () {
          this.spreadsheetRow.destroy(),
            this.lane.destroy(),
            Object(i.pc)(this.cellEl);
        }),
        (e.prototype.updateSize = function (e) {
          t.prototype.updateSize.call(this, e), this.lane.updateSize(e);
        }),
        (e.prototype.getHeightEls = function () {
          return [this.spreadsheetRow.heightEl, this.innerContainerEl];
        }),
        e
      );
    })(zt);
    Lt.addEqualityFuncs({ rowSpans: i.Jb });
    var qt = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.resizables = []),
            (n.colWidths = []),
            (n.emitter = new i.j()),
            (n.renderSkeleton = Object(i.Wb)(
              n._renderSkeleton,
              n._unrenderSkeleton
            )),
            (n.parentEl = e),
            n
          );
        }
        return (
          At(e, t),
          (e.prototype.render = function (t, e) {
            this.renderSkeleton(e);
            var n = e.theme,
              r = t.colSpecs,
              o = "<colgroup>" + t.colTags + "</colgroup><tbody>";
            t.superHeaderText &&
              (o +=
                '<tr class="fc-super"><th class="' +
                n.getClass("widgetHeader") +
                '" colspan="' +
                r.length +
                '"><div class="fc-cell-content"><span class="fc-cell-text">' +
                Object(i.Cb)(t.superHeaderText) +
                "</span></div></th></tr>"),
              (o += "<tr>");
            for (var a = 0; a < r.length; a++) {
              var s = r[a],
                l = a === r.length - 1;
              o +=
                '<th class="' +
                n.getClass("widgetHeader") +
                '"><div><div class="fc-cell-content">' +
                (s.isMain
                  ? '<span class="fc-expander-space"><span class="fc-icon"></span></span>'
                  : "") +
                '<span class="fc-cell-text">' +
                Object(i.Cb)(s.labelText || "") +
                "</span></div>" +
                (l ? "" : '<div class="fc-col-resizer"></div>') +
                "</div></th>";
            }
            (o += "</tr>"),
              (o += "</tbody>"),
              (this.tableEl.innerHTML = o),
              (this.thEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll("th")
              )),
              (this.colEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll("col")
              )),
              (this.resizerEls = Array.prototype.slice.call(
                this.tableEl.querySelectorAll(".fc-col-resizer")
              )),
              this.initColResizing();
          }),
          (e.prototype.destroy = function () {
            for (var e = 0, n = this.resizables; e < n.length; e++)
              n[e].destroy();
            this.renderSkeleton.unrender(), t.prototype.destroy.call(this);
          }),
          (e.prototype._renderSkeleton = function (t) {
            this.parentEl.appendChild(
              (this.tableEl = Object(i.Z)("table", {
                className: t.theme.getClass("tableGrid"),
              }))
            );
          }),
          (e.prototype._unrenderSkeleton = function () {
            Object(i.pc)(this.tableEl);
          }),
          (e.prototype.initColResizing = function () {
            var t = this,
              e = this.context,
              n = e.calendar,
              i = e.isRtl,
              r = n.pluginSystem.hooks.elementDraggingImpl;
            r &&
              (this.resizables = this.resizerEls.map(function (e, n) {
                var o,
                  a = new r(e);
                return (
                  a.emitter.on("dragstart", function () {
                    "number" != typeof (o = t.colWidths[n]) &&
                      (o = t.thEls[n].getBoundingClientRect().width);
                  }),
                  a.emitter.on("dragmove", function (e) {
                    (t.colWidths[n] = Math.max(
                      o + e.deltaX * (i ? -1 : 1),
                      30
                    )),
                      t.emitter.trigger("colwidthchange", t.colWidths);
                  }),
                  a.setAutoScrollEnabled(!1),
                  a
                );
              }));
          }),
          e
        );
      })(i.b),
      Et = (function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (
            (r.renderSkeleton = Object(i.Wb)(
              r._renderSkeleton,
              r._unrenderSkeleton
            )),
            (r.renderCells = Object(i.Wb)(r._renderCells, r._unrenderCells, [
              r.renderSkeleton,
            ])),
            (r.layout = new h(e, n, "clipped-scroll")),
            r
          );
        }
        return (
          At(e, t),
          (e.prototype.render = function (t, e) {
            this.renderSkeleton(e),
              this.renderCells(t.superHeaderText, t.colSpecs);
          }),
          (e.prototype.destroy = function () {
            this.renderCells.unrender(),
              this.renderSkeleton.unrender(),
              this.layout.destroy(),
              t.prototype.destroy.call(this);
          }),
          (e.prototype._renderSkeleton = function (t) {
            var e = this;
            this.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(
              (this.bodyContainerEl = Object(i.Z)(
                "div",
                { className: "fc-rows" },
                "<table><colgroup /><tbody /></table>"
              ))
            ),
              (this.bodyColGroup =
                this.bodyContainerEl.querySelector("colgroup")),
              (this.bodyTbody = this.bodyContainerEl.querySelector("tbody"));
            var n = this.layout.headerScroller.enhancedScroll;
            (this.header = new qt(n.canvas.contentEl)),
              this.header.emitter.on("colwidthchange", function (t) {
                e.applyColWidths(t);
              });
          }),
          (e.prototype._unrenderSkeleton = function () {
            this.header.destroy();
          }),
          (e.prototype._renderCells = function (t, e) {
            var n = this.renderColTags(e);
            this.header.receiveProps(
              { superHeaderText: t, colSpecs: e, colTags: n },
              this.context
            ),
              (this.bodyColGroup.innerHTML = n),
              (this.bodyColEls = Array.prototype.slice.call(
                this.bodyColGroup.querySelectorAll("col")
              )),
              this.applyColWidths(
                e.map(function (t) {
                  return t.width;
                })
              );
          }),
          (e.prototype._unrenderCells = function () {
            this.bodyColGroup.innerHTML = "";
          }),
          (e.prototype.renderColTags = function (t) {
            for (var e = "", n = 0, i = t; n < i.length; n++)
              i[n].isMain
                ? (e += '<col class="fc-main-col"/>')
                : (e += "<col/>");
            return e;
          }),
          (e.prototype.updateSize = function (t, e, n) {
            this.layout.setHeight(e, n);
          }),
          (e.prototype.applyColWidths = function (t) {
            var e = this;
            t.forEach(function (t, n) {
              var i,
                r = e.header.colEls[n],
                o = e.bodyColEls[n];
              "number" == typeof t
                ? (i = t + "px")
                : null == typeof t && (i = ""),
                (r.style.width = o.style.width = i);
            });
          }),
          e
        );
      })(i.b),
      jt = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.isStickyScrollDirty = !1),
            (e.rowNodes = []),
            (e.rowComponents = []),
            (e.rowComponentsById = {}),
            (e.resourceAreaWidthDraggings = []),
            (e.splitter = new ct()),
            (e.renderSkeleton = Object(i.Wb)(
              e._renderSkeleton,
              e._unrenderSkeleton
            )),
            (e.hasResourceBusinessHours = Object(i.Ub)(Pt)),
            (e.buildRowNodes = Object(i.Ub)(vt)),
            (e.hasNesting = Object(i.Ub)(Rt)),
            (e.updateHasNesting = Object(i.Wb)(e._updateHasNesting)),
            (e.startInteractive = Object(i.Wb)(
              e._startInteractive,
              e._stopInteractive
            )),
            e
          );
        }
        return (
          At(e, t),
          (e.prototype._startInteractive = function (t) {
            this.context.calendar.registerInteractiveComponent(this, { el: t });
          }),
          (e.prototype._stopInteractive = function () {
            this.context.calendar.unregisterInteractiveComponent(this);
          }),
          (e.prototype.render = function (e, n) {
            t.prototype.render.call(this, e, n), this.renderSkeleton(n);
            var i = this.splitter.splitProps(e),
              r = this.hasResourceBusinessHours(e.resourceStore);
            this.spreadsheet.receiveProps(
              {
                superHeaderText: this.superHeaderText,
                colSpecs: this.colSpecs,
              },
              n
            ),
              this.timeAxis.receiveProps(
                {
                  dateProfileGenerator: e.dateProfileGenerator,
                  dateProfile: e.dateProfile,
                },
                n
              ),
              this.startInteractive(this.timeAxis.slats.el),
              this.lane.receiveProps(
                xt({}, i[""], {
                  dateProfile: e.dateProfile,
                  nextDayThreshold: n.nextDayThreshold,
                  businessHours: r ? null : e.businessHours,
                }),
                n
              );
            var o = this.buildRowNodes(
              e.resourceStore,
              this.groupSpecs,
              this.orderSpecs,
              this.isVGrouping,
              e.resourceEntityExpansions,
              n.options.resourcesInitiallyExpanded
            );
            this.updateHasNesting(this.hasNesting(o)),
              this.diffRows(o),
              this.updateRowProps(e.dateProfile, r ? e.businessHours : null, i),
              this.startNowIndicator(e.dateProfile, e.dateProfileGenerator);
          }),
          (e.prototype._renderSkeleton = function (t) {
            var e = t.options,
              n = t.calendar,
              r = e.resourceColumns || [],
              o = e.resourceLabelText,
              a = null;
            r.length
              ? (a = o)
              : r.push({
                  labelText: o || "Resources",
                  text: ft(e.resourceText, n),
                });
            for (
              var s = [], l = [], c = [], d = !1, u = !1, h = 0, f = r;
              h < f.length;
              h++
            ) {
              var b = f[h];
              b.group ? l.push(b) : s.push(b);
            }
            if (((s[0].isMain = !0), l.length)) (c = l), (d = !0);
            else {
              var m = e.resourceGroupField;
              m &&
                ((u = !0),
                c.push({
                  field: m,
                  text: e.resourceGroupText,
                  render: e.resourceGroupRender,
                }));
            }
            for (
              var g = [], v = 0, _ = Object(i.dc)(e.resourceOrder);
              v < _.length;
              v++
            ) {
              for (var y = _[v], M = !1, O = 0, w = c; O < w.length; O++) {
                var A = w[O];
                if (A.field === y.field) {
                  (A.order = y.order), (M = !0);
                  break;
                }
              }
              M || g.push(y);
            }
            (this.superHeaderText = a),
              (this.isVGrouping = d),
              (this.isHGrouping = u),
              (this.groupSpecs = c),
              (this.colSpecs = l.concat(s)),
              (this.orderSpecs = g),
              this.el.classList.add("fc-timeline"),
              !1 === e.eventOverlap && this.el.classList.add("fc-no-overlap"),
              (this.el.innerHTML = this.renderSkeletonHtml()),
              (this.resourceAreaHeadEl = this.el.querySelector(
                "thead .fc-resource-area"
              )),
              this.setResourceAreaWidth(e.resourceAreaWidth),
              this.initResourceAreaWidthDragging(),
              (this.miscHeight = this.el.getBoundingClientRect().height),
              (this.spreadsheet = new Et(
                this.resourceAreaHeadEl,
                this.el.querySelector("tbody .fc-resource-area")
              )),
              (this.timeAxis = new S(
                this.el.querySelector("thead .fc-time-area"),
                this.el.querySelector("tbody .fc-time-area")
              ));
            var x = Object(i.Z)(
              "div",
              { className: "fc-rows" },
              "<table><tbody /></table>"
            );
            this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(
              x
            ),
              (this.timeAxisTbody = x.querySelector("tbody")),
              (this.lane = new j(
                null,
                this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl,
                this.timeAxis
              )),
              (this.bodyScrollJoiner = new p("vertical", [
                this.spreadsheet.layout.bodyScroller,
                this.timeAxis.layout.bodyScroller,
              ])),
              (this.spreadsheetBodyStickyScroller = new k(
                this.spreadsheet.layout.bodyScroller.enhancedScroll,
                t.isRtl,
                !0
              ));
          }),
          (e.prototype._unrenderSkeleton = function (t) {
            this.startInteractive.unrender(),
              this.destroyRows(),
              this.spreadsheet.destroy(),
              this.timeAxis.destroy(),
              this.lane.destroy(),
              this.spreadsheetBodyStickyScroller.destroy(),
              this.el.classList.remove("fc-timeline"),
              this.el.classList.remove("fc-no-overlap");
          }),
          (e.prototype.renderSkeletonHtml = function () {
            var t = this.context.theme;
            return (
              '<table class="' +
              t.getClass("tableGrid") +
              '"> <thead class="fc-head"> <tr> <td class="fc-resource-area ' +
              t.getClass("widgetHeader") +
              '"></td> <td class="fc-divider fc-col-resizer ' +
              t.getClass("widgetHeader") +
              '"></td> <td class="fc-time-area ' +
              t.getClass("widgetHeader") +
              '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-resource-area ' +
              t.getClass("widgetContent") +
              '"></td> <td class="fc-divider fc-col-resizer ' +
              t.getClass("widgetHeader") +
              '"></td> <td class="fc-time-area ' +
              t.getClass("widgetContent") +
              '"></td> </tr> </tbody> </table>'
            );
          }),
          (e.prototype._updateHasNesting = function (t) {
            var e = this.el.classList;
            t ? e.remove("fc-flat") : e.add("fc-flat");
          }),
          (e.prototype.diffRows = function (t) {
            var e = this.rowNodes,
              n = e.length,
              i = {},
              r = 0,
              o = 0;
            for (r = 0; r < n; r++) i[e[r].id] = r;
            for (r = 0, o = 0; o < t.length; o++) {
              var a = t[o],
                s = i[a.id];
              null != s && s >= r
                ? (this.removeRows(o, s - r, e), (r = s + 1))
                : this.addRow(o, a);
            }
            this.removeRows(o, n - r, e), (this.rowNodes = t);
          }),
          (e.prototype.addRow = function (t, e) {
            var n = this.rowComponents,
              i = this.rowComponentsById,
              r = n[t],
              o = this.buildChildComponent(
                e,
                this.spreadsheet.bodyTbody,
                r ? r.spreadsheetTr : null,
                this.timeAxisTbody,
                r ? r.timeAxisTr : null
              );
            n.splice(t, 0, o), (i[e.id] = o);
          }),
          (e.prototype.removeRows = function (t, e, n) {
            if (e) {
              for (
                var i = this.rowComponents, r = this.rowComponentsById, o = 0;
                o < e;
                o++
              )
                i[t + o].destroy(), delete r[n[o].id];
              i.splice(t, e);
            }
          }),
          (e.prototype.buildChildComponent = function (t, e, n, i, r) {
            return t.group
              ? new St(e, n, i, r)
              : t.resource
              ? new Lt(e, n, i, r, this.timeAxis)
              : void 0;
          }),
          (e.prototype.updateRowProps = function (t, e, n) {
            for (
              var i = this.rowNodes,
                r = this.rowComponents,
                o = this.context,
                a = 0;
              a < i.length;
              a++
            ) {
              var s = i[a],
                l = r[a];
              if (s.group)
                l.receiveProps(
                  {
                    spreadsheetColCnt: this.colSpecs.length,
                    id: s.id,
                    isExpanded: s.isExpanded,
                    group: s.group,
                  },
                  o
                );
              else {
                var c = s.resource;
                l.receiveProps(
                  xt({}, n[c.id], {
                    dateProfile: t,
                    nextDayThreshold: o.nextDayThreshold,
                    businessHours: c.businessHours || e,
                    colSpecs: this.colSpecs,
                    id: s.id,
                    rowSpans: s.rowSpans,
                    depth: s.depth,
                    isExpanded: s.isExpanded,
                    hasChildren: s.hasChildren,
                    resource: s.resource,
                  }),
                  o
                );
              }
            }
          }),
          (e.prototype.updateSize = function (t, e, n) {
            var r = this.context.calendar,
              o = t || r.isViewUpdated || r.isDatesUpdated || r.isEventsUpdated;
            o && this.syncHeadHeights(),
              this.timeAxis.updateSize(t, e - this.miscHeight, n),
              this.spreadsheet.updateSize(t, e - this.miscHeight, n);
            var a = this.updateRowSizes(t);
            this.lane.updateSize(t),
              (o || a) &&
                (this.bodyScrollJoiner.update(),
                this.timeAxis.layout.scrollJoiner.update(),
                (this.rowPositions = new i.o(
                  this.timeAxis.slats.el,
                  this.rowComponents.map(function (t) {
                    return t.timeAxisTr;
                  }),
                  !1,
                  !0
                )),
                this.rowPositions.build(),
                (this.isStickyScrollDirty = !0));
          }),
          (e.prototype.syncHeadHeights = function () {
            var t = this.spreadsheet.header.tableEl,
              e = this.timeAxis.header.tableEl;
            (t.style.height = ""), (e.style.height = "");
            var n = Math.max(
              t.getBoundingClientRect().height,
              e.getBoundingClientRect().height
            );
            t.style.height = e.style.height = n + "px";
          }),
          (e.prototype.updateRowSizes = function (t) {
            var e = this.rowComponents;
            t ||
              (e = e.filter(function (t) {
                return t.isSizeDirty;
              }));
            for (
              var n = e.map(function (t) {
                  return t.getHeightEls();
                }),
                i = 0,
                r = n;
              i < r.length;
              i++
            )
              for (var o = 0, a = r[i]; o < a.length; o++)
                a[o].style.height = "";
            for (var s = 0, l = e; s < l.length; s++) l[s].updateSize(t);
            for (
              var c = n.map(function (t) {
                  for (var e = null, n = 0, i = t; n < i.length; n++) {
                    var r = i[n].getBoundingClientRect().height;
                    (null === e || r > e) && (e = r);
                  }
                  return e;
                }),
                d = 0;
              d < n.length;
              d++
            )
              for (var u = 0, p = n[d]; u < p.length; u++)
                p[u].style.height = c[d] + "px";
            return e.length;
          }),
          (e.prototype.destroyRows = function () {
            for (var t = 0, e = this.rowComponents; t < e.length; t++)
              e[t].destroy();
            (this.rowNodes = []), (this.rowComponents = []);
          }),
          (e.prototype.destroy = function () {
            for (
              var e = 0, n = this.resourceAreaWidthDraggings;
              e < n.length;
              e++
            )
              n[e].destroy();
            this.renderSkeleton.unrender(), t.prototype.destroy.call(this);
          }),
          (e.prototype.getNowIndicatorUnit = function (t, e) {
            return this.timeAxis.getNowIndicatorUnit(t, e);
          }),
          (e.prototype.renderNowIndicator = function (t) {
            this.timeAxis.renderNowIndicator(t);
          }),
          (e.prototype.unrenderNowIndicator = function () {
            this.timeAxis.unrenderNowIndicator();
          }),
          (e.prototype.queryScroll = function () {
            var e = t.prototype.queryScroll.call(this);
            return (
              this.props.resourceStore && xt(e, this.queryResourceScroll()), e
            );
          }),
          (e.prototype.applyScroll = function (e, n) {
            t.prototype.applyScroll.call(this, e, n),
              this.props.resourceStore && this.applyResourceScroll(e),
              (n || this.isStickyScrollDirty) &&
                ((this.isStickyScrollDirty = !1),
                this.spreadsheetBodyStickyScroller.updateSize(),
                this.timeAxis.updateStickyScrollers());
          }),
          (e.prototype.computeDateScroll = function (t) {
            return this.timeAxis.computeDateScroll(t);
          }),
          (e.prototype.queryDateScroll = function () {
            return this.timeAxis.queryDateScroll();
          }),
          (e.prototype.applyDateScroll = function (t) {
            this.timeAxis.applyDateScroll(t);
          }),
          (e.prototype.queryResourceScroll = function () {
            for (
              var t = this.rowComponents,
                e = this.rowNodes,
                n = {},
                i =
                  this.timeAxis.layout.bodyScroller.el.getBoundingClientRect()
                    .top,
                r = 0;
              r < t.length;
              r++
            ) {
              var o = t[r],
                a = e[r],
                s = o.timeAxisTr.getBoundingClientRect().bottom;
              if (s > i) {
                (n.rowId = a.id), (n.bottom = s - i);
                break;
              }
            }
            return n;
          }),
          (e.prototype.applyResourceScroll = function (t) {
            var e = t.forcedRowId || t.rowId;
            if (e) {
              var n = this.rowComponentsById[e];
              if (n) {
                var i = n.timeAxisTr;
                if (i) {
                  var r =
                      this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.el.getBoundingClientRect()
                        .top,
                    o = i.getBoundingClientRect(),
                    a = (t.forcedRowId ? o.top : o.bottom - t.bottom) - r;
                  this.timeAxis.layout.bodyScroller.enhancedScroll.setScrollTop(
                    a
                  ),
                    this.spreadsheet.layout.bodyScroller.enhancedScroll.setScrollTop(
                      a
                    );
                }
              }
            }
          }),
          (e.prototype.buildPositionCaches = function () {
            this.timeAxis.slats.updateSize(), this.rowPositions.build();
          }),
          (e.prototype.queryHit = function (t, e) {
            var n = this.rowPositions,
              i = this.timeAxis.slats,
              r = n.topToIndex(e);
            if (null != r) {
              var o = this.rowNodes[r].resource;
              if (o) {
                var a = i.positionToHit(t);
                if (a)
                  return {
                    component: this,
                    dateSpan: {
                      range: a.dateSpan.range,
                      allDay: a.dateSpan.allDay,
                      resourceId: o.id,
                    },
                    rect: {
                      left: a.left,
                      right: a.right,
                      top: n.tops[r],
                      bottom: n.bottoms[r],
                    },
                    dayEl: a.dayEl,
                    layer: 0,
                  };
              }
            }
          }),
          (e.prototype.setResourceAreaWidth = function (t) {
            (this.resourceAreaWidth = t),
              Object(i.D)(this.resourceAreaHeadEl, "width", t || "");
          }),
          (e.prototype.initResourceAreaWidthDragging = function () {
            var t = this,
              e = this.context,
              n = e.calendar,
              i = e.isRtl,
              r = Array.prototype.slice.call(
                this.el.querySelectorAll(".fc-col-resizer")
              ),
              o = n.pluginSystem.hooks.elementDraggingImpl;
            o &&
              (this.resourceAreaWidthDraggings = r.map(function (e) {
                var n,
                  r,
                  a = new o(e);
                return (
                  a.emitter.on("dragstart", function () {
                    "number" != typeof (n = t.resourceAreaWidth) &&
                      (n = t.resourceAreaHeadEl.getBoundingClientRect().width),
                      (r = t.el.getBoundingClientRect().width);
                  }),
                  a.emitter.on("dragmove", function (e) {
                    var o = n + e.deltaX * (i ? -1 : 1);
                    (o = Math.max(o, 30)),
                      (o = Math.min(o, r - 30)),
                      t.setResourceAreaWidth(o);
                  }),
                  a.setAutoScrollEnabled(!1),
                  a
                );
              }));
          }),
          (e.needsResourceData = !0),
          e
        );
      })(i.t);
    function Pt(t) {
      for (var e in t) if (t[e].businessHours) return !0;
      return !1;
    }
    function Rt(t) {
      for (var e = 0, n = t; e < n.length; e++) {
        var i = n[e];
        if (i.group) return !0;
        if (i.resource && i.hasChildren) return !0;
      }
      return !1;
    }
    var It = Object(i.db)({
      deps: [Ot, I],
      defaultView: "resourceTimelineDay",
      views: {
        resourceTimeline: {
          class: jt,
          resourceAreaWidth: "30%",
          resourcesInitiallyExpanded: !0,
          eventResizableFromStart: !0,
        },
        resourceTimelineDay: {
          type: "resourceTimeline",
          duration: { days: 1 },
        },
        resourceTimelineWeek: {
          type: "resourceTimeline",
          duration: { weeks: 1 },
        },
        resourceTimelineMonth: {
          type: "resourceTimeline",
          duration: { months: 1 },
        },
        resourceTimelineYear: {
          type: "resourceTimeline",
          duration: { years: 1 },
        },
      },
    });
    e.a = It;
  },
  ,
  function (t, e, n) {
    n(633), n(799), (t.exports = n(809));
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        var e = n(620),
          i = n(75),
          r = n(334),
          o = n.n(r),
          a = n(336),
          s = n(332),
          l = n.n(s),
          c = n(142),
          d = n.n(c),
          u = n(333),
          p = n.n(u),
          h = n(611),
          f = n(58),
          b = n.n(f),
          m = (n(742), n(626)),
          g = n(612),
          v = n(615),
          _ = n(613),
          y = n.n(_),
          M = n(621),
          O = n(614),
          w = n.n(O),
          A = n(338),
          x = n(542),
          z = n(78),
          C = (n(752), n(8));
        function k(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function S(t) {
          return (S =
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
        var T = b.a.import("attributors/style/align"),
          D = b.a.import("attributors/style/background"),
          L = b.a.import("attributors/style/color"),
          q = b.a.import("attributors/style/direction"),
          E = b.a.import("attributors/style/font"),
          j = b.a.import("attributors/style/size");
        b.a.register(T, !0),
          b.a.register(D, !0),
          b.a.register(L, !0),
          b.a.register(q, !0),
          b.a.register(E, !0),
          b.a.register(j, !0),
          n(537),
          (window.Vue = n(34)),
          (window.autoTable = n(754)),
          (window.PerfectScrollbar = g.a),
          Vue.use(o.a),
          Vue.use(a.a),
          Vue.use(h.a),
          Vue.use(p.a, { componentPrefix: "vc" }),
          Vue.component("vue-timepicker", d.a),
          Vue.component("multi-select", l.a),
          Vue.use(v.a),
          Vue.component("downloadCsv", y.a),
          Vue.use(w.a),
          Vue.use(M.a),
          Vue.component("loader-component-2", n(405).default),
          Vue.component("loader-component", n(779).default),
          Vue.component("appointment-calender", n(793).default),
          Vue.component("get-custom-fields", n(794).default),
          Vue.component("edit-custom-fields", n(795).default),
          Vue.component("weekly-appointment-chart", n(780).default),
          Vue.component("appointment-list", n(91).default),
          Vue.component("doctor-session", n(796).default),
          Vue.component("general-component-help", n(781).default),
          Vue.component("google-calendar-help", n(782).default),
          Vue.component("language-help", n(783).default),
          Vue.component("sms-help", n(784).default),
          Vue.component("telemed-help", n(785).default),
          Vue.component("shortcode-help", n(797).default),
          Vue.component("woocommerce-help", n(786).default),
          Vue.component("appointment-help", n(787).default),
          Vue.component("holiday-help", n(788).default),
          Vue.component("overlay-message", n(789).default),
          Vue.component("module-data-export", n(790).default),
          Vue.component("module-data-import", n(791).default),
          Vue.filter("dateFormat", function (t) {
            return window.moment.utc(t).format("h:mm A DD MMM YYYY");
          }),
          Vue.filter("checkUndefined", function (t) {
            return void 0 !== t ? t : " - ";
          }),
          Vue.filter("doctorObjectToString", function (t) {
            var e = "";
            return (
              t.map(function (n, i) {
                return ++i, (e += n.text), i !== t.length && (e += ", "), n;
              }),
              e
            );
          }),
          Vue.filter("timeObjectToString", function (t) {
            return t.HH + ":" + t.mm;
          }),
          Vue.filter("filterString", function (t) {
            return "" === t || null == t
              ? ""
              : (t = (t = t.replace(".", " ")).replace("_", " "));
          }),
          Vue.mixin({
            data: function () {
              return {
                clinicAdminName: "",
                doctorRoleName: "",
                patientRoleName: "",
                adminRoleName: "",
                receptionistRoleName: "",
                clinicData: "",
                overlayOpacity: "0",
                requireProVersion: "2.0.2",
              };
            },
            component: {},
            mounted: function () {
              (this.adminRoleName = "administrator"),
                (this.clinicAdminName = window.pluginPREFIX + "clinic_admin"),
                (this.doctorRoleName = window.pluginPREFIX + "doctor"),
                (this.patientRoleName = window.pluginPREFIX + "patient"),
                (this.receptionistRoleName =
                  window.pluginPREFIX + "receptionist"),
                (this.clinicData = this.singleClinicData);
              var t = this;
              setTimeout(function () {
                t.$refs.dataTable &&
                  ((t.$refs.dataTable.nextText =
                    t.formTranslation.datatable.next_text),
                  (t.$refs.dataTable.prevText =
                    t.formTranslation.datatable.prev_text),
                  (t.$refs.dataTable.rowsPerPageText =
                    t.formTranslation.datatable.rows_per_page),
                  (t.$refs.dataTable.ofText =
                    t.formTranslation.datatable.of_text),
                  (t.$refs.dataTable.allText =
                    t.formTranslation.datatable.all_text),
                  (t.$refs.dataTable.pageText =
                    t.formTranslation.datatable.page_text));
              }, 1e3);
            },
            computed: {
              checkEnableModule: function () {
                var t = this;
                return function (e) {
                  return (
                    t.$store.state.userDataModule.user.module.module_config.filter(
                      function (t) {
                        return t.name === e && "1" === t.status;
                      }
                    ).length > 0
                  );
                };
              },
              singleClinicData: function () {
                return this.$store.state.userDataModule.clinic;
              },
              currencyData: function () {
                if (void 0 !== this.singleClinicData.extra)
                  return JSON.parse(this.singleClinicData.extra);
              },
              formTranslation: function () {
                if (
                  void 0 !==
                  this.$store.state.staticDataModule.langTranslateData
                )
                  return this.$store.state.staticDataModule.langTranslateData;
              },
              dateFormatValue: function () {
                return void 0 !== this.$store.state.date_format
                  ? this.$store.state.date_format
                  : "D-MM-YYYY";
              },
              userDataMix: function () {
                return this.$store.state.userDataModule.user;
              },
            },
            methods: {
              kcCheckPermission: function (t) {
                var e = !1,
                  n = this.$store.state.userDataModule.user;
                if (void 0 !== n.permissions) {
                  var i = window.pluginPREFIX + t;
                  void 0 === n.permissions[i] ||
                    (!0 !== n.permissions[i] && 1 !== n.permissions[i]) ||
                    (e = !0);
                }
                return e;
              },
              kivicareProFeatureIcon: function (t) {
                var e,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "";
                return (
                  (n =
                    "" === n
                      ? null !== z.a &&
                        void 0 !== z.a &&
                        null !== (e = z.a[t]) &&
                        void 0 !== e &&
                        e.text
                        ? z.a[t].text
                        : z.b.text
                      : n),
                  '<span  class="ml-2 badge p-1 kivicare-badge" style="background:#f68685"> \n                        '.concat(
                    n,
                    "\n                    </span>"
                  )
                );
              },
              getUserRole: function () {
                var t = i.a.state.userDataModule.user;
                if (void 0 !== t.roles)
                  return t.roles.includes(this.adminRoleName)
                    ? this.adminRoleName
                    : t.roles.includes(this.clinicAdminName)
                    ? "clinic_admin"
                    : t.roles.includes(this.doctorRoleName)
                    ? "doctor"
                    : t.roles.includes(this.patientRoleName)
                    ? "patient"
                    : t.roles.includes(this.receptionistRoleName)
                    ? "receptionist"
                    : "";
              },
              changeModuleValueStatus: function (e) {
                var n = this,
                  i = "",
                  r = "",
                  o = "";
                ["doctors", "receptionists", "patients"].includes(e.module_type)
                  ? "0" == e.value
                    ? ((o = !1),
                      (i = this.formTranslation.common.inactive),
                      (r = "badge badge-danger "))
                    : ((o = !0),
                      (i = this.formTranslation.common.active),
                      (r = "badge badge-success "))
                  : "0" == e.value
                  ? ((o = !0),
                    (i = this.formTranslation.common.active),
                    (r = "badge badge-success "))
                  : ((o = !1),
                    (i = this.formTranslation.common.inactive),
                    (r = "badge badge-danger "));
                var a = t("#status_change_" + e.id),
                  s = t(a).parent().parent().find("span");
                a.prop("disabled", !0),
                  Object(C.b)("change_module_value_status", e)
                    .then(function (l) {
                      if (void 0 !== l.data.status && !0 === l.data.status)
                        switch (
                          (displayMessage(l.data.message), e.module_type)
                        ) {
                          case "clinics":
                            n.$store.dispatch("fetchAllClinic", { self: n }),
                              n.getClinicData();
                            break;
                          case "doctors":
                            n.getDoctorList();
                            break;
                          case "patients":
                            n.getPatientList();
                            break;
                          case "receptionists":
                            n.getReceptionistList();
                            break;
                          case "custom_field":
                            n.getCustomFieldList();
                            break;
                          case "custom_form":
                            n.getCustomFormList();
                            break;
                          case "doctor_service":
                            n.getServiceData();
                            break;
                          case "static_data":
                            n.getStaticData();
                            break;
                          case "tax":
                            n.getTaxData();
                            break;
                          case "webhooks":
                            n.getTableData();
                        }
                      else
                        o ? t(a).prop("checked", !0) : t(a).prop("checked", !1),
                          s.removeClass().addClass(r).text(i),
                          displayErrorMessage(l.data.message);
                      a.prop("disabled", !1);
                    })
                    .catch(function (e) {
                      o ? t(a).prop("checked", !0) : t(a).prop("checked", !1),
                        a.prop("disabled", !1),
                        s.removeClass().addClass(r).text(i),
                        displayErrorMessage(
                          n.formTranslation.common.internal_server_error
                        );
                    });
              },
              kivicareCompareVersion: function (t, e) {
                var n = !1;
                "object" !== S(t) && (t = t.toString().split(".")),
                  "object" !== S(e) && (e = e.toString().split("."));
                for (
                  var i = 0;
                  i < Math.max(t.length, e.length) &&
                  null != t[i] &&
                  (null == e[i] && (e[i] = 0), Number(t[i]) <= Number(e[i]));
                  i++
                )
                  n = !0;
                return n;
              },
              logout: function () {},
              formatJsonAppointmentData: function (t) {
                var e = this;
                return t.map(function (t) {
                  return Object.keys(t).reduce(function (n, i) {
                    switch (i) {
                      case "all_service_charges":
                        n[e.formTranslation.service.charges] =
                          t.clinic_prefix + t[i] + t.clinic_postfix;
                        break;
                      case "status":
                        var r = "";
                        switch (t[i].toString()) {
                          case "0":
                            r = e.formTranslation.appointments.cancelled;
                            break;
                          case "1":
                            r = e.formTranslation.appointments.booked;
                            break;
                          case "2":
                            r = e.formTranslation.appointments.arrived;
                            break;
                          case "3":
                            r = e.formTranslation.appointments.check_out;
                            break;
                          case "4":
                            r = e.formTranslation.appointments.check_in;
                        }
                        n[e.formTranslation.patient_bill.plh_status] = r;
                        break;
                      case "appointment_start_date":
                        n[e.formTranslation.appointments.plh_date] = t[i];
                        break;
                      case "appointment_start_time":
                        n[e.formTranslation.common.time] = t[i];
                        break;
                      case "appointment_report":
                        n[e.formTranslation.reports.reports] = t[i];
                        break;
                      case "all_services":
                        n[e.formTranslation.patient_bill.plh_service] = t[i];
                        break;
                      default:
                        [
                          "appointment_end_date",
                          "appointment_end_time",
                          "type_label",
                          "encounter_id",
                          "zoom_data",
                          "clinic_prefix",
                          "clinic_postfix",
                          "video_consultation",
                          "descriptionEnable",
                          "visit_type_old",
                          "isEditAble",
                          "clinic_extra",
                          "visit_type",
                          "custom_fields",
                          "clinic_id",
                          "doctor_id",
                          "patient_id",
                          "encounter_detail",
                        ].includes(i) || (n[i] = t[i]);
                    }
                    return n;
                  }, {});
                });
              },
              printPdfFromArray: function (t, e) {
                var n = [],
                  i = [],
                  r = {};
                t.map(function (t) {
                  (n = Object.keys(t)),
                    Object.entries(t).map(function (t, e) {
                      var n = (function (t, e) {
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
                                  o,
                                  a,
                                  s = [],
                                  l = !0,
                                  c = !1;
                                try {
                                  if (((o = (n = n.call(t)).next), 0)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                  } else
                                    for (
                                      ;
                                      !(l = (i = o.call(n)).done) &&
                                      (s.push(i.value), 2 !== s.length);
                                      l = !0
                                    );
                                } catch (t) {
                                  (c = !0), (r = t);
                                } finally {
                                  try {
                                    if (
                                      !l &&
                                      null != n.return &&
                                      ((a = n.return()), Object(a) !== a)
                                    )
                                      return;
                                  } finally {
                                    if (c) throw r;
                                  }
                                }
                                return s;
                              }
                            })(t) ||
                            (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return k(t, 2);
                                var n = {}.toString.call(t).slice(8, -1);
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
                                    ? k(t, 2)
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
                        })(t),
                        i = n[0],
                        o = n[1];
                      return (
                        ("clinic_admin_profile_image" != i &&
                          "Profile image" != i &&
                          "image" != i &&
                          "patient_profile_image" != i) ||
                          (r[e] = { cellWidth: 50 }),
                        "string" == typeof o && o.startsWith("http"),
                        o
                      );
                    }),
                    i.push(Object.values(t));
                });
                var o = 35 * n.length,
                  a = new x.jsPDF({
                    orientation: "landscape",
                    unit: "mm",
                    format: [o, 210],
                  });
                a.autoTable({
                  headStyles: {
                    fillColor: window.request_data.proActive
                      ? this.userDataMix.theme_color
                      : "#4874dc",
                  },
                  StyleDef: { overflow: "linebreak" },
                  head: [n],
                  body: i,
                  horizontalPageBreak: !1,
                  didDrawPage: function (t) {
                    a.setFontSize(18),
                      a.setTextColor(40),
                      a.text(
                        e,
                        (o -
                          (t.settings.margin.left + t.settings.margin.right)) /
                          2,
                        10
                      );
                  },
                  columnStyles: r,
                  startY: 20,
                  tableWidth: "auto",
                }),
                  a.save(
                    e +
                      "_" +
                      window.moment.utc(new Date()).format("D-MM-YYYY") +
                      ".pdf"
                  );
              },
            },
          }),
          null !== document.getElementById("app") &&
            (window.vm = new Vue({
              router: e.a,
              store: i.a,
              i18n: A.a,
              render: function (t) {
                return t(m.a);
              },
            }).$mount("#app"));
      }.call(this, n(30));
  },
  function (t, e, n) {
    var i;
    t.exports = (function () {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function a(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, _(i.key), i);
        }
      }
      function l(t, e, n) {
        return (
          e && s(t.prototype, e),
          n && s(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function c(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = M(t)) ||
            (e && t && "number" == typeof t.length)
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
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function d(t) {
        var e = (function () {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return !!t;
        })();
        return function () {
          var n,
            i = p(t);
          if (e) {
            var r = p(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" == typeof e || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return o(t);
          })(this, n);
        };
      }
      function u(t, e, n) {
        return (
          (e = _(e)) in t
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
      function p(t) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function h(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && m(t, e);
      }
      function f(t, e) {
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
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function m(t, e) {
        return (m = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function g(t, e) {
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
                o,
                a,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = o.call(n)).done) &&
                    (s.push(i.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (c = !0), (r = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return s;
            }
          })(t, e) ||
          M(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          M(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == typeof e ? e : e + "";
      }
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
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      var O = (function () {
          function t() {
            a(this, t);
          }
          return (
            l(
              t,
              [
                {
                  key: "shadeRGBColor",
                  value: function (t, e) {
                    var n = e.split(","),
                      i = t < 0 ? 0 : 255,
                      r = t < 0 ? -1 * t : t,
                      o = parseInt(n[0].slice(4), 10),
                      a = parseInt(n[1], 10),
                      s = parseInt(n[2], 10);
                    return (
                      "rgb(" +
                      (Math.round((i - o) * r) + o) +
                      "," +
                      (Math.round((i - a) * r) + a) +
                      "," +
                      (Math.round((i - s) * r) + s) +
                      ")"
                    );
                  },
                },
                {
                  key: "shadeHexColor",
                  value: function (t, e) {
                    var n = parseInt(e.slice(1), 16),
                      i = t < 0 ? 0 : 255,
                      r = t < 0 ? -1 * t : t,
                      o = n >> 16,
                      a = (n >> 8) & 255,
                      s = 255 & n;
                    return (
                      "#" +
                      (
                        16777216 +
                        65536 * (Math.round((i - o) * r) + o) +
                        256 * (Math.round((i - a) * r) + a) +
                        (Math.round((i - s) * r) + s)
                      )
                        .toString(16)
                        .slice(1)
                    );
                  },
                },
                {
                  key: "shadeColor",
                  value: function (e, n) {
                    return t.isColorHex(n)
                      ? this.shadeHexColor(e, n)
                      : this.shadeRGBColor(e, n);
                  },
                },
              ],
              [
                {
                  key: "bind",
                  value: function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                },
                {
                  key: "isObject",
                  value: function (t) {
                    return (
                      t && "object" === y(t) && !Array.isArray(t) && null != t
                    );
                  },
                },
                {
                  key: "is",
                  value: function (t, e) {
                    return (
                      Object.prototype.toString.call(e) === "[object " + t + "]"
                    );
                  },
                },
                {
                  key: "listToArray",
                  value: function (t) {
                    var e,
                      n = [];
                    for (e = 0; e < t.length; e++) n[e] = t[e];
                    return n;
                  },
                },
                {
                  key: "extend",
                  value: function (t, e) {
                    var n = this;
                    "function" != typeof Object.assign &&
                      (Object.assign = function (t) {
                        if (null == t)
                          throw new TypeError(
                            "Cannot convert undefined or null to object"
                          );
                        for (
                          var e = Object(t), n = 1;
                          n < arguments.length;
                          n++
                        ) {
                          var i = arguments[n];
                          if (null != i)
                            for (var r in i)
                              i.hasOwnProperty(r) && (e[r] = i[r]);
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
                            : Object.assign(i, u({}, r, e[r]));
                        }),
                      i
                    );
                  },
                },
                {
                  key: "extendArray",
                  value: function (e, n) {
                    var i = [];
                    return (
                      e.map(function (e) {
                        i.push(t.extend(n, e));
                      }),
                      i
                    );
                  },
                },
                {
                  key: "monthMod",
                  value: function (t) {
                    return t % 12;
                  },
                },
                {
                  key: "clone",
                  value: function (e) {
                    if (t.is("Array", e)) {
                      for (var n = [], i = 0; i < e.length; i++)
                        n[i] = this.clone(e[i]);
                      return n;
                    }
                    if (t.is("Null", e)) return null;
                    if (t.is("Date", e)) return e;
                    if ("object" === y(e)) {
                      var r = {};
                      for (var o in e)
                        e.hasOwnProperty(o) && (r[o] = this.clone(e[o]));
                      return r;
                    }
                    return e;
                  },
                },
                {
                  key: "log10",
                  value: function (t) {
                    return Math.log(t) / Math.LN10;
                  },
                },
                {
                  key: "roundToBase10",
                  value: function (t) {
                    return Math.pow(10, Math.floor(Math.log10(t)));
                  },
                },
                {
                  key: "roundToBase",
                  value: function (t, e) {
                    return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)));
                  },
                },
                {
                  key: "parseNumber",
                  value: function (t) {
                    return null === t ? t : parseFloat(t);
                  },
                },
                {
                  key: "stripNumber",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 2;
                    return Number.isInteger(t)
                      ? t
                      : parseFloat(t.toPrecision(e));
                  },
                },
                {
                  key: "randomId",
                  value: function () {
                    return (Math.random() + 1).toString(36).substring(4);
                  },
                },
                {
                  key: "noExponents",
                  value: function (t) {
                    var e = String(t).split(/[eE]/);
                    if (1 === e.length) return e[0];
                    var n = "",
                      i = t < 0 ? "-" : "",
                      r = e[0].replace(".", ""),
                      o = Number(e[1]) + 1;
                    if (o < 0) {
                      for (n = i + "0."; o++; ) n += "0";
                      return n + r.replace(/^-/, "");
                    }
                    for (o -= r.length; o--; ) n += "0";
                    return r + n;
                  },
                },
                {
                  key: "getDimensions",
                  value: function (t) {
                    var e = getComputedStyle(t, null),
                      n = t.clientHeight,
                      i = t.clientWidth;
                    return (
                      (n -=
                        parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)),
                      [
                        (i -=
                          parseFloat(e.paddingLeft) +
                          parseFloat(e.paddingRight)),
                        n,
                      ]
                    );
                  },
                },
                {
                  key: "getBoundingClientRect",
                  value: function (t) {
                    var e = t.getBoundingClientRect();
                    return {
                      top: e.top,
                      right: e.right,
                      bottom: e.bottom,
                      left: e.left,
                      width: t.clientWidth,
                      height: t.clientHeight,
                      x: e.left,
                      y: e.top,
                    };
                  },
                },
                {
                  key: "getLargestStringFromArr",
                  value: function (t) {
                    return t.reduce(function (t, e) {
                      return (
                        Array.isArray(e) &&
                          (e = e.reduce(function (t, e) {
                            return t.length > e.length ? t : e;
                          })),
                        t.length > e.length ? t : e
                      );
                    }, 0);
                  },
                },
                {
                  key: "hexToRgba",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "#999999",
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0.6;
                    "#" !== t.substring(0, 1) && (t = "#999999");
                    var n = t.replace("#", "");
                    n = n.match(new RegExp("(.{" + n.length / 3 + "})", "g"));
                    for (var i = 0; i < n.length; i++)
                      n[i] = parseInt(
                        1 === n[i].length ? n[i] + n[i] : n[i],
                        16
                      );
                    return (
                      void 0 !== e && n.push(e), "rgba(" + n.join(",") + ")"
                    );
                  },
                },
                {
                  key: "getOpacityFromRGBA",
                  value: function (t) {
                    return parseFloat(t.replace(/^.*,(.+)\)/, "$1"));
                  },
                },
                {
                  key: "rgb2hex",
                  value: function (t) {
                    return (t = t.match(
                      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
                    )) && 4 === t.length
                      ? "#" +
                          ("0" + parseInt(t[1], 10).toString(16)).slice(-2) +
                          ("0" + parseInt(t[2], 10).toString(16)).slice(-2) +
                          ("0" + parseInt(t[3], 10).toString(16)).slice(-2)
                      : "";
                  },
                },
                {
                  key: "isColorHex",
                  value: function (t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(
                      t
                    );
                  },
                },
                {
                  key: "getPolygonPos",
                  value: function (t, e) {
                    for (var n = [], i = (2 * Math.PI) / e, r = 0; r < e; r++) {
                      var o = {};
                      (o.x = t * Math.sin(r * i)),
                        (o.y = -t * Math.cos(r * i)),
                        n.push(o);
                    }
                    return n;
                  },
                },
                {
                  key: "polarToCartesian",
                  value: function (t, e, n, i) {
                    var r = ((i - 90) * Math.PI) / 180;
                    return { x: t + n * Math.cos(r), y: e + n * Math.sin(r) };
                  },
                },
                {
                  key: "escapeString",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "x",
                      n = t.toString().slice();
                    return n.replace(
                      /[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,
                      e
                    );
                  },
                },
                {
                  key: "negToZero",
                  value: function (t) {
                    return t < 0 ? 0 : t;
                  },
                },
                {
                  key: "moveIndexInArray",
                  value: function (t, e, n) {
                    if (n >= t.length)
                      for (var i = n - t.length + 1; i--; ) t.push(void 0);
                    return t.splice(n, 0, t.splice(e, 1)[0]), t;
                  },
                },
                {
                  key: "extractNumber",
                  value: function (t) {
                    return parseFloat(t.replace(/[^\d.]*/g, ""));
                  },
                },
                {
                  key: "findAncestor",
                  value: function (t, e) {
                    for (; (t = t.parentElement) && !t.classList.contains(e); );
                    return t;
                  },
                },
                {
                  key: "setELstyles",
                  value: function (t, e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && (t.style.key = e[n]);
                  },
                },
                {
                  key: "preciseAddition",
                  value: function (t, e) {
                    var n = (String(t).split(".")[1] || "").length,
                      i = (String(e).split(".")[1] || "").length,
                      r = Math.pow(10, Math.max(n, i));
                    return (Math.round(t * r) + Math.round(e * r)) / r;
                  },
                },
                {
                  key: "isNumber",
                  value: function (t) {
                    return (
                      !isNaN(t) &&
                      parseFloat(Number(t)) === t &&
                      !isNaN(parseInt(t, 10))
                    );
                  },
                },
                {
                  key: "isFloat",
                  value: function (t) {
                    return Number(t) === t && t % 1 != 0;
                  },
                },
                {
                  key: "isSafari",
                  value: function () {
                    return /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    );
                  },
                },
                {
                  key: "isFirefox",
                  value: function () {
                    return (
                      navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                    );
                  },
                },
                {
                  key: "isMsEdge",
                  value: function () {
                    var t = window.navigator.userAgent,
                      e = t.indexOf("Edge/");
                    return (
                      e > 0 &&
                      parseInt(t.substring(e + 5, t.indexOf(".", e)), 10)
                    );
                  },
                },
                {
                  key: "getGCD",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 7,
                      i = Math.pow(
                        10,
                        n - Math.floor(Math.log10(Math.max(t, e)))
                      );
                    for (
                      t = Math.round(Math.abs(t) * i),
                        e = Math.round(Math.abs(e) * i);
                      e;

                    ) {
                      var r = e;
                      (e = t % e), (t = r);
                    }
                    return t / i;
                  },
                },
                {
                  key: "getPrimeFactors",
                  value: function (t) {
                    for (var e = [], n = 2; t >= 2; )
                      t % n == 0 ? (e.push(n), (t /= n)) : n++;
                    return e;
                  },
                },
                {
                  key: "mod",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 7,
                      i = Math.pow(
                        10,
                        n - Math.floor(Math.log10(Math.max(t, e)))
                      );
                    return (
                      ((t = Math.round(Math.abs(t) * i)) %
                        (e = Math.round(Math.abs(e) * i))) /
                      i
                    );
                  },
                },
              ]
            ),
            t
          );
        })(),
        w = (function () {
          function t(e) {
            a(this, t),
              (this.ctx = e),
              (this.w = e.w),
              this.setEasingFunctions();
          }
          return (
            l(t, [
              {
                key: "setEasingFunctions",
                value: function () {
                  var t;
                  if (!this.w.globals.easing) {
                    switch (this.w.config.chart.animations.easing) {
                      case "linear":
                        t = "-";
                        break;
                      case "easein":
                        t = "<";
                        break;
                      case "easeout":
                        t = ">";
                        break;
                      case "easeinout":
                      default:
                        t = "<>";
                        break;
                      case "swing":
                        t = function (t) {
                          var e = 1.70158;
                          return (t -= 1) * t * ((e + 1) * t + e) + 1;
                        };
                        break;
                      case "bounce":
                        t = function (t) {
                          return t < 1 / 2.75
                            ? 7.5625 * t * t
                            : t < 2 / 2.75
                            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                            : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                        };
                        break;
                      case "elastic":
                        t = function (t) {
                          return t === !!t
                            ? t
                            : Math.pow(2, -10 * t) *
                                Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
                                1;
                        };
                    }
                    this.w.globals.easing = t;
                  }
                },
              },
              {
                key: "animateLine",
                value: function (t, e, n, i) {
                  t.attr(e).animate(i).attr(n);
                },
              },
              {
                key: "animateMarker",
                value: function (t, e, n, i) {
                  t.attr({ opacity: 0 })
                    .animate(e, n)
                    .attr({ opacity: 1 })
                    .afterAll(function () {
                      i();
                    });
                },
              },
              {
                key: "animateRect",
                value: function (t, e, n, i, r) {
                  t.attr(e)
                    .animate(i)
                    .attr(n)
                    .afterAll(function () {
                      return r();
                    });
                },
              },
              {
                key: "animatePathsGradually",
                value: function (t) {
                  var e = t.el,
                    n = t.realIndex,
                    i = t.j,
                    r = t.fill,
                    o = t.pathFrom,
                    a = t.pathTo,
                    s = t.speed,
                    l = t.delay,
                    c = this.w,
                    d = 0;
                  c.config.chart.animations.animateGradually.enabled &&
                    (d = c.config.chart.animations.animateGradually.delay),
                    c.config.chart.animations.dynamicAnimation.enabled &&
                      c.globals.dataChanged &&
                      "bar" !== c.config.chart.type &&
                      (d = 0),
                    this.morphSVG(
                      e,
                      n,
                      i,
                      "line" !== c.config.chart.type || c.globals.comboCharts
                        ? r
                        : "stroke",
                      o,
                      a,
                      s,
                      l * d
                    );
                },
              },
              {
                key: "showDelayedElements",
                value: function () {
                  this.w.globals.delayedElements.forEach(function (t) {
                    var e = t.el;
                    e.classList.remove("apexcharts-element-hidden"),
                      e.classList.add("apexcharts-hidden-element-shown");
                  });
                },
              },
              {
                key: "animationCompleted",
                value: function (t) {
                  var e = this.w;
                  e.globals.animationEnded ||
                    ((e.globals.animationEnded = !0),
                    this.showDelayedElements(),
                    "function" == typeof e.config.chart.events.animationEnd &&
                      e.config.chart.events.animationEnd(this.ctx, {
                        el: t,
                        w: e,
                      }));
                },
              },
              {
                key: "morphSVG",
                value: function (t, e, n, i, r, o, a, s) {
                  var l = this,
                    c = this.w;
                  r || (r = t.attr("pathFrom")), o || (o = t.attr("pathTo"));
                  var d = function (t) {
                    return (
                      "radar" === c.config.chart.type && (a = 1),
                      "M 0 ".concat(c.globals.gridHeight)
                    );
                  };
                  (!r ||
                    r.indexOf("undefined") > -1 ||
                    r.indexOf("NaN") > -1) &&
                    (r = d()),
                    (!o ||
                      o.indexOf("undefined") > -1 ||
                      o.indexOf("NaN") > -1) &&
                      (o = d()),
                    c.globals.shouldAnimate || (a = 1),
                    t
                      .plot(r)
                      .animate(1, c.globals.easing, s)
                      .plot(r)
                      .animate(a, c.globals.easing, s)
                      .plot(o)
                      .afterAll(function () {
                        O.isNumber(n)
                          ? n ===
                              c.globals.series[c.globals.maxValsInArrayIndex]
                                .length -
                                2 &&
                            c.globals.shouldAnimate &&
                            l.animationCompleted(t)
                          : "none" !== i &&
                            c.globals.shouldAnimate &&
                            ((!c.globals.comboCharts &&
                              e === c.globals.series.length - 1) ||
                              c.globals.comboCharts) &&
                            l.animationCompleted(t),
                          l.showDelayedElements();
                      });
                },
              },
            ]),
            t
          );
        })(),
        A = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(t, [
              {
                key: "getDefaultFilter",
                value: function (t, e) {
                  var n = this.w;
                  t.unfilter(!0),
                    new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"),
                    "none" !== n.config.states.normal.filter
                      ? this.applyFilter(
                          t,
                          e,
                          n.config.states.normal.filter.type,
                          n.config.states.normal.filter.value
                        )
                      : n.config.chart.dropShadow.enabled &&
                        this.dropShadow(t, n.config.chart.dropShadow, e);
                },
              },
              {
                key: "addNormalFilter",
                value: function (t, e) {
                  var n = this.w;
                  n.config.chart.dropShadow.enabled &&
                    !t.node.classList.contains("apexcharts-marker") &&
                    this.dropShadow(t, n.config.chart.dropShadow, e);
                },
              },
              {
                key: "addLightenFilter",
                value: function (t, e, n) {
                  var i = this,
                    r = this.w,
                    o = n.intensity;
                  t.unfilter(!0),
                    new window.SVG.Filter(),
                    t.filter(function (t) {
                      var n = r.config.chart.dropShadow;
                      (n.enabled ? i.addShadow(t, e, n) : t).componentTransfer({
                        rgb: { type: "linear", slope: 1.5, intercept: o },
                      });
                    }),
                    t.filterer.node.setAttribute(
                      "filterUnits",
                      "userSpaceOnUse"
                    ),
                    this._scaleFilterSize(t.filterer.node);
                },
              },
              {
                key: "addDarkenFilter",
                value: function (t, e, n) {
                  var i = this,
                    r = this.w,
                    o = n.intensity;
                  t.unfilter(!0),
                    new window.SVG.Filter(),
                    t.filter(function (t) {
                      var n = r.config.chart.dropShadow;
                      (n.enabled ? i.addShadow(t, e, n) : t).componentTransfer({
                        rgb: { type: "linear", slope: o },
                      });
                    }),
                    t.filterer.node.setAttribute(
                      "filterUnits",
                      "userSpaceOnUse"
                    ),
                    this._scaleFilterSize(t.filterer.node);
                },
              },
              {
                key: "applyFilter",
                value: function (t, e, n) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0.5;
                  switch (n) {
                    case "none":
                      this.addNormalFilter(t, e);
                      break;
                    case "lighten":
                      this.addLightenFilter(t, e, { intensity: i });
                      break;
                    case "darken":
                      this.addDarkenFilter(t, e, { intensity: i });
                  }
                },
              },
              {
                key: "addShadow",
                value: function (t, e, n) {
                  var i,
                    r = this.w,
                    o = n.blur,
                    a = n.top,
                    s = n.left,
                    l = n.color,
                    c = n.opacity;
                  if (
                    (null === (i = r.config.chart.dropShadow.enabledOnSeries) ||
                    void 0 === i
                      ? void 0
                      : i.length) > 0 &&
                    -1 === r.config.chart.dropShadow.enabledOnSeries.indexOf(e)
                  )
                    return t;
                  var d = t
                    .flood(Array.isArray(l) ? l[e] : l, c)
                    .composite(t.sourceAlpha, "in")
                    .offset(s, a)
                    .gaussianBlur(o)
                    .merge(t.source);
                  return t.blend(t.source, d);
                },
              },
              {
                key: "dropShadow",
                value: function (t, e) {
                  var n,
                    i,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    o = e.top,
                    a = e.left,
                    s = e.blur,
                    l = e.color,
                    c = e.opacity,
                    d = e.noUserSpaceOnUse,
                    u = this.w;
                  return (
                    t.unfilter(!0),
                    (O.isMsEdge() && "radialBar" === u.config.chart.type) ||
                      ((null ===
                        (n = u.config.chart.dropShadow.enabledOnSeries) ||
                      void 0 === n
                        ? void 0
                        : n.length) > 0 &&
                        -1 ===
                          (null ===
                            (i = u.config.chart.dropShadow.enabledOnSeries) ||
                          void 0 === i
                            ? void 0
                            : i.indexOf(r))) ||
                      ((l = Array.isArray(l) ? l[r] : l),
                      t.filter(function (t) {
                        var e;
                        (e =
                          O.isSafari() || O.isFirefox() || O.isMsEdge()
                            ? t
                                .flood(l, c)
                                .composite(t.sourceAlpha, "in")
                                .offset(a, o)
                                .gaussianBlur(s)
                            : t
                                .flood(l, c)
                                .composite(t.sourceAlpha, "in")
                                .offset(a, o)
                                .gaussianBlur(s)
                                .merge(t.source)),
                          t.blend(t.source, e);
                      }),
                      d ||
                        t.filterer.node.setAttribute(
                          "filterUnits",
                          "userSpaceOnUse"
                        ),
                      this._scaleFilterSize(t.filterer.node)),
                    t
                  );
                },
              },
              {
                key: "setSelectionFilter",
                value: function (t, e, n) {
                  var i = this.w;
                  if (
                    void 0 !== i.globals.selectedDataPoints[e] &&
                    i.globals.selectedDataPoints[e].indexOf(n) > -1
                  ) {
                    t.node.setAttribute("selected", !0);
                    var r = i.config.states.active.filter;
                    "none" !== r && this.applyFilter(t, e, r.type, r.value);
                  }
                },
              },
              {
                key: "_scaleFilterSize",
                value: function (t) {
                  !(function (e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && t.setAttribute(n, e[n]);
                  })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
                },
              },
            ]),
            t
          );
        })(),
        x = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(
              t,
              [
                {
                  key: "roundPathCorners",
                  value: function (t, e) {
                    function n(t, e, n) {
                      var r = e.x - t.x,
                        o = e.y - t.y,
                        a = Math.sqrt(r * r + o * o);
                      return i(t, e, Math.min(1, n / a));
                    }
                    function i(t, e, n) {
                      return {
                        x: t.x + (e.x - t.x) * n,
                        y: t.y + (e.y - t.y) * n,
                      };
                    }
                    function r(t, e) {
                      t.length > 2 &&
                        ((t[t.length - 2] = e.x), (t[t.length - 1] = e.y));
                    }
                    function o(t) {
                      return {
                        x: parseFloat(t[t.length - 2]),
                        y: parseFloat(t[t.length - 1]),
                      };
                    }
                    t.indexOf("NaN") > -1 && (t = "");
                    var a = t
                        .split(/[,\s]/)
                        .reduce(function (t, e) {
                          var n = e.match("([a-zA-Z])(.+)");
                          return (
                            n ? (t.push(n[1]), t.push(n[2])) : t.push(e), t
                          );
                        }, [])
                        .reduce(function (t, e) {
                          return (
                            parseFloat(e) == e && t.length
                              ? t[t.length - 1].push(e)
                              : t.push([e]),
                            t
                          );
                        }, []),
                      s = [];
                    if (a.length > 1) {
                      var l = o(a[0]),
                        c = null;
                      "Z" == a[a.length - 1][0] &&
                        a[0].length > 2 &&
                        ((c = ["L", l.x, l.y]), (a[a.length - 1] = c)),
                        s.push(a[0]);
                      for (var d = 1; d < a.length; d++) {
                        var u = s[s.length - 1],
                          p = a[d],
                          h = p == c ? a[1] : a[d + 1];
                        if (
                          h &&
                          u &&
                          u.length > 2 &&
                          "L" == p[0] &&
                          h.length > 2 &&
                          "L" == h[0]
                        ) {
                          var f,
                            b,
                            m = o(u),
                            g = o(p),
                            v = o(h);
                          (f = n(g, m, e)),
                            (b = n(g, v, e)),
                            r(p, f),
                            (p.origPoint = g),
                            s.push(p);
                          var _ = i(f, g, 0.5),
                            y = i(g, b, 0.5),
                            M = ["C", _.x, _.y, y.x, y.y, b.x, b.y];
                          (M.origPoint = g), s.push(M);
                        } else s.push(p);
                      }
                      if (c) {
                        var O = o(s[s.length - 1]);
                        s.push(["Z"]), r(s[0], O);
                      }
                    } else s = a;
                    return s.reduce(function (t, e) {
                      return t + e.join(" ") + " ";
                    }, "");
                  },
                },
                {
                  key: "drawLine",
                  value: function (t, e, n, i) {
                    var r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : "#a8a8a8",
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      a =
                        arguments.length > 6 && void 0 !== arguments[6]
                          ? arguments[6]
                          : null,
                      s =
                        arguments.length > 7 && void 0 !== arguments[7]
                          ? arguments[7]
                          : "butt";
                    return this.w.globals.dom.Paper.line().attr({
                      x1: t,
                      y1: e,
                      x2: n,
                      y2: i,
                      stroke: r,
                      "stroke-dasharray": o,
                      "stroke-width": a,
                      "stroke-linecap": s,
                    });
                  },
                },
                {
                  key: "drawRect",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : "#fefefe",
                      a =
                        arguments.length > 6 && void 0 !== arguments[6]
                          ? arguments[6]
                          : 1,
                      s =
                        arguments.length > 7 && void 0 !== arguments[7]
                          ? arguments[7]
                          : null,
                      l =
                        arguments.length > 8 && void 0 !== arguments[8]
                          ? arguments[8]
                          : null,
                      c =
                        arguments.length > 9 && void 0 !== arguments[9]
                          ? arguments[9]
                          : 0,
                      d = this.w.globals.dom.Paper.rect();
                    return (
                      d.attr({
                        x: t,
                        y: e,
                        width: n > 0 ? n : 0,
                        height: i > 0 ? i : 0,
                        rx: r,
                        ry: r,
                        opacity: a,
                        "stroke-width": null !== s ? s : 0,
                        stroke: null !== l ? l : "none",
                        "stroke-dasharray": c,
                      }),
                      d.node.setAttribute("fill", o),
                      d
                    );
                  },
                },
                {
                  key: "drawPolygon",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "#e1e1e1",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "none";
                    return this.w.globals.dom.Paper.polygon(t).attr({
                      fill: i,
                      stroke: e,
                      "stroke-width": n,
                    });
                  },
                },
                {
                  key: "drawCircle",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    t < 0 && (t = 0);
                    var n = this.w.globals.dom.Paper.circle(2 * t);
                    return null !== e && n.attr(e), n;
                  },
                },
                {
                  key: "drawPath",
                  value: function (t) {
                    var e = t.d,
                      n = void 0 === e ? "" : e,
                      i = t.stroke,
                      r = void 0 === i ? "#a8a8a8" : i,
                      o = t.strokeWidth,
                      a = void 0 === o ? 1 : o,
                      s = t.fill,
                      l = t.fillOpacity,
                      c = void 0 === l ? 1 : l,
                      d = t.strokeOpacity,
                      u = void 0 === d ? 1 : d,
                      p = t.classes,
                      h = t.strokeLinecap,
                      f = void 0 === h ? null : h,
                      b = t.strokeDashArray,
                      m = void 0 === b ? 0 : b,
                      g = this.w;
                    return (
                      null === f && (f = g.config.stroke.lineCap),
                      (n.indexOf("undefined") > -1 || n.indexOf("NaN") > -1) &&
                        (n = "M 0 ".concat(g.globals.gridHeight)),
                      g.globals.dom.Paper.path(n).attr({
                        fill: s,
                        "fill-opacity": c,
                        stroke: r,
                        "stroke-opacity": u,
                        "stroke-linecap": f,
                        "stroke-width": a,
                        "stroke-dasharray": m,
                        class: p,
                      })
                    );
                  },
                },
                {
                  key: "group",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      e = this.w.globals.dom.Paper.group();
                    return null !== t && e.attr(t), e;
                  },
                },
                {
                  key: "move",
                  value: function (t, e) {
                    return ["M", t, e].join(" ");
                  },
                },
                {
                  key: "line",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      i = null;
                    return (
                      null === n
                        ? (i = [" L", t, e].join(" "))
                        : "H" === n
                        ? (i = [" H", t].join(" "))
                        : "V" === n && (i = [" V", e].join(" ")),
                      i
                    );
                  },
                },
                {
                  key: "curve",
                  value: function (t, e, n, i, r, o) {
                    return ["C", t, e, n, i, r, o].join(" ");
                  },
                },
                {
                  key: "quadraticCurve",
                  value: function (t, e, n, i) {
                    return ["Q", t, e, n, i].join(" ");
                  },
                },
                {
                  key: "arc",
                  value: function (t, e, n, i, r, o, a) {
                    var s = "A";
                    arguments.length > 7 &&
                      void 0 !== arguments[7] &&
                      arguments[7] &&
                      (s = "a");
                    var l = [s, t, e, n, i, r, o, a].join(" ");
                    return l;
                  },
                },
                {
                  key: "renderPaths",
                  value: function (t) {
                    var e,
                      n = t.j,
                      i = t.realIndex,
                      r = t.pathFrom,
                      o = t.pathTo,
                      a = t.stroke,
                      s = t.strokeWidth,
                      l = t.strokeLinecap,
                      c = t.fill,
                      d = t.animationDelay,
                      u = t.initialSpeed,
                      p = t.dataChangeSpeed,
                      h = t.className,
                      f = t.chartType,
                      m = t.shouldClipToGrid,
                      g = void 0 === m || m,
                      v = t.bindEventsOnPaths,
                      _ = void 0 === v || v,
                      y = t.drawShadow,
                      M = void 0 === y || y,
                      O = this.w,
                      x = new A(this.ctx),
                      z = new w(this.ctx),
                      C = this.w.config.chart.animations.enabled,
                      k =
                        C &&
                        this.w.config.chart.animations.dynamicAnimation.enabled,
                      S = !!(
                        (C && !O.globals.resized) ||
                        (k && O.globals.dataChanged && O.globals.shouldAnimate)
                      );
                    S ? (e = r) : ((e = o), (O.globals.animationEnded = !0));
                    var T,
                      D = O.config.stroke.dashArray;
                    T = Array.isArray(D) ? D[i] : O.config.stroke.dashArray;
                    var L = this.drawPath({
                      d: e,
                      stroke: a,
                      strokeWidth: s,
                      fill: c,
                      fillOpacity: 1,
                      classes: h,
                      strokeLinecap: l,
                      strokeDashArray: T,
                    });
                    if (
                      (L.attr("index", i),
                      g &&
                        (("bar" === f && !O.globals.isHorizontal) ||
                        O.globals.comboCharts
                          ? L.attr({
                              "clip-path": "url(#gridRectBarMask".concat(
                                O.globals.cuid,
                                ")"
                              ),
                            })
                          : L.attr({
                              "clip-path": "url(#gridRectMask".concat(
                                O.globals.cuid,
                                ")"
                              ),
                            })),
                      "none" !== O.config.states.normal.filter.type)
                    )
                      x.getDefaultFilter(L, i);
                    else if (O.config.chart.dropShadow.enabled && M) {
                      var q = O.config.chart.dropShadow;
                      x.dropShadow(L, q, i);
                    }
                    _ &&
                      (L.node.addEventListener(
                        "mouseenter",
                        this.pathMouseEnter.bind(this, L)
                      ),
                      L.node.addEventListener(
                        "mouseleave",
                        this.pathMouseLeave.bind(this, L)
                      ),
                      L.node.addEventListener(
                        "mousedown",
                        this.pathMouseDown.bind(this, L)
                      )),
                      L.attr({ pathTo: o, pathFrom: r });
                    var E = {
                      el: L,
                      j: n,
                      realIndex: i,
                      pathFrom: r,
                      pathTo: o,
                      fill: c,
                      strokeWidth: s,
                      delay: d,
                    };
                    return (
                      !C || O.globals.resized || O.globals.dataChanged
                        ? (!O.globals.resized && O.globals.dataChanged) ||
                          z.showDelayedElements()
                        : z.animatePathsGradually(
                            b(b({}, E), {}, { speed: u })
                          ),
                      O.globals.dataChanged &&
                        k &&
                        S &&
                        z.animatePathsGradually(b(b({}, E), {}, { speed: p })),
                      L
                    );
                  },
                },
                {
                  key: "drawPattern",
                  value: function (t, e, n) {
                    var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "#a8a8a8",
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0;
                    return this.w.globals.dom.Paper.pattern(e, n, function (o) {
                      "horizontalLines" === t
                        ? o.line(0, 0, n, 0).stroke({ color: i, width: r + 1 })
                        : "verticalLines" === t
                        ? o.line(0, 0, 0, e).stroke({ color: i, width: r + 1 })
                        : "slantedLines" === t
                        ? o.line(0, 0, e, n).stroke({ color: i, width: r })
                        : "squares" === t
                        ? o
                            .rect(e, n)
                            .fill("none")
                            .stroke({ color: i, width: r })
                        : "circles" === t &&
                          o
                            .circle(e)
                            .fill("none")
                            .stroke({ color: i, width: r });
                    });
                  },
                },
                {
                  key: "drawGradient",
                  value: function (t, e, n, i, r) {
                    var o,
                      a =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : null,
                      s =
                        arguments.length > 6 && void 0 !== arguments[6]
                          ? arguments[6]
                          : null,
                      l =
                        arguments.length > 7 && void 0 !== arguments[7]
                          ? arguments[7]
                          : null,
                      c =
                        arguments.length > 8 && void 0 !== arguments[8]
                          ? arguments[8]
                          : 0,
                      d = this.w;
                    e.length < 9 &&
                      0 === e.indexOf("#") &&
                      (e = O.hexToRgba(e, i)),
                      n.length < 9 &&
                        0 === n.indexOf("#") &&
                        (n = O.hexToRgba(n, r));
                    var u = 0,
                      p = 1,
                      h = 1,
                      f = null;
                    null !== s &&
                      ((u = void 0 !== s[0] ? s[0] / 100 : 0),
                      (p = void 0 !== s[1] ? s[1] / 100 : 1),
                      (h = void 0 !== s[2] ? s[2] / 100 : 1),
                      (f = void 0 !== s[3] ? s[3] / 100 : null));
                    var b = !(
                      "donut" !== d.config.chart.type &&
                      "pie" !== d.config.chart.type &&
                      "polarArea" !== d.config.chart.type &&
                      "bubble" !== d.config.chart.type
                    );
                    if (
                      ((o =
                        null === l || 0 === l.length
                          ? d.globals.dom.Paper.gradient(
                              b ? "radial" : "linear",
                              function (t) {
                                t.at(u, e, i),
                                  t.at(p, n, r),
                                  t.at(h, n, r),
                                  null !== f && t.at(f, e, i);
                              }
                            )
                          : d.globals.dom.Paper.gradient(
                              b ? "radial" : "linear",
                              function (t) {
                                (Array.isArray(l[c]) ? l[c] : l).forEach(
                                  function (e) {
                                    t.at(e.offset / 100, e.color, e.opacity);
                                  }
                                );
                              }
                            )),
                      b)
                    ) {
                      var m = d.globals.gridWidth / 2,
                        g = d.globals.gridHeight / 2;
                      "bubble" !== d.config.chart.type
                        ? o.attr({
                            gradientUnits: "userSpaceOnUse",
                            cx: m,
                            cy: g,
                            r: a,
                          })
                        : o.attr({
                            cx: 0.5,
                            cy: 0.5,
                            r: 0.8,
                            fx: 0.2,
                            fy: 0.2,
                          });
                    } else
                      "vertical" === t
                        ? o.from(0, 0).to(0, 1)
                        : "diagonal" === t
                        ? o.from(0, 0).to(1, 1)
                        : "horizontal" === t
                        ? o.from(0, 1).to(1, 1)
                        : "diagonal2" === t && o.from(1, 0).to(0, 1);
                    return o;
                  },
                },
                {
                  key: "getTextBasedOnMaxWidth",
                  value: function (t) {
                    var e = t.text,
                      n = t.maxWidth,
                      i = t.fontSize,
                      r = t.fontFamily,
                      o = this.getTextRects(e, i, r),
                      a = o.width / e.length,
                      s = Math.floor(n / a);
                    return n < o.width ? e.slice(0, s - 3) + "..." : e;
                  },
                },
                {
                  key: "drawText",
                  value: function (t) {
                    var e = this,
                      n = t.x,
                      i = t.y,
                      r = t.text,
                      o = t.textAnchor,
                      a = t.fontSize,
                      s = t.fontFamily,
                      l = t.fontWeight,
                      c = t.foreColor,
                      d = t.opacity,
                      u = t.maxWidth,
                      p = t.cssClass,
                      h = void 0 === p ? "" : p,
                      f = t.isPlainText,
                      m = void 0 === f || f,
                      g = t.dominantBaseline,
                      v = void 0 === g ? "auto" : g,
                      _ = this.w;
                    void 0 === r && (r = "");
                    var y = r;
                    o || (o = "start"),
                      (c && c.length) || (c = _.config.chart.foreColor),
                      (s = s || _.config.chart.fontFamily),
                      (l = l || "regular");
                    var M,
                      O = {
                        maxWidth: u,
                        fontSize: (a = a || "11px"),
                        fontFamily: s,
                      };
                    return (
                      Array.isArray(r)
                        ? (M = _.globals.dom.Paper.text(function (t) {
                            for (var n = 0; n < r.length; n++)
                              (y = r[n]),
                                u &&
                                  (y = e.getTextBasedOnMaxWidth(
                                    b({ text: r[n] }, O)
                                  )),
                                0 === n ? t.tspan(y) : t.tspan(y).newLine();
                          }))
                        : (u &&
                            (y = this.getTextBasedOnMaxWidth(
                              b({ text: r }, O)
                            )),
                          (M = m
                            ? _.globals.dom.Paper.plain(r)
                            : _.globals.dom.Paper.text(function (t) {
                                return t.tspan(y);
                              }))),
                      M.attr({
                        x: n,
                        y: i,
                        "text-anchor": o,
                        "dominant-baseline": v,
                        "font-size": a,
                        "font-family": s,
                        "font-weight": l,
                        fill: c,
                        class: "apexcharts-text " + h,
                      }),
                      (M.node.style.fontFamily = s),
                      (M.node.style.opacity = d),
                      M
                    );
                  },
                },
                {
                  key: "getMarkerPath",
                  value: function (t, e, n, i) {
                    var r = "";
                    switch (n) {
                      case "cross":
                        r = "M "
                          .concat(t - (i /= 1.4), " ")
                          .concat(e - i, " L ")
                          .concat(t + i, " ")
                          .concat(e + i, "  M ")
                          .concat(t - i, " ")
                          .concat(e + i, " L ")
                          .concat(t + i, " ")
                          .concat(e - i);
                        break;
                      case "plus":
                        r = "M "
                          .concat(t - (i /= 1.12), " ")
                          .concat(e, " L ")
                          .concat(t + i, " ")
                          .concat(e, "  M ")
                          .concat(t, " ")
                          .concat(e - i, " L ")
                          .concat(t, " ")
                          .concat(e + i);
                        break;
                      case "star":
                      case "sparkle":
                        var o = 5;
                        (i *= 1.15), "sparkle" === n && ((i /= 1.1), (o = 4));
                        for (var a = Math.PI / o, s = 0; s <= 2 * o; s++) {
                          var l = s * a,
                            c = s % 2 == 0 ? i : i / 2;
                          r +=
                            (0 === s ? "M" : "L") +
                            (t + c * Math.sin(l)) +
                            "," +
                            (e - c * Math.cos(l));
                        }
                        r += "Z";
                        break;
                      case "triangle":
                        r = "M "
                          .concat(t, " ")
                          .concat(e - i, " \n             L ")
                          .concat(t + i, " ")
                          .concat(e + i, " \n             L ")
                          .concat(t - i, " ")
                          .concat(e + i, " \n             Z");
                        break;
                      case "square":
                      case "rect":
                        r = "M "
                          .concat(t - (i /= 1.125), " ")
                          .concat(e - i, " \n           L ")
                          .concat(t + i, " ")
                          .concat(e - i, " \n           L ")
                          .concat(t + i, " ")
                          .concat(e + i, " \n           L ")
                          .concat(t - i, " ")
                          .concat(e + i, " \n           Z");
                        break;
                      case "diamond":
                        (i *= 1.05),
                          (r = "M "
                            .concat(t, " ")
                            .concat(e - i, " \n             L ")
                            .concat(t + i, " ")
                            .concat(e, " \n             L ")
                            .concat(t, " ")
                            .concat(e + i, " \n             L ")
                            .concat(t - i, " ")
                            .concat(e, " \n            Z"));
                        break;
                      case "line":
                        r = "M "
                          .concat(t - (i /= 1.1), " ")
                          .concat(e, " \n           L ")
                          .concat(t + i, " ")
                          .concat(e);
                        break;
                      default:
                        (i *= 2),
                          (r = "M "
                            .concat(t, ", ")
                            .concat(e, " \n           m -")
                            .concat(i / 2, ", 0 \n           a ")
                            .concat(i / 2, ",")
                            .concat(i / 2, " 0 1,0 ")
                            .concat(i, ",0 \n           a ")
                            .concat(i / 2, ",")
                            .concat(i / 2, " 0 1,0 -")
                            .concat(i, ",0"));
                    }
                    return r;
                  },
                },
                {
                  key: "drawMarkerShape",
                  value: function (t, e, n, i, r) {
                    var o = this.drawPath({
                      d: this.getMarkerPath(t, e, n, i, r),
                      stroke: r.pointStrokeColor,
                      strokeDashArray: r.pointStrokeDashArray,
                      strokeWidth: r.pointStrokeWidth,
                      fill: r.pointFillColor,
                      fillOpacity: r.pointFillOpacity,
                      strokeOpacity: r.pointStrokeOpacity,
                    });
                    return (
                      o.attr({
                        cx: t,
                        cy: e,
                        shape: r.shape,
                        class: r.class ? r.class : "",
                      }),
                      o
                    );
                  },
                },
                {
                  key: "drawMarker",
                  value: function (t, e, n) {
                    t = t || 0;
                    var i = n.pSize || 0;
                    return (
                      O.isNumber(e) || ((i = 0), (e = 0)),
                      this.drawMarkerShape(
                        t,
                        e,
                        null == n ? void 0 : n.shape,
                        i,
                        b(
                          b({}, n),
                          "line" === n.shape ||
                            "plus" === n.shape ||
                            "cross" === n.shape
                            ? {
                                pointStrokeColor: n.pointFillColor,
                                pointStrokeOpacity: n.pointFillOpacity,
                              }
                            : {}
                        )
                      )
                    );
                  },
                },
                {
                  key: "pathMouseEnter",
                  value: function (t, e) {
                    var n = this.w,
                      i = new A(this.ctx),
                      r = parseInt(t.node.getAttribute("index"), 10),
                      o = parseInt(t.node.getAttribute("j"), 10);
                    if (
                      ("function" ==
                        typeof n.config.chart.events.dataPointMouseEnter &&
                        n.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                          seriesIndex: r,
                          dataPointIndex: o,
                          w: n,
                        }),
                      this.ctx.events.fireEvent("dataPointMouseEnter", [
                        e,
                        this.ctx,
                        { seriesIndex: r, dataPointIndex: o, w: n },
                      ]),
                      ("none" === n.config.states.active.filter.type ||
                        "true" !== t.node.getAttribute("selected")) &&
                        "none" !== n.config.states.hover.filter.type &&
                        !n.globals.isTouchDevice)
                    ) {
                      var a = n.config.states.hover.filter;
                      i.applyFilter(t, r, a.type, a.value);
                    }
                  },
                },
                {
                  key: "pathMouseLeave",
                  value: function (t, e) {
                    var n = this.w,
                      i = new A(this.ctx),
                      r = parseInt(t.node.getAttribute("index"), 10),
                      o = parseInt(t.node.getAttribute("j"), 10);
                    "function" ==
                      typeof n.config.chart.events.dataPointMouseLeave &&
                      n.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                        seriesIndex: r,
                        dataPointIndex: o,
                        w: n,
                      }),
                      this.ctx.events.fireEvent("dataPointMouseLeave", [
                        e,
                        this.ctx,
                        { seriesIndex: r, dataPointIndex: o, w: n },
                      ]),
                      ("none" !== n.config.states.active.filter.type &&
                        "true" === t.node.getAttribute("selected")) ||
                        ("none" !== n.config.states.hover.filter.type &&
                          i.getDefaultFilter(t, r));
                  },
                },
                {
                  key: "pathMouseDown",
                  value: function (t, e) {
                    var n = this.w,
                      i = new A(this.ctx),
                      r = parseInt(t.node.getAttribute("index"), 10),
                      o = parseInt(t.node.getAttribute("j"), 10),
                      a = "false";
                    if ("true" === t.node.getAttribute("selected")) {
                      if (
                        (t.node.setAttribute("selected", "false"),
                        n.globals.selectedDataPoints[r].indexOf(o) > -1)
                      ) {
                        var s = n.globals.selectedDataPoints[r].indexOf(o);
                        n.globals.selectedDataPoints[r].splice(s, 1);
                      }
                    } else {
                      if (
                        !n.config.states.active
                          .allowMultipleDataPointsSelection &&
                        n.globals.selectedDataPoints.length > 0
                      ) {
                        n.globals.selectedDataPoints = [];
                        var l = n.globals.dom.Paper.select(
                            ".apexcharts-series path"
                          ).members,
                          c = n.globals.dom.Paper.select(
                            ".apexcharts-series circle, .apexcharts-series rect"
                          ).members,
                          d = function (t) {
                            Array.prototype.forEach.call(t, function (t) {
                              t.node.setAttribute("selected", "false"),
                                i.getDefaultFilter(t, r);
                            });
                          };
                        d(l), d(c);
                      }
                      t.node.setAttribute("selected", "true"),
                        (a = "true"),
                        void 0 === n.globals.selectedDataPoints[r] &&
                          (n.globals.selectedDataPoints[r] = []),
                        n.globals.selectedDataPoints[r].push(o);
                    }
                    if ("true" === a) {
                      var u = n.config.states.active.filter;
                      if ("none" !== u) i.applyFilter(t, r, u.type, u.value);
                      else if (
                        "none" !== n.config.states.hover.filter &&
                        !n.globals.isTouchDevice
                      ) {
                        var p = n.config.states.hover.filter;
                        i.applyFilter(t, r, p.type, p.value);
                      }
                    } else
                      "none" !== n.config.states.active.filter.type &&
                        ("none" === n.config.states.hover.filter.type ||
                        n.globals.isTouchDevice
                          ? i.getDefaultFilter(t, r)
                          : ((p = n.config.states.hover.filter),
                            i.applyFilter(t, r, p.type, p.value)));
                    "function" ==
                      typeof n.config.chart.events.dataPointSelection &&
                      n.config.chart.events.dataPointSelection(e, this.ctx, {
                        selectedDataPoints: n.globals.selectedDataPoints,
                        seriesIndex: r,
                        dataPointIndex: o,
                        w: n,
                      }),
                      e &&
                        this.ctx.events.fireEvent("dataPointSelection", [
                          e,
                          this.ctx,
                          {
                            selectedDataPoints: n.globals.selectedDataPoints,
                            seriesIndex: r,
                            dataPointIndex: o,
                            w: n,
                          },
                        ]);
                  },
                },
                {
                  key: "rotateAroundCenter",
                  value: function (t) {
                    var e = {};
                    return (
                      t && "function" == typeof t.getBBox && (e = t.getBBox()),
                      { x: e.x + e.width / 2, y: e.y + e.height / 2 }
                    );
                  },
                },
                {
                  key: "getTextRects",
                  value: function (t, e, n, i) {
                    var r =
                        !(arguments.length > 4 && void 0 !== arguments[4]) ||
                        arguments[4],
                      o = this.w,
                      a = this.drawText({
                        x: -200,
                        y: -200,
                        text: t,
                        textAnchor: "start",
                        fontSize: e,
                        fontFamily: n,
                        foreColor: "#fff",
                        opacity: 0,
                      });
                    i && a.attr("transform", i), o.globals.dom.Paper.add(a);
                    var s = a.bbox();
                    return (
                      r || (s = a.node.getBoundingClientRect()),
                      a.remove(),
                      { width: s.width, height: s.height }
                    );
                  },
                },
                {
                  key: "placeTextWithEllipsis",
                  value: function (t, e, n) {
                    if (
                      "function" == typeof t.getComputedTextLength &&
                      ((t.textContent = e),
                      e.length > 0 && t.getComputedTextLength() >= n / 1.1)
                    ) {
                      for (var i = e.length - 3; i > 0; i -= 3)
                        if (t.getSubStringLength(0, i) <= n / 1.1)
                          return void (t.textContent =
                            e.substring(0, i) + "...");
                      t.textContent = ".";
                    }
                  },
                },
              ],
              [
                {
                  key: "setAttrs",
                  value: function (t, e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && t.setAttribute(n, e[n]);
                  },
                },
              ]
            ),
            t
          );
        })(),
        z = (function () {
          function t(e) {
            a(this, t), (this.ctx = e), (this.w = e.w);
          }
          return (
            l(
              t,
              [
                {
                  key: "getStackedSeriesTotals",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      e = this.w,
                      n = [];
                    if (0 === e.globals.series.length) return n;
                    for (
                      var i = 0;
                      i <
                      e.globals.series[e.globals.maxValsInArrayIndex].length;
                      i++
                    ) {
                      for (var r = 0, o = 0; o < e.globals.series.length; o++)
                        void 0 !== e.globals.series[o][i] &&
                          -1 === t.indexOf(o) &&
                          (r += e.globals.series[o][i]);
                      n.push(r);
                    }
                    return n;
                  },
                },
                {
                  key: "getSeriesTotalByIndex",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return null === t
                      ? this.w.config.series.reduce(function (t, e) {
                          return t + e;
                        }, 0)
                      : this.w.globals.series[t].reduce(function (t, e) {
                          return t + e;
                        }, 0);
                  },
                },
                {
                  key: "getStackedSeriesTotalsByGroups",
                  value: function () {
                    var t = this,
                      e = this.w,
                      n = [];
                    return (
                      e.globals.seriesGroups.forEach(function (i) {
                        var r = [];
                        e.config.series.forEach(function (t, n) {
                          i.indexOf(e.globals.seriesNames[n]) > -1 && r.push(n);
                        });
                        var o = e.globals.series
                          .map(function (t, e) {
                            return -1 === r.indexOf(e) ? e : -1;
                          })
                          .filter(function (t) {
                            return -1 !== t;
                          });
                        n.push(t.getStackedSeriesTotals(o));
                      }),
                      n
                    );
                  },
                },
                {
                  key: "setSeriesYAxisMappings",
                  value: function () {
                    var t = this.w.globals,
                      e = this.w.config,
                      n = [],
                      i = [],
                      r = [],
                      o =
                        t.series.length > e.yaxis.length ||
                        e.yaxis.some(function (t) {
                          return Array.isArray(t.seriesName);
                        });
                    e.series.forEach(function (t, e) {
                      r.push(e), i.push(null);
                    }),
                      e.yaxis.forEach(function (t, e) {
                        n[e] = [];
                      });
                    var a = [];
                    e.yaxis.forEach(function (t, i) {
                      var s = !1;
                      if (t.seriesName) {
                        var l = [];
                        Array.isArray(t.seriesName)
                          ? (l = t.seriesName)
                          : l.push(t.seriesName),
                          l.forEach(function (t) {
                            e.series.forEach(function (e, a) {
                              if (e.name === t) {
                                var l = a;
                                i === a || o
                                  ? (!o || r.indexOf(a) > -1) &&
                                    n[i].push([i, a])
                                  : (n[a].push([a, i]), (l = i)),
                                  (s = !0),
                                  -1 !== (l = r.indexOf(l)) && r.splice(l, 1);
                              }
                            });
                          });
                      }
                      s || a.push(i);
                    }),
                      (n = n.map(function (t, e) {
                        var n = [];
                        return (
                          t.forEach(function (t) {
                            (i[t[1]] = t[0]), n.push(t[1]);
                          }),
                          n
                        );
                      }));
                    for (
                      var s = e.yaxis.length - 1, l = 0;
                      l < a.length && ((s = a[l]), (n[s] = []), r);
                      l++
                    ) {
                      var c = r[0];
                      r.shift(), n[s].push(c), (i[c] = s);
                    }
                    r.forEach(function (t) {
                      n[s].push(t), (i[t] = s);
                    }),
                      (t.seriesYAxisMap = n.map(function (t) {
                        return t;
                      })),
                      (t.seriesYAxisReverseMap = i.map(function (t) {
                        return t;
                      })),
                      t.seriesYAxisMap.forEach(function (t, n) {
                        t.forEach(function (t) {
                          e.series[t] &&
                            void 0 === e.series[t].group &&
                            (e.series[t].group = "apexcharts-axis-".concat(
                              n.toString()
                            ));
                        });
                      });
                  },
                },
                {
                  key: "isSeriesNull",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      0 ===
                      (null === t
                        ? this.w.config.series.filter(function (t) {
                            return null !== t;
                          })
                        : this.w.config.series[t].data.filter(function (t) {
                            return null !== t;
                          })
                      ).length
                    );
                  },
                },
                {
                  key: "seriesHaveSameValues",
                  value: function (t) {
                    return this.w.globals.series[t].every(function (t, e, n) {
                      return t === n[0];
                    });
                  },
                },
                {
                  key: "getCategoryLabels",
                  value: function (t) {
                    var e = this.w,
                      n = t.slice();
                    return (
                      e.config.xaxis.convertedCatToNumeric &&
                        (n = t.map(function (t, n) {
                          return e.config.xaxis.labels.formatter(
                            t - e.globals.minX + 1
                          );
                        })),
                      n
                    );
                  },
                },
                {
                  key: "getLargestSeries",
                  value: function () {
                    var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series
                      .map(function (t) {
                        return t.length;
                      })
                      .indexOf(
                        Math.max.apply(
                          Math,
                          t.globals.series.map(function (t) {
                            return t.length;
                          })
                        )
                      );
                  },
                },
                {
                  key: "getLargestMarkerSize",
                  value: function () {
                    var t = this.w,
                      e = 0;
                    return (
                      t.globals.markers.size.forEach(function (t) {
                        e = Math.max(e, t);
                      }),
                      t.config.markers.discrete &&
                        t.config.markers.discrete.length &&
                        t.config.markers.discrete.forEach(function (t) {
                          e = Math.max(e, t.size);
                        }),
                      e > 0 &&
                        (t.config.markers.hover.size > 0
                          ? (e = t.config.markers.hover.size)
                          : (e += t.config.markers.hover.sizeOffset)),
                      (t.globals.markers.largestSize = e),
                      e
                    );
                  },
                },
                {
                  key: "getSeriesTotals",
                  value: function () {
                    var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map(function (
                      t,
                      e
                    ) {
                      var n = 0;
                      if (Array.isArray(t))
                        for (var i = 0; i < t.length; i++) n += t[i];
                      else n += t;
                      return n;
                    });
                  },
                },
                {
                  key: "getSeriesTotalsXRange",
                  value: function (t, e) {
                    var n = this.w;
                    return n.globals.series.map(function (i, r) {
                      for (var o = 0, a = 0; a < i.length; a++)
                        n.globals.seriesX[r][a] > t &&
                          n.globals.seriesX[r][a] < e &&
                          (o += i[a]);
                      return o;
                    });
                  },
                },
                {
                  key: "getPercentSeries",
                  value: function () {
                    var t = this.w;
                    t.globals.seriesPercent = t.globals.series.map(function (
                      e,
                      n
                    ) {
                      var i = [];
                      if (Array.isArray(e))
                        for (var r = 0; r < e.length; r++) {
                          var o = t.globals.stackedSeriesTotals[r],
                            a = 0;
                          o && (a = (100 * e[r]) / o), i.push(a);
                        }
                      else {
                        var s =
                          (100 * e) /
                          t.globals.seriesTotals.reduce(function (t, e) {
                            return t + e;
                          }, 0);
                        i.push(s);
                      }
                      return i;
                    });
                  },
                },
                {
                  key: "getCalculatedRatios",
                  value: function () {
                    var t,
                      e,
                      n,
                      i = this,
                      r = this.w,
                      o = r.globals,
                      a = [],
                      s = 0,
                      l = [],
                      c = 0.1,
                      d = 0;
                    if (((o.yRange = []), o.isMultipleYAxis))
                      for (var u = 0; u < o.minYArr.length; u++)
                        o.yRange.push(Math.abs(o.minYArr[u] - o.maxYArr[u])),
                          l.push(0);
                    else o.yRange.push(Math.abs(o.minY - o.maxY));
                    (o.xRange = Math.abs(o.maxX - o.minX)),
                      (o.zRange = Math.abs(o.maxZ - o.minZ));
                    for (var p = 0; p < o.yRange.length; p++)
                      a.push(o.yRange[p] / o.gridHeight);
                    if (
                      ((e = o.xRange / o.gridWidth),
                      (t = o.yRange / o.gridWidth),
                      (n = o.xRange / o.gridHeight),
                      (s = (o.zRange / o.gridHeight) * 16) || (s = 1),
                      o.minY !== Number.MIN_VALUE &&
                        0 !== Math.abs(o.minY) &&
                        (o.hasNegs = !0),
                      r.globals.seriesYAxisReverseMap.length > 0)
                    ) {
                      var h = function (t, e) {
                        var n =
                            r.config.yaxis[r.globals.seriesYAxisReverseMap[e]],
                          o = t < 0 ? -1 : 1;
                        return (
                          (t = Math.abs(t)),
                          n.logarithmic && (t = i.getBaseLog(n.logBase, t)),
                          (-o * t) / a[e]
                        );
                      };
                      if (o.isMultipleYAxis) {
                        l = [];
                        for (var f = 0; f < a.length; f++)
                          l.push(h(o.minYArr[f], f));
                      } else
                        (l = []).push(h(o.minY, 0)),
                          o.minY !== Number.MIN_VALUE &&
                            0 !== Math.abs(o.minY) &&
                            ((c = -o.minY / t), (d = o.minX / e));
                    } else (l = []).push(0), (c = 0), (d = 0);
                    return {
                      yRatio: a,
                      invertedYRatio: t,
                      zRatio: s,
                      xRatio: e,
                      invertedXRatio: n,
                      baseLineInvertedY: c,
                      baseLineY: l,
                      baseLineX: d,
                    };
                  },
                },
                {
                  key: "getLogSeries",
                  value: function (t) {
                    var e = this,
                      n = this.w;
                    return (
                      (n.globals.seriesLog = t.map(function (t, i) {
                        var r = n.globals.seriesYAxisReverseMap[i];
                        return n.config.yaxis[r] &&
                          n.config.yaxis[r].logarithmic
                          ? t.map(function (t) {
                              return null === t
                                ? null
                                : e.getLogVal(n.config.yaxis[r].logBase, t, i);
                            })
                          : t;
                      })),
                      n.globals.invalidLogScale ? t : n.globals.seriesLog
                    );
                  },
                },
                {
                  key: "getBaseLog",
                  value: function (t, e) {
                    return Math.log(e) / Math.log(t);
                  },
                },
                {
                  key: "getLogVal",
                  value: function (t, e, n) {
                    if (e <= 0) return 0;
                    var i = this.w,
                      r =
                        0 === i.globals.minYArr[n]
                          ? -1
                          : this.getBaseLog(t, i.globals.minYArr[n]),
                      o =
                        (0 === i.globals.maxYArr[n]
                          ? 0
                          : this.getBaseLog(t, i.globals.maxYArr[n])) - r;
                    return e < 1 ? e / o : (this.getBaseLog(t, e) - r) / o;
           