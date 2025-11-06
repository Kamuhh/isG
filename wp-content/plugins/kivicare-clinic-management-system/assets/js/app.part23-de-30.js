// app.part23-de-30.js
ata.type.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                              " +
                                          t._s(
                                            t.formTranslation.custom_field
                                              .input_type_required
                                          ) +
                                          "\n                            "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          t.selected_field_type_file_upload
                            ? e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "from-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "file_upload_type" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.file_type
                                        ) +
                                          "test\n                             "
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
                                          id: "file_upload_type",
                                          "tag-placeholder":
                                            t.formTranslation.common
                                              .select_allowed_file_type,
                                          placeholder:
                                            t.formTranslation.common
                                              .select_allowed_file_type,
                                          label: "text",
                                          "track-by": "id",
                                          options: t.file_upload_type_options,
                                          multiple: !0,
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "noResult",
                                              fn: function () {
                                                return [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(
                                                        t.formTranslation.common
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
                                          value: t.fieldData.file_upload_type,
                                          callback: function (e) {
                                            t.$set(
                                              t.fieldData,
                                              "file_upload_type",
                                              e
                                            );
                                          },
                                          expression:
                                            "fieldData.file_upload_type",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  t.submitted && !t.file_upload_type_status
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            "\n                              " +
                                              t._s(
                                                t.formTranslation.common
                                                  .file_type +
                                                  " " +
                                                  t.formTranslation.common
                                                    .required
                                              ) +
                                              "\n                            "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  e("span", { staticClass: "text-primary" }, [
                                    e("small", [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common
                                            .accept_all_file_type
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ])
                            : e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "from-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "form-control-label col-md-4",
                                      attrs: { for: "placeholder" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.custom_field
                                            .placeholder
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
                                        value: t.fieldData.placeholder,
                                        expression: "fieldData.placeholder",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "placeholder",
                                      name: "placeholder",
                                      placeholder:
                                        t.formTranslation.custom_field
                                          .placeholder_plh,
                                    },
                                    domProps: {
                                      value: t.fieldData.placeholder,
                                    },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.fieldData,
                                            "placeholder",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                          t._v(" "),
                          t.selected_field_type_file_upload
                            ? t._e()
                            : e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "from-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "options" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.custom_field.options
                                        )
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
                                          id: "options",
                                          "tag-placeholder":
                                            t.formTranslation.custom_field
                                              .tag_add_new_option_plh,
                                          placeholder:
                                            t.formTranslation.custom_field
                                              .serach_plh,
                                          label: "text",
                                          "track-by": "id",
                                          options: t.fieldOptions,
                                          multiple: !0,
                                          taggable: !0,
                                          disabled: t.selectDisabled,
                                        },
                                        on: { tag: t.addOption },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "noResult",
                                              fn: function () {
                                                return [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(
                                                        t.formTranslation.common
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
                                          value: t.fieldData.options,
                                          callback: function (e) {
                                            t.$set(t.fieldData, "options", e);
                                          },
                                          expression: "fieldData.options",
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          staticClass: "select_clear_btn",
                                          on: {
                                            click: function (e) {
                                              t.fieldData.options = "";
                                            },
                                          },
                                        },
                                        [t._v(" × ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e("span", { staticClass: "text-primary" }, [
                                    e("small", [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.note_options
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "row mt-3" }, [
                          e("div", { staticClass: "col-md-4" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "isRequired-1" },
                                },
                                [
                                  t._v(
                                    "\n                                " +
                                      t._s(
                                        t.formTranslation.custom_field
                                          .validation
                                      ) +
                                      "\n                            "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e("div", { staticClass: "col-md-12" }, [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.fieldData.isRequired,
                                      expression: "fieldData.isRequired",
                                    },
                                  ],
                                  staticClass:
                                    "kivicare_settings_custom_field_checkbox",
                                  attrs: {
                                    type: "checkbox",
                                    id: "isRequired-1",
                                    name: "isRequired",
                                  },
                                  domProps: oe(
                                    { checked: t.fieldData.isRequired },
                                    "checked",
                                    Array.isArray(t.fieldData.isRequired)
                                      ? t._i(t.fieldData.isRequired, null) > -1
                                      : t.fieldData.isRequired
                                  ),
                                  on: {
                                    change: function (e) {
                                      var n = t.fieldData.isRequired,
                                        i = e.target,
                                        r = !!i.checked;
                                      if (Array.isArray(n)) {
                                        var o = t._i(n, null);
                                        i.checked
                                          ? o < 0 &&
                                            t.$set(
                                              t.fieldData,
                                              "isRequired",
                                              n.concat([null])
                                            )
                                          : o > -1 &&
                                            t.$set(
                                              t.fieldData,
                                              "isRequired",
                                              n
                                                .slice(0, o)
                                                .concat(n.slice(o + 1))
                                            );
                                      } else
                                        t.$set(t.fieldData, "isRequired", r);
                                    },
                                  },
                                }),
                                t._v(
                                  "\n                              \n                              " +
                                    t._s(
                                      t.formTranslation.custom_field
                                        .mandatory_field
                                    ) +
                                    "\n"
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-4" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "receptionist_cedula" },
                                },
                                [
                                  t._v("Cédula "),
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
                                    value: t.receptionistData.username,
                                    expression: "receptionistData.username",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  " is-invalid":
                                    t.submitted &&
                                    t.$v.receptionistData.username.$error,
                                },
                                attrs: {
                                  id: "receptionist_cedula",
                                  placeholder: "Ingrese cédula",
                                  required: "required",
                                  name: "id_number",
                                  type: "text",
                                },
                                domProps: {
                                  value: t.receptionistData.username,
                                },
                                on: {
                                  input: function (e) {
                                    if (!e.target.composing) {
                                      var n = e.target.value.replace(
                                        /\D+/g,
                                        ""
                                      );
                                      t.$set(t.receptionistData, "username", n),
                                        (void 0 === t.receptionistData.ID ||
                                          null === t.receptionistData.ID ||
                                          "" === t.receptionistData.ID) &&
                                          t.$set(
                                            t.receptionistData,
                                            "user_pass",
                                            n
                                          );
                                    }
                                  },
                                },
                              }),
                              t._v(" "),
                              t.submitted &&
                              !t.$v.receptionistData.username.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [t._v("La cédula es requerida")]
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
                                  attrs: { for: "field_status" },
                                },
                                [
                                  t._v(
                                    t._s(t.formTranslation.common.status) + " "
                                  ),
                                  e("span", { staticClass: "text-danger" }, [
                                    t._v(" *"),
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
                                      id: "field_status",
                                      placeholder:
                                        t.formTranslation.custom_field
                                          .status_plh,
                                      label: "label",
                                      "track-by": "id",
                                      options: [
                                        {
                                          id: 1,
                                          label:
                                            t.formTranslation.common.active,
                                        },
                                        {
                                          id: 0,
                                          label:
                                            t.formTranslation.common.inactive,
                                        },
                                      ],
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "noResult",
                                        fn: function () {
                                          return [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .no_result_found
                                                ) +
                                                "\n                "
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ]),
                                    model: {
                                      value: t.fieldData.status,
                                      callback: function (e) {
                                        t.$set(t.fieldData, "status", e);
                                      },
                                      expression: "fieldData.status",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "span",
                                    {
                                      staticClass: "select_clear_btn",
                                      on: {
                                        click: function (e) {
                                          t.fieldData.status = "";
                                        },
                                      },
                                    },
                                    [t._v(" × ")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted && !t.$v.fieldData.status.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                                    " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .status_required
                                          ) +
                                          "\n                                "
                                      ),
                                    ]
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
      le = {
        data: function () {
          return {
            termsConditionRequest: {},
            termConditionTitle: "Terms & Condition",
            sessionButtonText: '<i class="fa fa-save"></i> Save',
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            (this.termsConditionRequest = this.defaultTermsConditionRequest()),
              this.getTermCondition();
          },
          handleSubmit: function () {
            var t = this;
            Object(s.b)("terms_condition_save", this.termsConditionRequest)
              .then(function (e) {
                (t.loading = !1),
                  void 0 !== e.data.status && !0 === e.data.status
                    ? displayMessage(e.data.message)
                    : displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                (t.loading = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          defaultTermsConditionRequest: function () {
            return { isVisible: "accepted", content: "" };
          },
          getTermCondition: function () {
            var t = this;
            Object(s.a)("terms_condition_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (e.data.data.content &&
                    ((t.termsConditionRequest.content = e.data.data.content),
                    "" !== t.termsConditionRequest.content &&
                      (t.sessionButtonText =
                        '<i class="fa fa-save"></i>' +
                        t.formTranslation.common.save)),
                  e.data.data.isVisible &&
                    (t.termsConditionRequest.isVisible =
                      e.data.data.isVisible));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
        },
      },
      ce =
        (n(698),
        Object(h.a)(
          le,
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
                      attrs: { id: "wp-clinic-term-condition-form" },
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
                      e("b-card", {
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
                                      { attrs: { sm: "12", md: "8", lg: "8" } },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(t._s(t.termConditionTitle)),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-row",
                                  { staticClass: "mt-3" },
                                  [
                                    e(
                                      "b-col",
                                      {
                                        attrs: { sm: "12", lg: "12", md: "12" },
                                      },
                                      [
                                        e("vue-editor", {
                                          model: {
                                            value:
                                              t.termsConditionRequest.content,
                                            callback: function (e) {
                                              t.$set(
                                                t.termsConditionRequest,
                                                "content",
                                                e
                                              );
                                            },
                                            expression:
                                              "termsConditionRequest.content",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-row",
                                  { staticClass: "mt-3" },
                                  [
                                    e(
                                      "b-col",
                                      {
                                        attrs: { sm: "12", md: "12", lg: "12" },
                                      },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "float-right" },
                                          [
                                            e("button", {
                                              staticClass: "btn btn-primary",
                                              attrs: { type: "submit" },
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.sessionButtonText
                                                ),
                                              },
                                            }),
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
          "145dad3a",
          null
        ).exports),
      de = n(373).a,
      ue =
        (n(700),
        Object(h.a)(
          de,
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
                                      { attrs: { sm: "12", md: "8", lg: "8" } },
                                      [
                                        e("h2", { staticClass: "mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.clinic_schedule
                                                .holiday_list
                                            ) + " \n              "
                                          ),
                                          "off" == t.request_status
                                            ? e(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#holidays",
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
                                    t._v(" "),
                                    e(
                                      "b-col",
                                      { attrs: { sm: "12", md: "4", lg: "4" } },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-end",
                                          },
                                          [
                                            t.kcCheckPermission(
                                              "clinic_schedule_add"
                                            )
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary",
                                                    attrs: {
                                                      to: {
                                                        name: "clinic-schedule.create",
                                                      },
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleScheduleForm(
                                                          {}
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t.visible
                                                      ? e("i", {
                                                          staticClass:
                                                            "fas fa-times",
                                                        })
                                                      : e("i", {
                                                          staticClass:
                                                            "fa fa-plus",
                                                        }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.visible
                                                            ? t.formTranslation
                                                                .clinic_schedule
                                                                .close_form_btn
                                                            : t.formTranslation
                                                                .clinic_schedule
                                                                .add_holiday_btn
                                                        ) +
                                                        "\n              "
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
                        e(
                          "b-collapse",
                          {
                            attrs: {
                              id: "holiday-add-tab",
                              visible: t.showAddForm,
                            },
                          },
                          [
                            e("Create", {
                              on: {
                                getClinicScheduleList: t.getClinicScheduleList,
                                closeForm: t.closeForm,
                              },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-2",
                            attrs: {
                              id: "holiday-edit-tab",
                              visible: t.showEditForm,
                            },
                          },
                          [
                            this.holidayId
                              ? e("Create", {
                                  attrs: {
                                    holidayId: t.holidayId,
                                    holidayDetail: t.editHolidayDetail,
                                  },
                                  on: {
                                    getClinicScheduleList:
                                      t.getClinicScheduleList,
                                    closeForm: t.closeForm,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
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
                                e("div", { attrs: { id: "clinicPrint" } }, [
                                  e(
                                    "div",
                                    { staticClass: "mb-0" },
                                    [
                                      e(
                                        "vue-good-table",
                                        {
                                          ref: "dataTable",
                                          attrs: {
                                            columns:
                                              t.clinicScheduleList.column,
                                            rows: t.clinicScheduleList.data,
                                            mode: "remote",
                                            "search-options": {
                                              enabled: !0,
                                              placeholder:
                                                t.formTranslation.common
                                                  .search_holiday_data_global_placeholder,
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
                                                  "start_date" === i.field
                                                    ? e("div", [
                                                        e("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.serverParams
                                                                  .columnFilters
                                                                  .start_date,
                                                              expression:
                                                                "serverParams.columnFilters.start_date",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control-sm",
                                                          staticStyle: {
                                                            border: "#fff",
                                                          },
                                                          attrs: {
                                                            type: "date",
                                                          },
                                                          domProps: {
                                                            value:
                                                              t.serverParams
                                                                .columnFilters
                                                                .start_date,
                                                          },
                                                          on: {
                                                            onkeydown:
                                                              function () {
                                                                return !1;
                                                              },
                                                            input: [
                                                              function (e) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t
                                                                      .serverParams
                                                                      .columnFilters,
                                                                    "start_date",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                              function (e) {
                                                                return r(
                                                                  i,
                                                                  t.serverParams
                                                                    .columnFilters
                                                                    .start_date
                                                                );
                                                              },
                                                            ],
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        e(
                                                          "span",
                                                          {
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return r(
                                                                  i,
                                                                  (t.serverParams.columnFilters.start_date =
                                                                    "")
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("X")]
                                                        ),
                                                      ])
                                                    : "end_date" === i.field
                                                    ? e("div", [
                                                        e("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.serverParams
                                                                  .columnFilters
                                                                  .end_date,
                                                              expression:
                                                                "serverParams.columnFilters.end_date",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control-sm",
                                                          staticStyle: {
                                                            border: "#fff",
                                                          },
                                                          attrs: {
                                                            type: "date",
                                                          },
                                                          domProps: {
                                                            value:
                                                              t.serverParams
                                                                .columnFilters
                                                                .end_date,
                                                          },
                                                          on: {
                                                            onkeydown:
                                                              function () {
                                                                return !1;
                                                              },
                                                            input: [
                                                              function (e) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t
                                                                      .serverParams
                                                                      .columnFilters,
                                                                    "end_date",
                                                                    e.target
                                                                      .value
                                                                  );
                                                              },
                                                              function (e) {
                                                                return r(
                                                                  i,
                                                                  t.serverParams
                                                                    .columnFilters
                                                                    .end_date
                                                                );
                                                              },
                                                            ],
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        e(
                                                          "span",
                                                          {
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return r(
                                                                  i,
                                                                  (t.serverParams.columnFilters.end_date =
                                                                    "")
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("X")]
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
                                                  "index" == n.column.field
                                                    ? e("div", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              n.row
                                                                .originalIndex +
                                                                1
                                                            ) +
                                                            " "
                                                        ),
                                                      ])
                                                    : "start_date" ==
                                                      n.column.field
                                                    ? e("div", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              n.row.start_date
                                                            ) +
                                                            " "
                                                        ),
                                                      ])
                                                    : "end_date" ==
                                                      n.column.field
                                                    ? e("div", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              n.row.end_date
                                                            ) +
                                                            " "
                                                        ),
                                                      ])
                                                    : "actions" ==
                                                      n.column.field
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          t.kcCheckPermission(
                                                            "clinic_schedule_edit"
                                                          )
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
                                                                    "btn btn-sm btn-outline-primary",
                                                                  attrs: {
                                                                    type: "button",
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
                                                                        return t.editClinicSchedule(
                                                                          n.row,
                                                                          n.row
                                                                            .id
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
                                                            "clinic_schedule_delete"
                                                          )
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
                                                                        return t.deleteClinicSchedule(
                                                                          n.index +
                                                                            1
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
                                                        ]
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
                                              t.kcCheckPermission(
                                                "clinic_schedule_export"
                                              )
                                                ? e("module-data-export", {
                                                    attrs: {
                                                      module_data:
                                                        t.clinicScheduleList
                                                          .data,
                                                      module_name:
                                                        t.formTranslation
                                                          .clinic_schedule
                                                          .holiday_list,
                                                      module_type:
                                                        "clinic_doctor_holiday",
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
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "100a48c0",
          null
        ).exports),
      pe = n(342),
      he = n(146),
      fe = {
        components: { NotificationTestModal: he.a },
        data: function () {
          return {
            loading: !1,
            request_status: "off",
            state: "",
            checked: "",
            activeTab: 0,
            emailTemplateTitle: "Patient Registration Template",
            emailRequest: {
              to: "akshayrathod482@gmail.com",
              subject: "Test Email",
              message: "This is Test email",
            },
            emailTemplateSaveRequest: { content: "", type: "" },
            templateSaveRequest: { ID: 0, post_content: "" },
            emailTemplateGetRequest: { type: "patient_register" },
            testEmailRequest: { content: "" },
            emailTypeList: [],
            activeEmailTemplateIndex: -1,
            selectedMainAccrodionId: -1,
            copyToolTipText: "",
            emailDynamicKey: [],
            isLoading: !0,
            labels: [],
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
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.init(),
            (this.copyToolTipText =
              this.formTranslation.settings.click_to_copy),
            this.getModule();
        },
        methods: {
          init: function () {
            this.getEmailTemplate();
          },
          mainAccordian: function (t) {
            this.selectedMainAccrodionId =
              this.selectedMainAccrodionId === t ? -1 : t;
          },
          saveEmailTemplates: function () {
            var t = this;
            (this.loading = !0),
              Object(s.b)("save_email_template", { data: this.emailTypeList })
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? (t.getEmailTemplate(), displayMessage(e.data.message))
                    : displayErrorMessage(e.data.message),
                    (t.loading = !1);
                })
                .catch(function (e) {
                  (t.loading = !1),
                    displayErrorMessage(t.formTranslation.common.server_error);
                });
          },
          getEmailTemplate: function () {
            var t = this;
            Object(s.a)("get_email_template", {})
              .then(function (e) {
                if (void 0 !== e.data.status && !0 === e.data.status) {
                  t.isLoading = !1;
                  var n = e.data.data;
                  (t.emailTypeList = n),
                    void 0 !== e.data.dynamicKey &&
                      (t.emailDynamicKey = e.data.dynamicKey),
                    (t.labels = e.data.labels);
                }
              })
              .catch(function (t) {});
          },
          selectedEmailTemplate: function (t) {
            this.activeEmailTemplateIndex =
              this.activeEmailTemplateIndex === t ? " " : t;
          },
          onTemplateCheckBoxChecked: function (t) {},
          copyDynamicKey: function (t) {
            var e = document.createElement("input");
            document.querySelector("body").appendChild(e),
              (e.value = t),
              e.select(),
              document.execCommand("copy"),
              e.remove(),
              (this.copyToolTipText =
                t + " " + this.formTranslation.settings.copied);
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
        watch: {},
      },
      be =
        (n(702),
        Object(h.a)(
          fe,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-row",
                  [
                    e("b-col", { attrs: { sm: "12", md: "12", lg: "12" } }, [
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
                                              e("h2", { staticClass: "mb-0" }, [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.settings
                                                      .email_template
                                                  ) + " "
                                                ),
                                                "off" == t.request_status
                                                  ? e(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#email-template",
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
                                          t._v(" "),
                                          e(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "4",
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
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (e) {
                                                          (t.$refs.NotificationTestModal.modalOpen =
                                                            !0),
                                                            (t.$refs.NotificationTestModal.notificationType =
                                                              "email");
                                                        },
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
                                                            t.formTranslation
                                                              .widgets
                                                              .send_test_email
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
                                              t.emailTypeList,
                                              function (n, i) {
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
                                                                class:
                                                                  t.selectedMainAccrodionId ===
                                                                  i
                                                                    ? "not-collapsed"
                                                                    : " ",
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
                                                                        i
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                        " +
                                                                    t._s(
                                                                      void 0 !==
                                                                        t
                                                                          .labels[
                                                                          i
                                                                        ]
                                                                        ? t
                                                                            .labels[
                                                                            i
                                                                          ]
                                                                        : i
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
                                                            i,
                                                          visible:
                                                            t.selectedMainAccrodionId ===
                                                            i,
                                                          accordion:
                                                            "my-accordion1",
                                                          role: "tabpanel",
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "accordion",
                                                            attrs: {
                                                              role: "tablist",
                                                            },
                                                          },
                                                          t._l(
                                                            n,
                                                            function (n, i) {
                                                              return e(
                                                                "b-card",
                                                                {
                                                                  key: i,
                                                                  staticClass:
                                                                    "mb-1 pl-3",
                                                                  attrs: {
                                                                    "no-body":
                                                                      "",
                                                                  },
                                                                },
                                                                [
                                                                  e(
                                                                    "b-card-header",
                                                                    {
                                                                      staticClass:
                                                                        "p-1",
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
                                                                            "b-form-checkbox",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  size: "md",
                                                                                  id:
                                                                                    "checkbox-" +
                                                                                    n.ID,
                                                                                  name:
                                                                                    "checkbox-" +
                                                                                    n.ID,
                                                                                  value:
                                                                                    "publish",
                                                                                  "unchecked-value":
                                                                                    "draft",
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    n.post_status,
                                                                                  callback:
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      t.$set(
                                                                                        n,
                                                                                        "post_status",
                                                                                        e
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "item.post_status",
                                                                                },
                                                                            }
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "b-button",
                                                                            {
                                                                              class:
                                                                                t.activeEmailTemplateIndex ===
                                                                                n.ID
                                                                                  ? "not-collapsed"
                                                                                  : " ",
                                                                              attrs:
                                                                                {
                                                                                  type: "button",
                                                                                  block:
                                                                                    "",
                                                                                  variant:
                                                                                    "link shadow-none text-left",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  function (
                                                                                    e
                                                                                  ) {
                                                                                    return t.selectedEmailTemplate(
                                                                                      n.ID
                                                                                    );
                                                                                  },
                                                                              },
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                "  " +
                                                                                  t._s(
                                                                                    "publish" ===
                                                                                      n.post_status
                                                                                      ? t
                                                                                          .formTranslation
                                                                                          .common[
                                                                                          "enabled_" +
                                                                                            n.post_name
                                                                                        ]
                                                                                      : t
                                                                                          .formTranslation
                                                                                          .common[
                                                                                          "disabled_" +
                                                                                            n.post_name
                                                                                        ]
                                                                                  ) +
                                                                                  " "
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
                                                                          "accordion-" +
                                                                          n.ID,
                                                                        visible:
                                                                          n.ID ===
                                                                          t.activeEmailTemplateIndex,
                                                                        accordion:
                                                                          "my-accordion",
                                                                        role: "tabpanel",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "card-body d-flex flex-wrap",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "label",
                                                                            {
                                                                              staticClass:
                                                                                "form-control-label",
                                                                              attrs:
                                                                                {
                                                                                  for: "email_subject",
                                                                                },
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                t._s(
                                                                                  t
                                                                                    .formTranslation
                                                                                    .settings
                                                                                    .lbl_email_subject
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
                                                                                      n.post_title,
                                                                                    expression:
                                                                                      "item.post_title",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "form-control",
                                                                              attrs:
                                                                                {
                                                                                  id:
                                                                                    "subject" +
                                                                                    n.ID,
                                                                                  placeholder:
                                                                                    t
                                                                                      .formTranslation
                                                                                      .settings
                                                                                      .lbl_email_subject,
                                                                                  name:
                                                                                    "subject" +
                                                                                    n.ID,
                                                                                  type: "text",
                                                                                },
                                                                              domProps:
                                                                                {
                                                                                  value:
                                                                                    n.post_title,
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
                                                                                        n,
                                                                                        "post_title",
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
                                                                      t._v(" "),
                                                                      void 0 !==
                                                                        t
                                                                          .emailDynamicKey[
                                                                          n
                                                                            .post_name
                                                                        ] &&
                                                                      null !==
                                                                        t
                                                                          .emailDynamicKey[
                                                                          n
                                                                            .post_name
                                                                        ]
                                                                        ? e(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "card-body d-flex",
                                                                            },
                                                                            [
                                                                              e(
                                                                                "label",
                                                                                [
                                                                                  t._v(
                                                                                    " " +
                                                                                      t._s(
                                                                                        t
                                                                                          .formTranslation
                                                                                          .settings
                                                                                          .dynamic_keys_list
                                                                                      )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          )
                                                                        : t._e(),
                                                                      t._v(" "),
                                                                      void 0 !==
                                                                        t
                                                                          .emailDynamicKey[
                                                                          n
                                                                            .post_name
                                                                        ] &&
                                                                      null !==
                                                                        t
                                                                          .emailDynamicKey[
                                                                          n
                                                                            .post_name
                                                                        ]
                                                                        ? e(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "card-body d-flex flex-wrap",
                                                                            },
                                                                            t._l(
                                                                              t
                                                                                .emailDynamicKey[
                                                                                n
                                                                                  .post_name
                                                                              ],
                                                                              function (
                                                                                n,
                                                                                i
                                                                              ) {
                                                                                return e(
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
                                                                                    key: i,
                                                                                    staticClass:
                                                                                      "btn btn-sm btn-primary mb-1",
                                                                                    attrs:
                                                                                      {
                                                                                        title:
                                                                                          t.copyToolTipText,
                                                                                      },
                                                                                    on: {
                                                                                      click:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return (
                                                                                            e.preventDefault(),
                                                                                            t.copyDynamicKey(
                                                                                              n
                                                                                            )
                                                                                          );
                                                                                        },
                                                                                      mouseout:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          t.copyToolTipText =
                                                                                            t.formTranslation.settings.click_to_copy;
                                                                                        },
                                                                                    },
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      "\n                              " +
                                                                                        t._s(
                                                                                          n
                                                                                        ) +
                                                                                        "\n                            "
                                                                                    ),
                                                                                  ]
                                                                                );
                                                                              }
                                                                            ),
                                                                            0
                                                                          )
                                                                        : t._e(),
                                                                      t._v(" "),
                                                                      e(
                                                                        "b-card-body",
                                                                        [
                                                                          e(
                                                                            "vue-editor",
                                                                            {
                                                                              key: i,
                                                                              attrs:
                                                                                {
                                                                                  editorToolbar:
                                                                                    t.customToolbar,
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    n.post_content,
                                                                                  callback:
                                                                                    function (
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
                                                                            }
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
                                                            }
                                                          ),
                                                          1
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
                                                    "btn btn-primary float-right",
                                                  attrs: {
                                                    type: "button",
                                                    disabled: "",
                                                  },
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-sync fa-spin",
                                                  }),
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .loading
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: t.saveEmailTemplates,
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
                                                      "\n              "
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
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e("NotificationTestModal", { ref: "NotificationTestModal" }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "00ed942a",
          null
        ).exports),
      me = {
        components: { NotificationTestModal: he.a },
        data: function () {
          return {
            disabledEditors: [],
            SMSTypeList: [],
            activeSmsTemplateIndex: -1,
            smsTemplateTitle: "",
            request_status: "off",
            templateSaveRequest: { ID: 0, post_content: "" },
            loading: !1,
            copyToolTipText: "",
            smsDynamicKey: [],
            labels: [],
            selectedMainAccrodionId: -1,
            isLoading: !0,
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
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.init(),
            (this.copyToolTipText =
              this.formTranslation.settings.click_to_copy),
            this.getModule();
        },
        methods: {
          init: function () {
            this.getSMSTemplate();
          },
          mainAccordian: function (t) {
            this.selectedMainAccrodionId =
              this.selectedMainAccrodionId === t ? -1 : t;
          },
          fetchTwillioTemplate: function (t, e, n) {
            var i = this;
            Object(s.a)("get_twillio_sms_template", { content_sid: n }).then(
              function (n) {
                i.SMSTypeList[e][t].post_content =
                  n.data.data["twilio/text"].body;
              }
            );
          },
          getSMSTemplate: function () {
            var t = this;
            Object(s.a)("get_sms_template", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.isLoading = !1),
                  (t.SMSTypeList = e.data.data),
                  void 0 !== e.data.dynamicKey &&
                    (t.smsDynamicKey = e.data.dynamicKey),
                  (t.labels = e.data.labels));
              })
              .catch(function (t) {});
          },
          selectedSmsTemplate: function (t, e, n) {
            this.activeSmsTemplateIndex =
              this.activeSmsTemplateIndex === t ? " " : t;
          },
          saveSMSTemplates: function () {
            var t = this;
            1 == this.userData.addOns.kiviPro &&
              ((this.loading = !0),
              Object(s.b)("save_sms_template", { data: this.SMSTypeList })
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? (t.getSMSTemplate(),
                      displayMessage(e.data.message),
                      displayMessage(e.data.message))
                    : displayErrorMessage(e.data.message),
                    (t.loading = !1);
                })
                .catch(function (e) {
                  (t.loading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.server_error + "."
                    );
                }));
          },
          copyDynamicKey: function (t) {
            var e = document.createElement("input");
            document.querySelector("body").appendChild(e),
              (e.value = t),
              e.select(),
              document.execCommand("copy"),
              e.remove(),
              (this.copyToolTipText =
                t + " " + this.formTranslation.settings.copied);
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
      },
      ge =
        (n(704),
        Object(h.a)(
          me,
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
                              {
                                attrs: { id: "doctorDataForm", novalidate: !0 },
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
                                                      sm: "6",
                                                      md: "6",
                                                      lg: "6",
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
                                                              .settings
                                                              .sms_template
                                                          ) + " "
                                                        ),
                                                        "off" ==
                                                        t.request_status
                                                          ? e(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "https://apps.iqonic.design/docs/product/kivicare/pro-version/sms-whatsapp-template/",
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
                                                t._v(" "),
                                                e(
                                                  "b-col",
                                                  {
                                                    attrs: {
                                                      sm: "6",
                                                      md: "6",
                                                      lg: "6",
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
                                                              click: function (
                                                                e
                                                              ) {
                                                                (t.$refs.NotificationTestModal.modalOpen =
                                                                  !0),
                                                                  (t.$refs.NotificationTestModal.notificationType =
                                                                    "sms");
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              staticClass:
                                                                "fas fa-sms",
                                                            }),
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .widgets
                                                                    .send_test_sms
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-primary",
                                                            attrs: {
                                                              type: "button",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                (t.$refs.NotificationTestModal.modalOpen =
                                                                  !0),
                                                                  (t.$refs.NotificationTestModal.notificationType =
                                                                    "whatsapp");
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              staticClass:
                                                                "fab fa-whatsapp",
                                                            }),
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .widgets
                                                                    .send_test_whatsapp
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
                                          {
                                            staticClass: "page-loader-section",
                                          },
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
                                                    t.SMSTypeList,
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
                                                              staticClass:
                                                                "p-1",
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
                                                                      class:
                                                                        t.selectedMainAccrodionId ===
                                                                        i
                                                                          ? "not-collapsed"
                                                                          : " ",
                                                                      attrs: {
                                                                        type: "button",
                                                                        block:
                                                                          "",
                                                                        variant:
                                                                          "link shadow-none text-left",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return t.mainAccordian(
                                                                              i
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        "\n                          " +
                                                                          t._s(
                                                                            void 0 !==
                                                                              t
                                                                                .labels[
                                                                                i
                                                                              ]
                                                                              ? t
                                                                                  .labels[
                                                                                  i
                                                                                ]
                                                                              : i
                                                                          ) +
                                                                          "\n                        "
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
                                                                  i,
                                                                visible:
                                                                  t.selectedMainAccrodionId ===
                                                                  i,
                                                                accordion:
                                                                  "my-accordion1",
                                                                role: "tabpanel",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "accordion",
                                                                  attrs: {
                                                                    role: "tablist",
                                                                  },
                                                                },
                                                                t._l(
                                                                  n,
                                                                  function (
                                                                    n,
                                                                    r
                                                                  ) {
                                                                    return e(
                                                                      "b-card",
                                                                      {
                                                                        key: r,
                                                                        staticClass:
                                                                          "mb-1 pl-3",
                                                                        attrs: {
                                                                          "no-body":
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        e(
                                                                          "b-card-header",
                                                                          {
                                                                            staticClass:
                                                                              "p-1",
                                                                            attrs:
                                                                              {
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
                                                                                  "b-form-checkbox",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        size: "md",
                                                                                        id:
                                                                                          "checkbox-" +
                                                                                          n.ID,
                                                                                        name:
                                                                                          "checkbox-" +
                                                                                          n.ID,
                                                                                        value:
                                                                                          "publish",
                                                                                        "unchecked-value":
                                                                                          "draft",
                                                                                      },
                                                                                    model:
                                                                                      {
                                                                                        value:
                                                                                          n.post_status,
                                                                                        callback:
                                                                                          function (
                                                                                            e
                                                                                          ) {
                                                                                            t.$set(
                                                                                              n,
                                                                                              "post_status",
                                                                                              e
                                                                                            );
                                                                                          },
                                                                                        expression:
                                                                                          "item.post_status",
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                e(
                                                                                  "b-button",
                                                                                  {
                                                                                    class:
                                                                                      t.activeSmsTemplateIndex ===
                                                                                      n.ID
                                                                                        ? "not-collapsed"
                                                                                        : " ",
                                                                                    attrs:
                                                                                      {
                                                                                        type: "button",
                                                                                        block:
                                                                                          "",
                                                                                        variant:
                                                                                          "link shadow-none text-left",
                                                                                      },
                                                                                    on: {
                                                                                      click:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return t.selectedSmsTemplate(
                                                                                            n.ID,
                                                                                            i,
                                                                                            r
                                                                                          );
                                                                                        },
                                                                                    },
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      "  " +
                                                                                        t._s(
                                                                                          "publish" ===
                                                                                            n.post_status
                                                                                            ? t
                                                                                                .formTranslation
                                                                                                .common[
                                                                                                "enabled_" +
                                                                                                  n.post_name
                                                                                              ]
                                                                                            : t
                                                                                                .formTranslation
                                                                                                .common[
                                                                                                "disabled_" +
                                                                                                  n.post_name
                                                                                              ]
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ],
                                                                              1
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        e(
                                                                          "b-collapse",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                id:
                                                                                  "accordion-" +
                                                                                  n.ID,
                                                                                visible:
                                                                                  n.ID ===
                                                                                  t.activeSmsTemplateIndex,
                                                                                accordion:
                                                                                  "my-accordion",
                                                                                role: "tabpanel",
                                                                              },
                                                                          },
                                                                          [
                                                                            e(
                                                                              "b-row",
                                                                              [
                                                                                e(
                                                                                  "b-col",
                                                                                  [
                                                                                    e(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "card-body d-flex flex-wrap",
                                                                                      },
                                                                                      [
                                                                                        e(
                                                                                          "label",
                                                                                          {
                                                                                            staticClass:
                                                                                              "form-control-label",
                                                                                            attrs:
                                                                                              {
                                                                                                for: "content_sid",
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                            t._v(
                                                                                              t._s(
                                                                                                t
                                                                                                  .formTranslation
                                                                                                  .settings
                                                                                                  .content_sid
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
                                                                                                    n.content_sid,
                                                                                                  expression:
                                                                                                    "item.content_sid",
                                                                                                },
                                                                                              ],
                                                                                            staticClass:
                                                                                              "form-control",
                                                                                            attrs:
                                                                                              {
                                                                                                id:
                                                                                                  "subject" +
                                                                                                  n.ID,
                                                                                                placeholder:
                                                                                                  t
                                                                                                    .formTranslation
                                                                                                    .settings
                                                                                                    .content_sid,
                                                                                                name:
                                                                                                  "subject" +
                                                                                                  n.ID,
                                                                                                type: "text",
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  n.content_sid,
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
                                                                                                      n,
                                                                                                      "content_sid",
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
                                                                                  ]
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                e(
                                                                                  "b-col",
                                                                                  [
                                                                                    e(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "card-body d-flex flex-wrap",
                                                                                      },
                                                                                      [
                                                                                        e(
                                                                                          "b-button",
                                                                                          {
                                                                                            attrs:
                                                                                              {
                                                                                                type: "button",
                                                                                              },
                                                                                            on: {
                                                                                              click:
                                                                                                function (
                                                                                                  e
                                                                                                ) {
                                                                                                  return t.fetchTwillioTemplate(
                                                                                                    r,
                                                                                                    i,
                                                                                                    n.content_sid
                                                                                                  );
                                                                                                },
                                                                                            },
                                                                                          },
                                                                                          [
                                                                                            t._v(
                                                                                              "\n                                    " +
                                                                                                t._s(
                                                                                                  t
                                                                                                    .formTranslation
                                                                                                    .settings
                                                                                                    .fetch_twilio_template
                                                                                                ) +
                                                                                                "\n                                  "
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
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            void 0 !==
                                                                              t
                                                                                .smsDynamicKey[
                                                                                n
                                                                                  .post_name
                                                                              ] &&
                                                                            null !==
                                                                              t
                                                                                .smsDynamicKey[
                                                                                n
                                                                                  .post_name
                                                                              ]
                                                                              ? e(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "card-body d-flex",
                                                                                  },
                                                                                  [
                                                                                    e(
                                                                                      "label",
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              t
                                                                                                .formTranslation
                                                                                                .settings
                                                                                                .dynamic_keys_list
                                                                                            )
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                )
                                                                              : t._e(),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            void 0 !==
                                                                              t
                                                                                .smsDynamicKey[
                                                                                n
                                                                                  .post_name
                                                                              ] &&
                                                                            null !==
                                                                              t
                                                                                .smsDynamicKey[
                                                                                n
                                                                                  .post_name
                                                                              ]
                                                                              ? e(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "card-body d-flex flex-wrap",
                                                                                  },
                                                                                  t._l(
                                                                                    t
                                                                                      .smsDynamicKey[
                                                                                      n
                                                                                        .post_name
                                                                                    ],
                                                                                    function (
                                                                                      n,
                                                                                      i
                                                                                    ) {
                                                                                      return e(
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
                                                                                          key: i,
                                                                                          staticClass:
                                                                                            "btn btn-sm btn-primary mb-1",
                                                                                          attrs:
                                                                                            {
                                                                                              title:
                                                                                                t.copyToolTipText,
                                                                                            },
                                                                                          on: {
                                                                                            click:
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                return (
                                                                                                  e.preventDefault(),
                                                                                                  t.copyDynamicKey(
                                                                                                    n
                                                                                                  )
                                                                                                );
                                                                                              },
                                                                                            mouseout:
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                t.copyToolTipText =
                                                                                                  t.formTranslation.settings.click_to_copy;
                                                                                              },
                                                                                          },
                                                                                        },
                                                                                        [
                                                                                          t._v(
                                                                                            "\n                                " +
                                                                                              t._s(
                                                                                                n
                                                                                              ) +
                                                                                              "\n                              "
                                                                                          ),
                                                                                        ]
                                                                                      );
                                                                                    }
                                                                                  ),
                                                                                  0
                                                                                )
                                                                              : t._e(),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            e(
                                                                              "b-card-body",
                                                                              [
                                                                                e(
                                                                                  "vue-editor",
                                                                                  {
                                                                                    key: r,
                                                                                    attrs:
                                                                                      {
                                                                                        editorToolbar:
                                                                                          t.customToolbar,
                                                                                      },
                                                                                    model:
                                                                                      {
                                                                                        value:
                                                                                          n.post_content,
                                                                                        callback:
                                                                                          function (
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
                                                                                  }
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
                                                                  }
                                                                ),
                                                                1
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
                                                          "btn btn-primary float-right",
                                                        attrs: {
                                                          type: "button",
                                                          disabled: "",
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-sync fa-spin",
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common.loading
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                      ]
                                                    )
                                                  : e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary",
                                                        attrs: {
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click:
                                                            t.saveSMSTemplates,
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
                                                              t.formTranslation
                                                                .common.save
                                                            ) +
                                                            "\n                  "
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
                              ],
                              1
                            ),
                            t._v(" "),
                            e("NotificationTestModal", {
                              ref: "NotificationTestModal",
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
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      ve = n(75),
      _e = {
        components: { ModuleConfig: V },
        data: function () {
          return {
            saveSettingBtn: '<i class="fa fa-save"></i> Save',
            request_status: "off",
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.formTranslation.common.save,
            this.init(),
            this.getModule();
        },
        methods: {
          init: function () {},
          saveCommonSettings: function () {
            this.$refs.moduleConfiguration.saveSetting();
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
      },
      ye = Object(h.a)(
        _e,
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
                                      e("h2", { staticClass: "mb-0" }, [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .en_dis_module
                                            ) +
                                            "\n                            "
                                        ),
                                        "off" == t.request_status
                                          ? e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#configurations",
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
                      e(
                        "b-row",
                        [
                          e(
                            "b-col",
                            { attrs: { sm: "12", md: "12", lg: "12" } },
                            [e("ModuleConfig", { ref: "moduleConfiguration" })],
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
                            { attrs: { sm: "12", md: "12", lg: "12" } },
                            [
                              e(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  e("b-button", {
                                    staticClass: "mr-2",
                                    attrs: { variant: "primary" },
                                    domProps: {
                                      innerHTML: t._s(t.saveSettingBtn),
                                    },
                                    on: { click: t.saveCommonSettings },
                                  }),
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
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      Me = {
        data: function () {
          return {
            app: { app_id: "", api_key: "" },
            firebaseConfig: {
              serverKey: "",
              client_emaail: "",
              privat_key: "",
              project_id: "",
            },
            isLoading: !1,
            submitted: !1,
            firebaseConfigSetting: ["serverKey"],
          };
        },
        validations: {
          firebaseConfig: {
            serverKey: { required: l.required },
            client_emaail: { required: l.required },
            privat_key: { required: l.required },
            project_id: { required: l.required },
          },
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            this.init(),
            this.getModule();
        },
        methods: {
          init: function () {},
          saveCommonSettings: function () {
            var t = this;
            if (
              ((this.submitted = !0),
              this.$v.$touch(),
              !this.$v.firebaseConfig.$invalid)
            ) {
              if (this.isLoading) return !0;
              (this.submitted = !1),
                (this.isLoading = !0),
                Object(s.b)("save_app_config", { config: this.firebaseConfig })
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      displayMessage(e.data.message),
                      (t.isLoading = !1);
                  })
                  .catch(function (e) {
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    ),
                      (t.isLoading = !1);
                  });
            }
          },
          getModule: function () {
            var t = this;
            Object(s.a)("get_app_config").then(function (e) {
              void 0 !== e.data.success &&
                !0 === e.data.success &&
                (t.firebaseConfig = e.data.data);
            });
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      Oe = Object(h.a)(
        Me,
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
                    "b-overlay",
                    {
                      attrs: {
                        show: 1 != t.userData.addOns.api,
                        variant: "white",
                        opacity: 0.4,
                      },
                      scopedSlots: t._u([
                        {
                          key: "overlay",
                          fn: function () {
                            return [
                              e("overlay-message", {
                                attrs: { addon_type: "app" },
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
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              "\n                                " +
                                                t._s(
                                                  t.formTranslation.settings
                                                    .app_config
                                                ) +
                                                "\n                            "
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
                          e(
                            "b-card",
                            [
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
                                    [
                                      e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              staticClass: "mb-2",
                                              attrs: { md: "12" },
                                            },
                                            [
                                              e("h3", [
                                                t._v(
                                                  "\n                                        " +
                                                    t._s(
                                                      t.formTranslation.settings
                                                        .one_signal_app_notification
                                                    ) +
                                                    "\n                                    "
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e("b-row", [
                                        e("div", { staticClass: "col-md-4" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "app_id" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .settings.app_id
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
                                                    rawName: "v-model",
                                                    value: t.app.app_id,
                                                    expression: "app.app_id",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id: "app_id",
                                                  disabled: "",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .app_id_placeholder,
                                                  name: "app_id",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.app.app_id,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.app,
                                                        "app_id",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "api_key" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .settings.api_key
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
                                                    rawName: "v-model",
                                                    value: t.app.api_key,
                                                    expression: "app.api_key",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id: "api_key",
                                                  disabled: "",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .api_key_placeholder,
                                                  name: "api_key",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.app.api_key,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.app,
                                                        "api_key",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
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
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-end",
                                        },
                                        [
                                          e(
                                            "b-button",
                                            {
                                              staticClass: "mr-2",
                                              attrs: {
                                                variant: "primary",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              e("i", { class: "fa fa-save" }),
                                              t._v(
                                                "\n                                    " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .save
                                                  )
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
                          t._v(" "),
                          e(
                            "b-card",
                            [
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
                                    [
                                      e(
                                        "b-row",
                                        [
                                          e(
                                            "b-col",
                                            {
                                              staticClass: "mb-2",
                                              attrs: { md: "12" },
                                            },
                                            [
                                              e("h3", [
                                                t._v(
                                                  "\n                                        " +
                                                    t._s(
                                                      t.formTranslation.settings
                                                        .firebase_app_config
                                                    ) +
                                                    "\n                                    "
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-row",
                                        t._l(
                                          t.firebaseConfigSetting,
                                          function (n) {
                                            return e(
                                              "div",
                                              { staticClass: "col-md-4" },
                                              [
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
                                                          for: "firebase_" + n,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .settings.app[n]
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
                                                          rawName: "v-model",
                                                          value:
                                                            t.firebaseConfig[n],
                                                          expression:
                                                            "firebaseConfig[settings]",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        id: "firebase_" + n,
                                                        placeholder:
                                                          t.formTranslation
                                                            .settings.app[n],
                                                        name: "firebaseConfig.apiKey",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.firebaseConfig[n],
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.firebaseConfig,
                                                              n,
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.firebaseConfig
                                                      .serverKey.required
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
                                                                  .settings.app
                                                                  .serverKey +
                                                                  " " +
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .required
                                                              ) +
                                                                "\n                                        "
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
                                      t._v(" "),
                                      e("b-row", [
                                        e("div", { staticClass: "col-md-4" }, [
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
                                                    for: "firebase_client_emaail",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                            " +
                                                      t._s(
                                                        t.formTranslation
                                                          .settings.app
                                                          .client_emaail
                                                      ) +
                                                      "\n                                            "
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
                                                    rawName: "v-model",
                                                    value:
                                                      t.firebaseConfig
                                                        .client_emaail,
                                                    expression:
                                                      "firebaseConfig['client_emaail']",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id: "firebase_client_emaail",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .app.client_emaail,
                                                  name: "firebaseConfig.client_emaail",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.firebaseConfig
                                                      .client_emaail,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.firebaseConfig,
                                                        "client_emaail",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.firebaseConfig.client_emaail
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
                                                            .settings.app
                                                            .client_emaail +
                                                            " " +
                                                            t.formTranslation
                                                              .common.required
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("b-row", [
                                        e("div", { staticClass: "col-md-4" }, [
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
                                                    for: "firebase_privat_key",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .settings.app
                                                          .privat_key
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
                                                    rawName: "v-model",
                                                    value:
                                                      t.firebaseConfig
                                                        .privat_key,
                                                    expression:
                                                      "firebaseConfig.privat_key",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id: "firebase_privat_key",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .app.privat_key,
                                                  name: "firebaseConfig.apiKey",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.firebaseConfig.privat_key,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.firebaseConfig,
                                                        "privat_key",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.firebaseConfig.privat_key
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
                                                            .settings.app
                                                            .privat_key +
                                                            " " +
                                                            t.formTranslation
                                                              .common.required
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("b-row", [
                                        e("div", { staticClass: "col-md-4" }, [
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
                                                    for: "firebase_project_id",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .settings.app
                                                          .project_id
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
                                                    rawName: "v-model",
                                                    value:
                                                      t.firebaseConfig
                                                        .project_id,
                                                    expression:
                                                      "firebaseConfig.project_id",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  id: "firebase_project_id",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .app.project_id,
                                                  name: "firebaseConfig.apiKey",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.firebaseConfig.project_id,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.firebaseConfig,
                                                        "project_id",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.firebaseConfig.project_id
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
                                                            .settings.app
                                                            .project_id +
                                                            " " +
                                                            t.formTranslation
                                                              .common.required
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                      ]),
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
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-end",
                                        },
                                        [
                                          e(
                                            "b-button",
                                            {
                                              staticClass: "mr-2",
                                              attrs: { variant: "primary" },
                                              on: {
                                                click: t.saveCommonSettings,
                                              },
                                            },
                                            [
                                              e("i", {
                                                class: t.isLoading
                                                  ? "fa fa-spinner fa-spin"
                                                  : "fa fa-save",
                                              }),
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .save
                                                  )
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
      we = n(78),
      Ae = {
        data: function () {
          return {
            activeRouteClass: "router-link-exact-active router-link-active",
            newUser: window.request_data.new_user,
            showHardtLink: "off",
            AddonsList: we.a,
          };
        },
        mounted: function () {
          this.getRequestHelper();
        },
        methods: {
          getRequestHelper: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.showHardtLink = window.request_data.link_show_hide);
          },
        },
        computed: {
          currentRouteModule: function () {
            if (window.innerWidth < 1500) {
              var t = document.querySelector(".main-content .sidenav-toggler");
              t &&
                (t.classList.remove("active"),
                document
                  .querySelector(".main-content .sidenav-toggler")
                  .classList.remove("active"),
                document
                  .querySelector("body")
                  .classList.add("g-sidenav-hidden"),
                localStorage.setItem("sidebarToggle", !1));
            }
            return this.$route.meta.module;
          },
          isWoocommerceEnabled: function () {
            if (
              void 0 !== this.$store.state.userDataModule &&
              this.$store.state.userDataModule.user
            )
              return this.$store.state.userDataModule.user.woocommercePayment;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      xe = Object(h.a)(
        Ae,
        function () {
          var t,
            e,
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
            b = this,
            m = b._self._c;
          return m(
            "div",
            [
              m("b-row", [
                m("div", { staticClass: "col-12 col-md-3" }, [
                  m("div", { staticClass: "card" }, [
                    m("div", { staticClass: "card-header" }, [
                      m(
                        "div",
                        {
                          staticClass: "row",
                          attrs: { id: "dashboard-setting-panel" },
                        },
                        [
                          m("div", { staticClass: "col-md-12" }, [
                            m(
                              "ul",
                              {
                                staticClass:
                                  "navbar-nav iq-navbar-ul flex-md-column flex-row flex-md-nowrap flex-wrap",
                              },
                              [
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        staticStyle: { position: "relative" },
                                        attrs: {
                                          to: {
                                            name: "setting.general-setting",
                                          },
                                          "link-classes":
                                            "general_setting" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-cogs text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .general_settings,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .general_settings
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "patient" !== b.getUserRole() &&
                                b.kcCheckPermission("clinic_schedule")
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: { name: "clinic.schedule" },
                                          "link-classes":
                                            "clinic_schedule" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-home text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .holidays,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .holidays
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "doctor" === b.getUserRole() ||
                                ("receptionist" === b.getUserRole() &&
                                  b.kcCheckPermission("doctor_session_list"))
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: {
                                            name: "doctor.session.setting",
                                          },
                                          "link-classes":
                                            "doctor_session" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-calendar text-primary m-2",
                                          attrs: {
                                            "aria-hidden": "true",
                                            title:
                                              b.formTranslation.doctor_session
                                                .doc_sessions,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.doctor_session
                                                .doc_sessions
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: { name: "clinic.configuration" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-toggle-on text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .configurations,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .configurations
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.api &&
                                            null !== (t = b.AddonsList) &&
                                            void 0 !== t &&
                                            null !== (t = t.app) &&
                                            void 0 !== t &&
                                            t.message
                                              ? b.AddonsList.app.message
                                              : "",
                                          to: { name: "app-config" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-mobile-alt text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .app_config,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .app_config
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.api
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "app"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: { name: "email.template" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-envelope text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .email_template,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .email_template
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (e = b.AddonsList) &&
                                            void 0 !== e &&
                                            null !== (e = e.pro) &&
                                            void 0 !== e &&
                                            e.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: { name: "sms.template" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-sms text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .sms_template,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .sms_template
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (n = b.AddonsList) &&
                                            void 0 !== n &&
                                            null !== (n = n.webhooks) &&
                                            void 0 !== n &&
                                            n.message
                                              ? b.AddonsList.webhooks.message
                                              : "",
                                          to: { name: "webhooks" },
                                          "link-classes": [
                                            "webhooks",
                                            "webhooks.create",
                                            "webhooks.edit",
                                            "webhooks.log",
                                          ].includes(b.$route.name)
                                            ? b.activeRouteClass
                                            : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fab fa-usb text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.webhooks
                                                .webhooks,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.webhooks
                                                .webhooks
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        b.userData.addOns.webhooks
                                          ? b._e()
                                          : m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "webhooks"
                                                  )
                                                ),
                                              },
                                            }),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (i = b.AddonsList) &&
                                            void 0 !== i &&
                                            null !== (i = i.pro) &&
                                            void 0 !== i &&
                                            i.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: { name: "custom_notification" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-bell text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.common
                                                .custom_notification,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.common
                                                .custom_notification
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                ["administrator", "clinic_admin"].includes(
                                  b.getUserRole()
                                ) && b.kcCheckPermission("custom_form_list")
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: { to: { name: "custom_form" } },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fab fa-wpforms text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.common
                                                .custom_form,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.common
                                                .custom_form
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                ["administrator"].includes(b.getUserRole())
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.bodyChart &&
                                            null !== (r = b.AddonsList) &&
                                            void 0 !== r &&
                                            null !== (r = r.bodyChart) &&
                                            void 0 !== r &&
                                            r.message
                                              ? b.AddonsList.bodyChart.message
                                              : "",
                                          to: { name: "body_chart_setting" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-x-ray text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.common
                                                .encounter_body_chart,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.common
                                                .encounter_body_chart
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.bodyChart
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "bodyChart"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: {
                                            name: "setting.patient_setting",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-user-injured text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .patient_setting,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .patient_setting
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: {
                                            name: "setting.widget_setting",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-calendar text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.widget_setting
                                                .widget_setting,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.widget_setting
                                                .widget_setting
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (o = b.AddonsList) &&
                                            void 0 !== o &&
                                            null !== (o = o.pro) &&
                                            void 0 !== o &&
                                            o.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: { name: "google.event.template" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-calendar-day text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.google_event
                                                .template,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.google_event
                                                .template
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.googlemeet &&
                                            null !== (a = b.AddonsList) &&
                                            void 0 !== a &&
                                            null !== (a = a.googlemeet) &&
                                            void 0 !== a &&
                                            a.message
                                              ? b.AddonsList.googlemeet.message
                                              : "",
                                          to: { name: "setting.googlemeet" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-video text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.googlemeet
                                                .googlemeet,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.googlemeet
                                                .googlemeet
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.googlemeet
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "googlemeet"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.telemed &&
                                            null !== (s = b.AddonsList) &&
                                            void 0 !== s &&
                                            null !== (s = s.telemed) &&
                                            void 0 !== s &&
                                            s.message
                                              ? b.AddonsList.telemed.message
                                              : "",
                                          to: {
                                            name: "setting.ZoomOAuthConfig",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-video text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.zoom_telemed
                                                .zoom_telemed,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.zoom_telemed
                                                .zoom_telemed
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.telemed
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "telemed"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "patient" !== b.getUserRole() &&
                                b.kcCheckPermission("static_data_list")
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: { name: "static.data" },
                                          "link-classes":
                                            "static_data" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-list-alt text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .listings,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .listings
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                b.checkEnableModule("custom_fields") &&
                                ("administrator" === b.getUserRole() ||
                                  "clinic_admin" === b.getUserRole()) &&
                                b.kcCheckPermission("custom_field_list")
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: { to: { name: "custom.field" } },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-magic text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .custom_field,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .custom_field
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (l = b.AddonsList) &&
                                            void 0 !== l &&
                                            null !== (l = l.pro) &&
                                            void 0 !== l &&
                                            l.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: {
                                            name: "setting.comman_settings",
                                          },
                                          "link-classes":
                                            "comman_settings" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-wrench text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .pro_settings,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .pro_settings
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: { name: "payment.setting" },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-wallet text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .payment,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings.payment
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "doctor" !== b.getUserRole() &&
                                "false" == b.newUser
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (c = b.AddonsList) &&
                                            void 0 !== c &&
                                            null !== (c = c.pro) &&
                                            void 0 !== c &&
                                            c.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: {
                                            name: "setting.language_settings",
                                          },
                                          "link-classes":
                                            "language_settings" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                          disabled:
                                            1 != b.userData.addOns.kiviPro,
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-language text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .language_settings,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .language_settings
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "on" != b.userData.is_enable_google_cal ||
                                ("doctor" !== b.getUserRole() &&
                                  "receptionist" !== b.getUserRole())
                                  ? b._e()
                                  : m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (d = b.AddonsList) &&
                                            void 0 !== d &&
                                            null !== (d = d.pro) &&
                                            void 0 !== d &&
                                            d.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: {
                                            name: "setting.google_calender",
                                          },
                                          "link-classes":
                                            "google_calender" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                          disabled:
                                            1 != b.userData.addOns.kiviPro,
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-calendar-day text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.common
                                                .google_calendar_integration,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.common
                                                .google_calendar_integration
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    ),
                                b._v(" "),
                                "doctor" === b.getUserRole() &&
                                "on" == b.userData.is_enable_googleMeet
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.googlemeet &&
                                            null !== (u = b.AddonsList) &&
                                            void 0 !== u &&
                                            null !== (u = u.googlemeet) &&
                                            void 0 !== u &&
                                            u.message
                                              ? b.AddonsList.googlemeet.message
                                              : "",
                                          to: {
                                            name: "setting.google_meet_config",
                                          },
                                          "link-classes":
                                            "google_meet_config" ===
                                            b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                          disabled:
                                            1 != b.userData.addOns.googlemeet,
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-video text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.googlemeet
                                                .google_meet_intergration,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.googlemeet
                                                .google_meet_intergration
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.googlemeet
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "googlemeet"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "doctor" !== b.getUserRole() ||
                                ("on" != b.userData.is_zoom_config_enabled &&
                                  "Yes" !==
                                    b.userData
                                      .is_zoom_server_to_server_oauth_enabled)
                                  ? b._e()
                                  : m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.telemed &&
                                            null !== (p = b.AddonsList) &&
                                            void 0 !== p &&
                                            null !== (p = p.telemed) &&
                                            void 0 !== p &&
                                            p.message
                                              ? b.AddonsList.telemed.message
                                              : "",
                                          to: {
                                            name: "doctor.telemed.setting",
                                          },
                                          "link-classes":
                                            "ZoomOAuth" === b.currentRouteModule
                                              ? b.activeRouteClass
                                              : "",
                                          disabled:
                                            1 != b.userData.addOns.telemed,
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-video text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.zoom_telemed
                                                .zoom_telemed,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.zoom_telemed
                                                .zoom_telemed
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "ZoomOAuth"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    ),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          to: {
                                            name: "setting.appointment-setting",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-calendar-week text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.appointments
                                                .restrict_appointment,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.appointments
                                                .restrict_appointment
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (h = b.AddonsList) &&
                                            void 0 !== h &&
                                            null !== (h = h.pro) &&
                                            void 0 !== h &&
                                            h.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: {
                                            name: "setting.permission-setting",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fas fa-lock text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.settings
                                                .permission_setting,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.settings
                                                .permission_setting
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                                b._v(" "),
                                "administrator" === b.getUserRole()
                                  ? m(
                                      "b-nav-item",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          title:
                                            1 != b.userData.addOns.kiviPro &&
                                            null !== (f = b.AddonsList) &&
                                            void 0 !== f &&
                                            null !== (f = f.pro) &&
                                            void 0 !== f &&
                                            f.message
                                              ? b.AddonsList.pro.message
                                              : "",
                                          to: {
                                            name: "setting.dashboard-sidebar-setting",
                                          },
                                        },
                                      },
                                      [
                                        m("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: !0 },
                                            },
                                          ],
                                          staticClass:
                                            "fa fa-bars text-primary m-2",
                                          attrs: {
                                            title:
                                              b.formTranslation.common
                                                .sidebar_setting,
                                          },
                                        }),
                                        b._v(" "),
                                        m("span", [
                                          b._v(
                                            b._s(
                                              b.formTranslation.common
                                                .sidebar_setting
                                            )
                                          ),
                                        ]),
                                        b._v(" "),
                                        1 != b.userData.addOns.kiviPro
                                          ? m("span", {
                                              domProps: {
                                                innerHTML: b._s(
                                                  b.kivicareProFeatureIcon(
                                                    "pro"
                                                  )
                                                ),
                                              },
                                            })
                                          : b._e(),
                                      ]
                                    )
                                  : b._e(),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                b._v(" "),
                m("div", { staticClass: "col-12 col-md-9" }, [
                  m("div", [
                    m(
                      "div",
                      [
                        m(
                          "transition",
                          { attrs: { name: "fade", mode: "out-in" } },
                          [m("router-view")],
                          1
                        ),
                      ],
                      1
                    ),
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
      ze = n(375).a,
      Ce =
        (n(706),
        Object(h.a)(
          ze,
          function () {
            var t = this,
              e = t._self._c;
            return e("b-row", [
              t.formLoader
                ? e(
                    "div",
                    { staticClass: "page-loader-section" },
                    [e("loader-component-2")],
                    1
                  )
                : e(
                    "div",
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "shadow",
                          attrs: {
                            "body-class": "",
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
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.patient_bill
                                                    .payment_setting
                                                ) +
                                                " "
                                            ),
                                            "off" == t.request_status
                                              ? e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#payment-setting",
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
                                  t._v(" "),
                                  e("hr"),
                                  t._v(" "),
                                  e(
                                    "b-row",
                                    [
                                      e(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.patient_bill
                                                    .woocommerce_payment_gateway
                                                ) +
                                                " "
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
                            e("div", { staticClass: "col-md-12 ml-4" }, [
                              e(
                                "div",
                                [
                                  e(
                                    "b-row",
                                    [
                                      e("b-col", [
                                        e(
                                          "div",
                                          { staticClass: "form-group ml-2" },
                                          [
                                            e(
                                              "b-form-checkbox",
                                              {
                                                staticClass: "inline-field",
                                                attrs: {
                                                  size: "md",
                                                  id: "checkbox-1",
                                                  name: "checkbox-1",
                                                  value: "on",
                                                  "unchecked-value": "off",
                                                  switch: "",
                                                  disabled:
                                                    1 !=
                                                      t.userData.addOns
                                                        .kiviPro &&
                                                    1 !=
                                                      t.userData.addOns
                                                        .telemed &&
                                                    1 !=
                                                      t.userData.addOns
                                                        .googlemeet,
                                                },
                                                on: {
                                                  change:
                                                    t.onPaymentStatusChange,
                                                },
                                                model: {
                                                  value: t.status,
                                                  callback: function (e) {
                                                    t.status = e;
                                                  },
                                                  expression: "status",
                                                },
                                              },
                                              [
                                                e("b", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .widget_setting
                                                        .enable_woocommerce
                                                    )
                                                  ),
                                                ]),
                                                1 !=
                                                  t.userData.addOns.kiviPro &&
                                                1 !=
                                                  t.userData.addOns.telemed &&
                                                1 !=
                                                  t.userData.addOns.googlemeet
                                                  ? e("span", {
                                                      domProps: {
                                                        innerHTML: t._s(
                                                          t.kivicareProAndAddonIcon
                                                        ),
                                                      },
                                                    })
                                                  : t._e(),
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
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e(
                            "b-row",
                            {
                              staticClass: "m-2",
                              attrs: { sm: "12", md: "12", lg: "12" },
                            },
                            [
                              t._v(
                                "\n             " +
                                  t._s(
                                    t.formTranslation.patient_bill
                                      .woocommerce_payment_notice
                                  ) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
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
                                          attrs: { sm: "8", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.paypal
                                                  .paypal_setting
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
                          e(
                            "form",
                            {
                              attrs: {
                                id: "paypalDataForm",
                                name: "paypalDataForm",
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
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12 ml-4" }, [
                                  e(
                                    "div",
                                    [
                                      e(
                                        "b-row",
                                        [
                                          e("b-col", [
                                            e(
                                              "div",
                                              {
                                                staticClass: "form-group ml-2",
                                              },
                                              [
                                                e(
                                                  "b-form-checkbox",
                                                  {
                                                    staticClass:
                                                      "d-inline-block",
                                                    attrs: {
                                                      size: "md",
                                                      id: "paymentPaypalSwitch",
                                                      name: "checkbox-1",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change: t.handleSubmit,
                                                    },
                                                    model: {
                                                      value:
                                                        t.paypalConfigData
                                                          .enablePaypal,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.paypalConfigData,
                                                          "enablePaypal",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "paypalConfigData.enablePaypal",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .paypal
                                                            .paypal_status
                                                        )
                                                      ),
                                                    ]),
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
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                t.paypalConfigData.enablePaypal
                                  ? e("div", { staticClass: "col-md-12" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-3" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "mode" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.paypal
                                                        .mode
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
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
                                                      id: "mode",
                                                      label: "label",
                                                      "track-by": "id",
                                                      options: t.mode_options,
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
                                                                    t
                                                                      .formTranslation
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
                                                        t.paypalConfigData.mode,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.paypalConfigData,
                                                          "mode",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "paypalConfigData.mode",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.submitted &&
                                                  !t.$v.paypalConfigData.mode
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
                                                                .paypal
                                                                .paypal_mode_required
                                                            )
                                                          ),
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
                                        t.paypalConfigData.enablePaypal
                                          ? e(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
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
                                                          for: "client_id",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .paypal.client_id
                                                          ) +
                                                            "\n                    "
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
                                                            t.paypalConfigData
                                                              .client_id,
                                                          expression:
                                                            "paypalConfigData.client_id",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        id: "client_id",
                                                        name: "postfix_value",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.paypalConfigData
                                                            .client_id,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.paypalConfigData,
                                                              "client_id",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.paypalConfigData
                                                      .client_id.required
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
                                                                  .paypal
                                                                  .paypal_client_id_required
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.paypalConfigData.enablePaypal
                                          ? e(
                                              "div",
                                              { staticClass: "col-md-3" },
                                              [
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
                                                          for: "client_secret",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .paypal
                                                              .client_secret
                                                          ) +
                                                            "\n                    "
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
                                                            t.paypalConfigData
                                                              .client_secret,
                                                          expression:
                                                            "paypalConfigData.client_secret",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        id: "postfix_value",
                                                        name: "client_secret",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.paypalConfigData
                                                            .client_secret,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.paypalConfigData,
                                                              "client_secret",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.paypalConfigData
                                                      .client_secret.required
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
                                                                  .paypal
                                                                  .paypal_client_secret_required
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-3" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "currency" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.paypal
                                                        .currency
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
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
                                                      id: "currency",
                                                      label: "label",
                                                      "track-by": "id",
                                                      options: t.currency_list,
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
                                                                    t
                                                                      .formTranslation
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
                                                        t.paypalConfigData
                                                          .currency,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.paypalConfigData,
                                                          "currency",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "paypalConfigData.currency",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.submitted &&
                                                  !t.$v.paypalConfigData
                                                    .currency.required
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
                                                                .paypal
                                                                .paypal_currency_required
                                                            )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                    ])
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row m-2" },
                                [
                                  t.paypalConfigData.enablePaypal
                                    ? e(
                                        "b-row",
                                        {
                                          attrs: {
                                            sm: "12",
                                            md: "12",
                                            lg: "12",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.formTranslation.paypal
                                                  .paypal_currency_notice
                                              ) +
                                              "\n            "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.paypalConfigData.enablePaypal
                                ? e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
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
                                              staticClass: "btn btn-primary",
                                              attrs: {
                                                type: "submit",
                                                disabled: t.loading,
                                                id: "btn-paypal-submit",
                                              },
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
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "b-card",
                        {
                          staticClass: "shadow",
                          attrs: {
                            "body-class": "",
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
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.patient_bill
                                                    .local_payment_gateway
                                                ) +
                                                "  "
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
                            e("div", { staticClass: "col-md-12 ml-4" }, [
                              e(
                                "div",
                                [
                                  e(
                                    "b-row",
                                    [
                                      e("b-col", [
                                        e(
                                          "div",
                                          { staticClass: "form-group ml-2" },
                                          [
                                            e(
                                              "b-form-checkbox",
                                              {
                                                staticClass: "d-inline-block",
                                                attrs: {
                                                  size: "md",
                                                  id: "localpaymentstatus",
                                                  name: "checkbox-1",
                                                  value: "on",
                                                  "unchecked-value": "off",
                                                  switch: "",
                                                },
                                                on: {
                                                  change:
                                                    t.localPaymentStatusChange,
                                                },
                                                model: {
                                                  value: t.local_payment_status,
                                                  callback: function (e) {
                                                    t.local_payment_status = e;
                                                  },
                                                  expression:
                                                    "local_payment_status",
                                                },
                                              },
                                              [
                                                e("b", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .widget_setting
                                                        .enable_local_payment
                                                    )
                                                  ),
                                                ]),
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
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
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
                                          attrs: { sm: "8", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .razorpay +
                                                  " " +
                                                  t.formTranslation.common
                                                    .settings
                                              ) + "\n                "
                                            ),
                                            t.userData.addOns.razorpay
                                              ? t._e()
                                              : e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "#",
                                                      target: "_blank",
                                                    },
                                                  },
                                                  [
                                                    e("span", {
                                                      domProps: {
                                                        innerHTML: t._s(
                                                          t.kivicareProFeatureIcon(
                                                            "Razorpay",
                                                            "Available In Razorpay Addon"
                                                          )
                                                        ),
                                                      },
                                                    }),
                                                  ]
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
                          t.userData.addOns.razorpay
                            ? e(
                                "form",
                                {
                                  attrs: {
                                    id: "razorpayDataForm",
                                    name: "razorpayDataForm",
                                    novalidate: !0,
                                    enctype: "multipart/form-data",
                                  },
                                  on: {
                                    submit: function (e) {
                                      return (
                                        e.preventDefault(),
                                        t.handleRazorpaySubmit.apply(
                                          null,
                                          arguments
                                        )
                                      );
                                    },
                                  },
                                },
                                [
                                  e("div", { staticClass: "row" }, [
                                    e(
                                      "div",
                                      { staticClass: "col-md-12 ml-4" },
                                      [
                                        e(
                                          "div",
                                          [
                                            e(
                                              "b-row",
                                              [
                                                e("b-col", [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-group ml-2",
                                                    },
                                                    [
                                                      e(
                                                        "b-form-checkbox",
                                                        {
                                                          staticClass:
                                                            "d-inline-block",
                                                          attrs: {
                                                            size: "md",
                                                            id: "paymentRazorpaySwitch",
                                                            name: "paymentRazorpaySwitch",
                                                            switch: "",
                                                          },
                                                          on: {
                                                            change:
                                                              t.handleRazorpaySubmit,
                                                          },
                                                          model: {
                                                            value:
                                                              t
                                                                .razorPayConfigData
                                                                .enable,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.razorPayConfigData,
                                                                "enable",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "razorPayConfigData.enable",
                                                          },
                                                        },
                                                        [
                                                          e("b", [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .razorpay +
                                                                  " " +
                                                                  t
                                                                    .formTranslation
                                                                    .receptionist
                                                                    .dt_lbl_status
                                                              )
                                                            ),
                                                          ]),
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
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  t.razorPayConfigData.enable
                                    ? e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-4" }, [
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
                                                    for: "paymentRazorpayApiKey",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .api_key
                                                    ) + "\n                    "
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
                                                      t.razorPayConfigData
                                                        .api_key,
                                                    expression:
                                                      "razorPayConfigData.api_key",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "paymentRazorpayApiKey",
                                                  name: "paymentRazorpayApiKey",
                                                  placeholder:
                                                    t.formTranslation.doctor
                                                      .api_key,
                                                },
                                                domProps: {
                                                  value:
                                                    t.razorPayConfigData
                                                      .api_key,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.razorPayConfigData,
                                                        "api_key",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.razorpaySubmitted &&
                                              !t.$v.razorPayConfigData.api_key
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
                                                            .doctor
                                                            .api_key_required
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "paymentRazorpaySecretKey",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .api_secret
                                                    ) + "\n                    "
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
                                                      t.razorPayConfigData
                                                        .secret_key,
                                                    expression:
                                                      "razorPayConfigData.secret_key",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "paymentRazorpaySecretKey",
                                                  name: "paymentRazorpaySecretKey",
                                                  placeholder:
                                                    t.formTranslation.doctor
                                                      .api_secret,
                                                },
                                                domProps: {
                                                  value:
                                                    t.razorPayConfigData
                                                      .secret_key,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.razorPayConfigData,
                                                        "secret_key",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.razorpaySubmitted &&
                                              !t.$v.razorPayConfigData
                                                .secret_key.required
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
                                                            .doctor
                                                            .api_secret_required
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "paymentRazorpayCurrency",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.paypal
                                                        .currency
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
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
                                                      id: "paymentRazorpayCurrency",
                                                      label: "label",
                                                      "track-by": "id",
                                                      disabled: !1,
                                                      options:
                                                        t.razorpay_currency_list,
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
                                                                    t
                                                                      .formTranslation
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
                                                        t.razorPayConfigData
                                                          .currency,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.razorPayConfigData,
                                                          "currency",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "razorPayConfigData.currency",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.razorpaySubmitted &&
                                                  !t.$v.razorPayConfigData
                                                    .currency.required
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
                                                                .paypal
                                                                .paypal_currency_required
                                                            )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "row m-2" },
                                    [
                                      t.razorPayConfigData.enable
                                        ? e(
                                            "b-row",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "12",
                                                lg: "12",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .razorpay_currency_notice
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  t.razorPayConfigData.enable
                                    ? e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
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
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled: t.razorpayLoading,
                                                    id: "btn-razorpay-submit",
                                                  },
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
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                ]
                              )
                            : t._e(),
                        ]
                      ),
                      t._v(" "),
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
                                          attrs: { sm: "8", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .stripe_payment +
                                                  " " +
                                                  t.formTranslation.common
                                                    .settings
                                              ) + "\n                "
                                            ),
                                            t.userData.addOns.stripepay
                                              ? t._e()
                                              : e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "#",
                                                      target: "_blank",
                                                    },
                                                  },
                                                  [
                                                    e("span", {
                                                      domProps: {
                                                        innerHTML: t._s(
                                                          t.kivicareProFeatureIcon(
                                                            "Stripe",
                                                            "Available In Stripe payment Addon"
                                                          )
                                                        ),
                                                      },
                                                    }),
                                                  ]
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
                          t.userData.addOns.stripepay
                            ? e(
                                "form",
                                {
                                  attrs: {
                                    id: "stripepayDataForm",
                                    name: "stripepayDataForm",
                                    novalidate: !0,
                                    enctype: "multipart/form-data",
                                  },
                                  on: {
                                    submit: function (e) {
                                      return (
                                        e.preventDefault(),
                                        t.handleStripepaySubmit.apply(
                                          null,
                                          arguments
                                        )
                                      );
                                    },
                                  },
                                },
                                [
                                  e("div", { staticClass: "row" }, [
                                    e(
                                      "div",
                                      { staticClass: "col-md-12 ml-4" },
                                      [
                                        e(
                                          "div",
                                          [
                                            e(
                                              "b-row",
                                              [
                                                e("b-col", [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-group ml-2",
                                                    },
                                                    [
                                                      e(
                                                        "b-form-checkbox",
                                                        {
                                                          staticClass:
                                                            "d-inline-block",
                                                          attrs: {
                                                            size: "md",
                                                            id: "paymentStripepaySwitch",
                                                            name: "paymentStripepaySwitch",
                                                            switch: "",
                                                          },
                                                          on: {
                                                            change:
                                                              t.handleStripepaySubmit,
                                                          },
                                                          model: {
                                                            value:
                                                              t
                                                                .stripePayConfigData
                                                                .enable,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.stripePayConfigData,
                                                                "enable",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "stripePayConfigData.enable",
                                                          },
                                                        },
                                                        [
                                                          e("b", [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .stripe_payment +
                                                                  " " +
                                                                  t
                                                                    .formTranslation
                                                                    .receptionist
                                                                    .dt_lbl_status
                                                              )
                                                            ),
                                                          ]),
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
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  t.stripePayConfigData.enable
                                    ? e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-3" }, [
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
                                                    for: "paymentStripepayMode",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.paypal
                                                        .mode
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "kivi-pr" },
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
                                                              .stripePayConfigData
                                                              .mode,
                                                          expression:
                                                            "stripePayConfigData.mode",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        id: "paymentStripepayMode",
                                                      },
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
                                                            t.stripePayConfigData,
                                                            "mode",
                                                            e.target.multiple
                                                              ? n
                                                              : n[0]
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "sandbox",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .paypal.sandbox
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "live",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .paypal.live
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t.stripepaySubmitted &&
                                                  !t.$v.stripePayConfigData.mode
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
                                                                .paypal
                                                                .paypal_mode_required
                                                            )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-3" }, [
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
                                                    for: "paymentStripepayPublishable",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .stripe_publishable_key
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "kivi-pr" },
                                                [
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.stripePayConfigData
                                                            .publishable_key,
                                                        expression:
                                                          "stripePayConfigData.publishable_key",
                                                      },
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      id: "paymentStripepayPublishable",
                                                      name: "paymentStripepayPublishable",
                                                      placeholder:
                                                        t.formTranslation.common
                                                          .enter_publishable_key,
                                                    },
                                                    domProps: {
                                                      value:
                                                        t.stripePayConfigData
                                                          .publishable_key,
                                                    },
                                                    on: {
                                                      input: function (e) {
                                                        e.target.composing ||
                                                          t.$set(
                                                            t.stripePayConfigData,
                                                            "publishable_key",
                                                            e.target.value
                                                          );
                                                      },
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.stripepaySubmitted &&
                                                  !t.$v.stripePayConfigData
                                                    .publishable_key.required
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
                                                                .publishable_key_required
                                                            )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-3" }, [
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
                                                    for: "paymentStripepayApiKey",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .stripe_secret_key
                                                    ) + "\n                    "
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
                                                      t.stripePayConfigData
                                                        .api_key,
                                                    expression:
                                                      "stripePayConfigData.api_key",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "paymentStripepayApiKey",
                                                  name: "paymentStripepayApiKey",
                                                  placeholder:
                                                    t.formTranslation.common
                                                      .enter_stripe_secret_key,
                                                },
                                                domProps: {
                                                  value:
                                                    t.stripePayConfigData
                                                      .api_key,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.stripePayConfigData,
                                                        "api_key",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.stripepaySubmitted &&
                                              !t.$v.stripePayConfigData.api_key
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
                                                            .doctor
                                                            .api_secret_required
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-3" }, [
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
                                                    for: "paymentStripepayCurrency",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.paypal
                                                        .currency
                                                    ) + " "
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [t._v(" *")]
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
                                                      id: "paymentStripepayCurrency",
                                                      label: "label",
                                                      "track-by": "id",
                                                      options:
                                                        t.stripeCurrencyOptions,
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
                                                                    t
                                                                      .formTranslation
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
                                                        t.stripePayConfigData
                                                          .currency,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.stripePayConfigData,
                                                          "currency",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "stripePayConfigData.currency",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.stripepaySubmitted &&
                                                  !t.$v.stripePayConfigData
                                                    .currency.required
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
                                                                .stripe_currency_required
                                                            )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "row m-2" },
                                    [
                                      t.stripePayConfigData.enable
                                        ? e(
                                            "b-row",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "12",
                                                lg: "12",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .stripe_payment_currency_match
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  t.stripePayConfigData.enable
                                    ? e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
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
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled:
                                                      t.stripepayLoading,
                                                    id: "btn-stripepay-submit",
                                                  },
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
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                ]
                              )
                            : t._e(),
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
          "c6abc22c",
          null
        ).exports),
      ke = n(376).a,
      Se = Object(h.a)(
        ke,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
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
                                          t.formTranslation.appointments
                                            .restrict_appointment_detail
                                        ) + " "
                                      ),
                                      "off" == t.request_status
                                        ? e(
                                            "a",
                                            {
                                              attrs: {
                                                href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#appointment-setting",
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
                    e(
                      "form",
                      {
                        attrs: {
                          id: "patient form",
                          name: "patient form",
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
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
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
                                        attrs: { for: "post_appointment" },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.appointments
                                                .post_appointment
                                            ) +
                                            "\n                  "
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
                                      { attrs: { size: "md" } },
                                      [
                                        e("b-form-input", {
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.restrictAppointment.post_book
                                                .$error,
                                          },
                                          attrs: {
                                            id: "post_appointment",
                                            required: "required",
                                            name: "price",
                                            type: "number",
                                            min: "0",
                                            max: "100000000000",
                                            disabled: t.isDisable,
                                          },
                                          model: {
                                            value:
                                              t.restrictAppointment.post_book,
                                            callback: function (e) {
                                              t.$set(
                                                t.restrictAppointment,
                                                "post_book",
                                                e
                                              );
                                            },
                                            expression:
                                              "restrictAppointment.post_book",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.restrictAppointment.post_book.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.appointments
                                                  .post_appointment_required
                                              ) + "\n                  "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.restrictAppointment.post_book
                                          .minValue &&
                                          t.$v.restrictAppointment.post_book
                                            .maxValue)
                                      ? t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.appointments
                                                  .post_appointment_length
                                              ) + "\n                  "
                                            ),
                                          ]
                                        ),
                                    t._v(" "),
                                    t.prevValCheck
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.appointments
                                                    .post_day_must_be_greater_then_pre_day
                                                ) +
                                                "\n                  "
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
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "pre_appointment" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.appointments
                                              .pre_appointment
                                          ) + "\n                  "
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
                                      { attrs: { size: "md" } },
                                      [
                                        e("b-form-input", {
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.restrictAppointment.pre_book
                                                .$error,
                                          },
                                          attrs: {
                                            id: "pre_appointment",
                                            required: "required",
                                            name: "price",
                                            type: "number",
                                            min: "0",
                                            max: "100000000000",
                                            disabled: t.isDisable,
                                          },
                                          model: {
                                            value:
                                              t.restrictAppointment.pre_book,
                                            callback: function (e) {
                                              t.$set(
                                                t.restrictAppointment,
                                                "pre_book",
                                                e
                                              );
                                            },
                                            expression:
                                              "restrictAppointment.pre_book",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.restrictAppointment.pre_book.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.appointments
                                                  .pre_appointment_required
                                              ) + "\n                  "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.restrictAppointment.pre_book
                                          .minValue &&
                                          t.$v.restrictAppointment.pre_book
                                            .maxValue)
                                      ? t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.appointments
                                                  .pre_appointment_length
                                              ) + "\n                  "
                                            ),
                                          ]
                                        ),
                                  ],
                                  1
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", [
                          e("div", { staticClass: "col-md-12" }, [
                            e("p", [
                              t._v(
                                " " +
                                  t._s(
                                    t.formTranslation.appointments.pre_post_note
                                  ) +
                                  " "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          "b-row",
                          { staticClass: "mt-2 ml-4" },
                          [
                            e(
                              "b-col",
                              { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                          id: "checkbox-same-day-booking-only",
                                          name: "checkbox-same-day-booking-only",
                                          value: "on",
                                          "unchecked-value": "off",
                                          switch: "",
                                        },
                                        on: {
                                          change: t.onOnlySameDayBookChange,
                                        },
                                        model: {
                                          value:
                                            t.restrictAppointment
                                              .only_same_day_book,
                                          callback: function (e) {
                                            t.$set(
                                              t.restrictAppointment,
                                              "only_same_day_book",
                                              e
                                            );
                                          },
                                          expression:
                                            "restrictAppointment.only_same_day_book",
                                        },
                                      },
                                      [
                                        e("b", [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.appointments
                                                  .same_day_booking_only_lbl
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
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e(
                              "div",
                              { staticClass: "d-flex justify-content-end" },
                              [
                                e(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      type: "submit",
                                      disabled: t.restrictAppointmentLoading,
                                    },
                                  },
                                  [
                                    e("i", {
                                      class: t.restrictAppointmentLoading
                                        ? "fa fa-spinner fa-spin"
                                        : "fa fa-save",
                                    }),
                                    t._v(
                                      " " +
                                        t._s(
                                          t.restrictAppointmentLoading
                                            ? t.formTranslation.common.loading
                                            : t.formTranslation.common.save
                                        ) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                e(
                  "b-card",
                  {
                    staticClass: "card-body",
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
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .multi_file_upload
                                          ) +
                                          "  "
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
                    e(
                      "b-row",
                      { staticClass: "mt-2 ml-2" },
                      [
                        e(
                          "b-col",
                          { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                      id: "checkbox-1",
                                      name: "checkbox-1",
                                      value: "on",
                                      "unchecked-value": "off",
                                      switch: "",
                                    },
                                    on: { change: t.onFileUploadStatusChange },
                                    model: {
                                      value: t.status,
                                      callback: function (e) {
                                        t.status = e;
                                      },
                                      expression: "status",
                                    },
                                  },
                                  [
                                    e("b", [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment_multi_file_upload
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
                t._v(" "),
                e(
                  "b-card",
                  {
                    staticClass: "card-body",
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
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment_daily_reminder
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
                    e(
                      "b-row",
                      { staticClass: "mt-2 ml-3" },
                      [
                        e("b-col", { attrs: { sm: "12", md: "4", lg: "4" } }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    size: "md",
                                    id: "checkbox-2",
                                    value: "on",
                                    name: "checkbox-2",
                                    "unchecked-value": "off",
                                    switch: "",
                                  },
                                  model: {
                                    value: t.reminder.status,
                                    callback: function (e) {
                                      t.$set(t.reminder, "status", e);
                                    },
                                    expression: "reminder.status",
                                  },
                                },
                                [
                                  e("b", [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .appointment_email_reminder
                                        ) +
                                        " "
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        1 == t.userData.addOns.kiviPro
                          ? e(
                              "b-col",
                              { attrs: { sm: "12", md: "4", lg: "4" } },
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
                                          id: "checkbox-3",
                                          value: "on",
                                          name: "checkbox-2",
                                          "unchecked-value": "off",
                                          switch: "",
                                        },
                                        model: {
                                          value: t.reminder.sms_status,
                                          callback: function (e) {
                                            t.$set(t.reminder, "sms_status", e);
                                          },
                                          expression: "reminder.sms_status",
                                        },
                                      },
                                      [
                                        e("b", [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.appointments
                                                  .appointment_sms_reminder
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
                            )
                          : t._e(),
                        t._v(" "),
                        1 == t.userData.addOns.kiviPro &&
                        t.userData.pro_version >= "1.2.0"
                          ? e(
                              "b-col",
                              { attrs: { sm: "12", md: "4", lg: "4" } },
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
                                          id: "checkbox-4",
                                          value: "on",
                                          name: "checkbox-2",
                                          "unchecked-value": "off",
                                          switch: "",
                                        },
                                        model: {
                                          value: t.reminder.whatapp_status,
                                          callback: function (e) {
                                            t.$set(
                                              t.reminder,
                                              "whatapp_status",
                                              e
                                            );
                                          },
                                          expression: "reminder.whatapp_status",
                                        },
                                      },
                                      [
                                        e("b", [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.appointments
                                                  .appointment_whatsapp_reminder
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
                            )
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    "on" == t.reminder.status ||
                    "on" == t.reminder.whatapp_status ||
                    "on" == t.reminder.sms_status
                      ? e(
                          "b-row",
                          { staticClass: "mt-2" },
                          [
                            e(
                              "b-col",
                              { attrs: { sm: "2", md: "2", lg: "2" } },
                              [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e("label", [
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.appointments
                                                .notice_of_appointment_reminder
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "b-select",
                                      {
                                        staticClass:
                                          "form-control text-capitalize",
                                        attrs: { name: "option" },
                                        model: {
                                          value: t.reminder.time,
                                          callback: function (e) {
                                            t.$set(t.reminder, "time", e);
                                          },
                                          expression: "reminder.time",
                                        },
                                      },
                                      t._l(48, function (n) {
                                        return e(
                                          "option",
                                          {
                                            key: n.id,
                                            domProps: {
                                              value: n < 10 ? "0" + n : n,
                                            },
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  n < 10
                                                    ? "0" + n + ":00"
                                                    : n + ":00"
                                                )
                                            ),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "b-col",
                              { attrs: { sm: "8", md: "8", lg: "8" } },
                              [
                                e("div", { staticClass: "form-group m-2" }, [
                                  e("p", [e("b")]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
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
                                        t._s(t.formTranslation.common.loading) +
                                        "\n            "
                                    ),
                                  ]
                                )
                              : e(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: { click: t.appointmentReminder },
                                  },
                                  [
                                    e("i", { staticClass: "fa fa-save" }),
                                    t._v(
                                      " " +
                                        t._s(t.formTranslation.common.save) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                          ]
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-card",
                  {
                    staticClass: "card-body",
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
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment_time_format +
                                              " " +
                                              t.formTranslation.common
                                                .deprecated
                                          ) +
                                          " \n              "
                                      ),
                                      e(
                                        "a",
                                        {
                                          attrs: {
                                            href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#appointment-setting",
                                            target: "_blank",
                                          },
                                        },
                                        [
                                          e("i", {
                                            staticClass:
                                              "fa fa-question-circle",
                                          }),
                                        ]
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
                    e(
                      "b-row",
                      { staticClass: "mt-2 ml-2" },
                      [
                        e(
                          "b-col",
                          { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                      id: "checkbox-timeformat",
                                      name: "checkbox-timeformat",
                                      value: "on",
                                      "unchecked-value": "off",
                                      switch: "",
                                      disabled: !0,
                                    },
                                    on: { change: t.onAppointmentTimeFormat },
                                  },
                                  [
                                    e("b", [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment_time_24_format
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
                t._v(" "),
                e(
                  "b-card",
                  {
                    staticClass: "card-body",
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
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        t._s(
                                          t.formTranslation.appointments
                                            .appointment_description_notes
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
                    e(
                      "b-row",
                      { staticClass: "mt-2 ml-2" },
                      [
                        e("b-col", { attrs: { sm: "6", md: "6", lg: "6" } }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    size: "md",
                                    id: "checkbox-appointment-description",
                                    name: "checkbox-appointment-description",
                                    value: "on",
                                    "unchecked-value": "off",
                                    switch: "",
                                  },
                                  on: {
                                    change: t.onAppointmentDescriptionChange,
                                  },
                                  model: {
                                    value: t.onAppointmentDescription,
                                    callback: function (e) {
                                      t.onAppointmentDescription = e;
                                    },
                                    expression: "onAppointmentDescription",
                                  },
                                },
                                [
                                  e("b", [
                                    t._v(
                                      t._s(
                                        t.formTranslation.appointments
                                          .appointment_description
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
                        e("b-col", { attrs: { sm: "6", md: "6", lg: "6" } }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    size: "md",
                                    id: "checkbox-appointment-patient_info",
                                    name: "checkbox-appointment-patient_info",
                                    value: "on",
                                    "unchecked-value": "off",
                                    switch: "",
                                  },
                                  on: {
                                    change: t.onAppointmentPatientInfoChange,
                                  },
                                  model: {
                                    value: t.onAppointmentPatientInfo,
                                    callback: function (e) {
                                      t.onAppointmentPatientInfo = e;
                                    },
                                    expression: "onAppointmentPatientInfo",
                                  },
                                },
                                [
                                  e("b", [
                                    t._v(
                                      t._s(
                                        t.formTranslation.appointments
                                          .show_patient_information
                                      )
                                    ),
                                  ]),
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
                ),
                t._v(" "),
                e(
                  "b-card",
                  {
                    staticClass: "card-body",
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
                                    e("h2", { staticClass: "mb-0" }, [
                                      t._v(
                                        t._s(
                                          t.formTranslation.appointments
                                            .appointment_cancellation_buffer
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
                    e("b-row", { staticClass: "mt-2 ml-2" }, [
                      e("div", [
                        e("div", { staticClass: "col-md-12" }, [
                          e("p", [
                            t._v(
                              " " +
                                t._s(
                                  t.formTranslation.appointments
                                    .appointment_cancellation_buffer_note
                                ) +
                                " "
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e(
                      "b-row",
                      { staticClass: "mt-2 ml-4" },
                      [
                        e(
                          "b-col",
                          { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                      id: "checkbox-cancellation-buffer",
                                      name: "checkbox-cancellation-buffer",
                                      value: "on",
                                      "unchecked-value": "off",
                                      switch: "",
                                    },
                                    on: { change: t.cancellationBufferStatus },
                                    model: {
                                      value: t.cancellation_buffer.status,
                                      callback: function (e) {
                                        t.$set(
                                          t.cancellation_buffer,
                                          "status",
                                          e
                                        );
                                      },
                                      expression: "cancellation_buffer.status",
                                    },
                                  },
                                  [
                                    e("b", [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.appointments
                                              .enable_cancellation_buffer_lbl
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
                    t._v(" "),
                    "on" == t.cancellation_buffer.status
                      ? e(
                          "b-row",
                          { staticClass: "mt-2" },
                          [
                            e(
                              "b-col",
                              { attrs: { sm: "2", md: "2", lg: "2" } },
                              [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e("label", [
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.appointments
                                                .notice_of_cancellation_buffer
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "b-select",
                                      {
                                        staticClass:
                                          "form-control text-capitalize",
                                        attrs: { name: "option" },
                                        model: {
                                          value: t.cancellation_buffer.time,
                                          callback: function (e) {
                                            t.$set(
                                              t.cancellation_buffer,
                                              "time",
                                              e
                                            );
                                          },
                                          expression:
                                            "cancellation_buffer.time",
                                        },
                                      },
                                      t._l(t.intervalOptions, function (n, i) {
                                        return e(
                                          "option",
                                          { key: i, domProps: { value: n } },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(n.label) +
                                                "\n              "
                                            ),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
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
                                        t._s(t.formTranslation.common.loading) +
                                        "\n            "
                                    ),
                                  ]
                                )
                              : e(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: {
                                      click: t.appointmentCancellationBuffer,
                                    },
                                  },
                                  [
                                    e("i", { staticClass: "fa fa-save" }),
                                    t._v(
                                      " " +
                                        t._s(t.formTranslation.common.save) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                          ]
                        ),
                      ]),
                    ]),
                  ],
                  1
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
      ).exports;
    function Te(t) {
      return (Te =
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
    function De(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != Te(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != Te(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Te(e) ? e : e + "";
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
    var Le = n(377).a,
      qe =
        (n(708),
        Object(h.a)(
          Le,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-card",
              {
                staticClass: "card-body",
                attrs: { "header-tag": "header", "footer-tag": "footer" },
              },
              [
                t.formLoader
                  ? e(
                      "div",
                      { staticClass: "page-loader-section" },
                      [e("loader-component-2")],
                      1
                    )
                  : e("div", [
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e("h2", [
                            t._v(
                              "\n          " +
                                t._s(t.formTranslation.common.settings) +
                                "\n          "
                            ),
                            "off" == t.request_status
                              ? e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#general-setting",
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
                        ]),
                      ]),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      "off" == t.request_status || t.showOption
                        ? e(
                            "form",
                            {
                              attrs: {
                                id: "general_setting_form",
                                name: "patient_form",
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
                                "b-row",
                                { staticClass: "mt-2 ml-4" },
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                                id: "checkbox-1",
                                                name: "checkbox-1",
                                                value: "on",
                                                "unchecked-value": "off",
                                                switch: "",
                                              },
                                              model: {
                                                value: t.request_status,
                                                callback: function (e) {
                                                  t.request_status = e;
                                                },
                                                expression: "request_status",
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
                                                        t.formTranslation.common
                                                          .hide_request_features
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
                              t._v(" "),
                              "on" == t.request_status && t.showOption
                                ? e(
                                    "b-row",
                                    { staticClass: "mt-2 ml-1" },
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
                                                    id: "checkbox-2",
                                                    name: "checkbox-2",
                                                    value: "on",
                                                    "unchecked-value": "off",
                                                  },
                                                  on: {
                                                    change:
                                                      t.removeFeatureRequest,
                                                  },
                                                  model: {
                                                    value: t.request_status,
                                                    callback: function (e) {
                                                      t.request_status = e;
                                                    },
                                                    expression:
                                                      "request_status",
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
                                                            t.formTranslation
                                                              .common
                                                              .remove_request_features
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
                                  )
                                : t._e(),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "d-flex justify-content-end",
                                    },
                                    [
                                      e(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: t.isSubmited,
                                            id: "btn-general-submit",
                                          },
                                        },
                                        [
                                          e("i", { staticClass: "fa fa-save" }),
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common.save
                                              ) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      t.showOption
                        ? e("hr", { staticClass: "mt-2 mb-2" })
                        : t._e(),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(
                                t.formTranslation.common.date_format_setting +
                                  " " +
                                  t.formTranslation.common.deprecated
                              ) + " \n          "
                            ),
                            e(
                              "a",
                              {
                                attrs: {
                                  href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#general-setting",
                                  target: "_blank",
                                },
                              },
                              [e("i", { staticClass: "fa fa-question-circle" })]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: { id: "date_format_form", novalidate: !0 },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleDateFormatSubmit.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "date_format" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common
                                            .custom_date_format
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-4" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.dateFormat,
                                          expression: "dateFormat",
                                        },
                                      ],
                                      staticClass: "form-control mb-2",
                                      attrs: {
                                        id: "date_format",
                                        placeholder:
                                          t.formTranslation.common
                                            .custom_date_format,
                                        name: "date_format",
                                        type: "text",
                                        disabled: "",
                                      },
                                      domProps: { value: t.dateFormat },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            (t.dateFormat = e.target.value);
                                        },
                                      },
                                    }),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-4" }, [
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary mb-2",
                                        attrs: De(
                                          {
                                            type: "submit",
                                            disabled: t.dateFormatLoading,
                                          },
                                          "disabled",
                                          ""
                                        ),
                                      },
                                      [
                                        e("i", {
                                          class: t.dateFormatLoading
                                            ? "fa fa-spinner fa-spin"
                                            : "fa fa-save",
                                        }),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.dateFormatLoading
                                                ? t.formTranslation.common
                                                    .loading
                                                : t.formTranslation.common.save
                                            ) +
                                            "\n                "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    staticClass:
                                      "text-primary font-weight-bold",
                                    attrs: { id: "date_format_output" },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .plh_date +
                                            ": " +
                                            t.dateFormatOutput
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(t.formTranslation.common.clinic_currency)
                            ),
                          ]),
                        ]),
                      ]),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: {
                            id: "general_clinic_form",
                            novalidate: !0,
                            enctype: "multipart/form-data",
                          },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleCliniSubmit.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "currency_prefix" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.clinic
                                            .currency_prefix
                                        ) +
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
                                      value: t.clinicData.currency_prefix,
                                      expression: "clinicData.currency_prefix",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "currency_prefix",
                                    placeholder:
                                      t.formTranslation.clinic
                                        .currency_prefix_plh,
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
                                t._v(" "),
                                t.isSubmitedClinic &&
                                !t.$v.clinicData.currency_prefix.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(
                                              t.formTranslation.clinic
                                                .currency_prefix +
                                                " " +
                                                t.formTranslation.common
                                                  .required
                                            ) +
                                            "\n            "
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
                                    attrs: { for: "currency_postfix" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.clinic
                                            .currency_postfix
                                        ) +
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
                                      value: t.clinicData.currency_postfix,
                                      expression: "clinicData.currency_postfix",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "currency_postfix",
                                    placeholder:
                                      t.formTranslation.clinic
                                        .currency_postfix_plh,
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
                                t._v(" "),
                                t.isSubmitedClinic &&
                                !t.$v.clinicData.currency_postfix.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          "\n                  " +
                                            t._s(
                                              t.formTranslation.clinic
                                                .currency_postfix +
                                                " " +
                                                t.formTranslation.common
                                                  .required
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
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
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.isSubmitedClinicLoading,
                                        id: "btn-clinic-submit",
                                      },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-save" }),
                                      t._v(
                                        " " +
                                          t._s(t.formTranslation.common.save) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(
                                t.formTranslation.common.default_country_code
                              )
                            ),
                          ]),
                        ]),
                      ]),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: {
                            id: "default_country_code",
                            novalidate: !0,
                            enctype: "multipart/form-data",
                          },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleCountryCodeSubmit.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "form-group country-code-inline-box",
                                },
                                [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "country_code" },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common
                                              .select_country_code
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("VuePhoneNumberInput", {
                                    attrs: {
                                      id: "country_code",
                                      "default-country-code":
                                        t.defaultCountryCode,
                                      "no-example": "",
                                      clearable: "",
                                    },
                                    on: { update: t.countryCodeUpdateHandaler },
                                    model: {
                                      value: t.contact,
                                      callback: function (e) {
                                        t.contact = e;
                                      },
                                      expression: "contact",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.isSubmitedCountryCode,
                                        id: "btn-country-code-submit",
                                      },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-save" }),
                                      t._v(
                                        " " +
                                          t._s(t.formTranslation.common.save) +
                                          "\n          "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(
                                t.formTranslation.common
                                  .registration_shortcode_setting
                              ) + " "
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: { id: "user_registration", novalidate: !0 },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleUserRegistrationShortcodeSettingSubmit.apply(
                                  null,
                                  arguments
                                )
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row m-4" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "doctor_register",
                                        name: "doctor_register",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .status.doctor,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .status,
                                            "doctor",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.status.doctor",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting.status
                                        .doctor
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .default_status_when_doctor_register
                                            ) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "receptionist_register",
                                        name: "receptionist_register",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .status.receptionist,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .status,
                                            "receptionist",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.status.receptionist",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting.status
                                        .receptionist
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .default_status_when_receptionist_register
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "patient_register",
                                        name: "patient_register",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .status.patient,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .status,
                                            "patient",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.status.patient",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting.status
                                        .patient
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .default_status_when_patient_register
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-12" }, [
                              e("h3", { staticClass: "mb-0" }, [
                                t._v(
                                  " " +
                                    t._s(
                                      t.formTranslation.common.allow_user_role
                                    ) +
                                    " "
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row m-4" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "doctor_role",
                                        name: "doctor_role",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      on: {
                                        change: function (e) {
                                          return t.validateCheckboxes(
                                            "kiviCare_doctor"
                                          );
                                        },
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .user_role.kiviCare_doctor,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .user_role,
                                            "kiviCare_doctor",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.user_role.kiviCare_doctor",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting
                                        .user_role.kiviCare_doctor
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .doctor_role
                                            ) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "receptionist_role",
                                        name: "receptionist_role",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      on: {
                                        change: function (e) {
                                          return t.validateCheckboxes(
                                            "kiviCare_receptionist"
                                          );
                                        },
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .user_role.kiviCare_receptionist,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .user_role,
                                            "kiviCare_receptionist",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.user_role.kiviCare_receptionist",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting
                                        .user_role.kiviCare_receptionist
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .receptionist_role
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "patient_role",
                                        name: "patient_role",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      on: {
                                        change: function (e) {
                                          return t.validateCheckboxes(
                                            "kiviCare_patient"
                                          );
                                        },
                                      },
                                      model: {
                                        value:
                                          t.userRegistrationShortcodeSetting
                                            .user_role.kiviCare_patient,
                                        callback: function (e) {
                                          t.$set(
                                            t.userRegistrationShortcodeSetting
                                              .user_role,
                                            "kiviCare_patient",
                                            e
                                          );
                                        },
                                        expression:
                                          "userRegistrationShortcodeSetting.user_role.kiviCare_patient",
                                      },
                                    },
                                    [
                                      "on" ===
                                      t.userRegistrationShortcodeSetting
                                        .user_role.kiviCare_patient
                                        ? e(
                                            "b",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .active
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "b",
                                            {
                                              staticClass: "badge badge-danger",
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .inactive
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .patient_role
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row mt-2" }, [
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
                                    staticClass: "btn btn-primary mb-2",
                                    attrs: {
                                      type: "submit",
                                      disabled:
                                        t.userRegistrationShortcodeSettingLoading,
                                    },
                                  },
                                  [
                                    e("i", {
                                      class:
                                        t.userRegistrationShortcodeSettingLoading
                                          ? "fa fa-spinner fa-spin"
                                          : "fa fa-save",
                                    }),
                                    t._v(
                                      " " +
                                        t._s(
                                          t.userRegistrationShortcodeSettingLoading
                                            ? t.formTranslation.common.loading
                                            : t.formTranslation.common.save
                                        ) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(t.formTranslation.common.google_recaptcha)
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: { id: "google_recaptch_form", novalidate: !0 },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(), t.handleCaptchaSubmit(!1)
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row m-4" }, [
                            e("div", { staticClass: "col-12" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        size: "md",
                                        id: "google-captcha-checkbox",
                                        name: "google-captcha-checkbox",
                                        value: "on",
                                        "unchecked-value": "off",
                                        switch: "",
                                      },
                                      on: {
                                        change: function (e) {
                                          return t.handleCaptchaSubmit(!0);
                                        },
                                      },
                                      model: {
                                        value: t.googleCaptcha.status,
                                        callback: function (e) {
                                          t.$set(t.googleCaptcha, "status", e);
                                        },
                                        expression: "googleCaptcha.status",
                                      },
                                    },
                                    [
                                      e("b", [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .enable_google_recaptcha
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          "on" == t.googleCaptcha.status
                            ? e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "site_key" },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common.site_key
                                            ) +
                                            "\n              "
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
                                          value: t.googleCaptcha.site_key,
                                          expression: "googleCaptcha.site_key",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "site_key",
                                        placeholder:
                                          t.formTranslation.common.site_key,
                                        name: "site_key",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.googleCaptcha.site_key,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.googleCaptcha,
                                              "site_key",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.googleCaptchaSubmitted &&
                                    !t.$v.googleCaptcha.site_key.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .site_key +
                                                    " " +
                                                    t.formTranslation.common
                                                      .required
                                                )
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
                                        attrs: { for: "secret_key" },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .secret_key
                                            ) +
                                            "\n              "
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
                                          value: t.googleCaptcha.secret_key,
                                          expression:
                                            "googleCaptcha.secret_key",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "secret_key",
                                        placeholder:
                                          t.formTranslation.common.secret_key,
                                        name: "secret_key",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.googleCaptcha.secret_key,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.googleCaptcha,
                                              "secret_key",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.googleCaptchaSubmitted &&
                                    !t.$v.googleCaptcha.secret_key.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .secret_key +
                                                    " " +
                                                    t.formTranslation.common
                                                      .required
                                                )
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                              ])
                            : t._e(),
                          t._v(" "),
                          "on" == t.googleCaptcha.status
                            ? e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-12" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e(
                                        "h4",
                                        { staticClass: "text-primary mb-3" },
                                        [
                                          e(
                                            "a",
                                            {
                                              attrs: {
                                                href: "https://www.google.com/recaptcha/admin",
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .google_recaptcha_refer_link
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ])
                            : t._e(),
                          t._v(" "),
                          "on" == t.googleCaptcha.status
                            ? e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "d-flex justify-content-end",
                                    },
                                    [
                                      e(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: t.googleRecaptchaLoading,
                                          },
                                        },
                                        [
                                          e("i", {
                                            class: t.googleRecaptchaLoading
                                              ? "fa fa-spinner fa-spin"
                                              : "fa fa-save",
                                          }),
                                          t._v(
                                            " " +
                                              t._s(
                                                t.googleRecaptchaLoading
                                                  ? t.formTranslation.common
                                                      .loading
                                                  : t.formTranslation.common
                                                      .save
                                              ) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : t._e(),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(
                                t.formTranslation.common
                                  .user_registration_form_setting
                              )
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row m-4" }, [
                        e("div", { staticClass: "col-12" }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    size: "md",
                                    id: "show-other-option-in-gender-checkbox",
                                    name: "show-other-option-in-gender-checkbox",
                                    value: "on",
                                    "unchecked-value": "off",
                                    switch: "",
                                  },
                                  on: {
                                    change: t.handleRegistrationFormSetting,
                                  },
                                  model: {
                                    value: t.userRegistrationFormSetting_status,
                                    callback: function (e) {
                                      t.userRegistrationFormSetting_status = e;
                                    },
                                    expression:
                                      "userRegistrationFormSetting_status",
                                  },
                                },
                                [
                                  e("b", [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common
                                            .show_other_option_in_gender
                                        ) +
                                        " "
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(t._s(t.formTranslation.common.login_redirect)),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: {
                            id: "login_redirect_form",
                            name: "clinic_form",
                            novalidate: !0,
                          },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleLoginRedirectSubmit.apply(
                                  null,
                                  arguments
                                )
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: {
                                      for: "clinic_admin_login_redirect",
                                    },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(t.formTranslation.clinic.clinic) +
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
                                      value: t.login_redirect.clinic_admin,
                                      expression: "login_redirect.clinic_admin",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "clinic_admin_login_redirect",
                                    placeholder:
                                      t.formTranslation.clinic.clinic,
                                    name: "clinic_admin_login_redirect",
                                    type: "url",
                                  },
                                  domProps: {
                                    value: t.login_redirect.clinic_admin,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.login_redirect,
                                          "clinic_admin",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "doctor_login_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.doctor_session
                                            .dt_lbl_doc
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
                                      value: t.login_redirect.doctor,
                                      expression: "login_redirect.doctor",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "doctor_login_redirect",
                                    placeholder:
                                      t.formTranslation.doctor_session
                                        .dt_lbl_doc,
                                    name: "doctor_login_redirect",
                                    type: "url",
                                  },
                                  domProps: { value: t.login_redirect.doctor },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.login_redirect,
                                          "doctor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: {
                                      for: "receptionist_login_redirect",
                                    },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.clinic.receptionist
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
                                      value: t.login_redirect.receptionist,
                                      expression: "login_redirect.receptionist",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "receptionist_login_redirect",
                                    placeholder:
                                      t.formTranslation.clinic.receptionist,
                                    name: "receptionist_login_redirect",
                                    type: "url",
                                  },
                                  domProps: {
                                    value: t.login_redirect.receptionist,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.login_redirect,
                                          "receptionist",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "patient_login_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .tag_patient_plh
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
                                      value: t.login_redirect.patient,
                                      expression: "login_redirect.patient",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "patient_login_redirect",
                                    placeholder:
                                      t.formTranslation.appointments
                                        .tag_patient_plh,
                                    name: "patient_login_redirect",
                                    type: "url",
                                  },
                                  domProps: { value: t.login_redirect.patient },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.login_redirect,
                                          "patient",
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
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.loginRedirectSettingLoading,
                                      },
                                    },
                                    [
                                      e("i", {
                                        class: t.loginRedirectSettingLoading
                                          ? "fa fa-spinner fa-spin"
                                          : "fa fa-save",
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.loginRedirectSettingLoading
                                              ? t.formTranslation.common.loading
                                              : t.formTranslation.common.save
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(t.formTranslation.common.logout_redirect)
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: {
                            id: "logout_redirect_form",
                            name: "clinic_form",
                            novalidate: !0,
                          },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleLogoutRedirectSubmit.apply(
                                  null,
                                  arguments
                                )
                              );
                            },
                          },
                        },
                        [
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "clinic_admin_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(t.formTranslation.clinic.clinic) +
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
                                      value: t.logout_redirect.clinic_admin,
                                      expression:
                                        "logout_redirect.clinic_admin",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "clinic_admin_redirect",
                                    placeholder:
                                      t.formTranslation.clinic.clinic,
                                    name: "clinic_admin_redirect",
                                    type: "url",
                                  },
                                  domProps: {
                                    value: t.logout_redirect.clinic_admin,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.logout_redirect,
                                          "clinic_admin",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "doctor_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.doctor_session
                                            .dt_lbl_doc
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
                                      value: t.logout_redirect.doctor,
                                      expression: "logout_redirect.doctor",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "doctor_redirect",
                                    placeholder:
                                      t.formTranslation.doctor_session
                                        .dt_lbl_doc,
                                    name: "doctor_redirect",
                                    type: "url",
                                  },
                                  domProps: { value: t.logout_redirect.doctor },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.logout_redirect,
                                          "doctor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "receptionist_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.clinic.receptionist
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
                                      value: t.logout_redirect.receptionist,
                                      expression:
                                        "logout_redirect.receptionist",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "receptionist_redirect",
                                    placeholder:
                                      t.formTranslation.clinic.receptionist,
                                    name: "receptionist_redirect",
                                    type: "url",
                                  },
                                  domProps: {
                                    value: t.logout_redirect.receptionist,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.logout_redirect,
                                          "receptionist",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "patient_redirect" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.appointments
                                            .tag_patient_plh
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
                                      value: t.logout_redirect.patient,
                                      expression: "logout_redirect.patient",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "patient_redirect",
                                    placeholder:
                                      t.formTranslation.appointments
                                        .tag_patient_plh,
                                    name: "patient_redirect",
                                    type: "url",
                                  },
                                  domProps: {
                                    value: t.logout_redirect.patient,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.logout_redirect,
                                          "patient",
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
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.redirectSettingLoading,
                                      },
                                    },
                                    [
                                      e("i", {
                                        class: t.redirectSettingLoading
                                          ? "fa fa-spinner fa-spin"
                                          : "fa fa-save",
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.redirectSettingLoading
                                              ? t.formTranslation.common.loading
                                              : t.formTranslation.common.save
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(
                              t._s(
                                t.formTranslation.common.fullcalendar_setting
                              )
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: { id: "fullcalendar_form", novalidate: !0 },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleFullCalendarFormSubmit.apply(
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
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "fullcalendar_key" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common
                                            .fullcalendar_license_key
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
                                      value: t.fullcalendar_key,
                                      expression: "fullcalendar_key",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "fullcalendar_key",
                                    placeholder:
                                      t.formTranslation.common
                                        .fullcalendar_license_key,
                                    name: "site_key",
                                    type: "text",
                                  },
                                  domProps: { value: t.fullcalendar_key },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.fullcalendar_key = e.target.value);
                                    },
                                  },
                                }),
                                t._v(" "),
                                t.isFullcalendarFormKeyEmpty
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common
                                              .full_calender_validation
                                          ) + "\n            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
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
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.fullcalendarFormLoading,
                                      },
                                    },
                                    [
                                      e("i", {
                                        class: t.fullcalendarFormLoading
                                          ? "fa fa-spinner fa-spin"
                                          : "fa fa-save",
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.fullcalendarFormLoading
                                              ? t.formTranslation.common.loading
                                              : t.formTranslation.common.save
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-12" }, [
                          e("h2", { staticClass: "mb-0" }, [
                            t._v(t._s(t.$t("common.encounter_setting"))),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e(
                        "form",
                        {
                          attrs: {
                            id: "encounter_setting_form",
                            name: "encounter_setting_form",
                            novalidate: !0,
                            enctype: "multipart/form-data",
                          },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.handleEncounterFormSubmit.apply(
                                  null,
                                  arguments
                                )
                              );
                            },
                          },
                        },
                        [
                          e(
                            "b-row",
                            { staticClass: "mt-2 ml-4" },
                            [
                              e(
                                "b-col",
                                { attrs: { sm: "12", md: "12", lg: "12" } },
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
                                            id: "encounter-edit-after-close-checkbox",
                                            name: "encounter-edit-after-close-checkbox",
                                            value: "on",
                                            "unchecked-value": "off",
                                            switch: "",
                                          },
                                          model: {
                                            value:
                                              t.encounterSettingsData
                                                .encounter_edit_after_close_status,
                                            callback: function (e) {
                                              t.$set(
                                                t.encounterSettingsData,
                                                "encounter_edit_after_close_status",
                                                e
                                              );
                                            },
                                            expression:
                                              "encounterSettingsData.encounter_edit_after_close_status",
                                          },
                                        },
                                        [
                                          e(
                                            "b",
                                            {
                                              staticClass: "form-control-label",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.$t(
                                                      "common.allow_encounter_edit_after_close"
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
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: t.isSubmitedEncounter,
                                      },
                                    },
                                    [
                                      e("i", {
                                        class: t.isSubmitedEncounter
                                          ? "fa fa-spinner fa-spin"
                                          : "fa fa-save",
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.isSubmitedEncounter
                                              ? t.formTranslation.common.loading
                                              : t.formTranslation.common.save
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      e("hr", { staticClass: "mt-2 mb-2" }),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e("div", { staticClass: "row p-2" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e("h2", [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.formTranslation.common.reset_plugin_data
                                ) +
                                "\n        "
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e(
                            "div",
                            { staticClass: "d-flex justify-content-start" },
                            [
                              e(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" },
                                  on: {
                                    click: function (e) {
                                      t.resetPluginModel = !0;
                                    },
                                  },
                                },
                                [
                                  e("i", { staticClass: "fa fa-undo" }),
                                  t._v(
                                    " " +
                                      t._s(
                                        t.formTranslation.common
                                          .reset_plugin_data
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                t._v(" "),
                t.resetPluginModel
                  ? e(
                      "ModalPopup",
                      {
                        attrs: {
                          modalId: "appointment-details-modal",
                          modalSize: "md",
                          openModal: t.resetPluginModel,
                          modalTitle:
                            t.formTranslation.common.reset_plugin_data,
                        },
                        on: {
                          closeModal: function (e) {
                            return t.closeResetPluginModel();
                          },
                        },
                      },
                      [
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-12" }, [
                            e(
                              "form",
                              {
                                attrs: {
                                  id: "resetPluginForm",
                                  name: "reset_plugin_form",
                                  novalidate: !0,
                                },
                                on: {
                                  submit: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.handleResetPluginForm.apply(
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
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-appointment-status",
                                              name: "reset-appointment-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetAppointmentEncounterStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetAppointmentEncounterStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetAppointmentEncounterStatus",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .reset_appointments_and_encounter
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-doctor-status",
                                              name: "reset-doctor-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetDoctorStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetDoctorStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetDoctorStatus",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .reset_doctors
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-receptionist-status",
                                              name: "reset-receptionist-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetReceptionistStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetReceptionistStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetReceptionistStatus",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .reset_receptionists
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-patients-status",
                                              name: "reset-patients-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetPatientStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetPatientStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetPatientStatus",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .reset_patients
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-revenue-status",
                                              name: "reset-revenue-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetRevenueStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetRevenueStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetRevenueStatus",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                      " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .reset_revenue
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              id: "reset-all-status",
                                              name: "reset-all-status",
                                              value: "on",
                                              "unchecked-value": "off",
                                            },
                                            model: {
                                              value:
                                                t.resetPluginData
                                                  .resetAllDataStatus,
                                              callback: function (e) {
                                                t.$set(
                                                  t.resetPluginData,
                                                  "resetAllDataStatus",
                                                  e
                                                );
                                              },
                                              expression:
                                                "resetPluginData.resetAllDataStatus",
                                            },
                                          },
                                          [
                                            e("b", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .delete_all_reset_plugin
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
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
                                            staticClass: "btn btn-primary",
                                            attrs: {
                                              type: "submit",
                                              disabled: t.isSubmitedReset,
                                              id: "btn-reset-submit",
                                            },
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
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
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
          null,
          null
        ).exports),
      Ee = n(378).a,
      je = Object(h.a)(
        Ee,
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
                    show: 1 != t.userData.addOns.googlemeet,
                    variant: "white",
                    opacity: t.overlayOpacity,
                  },
                  scopedSlots: t._u([
                    {
                      key: "overlay",
                      fn: function () {
                        return [
                          e("overlay-message", {
                            attrs: { addon_type: "googlemeet" },
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
                      attrs: { "header-tag": "header", "footer-tag": "footer" },
                    },
                    [
                      e("div", { staticClass: "row p-2" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e("h2", { staticClass: "" }, [
                            t._v(
                              "\n          " +
                                t._s(t.formTranslation.googlemeet.googlemeet) +
                                "\n          "
                            ),
                            "off" == t.request_status
                              ? e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://apps.iqonic.design/docs/product/kivicare/google-meet-telemed-woocommerce-addon/admin/",
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
                                        t.handleCalenderSubmit.apply(
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
                                                      staticClass: "form-group",
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
                                                            change:
                                                              t.handleCalenderSubmit,
                                                          },
                                                          model: {
                                                            value:
                                                              t.googleCalData
                                                                .enableCal,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.googleCalData,
                                                                "enableCal",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "googleCalData.enableCal",
                                                          },
                                                        },
                                                        [
                                                          e("b", [
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .googlemeet
                                                                    .google_meet_configuration
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
                                    "Yes" == t.googleCalData.enableCal
                                      ? e("div", { staticClass: "col-md-12" }, [
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
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
                                                          for: "client_id",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .googlemeet
                                                              .google_meet_client_id
                                                          ) +
                                                            "\n                        "
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
                                                            t.googleCalData
                                                              .client_id,
                                                          expression:
                                                            "googleCalData.client_id",
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
                                                          t.googleCalData
                                                            .client_id,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.googleCalData,
                                                              "client_id",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                t.submitted &&
                                                !t.$v.googleCalData.client_id
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
                                                              .googlemeet
                                                              .google_meet_client_id_required
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
                                              { staticClass: "col-md-12" },
                                              [
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
                                                          for: "client_secret",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .googlemeet
                                                              .google_meet_client_secret
                                                          ) +
                                                            "\n                        "
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
                                                            t.googleCalData
                                                              .client_secret,
                                                          expression:
                                                            "googleCalData.client_secret",
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
                                                          t.googleCalData
                                                            .client_secret,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.googleCalData,
                                                              "client_secret",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                t.submitted &&
                                                !t.$v.googleCalData
                                                  .client_secret.required
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
                                                              .googlemeet
                                                              .google_meet_client_secret_required
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
                                              { staticClass: "col-md-12" },
                                              [
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
                                                          for: "app_name",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.app_name
                                                          ) +
                                                            "\n                        "
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
                                                            t.googleCalData
                                                              .app_name,
                                                          expression:
                                                            "googleCalData.app_name",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        id: "app_name",
                                                        name: "app_name",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.googleCalData
                                                            .app_name,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.googleCalData,
                                                              "app_name",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                t.submitted &&
                                                !t.$v.googleCalData.app_name
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
                                                              .app_name_required
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                          ]),
                                        ])
                                      : t._e(),
                                  ]),
                                  t._v(" "),
                                  "Yes" == t.googleCalData.enableCal
                                    ? e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
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
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    id: "btn-google-submit",
                                                  },
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
                                            ]
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            "Yes" == t.googleCalData.enableCal
                              ? e(
                                  "div",
                                  { staticClass: "col-md-7 mt-3" },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "h4",
                                          { staticClass: "text-primary mb-3" },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formTranslation.googlemeet
                                                    .guide_to_setup_google_meet
                                                ) +
                                                "\n                "
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
                                          e("b", [
                                            t._v(" " + t._s("Step:1") + " "),
                                          ]),
                                          t._v(" "),
                                          e(
                                            "a",
                                            {
                                              attrs: {
                                                href: "https://apps.iqonic.design/docs/product/kivicare/google-calendar/",
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation
                                                      .pro_setting
                                                      .please_refer_link
                                                  )
                                              ),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("b-list-group-item", [
                                          e("p", [
                                            e("b", [t._v("Note:")]),
                                            t._v(
                                              " If you have already setup Google calendar then You can use same ClientID and Client Secret here."
                                            ),
                                          ]),
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
                  t._v(" "),
                  t.formLoader
                    ? e(
                        "div",
                        { staticClass: "page-loader-section" },
                        [e("loader-component-2")],
                        1
                      )
                    : e(
                        "form",
                        { attrs: { id: "googleMeetForm", novalidate: !0 } },
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
                                              e("h2", { staticClass: "mb-0" }, [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.googlemeet
                                                      .google_event_template
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
 