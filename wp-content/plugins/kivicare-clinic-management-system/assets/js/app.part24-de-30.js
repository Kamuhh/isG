// app.part24-de-30.js
                             t._v(" "),
                              t._l(t.googleEventList, function (n, i) {
                                return e(
                                  "div",
                                  { key: i },
                                  [
                                    e(
                                      "b-collapse",
                                      {
                                        attrs: {
                                          id: "accordion",
                                          visible: !0,
                                          accordion: "my-accordion",
                                          role: "tabpanel",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-body",
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .google_event
                                                      .google_event_title
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
                                                  value: n.post_title,
                                                  expression: "item.post_title",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "example-color-input",
                                              },
                                              domProps: { value: n.post_title },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      n,
                                                      "post_title",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .google_event
                                                      .google_event_desc
                                                  ) + " "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e("vue-editor", {
                                              attrs: {
                                                editorToolbar: t.customToolbar,
                                              },
                                              model: {
                                                value: n.post_content,
                                                callback: function (e) {
                                                  t.$set(n, "post_content", e);
                                                },
                                                expression: "item.post_content",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                              t._v(" "),
                              e(
                                "b-row",
                                { staticClass: "mt-2" },
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-end",
                                        },
                                        [
                                          t.loading
                                            ? e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
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
                                                      "\n            "
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary rtl-ml-2",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click:
                                                      t.saveGoogleEventTemplate,
                                                  },
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-save mr-1",
                                                  }),
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .save
                                                      ) +
                                                      "\n            "
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
                            2
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
        "2a6e6c1c",
        null
      ).exports,
      Pe = n(379).a,
      Re =
        (n(710),
        Object(h.a)(
          Pe,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-card",
                  {
                    staticClass: "p-0 shadow",
                    attrs: { "header-tag": "header", "footer-tag": "footer" },
                    scopedSlots: t._u([
                      {
                        key: "header",
                        fn: function () {
                          return [
                            e(
                              "b-row",
                              [
                                e(
                                  "b-col",
                                  { attrs: { sm: "8", md: "8", lg: "8" } },
                                  [
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        t._s(
                                          t.formTranslation.settings
                                            .permission_setting
                                        ) + " "
                                      ),
                                      "off" == t.request_status
                                        ? e(
                                            "a",
                                            {
                                              attrs: {
                                                href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#patient-setting",
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fa fa-question-circle",
                                              }),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
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
                    t._v(" "),
                    t.formLoader
                      ? e(
                          "div",
                          { staticClass: "page-loader-section" },
                          [e("loader-component-2")],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    e(
                      "b-overlay",
                      {
                        attrs: {
                          show: 1 != t.userData.addOns.kiviPro,
                          variant: "white",
                          opacity: t.overlayOpacity,
                        },
                        scopedSlots: t._u([
                          {
                            key: "overlay",
                            fn: function () {
                              return [
                                e("overlay-message", {
                                  attrs: { addon_type: "pro" },
                                }),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        t._v(" "),
                        t.userData.addOns.kiviPro
                          ? e(
                              "div",
                              {
                                staticClass:
                                  "iq-role-permission-accordion accordion",
                                attrs: { role: "tablist" },
                              },
                              t._l(t.allPermissionListData, function (n, i) {
                                return e(
                                  "b-card",
                                  {
                                    key: i,
                                    staticClass: "mb-1",
                                    attrs: { "no-body": "" },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      {
                                        staticClass: "p-1",
                                        attrs: {
                                          "header-tag": "header",
                                          role: "tab",
                                        },
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "p-2 setting-accorditon",
                                          },
                                          [
                                            e(
                                              "b-button",
                                              {
                                                directives: [
                                                  {
                                                    name: "b-toggle",
                                                    rawName: "v-b-toggle",
                                                    value: "accordion-" + i,
                                                    expression:
                                                      "'accordion-'+key",
                                                  },
                                                ],
                                                staticClass: "pl-0",
                                                attrs: {
                                                  type: "button",
                                                  block: "",
                                                  variant:
                                                    "link shadow-none text-left",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n              " +
                                                    t._s(
                                                      t.role_list[i] + " role"
                                                    ) +
                                                    "\n            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        attrs: {
                                          id: "accordion-" + i,
                                          visible: "",
                                          accordion: "my-accordion",
                                          role: "tabpanel",
                                        },
                                      },
                                      [
                                        t._l(n.capabilities, function (r, o) {
                                          return t.kivicareCheckModule(i, o)
                                            ? e(
                                                "b-card",
                                                {
                                                  key: o,
                                                  staticClass:
                                                    "mt-0 mb-0 ml-3 accordion",
                                                  attrs: { "no-body": "" },
                                                },
                                                [
                                                  e(
                                                    "b-card-header",
                                                    {
                                                      staticClass: "p-1",
                                                      attrs: {
                                                        "header-tag": "header",
                                                        role: "tab",
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex align-items-center setting-accorditon",
                                                        },
                                                        [
                                                          e(
                                                            "b-button",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "b-toggle",
                                                                  rawName:
                                                                    "v-b-toggle",
                                                                  value:
                                                                    "accordion-module-" +
                                                                    o,
                                                                  expression:
                                                                    "'accordion-module-'+key2",
                                                                },
                                                              ],
                                                              attrs: {
                                                                type: "button",
                                                                block: "",
                                                                variant:
                                                                  "link shadow-none text-left",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                  " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common[o]
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
                                                  t._v(" "),
                                                  e(
                                                    "b-collapse",
                                                    {
                                                      attrs: {
                                                        id:
                                                          "accordion-module-" +
                                                          o,
                                                        visible: "",
                                                        accordion:
                                                          "my-accordion-2",
                                                        role: "tabpanel",
                                                      },
                                                    },
                                                    [
                                                      e("b-card-body", [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "row m-3",
                                                          },
                                                          t._l(
                                                            r,
                                                            function (r, a) {
                                                              return t.kivicareCapability(
                                                                i,
                                                                a
                                                              )
                                                                ? e(
                                                                    "div",
                                                                    {
                                                                      key: a,
                                                                      staticClass:
                                                                        "col-md-3 col-12",
                                                                    },
                                                                    [
                                                                      e(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "form-group ml-4",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "b-form-checkbox",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  size: "md",
                                                                                  id:
                                                                                    "checkbox-" +
                                                                                    i +
                                                                                    a,
                                                                                  name:
                                                                                    "checkbox-" +
                                                                                    i +
                                                                                    a,
                                                                                  switch:
                                                                                    "",
                                                                                  value:
                                                                                    !0,
                                                                                  "unchecked-value":
                                                                                    !1,
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    n
                                                                                      .capabilities[
                                                                                      o
                                                                                    ][
                                                                                      a
                                                                                    ],
                                                                                  callback:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      t.$set(
                                                                                        n
                                                                                          .capabilities[
                                                                                          o
                                                                                        ],
                                                                                        a,
                                                                                        e
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "index.capabilities[key2][capKey]",
                                                                                },
                                                                            },
                                                                            [
                                                                              e(
                                                                                "b",
                                                                                {
                                                                                  staticClass:
                                                                                    "form-control-label",
                                                                                },
                                                                                [
                                                                                  t._v(
                                                                                    " " +
                                                                                      t._s(
                                                                                        a
                                                                                          .split(
                                                                                            "_"
                                                                                          )
                                                                                          .map(
                                                                                            function (
                                                                                              e
                                                                                            ) {
                                                                                              return (
                                                                                                e
                                                                                                  .toLowerCase()
                                                                                                  .includes(
                                                                                                    t.plugin_prefix
                                                                                                      .replace(
                                                                                                        "_",
                                                                                                        ""
                                                                                                      )
                                                                                                      .toLowerCase()
                                                                                                  ) &&
                                                                                                  (e =
                                                                                                    ""),
                                                                                                (e =
                                                                                                  e.split(
                                                                                                    ""
                                                                                                  ))[0] &&
                                                                                                  (e[0] =
                                                                                                    e[0].toUpperCase()),
                                                                                                e.join(
                                                                                                  ""
                                                                                                )
                                                                                              );
                                                                                            }
                                                                                          )
                                                                                          .join(
                                                                                            " "
                                                                                          )
                                                                                      ) +
                                                                                      " "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ]
                                                                  )
                                                                : t._e();
                                                            }
                                                          ),
                                                          0
                                                        ),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : t._e();
                                        }),
                                        t._v(" "),
                                        e("b-card-body", [
                                          e("div", { staticClass: "row m-3" }, [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-12 d-flex justify-content-end align-items-center",
                                              },
                                              [
                                                e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-primary",
                                                    attrs: { id: i },
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleSubmit(
                                                          i
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.save_btn
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-toggle",
                                                        rawName: "v-b-toggle",
                                                        value: "accordion-" + i,
                                                        expression:
                                                          "'accordion-'+key",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "btn btn-outline-primary",
                                                    attrs: {
                                                      disabled: t.isSubmited,
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.cancel
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                      ],
                                      2
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            )
                          : e("div", [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "iq-role-permission-accordion accordion",
                                  attrs: { role: "tablist" },
                                },
                                t._l(t.role_list, function (n, i) {
                                  return e(
                                    "b-card",
                                    {
                                      key: i,
                                      staticClass: "mb-1",
                                      attrs: { "no-body": "" },
                                    },
                                    [
                                      e(
                                        "b-card-header",
                                        {
                                          staticClass: "p-1",
                                          attrs: {
                                            "header-tag": "header",
                                            role: "tab",
                                          },
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "p-2 setting-accorditon",
                                            },
                                            [
                                              e(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName: "v-b-toggle",
                                                      value: "accordion-" + i,
                                                      expression:
                                                        "'accordion-'+key",
                                                    },
                                                  ],
                                                  staticClass: "pl-0",
                                                  attrs: {
                                                    type: "button",
                                                    block: "",
                                                    variant:
                                                      "link shadow-none text-left",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.role_list[i] + " role"
                                                      ) +
                                                      "\n              "
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
                                  );
                                }),
                                1
                              ),
                            ]),
                      ]
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
          "78409e14",
          null
        ).exports),
      Ie = n(380).a,
      We = Object(h.a)(
        Ie,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e(
                "b-row",
                [
                  e(
                    "b-col",
                    { attrs: { sm: "12", md: "12", lg: "12" } },
                    [
                      e(
                        "b-overlay",
                        {
                          attrs: {
                            show: 1 != t.userData.addOns.kiviPro,
                            variant: "white",
                            opacity: t.overlayOpacity,
                          },
                          scopedSlots: t._u([
                            {
                              key: "overlay",
                              fn: function () {
                                return [
                                  e("overlay-message", {
                                    attrs: { addon_type: "pro" },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                          ]),
                        },
                        [
                          t._v(" "),
                          e(
                            "form",
                            { attrs: { id: "doctorDataForm", novalidate: !0 } },
                            [
                              e(
                                "b-card",
                                {
                                  staticClass: "p-0 shadow",
                                  attrs: {
                                    "header-tag": "header",
                                    "footer-tag": "footer",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "header",
                                      fn: function () {
                                        return [
                                          e(
                                            "b-row",
                                            [
                                              e(
                                                "b-col",
                                                {
                                                  attrs: {
                                                    sm: "8",
                                                    md: "8",
                                                    lg: "8",
                                                  },
                                                },
                                                [
                                                  e(
                                                    "h2",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .dashboard_sidebar_setting
                                                        ) + " "
                                                      ),
                                                      "off" == t.request_status
                                                        ? e(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#dashboard-sidebar",
                                                                target:
                                                                  "_blank",
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                staticClass:
                                                                  "fa fa-question-circle",
                                                              }),
                                                            ]
                                                          )
                                                        : t._e(),
                                                    ]
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
                                  t._v(" "),
                                  t.isLoading
                                    ? e(
                                        "div",
                                        { staticClass: "page-loader-section" },
                                        [e("loader-component-2")],
                                        1
                                      )
                                    : e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "12",
                                                lg: "12",
                                              },
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass: "accordion",
                                                  attrs: { role: "tablist" },
                                                },
                                                t._l(
                                                  t.allUserList,
                                                  function (n, i) {
                                                    return e(
                                                      "b-card",
                                                      {
                                                        key: i,
                                                        staticClass: "mb-1",
                                                        attrs: {
                                                          "no-body": "",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "b-card-header",
                                                          {
                                                            staticClass: "p-1",
                                                            attrs: {
                                                              "header-tag":
                                                                "header",
                                                              role: "tab",
                                                            },
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex align-items-center p-2 setting-accorditon",
                                                              },
                                                              [
                                                                e(
                                                                  "b-button",
                                                                  {
                                                                    attrs: {
                                                                      type: "button",
                                                                      block: "",
                                                                      variant:
                                                                        "link shadow-none text-left",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.mainAccordian(
                                                                            n.id
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                        " +
                                                                        t._s(
                                                                          n.label
                                                                        ) +
                                                                        "\n                      "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "b-collapse",
                                                          {
                                                            attrs: {
                                                              id:
                                                                "head_accrodian_" +
                                                                n.id,
                                                              visible:
                                                                t.selectedMainAccrodionId ===
                                                                n.id,
                                                              accordion:
                                                                "my-accordion1",
                                                              role: "tabpanel",
                                                            },
                                                          },
                                                          [
                                                            e(
                                                              "table",
                                                              {
                                                                staticClass:
                                                                  "table table-striped",
                                                              },
                                                              [
                                                                e(
                                                                  "thead",
                                                                  {
                                                                    staticClass:
                                                                      "thead-dark",
                                                                  },
                                                                  [
                                                                    e("tr", [
                                                                      e("th", {
                                                                        staticStyle:
                                                                          {
                                                                            width:
                                                                              "5%",
                                                                          },
                                                                        attrs: {
                                                                          scope:
                                                                            "col",
                                                                        },
                                                                      }),
                                                                      t._v(" "),
                                                                      e(
                                                                        "th",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              scope:
                                                                                "col",
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .label
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      t._v(" "),
                                                                      e(
                                                                        "th",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              scope:
                                                                                "col",
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .url
                                                                            ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      t._v(" "),
                                                                      e(
                                                                        "th",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              scope:
                                                                                "col",
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            "\n                          " +
                                                                              t._s(
                                                                                t
                                                                                  .formTranslation
                                                                                  .common
                                                                                  .icon
                                                                              ) +
                                                                              "\n                          "
                                                                          ),
                                                                          "off" ==
                                                                          t.request_status
                                                                            ? e(
                                                                                "a",
                                                                                {
                                                                                  attrs:
                                                                                    {
                                                                                      href: "https://fontawesome.com/v5/search",
                                                                                      target:
                                                                                        "_blank",
                                                                                    },
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "i",
                                                                                    {
                                                                                      staticClass:
                                                                                        "fa fa-question-circle",
                                                                                    }
                                                                                  ),
                                                                                ]
                                                                              )
                                                                            : t._e(),
                                                                        ]
                                                                      ),
                                                                      t._v(" "),
                                                                      e(
                                                                        "th",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              scope:
                                                                                "col",
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .doctor
                                                                                .dt_lbl_actions
                                                                            ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]),
                                                                  ]
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                  "draggable",
                                                                  {
                                                                    attrs: {
                                                                      tag: "tbody",
                                                                      options: {
                                                                        animation: 1e3,
                                                                        handle:
                                                                          ".my_handle:not(.exclude-this-item)",
                                                                      },
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        t
                                                                          .dashboardSidebarData[
                                                                          n.id
                                                                        ],
                                                                      callback:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          t.$set(
                                                                            t.dashboardSidebarData,
                                                                            n.id,
                                                                            e
                                                                          );
                                                                        },
                                                                      expression:
                                                                        "dashboardSidebarData[head.id]",
                                                                    },
                                                                  },
                                                                  t._l(
                                                                    t
                                                                      .dashboardSidebarData[
                                                                      n.id
                                                                    ],
                                                                    function (
                                                                      i,
                                                                      r
                                                                    ) {
                                                                      return e(
                                                                        "tr",
                                                                        {
                                                                          key: r,
                                                                          staticClass:
                                                                            "draggable my_handle",
                                                                          staticStyle:
                                                                            {
                                                                              float:
                                                                                "unset",
                                                                            },
                                                                        },
                                                                        [
                                                                          e(
                                                                            "td",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  width:
                                                                                    "5%",
                                                                                },
                                                                            },
                                                                            [
                                                                              e(
                                                                                "i",
                                                                                {
                                                                                  staticClass:
                                                                                    "my_handle fa fa-align-justify",
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "td",
                                                                            [
                                                                              e(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          i.label,
                                                                                        expression:
                                                                                          "itemValue.label",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control-sm form-control",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "text",
                                                                                      disabled:
                                                                                        !i.custom,
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        i.label,
                                                                                    },
                                                                                  on: {
                                                                                    input:
                                                                                      function (
                                                                                        e
                                                                                      ) {
                                                                                        e
                                                                                          .target
                                                                                          .composing ||
                                                                                          t.$set(
                                                                                            i,
                                                                                            "label",
                                                                                            e
                                                                                              .target
                                                                                              .value
                                                                                          );
                                                                                      },
                                                                                  },
                                                                                }
                                                                              ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              e(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "d-none",
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "invalid-feedback",
                                                                                      attrs:
                                                                                        {
                                                                                          id:
                                                                                            "labelValid" +
                                                                                            n.id +
                                                                                            r,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                      t._v(
                                                                                        "\n                                " +
                                                                                          t._s(
                                                                                            t
                                                                                              .formTranslation
                                                                                              .common
                                                                                              .label +
                                                                                              " " +
                                                                                              t
                                                                                                .formTranslation
                                                                                                .common
                                                                                                .required
                                                                                          ) +
                                                                                          "\n                              "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "td",
                                                                            [
                                                                              "href" ===
                                                                              i.type
                                                                                ? e(
                                                                                    "input",
                                                                                    {
                                                                                      directives:
                                                                                        [
                                                                                          {
                                                                                            name: "model",
                                                                                            rawName:
                                                                                              "v-model",
                                                                                            value:
                                                                                              i.link,
                                                                                            expression:
                                                                                              "itemValue.link",
                                                                                          },
                                                                                        ],
                                                                                      staticClass:
                                                                                        "form-control-sm form-control",
                                                                                      attrs:
                                                                                        {
                                                                                          type: "url",
                                                                                        },
                                                                                      domProps:
                                                                                        {
                                                                                          value:
                                                                                            i.link,
                                                                                        },
                                                                                      on: {
                                                                                        input:
                                                                                          function (
                                                                                            e
                                                                                          ) {
                                                                                            e
                                                                                              .target
                                                                                              .composing ||
                                                                                              t.$set(
                                                                                                i,
                                                                                                "link",
                                                                                                e
                                                                                                  .target
                                                                                                  .value
                                                                                              );
                                                                                          },
                                                                                      },
                                                                                    }
                                                                                  )
                                                                                : e(
                                                                                    "input",
                                                                                    {
                                                                                      staticClass:
                                                                                        "form-control-sm form-control",
                                                                                      attrs:
                                                                                        {
                                                                                          type: "url",
                                                                                          disabled:
                                                                                            "",
                                                                                        },
                                                                                      domProps:
                                                                                        {
                                                                                          value:
                                                                                            t.routeUrl(
                                                                                              i.link
                                                                                            ),
                                                                                        },
                                                                                    }
                                                                                  ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              e(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "d-none",
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "invalid-feedback",
                                                                                      attrs:
                                                                                        {
                                                                                          id:
                                                                                            "urlValid" +
                                                                                            n.id +
                                                                                            r,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                      t._v(
                                                                                        "\n                                " +
                                                                                          t._s(
                                                                                            t
                                                                                              .formTranslation
                                                                                              .common
                                                                                              .url +
                                                                                              " " +
                                                                                              t
                                                                                                .formTranslation
                                                                                                .common
                                                                                                .required
                                                                                          ) +
                                                                                          "\n                              "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "td",
                                                                            [
                                                                              e(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          i.iconClass,
                                                                                        expression:
                                                                                          "itemValue.iconClass",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control form-control-sm",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "text",
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        i.iconClass,
                                                                                    },
                                                                                  on: {
                                                                                    input:
                                                                                      function (
                                                                                        e
                                                                                      ) {
                                                                                        e
                                                                                          .target
                                                                                          .composing ||
                                                                                          t.$set(
                                                                                            i,
                                                                                            "iconClass",
                                                                                            e
                                                                                              .target
                                                                                              .value
                                                                                          );
                                                                                      },
                                                                                  },
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "td",
                                                                            [
                                                                              i.custom
                                                                                ? e(
                                                                                    "button",
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
                                                                                      staticClass:
                                                                                        "btn btn-danger btn-sm",
                                                                                      attrs:
                                                                                        {
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
                                                                                            return (
                                                                                              e.preventDefault(),
                                                                                              t.deleteDashboardSidebarData(
                                                                                                n.id,
                                                                                                r
                                                                                              )
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
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      );
                                                                    }
                                                                  ),
                                                                  0
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row m-2",
                                                              },
                                                              [
                                                                e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "col-12 d-flex justify-content-end align-items-center",
                                                                  },
                                                                  [
                                                                    e(
                                                                      "button",
                                                                      {
                                                                        staticClass:
                                                                          "btn btn-primary",
                                                                        attrs: {
                                                                          type: "button",
                                                                        },
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              return t.addNewDashboardSidebarData(
                                                                                n.id
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        e("i", {
                                                                          staticClass:
                                                                            "fa fa-plus mr-1",
                                                                        }),
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              "Add New"
                                                                            ) +
                                                                            "\n                        "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "button",
                                                                      {
                                                                        staticClass:
                                                                          "btn btn-primary",
                                                                        attrs: {
                                                                          id:
                                                                            "sidebarButton" +
                                                                            n.id,
                                                                          type: "button",
                                                                        },
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              return t.saveDashboardSidebarData(
                                                                                n.id
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        e("i", {
                                                                          staticClass:
                                                                            "fa fa-save mr-1",
                                                                        }),
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .save
                                                                            ) +
                                                                            "\n                        "
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
                                                    );
                                                  }
                                                ),
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
          );
        },
        [],
        !1,
        null,
        "40564aa5",
        null
      ).exports,
      Ne = n(381).a,
      Be = Object(h.a)(
        Ne,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e(
                "b-col",
                { attrs: { sm: "12", md: "12", lg: "12" } },
                [
                  e(
                    "b-card",
                    {
                      staticClass: "p-0 shadow",
                      attrs: { "header-tag": "header", "footer-tag": "footer" },
                      scopedSlots: t._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "8", lg: "8" } },
                                    [
                                      e("h3", { staticClass: "mb-0" }, [
                                        t._v(t._s(t.cardTitle)),
                                      ]),
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
                      t._v(" "),
                      e(
                        "b-row",
                        [
                          e(
                            "b-col",
                            [
                              e(
                                "b-row",
                                { staticClass: "mt-2" },
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "6", lg: "6" } },
                                    [
                                      e(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            id: "current_password_label",
                                            label:
                                              this.formTranslation.widgets
                                                .current_pwd,
                                            "label-for": "current_password",
                                          },
                                        },
                                        [
                                          e("b-form-input", {
                                            attrs: {
                                              id: "current_password",
                                              type: t.currentPasswordType,
                                              placeholder:
                                                t.formTranslation
                                                  .change_password.plh_old_pwd,
                                            },
                                            model: {
                                              value:
                                                t.passwordChangeRequest
                                                  .currentPassword,
                                              callback: function (e) {
                                                t.$set(
                                                  t.passwordChangeRequest,
                                                  "currentPassword",
                                                  e
                                                );
                                              },
                                              expression:
                                                "passwordChangeRequest.currentPassword",
                                            },
                                          }),
                                          t._v(" "),
                                          e("span", {
                                            staticClass:
                                              "field-icon toggle-password",
                                            class: t.currentPasswordIcon,
                                            on: {
                                              click: function (e) {
                                                return t.viewPassword(
                                                  "current_password"
                                                );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.passwordChangeRequest
                                            .currentPassword.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.widgets
                                                        .current_pwd_required
                                                    ) +
                                                      "\n                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "6", lg: "6" } },
                                    [
                                      e(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            id: "new_password_label",
                                            label:
                                              this.formTranslation
                                                .change_password
                                                .plh_new_password,
                                            "label-for": "new_password",
                                          },
                                        },
                                        [
                                          e("b-form-input", {
                                            attrs: {
                                              id: "new_password",
                                              type: t.newPasswordType,
                                              placeholder:
                                                t.formTranslation
                                                  .change_password.plh_new_pwd,
                                            },
                                            model: {
                                              value:
                                                t.passwordChangeRequest
                                                  .newPassword,
                                              callback: function (e) {
                                                t.$set(
                                                  t.passwordChangeRequest,
                                                  "newPassword",
                                                  e
                                                );
                                              },
                                              expression:
                                                "passwordChangeRequest.newPassword",
                                            },
                                          }),
                                          t._v(" "),
                                          e("span", {
                                            staticClass:
                                              "field-icon toggle-password",
                                            class: t.newPasswordIcon,
                                            on: {
                                              click: function (e) {
                                                return t.viewPassword(
                                                  "new_password"
                                                );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.passwordChangeRequest
                                            .newPassword.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.widgets
                                                        .new_pwd_required
                                                    ) +
                                                      "\n                                "
                                                  ),
                                                ]
                                              )
                                            : t.submitted &&
                                              !t.$v.passwordChangeRequest
                                                .newPassword.minLength
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .change_password
                                                        .password_validation
                                                    ) +
                                                      "\n                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "6", lg: "6" } },
                                    [
                                      e(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            id: "confirm_password_label",
                                            label:
                                              this.formTranslation
                                                .change_password
                                                .plh_confirm_password,
                                            "label-for": "confirm_password",
                                          },
                                        },
                                        [
                                          e("b-form-input", {
                                            attrs: {
                                              id: "confirm_password",
                                              type: t.confirmPasswordType,
                                              placeholder:
                                                t.formTranslation
                                                  .change_password
                                                  .plh_confirm_pwd,
                                            },
                                            model: {
                                              value:
                                                t.passwordChangeRequest
                                                  .confirmPassword,
                                              callback: function (e) {
                                                t.$set(
                                                  t.passwordChangeRequest,
                                                  "confirmPassword",
                                                  e
                                                );
                                              },
                                              expression:
                                                "passwordChangeRequest.confirmPassword",
                                            },
                                          }),
                                          t._v(" "),
                                          e("span", {
                                            staticClass:
                                              "field-icon toggle-password",
                                            class: t.confirmPasswordIcon,
                                            on: {
                                              click: function (e) {
                                                return t.viewPassword(
                                                  "confirm_password"
                                                );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.passwordChangeRequest
                                            .confirmPassword.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.widgets
                                                        .confirm_pwd_required
                                                    ) +
                                                      "\n                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      !0 !== this.submitted ||
                                      this.isConfimMatched
                                        ? t._e()
                                        : e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .pwd_not_match
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
                              e("div", { staticClass: "card-footer" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12 p-0" }, [
                                    e("div", { staticClass: "float-right" }, [
                                      e(
                                        "button",
                                        {
                                          staticClass:
                                            "float-right btn btn-primary",
                                          attrs: { type: "button" },
                                          on: { click: t.saveChangePassword },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common
                                                  .change_password
                                              )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
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
    function Fe(t) {
      return (Fe =
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
    function $e(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != Fe(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != Fe(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Fe(e) ? e : e + "";
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
    var He = n(382).a,
      Ye =
        (n(712),
        Object(h.a)(
          He,
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
                    e(
                      "form",
                      {
                        attrs: { id: "clinicUserDataForm", novalidate: !0 },
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
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "first_name" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.fname) +
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
                                          value: t.clinicUserData.first_name,
                                          expression:
                                            "clinicUserData.first_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.clinicUserData.first_name.$error,
                                      },
                                      attrs: {
                                        id: "first_name",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_fname,
                                        required: "required",
                                        name: "first_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.clinicUserData.first_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.clinicUserData,
                                              "first_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.clinicUserData.first_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .name_required
                                              ) + "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass:
                                          "col-md-4 form-control-label",
                                        attrs: { for: "last_name" },
                                      },
                                      [
                                        t._v(
                                          "\n                  " +
                                            t._s(
                                              t.formTranslation.common.lname
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
                                          value: t.clinicUserData.last_name,
                                          expression:
                                            "clinicUserData.last_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.clinicUserData.last_name.$error,
                                      },
                                      attrs: {
                                        id: "last_name",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_lame,
                                        required: "required",
                                        name: "last_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.clinicUserData.last_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.clinicUserData,
                                              "last_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.clinicUserData.last_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_required
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "email" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.email) +
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
                                          value: t.clinicUserData.user_email,
                                          expression:
                                            "clinicUserData.user_email",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.clinicUserData.user_email.$error,
                                      },
                                      attrs: {
                                        id: "email",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_email,
                                        required: "required",
                                        name: "user_email",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.clinicUserData.user_email,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.clinicUserData,
                                              "user_email",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.clinicUserData.user_email.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .email_required
                                              ) + "\n                "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.clinicUserData.user_email
                                          .emailValidate
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .invalid_email
                                              ) + "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row align-items-center" },
                                [
                                  e(
                                    "div",
                                    { staticClass: "col-md-8 col-sm-12" },
                                    [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "mobile_number",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .contact_no
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
                                              e("VuePhoneNumberInput", {
                                                attrs: {
                                                  id: "mobile_number",
                                                  "default-country-code":
                                                    t.clinicUserData
                                                      .country_code,
                                                  clearable: "",
                                                  "no-example": "",
                                                },
                                                on: {
                                                  update:
                                                    t.contactUpdateHandaler,
                                                },
                                                model: {
                                                  value:
                                                    t.clinicUserData
                                                      .mobile_number,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.clinicUserData,
                                                      "mobile_number",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "clinicUserData.mobile_number",
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicUserData.mobile_number
                                                .required
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .contact_num_required
                                                        ) +
                                                          "\n                    "
                                                      ),
                                                    ]
                                                  )
                                                : !t.submitted ||
                                                  (t.$v.clinicUserData
                                                    .mobile_number.minLength &&
                                                    t.$v.clinicUserData
                                                      .mobile_number.maxLength)
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .contact_validation_1
                                                        ) +
                                                          "\n                    "
                                                      ),
                                                    ]
                                                  ),
                                            ],
                                            1
                                          ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "dob" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .dob
                                                    ) +
                                                      ". \n                      "
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.clinicUserData.dob,
                                                    expression:
                                                      "clinicUserData.dob",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "date",
                                                  name: "doc_birthdate",
                                                  id: "doc_birthdate",
                                                  max: new Date()
                                                    .toISOString()
                                                    .slice(0, 10),
                                                },
                                                domProps: {
                                                  value: t.clinicUserData.dob,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicUserData,
                                                        "dob",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "gender" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .gender
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
                                              e("div", [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "custom-control custom-radio custom-control-inline",
                                                  },
                                                  [
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.clinicUserData
                                                              .gender,
                                                          expression:
                                                            "clinicUserData.gender",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "radio",
                                                        id: "male",
                                                        name: "gender",
                                                        value: "male",
                                                      },
                                                      domProps: $e(
                                                        { checked: !0 },
                                                        "checked",
                                                        t._q(
                                                          t.clinicUserData
                                                            .gender,
                                                          "male"
                                                        )
                                                      ),
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.clinicUserData,
                                                            "gender",
                                                            "male"
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
                                                        attrs: { for: "male" },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.male
                                                          )
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
                                                      "custom-control custom-radio custom-control-inline",
                                                  },
                                                  [
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.clinicUserData
                                                              .gender,
                                                          expression:
                                                            "clinicUserData.gender",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "radio",
                                                        id: "female",
                                                        name: "gender",
                                                        value: "female",
                                                      },
                                                      domProps: $e(
                                                        {
                                                          checked:
                                                            "female" ==
                                                            t.clinicUserData
                                                              .gender,
                                                        },
                                                        "checked",
                                                        t._q(
                                                          t.clinicUserData
                                                            .gender,
                                                          "female"
                                                        )
                                                      ),
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.clinicUserData,
                                                            "gender",
                                                            "female"
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
                                                          for: "female",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.female
                                                          )
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
                                                      "custom-control custom-radio custom-control-inline",
                                                  },
                                                  [
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.clinicUserData
                                                              .gender,
                                                          expression:
                                                            "clinicUserData.gender",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "custom-control-input",
                                                      attrs: {
                                                        type: "radio",
                                                        id: "other",
                                                        name: "gender",
                                                        value: "other",
                                                      },
                                                      domProps: $e(
                                                        {
                                                          checked:
                                                            "other" ==
                                                            t.clinicUserData
                                                              .gender,
                                                        },
                                                        "checked",
                                                        t._q(
                                                          t.clinicUserData
                                                            .gender,
                                                          "other"
                                                        )
                                                      ),
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.clinicUserData,
                                                            "gender",
                                                            "other"
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
                                                        attrs: { for: "other" },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.other
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                t.submitted &&
                                                !t.$v.clinicUserData.gender
                                                  .required
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                        " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common
                                                                .gender_required
                                                            ) +
                                                            "\n                      "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-6" }),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "col-md-4 col-sm-12" },
                                    [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "kivicare-avatar-upload",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "kivicare-avatar-edit",
                                              },
                                              [
                                                e("input", {
                                                  ref: "file",
                                                  staticClass: "p-2",
                                                  staticStyle: {
                                                    color: "transparent",
                                                  },
                                                  attrs: {
                                                    name: "profile_image",
                                                    id: "file",
                                                    type: "file",
                                                  },
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
                                                        rawName:
                                                          "v-b-tooltip.hover",
                                                        modifiers: {
                                                          hover: !0,
                                                        },
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
                                    ]
                                  ),
                                ]
                              ),
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
                                  void 0 !== t.currentStep.nextStep &&
                                  "" !== t.currentStep.nextStep
                                    ? e("button", {
                                        staticClass:
                                          "btn btn-primary float-right",
                                        attrs: { type: "submit" },
                                        domProps: {
                                          innerHTML: t._s(t.nextButtonText),
                                        },
                                      })
                                    : t._e(),
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
                    t.popupFormOpen
                      ? e(
                          "ModalPopup",
                          {
                            attrs: {
                              modalId: "demo-user-create-modal",
                              modalSize: "lg",
                              openModal: t.popupFormOpen,
                              modalTitle: t.formTranslation.common.demo_user,
                            },
                            on: {
                              closeModal: function (e) {
                                t.popupFormOpen = !1;
                              },
                            },
                          },
                          [
                            e("div", { staticClass: "row" }, [
                              e(
                                "div",
                                { staticClass: "col-12" },
                                [
                                  e("b-form-checkbox-group", {
                                    staticClass: "p-4",
                                    attrs: {
                                      id: "radio-slots",
                                      options: t.radioOptions,
                                      name: "radio-options-slots",
                                    },
                                    model: {
                                      value: t.selectedOptions,
                                      callback: function (e) {
                                        t.selectedOptions = e;
                                      },
                                      expression: "selectedOptions",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-12 p-2 pr-4" }, [
                                e(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary float-right",
                                    attrs: {
                                      type: "button",
                                      disabled: t.loading,
                                    },
                                    on: { click: t.confirmPopup },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.loading
                                            ? t.formTranslation.common.loading
                                            : "Finish"
                                        ) +
                                        "\n              "
                                    ),
                                    e("i", {
                                      class: t.loading
                                        ? "fa fa-sync fa-spin"
                                        : "fa fa-angle-double-right",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        )
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
          "dbecefd8",
          null
        ).exports),
      Ue = {
        name: "List",
        data: function () {
          return {
            appointmentList: [],
            appointmentRequest: {},
            paginate: { currentPage: 1, totalRows: 0, perPage: 20 },
            searchDoctorName: "",
            searchPatientName: "",
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            (this.appointmentRequest = this.defaultAppointmentRequest()),
              this.getAllAppointment(),
              (this.appointmentList = this.defaultAppointmentList());
          },
          defaultAppointmentRequest: function () {
            return { searchKey: "", searchValue: "", offset: 0, limit: 20 };
          },
          getAllAppointment: function () {
            var t = this;
            Object(s.b)("all-appointment", this.appointmentRequest)
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? ((t.appointmentList.data = e.data.data),
                    (t.paginate.totalRows = e.data.total_rows))
                  : ((t.appointmentList.data = []), (t.paginate.totalRows = 0));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          defaultAppointmentList: function () {
            return {
              fields: [
                {
                  key: "index",
                  label: this.formTranslation.appointments.dt_lbl_sr,
                  sortable: !0,
                  sortDirection: "desc",
                },
                {
                  key: "appointment_start_date",
                  label: this.formTranslation.appointments.dt_lbl_data,
                },
                {
                  key: "appointment_start_time",
                  label: this.formTranslation.appointments.dt_lbl_time,
                },
                {
                  key: "patient_name",
                  label: this.formTranslation.appointments.dt_lbl_paient_name,
                },
                {
                  key: "doctor_name",
                  label: this.formTranslation.appointments.dt_lbl_doc_name,
                },
                {
                  key: "status",
                  label: this.formTranslation.appointments.dt_lbl_status,
                },
                {
                  key: "type_label",
                  label: this.formTranslation.appointments.dt_lbl_visi_type,
                },
                {
                  key: "description",
                  label: this.formTranslation.appointments.dt_lbl_description,
                },
                {
                  key: "actions",
                  label: this.formTranslation.appointments.dt_lbl_action,
                },
              ],
              data: [],
            };
          },
          getCurrentPage: function (t) {
            (this.appointmentRequest.offset =
              (t - 1) * this.appointmentRequest.limit),
              (this.appointmentRequest.limit = 20),
              this.getAllAppointment();
          },
        },
        watch: {
          searchPatientName: function (t) {
            (this.appointmentRequest.offset = 0),
              (this.appointmentRequest.limit = 20),
              (this.appointmentRequest.searchKey = "patients.display_name"),
              (this.appointmentRequest.searchValue = t),
              ("" !== t && null !== t) ||
                (this.appointmentRequest.searchKey = ""),
              this.getAllAppointment();
          },
          searchDoctorName: function (t) {
            (this.appointmentRequest.offset = 0),
              (this.appointmentRequest.limit = 20),
              (this.appointmentRequest.searchKey = "doctors.display_name"),
              (this.appointmentRequest.searchValue = t),
              ("" !== t && null !== t) ||
                (this.appointmentRequest.searchKey = ""),
              this.getAllAppointment();
          },
        },
      },
      Xe = Object(h.a)(
        Ue,
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
                  e(
                    "b-card",
                    {
                      staticClass: "p-0 shadow",
                      attrs: {
                        "body-class": "p-0",
                        "header-tag": "header",
                        "footer-tag": "footer",
                      },
                      scopedSlots: t._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "6", md: "4", lg: "10" } },
                                    [
                                      e("h3", { staticClass: "mb-0" }, [
                                        t._v(
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment_list
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "b-col",
                                    { attrs: { sm: "4", md: "2", lg: "2" } },
                                    [e("div", { staticClass: "float-right" })]
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
                      t._v(" "),
                      e(
                        "b-row",
                        [
                          e(
                            "b-col",
                            { attrs: { sm: "12", md: "12", lg: "12" } },
                            [
                              e(
                                "div",
                                { staticClass: "table-responsive mb-0" },
                                [
                                  e("b-table", {
                                    attrs: {
                                      "show-empty": "",
                                      small: "",
                                      stacked: "md",
                                      items: t.appointmentList.data,
                                      fields: t.appointmentList.fields,
                                      "head-variant": "light",
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "cell(index)",
                                        fn: function (e) {
                                          return [
                                            t._v(
                                              "\n                                " +
                                                t._s(e.index + 1) +
                                                "\n                            "
                                            ),
                                          ];
                                        },
                                      },
                                      {
                                        key: "head(doctor_name)",
                                        fn: function (n) {
                                          return [
                                            e("b-form-input", {
                                              class: "form-control-sm",
                                              attrs: {
                                                id: "doctor-search-name",
                                                type: "text",
                                                placeholder:
                                                  t.formTranslation.appointments
                                                    .plh_doc_name,
                                              },
                                              model: {
                                                value: t.searchDoctorName,
                                                callback: function (e) {
                                                  t.searchDoctorName = e;
                                                },
                                                expression: "searchDoctorName",
                                              },
                                            }),
                                          ];
                                        },
                                      },
                                      {
                                        key: "head(patient_name)",
                                        fn: function (n) {
                                          return [
                                            e("b-form-input", {
                                              class: "form-control-sm",
                                              attrs: {
                                                id: "patient-search-name",
                                                type: "text",
                                                placeholder:
                                                  t.formTranslation.appointments
                                                    .plh_patient_name,
                                              },
                                              model: {
                                                value: t.searchPatientName,
                                                callback: function (e) {
                                                  t.searchPatientName = e;
                                                },
                                                expression: "searchPatientName",
                                              },
                                            }),
                                          ];
                                        },
                                      },
                                      {
                                        key: "cell(description)",
                                        fn: function (e) {
                                          return [
                                            t._v(
                                              "\n                                " +
                                                t._s(
                                                  null != e.item.description &&
                                                    e.item.description.length >
                                                      20
                                                    ? e.item.description.substring(
                                                        0,
                                                        20
                                                      ) + ".."
                                                    : e.item.description
                                                ) +
                                                "\n                            "
                                            ),
                                          ];
                                        },
                                      },
                                      {
                                        key: "cell(status)",
                                        fn: function (n) {
                                          return [
                                            "1" === n.item.status
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
                                                          .appointments.booked
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            "0" === n.item.status
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
                                            "2" === n.item.status
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
                                                          .appointments.arrived
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            "4" === n.item.status
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
                                                          .appointments.check_in
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            "3" === n.item.status
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
                                                          .appointments.check_in
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ];
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "my-2" }),
                      t._v(" "),
                      e(
                        "b-row",
                        { staticClass: "justify-content-end" },
                        [
                          e(
                            "b-col",
                            { staticClass: "my-1 mr-2", attrs: { md: "6" } },
                            [
                              e("b-pagination", {
                                staticClass: "my-0 justify-content-end",
                                attrs: {
                                  "total-rows": t.paginate.totalRows,
                                  "per-page": t.paginate.perPage,
                                  size: "sm",
                                },
                                on: { input: t.getCurrentPage },
                                model: {
                                  value: t.paginate.currentPage,
                                  callback: function (e) {
                                    t.$set(t.paginate, "currentPage", e);
                                  },
                                  expression: "paginate.currentPage",
                                },
                              }),
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
        "3a051ee6",
        null
      ).exports,
      Ve = Object(h.a)(
        {
          data: function () {
            return {};
          },
        },
        function () {
          var t = this._self._c;
          return t("div", [t("doctor-session")], 1);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      Ge = n(383).a,
      Ke = Object(h.a)(
        Ge,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              [
                e("div", [
                  t.formLoader
                    ? e(
                        "div",
                        { staticClass: "page-loader-section" },
                        [e("loader-component-2")],
                        1
                      )
                    : e(
                        "div",
                        {
                          staticClass: "accordion",
                          attrs: { role: "tablist" },
                        },
                        [
                          "Yes" === t.zoomConfigData.enableCal
                            ? e(
                                "b-card",
                                {
                                  staticClass: "mb-1",
                                  attrs: { "no-body": "" },
                                },
                                [
                                  e(
                                    "b-card-header",
                                    {
                                      attrs: {
                                        "header-tag": "header",
                                        role: "tab",
                                      },
                                    },
                                    [
                                      e(
                                        "b-button",
                                        {
                                          directives: [
                                            {
                                              name: "b-toggle",
                                              rawName:
                                                "v-b-toggle.zoom-collapse",
                                              modifiers: {
                                                "zoom-collapse": !0,
                                              },
                                            },
                                          ],
                                          staticClass:
                                            "d-flex align-items-center justify-content-between",
                                          attrs: {
                                            block: "",
                                            variant: "white",
                                          },
                                        },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-primary" },
                                            [t._v(" Zoom Telemed OAuth ")]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "b-collapse",
                                    {
                                      attrs: {
                                        id: "zoom-collapse",
                                        visible:
                                          "Yes" === t.zoomConfigData.enableCal,
                                        accordion: "my-accordion",
                                        role: "tabpanel",
                                      },
                                    },
                                    [
                                      e("b-card-body", [
                                        e(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            e(
                                              "b-col",
                                              { attrs: { md: "12" } },
                                              [
                                                "off" ==
                                                t.userData
                                                  .is_enable_doctor_zoom_telemed
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-between",
                                                        staticStyle: {
                                                          margin: "30px 15px",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "p",
                                                          {
                                                            staticStyle: {
                                                              "font-weight":
                                                                "500",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .zoom_telemed
                                                                  .please_connect_zoom_telemed_service
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "b-button",
                                                          {
                                                            staticClass:
                                                              "float-right btn btn-sm btn-primary",
                                                            attrs: {
                                                              id:
                                                                "connect_doctor_zoom_btn_" +
                                                                t.userData.ID,
                                                              type: "button",
                                                              variant:
                                                                "primary",
                                                            },
                                                            on: {
                                                              click: t.connect,
                                                            },
                                                          },
                                                          [
                                                            e(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "d-flex align-items-center",
                                                              },
                                                              [
                                                                e("img", {
                                                                  staticClass:
                                                                    "mr-2 small",
                                                                  staticStyle: {
                                                                    height:
                                                                      "14px",
                                                                  },
                                                                  attrs: {
                                                                    alt: "img",
                                                                    src: t.zoomSignInImage,
                                                                  },
                                                                }),
                                                                t._v(
                                                                  "\n                          " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .pro_setting
                                                                        .connect_with_zoom
                                                                    ) +
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-between",
                                                        staticStyle: {
                                                          margin: "30px 15px",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "p",
                                                          {
                                                            staticStyle: {
                                                              "font-weight":
                                                                "500",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .connected_with_zoom
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "b-button",
                                                          {
                                                            staticClass:
                                                              "float-right btn btn-sm btn-primary",
                                                            attrs: {
                                                              type: "button",
                                                              variant:
                                                                "primary",
                                                            },
                                                            on: {
                                                              click:
                                                                t.closeConnectionZoomOauth,
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                      " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .disconnect
                                                                ) +
                                                                "\n                    "
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
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          "Yes" === t.zoomConfigData.enableServerToServerOauth
                            ? e(
                                "b-card",
                                {
                                  staticClass: "mb-1",
                                  attrs: { "no-body": "" },
                                },
                                [
                                  e(
                                    "b-card-header",
                                    {
                                      attrs: {
                                        "header-tag": "header",
                                        role: "tab",
                                      },
                                    },
                                    [
                                      e(
                                        "b-button",
                                        {
                                          directives: [
                                            {
                                              name: "b-toggle",
                                              rawName:
                                                "v-b-toggle.zoom-telemed-server-to-server-oauth",
                                              modifiers: {
                                                "zoom-telemed-server-to-server-oauth":
                                                  !0,
                                              },
                                            },
                                          ],
                                          staticClass:
                                            "d-flex align-items-center justify-content-between",
                                          attrs: {
                                            block: "",
                                            variant: "white",
                                          },
                                        },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-primary" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formTranslation
                                                      .zoom_telemed
                                                      .zoom_telemed_server_to_server_oauth
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "b-collapse",
                                    {
                                      attrs: {
                                        id: "zoom-telemed-server-to-server-oauth",
                                        visible:
                                          "Yes" ===
                                          t.zoomConfigData
                                            .enableServerToServerOauth,
                                        accordion: "my-accordion",
                                        role: "tabpanel",
                                      },
                                    },
                                    [
                                      e(
                                        "b-card-body",
                                        [
                                          e("b-row", [
                                            e(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                e(
                                                  "form",
                                                  {
                                                    attrs: {
                                                      id: "zoomServerToServerOauthform",
                                                      name: "zoomServerToServerOauthform",
                                                      novalidate: !0,
                                                      enctype:
                                                        "multipart/form-data",
                                                    },
                                                    on: {
                                                      submit: function (e) {
                                                        return (
                                                          e.preventDefault(),
                                                          t.handleServerToServerOauthConfigSubmit.apply(
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
                                                          {
                                                            staticClass:
                                                              "col-md-12",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "form-group",
                                                              },
                                                              [
                                                                e(
                                                                  "b-row",
                                                                  {
                                                                    staticClass:
                                                                      "mt-2 ml-4",
                                                                  },
                                                                  [
                                                                    e(
                                                                      "b-col",
                                                                      {
                                                                        attrs: {
                                                                          sm: "12",
                                                                          md: "12",
                                                                          lg: "12",
                                                                        },
                                                                      },
                                                                      [
                                                                        e(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "form-group",
                                                                          },
                                                                          [
                                                                            e(
                                                                              "b-form-checkbox",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    size: "md",
                                                                                    id: "zoom-server-to-server-oauth-configuration",
                                                                                    name: "zoom-server-to-server-oauth-configuration",
                                                                                    value:
                                                                                      "Yes",
                                                                                    "unchecked-value":
                                                                                      "No",
                                                                                    switch:
                                                                                      "",
                                                                                  },
                                                                                on: {
                                                                                  change:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      return t.handleServerToServerOauthConfigSubmit();
                                                                                    },
                                                                                },
                                                                                model:
                                                                                  {
                                                                                    value:
                                                                                      t
                                                                                        .zoomServerToServerOauthConfigData
                                                                                        .enableServerToServerOauthconfig,
                                                                                    callback:
                                                                                      function (
                                                                                        e
                                                                                      ) {
                                                                                        t.$set(
                                                                                          t.zoomServerToServerOauthConfigData,
                                                                                          "enableServerToServerOauthconfig",
                                                                                          e
                                                                                        );
                                                                                      },
                                                                                    expression:
                                                                                      "zoomServerToServerOauthConfigData.enableServerToServerOauthconfig",
                                                                                  },
                                                                              },
                                                                              [
                                                                                e(
                                                                                  "b",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          t
                                                                                            .formTranslation
                                                                                            .serverToserverAuth
                                                                                            .zoom_telemed_server_to_server_oauth_config
                                                                                        ) +
                                                                                        " "
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
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        "Yes" ==
                                                        t
                                                          .zoomServerToServerOauthConfigData
                                                          .enableServerToServerOauthconfig
                                                          ? e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-md-5",
                                                              },
                                                              [
                                                                e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row",
                                                                  },
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
                                                                              "form-group",
                                                                          },
                                                                          [
                                                                            e(
                                                                              "label",
                                                                              {
                                                                                staticClass:
                                                                                  "form-control-label",
                                                                                attrs:
                                                                                  {
                                                                                    for: "account_id",
                                                                                  },
                                                                              },
                                                                              [
                                                                                t._v(
                                                                                  t._s(
                                                                                    t
                                                                                      .formTranslation
                                                                                      .serverToserverAuth
                                                                                      .account_id_label
                                                                                  )
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            e(
                                                                              "input",
                                                                              {
                                                                                directives:
                                                                                  [
                                                                                    {
                                                                                      name: "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        t
                                                                                          .zoomServerToServerOauthConfigData
                                                                                          .account_id,
                                                                                      expression:
                                                                                        "zoomServerToServerOauthConfigData.account_id",
                                                                                    },
                                                                                  ],
                                                                                staticClass:
                                                                                  "form-control",
                                                                                attrs:
                                                                                  {
                                                                                    type: "text",
                                                                                    id: "account_id",
                                                                                    name: "account_id",
                                                                                    placeholder:
                                                                                      t
                                                                                        .formTranslation
                                                                                        .serverToserverAuth
                                                                                        .account_id,
                                                                                  },
                                                                                domProps:
                                                                                  {
                                                                                    value:
                                                                                      t
                                                                                        .zoomServerToServerOauthConfigData
                                                                                        .account_id,
                                                                                  },
                                                                                on: {
                                                                                  input:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t.$set(
                                                                                          t.zoomServerToServerOauthConfigData,
                                                                                          "account_id",
                                                                                          e
                                                                                            .target
                                                                                            .value
                                                                                        );
                                                                                    },
                                                                                },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        t.zoomTelemedServerToServerOauthSubmitted &&
                                                                        !t.$v
                                                                          .zoomServerToServerOauthConfigData
                                                                          .account_id
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
                                                                                        .serverToserverAuth
                                                                                        .account_id_required
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
                                                                          "col-md-12",
                                                                      },
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
                                                                                attrs:
                                                                                  {
                                                                                    for: "client_id",
                                                                                  },
                                                                              },
                                                                              [
                                                                                t._v(
                                                                                  t._s(
                                                                                    t
                                                                                      .formTranslation
                                                                                      .serverToserverAuth
                                                                                      .client_id_label
                                                                                  )
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            e(
                                                                              "input",
                                                                              {
                                                                                directives:
                                                                                  [
                                                                                    {
                                                                                      name: "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        t
                                                                                          .zoomServerToServerOauthConfigData
                                                                                          .client_id,
                                                                                      expression:
                                                                                        "zoomServerToServerOauthConfigData.client_id",
                                                                                    },
                                                                                  ],
                                                                                staticClass:
                                                                                  "form-control",
                                                                                attrs:
                                                                                  {
                                                                                    type: "text",
                                                                                    id: "client_id",
                                                                                    name: "client_id",
                                                                                    placeholder:
                                                                                      t
                                                                                        .formTranslation
                                                                                        .serverToserverAuth
                                                                                        .client_id,
                                                                                  },
                                                                                domProps:
                                                                                  {
                                                                                    value:
                                                                                      t
                                                                                        .zoomServerToServerOauthConfigData
                                                                                        .client_id,
                                                                                  },
                                                                                on: {
                                                                                  input:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t.$set(
                                                                                          t.zoomServerToServerOauthConfigData,
                                                                                          "client_id",
                                                                                          e
                                                                                            .target
                                                                                            .value
                                                                                        );
                                                                                    },
                                                                                },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        t.zoomTelemedServerToServerOauthSubmitted &&
                                                                        !t.$v
                                                                          .zoomServerToServerOauthConfigData
                                                                          .client_id
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
                                                                                        .serverToserverAuth
                                                                                        .client_id_required
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
                                                                          "col-md-12",
                                                                      },
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
                                                                                attrs:
                                                                                  {
                                                                                    for: "client_secret",
                                                                                  },
                                                                              },
                                                                              [
                                                                                t._v(
                                                                                  t._s(
                                                                                    t
                                                                                      .formTranslation
                                                                                      .serverToserverAuth
                                                                                      .client_secret_label
                                                                                  )
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            e(
                                                                              "input",
                                                                              {
                                                                                directives:
                                                                                  [
                                                                                    {
                                                                                      name: "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        t
                                                                                          .zoomServerToServerOauthConfigData
                                                                                          .client_secret,
                                                                                      expression:
                                                                                        "zoomServerToServerOauthConfigData.client_secret",
                                                                                    },
                                                                                  ],
                                                                                staticClass:
                                                                                  "form-control",
                                                                                attrs:
                                                                                  {
                                                                                    type: "text",
                                                                                    id: "client_secret",
                                                                                    name: "client_secret",
                                                                                    placeholder:
                                                                                      t
                                                                                        .formTranslation
                                                                                        .serverToserverAuth
                                                                                        .client_secret,
                                                                                  },
                                                                                domProps:
                                                                                  {
                                                                                    value:
                                                                                      t
                                                                                        .zoomServerToServerOauthConfigData
                                                                                        .client_secret,
                                                                                  },
                                                                                on: {
                                                                                  input:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t.$set(
                                                                                          t.zoomServerToServerOauthConfigData,
                                                                                          "client_secret",
                                                                                          e
                                                                                            .target
                                                                                            .value
                                                                                        );
                                                                                    },
                                                                                },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        t.zoomTelemedServerToServerOauthSubmitted &&
                                                                        !t.$v
                                                                          .zoomServerToServerOauthConfigData
                                                                          .client_secret
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
                                                                                        .serverToserverAuth
                                                                                        .client_secret_required
                                                                                    )
                                                                                ),
                                                                              ]
                                                                            )
                                                                          : t._e(),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        "Yes" ==
                                                        t
                                                          .zoomServerToServerOauthConfigData
                                                          .enableServerToServerOauthconfig
                                                          ? e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-md-7",
                                                              },
                                                              [
                                                                e(
                                                                  "b-list-group",
                                                                  [
                                                                    e(
                                                                      "b-list-group-item",
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .serverToserverAuth
                                                                              .zoom_s2s_step1
                                                                          ) +
                                                                            " "
                                                                        ),
                                                                        e(
                                                                          "a",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                href: "https://marketplace.zoom.us/",
                                                                                target:
                                                                                  "_blank",
                                                                              },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                t
                                                                                  .formTranslation
                                                                                  .serverToserverAuth
                                                                                  .zoom_market_place_portal
                                                                              )
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "b-list-group-item",
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .serverToserverAuth
                                                                              .zoom_s2s_step2
                                                                          ) +
                                                                            " "
                                                                        ),
                                                                        e(
                                                                          "a",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                href: "https://marketplace.zoom.us/develop/create",
                                                                                target:
                                                                                  "_blank",
                                                                              },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                t
                                                                                  .formTranslation
                                                                                  .serverToserverAuth
                                                                                  .create_app
                                                                              )
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "b-list-group-item",
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .serverToserverAuth
                                                                              .zoom_s2s_step3
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "b-list-group-item",
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .serverToserverAuth
                                                                              .zoom_s2s_step4
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "b-list-group-item",
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .serverToserverAuth
                                                                              .zoom_s2s_step5
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    "Yes" ==
                                                    t
                                                      .zoomServerToServerOauthConfigData
                                                      .enableServerToServerOauthconfig
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "row justify-content-between px-2",
                                                          },
                                                          [
                                                            "Yes" ==
                                                            t
                                                              .zoomServerToServerOauthConfigData
                                                              .enableServerToServerOauthconfig
                                                              ? e(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "d-flex justify-content-end",
                                                                  },
                                                                  [
                                                                    e(
                                                                      "button",
                                                                      {
                                                                        staticClass:
                                                                          "btn btn-primary",
                                                                        attrs: {
                                                                          type: "submit",
                                                                          id:
                                                                            "submit_server_to_server_oauth_btn_" +
                                                                            t
                                                                              .userData
                                                                              .ID,
                                                                          disabled:
                                                                            t.loading,
                                                                        },
                                                                      },
                                                                      [
                                                                        t.loading
                                                                          ? e(
                                                                              "span",
                                                                              [
                                                                                e(
                                                                                  "i",
                                                                                  {
                                                                                    staticClass:
                                                                                      "fa fa-sync fa-spin",
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  "  " +
                                                                                    t._s(
                                                                                      t
                                                                                        .formTranslation
                                                                                        .common
                                                                                        .loading
                                                                                    ) +
                                                                                    "\n                          "
                                                                                ),
                                                                              ]
                                                                            )
                                                                          : e(
                                                                              "span",
                                                                              [
                                                                                e(
                                                                                  "i",
                                                                                  {
                                                                                    staticClass:
                                                                                      "fa fa-save",
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " " +
                                                                                    t._s(
                                                                                      t
                                                                                        .formTranslation
                                                                                        .common
                                                                                        .save
                                                                                    ) +
                                                                                    "\n                          "
                                                                                ),
                                                                              ]
                                                                            ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                ]),
              ],
            ],
            2
          );
        },
        [],
        !1,
        null,
        "3019a35a",
        null
      ).exports,
      Ze = n(137),
      Je = n.n(Ze),
      Qe = n(147),
      tn = n(411),
      en = {
        components: { BillDetails: Qe.a, BillForm: tn.a, ModalPopup: u.a },
        data: function () {
          return {
            pageLoader: !0,
            billingList: { data: [], column: [] },
            serverParams: {
              columnFilters: { service_type: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            totalRows: 0,
            clinic_extra: { prefix: "", postfix: "" },
            billDetailsModel: !1,
            billEditDetailsModel: !1,
            encounterId: 0,
            checkOutVal: 0,
            encounterData: {},
            doctorId: 0,
            billCreateModel: !1,
            selected_encounter_id: "",
            withoutBillEncounterData: [],
            generateBillSubmittedFalse: !1,
            generateBillLoader: !1,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            this.kcCheckPermission("patient_bill_add") &&
              this.getWithoutBillEncounterList(),
              (this.billingList = this.defaultbillingList()),
              this.getBillingDataList();
          },
          defaultbillingList: function () {
            return {
              column: [
                {
                  field: "bill_id",
                  label: this.formTranslation.common.id,
                  width: "50px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.id,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "id",
                  label: this.formTranslation.common.encounter_id,
                  width: "130px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.encounter_id,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "doctor_name",
                  label: this.formTranslation.patient_encounter.dt_lbl_doc_name,
                  width: "150px",
                  hidden: this.doctorField,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient_encounter.dt_plh_fltr_by_doc,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "clinic_name",
                  label: this.formTranslation.patient_encounter.dt_lbl_clinic,
                  width: "150px",
                  filterOptions: {
                    enabled: !(
                      "kiviCare_clinic_admin" ===
                        window.request_data.current_user_role ||
                      "kiviCare_receptionist" ===
                        window.request_data.current_user_role
                    ),
                    placeholder:
                      this.formTranslation.patient_encounter
                        .dt_plh_fltr_by_clinic,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "patient_name",
                  label: this.formTranslation.patient_encounter.dt_lbl_patient,
                  width: "150px",
                  hidden: this.patientField,
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient_encounter
                        .dt_plh_fltr_patient,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "service_name",
                  width: "180px",
                  label: this.formTranslation.common.services,
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.service.dt_plh_name_fltr,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "total_amount",
                  label: this.formTranslation.common.total,
                  width: "50px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.common.total,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "discount",
                  label: this.formTranslation.patient_bill.discount,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.patient_bill.discount,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "actual_amount",
                  label: this.formTranslation.patient_bill.amount_due,
                  width: "130px",
                  filterOptions: {
                    enabled: !0,
                    placeholder: this.formTranslation.patient_bill.amount_due,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "created_at",
                  label: this.formTranslation.patient_encounter.dt_lbl_name,
                  width: "160px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.patient_encounter.dt_plh_fltr_date,
                    filterValue: "",
                    trigger: "enter",
                  },
                },
                {
                  field: "status",
                  label: this.formTranslation.common.status,
                  width: "100px",
                  filterOptions: {
                    enabled: !0,
                    placeholder:
                      this.formTranslation.static_data
                        .dt_lbl_plh_sr_fltr_status,
                    filterValue: "",
                    filterDropdownItems: [
                      {
                        value: "1",
                        text: this.formTranslation.patient_bill.unpaid,
                      },
                      {
                        value: "0",
                        text: this.formTranslation.patient_bill.paid,
                      },
                    ],
                    trigger: "enter",
                  },
                },
                {
                  field: "actions",
                  width: "100px",
                  sortable: !1,
                  label: this.formTranslation.patient_encounter.dt_lbl_action,
                  html: !0,
                },
              ],
              data: [],
            };
          },
          getWithoutBillEncounterList: function () {
            var t = this;
            Object(s.a)("get_without_bill_encounter_list", {})
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? (t.withoutBillEncounterData = e.data.data)
                  : (t.withoutBillEncounterData = []);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getBillingDataList: function () {
            var t = this;
            this.pageLoader = !0;
            var e = Object.assign({}, this.serverParams);
            e.columnFilters.created_at &&
              e.columnFilters.created_at.start &&
              e.columnFilters.created_at.end &&
              ((e.columnFilters.created_at.start = moment(
                e.columnFilters.created_at.start
              ).format("YYYY-MM-DD")),
              (e.columnFilters.created_at.end = moment(
                e.columnFilters.created_at.end
              ).format("YYYY-MM-DD"))),
              Object(s.a)("billing_record_list", e)
                .then(function (e) {
                  (t.pageLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.billingList.data = []),
                        (t.billingList.data = e.data.data),
                        (t.totalRows = e.data.total_rows),
                        void 0 !== e.data.clinic_extra &&
                          (t.clinic_extra = e.data.clinic_extra))
                      : ((t.pageLoader = !1),
                        (t.billingList.data = []),
                        (t.totalRows = 0));
                })
                .catch(function (e) {
                  (t.pageLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          updateParams: function (t) {
            (this.serverParams = Object.assign({}, this.serverParams, t)),
              this.getBillingDataList();
          },
          onPageChange: function (t) {
            this.updateParams({ page: t.currentPage });
          },
          onPerPageChange: function (t) {
            this.oldServerParams.perPage !== t.currentPerPage &&
              ((this.oldServerParams.perPage = t.currentPerPage),
              this.updateParams({
                perPage: t.currentPerPage,
                page: t.currentPage,
              }));
          },
          onSortChange: function (t) {
            this.updateParams({ sort: t });
          },
          globalFilter: _.debounce(function (t) {
            this.oldServerParams.searchTerm !== t.searchTerm &&
              ((this.oldServerParams.searchTerm = t.searchTerm),
              this.updateParams({
                searchTerm: t.searchTerm,
                perPage: this.serverParams.perPage,
                page: 1,
              }));
          }, 300),
          onColumnFilter: _.debounce(function (t) {
            var e = !0,
              n = !0;
            Object.values(t.columnFilters).map(function (t, n, i) {
              t && (e = !1);
            }),
              Object.values(this.oldServerParams.columnFilters).map(function (
                t,
                e,
                i
              ) {
                t && (n = !1);
              }),
              (e && n) ||
                ((this.oldServerParams.columnFilters = Object.assign(
                  {},
                  t.columnFilters
                )),
                this.updateParams({
                  columnFilters: t.columnFilters,
                  perPage: this.serverParams.perPage,
                  page: 1,
                }));
          }, 300),
          billModelOpen: function (t, e) {
            (this.encounterId = t.id),
              (this.encounterData = t),
              (this.doctorId = t.doctor_id),
              null !== t.appointment_id &&
                "" !== t.appointment_id &&
                (this.checkOutVal = 1),
              "edit" === e
                ? (this.billEditDetailsModel = !0)
                : (this.billDetailsModel = !0);
          },
          handleBillSave: function (t) {
            (this.billDetailsModel = !1),
              (this.billEditDetailsModel = !1),
              (this.encounterId = 0),
              (this.encounterData = {}),
              (this.doctorId = 0),
              (this.checkOutVal = 0),
              this.getBillingDataList(),
              this.kcCheckPermission("patient_bill_add") &&
                this.getWithoutBillEncounterList();
          },
          handleBillCancel: function () {
            (this.billDetailsModel = !1),
              (this.billEditDetailsModel = !1),
              (this.encounterId = 0),
              (this.encounterData = {}),
              (this.doctorId = 0),
              (this.checkOutVal = 0);
          },
          generateBill: function () {
            if (
              "" === this.selected_encounter_id ||
              parseInt(this.selected_encounter_id) <= 0
            )
              this.generateBillSubmittedFalse = !0;
            else {
              (this.generateBillLoader = !0),
                (this.generateBillSubmittedFalse = !1);
              var t = this,
                e = this.withoutBillEncounterData.filter(function (e, n) {
                  return t.selected_encounter_id == e.id;
                });
              e.length > 0 && this.billModelOpen(e[0], "edit"),
                (this.generateBillLoader = !1),
                (this.billCreateModel = !1),
                (this.selected_encounter_id = "");
            }
          },
          encounterSelect: function () {
            if (
              !(
                "" === this.selected_encounter_id ||
                parseInt(this.selected_encounter_id) <= 0
              )
            ) {
              var t = this,
                e = this.withoutBillEncounterData.filter(function (e, n) {
                  return t.selected_encounter_id == e.id;
                });
              e.length > 0 && (this.encounterData = e[0]);
            }
          },
        },
        computed: {
          servicesListExport: function () {
            return "Billing List - " + moment().format("YYYY-MM-DD");
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      },
      nn =
        (n(714),
        Object(h.a)(
          en,
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
                    e(
                      "b-overlay",
                      {
                        attrs: {
                          show: 1 != t.userData.addOns.kiviPro,
                          variant: "white",
                          opacity: t.overlayOpacity,
                        },
                        scopedSlots: t._u([
                          {
                            key: "overlay",
                            fn: function () {
                              return [
                                e("overlay-message", {
                                  attrs: { addon_type: "pro" },
                                }),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        t._v(" "),
                        e(
                          "b-card",
                          {
                            staticClass: "p-0 shadow",
                            attrs: {
                              "body-class": "p-0",
                              "header-tag": "header",
                              "footer-tag": "footer",
                            },
                            scopedSlots: t._u([
                              {
                                key: "header",
                                fn: function () {
                                  return [
                                    e(
                                      "b-row",
                                      [
                                        e(
                                          "b-col",
                                          {
                                            attrs: {
                                              sm: "12",
                                              md: "8",
                                              lg: "8",
                                            },
                                          },
                                          [
                                            e("h3", { staticClass: "mb-0" }, [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.patient_bill
                                                    .bills
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-col",
                                          {
                                            attrs: {
                                              sm: "12",
                                              md: "4",
                                              lg: "4",
                                            },
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-end",
                                              },
                                              [
                                                t.kcCheckPermission(
                                                  "patient_bill_add"
                                                ) && !t.billCreateModel
                                                  ? e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-primary",
                                                        on: {
                                                          click: function (e) {
                                                            t.billCreateModel =
                                                              !t.billCreateModel;
                                                          },
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
                                                              t.formTranslation
                                                                .patient_bill
                                                                .add_bill
                                                            ) +
                                                            "\n                "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t.kcCheckPermission(
                                                  "patient_bill_add"
                                                ) && t.billCreateModel
                                                  ? e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-primary",
                                                        on: {
                                                          click: function (e) {
                                                            t.billCreateModel =
                                                              !t.billCreateModel;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fas fa-times",
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common.close
                                                            ) +
                                                            "\n                "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
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
                            t._v(" "),
                            t.billCreateModel
                              ? e(
                                  "ModalPopup",
                                  {
                                    attrs: {
                                      modalId: "bill-create-modal",
                                      modalSize: "lg",
                                      openModal: t.billCreateModel,
                                      modalTitle:
                                        t.formTranslation.patient_bill
                                          .add_new_bill,
                                    },
                                    on: {
                                      closeModal: function (e) {
                                        t.billCreateModel = !1;
                                      },
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "m-2" }, [
                                      t.withoutBillEncounterData.length > 0
                                        ? e("div", [
                                            e(
                                              "div",
                                              { staticClass: "row p-2" },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "col-8" },
                                                  [
                                                    e(
                                                      "b-select",
                                                      {
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          name: "status",
                                                          id: "status",
                                                        },
                                                        on: {
                                                          change:
                                                            t.encounterSelect,
                                                        },
                                                        model: {
                                                          value:
                                                            t.selected_encounter_id,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.selected_encounter_id =
                                                              e;
                                                          },
                                                          expression:
                                                            "selected_encounter_id",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "option",
                                                          {
                                                            attrs: {
                                                              value: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                        " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .reports
                                                                    .plh_select +
                                                                    " " +
                                                                    t
                                                                      .formTranslation
                                                                      .patient_encounter
                                                                      .encounters +
                                                                    " " +
                                                                    t
                                                                      .formTranslation
                                                                      .common.id
                                                                ) +
                                                                "\n                      "
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(
                                                          t.withoutBillEncounterData,
                                                          function (n, i) {
                                                            return e(
                                                              "option",
                                                              {
                                                                key: i,
                                                                domProps: {
                                                                  value: n.id,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                        " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .encounters +
                                                                        "#" +
                                                                        n.id
                                                                    ) +
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
                                                    ),
                                                    t._v(" "),
                                                    t.generateBillSubmittedFalse
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "invalid-feedback",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                      " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .patient_encounter
                                                                    .encounters +
                                                                    " " +
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .id +
                                                                    " " +
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .required
                                                                ) +
                                                                "\n                    "
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "col-4" },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary",
                                                        attrs: {
                                                          disabled:
                                                            t.generateBillLoader,
                                                        },
                                                        on: {
                                                          click: t.generateBill,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                      " +
                                                            t._s(
                                                              t.generateBillLoader
                                                                ? t
                                                                    .formTranslation
                                                                    .common
                                                                    .loading
                                                                : t
                                                                    .formTranslation
                                                                    .patient_bill
                                                                    .generate_bill
                                                            ) +
                                                            "\n                    "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            "" != t.selected_encounter_id
                                              ? e("div", [
                                                  e("hr", {
                                                    staticClass: "mt-1 mb-1",
                                                  }),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "row p-2" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass: "col-12",
                                                        },
                                                        [
                                                          e(
                                                            "h4",
                                                            {
                                                              staticClass:
                                                                "text-primary text-center pb-0 mb-0",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                        " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .patient_encounter
                                                                      .encounter_details
                                                                  ) +
                                                                  " "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "row p-2" },
                                                    [
                                                      1 !=
                                                        t.userData.addOns
                                                          .kiviPro ||
                                                      ("administrator" !=
                                                        t.getUserRole() &&
                                                        "doctor" !=
                                                          t.getUserRole())
                                                        ? t._e()
                                                        : e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-6",
                                                            },
                                                            [
                                                              e(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "mb-0",
                                                                },
                                                                [
                                                                  e(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "font-weight-bold",
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        "\n                      " +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .clinic
                                                                              .clinic
                                                                          ) +
                                                                          " :\n                     "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(
                                                                    "\n                        " +
                                                                      t._s(
                                                                        t
                                                                          .encounterData
                                                                          .clinic_name
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                      t._v(" "),
                                                      "doctor" !=
                                                      t.getUserRole()
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-6",
                                                            },
                                                            [
                                                              e(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "mb-0",
                                                                },
                                                                [
                                                                  e(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "font-weight-bold",
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        "\n                      " +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .doctor
                                                                          ) +
                                                                          " :\n                     "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(
                                                                    "\n                        " +
                                                                      t._s(
                                                                        t
                                                                          .encounterData
                                                                          .doctor_name
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : t._e(),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "row p-2" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          e(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0",
                                                            },
                                                            [
                                                              e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "font-weight-bold",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                      " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .patient
                                                                      ) +
                                                                      " :\n                     "
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(
                                                                "\n                        " +
                                                                  t._s(
                                                                    t
                                                                      .encounterData
                                                                      .patient_name
                                                                  ) +
                                                                  "\n                      "
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
                                                            "col-md-6",
                                                        },
                                                        [
                                                          e(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0",
                                                            },
                                                            [
                                                              e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "font-weight-bold",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                      " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .date
                                                                      ) +
                                                                      " :\n                     "
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(
                                                                "\n                        " +
                                                                  t._s(
                                                                    t
                                                                      .encounterData
                                                                      .encounter_date
                                                                  ) +
                                                                  "\n                      "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ])
                                              : t._e(),
                                          ])
                                        : e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-12" },
                                              [
                                                e(
                                                  "h4",
                                                  {
                                                    staticClass:
                                                      "text-danger text-center mtb-20",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient_bill
                                                            .no_encounter_found_for_billing
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                    ]),
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            t.billEditDetailsModel
                              ? e(
                                  "ModalPopup",
                                  {
                                    attrs: {
                                      modalId: "bill-details-modal",
                                      modalSize: "lg",
                                      openModal: t.billEditDetailsModel,
                                      modalTitle:
                                        t.formTranslation.patient_bill
                                          .invoice_detail,
                                    },
                                    on: {
                                      closeModal: function (e) {
                                        t.billEditDetailsModel = !1;
                                      },
                                    },
                                  },
                                  [
                                    "patient" !== t.getUserRole()
                                      ? e("BillForm", {
                                          attrs: {
                                            encounterId: t.encounterId,
                                            checkOutVal: t.checkOutVal,
                                            appointmentData: t.encounterData,
                                            clinic_extra: t.clinic_extra,
                                            doctorId: t.doctorId,
                                          },
                                          on: {
                                            onBillSaved: t.handleBillSave,
                                            onBillCancel: t.handleBillCancel,
                                          },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            t.billDetailsModel
                              ? e(
                                  "ModalPopup",
                                  {
                                    attrs: {
                                      modalId: "bill-details-modal",
                                      modalSize: "lg",
                                      openModal: t.billDetailsModel,
                                      modalTitle:
                                        t.formTranslation.patient_bill
                                          .invoice_detail,
                                    },
                                    on: {
                                      closeModal: function (e) {
                                        t.billDetailsModel = !1;
                                      },
                                    },
                                  },
                                  [
                                    e("BillDetails", {
                                      attrs: {
                                        encounterId: t.encounterId,
                                        clinic_extra: t.clinic_extra,
                                      },
                                      on: { onBillCancel: t.handleBillCancel },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            e(
                              "b-row",
                              [
                                e(
                                  "b-col",
                                  { attrs: { sm: "12", md: "12", lg: "12" } },
                                  [
                                    e(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.pageLoader,
                                            expression: "pageLoader",
                                          },
                                        ],
                                        staticClass: "page-loader-section",
                                      },
                                      [e("loader-component-2")],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      { attrs: { id: "billingTable" } },
                                      [
                                        e(
                                          "vue-good-table",
                                          {
                                            ref: "dataTable",
                                            attrs: {
                                              columns: t.billingList.column,
                                              rows: t.billingList.data,
                                              mode: "remote",
                                              "search-options": {
                                                enabled: !0,
                                                placeholder:
                                                  t.formTranslation.common
                                                    .search_bills_data_global_placeholder,
                                              },
                                              totalRows: t.totalRows,
                                              "pagination-options": {
                                                enabled: !0,
                                                mode: "pages",
                                              },
                                              styleClass: "vgt-table striped",
                                              compactMode: "",
                                            },
                                            on: {
                                              "on-sort-change": t.onSortChange,
                                              "on-column-filter":
                                                t.onColumnFilter,
                                              "on-page-change": t.onPageChange,
                                              "on-per-page-change":
                                                t.onPerPageChange,
                                              "on-search": t.globalFilter,
                                            },
                                            scopedSlots: t._u([
                                              {
                                                key: "column-filter",
                                                fn: function (n) {
                                                  var i = n.column,
                                                    r = n.updateFilters;
                                                  return [
                                                    "created_at" === i.field
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-inline-flex justify-content-start align-items-center",
                                                          },
                                                          [
                                                            e(
                                                              "vc-date-picker",
                                                              {
                                                                attrs: {
                                                                  id: "appointmentDate",
                                                                  "title-position":
                                                                    "left",
                                                                  popover: {
                                                                    visibility:
                                                                      "click",
                                                                  },
                                                                  "is-expanded":
                                                                    "",
                                                                  mode: "range",
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return r(
                                                                        i,
                                                                        t
                                                                          .serverParams
                                                                          .columnFilters
                                                                          .created_at
                                                                      );
                                                                    },
                                                                },
                                                                scopedSlots:
                                                                  t._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function (
                                                                          n
                                                                        ) {
                                                                          var i =
                                                                            n.inputValue;
                                                                          return [
                                                                            e(
                                                                              "input",
                                                                              {
                                                                                staticClass:
                                                                                  "form-control-sm w-100",
                                                                                staticStyle:
                                                                                  {
                                                                                    border:
                                                                                      "#fff",
                                                                                  },
                                                                                attrs:
                                                                                  {
                                                                                    placeholder:
                                                                                      t
                                                                                        .formTranslation
                                                                                        .appointments
                                                                                        .plh_date,
                                                                                  },
                                                                                domProps:
                                                                                  {
                                                                                    value:
                                                                                      i,
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ];
                                                                        },
                                                                      },
                                                                    ],
                                                                    null,
                                                                    !0
                                                                  ),
                                                                model: {
                                                                  value:
                                                                    t
                                                                      .serverParams
                                                                      .columnFilters
                                                                      .created_at,
                                                                  callback:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.$set(
                                                                        t
                                                                          .serverParams
                                                                          .columnFilters,
                                                                        "created_at",
                                                                        e
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "serverParams.columnFilters.created_at",
                                                                },
                                                              }
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "form-control-sm",
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return r(
                                                                        i,
                                                                        (t.serverParams.columnFilters.created_at =
                                                                          "")
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [t._v("X")]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : t._e(),
                                                  ];
                                                },
                                              },
                                              {
                                                key: "table-row",
                                                fn: function (n) {
                                                  return [
                                                    "created_at" ==
                                                    n.column.field
                                                      ? e("div", [
                                                          t._v(
                                                            "\n                    " +
                                                              t._s(
                                                                n.row.created_at
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ])
                                                      : "patient_id" ==
                                                        n.column.field
                                                      ? e("div", [
                                                          t._v(
                                                            "\n                    " +
                                                              t._s(
                                                                n.row
                                                                  .patient_name
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ])
                                                      : "status" ==
                                                        n.column.field
                                                      ? e("div", [
                                                          "0" == n.row.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success",
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .patient_bill
                                                                          .paid
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          "1" == n.row.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .patient_bill
                                                                          .unpaid
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ])
                                                      : "actions" ==
                                                          n.column.field &&
                                                        "yes" !== n.row.last_row
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "btn-group",
                                                          },
                                                          [
                                                            t.kcCheckPermission(
                                                              "patient_bill_edit"
                                                            ) &&
                                                            "1" ==
                                                              n.row.status &&
                                                            "patient" !==
                                                              t.getUserRole()
                                                              ? e(
                                                                  "button",
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
                                                                    staticClass:
                                                                      "btn btn-sm btn-outline-primary",
                                                                    attrs: {
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
                                                                          return t.billModelOpen(
                                                                            n.row,
                                                                            "edit"
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
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            t.kcCheckPermission(
                                                              "patient_bill_view"
                                                            )
                                                              ? e(
                                                                  "button",
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
                                                                    staticClass:
                                                                      "btn btn-sm btn-outline-primary",
                                                                    attrs: {
                                                                      title:
                                                                        t
                                                                          .formTranslation
                                                                          .patient_bill
                                                                          .bill_details,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.billModelOpen(
                                                                            n.row,
                                                                            "detail"
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    e("i", {
                                                                      staticClass:
                                                                        "fa fa-file-invoice",
                                                                    }),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            t.kcCheckPermission(
                                                              "patient_encounter_view"
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
                                                                    staticClass:
                                                                      "btn-sm",
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
                                                                        params:
                                                                          {
                                                                            encounter_id:
                                                                              n
                                                                                .row
                                                                                .id,
                                                                          },
                                                                      },
                                                                    },
                                                                  },
                                                                  [
                                                                    e("i", {
                                                                      staticClass:
                                                                        "fas fa-tachometer-alt",
                                                                    }),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                          ],
                                                          1
                                                        )
                                                      : e("div", [
                                                          t._v(
                                                            "\n                    " +
                                                              t._s(
                                                                n.formattedRow[
                                                                  n.column.field
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
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "text-center mtb-100",
                                                attrs: { slot: "emptystate" },
                                                slot: "emptystate",
                                              },
                                              [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .no_data_found
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                attrs: {
                                                  slot: "table-actions",
                                                },
                                                slot: "table-actions",
                                              },
                                              [
                                                t.kcCheckPermission(
                                                  "patient_bill_export"
                                                )
                                                  ? e("module-data-export", {
                                                      attrs: {
                                                        module_data:
                                                          t.billingList.data,
                                                        module_name:
                                                          t.formTranslation
                                                            .patient_bill.bills,
                                                        module_type: "billings",
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1
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
        ).exports),
      rn = {
        name: "RevenueReport",
        data: function () {
          return {
            currentUser: window.request_data.current_user_role,
            key: 0,
            series: [],
            chartOptions: {
              chart: { type: "donut", height: 320 },
              legend: { showForSingleSeries: !0, position: "bottom" },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: { width: 320 },
                    legend: { position: "bottom" },
                  },
                },
              ],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: !0,
                      total: { show: !0, showAlways: !0, label: "Total" },
                    },
                  },
                },
              },
              series: [],
              noData: {
                text: "Loading.....",
                align: "center",
                verticalAlign: "middle",
                offsetX: 0,
                offsetY: 0,
              },
              labels: [],
              tooltip: {
                y: {
                  formatter: function (t) {
                    return t;
                  },
                },
              },
            },
            barseries: [{ name: "", data: [] }],
            docseries: [{ name: "", data: [] }],
            barChartOption: {
              chart: { type: "bar", height: 320 },
              xaxis: { categories: [] },
              plotOptions: {
                bar: {
                  horizontal: !1,
                  columnWidth: "30%",
                  endingShape: "rounded",
                },
              },
              dataLabels: { enabled: !1 },
              stroke: { show: !0, width: 2, colors: ["transparent"] },
              fill: { opacity: 1 },
              tooltip: {},
              noData: {
                text: "Loading.....",
                align: "center",
                verticalAlign: "middle",
                offsetX: 0,
                offsetY: 0,
              },
              legend: { showForSingleSeries: !0 },
            },
            barDoctorOption: {
              chart: { type: "bar", height: 350 },
              xaxis: { categories: [] },
              plotOptions: {
                bar: {
                  horizontal: !1,
                  columnWidth: "30%",
                  endingShape: "rounded",
                },
              },
              dataLabels: { enabled: !1 },
              stroke: { show: !0, width: 2, colors: ["transparent"] },
              fill: { opacity: 1 },
              tooltip: {},
              noData: {
                text: "Loading.....",
                align: "center",
                verticalAlign: "middle",
                offsetX: 0,
                offsetY: 0,
              },
              legend: { showForSingleSeries: !0 },
            },
            filterData: {},
            filterReport: [
              { id: "weekly", label: "Weekly" },
              { id: "monthly", label: "Monthly" },
              { id: "yearly", label: "Yearly" },
            ],
            getAllType: [],
            filterSubType: [],
            clinic_currency: { prefix: "", postfix: "" },
            clinics: [],
            clinicMultiselectLoader: !0,
            chartLoading: !1,
            appointmentClinicChartLoading: !1,
            appointmentDoctorChartLoading: !1,
            doctorMultiselectLoader: !0,
            doctors: [],
            doctorApiData: { data_type: "clinic_doctors", clinic_id: "" },
            allStatus: [
              { label: "all", value: "all" },
              { label: "booked", value: "1" },
              { label: "completed", value: "3" },
              { label: "cancelled", value: "cancel" },
              { label: "checkin", value: "4" },
              { label: "pending", value: "2" },
            ],
            appointmentSeries: [{ name: "", data: [] }],
            clinicAppointmentSeries: [{ name: "", data: [] }],
            doctor_colors: [],
            clinic_colors: [],
          };
        },
        mounted: function () {
          var t = this;
          ["doctor", "patient"].includes(this.getUserRole()) &&
            this.$router.push({ name: "403" }),
            (this.allStatus = this.allStatus.map(function (e) {
              return (
                ["booked", "pending"].includes(e.label)
                  ? (e.label = t.formTranslation.appointments[e.label])
                  : (e.label = t.formTranslation.common[e.label]),
                e
              );
            })),
            (this.filterData = this.defaultFilterData()),
            Object(s.a)("get_all_report_type", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.getAllType = e.data.data),
                  (t.filterSubType = t.getAllType.years),
                  (t.filterData.sub_type = t.getAllType.default_year),
                  (t.clinic_currency = e.data.clinic_currency),
                  (t.doctor_colors = e.data.doctor_colors),
                  (t.clinic_colors = e.data.clinic_colors)),
                  t.init();
              })
              .catch(function (t) {});
        },
        components: { apexcharts: d.a },
        methods: {
          init: function () {
            this.getClinicRevenue(),
              this.barChartClinicRevenue(),
              this.doctorRevenue(),
              this.getClinic(),
              this.appointmentCount(),
              this.clinicAppointmentCount(),
              this.getDoctorsData(0);
          },
          defaultFilterData: function () {
            return {
              clinic_id: { id: "all", label: this.formTranslation.common.all },
              filter_id: {
                id: "yearly",
                label: this.formTranslation.common.yearly,
              },
              doctor_id: { id: "all", label: this.formTranslation.common.all },
              sub_type: "",
              appointment_status_clinic: "all",
              appointment_status_doctor: "all",
              patient_id: "",
            };
          },
          getClinicRevenue: function () {
            var t = this,
              e = this;
            (this.chartLoading = !0),
              Object(s.a)("get_clinic_revenue", this.filterData)
                .then(function (n) {
                  if (
                    ((e.chartLoading = !1),
                    void 0 !== n.data.status && !0 === n.data.status)
                  ) {
                    if (
                      ((e.series = n.data.data),
                      (e.chartOptions.labels = n.data.labels),
                      (e.chartOptions.noData.text =
                        e.formTranslation.common.no_data_found),
                      (e.chartOptions.series = n.data.data),
                      (e.chartOptions.plotOptions.pie.donut.labels.total.label =
                        e.formTranslation.common.total),
                      (e.chartOptions.legend.formatter = function (t, n) {
                        var i =
                          e.clinic_currency.prefix +
                          ("undefined" != typeof numberWithCommas
                            ? numberWithCommas(
                                n.w.globals.series[n.seriesIndex]
                              )
                            : n.w.globals.series[n.seriesIndex]) +
                          e.clinic_currency.postfix;
                        return '<div class="legend-info"><span>'
                          .concat(t, "</span>: <strong>")
                          .concat(i, "</strong></div>");
                      }),
                      (e.chartOptions.plotOptions.pie.donut.labels.total.formatter =
                        function (t) {
                          var n = t.globals.seriesTotals.reduce(function (
                            t,
                            e
                          ) {
                            return t + e;
                          },
                          0);
                          return (
                            e.clinic_currency.prefix +
                            ("undefined" != typeof numberWithCommas
                              ? numberWithCommas(n)
                              : val) +
                            e.clinic_currency.postfix
                          );
                        }),
                      (e.chartOptions.tooltip.y.formatter = function (t) {
                        return (
                          e.clinic_currency.prefix +
                          ("undefined" != typeof numberWithCommas
                            ? numberWithCommas(t)
                            : t) +
                          e.clinic_currency.postfix
                        );
                      }),
                      t.clinic_colors.length > 0)
                    ) {
                      var i = t.clinic_colors.slice(0, n.data.data.length);
                      (e.chartOptions.colors = i),
                        (e.chartOptions.fill = { colors: i });
                    }
                    e.$refs.revenueChart.updateSeries(n.data.data),
                      e.$refs.revenueChart.updateOptions(e.chartOptions);
                  }
                })
                .catch(function (t) {
                  e.chartLoading = !1;
                });
          },
          barChartClinicRevenue: function () {
            var t = this,
              e = this;
            (this.chartLoading = !0),
              Object(s.a)("get_clinic_bar_revenue", this.filterData)
                .then(function (n) {
                  if (
                    ((e.chartLoading = !1),
                    void 0 !== n.data.status && !0 === n.data.status)
                  ) {
                    if (
                      ((e.barseries = n.data.data),
                      void 0 !== t.userData.theme_mode &&
                      [!0, "true"].includes(t.userData.theme_mode)
                        ? ((n.data.data = n.data.data.map(function (t) {
                            return (t.data = t.data.reverse()), t;
                          })),
                          e.$refs.barRevenueChart.updateSeries(n.data.data))
                        : e.$refs.barRevenueChart.updateSeries(n.data.data),
                      t.clinic_colors.length > 0)
                    ) {
                      var i = t.clinic_colors.slice(0, n.data.data.length);
                      (e.chartOptions.colors = i),
                        (e.chartOptions.fill = { colors: i });
                    }
                    var r = {
                      xaxis: {
                        categories:
                          void 0 !== t.userData.theme_mode &&
                          [!0, "true"].includes(t.userData.theme_mode)
                            ? n.data.date.reverse()
                            : n.data.date,
                      },
                      noData: { text: e.formTranslation.common.no_data_found },
                      yaxis: {
                        labels: {
                          formatter: function (t) {
                            return (
                              e.clinic_currency.prefix +
                              ("undefined" != typeof numberWithCommas
                                ? numberWithCommas(t)
                                : t) +
                              e.clinic_currency.postfix
                            );
                          },
                        },
                        opposite: !(
                          void 0 === t.userData.theme_mode ||
                          ![!0, "true"].includes(t.userData.theme_mode)
                        ),
                      },
                    };
                    if (t.clinic_colors.length > 0) {
                      var o = t.clinic_colors.slice(0, n.data.data.length);
                      (r.colors = o), (r.fill = { colors: o });
                    }
                    (r.grid = { show: t.showHideChartGrid(n.data.data) }),
                      e.$refs.barRevenueChart.updateOptions(r);
                  }
                })
                .catch(function (t) {
                  e.chartLoading = !1;
                });
          },
          doctorRevenue: function () {
            var t = this,
              e = this;
            (e.chartLoading = !0),
              Object(s.a)("get_doctor_wise_revenue", this.filterData)
                .then(function (n) {
                  if (
                    ((e.chartLoading = !1),
                    void 0 !== n.data.status && !0 === n.data.status)
                  ) {
                    (e.docseries = n.data.data),
                      void 0 !== t.userData.theme_mode &&
                      [!0, "true"].includes(t.userData.theme_mode)
                        ? ((n.data.data = n.data.data.map(function (t) {
                            return (t.data = t.data.reverse()), t;
                          })),
                          e.$refs.barDoctorRevenueChart.updateSeries(
                            n.data.data
                          ))
                        : e.$refs.barDoctorRevenueChart.updateSeries(
                            n.data.data
                          );
                    var i = {
                      xaxis: {
                        categories:
                          void 0 !== t.userData.theme_mode &&
                          [!0, "true"].includes(t.userData.theme_mode)
                            ? n.data.date.reverse()
                            : n.data.date,
                      },
                      noData: { text: e.formTranslation.common.no_data_found },
                      yaxis: {
                        labels: {
                          formatter: function (t) {
                            return (
                              e.clinic_currency.prefix +
                              ("undefined" != typeof numberWithCommas
                                ? numberWithCommas(t)
                                : t) +
                              e.clinic_currency.postfix
                            );
                          },
                        },
                        opposite: !(
                          void 0 === t.userData.theme_mode ||
                          ![!0, "true"].includes(t.userData.theme_mode)
                        ),
                      },
                    };
                    if (t.doctor_colors.length > 0) {
                      var r = t.doctor_colors.slice(0, n.data.data.length);
                      (i.colors = r), (i.fill = { colors: r });
                    }
                    (i.grid = { show: t.showHideChartGrid(n.data.data) }),
                      e.$refs.barDoctorRevenueChart.updateOptions(i);
                  }
                })
                .catch(function (t) {
                  e.chartLoading = !1;
                });
          },
          clinicChange: function (t) {
            var e = 0;
            t.id && "all" !== t.id
              ? ((this.doctorApiData.data_type = "get_users_by_clinic"),
                (e = t.id))
              : (this.doctorApiData.data_type = "clinic_doctors"),
              this.getDoctorsData(e),
              this.getAllSubType(t);
          },
          appointmentCount: function () {
            var t = this,
              e = this;
            (e.appointmentDoctorChartLoading = !0),
              Object(s.a)("get_appointment_count", this.filterData).then(
                function (n) {
                  if (
                    ((e.appointmentDoctorChartLoading = !1),
                    void 0 !== n.data.status && !0 === n.data.status)
                  ) {
                    (e.appointmentSeries = n.data.data),
                      void 0 !== t.userData.theme_mode &&
                      [!0, "true"].includes(t.userData.theme_mode)
                        ? ((n.data.data = n.data.data.map(function (t) {
                            return (t.data = t.data.reverse()), t;
                          })),
                          e.$refs.barAppointmentCountChart.updateSeries(
                            n.data.data
                          ))
                        : e.$refs.barAppointmentCountChart.updateSeries(
                            n.data.data
                          );
                    var i = {
                      xaxis: {
                        categories:
                          void 0 !== t.userData.theme_mode &&
                          [!0, "true"].includes(t.userData.theme_mode)
                            ? n.data.date.reverse()
                            : n.data.date,
                      },
                      yaxis: {
                        opposite: !(
                          void 0 === t.userData.theme_mode ||
                          ![!0, "true"].includes(t.userData.theme_mode)
                        ),
                      },
                      noData: { text: e.formTranslation.common.no_data_found },
                    };
                    if (t.doctor_colors.length > 0) {
                      var r = t.doctor_colors.slice(0, n.data.data.length);
                      (i.colors = r), (i.fill = { colors: r });
                    }
                    (i.grid = { show: t.showHideChartGrid(n.data.data) }),
                      e.$refs.barAppointmentCountChart.updateOptions(i);
                  }
                }
              );
          },
          clinicAppointmentCount: function () {
            var t = this,
              e = this;
            (e.appointmentClinicChartLoading = !0),
              Object(s.a)("get_clinic_appointment_count", this.filterData).then(
                function (n) {
                  if (
                    ((e.appointmentClinicChartLoading = !1),
                    void 0 !== n.data.status && !0 === n.data.status)
                  ) {
                    (e.clinicAppointmentSeries = n.data.data),
                      void 0 !== t.userData.theme_mode &&
                      [!0, "true"].includes(t.userData.theme_mode)
                        ? ((n.data.data = n.data.data.map(function (t) {
                            return (t.data = t.data.reverse()), t;
                          })),
                          e.$refs.barClinicAppointmentCountChart.updateSeries(
                            n.data.data
                          ))
                        : e.$refs.barClinicAppointmentCountChart.updateSeries(
                            n.data.data
                          );
                    var i = {
                      xaxis: {
                        categories:
                          void 0 !== t.userData.theme_mode &&
                          [!0, "true"].includes(t.userData.theme_mode)
                            ? n.data.date.reverse()
                            : n.data.date,
                      },
                      yaxis: {
                        opposite: !(
                          void 0 === t.userData.theme_mode ||
                          ![!0, "true"].includes(t.userData.theme_mode)
                        ),
                      },
                      noData: { text: e.formTranslation.common.no_data_found },
                    };
                    if (t.clinic_colors.length > 0) {
                      var r = t.clinic_colors.slice(0, n.data.data.length);
                      (i.colors = r), (i.fill = { colors: r });
                    }
                    (i.grid = { show: t.showHideChartGrid(n.data.data) }),
                      e.$refs.barClinicAppointmentCountChart.updateOptions(i);
                  }
                }
              );
          },
          getAllSubType: function (t) {
            this.filterData,
              "weekly" == t.id &&
                ((this.filterSubType = this.getAllType.weeks),
                (this.filterData.sub_type = this.getAllType.default_week)),
              "monthly" == t.id &&
                ((this.filterSubType = this.getAllType.months),
                (this.filterData.sub_type = this.getAllType.default_month)),
              "yearly" == t.id &&
                ((this.filterSubType = this.getAllType.years),
                (this.filterData.sub_type = this.getAllType.default_year)),
              this.getClinicRevenue(),
              this.barChartClinicRevenue(),
              this.doctorRevenue(),
              this.clinicAppointmentCount(),
              this.appointmentCount();
          },
          getClinic: function () {
            var t = this;
            (this.filterReport = this.filterReport.map(function (e) {
              return (e.label = t.formTranslation.common[e.id]), e;
            })),
              (this.clinicMultiselectLoader = !0),
              Object(s.a)("get_static_data", { data_type: "clinics" })
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? ((t.clinics = e.data.data),
                      t.clinics.length > 0 &&
                        t.clinics.push({
                          id: "all",
                          label: t.formTranslation.common.all,
                        }))
                    : displayErrorMessage(e.data.message),
                    (t.clinicMultiselectLoader = !1);
                })
                .catch(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getDoctorsData: function (t) {
            var e = this;
            (this.doctorApiData.clinic_id = t),
              (this.doctorMultiselectLoader = !0),
              Object(s.a)("get_static_data", this.doctorApiData)
                .then(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (t.data.data.length > 0 &&
                        t.data.data.unshift({
                          id: "all",
                          label: e.formTranslation.common.all,
                        }),
                      (e.doctors = t.data.data));
                })
                .catch(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          showHideChartGrid: function (t) {
            return !!t.some(function (t) {
              var e;
              return (
                (null == t || null === (e = t.data) || void 0 === e
                  ? void 0
                  : e.length) > 0
              );
            });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      on = Object(h.a)(
        rn,
        function () {
          var t = this,
            e = t._self._c;
          return e("b-row", [
            e(
              "div",
              { staticClass: "col-md-12 col-lg-12 col-xl-12" },
              [
                e(
                  "b-overlay",
                  {
                    attrs: {
                      show: 1 != t.userData.addOns.kiviPro,
                      variant: "white",
                      opacity: t.overlayOpacity,
                    },
                    scopedSlots: t._u([
                      {
                        key: "overlay",
                        fn: function () {
                          return [
                            e("overlay-message", {
                              attrs: { addon_type: "pro" },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    t._v(" "),
                    e("div", { staticClass: "card" }, [
                      e("div", { staticClass: "row mt-2" }, [
                        e("div", { staticClass: "col-md-12 p-2 ml-4" }, [
                          e("h3", { staticClass: "text-primary" }, [
                            t._v(t._s(t.formTranslation.common.filters)),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row ml-3 mr-3 mb-3" }, [
                        "kiviCare_clinic_admin" !== t.currentUser
                          ? e("div", { staticClass: "col-lg-3 col-md-6" }, [
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
                                        "\n                " +
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
                                        t.formTranslation.reports
                                          .tag_plh_select_clinic,
                                      id: "clinic_id",
                                      placeholder:
                                        t.formTranslation.reports.plh_search,
                                      label: "label",
                                      "track-by": "id",
                                      options: t.clinics,
                                      loading: t.clinicMultiselectLoader,
                                      disabled: t.clinicMultiselectLoader,
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
                                      value: t.filterData.clinic_id,
                                      callback: function (e) {
                                        t.$set(t.filterData, "clinic_id", e);
                                      },
                                      expression: "filterData.clinic_id",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        "doctor" !== t.getUserRole
                          ? e("div", { staticClass: "col-lg-3 col-md-6" }, [
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
                                        "\n                " +
                                          t._s(
                                            t.formTranslation.patient_encounter
                                              .tag_select_doctor
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
                                        t.formTranslation.reports.plh_search,
                                      label: "label",
                                      "track-by": "id",
                                      options: t.doctors,
                                      loading: t.doctorMultiselectLoader,
                                      disabled: t.doctorMultiselectLoader,
                                    },
                                    on: { select: t.getAllSubType },
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
                                      value: t.filterData.doctor_id,
                                      callback: function (e) {
                                        t.$set(t.filterData, "doctor_id", e);
                                      },
                                      expression: "filterData.doctor_id",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        e("div", { staticClass: "col-lg-3 col-md-6" }, [
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
                                    "\n                " +
                                      t._s(
                                        t.formTranslation.reports.filter_by
                                      ) +
                                      " "
                                  ),
                                  e("span", { staticClass: "text-danger" }, [
                                    t._v("*"),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              e("multi-select", {
                                attrs: {
                                  "deselect-label": "",
                                  "select-label": "",
                                  "tag-placeholder":
                                    t.formTranslation.plh_flter_by,
                                  id: "filter_id",
                                  placeholder:
                                    t.formTranslation.reports.plh_select,
                                  label: "label",
                                  "track-by": "id",
                                  options: t.filterReport,
                                },
                                on: { select: t.getAllSubType },
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
                                  value: t.filterData.filter_id,
                                  callback: function (e) {
                                    t.$set(t.filterData, "filter_id", e);
                                  },
                                  expression: "filterData.filter_id",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-lg-3 col-md-6" }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "sub_type_id" },
                                },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(
                                        t.formTranslation.reports.filter_by
                                      ) +
                                      " "
                                  ),
                                  e("span", { staticClass: "text-danger" }, [
                                    t._v("*"),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              e("multi-select", {
                                attrs: {
                                  "deselect-label": "",
                                  "select-label": "",
                                  id: "sub_type_id",
                                  placeholder:
                                    t.formTranslation.doctor.select_year,
                                  options: Object.keys(t.filterSubType),
                                },
                                on: { select: t.getAllSubType },
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
                                  value: t.filterData.sub_type,
                                  callback: function (e) {
                                    t.$set(t.filterData, "sub_type", e);
                                  },
                                  expression: "filterData.sub_type",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "row mb-3" }, [
                      e("div", { staticClass: "col-lg-4 col-md-6" }, [
                        e("div", { staticClass: "card" }, [
                          e("div", { staticClass: "card-header" }, [
                            e("h3", { staticClass: "text-primary" }, [
                              t._v(
                                t._s(
                                  t.formTranslation.reports
                                    .clinic_revenue_overall
                                )
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "card-body" },
                            [
                              t.chartLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("apexcharts", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.chartLoading,
                                    expression: "!chartLoading",
                                  },
                                ],
                                ref: "revenueChart",
                                attrs: {
                                  type: "donut",
                                  height:
                                    320 + Math.floor(2 * Math.random()) + 1,
                                  id: "someId",
                                  options: t.chartOptions,
                                  series: t.series,
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-lg-8 col-md-6" }, [
                        e("div", { staticClass: "card" }, [
                          e("div", { staticClass: "card-header" }, [
                            e("h3", { staticClass: "text-primary" }, [
                              t._v(
                                t._s(
                                  t.formTranslation.reports
                                    .clinic_revenue_detail
                                )
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "card-body" },
                            [
                              t.chartLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("apexcharts", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.chartLoading,
                                    expression: "!chartLoading",
                                  },
                                ],
                                ref: "barRevenueChart",
                                attrs: {
                                  type: "bar",
                                  height: "320",
                                  id: "barId",
                                  options: t.barChartOption,
                                  series: t.barseries,
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-lg-12 col-md-12" }, [
                        e("div", { staticClass: "card" }, [
                          e("div", { staticClass: "card-header" }, [
                            e("h3", { staticClass: "text-primary" }, [
                              t._v(
                                t._s(
                                  t.formTranslation.reports
                                    .clinic_doctor_revenue
                                )
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "card-body" },
                            [
                              t.chartLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("apexcharts", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.chartLoading,
                                    expression: "!chartLoading",
                                  },
                                ],
                                ref: "barDoctorRevenueChart",
                                attrs: {
                                  type: "bar",
                                  height: "320",
                                  id: "doctorId",
                                  options: t.barDoctorOption,
                                  series: t.docseries,
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-lg-6 col-md-6" }, [
                        e("div", { staticClass: "card" }, [
                          e("div", { staticClass: "card-header" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-between align-items-center flex-wrap",
                              },
                              [
                                e("h3", { staticClass: "text-primary mr-2" }, [
                                  t._v(
                                    t._s(
                                      t.formTranslation.common
                                        .clinic_appointment_count
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "b-select",
                                  {
                                    staticClass: "form-control",
                                    staticStyle: { width: "auto" },
                                    on: { change: t.clinicAppointmentCount },
                                    model: {
                                      value:
                                        t.filterData.appointment_status_clinic,
                                      callback: function (e) {
                                        t.$set(
                                          t.filterData,
                                          "appointment_status_clinic",
                                          e
                                        );
                                      },
                                      expression:
                                        "filterData.appointment_status_clinic",
                                    },
                                  },
                                  t._l(t.allStatus, function (n, i) {
                                    return e(
                                      "option",
                                      { key: i, domProps: { value: n.value } },
                                      [t._v(t._s(n.label))]
                                    );
                                  }),
                                  0
                                ),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "card-body" },
                            [
                              t.appointmentClinicChartLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("apexcharts", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.appointmentClinicChartLoading,
                                    expression:
                                      "!appointmentClinicChartLoading",
                                  },
                                ],
                                ref: "barClinicAppointmentCountChart",
                                attrs: {
                                  type: "bar",
                                  height: "320",
                                  id: "clinicId",
                                  options: t.barDoctorOption,
                                  series: t.clinicAppointmentSeries,
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-lg-6 col-md-6" }, [
                        e("div", { staticClass: "card" }, [
                          e("div", { staticClass: "card-header" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-between align-items-center flex-wrap",
                              },
                              [
                                e("h3", { staticClass: "text-primary mr-2" }, [
                                  t._v(
                                    t._s(
                                      t.formTranslation.common
                                        .doctor_appointment_count
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "b-select",
                                  {
                                    staticClass: "form-control",
                                    staticStyle: { width: "auto" },
                                    on: { change: t.appointmentCount },
                                    model: {
                                      value:
                                        t.filterData.appointment_status_doctor,
                                      callback: function (e) {
                                        t.$set(
                                          t.filterData,
                                          "appointment_status_doctor",
                                          e
                                        );
                                      },
                                      expression:
                                        "filterData.appointment_status_doctor",
                                    },
                                  },
                                  t._l(t.allStatus, function (n, i) {
                                    return e(
                                      "option",
                                      { key: i, domProps: { value: n.value } },
                                      [t._v(t._s(n.label))]
                                    );
                                  }),
                                  0
                                ),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "card-body" },
                            [
                              t.appointmentDoctorChartLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("apexcharts", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.appointmentDoctorChartLoading,
                                    expression:
                                      "!appointmentDoctorChartLoading",
                                  },
                                ],
                                ref: "barAppointmentCountChart",
                                attrs: {
                                  type: "bar",
                                  height: "320",
                                  id: "doctorId",
                                  options: t.barDoctorOption,
                                  series: t.appointmentSeries,
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      an = n(384).a,
      sn = Object(h.a)(
        an,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              "off" == t.userData.is_enable_doctor_gcal
                ? e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { sm: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "header",
                                    fn: function () {
                                      return [
                                        e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "8",
                                                  lg: "8",
                                                },
                                              },
                                              [
                                                e("h2", [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .google_calendar
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ],
                                null,
                                !1,
                                1257833465
                              ),
                            },
                            [
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row" },
                                [
                                  e("b-col", { attrs: { md: "12" } }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between",
                                        staticStyle: { margin: "30px 15px" },
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticStyle: {
                                              "font-weight": "500",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .please_connect_google_calendar_automatically
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-button",
                                          {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            on: { click: t.connect },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "d-flex align-items-center",
                                              },
                                              [
                                                e("img", {
                                                  staticClass: "mr-1",
                                                  attrs: {
                                                    alt: "img",
                                                    src: t.googleSignInImage,
                                                  },
                                                }),
                                                t._v(
                                                  "\n                    " +
                                                    t._s(
                                                      t.formTranslation
                                                        .pro_setting
                                                        .connect_with_google
                                                    ) +
                                                    "\n                  "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
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
                  )
                : e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "header",
                                  fn: function () {
                                    return [
                                      e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "8",
                                                lg: "8",
                                              },
                                            },
                                            [
                                              e("h2", [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .google_calendar
                                                  )
                                                ),
                                              ]),
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
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between",
                                      staticStyle: { margin: "30px 15px" },
                                    },
                                    [
                                      e(
                                        "p",
                                        {
                                          staticStyle: { "font-weight": "500" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .connected_with_google_calender
                                            ) + " "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-button",
                                        {
                                          staticClass:
                                            "float-right btn btn-sm btn-primary",
                                          attrs: {
                                            type: "button",
                                            variant: "primary",
                                          },
                                          on: { click: t.closeConnection },
                                        },
                                        [
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.formTranslation.common
                                                  .disconnect
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
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
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      ln = n(385).a,
      cn = Object(h.a)(
        ln,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              "off" == t.userData.is_enable_doctor_gmeet
                ? e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { sm: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "header",
                                    fn: function () {
                                      return [
                                        e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "8",
                                                  lg: "8",
                                                },
                                              },
                                              [
                                                e("h2", [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .googlemeet.googlemeet
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ],
                                null,
                                !1,
                                2611278864
                              ),
                            },
                            [
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row" },
                                [
                                  e("b-col", { attrs: { md: "12" } }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between",
                                        staticStyle: { margin: "30px 15px" },
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticStyle: {
                                              "font-weight": "500",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.googlemeet
                                                  .please_connect_google_meet_service
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-button",
                                          {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            on: {
                                              click: t.handleGoogleMeetConnect,
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "d-flex align-items-center",
                                              },
                                              [
                                                e("img", {
                                                  staticClass: "mr-1",
                                                  attrs: {
                                                    alt: "img",
                                                    src: t.googleSignInImage,
                                                  },
                                                }),
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      t.formTranslation
                                                        .pro_setting
                                                        .connect_with_google
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
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
                  )
                : e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "header",
                                  fn: function () {
                                    return [
                                      e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "8",
                                                lg: "8",
                                              },
                                            },
                                            [
                                              e("h2", [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.googlemeet
                                                      .googlemeet
                                                  )
                                                ),
                                              ]),
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
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12 pb-0" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between flex-wrap gap-3",
                                      staticStyle: { margin: "30px 15px" },
                                    },
                                    [
                                      e(
                                        "p",
                                        {
                                          staticStyle: { "font-weight": "500" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .connected_with_google_meet
                                            )
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-button",
                                        {
                                          staticClass:
                                            "float-right btn btn-sm btn-primary",
                                          attrs: {
                                            type: "button",
                                            variant: "primary",
                                          },
                                          on: { click: t.closeConnection },
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.formTranslation.common
                                                  .disconnect
                                              ) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
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
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      dn = {
        name: "ZoomOAuthConfig",
        components: {},
        data: function () {
          return {
            data: {},
            disconnect: !1,
            zoomSignInImage: "",
            zoom_telemedloading: !1,
            zoomTelemedSubmitted: !1,
            zoom_telemed: {
              video_price: 0,
              telemed_service_id: 0,
              doctor_id: 0,
            },
            zoomConfigData: {
              redirect_url: "",
              client_id: "",
              client_secret: "",
            },
          };
        },
        mounted: function () {
          var t = this;
          this.getUrlParams(),
            ["doctor"].includes(this.getUserRole()) ||
              this.$router.push({ name: "403" }),
            setTimeout(function () {
              t.start();
            }, 2e3),
            (this.zoomSignInImage =
              window.pluginBASEURL + "assets/images/logo-zoom-blue.svg"),
            (this.zoom_telemed = {
              video_price: this.userData.doctor_telemed_price,
              telemed_service_id: this.userData.telemed_service_id,
              doctor_id: this.userData.ID,
            }),
            this.getDoctorZoomOauthConfig();
        },
        methods: {
          getUrlParams: function () {
            var t = new URLSearchParams(window.location.search),
              e = t.get("zoom_status"),
              n = t.get("message1");
            0 == e
              ? displayErrorMessage(n)
              : 1 == e && (this.disconnectMeet(), displayMessage(n));
            var i = new URL(window.location.href);
            i.searchParams.delete("zoom_status"),
              i.searchParams.delete("message1"),
              window.history.replaceState({}, document.title, i.toString());
          },
          getDoctorZoomOauthConfig: function () {
            var t = this,
              e = this;
            Object(s.b)("get_doctor_telemed_config")
              .then(function (n) {
                void 0 !== n.status && !0 === n.data.success
                  ? ((t.zoomConfigData = n.data.data),
                    e.$store.dispatch("userDataModule/fetchUserData"))
                  : displayErrorMessage(n.data.message);
              })
              .catch(function (t) {});
          },
          disconnectMeet: function () {
            var t = this,
              e = this.userData.ID;
            Object(s.b)("diconnect_meet_doctor", { doctor_id: e })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  t.$store.dispatch("userDataModule/fetchUserData", {});
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          connect: function () {
            var t =
              "https://zoom.us/oauth/authorize?client_id=" +
              this.zoomConfigData.client_id +
              "&response_type=code&redirect_uri=" +
              this.zoomConfigData.redirect_url;
            window.location.href = t;
          },
          closeConnectionZoomOauth: function () {
            var t = this;
            Object(s.a)("disconnect_doctor_zoom_oauth", {
              authentication_token: this.zoomOauthAuthorizationCode,
            }).then(function (e) {
              displayMessage(e.data.data.message),
                t.$store.dispatch("userDataModule/fetchUserData");
            });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          userId: function () {
            return this.$store.state.userDataModule.user.ID;
          },
          teleMedStatus: function () {
            return this.$store.state.userDataModule.user.teleMedStatus;
          },
        },
        watch: {
          zoomOauthAuthorizationCode: function (t) {
            t && t.length > 0 && this.setDoctorZoomOauthToken();
          },
        },
      },
      un = Object(h.a)(
        dn,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              "off" == t.userData.is_enable_doctor_zoom_telemed
                ? e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { sm: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "header",
                                    fn: function () {
                                      return [
                                        e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "8",
                                                  lg: "8",
                                                },
                                              },
                                              [
                                                e("h2", [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .zoom_telemed
                                                          .zoom_telemed
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ],
                                null,
                                !1,
                                1570198800
                              ),
                            },
                            [
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row" },
                                [
                                  e("b-col", { attrs: { md: "12" } }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between",
                                        staticStyle: { margin: "30px 15px" },
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticStyle: {
                                              "font-weight": "500",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.zoom_telemed
                                                  .please_connect_zoom_telemed_service
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-button",
                                          {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            on: { click: t.connect },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "d-flex align-items-center",
                                              },
                                              [
                                                e("img", {
                                                  staticClass: "mr-2 small",
                                                  staticStyle: {
                                                    height: "14px",
                                                  },
                                                  attrs: {
                                                    alt: "img",
                                                    src: t.zoomSignInImage,
                                                  },
                                                }),
                                                t._v(
                                                  "\n                                    " +
                                                    t._s(
                                                      t.formTranslation
                                                        .pro_setting
                                                        .connect_with_zoom
                                                    ) +
                                                    "\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
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
                  )
                : e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          e(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "body-class": "p-0",
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "header",
                                  fn: function () {
                                    return [
                                      e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "8",
                                                lg: "8",
                                              },
                                            },
                                            [
                                              e("h2", [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .zoom_telemed.zoom_telemed
                                                  )
                                                ),
                                              ]),
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
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12 pb-0" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between",
                                      staticStyle: { margin: "30px 15px" },
                                    },
                                    [
                                      e(
                                        "p",
                                        {
                                          staticStyle: { "font-weight": "500" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .connected_with_zoom
                                            )
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-button",
                                        {
                                          staticClass:
                                            "float-right btn btn-sm btn-primary",
                                          attrs: {
                                            type: "button",
                                            variant: "primary",
                                          },
                                          on: {
                                            click: t.closeConnectionZoomOauth,
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                                " +
                                              t._s(
                                                t.formTranslation.common
                                                  .disconnect
                                              ) +
                                              "\n                            "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
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
          );
        },
        [],
        !1,
        null,
        "3e73573e",
        null
      ).exports,
      pn = n(386).a,
      hn =
        (n(716),
        Object(h.a)(
          pn,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-overlay",
                  {
                    attrs: {
                      show: 1 != t.userData.addOns.telemed,
                      variant: "white",
                      opacity: t.overlayOpacity,
                    },
                    scopedSlots: t._u([
                      {
                        key: "overlay",
                        fn: function () {
                          return [
                            e("overlay-message", {
                              attrs: { addon_type: "telemed" },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "card-body google-meet-setting",
                        attrs: {
                          "header-tag": "header",
                          "footer-tag": "footer",
                        },
                      },
                      [
                        e("div", { staticClass: "row p-2" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("h2", { staticClass: "" }, [
                              t._v(
                                "\n                        " +
                                  t._s(
                                    t.formTranslation.zoom_telemed.zoom_telemed
                                  ) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("hr", { staticClass: "p-2 m-0" }),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-5" }, [
                                e(
                                  "form",
                                  {
                                    attrs: {
                                      id: "googleCalform",
                                      name: "googleCalform",
                                      novalidate: !0,
                                      enctype: "multipart/form-data",
                                    },
                                    on: {
                                      submit: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.handleCalenderSubmit(!1)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e(
                                              "b-row",
                                              { staticClass: "mt-2 ml-4" },
                                              [
                                                e(
                                                  "b-col",
                                                  {
                                                    attrs: {
                                                      sm: "12",
                                                      md: "12",
                                                      lg: "12",
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group",
                                                      },
                                                      [
                                                        e(
                                                          "b-form-checkbox",
                                                          {
                                                            attrs: {
                                                              size: "md",
                                                              id: "google-meet-configuration",
                                                              name: "google-meet-configuration",
                                                              value: "Yes",
                                                              "unchecked-value":
                                                                "No",
                                                              switch: "",
                                                            },
                                                            on: {
                                                              change: function (
                                                                e
                                                              ) {
                                                                return t.handleCalenderSubmit(
                                                                  !0
                                                                );
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                t.zoomConfigData
                                                                  .enableCal,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.zoomConfigData,
                                                                    "enableCal",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "zoomConfigData.enableCal",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .zoom_telemed
                                                                      .zoom_configuration
                                                                  ) +
                                                                  " "
                                                              ),
                                                            ]),
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
                                      ]),
                                      t._v(" "),
                                      "Yes" == t.zoomConfigData.enableCal
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "row mb-2" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
                                                    },
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
                                                                for: "client_id",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .zoom_telemed
                                                                    .zoom_client_id
                                                                ) +
                                                                  "\n                                                      "
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
                                                                    .zoomConfigData
                                                                    .client_id,
                                                                expression:
                                                                  "zoomConfigData.client_id",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              id: "client_id",
                                                              name: "client_id",
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.zoomConfigData
                                                                  .client_id,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.zoomConfigData,
                                                                    "client_id",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.zoomTelemedSubmitted &&
                                                      !t.$v.zoomConfigData
                                                        .client_id.required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                    " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .zoom_telemed
                                                                      .zoom_client_id_required
                                                                  )
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
                                                { staticClass: "row mb-2" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
                                                    },
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
                                                                for: "client_secret",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .zoom_telemed
                                                                    .zoom_client_secret
                                                                ) +
                                                                  "\n                                                "
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
                                                                    .zoomConfigData
                                                                    .client_secret,
                                                                expression:
                                                                  "zoomConfigData.client_secret",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              id: "client_secret",
                                                              name: "client_secret",
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.zoomConfigData
                                                                  .client_secret,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.zoomConfigData,
                                                                    "client_secret",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.zoomTelemedSubmitted &&
                                                      !t.$v.zoomConfigData
                                                        .client_secret.required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                              " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .zoom_telemed
                                                                      .zoom_client_secret_required
                                                                  )
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
                                                { staticClass: "row mb-2" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
                                                    },
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
                                                                for: "redirect_url",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                    " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .zoom_telemed
                                                                      .redirect_url
                                                                  ) +
                                                                  "\n                                                "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "input-group mb-2",
                                                            },
                                                            [
                                                              e("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      t
                                                                        .zoomConfigData
                                                                        .redirect_url,
                                                                    expression:
                                                                      "zoomConfigData.redirect_url",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "redirect_url",
                                                                  name: "redirect_url",
                                                                  disabled: !0,
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .zoomConfigData
                                                                      .redirect_url,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.zoomConfigData,
                                                                          "redirect_url",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-append",
                                                                },
                                                                [
                                                                  e(
                                                                    "button",
                                                                    {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.click",
                                                                            modifiers:
                                                                              {
                                                                                click:
                                                                                  !0,
                                                                              },
                                                                          },
                                                                        ],
                                                                      staticClass:
                                                                        "input-group-text",
                                                                      attrs: {
                                                                        title:
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .copied,
                                                                        type: "button",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          t.copyRedirectURL,
                                                                      },
                                                                    },
                                                                    [
                                                                      e("i", {
                                                                        staticClass:
                                                                          "fa fa-clone",
                                                                        attrs: {
                                                                          "aria-hidden":
                                                                            "true",
                                                                        },
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.zoomTelemedSubmitted &&
                                                      !t.$v.zoomConfigData
                                                        .redirect_url.required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .zoom_telemed
                                                                    .redirect_url_required
                                                                )
                                                              ),
                                                            ]
                                                          )
                                                        : t._e(),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                    t._v(" "),
                                    "Yes" == t.zoomConfigData.enableCal
                                      ? e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end",
                                                },
                                                [
                                                  t.loading
                                                    ? e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
                                                        },
                                                        [
                                                          e("i", {
                                                            staticClass:
                                                              "fa fa-spinner fa-spin",
                                                          }),
                                                          t._v(
                                                            "\n                                            " +
                                                              t._s(
                                                                t.$t(
                                                                  "common.loading"
                                                                )
                                                              ) +
                                                              "\n                                          "
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
                                                            id: "btn-google-submit",
                                                          },
                                                        },
                                                        [
                                                          e("i", {
                                                            staticClass:
                                                              "fa fa-save",
                                                          }),
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.save
                                                              ) +
                                                              "\n                                            "
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
                                ),
                              ]),
                              t._v(" "),
                              "Yes" == t.zoomConfigData.enableCal
                                ? e(
                                    "div",
                                    { staticClass: "col-md-7 mt-3" },
                                    [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e(
                                            "h4",
                                            {
                                              staticClass: "text-primary mb-3",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation
                                                      .zoom_telemed
                                                      .guide_to_setup_zoom
                                                  ) +
                                                  "\n                                    "
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "b-list-group",
                                        [
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .zoom_step1
                                              ) + " "
                                            ),
                                            e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://marketplace.zoom.us/",
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .zoom_market_place_portal
                                                    )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .zoom_step2
                                              ) + " "
                                            ),
                                            e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://marketplace.zoom.us/develop/create",
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .create_app
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .zoom_oauth_step3
                                              )
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .zoom_oauth_step4
                                              ) +
                                                "\n                                "
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .zoom_oauth_step5
                                              ) +
                                                "\n                                "
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "b-row",
                                      { staticClass: "mt-2 ml-4" },
                                      [
                                        e(
                                          "b-col",
                                          {
                                            attrs: {
                                              sm: "12",
                                              md: "12",
                                              lg: "12",
                                            },
                                          },
                                          [
                                            e(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                e(
                                                  "b-form-checkbox",
                                                  {
                                                    attrs: {
                                                      size: "md",
                                                      id: "kc_server_to_server_oauth",
                                                      name: "kc_server_to_server_oauth",
                                                      value: "Yes",
                                                      "unchecked-value": "No",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        return t.handleServerToServerOauthSubmit();
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        t.enableServerToServerOauth,
                                                      callback: function (e) {
                                                        t.enableServerToServerOauth =
                                                          e;
                                                      },
                                                      expression:
                                                        "enableServerToServerOauth",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .zoom_telemed
                                                              .zoom_telemed_server_to_server_oauth
                                                          ) +
                                                          " "
                                                      ),
                                                    ]),
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
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
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
          "a7753ebc",
          null
        ).exports),
      fn = n(387).a,
      bn =
        (Object(h.a)(
          fn,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                "off" == t.userData.is_enable_doctor_zoom_telemed
                  ? e(
                      "b-row",
                      [
                        e(
                          "b-col",
                          { attrs: { sm: "12" } },
                          [
                            e(
                              "b-card",
                              {
                                staticClass: "p-0 shadow",
                                attrs: {
                                  "body-class": "p-0",
                                  "header-tag": "header",
                                  "footer-tag": "footer",
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "header",
                                      fn: function () {
                                        return [
                                          e(
                                            "b-row",
                                            [
                                              e(
                                                "b-col",
                                                {
                                                  attrs: {
                                                    sm: "12",
                                                    md: "8",
                                                    lg: "8",
                                                  },
                                                },
                                                [
                                                  e("h2", [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .zoom_telemed
                                                            .zoom_telemed
                                                        )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !1,
                                  1570198800
                                ),
                              },
                              [
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "row" },
                                  [
                                    e("b-col", { attrs: { md: "12" } }, [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between",
                                          staticStyle: { margin: "30px 15px" },
                                        },
                                        [
                                          e(
                                            "p",
                                            {
                                              staticStyle: {
                                                "font-weight": "500",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.zoom_telemed
                                                    .please_connect_zoom_telemed_service
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.DoctorConnectButton
                                            ? e(
                                                "b-button",
                                                {
                                                  staticClass:
                                                    "float-right btn btn-sm btn-primary",
                                                  attrs: {
                                                    type: "button",
                                                    variant: "primary",
                                                  },
                                                  on: { click: t.connect },
                                                },
                                                [
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex align-items-center",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                    " +
                                                          t._s(
                                                            t.formTranslation
                                                              .pro_setting
                                                              .connect_with_zoom
                                                          ) +
                                                          "\n                                    "
                                                      ),
                                                      e("img", {
                                                        staticClass: "ml-1",
                                                        attrs: {
                                                          alt: "img",
                                                          height: "10",
                                                          src: t.zoomSignInImage,
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]),
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
                    )
                  : e(
                      "b-row",
                      [
                        e(
                          "b-col",
                          { attrs: { md: "12" } },
                          [
                            e(
                              "b-card",
                              {
                                staticClass: "p-0 shadow",
                                attrs: {
                                  "body-class": "p-0",
                                  "header-tag": "header",
                                  "footer-tag": "footer",
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "header",
                                    fn: function () {
                                      return [
                                        e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "8",
                                                  lg: "8",
                                                },
                                              },
                                              [
                                                e("h2", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .zoom_telemed
                                                        .zoom_telemed
                                                    )
                                                  ),
                                                ]),
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
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12 pb-0" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between",
                                        staticStyle: { margin: "30px 15px" },
                                      },
                                      [
                                        e(
                                          "p",
                                          {
                                            staticStyle: {
                                              "font-weight": "500",
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .connected_with_zoom
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-button",
                                          {
                                            staticClass:
                                              "float-right btn btn-sm btn-primary",
                                            attrs: {
                                              type: "button",
                                              variant: "primary",
                                            },
                                            on: { click: t.disconnect },
                                          },
                                          [
                                            t._v(
                                              "\n                                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .disconnect
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
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
            );
          },
          [],
          !1,
          null,
          "a26439b8",
          null
        ).exports,
        n(388).a),
      mn =
        (Object(h.a)(
          bn,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-overlay",
                  {
                    attrs: {
                      show: 1 != t.userData.addOns.telemed,
                      variant: "white",
                      opacity: t.overlayOpacity,
                    },
                    scopedSlots: t._u([
                      {
                        key: "overlay",
                        fn: function () {
                          return [
                            e("overlay-message", {
                              attrs: { addon_type: "zoom_telemed" },
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "card-body google-meet-setting",
                        attrs: {
                          "header-tag": "header",
                          "footer-tag": "footer",
                        },
                      },
                      [
                        e("div", { staticClass: "row p-2" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("h2", { staticClass: "" }, [
                              t._v(
                                "\n                        " +
                                  t._s(
                                    t.formTranslation.serverToserverAuth
                                      .server_to_server_auth
                                  ) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("hr", { staticClass: "p-2 m-0" }),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-5" }, [
                                e(
                                  "form",
                                  {
                                    attrs: {
                                      id: "googleCalform",
                                      name: "googleCalform",
                                      novalidate: !0,
                                      enctype: "multipart/form-data",
                                    },
                                    on: {
                                      submit: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.handleserverOauth.apply(
                                            null,
                                            arguments
                                          )
                                        );
                                      },
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            e(
                                              "b-row",
                                              { staticClass: "mt-2 ml-4" },
                                              [
                                                e(
                                                  "b-col",
                                                  {
                                                    attrs: {
                                                      sm: "12",
                                                      md: "12",
                                                      lg: "12",
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group",
                                                      },
                                                      [
                                                        e(
                                                          "b-form-checkbox",
                                                          {
                                                            attrs: {
                                                              size: "md",
                                                              id: "server-oauth-configuration",
                                                              switch: "",
                                                            },
                                                            model: {
                                                              value:
                                                                t
                                                                  .serverOauthConfig
                                                                  .enableServerOAuth,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.serverOauthConfig,
                                                                    "enableServerOAuth",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "serverOauthConfig.enableServerOAuth",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .serverToserverAuth
                                                                    .server_to_server_auth_configuration
                                                                )
                                                              ),
                                                            ]),
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
                                      ]),
                                      t._v(" "),
                                      t.serverOauthConfig.enableServerOAuth
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e("div", { staticClass: "row" }, [
                                                e(
                                                  "div",
                                                  { staticClass: "col-md-12" },
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
                                                              for: "client_id",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .serverToserverAuth
                                                                  .client_id_label
                                                              ) +
                                                                "\n                                                    "
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
                                                                  .serverOauthConfig
                                                                  .client_id,
                                                              expression:
                                                                "serverOauthConfig.client_id",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "text",
                                                            id: "client_id",
                                                            name: "client_id",
                                                            placeholder:
                                                              t.formTranslation
                                                                .serverToserverAuth
                                                                .client_id,
                                                          },
                                                          domProps: {
                                                            value:
                                                              t
                                                                .serverOauthConfig
                                                                .client_id,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.serverOauthConfig,
                                                                  "client_id",
                                                                  e.target.value
                                                                );
                                                            },
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t.ZoomServerOAuthSubmitted &&
                                                    !t.$v.serverOauthConfig
                                                      .client_id_required
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "invalid-feedback",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                    " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .serverToserverAuth
                                                                    .client_id_required
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "col-md-12" },
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
                                                              for: "client_secret",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .serverToserverAuth
                                                                  .client_secret_label
                                                              ) +
                                                                "\n                                                    "
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
                                                                  .serverOauthConfig
                                                                  .client_secret,
                                                              expression:
                                                                "serverOauthConfig.client_secret",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "text",
                                                            id: "client_secret",
                                                            name: "client_secret",
                                                            placeholder:
                                                              t.formTranslation
                                                                .serverToserverAuth
                                                                .client_secret,
                                                          },
                                                          domProps: {
                                                            value:
                                                              t
                                                                .serverOauthConfig
                                                                .client_secret,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.serverOauthConfig,
                                                                  "client_secret",
                                                                  e.target.value
                                                                );
                                                            },
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t.ZoomServerOAuthSubmitted &&
                                                    !t.$v.serverOauthConfig
                                                      .client_secret_required
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "invalid-feedback",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                    " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .serverToserverAuth
                                                                    .client_secret_required
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "col-md-12" },
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
                                                              for: "redirect_url",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .serverToserverAuth
                                                                  .account_id_label
                                                              ) +
                                                                "\n                                                    "
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
                                                                  .serverOauthConfig
                                                                  .account_id,
                                                              expression:
                                                                "serverOauthConfig.account_id",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "text",
                                                            id: "redirect_url",
                                                            name: "redirect_url",
                                                            placeholder:
                                                              t.formTranslation
                                                                .serverToserverAuth
                                                                .account_id,
                                                          },
                                                          domProps: {
                                                            value:
                                                              t
                                                                .serverOauthConfig
                                                                .account_id,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.serverOauthConfig,
                                                                  "account_id",
                                                                  e.target.value
                                                                );
                                                            },
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t.ZoomServerOAuthSubmitted &&
                                                    !t.$v.serverOauthConfig
                                                      .account_id_required
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "invalid-feedback",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .serverToserverAuth
                                                                  .account_id_required
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                    t._v(" "),
                                    t.serverOauthConfig.enableServerOAuth
                                      ? e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-between",
                                                },
                                                [
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: {
                                                        type: "submit",
                                                        id: "btn-google-submit",
                                                      },
                                                    },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "fa fa-save",
                                                      }),
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common.save
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t.connectButton
                                                    ? e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
                                                          attrs: {
                                                            type: "button",
                                                            id: "btn-google-submit",
                                                          },
                                                          on: {
                                                            click:
                                                              t.connectServerOauth,
                                                          },
                                                        },
                                                        [
                                                          e("i", {
                                                            staticClass:
                                                              "fa fa-save",
                                                          }),
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .pro_setting
                                                                  .connect_with_zoom
                                                              ) +
                                                              "\n                                                "
                                                          ),
                                                          e("img", {
                                                            staticClass: "ml-1",
                                                            attrs: {
                                                              alt: "img",
                                                              height: "10",
                                                              src: t.zoomSignInImage,
                                                            },
                                                          }),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                      : t._e(),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              t.serverOauthConfig.enableServerOAuth
                                ? e(
                                    "div",
                                    { staticClass: "col-md-7" },
                                    [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e(
                                            "h4",
                                            {
                                              staticClass: "text-primary mb-3",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .zoom_configuration_guide
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "b-list-group",
                                        [
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation
                                                  .serverToserverAuth.zoom_step1
                                              ) + " : "
                                            ),
                                            e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://marketplace.zoom.us/",
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .serverToserverAuth
                                                        .zoom_market_place_portal
                                                    )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              t._s(
                                                t.formTranslation
                                                  .serverToserverAuth.zoom_step2
                                              ) +
                                                "\n                                    "
                                            ),
                                            e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://marketplace.zoom.us/develop/create",
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .serverToserverAuth
                                                      .create_app
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              "\n                                    " +
                                                t._s(
                                                  t.formTranslation
                                                    .serverToserverAuth
                                                    .zoom_step3
                                                ) +
                                                "\n                                "
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              "\n                                    " +
                                                t._s(
                                                  t.formTranslation
                                                    .serverToserverAuth
                                                    .zoom_step4
                                                ) +
                                                "\n                                "
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("b-list-group-item", [
                                            t._v(
                                              "\n                                    " +
                                                t._s(
                                                  t.formTranslation
                                                    .serverToserverAuth
                                                    .zoom_step5
                                                ) +
                                                "\n                                "
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ]),
                          ]),
                        ]),
                      ]
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
          "62e98626",
          null
        ).exports,
        {
          data: function () {
            return {
              googleEventList: [],
              eventTitle: "",
              request_status: "off",
              loading: !1,
              templateSaveRequest: { ID: 0, post_content: "" },
              formLoader: !0,
              customToolbar: [
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
              ],
            };
          },
          mounted: function () {
            this.init(), this.getModule();
          },
          methods: {
            init: function () {
              this.getGoogleEventTemplate();
            },
            getGoogleEventTemplate: function () {
              var t = this;
              (this.formLoader = !0),
                Object(s.a)("get_google_event_template", {})
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.googleEventList = e.data.data),
                      (t.formLoader = !1);
                  })
                  .catch(function (e) {
                    t.formLoader = !1;
                  });
            },
            saveGoogleEventTemplate: function () {
              var t = this;
              1 == this.userData.addOns.kiviPro &&
                ((this.loading = !0),
                Object(s.b)("save_google_event_template", {
                  data: this.googleEventList,
                })
                  .then(function (e) {
                    void 0 !== e.data.status && !0 === e.data.status
                      ? (t.getGoogleEventTemplate(),
                        displayMessage(e.data.message))
                      : displayErrorMessage(e.data.message),
                      (t.loading = !1);
                  })
                  .catch(function (e) {
                    (t.loading = !1),
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
          watch: {},
          computed: {
            userData: function () {
              return this.$store.state.userDataModule.user;
            },
          },
        }),
      gn = Object(h.a)(
        mn,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.formLoader
                ? e(
                    "div",
                    { staticClass: "page-loader-section" },
                    [e("loader-component-2")],
                    1
                  )
                : e(
                    "b-row",
                    [
                      e(
                        "b-col",
                        { attrs: { sm: "12", md: "12", lg: "12" } },
                        [
                          e(
                            "b-overlay",
                            {
                              attrs: {
                                show: 1 != t.userData.addOns.kiviPro,
                                variant: "white",
                                opacity: t.overlayOpacity,
                              },
                              scopedSlots: t._u([
                                {
                                  key: "overlay",
                                  fn: function () {
                                    return [
                                      e("overlay-message", {
                                        attrs: { addon_type: "pro" },
                                      }),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ]),
                            },
                            [
                              t._v(" "),
                              e(
                                "form",
                                {
                                  attrs: {
                                    id: "doctorDataForm",
                                    novalidate: !0,
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
                                      scopedSlots: t._u([
                                        {
                                          key: "header",
                                          fn: function () {
                                            return [
                                              e(
                                                "b-row",
                                                [
                                                  e(
                                                    "b-col",
                                                    {
                                                      attrs: {
                                                        sm: "8",
                                                        md: "8",
                                                        lg: "8",
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "h2",
                                                        { staticClass: "mb-0" },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common
                                                                .google_event_template
                                                            ) + " "
                                                          ),
                                                          "off" ==
                                                          t.request_status
                                                            ? e(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href: "https://apps.iqonic.design/docs/product/kivicare/google-calendar/google-event-template/",
                                                                    target:
                                                                      "_blank",
                                                                  },
                                                                },
                                                                [
                                                                  e("i", {
                                                                    staticClass:
                                                                      "fa fa-question-circle",
                                                                  }),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
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
                                      t._v(" "),
                                      t._l(t.googleEventList, function (n, i) {
                                        return e(
                                          "div",
                                          { key: i },
                                          [
                                            e(
                                              "b-collapse",
                                              {
                                                attrs: {
                                                  id: "accordion",
                                                  visible: !0,
                                                  accordion: "my-accordion",
                                                  role: "tabpanel",
                                                },
                                              },
                                              [
                                                e("b-card-body", [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "form-group",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .google_event
                                                                .google_event_title
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
                                                            value: n.post_title,
                                                            expression:
                                                              "item.post_title",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "example-color-input",
                                                        },
                                                        domProps: {
                                                          value: n.post_title,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                n,
                                                                "post_title",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "form-group",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .google_event
                                                                .google_event_desc
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e("vue-editor", {
                                                        attrs: {
                                                          editorToolbar:
                                                            t.customToolbar,
                                                        },
                                                        model: {
                                                          value: n.post_content,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              n,
                                                              "post_content",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "item.post_content",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        );
                                      }),
                                      t._v(" "),
                                      e(
                                        "b-row",
                                        { staticClass: "mt-2" },
                                        [
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "12",
                                                lg: "12",
                                              },
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end",
                                                },
                                                [
                                                  t.loading
                                                    ? e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
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
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .loading
                                                              ) +
                                                              "\n                "
                                                          ),
                                                        ]
                                                      )
                                                    : e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary mr-1",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click:
                                                              t.saveGoogleEventTemplate,
                                                          },
                                                        },
                                                        [
                                                          e("i", {
                                                            staticClass:
                                                              "fa fa-save",
                                                          }),
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.save
                                                              ) +
                                                              "\n                "
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
                                    2
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
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      vn = n(389).a,
      _n = Object(h.a)(
        vn,
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
                  e(
                    "b-overlay",
                    {
                      attrs: {
                        show: 1 != t.userData.addOns.kiviPro,
                        variant: "white",
                        opacity: t.overlayOpacity,
                      },
                      scopedSlots: t._u([
                        {
                          key: "overlay",
                          fn: function () {
                            return [
                              e("overlay-message", {
                                attrs: { addon_type: "pro" },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      t._v(" "),
                      e(
                        "b-card",
                        {
                          staticClass: "p-0 shadow",
                          attrs: {
                            "body-class": "p-0",
                            "header-tag": "header",
                            "footer-tag": "footer",
                          },
                          scopedSlots: t._u([
                            {
                              key: "header",
                              fn: function () {
                                return [
                                  e(
                                    "b-row",
                                    [
                                      e(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h3", { staticClass: "mb-0" }, [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .tax_list
                                                ) +
                                                " "
                                            ),
                                          ]),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.kcCheckPermission("tax_add")
                                        ? e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "4",
                                                lg: "4",
                                              },
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end",
                                                },
                                                [
                                                  t._e(),
                                                  t._v(" "),
                                                  e(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: {
                                                        to: {
                                                          name: "tax.create",
                                                        },
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
                                                            t.formTranslation
                                                              .common.new_tax
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        : t._e(),
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
                          t._v(" "),
                          t.userData.addOns.kiviPro &&
                          t.kcCheckPermission("tax_add") &&
                          t.kivicareCompareVersion(
                            t.requireProVersion,
                            t.userData.pro_version
                          )
                            ? e("module-data-import", {
                                ref: "module_data_import",
                                attrs: {
                                  required_data: [],
                                  module_name: t.formTranslation.common.clinic,
                                  module_type: "clinic",
                                },
                                on: { reloadList: t.getTaxData },
                              })
                            : t._e(),
                          t._v(" "),
                          e(
                            "b-row",
                            [
                              e(
                                "b-col",
                                { attrs: { sm: "12", md: "12", lg: "12" } },
                                [
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isLoading,
                                          expression: "isLoading",
                                        },
                                      ],
                                      staticClass: "page-loader-section",
                                    },
                                    [e("loader-component-2")],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { attrs: { id: "taxPrint" } },
                                    [
                                      e(
                                        "vue-good-table",
                                        {
                                          ref: "dataTable",
                                          attrs: {
                                            columns: t.taxList.column,
                                            rows: t.taxList.data,
                                            mode: "remote",
                                            "search-options": {
                                              enabled: !0,
                                              placeholder:
                                                t.formTranslation.common
                                                  .search_tax_data_global_placeholder,
                                            },
                                            totalRows: t.totalRows,
                                            "pagination-options": {
                                              enabled: !0,
                                              mode: "pages",
                                            },
                                            "select-options": {
                                              enabled: !0,
                                              selectOnCheckboxOnly: !0,
                                              selectionInfoClass:
                                                "text-primary bg-white",
                                              selectionText:
                                                t.formTranslation.common
                                                  .rows_selected,
                                              clearSelectionText:
                                                t.formTranslation.common.clear,
                                              disableSelectInfo: !1,
                                              selectAllByGroup: !0,
                                            },
                                            styleClass: "vgt-table striped",
                                            compactMode: "",
                                          },
                                          on: {
                                            "on-sort-change": t.onSortChange,
                                            "on-column-filter":
                                              t.onColumnFilter,
                                            "on-page-change": t.onPageChange,
                                            "on-per-page-change":
                                              t.onPerPageChange,
                                            "on-search": t.globalFilter,
                                            "on-selected-rows-change":
                                              function (e) {
                                                t.globalCheckboxApplyData.data =
                                                  e;
                                              },
                                          },
                                          scopedSlots: t._u([
                                            {
                                              key: "column-filter",
                                              fn: function (n) {
                                                var i = n.column,
                                                  r = n.updateFilters;
                                                return [
                                                  "module_type" === i.field
                                                    ? e("div", [
                                                        e(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.serverParams
                                                                    .columnFilters
                                                                    .module_type,
                                                                expression:
                                                                  "serverParams.columnFilters.module_type",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "vgt-select",
                                                            on: {
                                                              change: [
                                                                function (e) {
                                                                  var n =
                                                                    Array.prototype.filter
                                                                      .call(
                                                                        e.target
                                                                          .options,
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          return t.selected;
                                                                        }
                                                                      )
                                                                      .map(
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          return "_value" in
                                                                            t
                                                                            ? t._value
                                                                            : t.value;
                                                                        }
                                                                      );
                                                                  t.$set(
                                                                    t
                                                                      .serverParams
                                                                      .columnFilters,
                                                                    "module_type",
                                                                    e.target
                                                                      .multiple
                                                                      ? n
                                                                      : n[0]
                                                                  );
                                                                },
                                                                function (e) {
                                                                  return r(
                                                                    i,
                                                                    t
                                                                      .serverParams
                                                                      .columnFilters
                                                                      .module_type
                                                                  );
                                                                },
                                                              ],
                                                            },
                                                          },
                                                          [
                                                            e(
                                                              "option",
                                                              {
                                                                attrs: {
                                                                  value: "",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    i
                                                                      .filterOptions
                                                                      .placeholder
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            t._l(
                                                              t.module_types,
                                                              function (n, i) {
                                                                return e(
                                                                  "option",
                                                                  {
                                                                    key: i,
                                                                    domProps: {
                                                                      value:
                                                                        n.label,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(
                                                                        n.label
                                                                      ) +
                                                                        "\n                      "
                                                                    ),
                                                                  ]
                                                                );
                                                              }
                                                            ),
                                                          ],
                                                          2
                                                        ),
                                                      ])
                                                    : t._e(),
                                                ];
                                              },
                                            },
                                            {
                                              key: "table-row",
                                              fn: function (n) {
                                                return [
                                                  "status" == n.column.field
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass: "d-flex",
                                                        },
                                                        [
                                                          t.kcCheckPermission(
                                                            "tax_edit"
                                                          )
                                                            ? e(
                                                                "b-form-checkbox",
                                                                {
                                                                  attrs: {
                                                                    name: "check-button",
                                                                    switch: "",
                                                                    value: "1",
                                                                    size: "lg",
                                                                    "unchecked-value":
                                                                      "0",
                                                                    id:
                                                                      "status_change_" +
                                                                      n.row.id,
                                                                  },
                                                                  on: {
                                                                    change:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.changeModuleValueStatus(
                                                                          {
                                                                            module_type:
                                                                              "tax",
                                                                            id: n
                                                                              .row
                                                                              .id,
                                                                            value:
                                                                              n
                                                                                .row
                                                                                .status,
                                                                          }
                                                                        );
                                                                      },
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      n.row
                                                                        .status,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          n.row,
                                                                          "status",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "props.row.status",
                                                                  },
                                                                }
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          "1" == n.row.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success",
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .active
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          "0" == n.row.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .inactive
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ],
                                                        1
                                                      )
                                                    : "actions" ==
                                                      n.column.field
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          (t.kcCheckPermission(
                                                            "tax_edit"
                                                          ) &&
                                                            "administrator" ===
                                                              t.getUserRole()) ||
                                                          ("clinic_admin" ===
                                                            t.getUserRole() &&
                                                            n.row.added_by ==
                                                              t.userData.ID)
                                                            ? e(
                                                                "router-link",
                                                                {
                                                                  directives: [
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
                                                                    "btn btn-sm btn-outline-primary",
                                                                  attrs: {
                                                                    to: {
                                                                      name: "tax.edit",
                                                                      params: {
                                                                        id: n
                                                                          .row
                                                                          .id,
                                                                      },
                                                                    },
                                                                    title:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .edit,
                                                                  },
                                                                },
                                                                [
                                                                  e("i", {
                                                                    staticClass:
                                                                      "fa fa-pen-alt",
                                                                  }),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          (t.kcCheckPermission(
                                                            "tax_delete"
                                                          ) &&
                                                            "administrator" ===
                                                              t.getUserRole()) ||
                                                          ("clinic_admin" ===
                                                            t.getUserRole() &&
                                                            n.row.added_by ==
                                                              t.userData.ID)
                                                            ? e(
                                                                "button",
                                                                {
                                                                  directives: [
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
                                                                    "btn btn-outline-danger btn-sm",
                                                                  attrs: {
                                                                    id:
                                                                      "user_delete_" +
                                                                      n.row.id,
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
                                                                        return t.deleteTaxData(
                                                                          n.row
                                                                            .id
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
                                                      )
                                                    : "tax_rate" ==
                                                      n.column.field
                                                    ? e("div", {
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            t.printTaxRate(
                                                              n.formattedRow[
                                                                n.column.field
                                                              ]
                                                            )
                                                          ),
                                                        },
                                                      })
                                                    : e("div", [
                                                        t._v(
                                                          "\n                    " +
                                                            t._s(
                                                              n.formattedRow[
                                                                n.column.field
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
                                          e(
                                            "div",
                                            {
                                              staticClass: "text-center",
                                              attrs: { slot: "emptystate" },
                                              slot: "emptystate",
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .no_data_found
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t._v(" "),
                                          e(
                                            "div",
                                            {
                                              attrs: { slot: "table-actions" },
                                              slot: "table-actions",
                                            },
                                            [
                                              t.kcCheckPermission("tax_export")
                                                ? e("module-data-export", {
                                                    attrs: {
                                                      module_data:
                                                        t.taxList.data,
                                                      module_name:
                                                        t.formTranslation.clinic
                                                          .clinic_list,
                                                      module_type: "tax",
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                          t._v(" "),
                                          e(
                                            "div",
                                            {
                                              attrs: {
                                                slot: "selected-row-actions",
                                              },
                                              slot: "selected-row-actions",
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end align-items-center",
                                                },
                                                [
                                                  e(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t
                                                              .globalCheckboxApplyData
                                                              .action_perform,
                                                          expression:
                                                            "globalCheckboxApplyData.action_perform",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control form-control-sm",
                                                      on: {
                                                        change: function (e) {
                                                          var n =
                                                            Array.prototype.filter
                                                              .call(
                                                                e.target
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
                                                          t.$set(
                                                            t.globalCheckboxApplyData,
                                                            "action_perform",
                                                            e.target.multiple
                                                              ? n
                                                              : n[0]
                                                          );
                                                        },
                                                      },
                                                    },
                                                    t._l(
                                                      t.globalCheckboxApplyDataActions,
                                                      function (n, i) {
                                                        return e(
                                                          "option",
                                                          {
                                                            domProps: {
                                                              value: n.value,
                                                            },
                                                          },
                                                          [t._v(t._s(n.label))]
                                                        );
                                                      }
                                                    ),
                                                    0
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "ml-2 btn btn-sm btn-primary",
                                                      on: {
                                                        click: t.confirmDelete,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                      " +
                                                          t._s(
                                                            t.formTranslation
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
        "79a891c3",
        null
      ).exports,
      yn = {
        data: function () {
          return {
            taxData: {},
            loading: !1,
            submitted: !1,
            cardTitle: "Add patient",
            clinics: [],
            doctors: [],
            services: [],
            formLoader: !1,
            clinicMultiselectLoader: !0,
            doctorMultiselectLoader: !0,
            serviceMultiselectLoader: !0,
          };
        },
        mounted: function () {
          (this.cardTitle = this.formTranslation.common.add_tax),
            (this.taxData = this.defaultTaxData()),
            this.init();
        },
        validations: {
          taxData: {
            name: { required: l.required },
            tax_type: { required: l.required },
            tax_value: {
              required: l.required,
              decimal: l.decimal,
              minValue: Object(l.minValue)(0),
            },
            status: { required: l.required },
          },
        },
        methods: {
          init: function () {
            var t = this;
            this.$route.params.id
              ? ((this.cardTitle = "Edit tax"),
                (this.formLoader = !0),
                Object(s.a)("tax_edit", { id: this.$route.params.id })
                  .then(function (e) {
                    (t.formLoader = !1),
                      void 0 !== e.data.status &&
                        !0 === e.data.status &&
                        (t.taxData = e.data.data),
                      t.getClinics(!0),
                      t.getDoctors(!0),
                      t.getServices(!0);
                  })
                  .catch(function (e) {
                    (t.formLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.widgets.record_not_found
                      ),
                      t.getClinics(!0),
                      t.getDoctors(!0),
                      t.getServices(!0);
                  }))
              : (this.getClinics(), this.getDoctors(), this.getServices());
          },
          defaultTaxData: function () {
            return {
              name: "",
              tax_type: "fixed",
              tax_value: "",
              clinic_id:
                "clinic_admin" === this.getUserRole()
                  ? { id: this.userData.user_clinic_id }
                  : "",
              doctor_id: "",
              service_id: "",
              status: 1,
            };
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$nextTick(function () {
                null !== document.querySelector(".is-invalid") &&
                void 0 !== document.querySelector(".is-invalid")
                  ? document
                      .querySelector(".is-invalid")
                      .scrollIntoView({ block: "center", behavior: "smooth" })
                  : null !== document.querySelector(".invalid-feedback") &&
                    void 0 !== document.querySelector(".invalid-feedback") &&
                    document
                      .querySelector(".invalid-feedback")
                      .scrollIntoView({ block: "center", behavior: "smooth" });
              }),
              this.$v.taxData.$invalid
                ? (this.loading = !1)
                : Object(s.b)("tax_save", this.taxData)
                    .then(function (e) {
                      (t.loading = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            t.$router.push({ name: "tax" }))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          getServices: function (t) {
            var e = this;
            this.serviceMultiselectLoader = !0;
            var n = 0;
            this.taxData.doctor_id &&
              (n = this.taxData.doctor_id.id
                ? this.taxData.doctor_id.id
                : this.taxData.doctor_id
                    .map(function (t, e) {
                      return t.id;
                    })
                    .join()),
              Object(s.a)("service_list", {
                clinic_id:
                  this.taxData.clinic_id && this.taxData.clinic_id.id
                    ? this.taxData.clinic_id.id
                    : 0,
                doctor_id: n,
              })
                .then(function (n) {
                  (e.serviceMultiselectLoader = !1),
                    void 0 !== n.data.status && !0 === n.data.status
                      ? ((n.data.data = n.data.data.map(function (t, e) {
                          return (t.id = t.service_id), (t.label = t.name), t;
                        })),
                        t || (e.taxData.service_id = null),
                        (e.services = n.data.data))
                      : (e.services = []);
                })
                .catch(function (t) {
                  (e.serviceMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getDoctors: function (t) {
            var e = this;
            (this.doctorMultiselectLoader = !0),
              Object(s.a)("get_static_data", {
                data_type: "get_users_by_clinic",
                clinic_id:
                  this.taxData.clinic_id && this.taxData.clinic_id.id
                    ? this.taxData.clinic_id.id
                    : "",
                type: "doctor",
              })
                .then(function (n) {
                  (e.doctorMultiselectLoader = !1),
                    void 0 !== n.data.status &&
                      !0 === n.data.status &&
                      (t || (e.taxData.doctor_id = null),
                      (e.doctors = n.data.data));
                })
                .catch(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          getClinics: function (t) {
            var e = this;
            (this.clinicMultiselectLoader = !0),
              Object(s.a)("get_static_data", { data_type: "clinic_list" })
                .then(function (t) {
                  (e.clinicMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (e.clinics = t.data.data);
                })
                .catch(function (t) {
                  (e.clinicMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          doctorChange: function () {
            this.getServices();
          },
          clinicChange: function () {
            this.getDoctors(), this.getServices();
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      Mn = Object(h.a)(
        yn,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              t.formLoader
                ? e(
                    "div",
                    { staticClass: "page-loader-section" },
                    [e("loader-component-2")],
                    1
                  )
                : e("b-col", { attrs: { sm: "12" } }, [
                    e(
                      "form",
                      {
                        attrs: { id: "taxDataForm", novalidate: !0 },
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
                            scopedSlots: t._u([
                              {
                                key: "header",
                                fn: function () {
                                  return [
                                    e(
                                      "b-row",
                                      [
                                        e(
                                          "b-col",
                                          {
                                            attrs: {
                                              sm: "12",
                                              md: "8",
                                              lg: "8",
                                            },
                                          },
                                          [
                                            e("h3", { staticClass: "mb-0" }, [
                                              t._v(t._s(t.cardTitle)),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.kcCheckPermission("tax_list")
                                          ? e(
                                              "b-col",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "4",
                                                  lg: "4",
                                                },
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-end",
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-primary",
                                                        attrs: {
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.$router.go(
                                                              -1
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-angle-double-left",
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common.back
                                                            ) +
                                                            "\n                "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
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
                                    e("div", { staticClass: "row" }, [
                                      e(
                                        "div",
                                        { staticClass: "col-md-12 p-0" },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-end",
                                            },
                                            [
                                              t.loading
                                                ? e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
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
                                                            t.formTranslation
                                                              .common.loading
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ]
                                                  )
                                                : e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: { type: "submit" },
                                                    },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "fa fa-save",
                                                      }),
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .patient.save_btn
                                                          ) +
                                                          " "
                                                      ),
                                                    ]
                                                  ),
                                              t._v(" "),
                                              e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-primary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function (e) {
                                                      return t.$router.go(-1);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .cancel
                                                      )
                                                  ),
                                                ]
                                              ),
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
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "name" },
                                    },
                                    [
                                      t._v(
                                        t._s(t.formTranslation.common.name) +
                                          "\n                "
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
                                        value: t.taxData.name,
                                        expression: "taxData.name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: "name",
                                      name: "name",
                                      type: "text",
                                    },
                                    domProps: { value: t.taxData.name },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.taxData,
                                            "name",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted && !t.$v.taxData.name.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .name_required
                                            ) + "\n              "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-4" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "tax_rate" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.tax_rate
                                          ) + "\n                "
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
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.taxData.tax_value,
                                              expression: "taxData.tax_value",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "tax_rate",
                                            name: "tax_rate",
                                            type: "number",
                                          },
                                          domProps: {
                                            value: t.taxData.tax_value,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.taxData,
                                                  "tax_value",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        e("b-input-group-append", [
                                          e(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.taxData.tax_type,
                                                  expression:
                                                    "taxData.tax_type",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              on: {
                                                change: function (e) {
                                                  var n = Array.prototype.filter
                                                    .call(
                                                      e.target.options,
                                                      function (t) {
                                                        return t.selected;
                                                      }
                                                    )
                                                    .map(function (t) {
                                                      return "_value" in t
                                                        ? t._value
                                                        : t.value;
                                                    });
                                                  t.$set(
                                                    t.taxData,
                                                    "tax_type",
                                                    e.target.multiple ? n : n[0]
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e(
                                                "option",
                                                {
                                                  attrs: {
                                                    value: "percentage",
                                                  },
                                                },
                                                [t._v(t._s("%"))]
                                              ),
                                              t._v(" "),
                                              e(
                                                "option",
                                                { attrs: { value: "fixed" } },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.userData
                                                        .clinic_currency_detail &&
                                                        t.userData
                                                          .clinic_currency_detail
                                                          .prefix
                                                        ? t.userData
                                                            .clinic_currency_detail
                                                            .prefix
                                                        : ""
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.taxData.tax_type.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .tax_rate +
                                                  " " +
                                                  t.formTranslation.common
                                                    .required
                                              ) + "\n              "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.taxData.tax_value.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .tax_rate +
                                                  " " +
                                                  t.formTranslation.common
                                                    .required
                                              ) + "\n              "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.taxData.tax_value.minValue
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .tax_greater_then_0
                                                ) +
                                                "\n              "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              "administrator" === t.getUserRole()
                                ? e("div", { staticClass: "col-4" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "clinic_id" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.clinic.clinic
                                              ) + "\n              "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("multi-select", {
                                          attrs: {
                                            "deselect-label": "",
                                            "select-label": "",
                                            "tag-placeholder":
                                              t.formTranslation.patient
                                                .tag_select_clinic_plh,
                                            id: "clinic_id",
                                            placeholder:
                                              t.formTranslation.patient
                                                .search_placeholder,
                                            label: "label",
                                            loading: t.clinicMultiselectLoader,
                                            "track-by": "id",
                                            options: t.clinics,
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
                                            value: t.taxData.clinic_id,
                                            callback: function (e) {
                                              t.$set(t.taxData, "clinic_id", e);
                                            },
                                            expression: "taxData.clinic_id",
                                          },
                                        }),
                                        t._v(" "),
                                        e(
                                          "span",
                                          { staticClass: "text-primary small" },
                                          [
                                            e("b", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .tax_clinic_note
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              e("div", { staticClass: "col-4" }, [
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
                                          t._s(
                                            t.formTranslation.common.doctor
                                          ) + "\n              "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("multi-select", {
                                      attrs: {
                                        "deselect-label": "",
                                        "select-label": "",
                                        "tag-placeholder":
                                          t.formTranslation.patient
                                            .tag_select_clinic_plh,
                                        id: "doctor_id",
                                        placeholder:
                                          t.formTranslation.patient
                                            .search_placeholder,
                                        label: "label",
                                        loading: t.doctorMultiselectLoader,
                                        "track-by": "id",
                                        multiple: !t.$route.params.id,
                                        options: t.doctors,
                                      },
                                      on: {
                                        select: t.doctorChange,
                                        remove: t.doctorChange,
                                      },
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
                                        value: t.taxData.doctor_id,
                                        callback: function (e) {
                                          t.$set(t.taxData, "doctor_id", e);
                                        },
                                        expression: "taxData.doctor_id",
                                      },
                                    }),
                                    t._v(" "),
                                    e(
                                      "span",
                                      { staticClass: "text-primary small" },
                                      [
                                        e("b", [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .tax_doctor_note
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-4" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "service_id" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.service
                                          ) + "\n              "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("multi-select", {
                                      attrs: {
                                        "deselect-label": "",
                                        "select-label": "",
                                        "tag-placeholder":
                                          t.formTranslation.patient
                                            .tag_select_clinic_plh,
                                        id: "service_id",
                                        placeholder:
                                          t.formTranslation.patient
                                            .search_placeholder,
                                        label: "label",
                                        loading: t.serviceMultiselectLoader,
                                        "track-by": "id",
                                        multiple: !t.$route.params.id,
                                        options: t.services,
                                      },
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
                                        value: t.taxData.service_id,
                                        callback: function (e) {
                                          t.$set(t.taxData, "service_id", e);
                                        },
                                        expression: "taxData.service_id",
                                      },
                                    }),
                                    t._v(" "),
                                    e(
                                      "span",
                                      { staticClass: "text-primary small" },
                                      [
                                        e("b", [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .tax_service_note
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "status" },
                                    },
                                    [
                                      t._v(
                                        t._s(t.formTranslation.common.status) +
                                          "\n                "
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
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.taxData.status,
                                          expression: "taxData.status",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: { id: "status" },
                                      on: {
                                        change: function (e) {
                                          var n = Array.prototype.filter
                                            .call(
                                              e.target.options,
                                              function (t) {
                                                return t.selected;
                                              }
                                            )
                                            .map(function (t) {
                                              return "_value" in t
                                                ? t._value
                                                : t.value;
                                            });
                                          t.$set(
                                            t.taxData,
                                            "status",
                                         