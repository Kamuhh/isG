// app.part20-de-30.js
                                             staticClass: "form-group",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                          attrs: {
                                                            for: "last_name",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                            " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.lname
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
                                                              t.doctorData
                                                                .last_name,
                                                            expression:
                                                              "doctorData.last_name",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.doctorData
                                                              .last_name.$error,
                                                        },
                                                        attrs: {
                                                          id: "last_name",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .lname_placeholder,
                                                          required: "required",
                                                          name: "name",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .last_name,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "last_name",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData.last_name
                                                        .required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                            " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .lname_required
                                                                  ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          )
                                                        : !t.submitted ||
                                                          (t.$v.doctorData
                                                            .last_name
                                                            .minLength &&
                                                            t.$v.doctorData
                                                              .last_name
                                                              .maxLength)
                                                        ? t._e()
                                                        : e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .lname_validation_2
                                                                  ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "id_number",
                                                          },
                                                        },
                                                        [
                                                          t._v("Cédula "),
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
                                                              t.doctorData
                                                                .username,
                                                            expression:
                                                              "doctorData.username",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.doctorData
                                                              .username.$error,
                                                        },
                                                        attrs: {
                                                          id: "id_number",
                                                          placeholder:
                                                            "Ingrese cédula",
                                                          required: "required",
                                                          name: "id_number",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .username,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            if (
                                                              !e.target
                                                                .composing
                                                            ) {
                                                              var n =
                                                                e.target.value.replace(
                                                                  /\D+/g,
                                                                  ""
                                                                );
                                                              t.$set(
                                                                t.doctorData,
                                                                "username",
                                                                n
                                                              ),
                                                                (void 0 ===
                                                                  t.doctorData
                                                                    .ID ||
                                                                  null ===
                                                                    t.doctorData
                                                                      .ID ||
                                                                  "" ===
                                                                    t.doctorData
                                                                      .ID) &&
                                                                  t.$set(
                                                                    t.doctorData,
                                                                    "user_pass",
                                                                    n
                                                                  );
                                                            }
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData.username
                                                        .required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "La cédula es requerida"
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
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-lg-6" },
                                                [
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
                                                          attrs: {
                                                            for: "email",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                            " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .email_address
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
                                                              t.doctorData
                                                                .user_email,
                                                            expression:
                                                              "doctorData.user_email",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.doctorData
                                                              .user_email
                                                              .$error,
                                                        },
                                                        attrs: {
                                                          id: "email",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .address_placeholder,
                                                          required: "required",
                                                          name: "email",
                                                          type: "email",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .user_email,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "user_email",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData
                                                        .user_email.required
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
                                                                    .common
                                                                    .email_required
                                                                ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          )
                                                        : t.submitted &&
                                                          !t.$v.doctorData
                                                            .user_email
                                                            .emailValidate
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
                                                                    .common
                                                                    .invalid_email
                                                                ) +
                                                                  "\n                          "
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
                                                { staticClass: "col-lg-6" },
                                                [
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
                                                          attrs: {
                                                            for: "telephone_no",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                            " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
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
                                                          id: "telephone_no",
                                                          clearable: "",
                                                          "default-country-code":
                                                            t.defaultCountryCode,
                                                          "no-example": "",
                                                        },
                                                        on: {
                                                          update:
                                                            t.contactUpdateHandaler,
                                                        },
                                                        model: {
                                                          value:
                                                            t.doctorData
                                                              .mobile_number,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.doctorData,
                                                              "mobile_number",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "doctorData.mobile_number",
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData
                                                        .mobile_number.required
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
                                                                    .common
                                                                    .contact_num_required
                                                                ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          )
                                                        : !t.submitted ||
                                                          (t.$v.doctorData
                                                            .mobile_number
                                                            .minLength &&
                                                            t.$v.doctorData
                                                              .mobile_number
                                                              .maxLength)
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
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .contact_validation_1
                                                                ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "doctor_birthdate",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.dob
                                                            ) +
                                                              ".\n                            "
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
                                                              t.doctorData.dob,
                                                            expression:
                                                              "doctorData.dob",
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
                                                          value:
                                                            t.doctorData.dob,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "dob",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "gender",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.gender
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
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-8",
                                                          attrs: {
                                                            id: "gender",
                                                          },
                                                        },
                                                        [
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
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      t
                                                                        .doctorData
                                                                        .gender,
                                                                    expression:
                                                                      "doctorData.gender",
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
                                                                domProps: {
                                                                  checked: t._q(
                                                                    t.doctorData
                                                                      .gender,
                                                                    "male"
                                                                  ),
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.$set(
                                                                        t.doctorData,
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
                                                                  attrs: {
                                                                    for: "male",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .male
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
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      t
                                                                        .doctorData
                                                                        .gender,
                                                                    expression:
                                                                      "doctorData.gender",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "custom-control-input",
                                                                attrs: {
                                                                  type: "radio",
                                                                  id: "female",
                                                                  name: "gender",
                                                                  value:
                                                                    "female",
                                                                },
                                                                domProps: {
                                                                  checked: t._q(
                                                                    t.doctorData
                                                                      .gender,
                                                                    "female"
                                                                  ),
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.$set(
                                                                        t.doctorData,
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
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .female
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          "on" ===
                                                          t.defaultUserRegistrationFormSettingData
                                                            ? e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "custom-control custom-radio custom-control-inline",
                                                                },
                                                                [
                                                                  e("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .doctorData
                                                                              .gender,
                                                                          expression:
                                                                            "doctorData.gender",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "custom-control-input",
                                                                    attrs: {
                                                                      type: "radio",
                                                                      id: "other",
                                                                      name: "gender",
                                                                      value:
                                                                        "other",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        t._q(
                                                                          t
                                                                            .doctorData
                                                                            .gender,
                                                                          "other"
                                                                        ),
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.$set(
                                                                            t.doctorData,
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
                                                                      attrs: {
                                                                        for: "other",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .other
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData.gender
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
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .gender_required
                                                                ) +
                                                                  "\n                          "
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
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "specialization",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .patient_front_widget
                                                                .specialization
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
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.doctorData
                                                              .specialties
                                                              .$error,
                                                        },
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          "tag-placeholder":
                                                            t.formTranslation
                                                              .doctor
                                                              .tag_doc_sp_plh,
                                                          id: "specialization",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .search_placeholder,
                                                          label: "label",
                                                          "track-by": "id",
                                                          options:
                                                            t.doctorSpecialization,
                                                          multiple: !0,
                                                          taggable: !0,
                                                          loading:
                                                            t.specializationMultiselectLoader,
                                                          disabled:
                                                            t.specializationMultiselectLoader,
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
                                                                        t
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
                                                            t.doctorData
                                                              .specialties,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.doctorData,
                                                              "specialties",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "doctorData.specialties",
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData
                                                        .specialties.required
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                            " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .doctor
                                                                      .doctor_specialization_required
                                                                  ) +
                                                                  "\n                          "
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
                                                { staticClass: "col-md-4" },
                                                [
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
                                                          attrs: {
                                                            for: "signature",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common
                                                                .signature
                                                            ) +
                                                              "\n                          "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.showCanvas
                                                        ? e("vueSignature", {
                                                            ref: "signature",
                                                            attrs: {
                                                              h: "100px",
                                                              sigOption:
                                                                t.signatureOption,
                                                              defaultUrl:
                                                                t.doctorData
                                                                  .signature,
                                                            },
                                                          })
                                                        : t._e(),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-md-2" },
                                                [
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
                                                          attrs: {
                                                            for: "signature",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            " \n                          "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-secondary p-1",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return (
                                                                e.preventDefault(),
                                                                t.$refs.signature.undo()
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.undo
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary p-1",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return (
                                                                e.preventDefault(),
                                                                t.$refs.signature.clear()
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.clear
                                                              )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              !1 !==
                                              t.$store.state.userDataModule.user
                                                .addOns.kiviPro
                                                ? e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                          attrs: {
                                                            for: "choose_language",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                              " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .choose_language
                                                              ) +
                                                              "\n                          "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e("multi-select", {
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          id: "choose_language",
                                                          placeholder:
                                                            t.formTranslation
                                                              .common
                                                              .choose_language,
                                                          label: "label",
                                                          "track-by": "lang",
                                                          options:
                                                            t.kc_available_translations,
                                                          multiple: !1,
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
                                                                        t
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
                                                            t.doctorData
                                                              .choose_language,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.doctorData,
                                                              "choose_language",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "doctorData.choose_language",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : t._e(),
                                            ]),
                                          ]),
                                          t._v(" "),
                                          e("hr", { staticClass: "my-4" }),
                                          t._v(" "),
                                          e(
                                            "h6",
                                            {
                                              staticClass:
                                                "heading-small text-muted mb-4",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .contact_info
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("div", { staticClass: "pl-lg-4" }, [
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
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
                                                          attrs: {
                                                            for: "address",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.address
                                                            ) + " "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e("textarea", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              t.doctorData
                                                                .address,
                                                            expression:
                                                              "doctorData.address",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          name: "address",
                                                          id: "address",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .plh_clinic_address,
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .address,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "address",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-4" },
                                                [
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
                                                          attrs: {
                                                            for: "city",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.city
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
                                                            value:
                                                              t.doctorData.city,
                                                            expression:
                                                              "doctorData.city",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          id: "city",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .plh_enter_city,
                                                          name: "city",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData.city,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "city",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-lg-4" },
                                                [
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
                                                          attrs: {
                                                            for: "country",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .country
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
                                                            value:
                                                              t.doctorData
                                                                .country,
                                                            expression:
                                                              "doctorData.country",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          id: "country",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .plh_enter_country_name,
                                                          name: "country",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .country,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "country",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-lg-4" },
                                                [
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
                                                          attrs: {
                                                            for: "postal_code",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .postal_code
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
                                                            value:
                                                              t.doctorData
                                                                .postal_code,
                                                            expression:
                                                              "doctorData.postal_code",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          id: "postal_code",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor
                                                              .plh_enter_postal_code,
                                                          name: "postal_code",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .postal_code,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "postal_code",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("div", { staticClass: "card" }, [
                                        e(
                                          "div",
                                          { staticClass: "card-header" },
                                          [
                                            e("h3", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .qualification_information
                                                  ) +
                                                  " "
                                              ),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("div", { staticClass: "card-body" }, [
                                          e(
                                            "div",
                                            { staticClass: "row mb-4" },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "table-responsive mb-0",
                                                    },
                                                    [
                                                      e(
                                                        "table",
                                                        {
                                                          staticClass:
                                                            "table table-sm text-center table-bordered custom-table",
                                                        },
                                                        [
                                                          e(
                                                            "thead",
                                                            {
                                                              staticClass:
                                                                "thead-light",
                                                            },
                                                            [
                                                              e("tr", [
                                                                e("th", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .sr_no
                                                                    )
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e("th", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .doctor
                                                                        .degree
                                                                    )
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e("th", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .doctor
                                                                        .university
                                                                    )
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e("th", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .doctor
                                                                        .year
                                                                    )
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e("th", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .action
                                                                    )
                                                                  ),
                                                                ]),
                                                              ]),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          void 0 !==
                                                            t.doctorData
                                                              .qualifications &&
                                                          null !==
                                                            t.doctorData
                                                              .qualifications
                                                            ? e(
                                                                "tbody",
                                                                t._l(
                                                                  t.doctorData
                                                                    .qualifications,
                                                                  function (
                                                                    n,
                                                                    i
                                                                  ) {
                                                                    return e(
                                                                      "tr",
                                                                      {
                                                                        key: i,
                                                                      },
                                                                      [
                                                                        e(
                                                                          "td",
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                ++i
                                                                              )
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        e(
                                                                          "td",
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                n.degree
                                                                              )
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        e(
                                                                          "td",
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                n.university
                                                                              )
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        e(
                                                                          "td",
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                n.year
                                                                              )
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
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "btn-group",
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
                                                                                    attrs:
                                                                                      {
                                                                                        type: "button",
                                                                                        title:
                                                                                          t
                                                                                            .formTranslation
                                                                                            .common
                                                                                            .edit,
                                                                                        href: "#",
                                                                                      },
                                                                                    on: {
                                                                                      click:
                                                                                        function (
                                                                                          e
                                                                                        ) {
                                                                                          return t.editQualification(
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
                                                                                          "fa fa-pen-alt",
                                                                                      }
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                e(
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
                                                                                      "btn btn-outline-danger btn-sm",
                                                                                    attrs:
                                                                                      {
                                                                                        type: "button",
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
                                                                                          return t.deleteQualification(
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
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    );
                                                                  }
                                                                ),
                                                                0
                                                              )
                                                            : e("tbody", [
                                                                e("tr", [
                                                                  e(
                                                                    "td",
                                                                    {
                                                                      attrs: {
                                                                        colspan:
                                                                          "5",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "h4",
                                                                        {
                                                                          staticClass:
                                                                            "text-primary mb-0",
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .no_records_found
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]),
                                                              ]),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                e(
                                                  "h6",
                                                  {
                                                    staticClass:
                                                      "heading-small text-muted mb-4",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(t.qualificationTitle)
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
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
                                                          for: "degree",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor.degree
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
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.qualification
                                                              .degree,
                                                          expression:
                                                            "qualification.degree",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        " is-invalid":
                                                          t.qualificationSubmitted &&
                                                          t.$v.qualification
                                                            .degree.$error,
                                                      },
                                                      attrs: {
                                                        id: "degree",
                                                        placeholder:
                                                          t.formTranslation
                                                            .doctor
                                                            .plh_enter_degree,
                                                        name: "degree",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.qualification
                                                            .degree,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.qualification,
                                                              "degree",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.qualificationSubmitted &&
                                                    !t.$v.qualification.degree
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
                                                                t
                                                                  .formTranslation
                                                                  .doctor
                                                                  .degree_required
                                                              ) +
                                                                "\n                      "
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
                                                          for: "university",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor.university
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
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.qualification
                                                              .university,
                                                          expression:
                                                            "qualification.university",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        " is-invalid":
                                                          t.qualificationSubmitted &&
                                                          t.$v.qualification
                                                            .university.$error,
                                                      },
                                                      attrs: {
                                                        id: "university",
                                                        placeholder:
                                                          t.formTranslation
                                                            .doctor
                                                            .plh_enter_university,
                                                        name: "university",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.qualification
                                                            .university,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.qualification,
                                                              "university",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.qualificationSubmitted &&
                                                    !t.$v.qualification
                                                      .university.required
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
                                                                  .doctor
                                                                  .university_required
                                                              ) +
                                                                "\n                      "
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
                                                        attrs: { for: "year" },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor.year
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
                                                    e(
                                                      "b-select",
                                                      {
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.qualificationSubmitted &&
                                                            t.$v.qualification
                                                              .year.$error,
                                                        },
                                                        attrs: {
                                                          name: "year",
                                                          id: "year",
                                                        },
                                                        model: {
                                                          value:
                                                            t.qualification
                                                              .year,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.qualification,
                                                              "year",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "qualification.year",
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
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .doctor
                                                                    .select_year
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(
                                                          t.qualificationYears,
                                                          function (n, i) {
                                                            return e(
                                                              "option",
                                                              {
                                                                key: i,
                                                                domProps: {
                                                                  value: n,
                                                                },
                                                              },
                                                              [t._v(t._s(n))]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
                                                    ),
                                                    t._v(" "),
                                                    t.qualificationSubmitted &&
                                                    !t.$v.qualification.year
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
                                                                t
                                                                  .formTranslation
                                                                  .doctor
                                                                  .year_required
                                                              ) +
                                                                "\n                      "
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
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "float-right",
                                                  },
                                                  [
                                                    e("button", {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: { type: "button" },
                                                      domProps: {
                                                        innerHTML: t._s(
                                                          t.qualificationBtn
                                                        ),
                                                      },
                                                      on: {
                                                        click:
                                                          t.addQualification,
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                        t._v(" "),
                                        t.showCustomField
                                          ? e(
                                              "div",
                                              { staticClass: "ml-4" },
                                              [
                                                e("hr", {
                                                  staticClass: "my-4",
                                                }),
                                                t._v(" "),
                                                e(
                                                  "h6",
                                                  {
                                                    staticClass:
                                                      "heading-small text-muted mb-4",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.doctor
                                                          .extra_detail
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e("edit-custom-fields", {
                                                  attrs: {
                                                    module_type: "",
                                                    module_id: String(
                                                      t.doctorData.ID
                                                    ),
                                                    fieldsValue:
                                                      void 0 !== t.custom_fields
                                                        ? t.custom_fields
                                                        : [],
                                                    customFieldsObj:
                                                      void 0 !== t.custom_fields
                                                        ? t.custom_fields
                                                        : [],
                                                  },
                                                  on: {
                                                    bindCustomField:
                                                      t.getCustomFieldsValues,
                                                    requiredCustomField:
                                                      t.getRequireFields,
                                                    fieldObject:
                                                      t.handleCustomField,
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "card-footer" },
                                          [
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                {
                                                  staticClass: "col-md-12 pr-0",
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
                                                                  )
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
                                                                  "fa fa-save",
                                                              }),
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .save
                                                                  )
                                                              ),
                                                            ]
                                                          ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t._l(t.doctorData.custom_forms, function (n, i) {
                                return t.doctorData.custom_forms &&
                                  t.doctorData.custom_forms.length
                                  ? e(
                                      "div",
                                      { key: i, staticClass: "card-body pt-0" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "pl-lg-4" },
                                          [
                                            t.viewMode === "custom_form_" + n.id
                                              ? e("CustomForm", {
                                                  attrs: {
                                                    data: t.customFormDataUpdate(
                                                      n,
                                                      t.doctorData.ID
                                                    ),
                                                    viewMode: !1,
                                                    customFormModal:
                                                      t.viewMode ===
                                                      "custom_form_" + n.id,
                                                    useModal: !1,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ]
                                    )
                                  : t._e();
                              }),
                            ],
                            2
                          ),
                        ]),
                        t._v(" "),
                        e("b-col", { staticClass: "col-xl-3 order-xl-2" }, [
                          e("div", { staticClass: "card card-profile" }, [
                            e(
                              "div",
                              {
                                staticClass: "row justify-content-center mt-4",
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "kivicare-avatar-upload" },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "kivicare-avatar-edit" },
                                      [
                                        e("input", {
                                          staticClass: "p-2",
                                          staticStyle: { color: "transparent" },
                                          attrs: { id: "file", type: "button" },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.uploadProfile()
                                              );
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
                                        staticClass: "kivicare-avatar-preview",
                                      },
                                      [
                                        e("div", {
                                          style:
                                            "background-image: url(" +
                                            t.profileImage +
                                            ");",
                                          attrs: { id: "imagePreview" },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("div", {
                              staticClass:
                                "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4",
                            }),
                            t._v(" "),
                            e("div", { staticClass: "card-body pt-0 mt-2" }, [
                              e("div", { staticClass: "text-center" }, [
                                e("h5", { staticClass: "h3" }, [
                                  t._v(
                                    "\n                  " +
                                      t._s(t.doctorData.display_name) +
                                      "\n                "
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "h5 font-weight-300" },
                                  [
                                    t._v(
                                      "\n                  " +
                                        t._s(t.doctorData.user_email) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "h5 mt-4" }, [
                                  t._v(
                                    "\n                  " +
                                      t._s(
                                        t._f("clinicSpecialityFormat")(
                                          t.doctorData.specialties
                                        )
                                      ) +
                                      "\n                "
                                  ),
                                ]),
                                t._v(" "),
                                1 == t.userData.addOns.kiviPro &&
                                t.doctorData.rating > 0
                                  ? e("div", [
                                      e("i", {
                                        staticClass: "kivi-star",
                                        attrs: {
                                          "data-star": t.doctorData.rating,
                                        },
                                      }),
                                      t._v(" "),
                                      e("div", { staticClass: "row" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-center col-sm-12 col-md-12 col-lg-12 pt-1",
                                          },
                                          [
                                            t._v(
                                              "\n                      " +
                                                t._s(
                                                  t.doctorData.total_rating +
                                                    " " +
                                                    t.formTranslation
                                                      .appointments.ratings
                                                ) +
                                                "\n                    "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-center col-sm-12 col-md-12 col-lg-12 pt-1",
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                on: {
                                                  click: function (e) {
                                                    (t.select_doctor_id =
                                                      t.doctorData.ID),
                                                      (t.appointmentReviewModal =
                                                        !0);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                        " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments.ratings +
                                                        " " +
                                                        t.formTranslation.common
                                                          .detail
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ])
                                  : t._e(),
                              ]),
                            ]),
                          ]),
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
          null,
          null
        ).exports),
      pt = n(359).a,
      ht =
        (n(661),
        Object(h.a)(
          pt,
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
                                  { staticClass: "align-items-center" },
                                  [
                                    e(
                                      "b-col",
                                      { attrs: { sm: "6", md: "8", lg: "8" } },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.patient
                                                .patients_lists
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.kcCheckPermission("patient_add")
                                      ? e(
                                          "b-col",
                                          {
                                            attrs: {
                                              sm: "6",
                                              md: "4",
                                              lg: "4",
                                            },
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-end align-items-center",
                                              },
                                              [
                                                t.userData.addOns.kiviPro &&
                                                t.kivicareCompareVersion(
                                                  t.requireProVersion,
                                                  t.userData.pro_version
                                                )
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
                                                            t.formTranslation
                                                              .common
                                                              .import_data
                                                          ) + "\n              "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                e(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary",
                                                    attrs: {
                                                      to: {
                                                        name: "patient.create",
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      staticClass: "fa fa-plus",
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient.add_patient
                                                        ) +
                                                        "\n              "
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
                        t.patientCustomFormModal
                          ? e("CustomForm", {
                              attrs: {
                                data: t.patientCustomFormData,
                                viewMode: t.patientCustomFormViewMode,
                                customFormModal: t.patientCustomFormModal,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.patientCustomFormModal = !1;
                                },
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        t.userData.addOns.kiviPro &&
                        t.kcCheckPermission("patient_add") &&
                        t.kivicareCompareVersion(
                          t.requireProVersion,
                          t.userData.pro_version
                        )
                          ? e("module-data-import", {
                              ref: "module_data_import",
                              attrs: {
                                required_data: [
                                  {
                                    label: t.formTranslation.patient.first_name,
                                    value: "first_name",
                                  },
                                  {
                                    label: t.formTranslation.patient.last_name,
                                    value: "last_name",
                                  },
                                  {
                                    label: t.formTranslation.patient.email,
                                    value: "email",
                                  },
                                  {
                                    label:
                                      t.formTranslation.common
                                        .country_calling_code,
                                    value: "country_calling_code",
                                  },
                                  {
                                    label:
                                      t.formTranslation.common.country_code,
                                    value: "country_code",
                                  },
                                  {
                                    label:
                                      t.formTranslation.patient.patient_contact,
                                    value: "contact",
                                  },
                                  {
                                    label: t.formTranslation.patient.gender,
                                    value: "gender",
                                  },
                                ],
                                module_name: t.formTranslation.common.patient,
                                module_type: "patient",
                              },
                              on: { reloadList: t.getPatientList },
                            })
                          : t._e(),
                        t._v(" "),
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
                          { attrs: { id: "printPatientData" } },
                          [
                            e(
                              "vue-good-table",
                              {
                                ref: "dataTable",
                                attrs: {
                                  columns: t.patientList.column,
                                  rows: t.patientList.data,
                                  "search-options": {
                                    enabled: !0,
                                    placeholder:
                                      t.formTranslation.common
                                        .search_patient_global_placeholder,
                                  },
                                  mode: "remote",
                                  styleClass: "vgt-table striped",
                                  totalRows: t.totalRows,
                                  "pagination-options": {
                                    enabled: !0,
                                    mode: "pages",
                                  },
                                  "select-options": {
                                    enabled:
                                      t.kcCheckPermission("patient_edit") ||
                                      t.kcCheckPermission(
                                        "patient_resend_credential"
                                      ) ||
                                      t.kcCheckPermission("patient_delete"),
                                    selectOnCheckboxOnly: !0,
                                    selectionInfoClass: "text-primary bg-white",
                                    selectionText:
                                      t.formTranslation.common.rows_selected,
                                    clearSelectionText:
                                      t.formTranslation.common.clear,
                                    disableSelectInfo: !1,
                                    selectAllByGroup: !0,
                                  },
                                  "compact-mode": "",
                                },
                                on: {
                                  "on-sort-change": t.onSortChange,
                                  "on-column-filter": t.onColumnFilter,
                                  "on-page-change": t.onPageChange,
                                  "on-per-page-change": t.onPerPageChange,
                                  "on-search": t.globalFilter,
                                  "on-selected-rows-change": function (e) {
                                    t.globalCheckboxApplyData.data = e;
                                  },
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "column-filter",
                                    fn: function (n) {
                                      var i = n.column,
                                        r = n.updateFilters;
                                      return [
                                        "user_registered" === i.field
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-center align-items-center",
                                              },
                                              [
                                                e("vc-date-picker", {
                                                  attrs: {
                                                    id: "userRegister",
                                                    "title-position": "left",
                                                    popover: {
                                                      visibility: "click",
                                                    },
                                                    "is-expanded": "",
                                                    mode: "range",
                                                  },
                                                  on: {
                                                    input: function (e) {
                                                      return r(
                                                        i,
                                                        t.serverParams
                                                          .columnFilters
                                                          .user_registered
                                                      );
                                                    },
                                                  },
                                                  scopedSlots: t._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (n) {
                                                          var i = n.inputValue;
                                                          return [
                                                            e("input", {
                                                              staticClass:
                                                                "form-control-sm",
                                                              staticStyle: {
                                                                border: "#fff",
                                                              },
                                                              attrs: {
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .appointments
                                                                    .plh_date,
                                                              },
                                                              domProps: {
                                                                value: i,
                                                              },
                                                            }),
                                                          ];
                                                        },
                                                      },
                                                    ],
                                                    null,
                                                    !0
                                                  ),
                                                  model: {
                                                    value:
                                                      t.serverParams
                                                        .columnFilters
                                                        .user_registered,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.serverParams
                                                          .columnFilters,
                                                        "user_registered",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "serverParams.columnFilters.user_registered",
                                                  },
                                                }),
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
                                        "uid" == n.column.field && t.p_uid
                                          ? e("div", [
                                              t._v(
                                                "\n              " +
                                                  t._s(n.row.u_id) +
                                                  "\n              "
                                              ),
                                            ])
                                          : "uid" == n.column.field
                                          ? e("div", [
                                              t._v(
                                                "\n              " +
                                                  t._s(n.row.ID) +
                                                  "\n            "
                                              ),
                                            ])
                                          : "user_registered" == n.column.field
                                          ? e("div", [
                                              t._v(
                                                "\n              " +
                                                  t._s(n.row.user_registered) +
                                                  "\n            "
                                              ),
                                            ])
                                          : "display_name" == n.column.field
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex align-items-center",
                                              },
                                              [
                                                "" != n.row.profile_image &&
                                                null != n.row.profile_image
                                                  ? e("img", {
                                                      staticStyle: {
                                                        "border-radius": "50%",
                                                        "margin-right": "1rem",
                                                      },
                                                      attrs: {
                                                        src: n.row
                                                          .profile_image,
                                                        alt: "profile_image",
                                                        height: "45px",
                                                        width: "45px",
                                                      },
                                                    })
                                                  : e("b-avatar", {
                                                      staticClass: "mr-3",
                                                      attrs: {
                                                        variant: "primary",
                                                        text: t.getInitials(
                                                          n.formattedRow
                                                            .display_name
                                                        ),
                                                        size: "45px",
                                                      },
                                                    }),
                                                t._v(
                                                  "\n              " +
                                                    t._s(
                                                      n.formattedRow
                                                        .display_name
                                                    ) +
                                                    "\n            "
                                                ),
                                              ],
                                              1
                                            )
                                          : "user_status" == n.column.field
                                          ? e(
                                              "div",
                                              { staticClass: "d-flex" },
                                              [
                                                t.kcCheckPermission(
                                                  "patient_edit"
                                                )
                                                  ? e("b-form-checkbox", {
                                                      attrs: {
                                                        name: "check-button",
                                                        switch: "",
                                                        value: "0",
                                                        size: "lg",
                                                        "unchecked-value": "1",
                                                        id:
                                                          "status_change_" +
                                                          n.row.ID,
                                                      },
                                                      on: {
                                                        change: function (e) {
                                                          return t.changeModuleValueStatus(
                                                            {
                                                              module_type:
                                                                "patients",
                                                              id: n.row.ID,
                                                              value:
                                                                n.row
                                                                  .user_status,
                                                            }
                                                          );
                                                        },
                                                      },
                                                      model: {
                                                        value:
                                                          n.row.user_status,
                                                        callback: function (e) {
                                                          t.$set(
                                                            n.row,
                                                            "user_status",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "props.row.user_status",
                                                      },
                                                    })
                                                  : t._e(),
                                                t._v(" "),
                                                "0" == n.row.user_status
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
                                                              t.formTranslation
                                                                .common.active
                                                            ) +
                                                            " "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "1" == n.row.user_status
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
                                                              t.formTranslation
                                                                .common.inactive
                                                            ) +
                                                            " "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ],
                                              1
                                            )
                                          : "action" == n.column.field
                                          ? e(
                                              "div",
                                              { staticClass: "btn-group" },
                                              [
                                                t.kcCheckPermission(
                                                  "patient_edit"
                                                )
                                                  ? e(
                                                      "router-link",
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
                                                          title:
                                                            t.formTranslation
                                                              .common.edit,
                                                          to: {
                                                            name: "patient.edit",
                                                            params: {
                                                              id: n.row.ID,
                                                              pid: n.row.u_id,
                                                            },
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
                                                  "appointment_list"
                                                )
                                                  ? e(
                                                      "router-link",
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
                                                          title:
                                                            t.formTranslation
                                                              .appointments
                                                              .appointments,
                                                          to: {
                                                            name: "patient-appointment-list",
                                                            params: {
                                                              patient_id:
                                                                n.row.ID,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fas fa-calendar-week",
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t.kcCheckPermission(
                                                  "patient_encounter_list"
                                                )
                                                  ? e(
                                                      "router-link",
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
                                                          title:
                                                            t.formTranslation
                                                              .patient_encounter
                                                              .encounters,
                                                          to: {
                                                            name: "patient-encounter",
                                                            params: {
                                                              patient_id:
                                                                n.row.ID,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-calendar-check",
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                1 ==
                                                  t.userData.addOns.kiviPro &&
                                                t.kcCheckPermission(
                                                  "patient_report"
                                                )
                                                  ? e(
                                                      "router-link",
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
                                                          title:
                                                            t.formTranslation
                                                              .reports.reports,
                                                          to: {
                                                            name: "patient-medical-report_id",
                                                            params: {
                                                              patient_id:
                                                                n.row.ID,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-file",
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t.kcCheckPermission(
                                                  "patient_resend_credential"
                                                )
                                                  ? e(
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
                                                          "btn btn-outline-warning btn-sm",
                                                        attrs: {
                                                          title:
                                                            t.formTranslation
                                                              .receptionist
                                                              .resend_credential,
                                                          id:
                                                            "resend_" +
                                                            n.row.ID,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.resendRequest(
                                                              n.row.ID
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-paper-plane",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true",
                                                          },
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t.kcCheckPermission(
                                                  "patient_profile"
                                                )
                                                  ? e(
                                                      "router-link",
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
                                                          title:
                                                            t.formTranslation
                                                              .common.profile,
                                                          to: {
                                                            name: "patient-profile-view",
                                                            params: {
                                                              id: n.row.ID,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          staticClass:
                                                            "fa fa-user",
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t._l(
                                                  n.row.custom_forms,
                                                  function (i, r) {
                                                    return (i.conditions
                                                      .role_id &&
                                                      0 !==
                                                        i.conditions.role_id
                                                          .length &&
                                                      !i.conditions.role_id.some(
                                                        function (e) {
                                                          return t.$store.state.userDataModule.user.roles.includes(
                                                            e.id
                                                          );
                                                        }
                                                      )) ||
                                                      1 !=
                                                        t.userData.addOns
                                                          .kiviPro ||
                                                      !t.customFormCondition(
                                                        n.row,
                                                        i
                                                      )
                                                      ? t._e()
                                                      : e(
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
                                                            key: r,
                                                            staticClass:
                                                              "btn btn-sm btn-outline-primary",
                                                            attrs: {
                                                              title:
                                                                i.name &&
                                                                i.name.text
                                                                  ? i.name.text
                                                                  : "",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.customFormOpen(
                                                                  n.row,
                                                                  i
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              class:
                                                                i.name &&
                                                                i.name.icon
                                                                  ? i.name.icon
                                                                  : "fas fa-book-medical",
                                                            }),
                                                          ]
                                                        );
                                                  }
                                                ),
                                                t._v(" "),
                                                t.kcCheckPermission(
                                                  "patient_delete"
                                                )
                                                  ? e(
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
                                                            t.formTranslation
                                                              .clinic_schedule
                                                              .dt_lbl_dlt,
                                                          id:
                                                            "user_delete_" +
                                                            n.index +
                                                            1,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.deletePatientData(
                                                              n.index + 1
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
                                              2
                                            )
                                          : e("div", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    "display_name" ==
                                                      n.column.field
                                                      ? ""
                                                      : n.formattedRow[
                                                          n.column.field
                                                        ]
                                                  ) +
                                                  "\n            "
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
                                      "\n            " +
                                        t._s(
                                          t.formTranslation.common.no_data_found
                                        ) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    attrs: { slot: "table-actions" },
                                    slot: "table-actions",
                                  },
                                  [
                                    t.kcCheckPermission("patient_export")
                                      ? e("module-data-export", {
                                          attrs: {
                                            module_data: t.patientList.data,
                                            module_name:
                                              t.formTranslation.dashboard
                                                .patients,
                                            module_type: "patient",
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
                                    attrs: { slot: "selected-row-actions" },
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
                                                  t.globalCheckboxApplyData
                                                    .action_perform,
                                                expression:
                                                  "globalCheckboxApplyData.action_perform",
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
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
                                                  t.globalCheckboxApplyData,
                                                  "action_perform",
                                                  e.target.multiple ? n : n[0]
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
                                                  domProps: { value: n.value },
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
                                            on: { click: t.confirmDelete },
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(
                                                  t.formTranslation.common.apply
                                                ) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("template", { slot: "loadingContent" }, [
                                  e("div", [
                                    e(
                                      "span",
                                      {
                                        staticClass: "h2 font-weight-bold mb-0",
                                      },
                                      [
                                        e("i", {
                                          staticClass: "fa fa-spinner fa-spin",
                                          attrs: { "aria-hidden": "true" },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
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
      ft = n(53),
      bt = n.n(ft),
      mt =
        (n(73),
        {
          components: { VuePhoneNumberInput: bt.a },
          data: function () {
            return {
              u_id_enabled: "",
              patientData: {},
              loading: !1,
              submitted: !1,
              cardTitle: "Add patient",
              buttonText: '<i class="fa fa-save"></i> Save',
              qualification: {},
              bloodGroups: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
              requiredFields: [],
              clinics: [],
              imagePreview: pluginBASEURL + "assets/images/kc-demo-img.png",
              hideFields: [],
              formLoader: !1,
              clinicMultiselectLoader: !0,
              isCustomeFieldExist: !1,
              defaultCountryCode: null,
              defaultUserRegistrationFormSettingData: "on",
              customFields: {},
            };
          },
          mounted: function () {
            this.getCountryCodeData(),
              this.getUserRegistrationFormData(),
              (this.cardTitle = this.formTranslation.patient.add_patient),
              (this.patientData = this.defaultPatientData()),
              this.init(),
              this.getClinics(),
              this.getHideFieldsArrayFromFilter();
          },
          validations: {
            patientData: {
              first_name: {
                required: l.required,
                minLength: Object(l.minLength)(2),
                maxLength: Object(l.maxLength)(50),
              },
              last_name: {
                required: l.required,
                minLength: Object(l.minLength)(2),
                maxLength: Object(l.maxLength)(50),
              },
              username: { required: l.required },
              user_email: { required: l.required },
              mobile_number: {
                required: l.required,
                minLength: Object(l.minLength)(4),
                maxLength: Object(l.maxLength)(15),
              },
              gender: { required: l.required },
              clinic_id: {
                required: Object(l.requiredIf)(function () {
                  return (
                    1 == this.userData.addOns.kiviPro &&
                    ("administrator" == this.getUserRole() ||
                      "doctor" == this.getUserRole())
                  );
                }),
              },
              city: {},
              country: {},
              postal_code: {},
              dob: { required: l.required },
            },
          },
          methods: {
            handleCustomField: function (t) {
              this.customFields = t;
            },
            contactUpdateHandaler: function (t) {
              (this.patientData.country_code = t.countryCode),
                (this.patientData.country_calling_code = t.countryCallingCode);
            },
            init: function () {
              var t = this;
              void 0 !== this.$route.params.id
                ? ((this.cardTitle = this.formTranslation.patient.edit_patient),
                  (this.buttonText =
                    '<i class="fa fa-save"></i> ' +
                    this.formTranslation.common.save),
                  (this.formLoader = !0),
                  Object(s.a)("patient_edit", {
                    id: this.$route.params.id,
                    p_id: this.$route.params.pid,
                  })
                    .then(function (e) {
                      setTimeout(function () {
                        t.formLoader = !1;
                      }, 200),
                        void 0 !== e.data.status &&
                          !0 === e.data.status &&
                          setTimeout(function () {
                            (t.patientData = e.data.data),
                              "" !== e.data.data.country_calling_code &&
                                void 0 !== e.data.data.country_calling_code &&
                                (t.defaultCountryCode =
                                  e.data.data.country_code),
                              (t.patientData.custom_fields =
                                e.data.custom_filed),
                              (t.isCustomeFieldExist =
                                void 0 !== t.patientData.custom_fields &&
                                t.patientData.custom_fields.length > 0),
                              t.patientData.user_profile &&
                                (t.imagePreview = t.patientData.user_profile),
                              (t.patientData.username = t.patientData.username
                                ? t.patientData.username
                                    .toString()
                                    .replace(/\D+/g, "")
                                : ""),
                              (t.patientData.u_id = t.patientData.u_id
                                ? t.patientData.u_id
                                    .toString()
                                    .replace(/\D+/g, "")
                                : t.patientData.username),
                              (t.patientData.username = t.patientData.u_id),
                              (void 0 !== t.patientData.blood_group &&
                                null !== t.patientData.blood_group &&
                                "" !== t.patientData.blood_group) ||
                                (t.patientData.blood_group = "default"),
                              void 0 !== t.patientData.u_id &&
                                "" === t.patientData.u_id &&
                                void 0 !== t.userData.unquie_id_status &&
                                (t.patientData.u_id =
                                  t.userData.unquie_id_value);
                          }, 200);
                    })
                    .catch(function (e) {
                      (t.formLoader = !1),
                        displayErrorMessage(
                          t.formTranslation.widgets.record_not_found
                        );
                    }))
                : void 0 !== this.userData.unquie_id_status &&
                  Object(s.b)("get_unique_id").then(function (e) {
                    var n = (e.data.data || "").toString().replace(/\D+/g, "");
                    (t.patientData.u_id = n),
                      (t.patientData.username = n),
                      (void 0 === t.patientData.ID ||
                        null === t.patientData.ID ||
                        "" === t.patientData.ID) &&
                        (t.patientData.user_pass = n);
                  }),
                void 0 !== this.userData.unquie_id_status &&
                1 == this.userData.unquie_id_status
                  ? (this.u_id_enabled = this.userData.unquie_id_status)
                  : (this.u_id_enabled = !1);
            },
            uploadProfile: function () {
              var t = this,
                e = kivicareCustomImageUploader(this.formTranslation);
              e.on("select", function () {
                var n = e.state().get("selection").first().toJSON();
                (t.imagePreview = n.url), (t.patientData.profile_image = n.id);
              }),
                e.open();
            },
            defaultPatientData: function () {
              return {
                first_name: "",
                last_name: "",
                username: "",
                user_email: "",
                user_pass: "",
                mobile_number: "",
                country_code: "",
                country_calling_code: "",
                gender: "",
                dob: "",
                about_me: "",
                address: "",
                city: "",
                country: "",
                postal_code: "",
                blood_group: "default",
                custom_fields: {},
                profile_image: "",
                u_id: "",
              };
            },
            handleSubmit: function () {
              var t = this;
              if (
                ((this.loading = !0),
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
                        .scrollIntoView({
                          block: "center",
                          behavior: "smooth",
                        });
                }),
                this.$v.patientData.$invalid)
              )
                this.loading = !1;
              else {
                if (this.requiredFields.length > 0)
                  return (
                    (this.loading = !1),
                    void displayErrorMessage(
                      this.formTranslation.common.all_required_field_validation
                    )
                  );
                var e = Object(I.m)(
                  this.customFields,
                  this.patientData.custom_fields
                );
                if (!0 !== e)
                  return (
                    (this.loading = !1),
                    void displayErrorMessage(
                      e +
                        " " +
                        this.formTranslation.patient_encounter.is_required
                    )
                  );
                var n = (this.patientData.u_id || "")
                  .toString()
                  .replace(/\D+/g, "");
                (this.patientData.u_id = n),
                  (this.patientData.username = n),
                  (void 0 === this.patientData.ID ||
                    null === this.patientData.ID ||
                    "" === this.patientData.ID) &&
                    (this.patientData.user_pass = n),
                  Object(I.n)("patientDataForm") &&
                    Object(s.b)("patient_save", this.patientData)
                      .then(function (e) {
                        (t.loading = !1),
                          void 0 !== e.data.status && !0 === e.data.status
                            ? (displayMessage(e.data.message),
                              t.$router.push({ name: "patient" }))
                            : displayErrorMessage(e.data.message);
                      })
                      .catch(function (e) {
                        (t.loading = !1),
                          displayErrorMessage(
                            t.formTranslation.common.internal_server_error
                          );
                      });
              }
            },
            getCustomFieldsValues: function (t) {
              if (!t || void 0 === t) return !1;
              this.patientData.custom_fields = t;
            },
            getRequireFields: function (t) {
              this.requiredFields = t;
            },
            getClinics: function () {
              var t = this;
              (this.clinicMultiselectLoader = !0),
                Object(s.a)("get_static_data", { data_type: "clinic_list" })
                  .then(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      void 0 !== e.data.status &&
                        !0 === e.data.status &&
                        (t.clinics = e.data.data);
                  })
                  .catch(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            },
            getHideFieldsArrayFromFilter: function () {
              var t = this;
              Object(s.a)("get_hide_fields_array_from_filter", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.hideFields = e.data.data);
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                });
            },
            getCountryCodeData: function () {
              var t = this;
              Object(s.a)("get_country_code_settings_data", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.defaultCountryCode = e.data.data.country_code);
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                });
            },
            getUserRegistrationFormData: function () {
              var t = this;
              Object(s.a)("get_user_registration_form_settings_data", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.defaultUserRegistrationFormSettingData =
                      e.data.data.userRegistrationFormSettingData);
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
                });
            },
          },
          computed: {
            userData: function () {
              return this.$store.state.userDataModule.user;
            },
            customFieldsData: function () {
              return this.patientData.custom_fields
                ? this.patientData.custom_fields
                : [];
            },
          },
        }),
      gt =
        (n(663),
        Object(h.a)(
          mt,
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
                          attrs: { id: "patientDataForm", novalidate: !0 },
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
                                          t.kcCheckPermission("patient_list")
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
                                                            click: function (
                                                              e
                                                            ) {
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
                                                                t
                                                                  .formTranslation
                                                                  .common.back
                                                              ) +
                                                              "\n                                "
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
                                                            "\n                                "
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
                                                            "fa fa-save",
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .patient
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
                                                          t.formTranslation
                                                            .common.cancel
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
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "h4",
                                    { staticClass: "text-primary mb-4" },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.basic_details
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                t.u_id_enabled
                                  ? e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "first_uid" },
                                          },
                                          [
                                            t._v("Cédula "),
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
                                              value: t.patientData.u_id,
                                              expression: "patientData.u_id",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.patientData.username.$error,
                                          },
                                          attrs: {
                                            id: "first_uid",
                                            placeholder: "Ingrese cédula",
                                            required: "required",
                                            name: "u_id",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.patientData.u_id,
                                          },
                                          on: {
                                            input: function (e) {
                                              if (!e.target.composing) {
                                                var n = e.target.value.replace(
                                                  /\D+/g,
                                                  ""
                                                );
                                                t.$set(
                                                  t.patientData,
                                                  "u_id",
                                                  n
                                                ),
                                                  t.$set(
                                                    t.patientData,
                                                    "username",
                                                    n
                                                  ),
                                                  (void 0 ===
                                                    t.patientData.ID ||
                                                    null === t.patientData.ID ||
                                                    "" === t.patientData.ID) &&
                                                    t.$set(
                                                      t.patientData,
                                                      "user_pass",
                                                      n
                                                    );
                                              }
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.patientData.username.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [t._v("La cédula es requerida")]
                                            )
                                          : t._e(),
                                      ]),
                                    ])
                                  : t._e(),
                                t._v(" "),
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
                                          value: t.patientData.first_name,
                                          expression: "patientData.first_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.patientData.first_name.$error,
                                      },
                                      attrs: {
                                        id: "first_name",
                                        placeholder:
                                          t.formTranslation.patient.fname_plh,
                                        required: "required",
                                        name: "first_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.patientData.first_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.patientData,
                                              "first_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.patientData.first_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .fname_required
                                              ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.patientData.first_name
                                          .minLength &&
                                          t.$v.patientData.first_name.maxLength)
                                      ? t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .fname_validation_2
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "last_name" },
                                      },
                                      [
                                        t._v(
                                          "\n                                " +
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
                                          value: t.patientData.last_name,
                                          expression: "patientData.last_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.patientData.last_name.$error,
                                      },
                                      attrs: {
                                        id: "last_name",
                                        placeholder:
                                          t.formTranslation.patient
                                            .lname_placeholder,
                                        required: "required",
                                        name: "first_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.patientData.last_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.patientData,
                                              "last_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.patientData.last_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_required
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    !t.submitted ||
                                    (t.$v.patientData.last_name.minLength &&
                                      t.$v.patientData.last_name.maxLength)
                                      ? t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_validation_2
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-8" }, [
                                  e("div", { staticClass: "row" }, [
                                    1 != t.userData.addOns.kiviPro ||
                                    ("administrator" != t.getUserRole() &&
                                      "doctor" != t.getUserRole())
                                      ? t._e()
                                      : e("div", { staticClass: "col-md-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
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
                                                    "\n                                        " +
                                                      t._s(
                                                        t.formTranslation
                                                          .patient.select_clinic
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
                                                  loading:
                                                    t.clinicMultiselectLoader,
                                                  "track-by": "id",
                                                  options: t.clinics,
                                                  multiple: !0,
                                                  taggable: !0,
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
                                                  !1,
                                                  2211710038
                                                ),
                                                model: {
                                                  value:
                                                    t.patientData.clinic_id,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.patientData,
                                                      "clinic_id",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "patientData.clinic_id",
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.patientData.clinic_id
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
                                                            .clinic_is_required
                                                        ) +
                                                          "\n                                  "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
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
                                            attrs: { for: "email" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.email
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
                                              value: t.patientData.user_email,
                                              expression:
                                                "patientData.user_email",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.patientData.user_email
                                                .$error,
                                          },
                                          attrs: {
                                            id: "email",
                                            placeholder:
                                              t.formTranslation.patient
                                                .email_placeholder,
                                            required: "required",
                                            name: "user_email",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.patientData.user_email,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientData,
                                                  "user_email",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.patientData.user_email.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .email_required
                                                  ) +
                                                    "\n                                    "
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
                                              attrs: { for: "mobile_number" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .contact_no
                                                ) + ". "
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
                                              "default-country-code":
                                                t.defaultCountryCode,
                                              id: "phone_number",
                                              clearable: "",
                                              "no-example": "",
                                            },
                                            on: {
                                              update: t.contactUpdateHandaler,
                                            },
                                            model: {
                                              value:
                                                t.patientData.mobile_number,
                                              callback: function (e) {
                                                t.$set(
                                                  t.patientData,
                                                  "mobile_number",
                                                  e
                                                );
                                              },
                                              expression:
                                                " patientData.mobile_number ",
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.patientData.mobile_number
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
                                                      t.formTranslation.common
                                                        .contact_num_required
                                                    ) +
                                                      "\n                                    "
                                                  ),
                                                ]
                                              )
                                            : (t.submitted &&
                                                !t.$v.patientData.mobile_number
                                                  .minLength) ||
                                              !t.$v.patientData.mobile_number
                                                .maxLength
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .contact_validation_1
                                                      ) +
                                                      "\n                                    "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    t._v(" "),
                                    t.hideFields.includes("dob")
                                      ? t._e()
                                      : e("div", { staticClass: "col-md-6" }, [
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
                                                      ". \n                                        "
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
                                                    value: t.patientData.dob,
                                                    expression:
                                                      "patientData.dob",
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
                                                  value: t.patientData.dob,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.patientData,
                                                        "dob",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.patientData.dob.required
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
                                                            .common.dob_required
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                    t._v(" "),
                                    t.hideFields.includes("blood_group")
                                      ? t._e()
                                      : e("div", { staticClass: "col-md-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "blood_group" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.clinic
                                                        .blood_group
                                                    ) + " "
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "b-select",
                                                {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name: "blood_group",
                                                    id: "blood_group",
                                                  },
                                                  model: {
                                                    value:
                                                      t.patientData.blood_group,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.patientData,
                                                        "blood_group",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "patientData.blood_group",
                                                  },
                                                },
                                                [
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "default",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .clinic
                                                              .select_blood_group
                                                          )
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t._l(
                                                    t.bloodGroups,
                                                    function (n, i) {
                                                      return e(
                                                        "option",
                                                        {
                                                          key: i,
                                                          domProps: {
                                                            value: n,
                                                          },
                                                        },
                                                        [t._v(t._s(n))]
                                                      );
                                                    }
                                                  ),
                                                ],
                                                2
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "col-md-6",
                                        attrs: { id: "patient_gender_div" },
                                      },
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
                                                attrs: { for: "gender" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .gender
                                                  ) + " "
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [t._v("*")]
                                                ),
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
                                                      "custom-control custom-radio custom-control-inline",
                                                  },
                                                  [
                                                    e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.patientData
                                                              .gender,
                                                          expression:
                                                            "patientData.gender",
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
                                                      domProps: {
                                                        checked: t._q(
                                                          t.patientData.gender,
                                                          "male"
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.patientData,
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
                                                            t.patientData
                                                              .gender,
                                                          expression:
                                                            "patientData.gender",
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
                                                      domProps: {
                                                        checked: t._q(
                                                          t.patientData.gender,
                                                          "female"
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.patientData,
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
                                                "on" ===
                                                t.defaultUserRegistrationFormSettingData
                                                  ? e(
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
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.patientData
                                                                  .gender,
                                                              expression:
                                                                "patientData.gender",
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
                                                          domProps: {
                                                            checked: t._q(
                                                              t.patientData
                                                                .gender,
                                                              "other"
                                                            ),
                                                          },
                                                          on: {
                                                            change: function (
                                                              e
                                                            ) {
                                                              return t.$set(
                                                                t.patientData,
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
                                                            attrs: {
                                                              for: "other",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.other
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                            t._v(" "),
                                            t.submitted &&
                                            !t.$v.patientData.gender.required
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .gender_required
                                                      ) +
                                                        "\n                                    "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                      ]
                                    ),
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
                                          {
                                            staticClass: "kivicare-avatar-edit",
                                          },
                                          [
                                            e("input", {
                                              staticClass: "p-2",
                                              staticStyle: {
                                                color: "transparent",
                                              },
                                              attrs: {
                                                id: "file",
                                                type: "button",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.uploadProfile()
                                                  );
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
                              t.hideFields.includes("address") &&
                              t.hideFields.includes("city") &&
                              t.hideFields.includes("country") &&
                              t.hideFields.includes("postal_code")
                                ? t._e()
                                : e("hr"),
                              t._v(" "),
                              t.hideFields.includes("address") &&
                              t.hideFields.includes("city") &&
                              t.hideFields.includes("country") &&
                              t.hideFields.includes("postal_code")
                                ? t._e()
                                : e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e(
                                        "h4",
                                        { staticClass: "text-primary mb-4" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.doctor
                                                .other_details
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                              t._v(" "),
                              t.hideFields.includes("address")
                                ? t._e()
                                : e("div", { staticClass: "row" }, [
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
                                              t._s(
                                                t.formTranslation.common.address
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.patientData.address,
                                              expression: "patientData.address",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            name: "address",
                                            id: "address",
                                            placeholder:
                                              t.formTranslation.patient
                                                .address_placeholder,
                                          },
                                          domProps: {
                                            value: t.patientData.address,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientData,
                                                  "address",
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
                                t.hideFields.includes("city")
                                  ? t._e()
                                  : e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "city" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.city
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
                                              value: t.patientData.city,
                                              expression: "patientData.city",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "city",
                                            placeholder:
                                              t.formTranslation.patient
                                                .city_placeholder,
                                            name: "city",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.patientData.city,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientData,
                                                  "city",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                      ]),
                                    ]),
                                t._v(" "),
                                t.hideFields.includes("country")
                                  ? t._e()
                                  : e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "country" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.country
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
                                              value: t.patientData.country,
                                              expression: "patientData.country",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "country",
                                            placeholder:
                                              t.formTranslation.patient
                                                .country_placeholder,
                                            name: "country",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.patientData.country,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientData,
                                                  "country",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                      ]),
                                    ]),
                                t._v(" "),
                                t.hideFields.includes("postal_code")
                                  ? t._e()
                                  : e("div", { staticClass: "col-md-4" }, [
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
                                                t.formTranslation.common
                                                  .postal_code
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
                                              value: t.patientData.postal_code,
                                              expression:
                                                "patientData.postal_code",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "postal_code",
                                            placeholder:
                                              t.formTranslation.patient
                                                .pcode_placeholder,
                                            name: "postal_code",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.patientData.postal_code,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientData,
                                                  "postal_code",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                      ]),
                                    ]),
                              ]),
                              t._v(" "),
                              t.isCustomeFieldExist ? e("hr") : t._e(),
                              t._v(" "),
                              t.isCustomeFieldExist &&
                              t.checkEnableModule("custom_fields")
                                ? e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e(
                                        "h4",
                                        { staticClass: "text-primary mb-3" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.doctor
                                                  .extra_detail
                                              )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                              t._v(" "),
                              t.checkEnableModule("custom_fields")
                                ? e("div", { staticClass: "row" }, [
                                    e(
                                      "div",
                                      { staticClass: "col-md-12" },
                                      [
                                        void 0 === this.$route.params.id
                                          ? e("get-custom-fields", {
                                              attrs: {
                                                module_type: "patient_module",
                                                module_id: String(0),
                                                fieldsValue: t.customFieldsData,
                                              },
                                              on: {
                                                bindCustomField:
                                                  t.getCustomFieldsValues,
                                                customFieldAvailable: function (
                                                  e
                                                ) {
                                                  t.isCustomeFieldExist = e;
                                                },
                                                requiredCustomField:
                                                  t.getRequireFields,
                                                fieldObject:
                                                  t.handleCustomField,
                                              },
                                            })
                                          : e("edit-custom-fields", {
                                              attrs: {
                                                module_type: "patient_module",
                                                module_id: String(
                                                  this.$route.params.id
                                                ),
                                                fieldsValue: t.customFieldsData,
                                              },
                                              on: {
                                                bindCustomField:
                                                  t.getCustomFieldsValues,
                                                requiredCustomField:
                                                  t.getRequireFields,
                                                fieldObject:
                                                  t.handleCustomField,
                                              },
                                            }),
                                      ],
                                      1
                                    ),
                                  ])
                                : t._e(),
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
          "41f4af7d",
          null
        ).exports),
      vt = n(66);
    function _t(t) {
      return (_t =
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
    var yt = {
        components: { VuePhoneNumberInput: bt.a, CustomForm: vt.a },
        data: function () {
          return {
            isEditProfile: !1,
            patientData: {},
            loading: !1,
            submitted: !1,
            backBtnText: ' <i class="fa fa-angle-double-left"></i> Back',
            cardTitle: "Edit Profile",
            editProfileBtnText: '<i class="fa fa-pen-fancy"></i> Edit Profile',
            buttonText: '<i class="fa fa-plus"></i> Add',
            qualification: {},
            bloodGroups: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
            profileImage: "",
            file: "",
            hideFields: [],
            formLoader: !0,
            showCustomField: !1,
            custom_fields: [],
            defaultCountryCode: null,
            requiredFields: [],
            clinicMultiselectLoader: !0,
            clinics: [],
            defaultUserRegistrationFormSettingData: "on",
            viewMode: "editProfile",
            customFields: {},
          };
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.patientData = this.defaultPatientData()),
            this.init(),
            this.getClinics(),
            (this.profileImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png"),
            this.getHideFieldsArrayFromFilter();
        },
        validations: {
          patientData: {
            first_name: { required: l.required },
            last_name: { required: l.required },
            user_email: { required: l.required, emailValidate: I.c },
            mobile_number: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            clinic_id: { required: l.required },
            city: {},
            country: {},
            postal_code: {},
          },
        },
        methods: {
          handleCustomField: function (t) {
            this.customFields = t;
          },
          contactUpdateHandaler: function (t) {
            (this.patientData.country_code = t.countryCode),
              (this.patientData.country_calling_code = t.countryCallingCode);
          },
          init: function () {
            var t = this;
            if (void 0 !== this.$store.state.userDataModule.user.ID) {
              var e = this.$store.state.userDataModule.user.ID;
              this.editProfile(e);
            } else
              this.$store.dispatch("userDataModule/fetchUserData", {}),
                setTimeout(function () {
                  var e = t.$store.state.userDataModule.user.ID;
                  t.editProfile(e);
                }, 1e3);
          },
          defaultPatientData: function () {
            return {
              first_name: "",
              last_name: "",
              username: "",
              user_email: "",
              user_pass: "",
              country_code: "",
              country_calling_code: "",
              mobile_number: "",
              gender: "",
              dob: "",
              about_me: "",
              address: "",
              city: "",
              state: "",
              country: "",
              postal_code: "",
              blood_group: "default",
              profile_image: "",
            };
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.patientData.user_profile = n.url),
                (t.patientData.profile_image = n.id);
            }),
              e.open();
          },
          handleSubmit: function () {
            var t = this;
            if (
              ((this.loading = !0),
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
              this.$v.patientData.$invalid)
            )
              this.loading = !1;
            else {
              if (this.requiredFields.length > 0)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    this.formTranslation.common.all_required_field_validation
                  )
                );
              if (
                "object" !== _t(this.customFields) ||
                !Array.isArray(this.patientData.custom_fields)
              ) {
                var e = Object(I.m)(
                  this.customFields,
                  this.patientData.custom_fields
                );
                if (!0 !== e)
                  return (
                    (this.loading = !1),
                    void displayErrorMessage(
                      e +
                        " " +
                        this.formTranslation.patient_encounter.is_required
                    )
                  );
              }
              Object(I.n)("patientDataForm") &&
                Object(s.b)("patient_save", this.patientData)
                  .then(function (e) {
                    (t.loading = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (e.data.choose_language_updated &&
                            t.$store.dispatch(
                              "staticDataModule/refreshDashboardLocale",
                              { self: t }
                            ),
                          displayMessage(e.data.message),
                          (t.isEditProfile = !1))
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.loading = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            }
          },
          getCustomFieldsValues: function (t) {
            if (!t || void 0 === t) return !1;
            this.patientData.custom_fields = t;
          },
          editProfile: function (t) {
            var e = this;
            (this.cardTitle = this.formTranslation.patient.edit_profile),
              (this.buttonText =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.common.save),
              (this.formLoader = !0),
              Object(s.a)("patient_edit", { id: t })
                .then(function (t) {
                  (e.formLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      ((e.patientData = t.data.data),
                      "" !== t.data.data.country_calling_code &&
                        void 0 !== t.data.data.country_calling_code &&
                        (e.defaultCountryCode = t.data.data.country_code),
                      void 0 !== t.data.custom_filed &&
                        t.data.custom_filed.length > 0 &&
                        ((e.showCustomField = !0),
                        (e.custom_fields = t.data.custom_filed)),
                      (e.patientData.choose_language =
                        e.kc_available_translations.find(function (e) {
                          return e.lang === t.data.data.choose_language;
                        })));
                })
                .catch(function (t) {
                  (e.formLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.widgets.record_not_found
                    );
                });
          },
          getHideFieldsArrayFromFilter: function () {
            var t = this;
            Object(s.a)("get_hide_fields_array_from_filter", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.hideFields = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getCountryCodeData: function () {
            var t = this;
            Object(s.a)("get_country_code_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.defaultCountryCode = e.data.data.country_code);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getRequireFields: function (t) {
            this.requiredFields = t;
          },
          getClinics: function () {
            var t = this;
            (this.clinicMultiselectLoader = !0),
              Object(s.a)("get_static_data", { data_type: "clinics" })
                .then(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.clinics = e.data.data);
                })
                .catch(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getUserRegistrationFormData: function () {
            var t = this;
            Object(s.a)("get_user_registration_form_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.defaultUserRegistrationFormSettingData =
                    e.data.data.userRegistrationFormSettingData);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          customFormDataUpdate: function (t, e) {
            return (t.module_id = e), t;
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          kc_available_translations: function () {
            return this.$store.state.userDataModule.user
              .kc_available_translations;
          },
        },
        filters: {
          dateFormat: function (t) {
            return moment(t).format("YYYY-MM-DD");
          },
        },
      },
      Mt =
        (n(665),
        Object(h.a)(
          yt,
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
                        e("b-col", { staticClass: "col-xl-9 order-xl-1" }, [
                          e(
                            "div",
                            { staticClass: "card" },
                            [
                              e(
                                "div",
                                { staticClass: "card-header pb-0 border-0" },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "row",
                                      attrs: { id: "patient_profile" },
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "col-12" },
                                        [
                                          e(
                                            "b-tabs",
                                            [
                                              e("b-tab", {
                                                attrs: {
                                                  title:
                                                    t.formTranslation.patient
                                                      .edit_profile,
                                                  active:
                                                    "editProfile" ===
                                                    t.viewMode,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    t.viewMode = "editProfile";
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t._l(
                                                t.patientData.custom_forms,
                                                function (n, i) {
                                                  return 1 !=
                                                    t.userData.addOns.kiviPro ||
                                                    !t.patientData
                                                      .custom_forms ||
                                                    !t.patientData.custom_forms
                                                      .length ||
                                                    (n.conditions.role_id &&
                                                      0 !==
                                                        n.conditions.role_id
                                                          .length &&
                                                      !n.conditions.role_id.some(
                                                        function (e) {
                                                          return t.$store.state.userDataModule.user.roles.includes(
                                                            e.id
                                                          );
                                                        }
                                                      )) ||
                                                    (0 !==
                                                      n.clinic_ids.length &&
                                                      !n.clinic_ids.some(
                                                        function (e) {
                                                          return t.patientData.clinic_ids.includes(
                                                            e
                                                          );
                                                        }
                                                      ))
                                                    ? t._e()
                                                    : e("b-tab", {
                                                        key: i,
                                                        attrs: {
                                                          title:
                                                            n.name &&
                                                            n.name.text
                                                              ? n.name.text
                                                              : "",
                                                          active:
                                                            t.viewMode ===
                                                            "custom_form_" +
                                                              n.id,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            t.viewMode =
                                                              "custom_form_" +
                                                              n.id;
                                                          },
                                                        },
                                                      });
                                                }
                                              ),
                                            ],
                                            2
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              "editProfile" === t.viewMode
                                ? e(
                                    "form",
                                    {
                                      attrs: {
                                        id: "patientDataForm",
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
                                        { staticClass: "card-body pt-0" },
                                        [
                                          e(
                                            "h6",
                                            {
                                              staticClass:
                                                "heading-small text-muted mb-4",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.doctor
                                                    .basic_information
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("div", { staticClass: "pl-lg-4" }, [
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "first_name",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                      " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.fname
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
                                                              t.patientData
                                                                .first_name,
                                                            expression:
                                                              "patientData.first_name",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.patientData
                                                              .first_name
                                                              .$error,
                                                        },
                                                        attrs: {
                                                          id: "first_name",
                                                          placeholder:
                                                            t.formTranslation
                                                              .patient
                                                              .fname_plh,
                                                          required: "required",
                                                          name: "name",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.patientData
                                                              .first_name,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.patientData,
                                                                "first_name",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.patientData
                                                        .first_name.required
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
                                                                    .common
                                                                    .fname_required
                                                                ) +
                                                                  "\n                    "
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
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "last_name",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                      " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.lname
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
                                                              t.patientData
                                                                .last_name,
                                                            expression:
                                                              "patientData.last_name",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.patientData
                                                              .last_name.$error,
                                                        },
                                                        attrs: {
                                                          id: "last_name",
                                                          placeholder:
                                                            t.formTranslation
                                                              .patient
                                                              .lname_placeholder,
                                                          required: "required",
                                                          name: "name",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.patientData
                                                              .last_name,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.patientData,
                                                                "last_name",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.patientData
                                                        .last_name.required
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
                                                                      .common
                                                                      .lname_required
                                                                  ) +
                                                                  "\n                    "
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
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "email",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                      " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .email_address
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
                                                              t.patientData
                                                                .user_email,
                                                            expression:
                                                              "patientData.user_email",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.patientData
                                                              .user_email
                                                              .$error,
                                                        },
                                                        attrs: {
                                                          id: "email",
                                                          placeholder:
                                                            t.formTranslation
                                                              .patient
                                                              .address_placeholder,
                                                          required: "required",
                                                          name: "email",
                                                          type: "email",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.patientData
                                                              .user_email,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.patientData,
                                                                "user_email",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.patientData
                                                        .user_email.required
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
                                                                    .common
                                                                    .email_required
                                                                ) +
                                                                  "\n                    "
                                                              ),
                                                            ]
                                                          )
                                                        : t.submitted &&
                                                          !t.$v.patientData
                                                            .user_email
                                                            .emailValidate
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
                                                                    .common
                                                                    .invalid_email
                                                                ) +
                                                                  "\n                    "
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
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: {
                                                            for: "clinic_id",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                        " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .select_clinic
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
                                                      e("multi-select", {
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          "tag-placeholder":
                                                            t.formTranslation
                                                              .patient
                                                              .tag_select_clinic_plh,
                                                          id: "clinic_id",
                                                          placeholder:
                                                            t.formTranslation
                                                              .patient
                                                              .search_placeholder,
                                                          label: "label",
                                                          loading:
                                                            t.clinicMultiselectLoader,
                                                          "track-by": "id",
                                                          options: t.clinics,
                                                          multiple: !0,
                                                          taggable: !0,
                                                          disabled:
                                                            !t.kcCheckPermission(
                                                              "patient_clinic"
                                                            ),
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
                                                            t.patientData
                                                              .clinic_id,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.patientData,
                                                              "clinic_id",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "patientData.clinic_id",
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.patientData
                                                        .clinic_id.required
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
                                                                    .common
                                                                    .clinic_is_required
                                                                ) +
                                                                  "\n                      "
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
                                            e("div", { staticClass: "row" }, [
                                              t.hideFields.includes("dob")
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
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
                                                                for: "telephone_no",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                      " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .contact_no
                                                                  ) +
                                                                  ". "
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
                                                          e(
                                                            "VuePhoneNumberInput",
                                                            {
                                                              attrs: {
                                                                id: "telephone_no",
                                                                clearable: "",
                                                                "default-country-code":
                                                                  t.defaultCountryCode,
                                                                "no-example":
                                                                  "",
                                                              },
                                                              on: {
                                                                update:
                                                                  t.contactUpdateHandaler,
                                                              },
                                                              model: {
                                                                value:
                                                                  t.patientData
                                                                    .mobile_number,
                                                                callback:
                                                                  function (e) {
                                                                    t.$set(
                                                                      t.patientData,
                                                                      "mobile_number",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "patientData.mobile_number",
                                                              },
                                                            }
                                                          ),
                                                          t._v(" "),
                                                          t.submitted &&
                                                          !t.$v.patientData
                                                            .mobile_number
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
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .contact_num_required
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : !t.submitted ||
                                                              (t.$v.patientData
                                                                .mobile_number
                                                                .minLength &&
                                                                t.$v.patientData
                                                                  .mobile_number
                                                                  .maxLength)
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
                                                                      t
                                                                        .formTranslation
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
                                                    ]
                                                  ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
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
                                                          attrs: { for: "dob" },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.dob
                                                            ) +
                                                              ".\n                       "
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
                                                              t.patientData.dob,
                                                            expression:
                                                              "patientData.dob",
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
                                                          value:
                                                            t.patientData.dob,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.patientData,
                                                                "dob",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              t.hideFields.includes(
                                                "blood_group"
                                              )
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
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
                                                                for: "gender",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .gender
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
                                                          e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-8",
                                                            },
                                                            [
                                                              e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "custom-control custom-radio custom-control-inline",
                                                                },
                                                                [
                                                                  e("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .patientData
                                                                              .gender,
                                                                          expression:
                                                                            "patientData.gender",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "custom-control-input",
                                                                    attrs: {
                                                                      type: "radio",
                                                                      id: "male",
                                                                      name: "gender",
                                                                      value:
                                                                        "male",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        t._q(
                                                                          t
                                                                            .patientData
                                                                            .gender,
                                                                          "male"
                                                                        ),
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.$set(
                                                                            t.patientData,
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
                                                                      attrs: {
                                                                        for: "male",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .male
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .patientData
                                                                              .gender,
                                                                          expression:
                                                                            "patientData.gender",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "custom-control-input",
                                                                    attrs: {
                                                                      type: "radio",
                                                                      id: "female",
                                                                      name: "gender",
                                                                      value:
                                                                        "female",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        t._q(
                                                                          t
                                                                            .patientData
                                                                            .gender,
                                                                          "female"
                                                                        ),
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.$set(
                                                                            t.patientData,
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
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .female
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(" "),
                                                              "on" ===
                                                              t.defaultUserRegistrationFormSettingData
                                                                ? e(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "custom-control custom-radio custom-control-inline",
                                                                    },
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
                                                                                  t
                                                                                    .patientData
                                                                                    .gender,
                                                                                expression:
                                                                                  "patientData.gender",
                                                                              },
                                                                            ],
                                                                          staticClass:
                                                                            "custom-control-input",
                                                                          attrs:
                                                                            {
                                                                              type: "radio",
                                                                              id: "other",
                                                                              name: "gender",
                                                                              value:
                                                                                "other",
                                                                            },
                                                                          domProps:
                                                                            {
                                                                              checked:
                                                                                t._q(
                                                                                  t
                                                                                    .patientData
                                                                                    .gender,
                                                                                  "other"
                                                                                ),
                                                                            },
                                                                          on: {
                                                                            change:
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return t.$set(
                                                                                  t.patientData,
                                                                                  "gender",
                                                                                  "other"
                                                                                );
                                                                              },
                                                                          },
                                                                        }
                                                                      ),
                                                                      t._v(" "),
                                                                      e(
                                                                        "label",
                                                                        {
                                                                          staticClass:
                                                                            "custom-control-label",
                                                                          attrs:
                                                                            {
                                                                              for: "other",
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .other
                                                                            )
                                                                          ),
                                                                        ]
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
                                              t.hideFields.includes(
                                                "blood_group"
                                              )
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
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
                                                                for: "blood_group",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .clinic
                                                                    .blood_group
                                                                ) + " "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          e(
                                                            "b-select",
                                                            {
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                name: "blood_group",
                                                                id: "blood_group",
                                                              },
                                                              model: {
                                                                value:
                                                                  t.patientData
                                                                    .blood_group,
                                                                callback:
                                                                  function (e) {
                                                                    t.$set(
                                                                      t.patientData,
                                                                      "blood_group",
                                                                      e
                                                                    );
                                                                  },
                                                                expression:
                                                                  "patientData.blood_group",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "default",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .clinic
                                                                          .select_blood_group
                                                                      )
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(" "),
                                                              t._l(
                                                                t.bloodGroups,
                                                                function (
                                                                  n,
                                                                  i
                                                                ) {
                                                                  return e(
                                                                    "option",
                                                                    {
                                                                      key: i,
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            n,
                                                                        },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(n)
                                                                      ),
                                                                    ]
                                                                  );
                                                                }
                                                              ),
                                                            ],
                                                            2
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  ),
                                            ]),
                                          ]),
                                          t._v(" "),
                                          t.hideFields.includes("address") &&
                                          t.hideFields.includes("city") &&
                                          t.hideFields.includes("country") &&
                                          t.hideFields.includes("postal_code")
                                            ? t._e()
                                            : e("hr", { staticClass: "my-4" }),
                                          t._v(" "),
                                          t.hideFields.includes("address") &&
                                          t.hideFields.includes("city") &&
                                          t.hideFields.includes("country") &&
                                          t.hideFields.includes("postal_code")
                                            ? t._e()
                                            : e(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "heading-small text-muted mb-4",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .contact_info
                                                    )
                                                  ),
                                                ]
                                              ),
                                          t._v(" "),
                                          e("div", { staticClass: "pl-lg-4" }, [
                                            e("div", { staticClass: "row" }, [
                                              t.hideFields.includes("address")
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
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
                                                                for: "address",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .address
                                                                ) + " "
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
                                                                  t.patientData
                                                                    .address,
                                                                expression:
                                                                  "patientData.address",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              name: "address",
                                                              id: "address",
                                                              placeholder:
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .address_placeholder,
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.patientData
                                                                  .address,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.patientData,
                                                                    "address",
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
                                              t._v(" "),
                                              t.hideFields.includes("city")
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-6" },
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
                                                                for: "city",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .city
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.patientData
                                                                    .city,
                                                                expression:
                                                                  "patientData.city",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "city",
                                                              placeholder:
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .city_placeholder,
                                                              name: "city",
                                                              type: "text",
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.patientData
                                                                  .city,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.patientData,
                                                                    "city",
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
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              t.hideFields.includes("country")
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-4" },
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
                                                                for: "country",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .country
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.patientData
                                                                    .country,
                                                                expression:
                                                                  "patientData.country",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "country",
                                                              placeholder:
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .country_placeholder,
                                                              name: "country",
                                                              type: "text",
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.patientData
                                                                  .country,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.patientData,
                                                                    "country",
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
                                              t._v(" "),
                                              t.hideFields.includes(
                                                "postal_code"
                                              )
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    { staticClass: "col-md-4" },
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
                                                                for: "postal_code",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .postal_code
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.patientData
                                                                    .postal_code,
                                                                expression:
                                                                  "patientData.postal_code",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "postal_code",
                                                              placeholder:
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .pcode_placeholder,
                                                              name: "postal_code",
                                                              type: "text",
                                                            },
                                                            domProps: {
                                                              value:
                                                                t.patientData
                                                                  .postal_code,
                                                            },
                                                            on: {
                                                              input: function (
                                                                e
                                                              ) {
                                                                e.target
                                                                  .composing ||
                                                                  t.$set(
                                                                    t.patientData,
                                                                    "postal_code",
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
                                              t._v(" "),
                                              !1 !==
                                              t.$store.state.userDataModule.user
                                                .addOns.kiviPro
                                                ? e(
                                                    "div",
                                                    { staticClass: "col-md-4" },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                          attrs: {
                                                            for: "choose_language",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                    " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .choose_language
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e("multi-select", {
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          id: "choose_language",
                                                          placeholder:
                                                            t.formTranslation
                                                              .common
                                                              .choose_language,
                                                          label: "label",
                                                          "track-by": "lang",
                                                          options:
                                                            t.kc_available_translations,
                                                          multiple: !1,
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
                                                            t.patientData
                                                              .choose_language,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.patientData,
                                                              "choose_language",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "patientData.choose_language",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : t._e(),
                                            ]),
                                          ]),
                                          t._v(" "),
                                          t.showCustomField
                                            ? e(
                                                "div",
                                                [
                                                  e("hr", {
                                                    staticClass: "my-4",
                                                  }),
                                                  t._v(" "),
                                                  e(
                                                    "h6",
                                                    {
                                                      staticClass:
                                                        "heading-small text-muted mb-4",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.extra_detail
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e("edit-custom-fields", {
                                                    attrs: {
                                                      module_type: "",
                                                      module_id: String(
                                                        t.patientData.ID
                                                      ),
                                                      fieldsValue:
                                                        void 0 !==
                                                        t.custom_fields
                                                          ? t.custom_fields
                                                          : [],
                                                      customFieldsObj:
                                                        void 0 !==
                                                        t.custom_fields
                                                          ? t.custom_fields
                                                          : [],
                                                    },
                                                    on: {
                                                      bindCustomField:
                                                        t.getCustomFieldsValues,
                                                      requiredCustomField:
                                                        t.getRequireFields,
                                                      fieldObject:
                                                        t.handleCustomField,
                                                    },
                                                  }),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("div", { staticClass: "card-footer" }, [
                                        e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "float-right" },
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
                                                              )
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
                                                          on: {
                                                            click:
                                                              t.handleSubmit,
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
                                                              )
                                                          ),
                                                        ]
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
                              t._l(t.patientData.custom_forms, function (n, i) {
                                return t.patientData.custom_forms &&
                                  t.patientData.custom_forms.length
                                  ? e(
                                      "div",
                                      { key: i, staticClass: "card-body pt-0" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "pl-lg-4" },
                                          [
                                            t.viewMode === "custom_form_" + n.id
                                              ? e("CustomForm", {
                                                  attrs: {
                                                    data: t.customFormDataUpdate(
                                                      n,
                                                      t.patientData.ID
                                                    ),
                                                    viewMode: !1,
                                                    customFormModal:
                                                      t.viewMode ===
                                                      "custom_form_" + n.id,
                                                    useModal: !1,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ]
                                    )
                                  : t._e();
                              }),
                            ],
                            2
                          ),
                        ]),
                        t._v(" "),
                        e("b-col", { staticClass: "col-xl-3 order-xl-2" }, [
                          e("div", { staticClass: "card card-profile" }, [
                            e(
                              "div",
                              {
                                staticClass: "row justify-content-center mt-4",
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "kivicare-avatar-upload" },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "kivicare-avatar-edit" },
                                      [
                                        e("input", {
                                          staticClass: "p-2",
                                          staticStyle: { color: "transparent" },
                                          attrs: { id: "file", type: "button" },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.uploadProfile()
                                              );
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
                                        staticClass: "kivicare-avatar-preview",
                                      },
                                      [
                                        e("div", {
                                          style:
                                            "background-image: url(" +
                                            (t.patientData.user_profile
                                              ? t.patientData.user_profile
                                              : t.profileImage) +
                                            ");",
                                          attrs: { id: "imagePreview" },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("div", { staticClass: "card-body pt-0 mt-2" }, [
                              e("div", { staticClass: "text-center" }, [
                                e("h5", { staticClass: "h3" }, [
                                  t._v(
                                    "\n              " +
                                      t._s(t.patientData.display_name) +
                                      "\n            "
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "h5 font-weight-300" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.patientData.user_email) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "h5 mt-4" }),
                              ]),
                            ]),
                          ]),
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
          null,
          null
        ).exports),
      Ot = n(360).a,
      wt = Object(h.a)(
        Ot,
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
                      e("div", { staticClass: "card p-0 shadow" }, [
                        e(
                          "div",
                          { staticClass: "card-header" },
                          [
                            e(
                              "div",
                              { staticClass: "row" },
                              [
                                e("div", { staticClass: "col-md-6" }, [
                                  e("h3", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.patient.medical_report
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("b-col", { attrs: { md: "6" } }, [
                                  e("div", { staticClass: "float-right" }, [
                                    t.medicalReportList.length > 0
                                      ? e(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: { id: "sendReport" },
                                            on: {
                                              click: t.handlePrescriptionMail,
                                            },
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-paper-plane",
                                            }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  "patient" ===
                                                    t.getUserRole() &&
                                                    void 0 !==
                                                      t.$route.params.patient_id
                                                    ? t.formTranslation.doctor
                                                        .dt_lbl_email
                                                    : t.formTranslation.clinic
                                                        .dt_lbl_email
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.kcCheckPermission("patient_report_add") &&
                                    (0 != t.encounterData.status ||
                                      (0 == t.encounterData.status &&
                                        1 ==
                                          t.encounterData
                                            .encounter_edit_after_close_status))
                                      ? e(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            on: {
                                              click: t.handlePrescriptionAdd,
                                            },
                                          },
                                          [
                                            t.visible || t.isEditForm
                                              ? e("i", {
                                                  staticClass: "fas fa-times",
                                                })
                                              : e("i", {
                                                  staticClass: "fa fa-plus",
                                                }),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.visible || t.isEditForm
                                                    ? t.formTranslation.common
                                                        .close_form_btn
                                                    : t.formTranslation.patient
                                                        .add_medical_report
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.showBackButton
                                      ? e(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (e) {
                                                return t.$router.go(-1);
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
                                                  t.formTranslation.common.back
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "b-collapse",
                              {
                                staticClass: "mt-2 position-relative",
                                attrs: { visible: t.showAddForm },
                              },
                              [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("hr", { staticClass: "my-4" }),
                                    t._v(" "),
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e("h4", {}, [
                                          t._v(
                                            t._s(
                                              t.mutation_medical_report_label
                                            )
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "form",
                                      {
                                        attrs: {
                                          id: "medicalReportDataForm",
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
                                        e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            {
                                              class:
                                                "patient-profile-view" ===
                                                this.$route.name
                                                  ? "col-md-3"
                                                  : "col-md-4",
                                            },
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
                                                      attrs: { for: "name" },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.name
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
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.medicalReportData
                                                            .name,
                                                        expression:
                                                          "medicalReportData.name",
                                                      },
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      id: "name",
                                                      placeholder:
                                                        t.formTranslation
                                                          .patient
                                                          .plh_enter_report,
                                                      name: "name",
                                                      type: "text",
                                                    },
                                                    domProps: {
                                                      value:
                                                        t.medicalReportData
                                                          .name,
                                                    },
                                                    on: {
                                                      input: function (e) {
                                                        e.target.composing ||
                                                          t.$set(
                                                            t.medicalReportData,
                                                            "name",
                                                            e.target.value
                                                          );
                                                      },
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.submitted &&
                                                  !t.$v.medicalReportData.name
                                                    .required
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "invalid-feedback",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .name_required
                                                              ) +
                                                              "\n                        "
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
                                            {
                                              class:
                                                "patient-profile-view" ===
                                                this.$route.name
                                                  ? "col-md-3"
                                                  : "col-md-4",
                                            },
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
                                                      attrs: { for: "date" },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                          " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common.date
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
                                                  e("vc-date-picker", {
                                                    attrs: {
                                                      mode: "date",
                                                      "title-position": "left",
                                                      "max-date": new Date(),
                                                      placeholder:
                                                        t.formTranslation
                                                          .patient
                                                          .welcome_date_plh,
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
                                                                  t
                                                                    .formTranslation
                                                                    .patient
                                                                    .welcome_date_plh,
                                                              },
                                                              domProps: {
                                                                value: i,
                                                              },
                                                            }),
                                                          ];
                                                        },
                                                      },
                                                    ]),
                                                    model: {
                                                      value:
                                                        t.medicalReportData
                                                          .date,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.medicalReportData,
                                                          "date",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "medicalReportData.date",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  t.submitted &&
                                                  !t.$v.medicalReportData.date
                                                    .required
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "invalid-feedback",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widgets
                                                                  .date_required
                                                              ) +
                                                              "\n                        "
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
                                            {
                                              class:
                                                "patient-profile-view" ===
                                                this.$route.name
                                                  ? "col-md-6"
                                                  : "col-md-4",
                                            },
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
                                                      attrs: { for: "report" },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                          " +
                                                          t._s(
                                                            t.formTranslation
                                                              .patient
                                                              .upload_report
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
                                                              attrs: {
                                                                type: "button",
                                                                id: "siteLogo",
                                                                disabled:
                                                                  t.isEditForm,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return (
                                                                      e.preventDefault(),
                                                                      t.uploadProfile()
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
                                                          attrs: {
                                                            for: "siteLogo",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(t.new_report)
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t.upload_report_required
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
                                                                .widgets
                                                                .file_required
                                                            ) +
                                                              "\n                        "
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
                                        e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "float-right" },
                                                [
                                                  t.loading
                                                    ? e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
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
                                                            "  " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .loading
                                                              ) +
                                                              "\n                        "
                                                          ),
                                                        ]
                                                      )
                                                    : e("button", {
                                                        staticClass:
                                                          "btn btn-primary",
                                                        attrs: {
                                                          type: "submit",
                                                        },
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            t.buttonText
                                                          ),
                                                        },
                                                      }),
                                                  t._v(" "),
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-primary",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function (e) {
                                                          return t.close();
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                          " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common.cancel
                                                          )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            t.medicalReportList.length > 0
                              ? e(
                                  "b-collapse",
                                  {
                                    staticClass: "mt-2",
                                    attrs: { visible: t.showEmailAddForm },
                                  },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e("hr", { staticClass: "my-4" }),
                                        t._v(" "),
                                        e(
                                          "form",
                                          {
                                            attrs: {
                                              id: "sendMedicalReportDataForm",
                                              novalidate: !0,
                                            },
                                            on: {
                                              submit: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.handleEmailSubmit.apply(
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
                                                { staticClass: "col-md-4" },
                                                [
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
                                                          attrs: {
                                                            for: "name",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .reports
                                                                .plh_select
                                                            ) +
                                                              " " +
                                                              t._s("") +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .reports
                                                                  .reports
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
                                                      e("multi-select", {
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          "tag-placeholder":
                                                            t.formTranslation
                                                              .patient
                                                              .tag_select_clinic_plh,
                                                          id: "emailreport",
                                                          placeholder:
                                                            t.formTranslation
                                                              .patient
                                                              .search_placeholder,
                                                          label: "name",
                                                          "track-by": "id",
                                                          options:
                                                            t.medicalReportList,
                                                          multiple: !0,
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
                                                            t.emailReportSelect,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.emailReportSelect =
                                                              e;
                                                          },
                                                          expression:
                                                            "emailReportSelect",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "float-right",
                                                    },
                                                    [
                                                      e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary email-send-button",
                                                          attrs: {
                                                            type: "submit",
                                                          },
                                                        },
                                                        [
                                                          e("i", {
                                                            staticClass:
                                                              "fas fa-paper-plane",
                                                          }),
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .clinic
                                                                  .dt_lbl_email
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
                                                            "btn btn-outline-primary",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return t.closeEmail();
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.cancel
                                                              )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
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
                        ),
                        t._v(" "),
                        t.kcCheckPermission("patient_report")
                          ? e("div", { staticClass: "card-body" }, [
                              e("div", { staticClass: "row text-uppercase" }, [
                                e(
                                  "div",
                                  { staticClass: "col-md-6 col-6 text-left" },
                                  [
                                    e("h5", { staticClass: "mb-0" }, [
                                      t._v(t._s(t.formTranslation.common.name)),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4 col-4" }, [
                                  e("h5", { staticClass: "mb-0" }, [
                                    t._v(t._s(t.formTranslation.common.date)),
                                  ]),
                                ]),
                                t._v(" "),
                                "patient" !== t.getUserRole()
                                  ? e(
                                      "div",
                                      { staticClass: "col-md-2 col-2" },
                                      [
                                        e("h5", { staticClass: "mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common.action
                                            )
                                          ),
                                        ]),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e("div", { staticClass: "col-md-12" }, [
                                  e("hr", { staticClass: "my-3" }),
                                ]),
                              ]),
                              t._v(" "),
                              t.isLoading
                                ? e(
                                    "div",
                                    { staticClass: "page-loader-section" },
                                    [e("loader-component-2")],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.medicalReportList.length > 0 && !t.isLoading
                                ? e(
                                    "div",
                                    t._l(t.medicalReportList, function (n, i) {
                                      return e(
                                        "div",
                                        {
                                          key: i,
                                          staticClass:
                                            "row animated fadeInUp mb-3",
                                        },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "col-md-6 col-6" },
                                            [
                                              e(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "text-primary mb-0",
                                                },
                                                [t._v(t._s(n.name))]
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-4 col-4 d-flex align-items-center",
                                            },
                                            [
                                              e("h5", { staticClass: "mb-0" }, [
                                                t._v(t._s(n.medical_date)),
                                              ]),
                                            ]
                                          ),
                                          t._v(" "),
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-2 col-2 d-flex align-items-center",
                                            },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "float-right" },
                                                [
                                                  e(
                                                    "b-button-group",
                                                    { attrs: { size: "sm" } },
                                                    [
                                                      t.kcCheckPermission(
                                                        "patient_report_edit"
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
                                                                  "outline-primary",
                                                                title:
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .edit,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.editReportData(
                                                                      n
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
                                                        "patient_report_view"
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
                                                                  "outline-primary",
                                                                title:
                                                                  t
                                                                    .formTranslation
                                                                    .appointments
                                                                    .view_report,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.viewReportData(
                                                                      n.patient_id,
                                                                      n.id
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                staticClass:
                                                                  "fa fa-eye",
                                                              }),
                                                            ]
                                                          )
                                                        : t._e(),
                                                      t._v(" "),
                                                      t.kcCheckPermission(
                                                        "patient_report_delete"
                                                      ) &&
                                                      (void 0 ===
                                                        t.$route.params
                                                          .encounter_id ||
                                                        (void 0 !==
                                                          t.$route.params
                                                            .encounter_id &&
                                                          "1" ===
                                                            t.encounterData
                                                              .status))
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
                                                                title:
                                                                  t
                                                                    .formTranslation
                                                                    .clinic_schedule
                                                                    .dt_lbl_dlt,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.deletemedicalReportData(
                                                                      i
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
                                        ]
                                      );
                                    }),
                                    0
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
                                                  .no_patient_report_found
                                              )
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                            ])
                          : t._e(),
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
        null,
        null
      ).exports,
      At = n(361).a,
      xt =
        (n(667),
        Object(h.a)(
          At,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                "administrator" == t.getUserRole() &&
                t.clinicSessionNotice.status
                  ? e("div", { staticClass: "row" }, [
                      e(
                        "div",
                        { staticClass: "col-md-12" },
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
                                  t._v(" " + t._s(t.clinicSessionNotice.msg)),
                                ]),
                              ]),
                              t._v(" "),
                              t.kcCheckPermission("doctor_session_list")
                                ? e(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-primary float-right text-white",
                                      attrs: {
                                        to: { name: "doctor-session.create" },
                                      },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-plus" }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common.add_session
                                          )
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
                    ])
                  : t._e(),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "row", attrs: { id: "appointment-module" } },
                  [
                    void 0 !== t.formTranslation.appointments &&
                    void 0 !==
                      t.formTranslation.appointments.add_appointment_btn
                      ? e(
                          "div",
                          { staticClass: "col-md-12 col-lg-12 col-xl-12" },
                          [
                            e(
                              "div",
                              { staticClass: "card" },
                              [
                                e("div", { staticClass: "row mt-2" }, [
                                  e(
                                    "div",
                                    { staticClass: "col-6 p-2 pl-4 rtl-pr-4" },
                                    [
                                      e("h3", { staticClass: "text-primary" }, [
                                        t._v(
                                          t._s(t.formTranslation.common.filters)
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "col-6 p-2 pl-4 rtl-pr-4" },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-end mr-3",
                                        },
                                        [
                                          e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-primary",
                                              attrs: { type: "button" },
                                              on: { click: t.filterOpenClose },
                                            },
                                            [
                                              t.filterOpen
                                                ? e("span", [
                                                    e("i", {
                                                      staticClass:
                                                        "fas fa-times",
                                                    }),
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .close_filter
                                                      ) + "\n                  "
                                                    ),
                                                  ])
                                                : e("span", [
                                                    e("i", {
                                                      staticClass: "fa fa-plus",
                                                    }),
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .add_filter
                                                      ) + "\n                  "
                                                    ),
                                                  ]),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "b-collapse",
                                  {
                                    model: {
                                      value: t.filterOpen,
                                      callback: function (e) {
                                        t.filterOpen = e;
                                      },
                                      expression: "filterOpen",
                                    },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "row ml-3 mr-3 mb-3 g-2 kc-row-gap",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-12 col-md-6 col-lg-4",
                                          },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: {
                                                  for: "appointmentDate",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments
                                                        .select_date
                                                    ) +
                                                    " "
                                                ),
                                                e("span", {
                                                  staticClass: "text-danger",
                                                }),
                                              ]
                                            ),
                                            t._v(" "),
                                            e("vc-date-picker", {
                                              attrs: {
                                                id: "appointmentDate",
                                                "title-position": "left",
                                                popover: {
                                                  visibility: "click",
                                                },
                                                "model-config": t.modelConfig,
                                                "is-expanded": "",
                                                mode: "range",
                                              },
                                              on: {
                                                input: function (e) {
                                                  return t.handleDateChange(e);
                                                },
                                                "popover-did-disappear":
                                                  function (e) {
                                                    return t.disapperaed(
                                                      t.filterData.date
                                                    );
                                                  },
                                              },
                                              scopedSlots: t._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (n) {
                                                      var i = n.inputValue;
                                                      return [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "flex flex-col sm:flex-row justify-start items-center",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "position-relative flex-grow",
                                                              },
                                                              [
                                                                e("input", {
                                                                  staticClass:
                                                                    "form-control",
                                                                  attrs: {
                                                                    "available-dates":
                                                                      t
                                                                        .filterData
                                                                        .date,
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .appointments
                                                                        .plh_date,
                                                                  },
                                                                  domProps: {
                                                                    value: i,
                                                                  },
                                                                }),
                                                                t._v(" "),
                                                                e(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "datepicker_clear_btn",
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.handleResetFilter(
                                                                            "date",
                                                                            t
                                                                              .filterData
                                                                              .date
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [t._v("×")]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ];
                                                    },
                                                  },
                                                ],
                                                null,
                                                !1,
                                                4274139694
                                              ),
                                              model: {
                                                value: t.filterData.date,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.filterData,
                                                    "date",
                                                    e
                                                  );
                                                },
                                                expression: "filterData.date",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        1 != t.userData.addOns.kiviPro ||
                                        ("administrator" != t.getUserRole() &&
                                          "doctor" != t.getUserRole())
                                          ? t._e()
                                          : e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-12 col-md-6 col-lg-4 kivi-pr",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "kivi-pr" },
                                                  [
                                                    e(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "form-control-label",
                                                        attrs: {
                                                          for: "clinic_id",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                " +
                                                            t._s(
                                                              t.formTranslation
                                                                .appointments
                                                                .select_clinic
                                                            ) +
                                                            " "
                                                        ),
                                                        e("span", {
                                                          staticClass:
                                                            "text-danger",
                                                        }),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e("multi-select", {
                                                      attrs: {
                                                        "deselect-label": "",
                                                        "select-label": "",
                                                        "tag-placeholder":
                                                          t.formTranslation
                                                            .appointments
                                                            .select_clinic,
                                                        id: "clinic_id",
                                                        placeholder:
                                                          t.formTranslation
                                                            .appointments
                                                            .select_clinic,
                                                        label: "label",
                                                        loading:
                                                          t.clinicMultiselectLoader,
                                                        disabled:
                                                          t.clinicMultiselectLoader,
                                                        "track-by": "id",
                                                        options: t.clinics,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          return t.handleFilterChange(
                                                            "clinic"
                                                          );
                                                        },
                                                        remove: function (e) {
                                                          return t.handleFilterChange(
                                                            "clinic"
                                                          );
                                                        },
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
                                                          t.filterData
                                                            .clinic_id,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.filterData,
                                                            "clinic_id",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "filterData.clinic_id",
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "appointment_select_clear_btn",
                                                        on: {
                                                          click: function (e) {
                                                            return t.handleResetFilter(
                                                              "clinic",
                                                              t.filterData
                                                                .clinic_id
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [t._v("×")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                        t._v(" "),
                                        "patient" != t.getUserRole()
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-12 col-md-6 col-lg-4 kivi-pr",
                                              },
                                              [
                                                void 0 !==
                                                  t.$route.params.patient_id ||
                                                t.patient_profile_id
                                                  ? t._e()
                                                  : e(
                                                      "div",
                                                      {
                                                        staticClass: "kivi-pr",
                                                      },
                                                      [
                                                        e(
                                                          "label",
                                                          {
                                                            staticClass:
                                                              "form-control-label",
                                                            attrs: {
                                                              for: "patient_id",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .appointments
                                                                    .select_patient
                                                                ) +
                                                                " "
                                                            ),
                                                            e("span", {
                                                              staticClass:
                                                                "text-danger",
                                                            }),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e("multi-select", {
                                                          attrs: {
                                                            "deselect-label":
                                                              "",
                                                            "select-label": "",
                                                            id: "patient_id",
                                                            placeholder:
                                                              t.formTranslation
                                                                .appointments
                                                                .tag_patient_plh,
                                                            loading:
                                                              t.patientMultiselectLoader,
                                                            disabled:
                                                              t.patientMultiselectLoader,
                                                            label: "label",
                                                            "track-by": "id",
                                                            options: t.patients,
                                                          },
                                                          on: {
                                                            input:
                                                              t.handleFilterChange,
                                                            remove:
                                                              t.handleFilterChange,
                                                          },
                                                          scopedSlots: t._u(
                                                            [
                                                              {
                                                                key: "noResult",
                                                                fn: function () {
                                                                  return [
                                                                    t._v(
                                                                      "\n                      " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .no_result_found
                                                                        ) +
                                                                        "\n                  "
                                                                    ),
                                                                  ];
                                                                },
                                                                proxy: !0,
                                                              },
                                                            ],
                                                            null,
                                                            !1,
                                                            1967321686
                                                          ),
                                                          model: {
                                                            value:
                                                              t.filterData
                                                                .patient_id,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.filterData,
                                                                "patient_id",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "filterData.patient_id",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "appointment_select_clear_btn",
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.handleResetFilter(
                                                                  "patient_id",
                                                                  t.filterData
                                                                    .patient_id
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("×")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-12 col-md-6 col-lg-4",
                                          },
                                          [
                                            e(
                                              "div",
                                              { staticClass: "kivi-pr" },
                                              [
                                                e(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label",
                                                    attrs: { for: "status" },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.formTranslation
                                                            .appointments
                                                            .select_status
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e("multi-select", {
                                                  attrs: {
                                                    "deselect-label": "",
                                                    "select-label": "",
                                                    placeholder:
                                                      t.formTranslation
                                                        .appointments
                                                        .select_status,
                                                    "tag-placeholder":
                                                      t.formTranslation
                                                        .appointments
                                                        .select_status,
                                                    id: "status",
                                                    label: "label",
                                                    "track-by": "value",
                                                    options: t.allStatus,
                                                  },
                                                  on: {
                                                    input: t.handleFilterChange,
                                                    remove:
                                                      t.handleFilterChange,
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
                                                    value: t.filterData.status,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.filterData,
                                                        "status",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "filterData.status",
                                                  },
                                                }),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "appointment_select_clear_btn",
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleResetFilter(
                                                          "status",
                                                          t.filterData.status
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t._v("×")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "doctor" !== t.getUserRole()
                                          ? e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-12 col-md-6 col-lg-4",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "kivi-pr" },
                                                  [
                                                    e(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "form-control-label",
                                                        attrs: {
                                                          for: "doctors",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                " +
                                                            t._s(
                                                              t.formTranslation
                                                                .patient_encounter
                                                                .tag_select_doctor
                                                            ) +
                                                            "\n              "
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e("multi-select", {
                                                      attrs: {
                                                        "deselect-label": "",
                                                        "select-label": "",
                                                        placeholder:
                                                          t.formTranslation
                                                            .patient_encounter
                                                            .tag_select_doctor,
                                                        "tag-placeholder":
                                                          t.formTranslation
                                                            .patient_encounter
                                                            .tag_select_doctor,
                                                        id: "doctors",
                                                        label: "label",
                                                        "track-by": "id",
                                                        loading:
                                                          t.doctorMultiselectLoader,
                                                        disabled:
                                                          t.doctorMultiselectLoader,
                                                        options: t.doctors,
                                                      },
                                                      on: {
                                                        input:
                                                          t.handleFilterChange,
                                                        remove:
                                                          t.handleFilterChange,
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
                                                          t.filterData
                                                            .doctor_id,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.filterData,
                                                            "doctor_id",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "filterData.doctor_id",
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "appointment_select_clear_btn",
                                                        on: {
                                                          click: function (e) {
                                                            return t.handleResetFilter(
                                                              "doctor",
                                                              t.filterData
                                                                .doctor_id
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [t._v("×")]
                                                    ),
                                                  ],
                                                  1
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
                            t._v(" "),
                            t.userData.addOns.kiviPro &&
                            t.kcCheckPermission("appointment_add") &&
                            t.kivicareCompareVersion(
                              t.requireProVersion,
                              t.userData.pro_version
                            )
                              ? e("module-data-import", {
                                  ref: "module_data_import",
                                  attrs: {
                                    required_data: [
                                      {
                                        label:
                                          t.formTranslation.common
                                            .lbl_date_validation,
                                        value: "date",
                                      },
                                      {
                                        label:
                                          t.formTranslation.doctor_session
                                            .plh_start_time,
                                        value: "start_time",
                                      },
                                      {
                                        label:
                                          t.formTranslation.doctor_session
                                            .plh_end_time,
                                        value: "end_time",
                                      },
                                      {
                                        label: t.formTranslation.common.service,
                                        value: "service",
                                      },
                                      {
                                        label:
                                          t.formTranslation.clinic.clinic_name,
                                        value: "clinic_name",
                                      },
                                      {
                                        label:
                                          t.formTranslation.doctor.doctor_name,
                                        value: "doctor_name",
                                      },
                                      {
                                        label:
                                          t.formTranslation.patient
                                            .patient_name,
                                        value: "patient_name",
                                      },
                                      {
                                        label: t.formTranslation.common.status,
                                        value: "status",
                                      },
                                    ],
                                    module_name:
                                      t.formTranslation.appointments
                                        .appointments,
                                    module_type: "appointment",
                                  },
                                })
                              : t._e(),
                            t._v(" "),
                            e("div", { staticClass: "card shadow" }, [
                              e("div", { staticClass: "card-header" }, [
                                e("div", { staticClass: "row" }, [
                                  e(
                                    "div",
                                    { staticClass: "col-md-4 rmb-15" },
                                    [
                                      e("h3", { staticClass: "text-primary" }, [
                                        t._v(
                                          t._s(
                                            t.formTranslation.appointments
                                              .appointment
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      t._l(t.status, function (n, i) {
                                        return e(
                                          "span",
                                          {
                                            key: i,
                                            staticClass:
                                              "badge mr-2 cursor-pointer",
                                            class:
                                              void 0 !== t.filterData.status &&
                                              t.filterData.status === n.value
                                                ? "badge-primary p-2 "
                                                : "badge-outline-primary",
                                            style:
                                              void 0 !== t.filterData.status &&
                                              t.filterData.status === n.value
                                                ? "font-size: 0.8rem;"
                                                : "",
                                            on: {
                                              click: function (e) {
                                                return t.handleStatusChange(
                                                  n.value
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(n.label) +
                                                "\n                "
                                            ),
                                          ]
                                        );
                                      }),
                                    ],
                                    2
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-8" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-end align-items-center",
                                      },
                                      [
                                        ("past" != t.filterData.status &&
                                          "all" != t.filterData.status) ||
                                        1 != t.enableMultiBtnDelete ||
                                        "" == t.appointmentList
                                          ? t._e()
                                          : e("button", {
                                              staticClass:
                                                "btn btn-sm btn-danger",
                                              attrs: { type: "button" },
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.deleteSelectedBtnText
                                                ),
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.deleteSelected();
                                                },
                                              },
                                            }),
                                        t._v(" "),
                                        ("past" != t.filterData.status &&
                                          "all" != t.filterData.status) ||
                                        "" == t.appointmentList ||
                                        !t.kcCheckPermission(
                                          "appointment_delete"
                                        )
                                          ? t._e()
                                          : e("button", {
                                              staticClass:
                                                "btn btn-sm btn-danger",
                                              attrs: { type: "button" },
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.deleteBtnEnableText
                                                ),
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.deleteMultiple();
                                                },
                                              },
                                            }),
                                        t._v(" "),
                                        t.addAppointmentButton &&
                                        t.kcCheckPermission("appointment_add")
                                          ? e("button", {
                                              staticClass:
                                                "btn btn-sm btn-primary",
                                              attrs: { type: "button" },
                                              domProps: {
                                                innerHTML: t._s(t.appBtnText),
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.handleAppointmentForm(
                                                    {}
                                                  );
                                                },
                                              },
                                            })
                                          : t._e(),
                                        t._v(" "),
                                        t.userData.addOns.kiviPro &&
                                        t.kivicareCompareVersion(
                                          t.requireProVersion,
                                          t.userData.pro_version
                                        ) &&
                                        "patient" !== t.getUserRole()
                                          ? e(
                                              "button",
                                              {
                                                staticClass:
                                                  "float-right btn btn-sm btn-primary rtl-left",
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
                                                  ) + "\n                "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.kcCheckPermission(
                                          "appointment_export"
                                        )
                                          ? e("module-data-export", {
                                              attrs: {
                                                module_data:
                                                  t.csvAppointmentData,
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
                                                void 0 ===
                                                  t.appointmentFormObj.id,
                                            },
                                          },
                                          [
                                            void 0 === t.appointmentFormObj.id
                                              ? e("AppointmentForm", {
                                                  attrs: {
                                                    patient_profile_id:
                                                      t.patient_profile_id,
                                                    appointmentData:
                                                      t.appointmentFormObj,
                                                  },
                                                  on: {
                                                    appointmentSaved:
                                                      t.handleAppointmentSave,
                                                    closeAppointmentForm:
                                                      t.closeAppointmentForm,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("AppointmentCard", {
                                    ref: "appointmentCardRef",
                                    attrs: {
                                      "appointment-data": t.appointmentList,
                                      appointmentDate: t.filterData.date,
                                      filter_status: t.filterData.status,
                                      enable_delete_multiple:
                                        t.enableMultiDelete,
                                      delete_multiple_appointment:
                                        t.deleteMultipleAppointment,
                                      isLoading: t.isLoading,
                                      patient_profile_id: t.patient_profile_id,
                                    },
                                    on: {
                                      enabledDeleteBtn: t.deleteBtnEnabled,
                                      reloadAppointment: t.handleFilterChange,
                                      reloadMultipleDeleteAppointment:
                                        t.handleMultipleAppointmentChange,
                                      closeFilterForm: t.closeFilterForm,
                                      updateAppointmentList:
                                        t.updateAppointmentList,
                                      disableMultiDeleteButton: function (e) {
                                        t.deleteMultipleAppointment = !1;
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                ),
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
                          staticClass:
                            "my-0 justify-content-end flex-wrap kivicare-pagination",
                          attrs: {
                            "total-rows": t.appointmentTotalRows,
                            "per-page": t.perPage,
                            size: "lg",
                            "first-number": "",
                            "last-number": "",
                            "next-text": t.formTranslation.datatable.next_text,
                            "prev-text": t.formTranslation.datatable.prev_text,
                          },
                          model: {
                            value: t.currentPage,
                            callback: function (e) {
                              t.currentPage = e;
                            },
                            expression: "currentPage",
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
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      zt = {
        name: "ProfileView",
        components: {
          patientReport: wt,
          Appointment: xt,
          VuePhoneNumberInput: bt.a,
          CustomForm: vt.a,
        },
        data: function () {
          return {
            currentRouteModule: "profile",
            pageLoader: !1,
            loading: !1,
            profileImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png",
            patientData: {},
            submitted: !1,
            cardTitle: "Edit Profile",
            qualification: {},
            bloodGroups: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
            file: "",
            hideFields: [],
            formLoader: !0,
            showCustomField: !1,
            custom_fields: [],
            defaultCountryCode: null,
            requiredFields: [],
            clinicMultiselectLoader: !0,
            clinics: [],
            defaultUserRegistrationFormSettingData: "on",
            customFields: {},
          };
        },
        validations: {
          patientData: {
            first_name: { required: l.required },
            last_name: { required: l.required },
            user_email: { required: l.required, emailValidate: I.c },
            mobile_number: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            clinic_id: { required: l.required },
          },
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            this.init(),
            this.getClinics(),
            (this.patientData = this.defaultData()),
            void 0 !== this.$route.params.id &&
              (this.patientDetails(this.$route.params.id),
              this.$store.dispatch(
                "appointmentModule/fetchAppointmentEncounterCount",
                { id: this.$route.params.id }
              )),
            this.getHideFieldsArrayFromFilter();
        },
        methods: {
          handleCustomField: function (t) {
            this.customFields = t;
          },
          contactUpdateHandaler: function (t) {
            (this.patientData.country_code = t.countryCode),
              (this.patientData.country_calling_code = t.countryCallingCode);
          },
          init: function () {},
          defaultData: function () {
            return {
              first_name: "",
              last_name: "",
              username: "",
              user_email: "",
              user_pass: "",
              country_calling_code: "",
              country_code: "",
              mobile_number: "",
              gender: "",
              dob: "",
              about_me: "",
              address: "",
              city: "",
              state: "",
              country: "",
              postal_code: "",
              blood_group: "default",
              profile_image: "",
            };
          },
          patientDetails: function (t) {
            var e = this;
            (this.pageLoader = !0),
              Object(s.a)("patient_edit", {
                id: t,
                request_type: "patient_profile",
              })
                .then(function (t) {
                  (e.pageLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      ((e.patientData = t.data.data),
                      "" !== t.data.data.country_calling_code &&
                        void 0 !== t.data.data.country_calling_code &&
                        (e.defaultCountryCode = t.data.data.country_code),
                      (e.showCustomField = !0),
                      (e.custom_fields = t.data.custom_filed),
                      (e.patientData.choose_language =
                        e.kc_available_translations.find(function (e) {
                          return e.lang === t.data.data.choose_language;
                        })));
                })
                .catch(function (t) {
                  (e.pageLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.widgets.record_not_found
                    );
                });
          },
          getCustomFieldsValues: function (t) {
            if (!t || void 0 === t) return !1;
            this.patientData.custom_fields = t;
          },
          getHideFieldsArrayFromFilter: function () {
            var t = this;
            Object(s.a)("get_hide_fields_array_from_filter", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.hideFields = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.patientData.user_profile = n.url),
                (t.patientData.profile_image = n.id);
            }),
              e.open();
          },
          handleSubmit: function () {
            var t = this;
            if (
              ((this.loading = !0),
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
              this.$v.patientData.$invalid)
            )
              this.loading = !1;
            else {
              if (this.requiredFields.length > 0)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    this.formTranslation.common.all_required_field_validation
                  )
                );
              var e = Object(I.m)(
                this.customFields,
                this.patientData.custom_fields
              );
              if (!0 !== e)
                return (
                  (this.loading = !1),
                  void displayErrorMessage(
                    e + " " + this.formTranslation.patient_encounter.is_required
                  )
                );
              Object(I.n)("patientDataForm") &&
                Object(s.b)("patient_save", this.patientData)
                  .then(function (e) {
                    (t.loading = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (e.data.choose_language_updated &&
                            t.$store.dispatch(
                              "staticDataModule/refreshDashboardLocale",
                              { self: t }
                            ),
                          displayMessage(e.data.message),
                          (t.isEditProfile = !1))
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.loading = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            }
          },
          getCountryCodeData: function () {
            var t = this;
            Object(s.a)("get_country_code_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.defaultCountryCode = e.data.data.country_code);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getRequireFields: function (t) {
            this.requiredFields = t;
          },
          getClinics: function () {
            var t = this;
            (this.clinicMultiselectLoader = !0),
              Object(s.a)("get_static_data", { data_type: "clinic_list" })
                .then(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.clinics = e.data.data);
                })
                .catch(function (e) {
                  (t.clinicMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getUserRegistrationFormData: function () {
            var t = this;
            Object(s.a)("get_user_registration_form_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.defaultUserRegistrationFormSettingData =
                    e.data.data.userRegistrationFormSettingData);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          customFormDataUpdate: function (t, e) {
            return (t.module_id = e), t;
          },
          customFormCondition: function (t, e) {
            var n = (
              Array.isArray(
                this.$store.state.userDataModule.user.user_clinic_id
              )
                ? this.$store.state.userDataModule.user.user_clinic_id
                : [this.$store.state.userDataModule.user.user_clinic_id]
            )
              .filter(function (t) {
                return t;
              })
              .map(function (t) {
                return String(t);
              });
            return (
              t.custom_forms &&
              t.custom_forms.length &&
              (0 === e.clinic_ids.length ||
                e.clinic_ids.some(function (e) {
                  return t.clinic_ids.includes(e);
                })) &&
              (0 === e.clinic_ids.length ||
                0 === n.length ||
                e.clinic_ids.some(function (t) {
                  return n.includes(t);
                }))
            );
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          appointment_encounter_data: function () {
            return this.$store.state.appointmentModule
              .appointment_encounter_data;
          },
          kc_available_translations: function () {
            return this.$store.state.userDataModule.user
              .kc_available_translations;
          },
        },
      },
      Ct =
        (n(669),
        Object(h.a)(
          zt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "row" },
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
                                  { staticClass: "align-items-center" },
                                  [
                                    e(
                                      "b-col",
                                      { attrs: { sm: "6", md: "8", lg: "8" } },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common.profile
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-col",
                                      { attrs: { sm: "6", md: "4", lg: "4" } },
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
                                                    return t.$router.go(-1);
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
                                                      t.formTranslation.common
                                                        .back
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
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        t._v(" "),
                        t.pageLoader
                          ? e(
                              "div",
                              { staticClass: "page-loader-section" },
                              [e("loader-component-2")],
                              1
                            )
                          : e("div", [
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-3 col-12" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-12" }, [
                                      e(
                                        "div",
                                        { staticClass: "card card-profile" },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "row justify-content-center mt-4",
                                            },
                                            [
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
                                                        staticClass: "p-2",
                                                        staticStyle: {
                                                          color: "transparent",
                                                        },
                                                        attrs: {
                                                          id: "file",
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return (
                                                              e.preventDefault(),
                                                              t.uploadProfile()
                                                            );
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
                                                              t.formTranslation
                                                                .clinic
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
                                                          (t.patientData
                                                            .user_profile
                                                            ? t.patientData
                                                                .user_profile
                                                            : t.profileImage) +
                                                          ");",
                                                        attrs: {
                                                          id: "imagePreview",
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
                                            {
                                              staticClass:
                                                "card-body pt-0 mt-2",
                                            },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  e(
                                                    "h5",
                                                    { staticClass: "h3" },
                                                    [
                                                      t._v(
                                                        "\n                        " +
                                                          t._s(
                                                            t.patientData
                                                              .display_name
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "h5 font-weight-300",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                        " +
                                                          t._s(
                                                            t.patientData
                                                              .user_email
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e("div", {
                                                    staticClass: "h5 mt-4",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("div", { staticClass: "card-body" }, [
                                        e(
                                          "ul",
                                          {
                                            staticClass:
                                              "navbar-nav iq-navbar-ul flex-md-column flex-row",
                                          },
                                          [
                                            e(
                                              "li",
                                              {
                                                staticClass: "mt-2 p-1",
                                                class:
                                                  "profile" ===
                                                  t.currentRouteModule
                                                    ? "active-li"
                                                    : " ",
                                                on: {
                                                  click: function (e) {
                                                    t.currentRouteModule =
                                                      "profile";
                                                  },
                                                },
                                              },
                                              [
                                                e("i", {
                                                  directives: [
                                                    {
                                                      name: "b-tooltip",
                                                      rawName:
                                                        "v-b-tooltip.hover",
                                                      modifiers: { hover: !0 },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "fa fa-user text-primary m-2",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                    title:
                                                      t.formTranslation.common
                                                        .profile,
                                                  },
                                                }),
                                                t._v(" "),
                                                e("span", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .profile
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                            t._v(" "),
                                            t._l(
                                              t.patientData.custom_forms,
                                              function (n, i) {
                                                return (n.conditions.role_id &&
                                                  0 !==
                                                    n.conditions.role_id
                                                      .length &&
                                                  !n.conditions.role_id.some(
                                                    function (e) {
                                                      return t.$store.state.userDataModule.user.roles.includes(
                                                        e.id
                                                      );
                                                    }
                                                  )) ||
                                                  1 !=
                                                    t.userData.addOns.kiviPro ||
                                                  !t.customFormCondition(
                                                    t.patientData,
                                                    n
                                                  )
                                                  ? t._e()
                                                  : e(
                                                      "li",
                                                      {
                                                        key: i,
                                                        staticClass: "mt-2 p-1",
                                                        class:
                                                          t.currentRouteModule ===
                                                          "custom_form_" + n.id
                                                            ? "active-li"
                                                            : " ",
                                                        on: {
                                                          click: function (e) {
                                                            t.currentRouteModule =
                                                              "custom_form_" +
                                                              n.id;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
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
                                                          class:
                                                            "text-primary m-2 " +
                                                            (n.name &&
                                                            n.name.icon
                                                              ? n.name.icon
                                                              : " fas fa-book-medical"),
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true",
                                                            title:
                                                              n.name &&
                                                              n.name.text
                                                                ? n.name.text
                                                                : "",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        e("span", [
                                                          t._v(
                                                            t._s(
                                                              n.name &&
                                                                n.name.text
                                                                ? n.name.text
                                                                : ""
                                                            )
                                                          ),
                                                        ]),
                                                      ]
                                                    );
                                              }
                                            ),
                                            t._v(" "),
                                            1 == t.userData.addOns.kiviPro &&
                                            t.kcCheckPermission(
                                              "patient_report"
                                            )
                                              ? e(
                                                  "li",
                                                  {
                                                    staticClass: "mt-2 p-1",
                                                    class:
                                                      "report" ===
                                                      t.currentRouteModule
                                                        ? "active-li"
                                                        : "",
                                                    on: {
                                                      click: function (e) {
                                                        t.currentRouteModule =
                                                          "report";
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
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
                                                        "fa fa-file text-primary m-2",
                                                      attrs: {
                                                        "aria-hidden": "true",
                                                        title:
                                                          t.formTranslation
                                                            .reports.reports,
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    e("span", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .reports.reports
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t.kcCheckPermission(
                                              "appointment_list"
                                            )
                                              ? e(
                                                  "li",
                                                  {
                                                    staticClass: "mt-2 p-1",
                                                    class:
                                                      "appointment" ===
                                                      t.currentRouteModule
                                                        ? "active-li"
                                                        : " ",
                                                    on: {
                                                      click: function (e) {
                                                        t.currentRouteModule =
                                                          "appointment";
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
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
                                                        "fas fa-calendar-week text-primary m-2",
                                                      attrs: {
                                                        "aria-hidden": "true",
                                                        title:
                                                          t.formTranslation
                                                            .common.profile,
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    e("span", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .appointments
                                                            .appointments
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                )
                                              : t._e(),
                                          ],
                                          2
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-9 col-12" },
                                  [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-6" }, [
                                        e(
                                          "div",
                                          { staticClass: "card-body shadow" },
                                          [
                                            e("div", { staticClass: "row" }, [
                                              e("div", { staticClass: "col" }, [
                                                e(
                                                  "h6",
                                                  {
                                                    staticClass:
                                                      "heading-small text-muted mb-4",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .appointments
                                                          .appointments
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-auto" },
                                                [
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
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "mt-3 mb-0 text-sm",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-nowrap",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .dashboard
                                                          .total_appointments
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t
                                                              .appointment_encounter_data
                                                              .total_appointment
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "mt-3 mb-0 text-sm",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-nowrap",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .appointments
                                                          .upcoming +
                                                          " " +
                                                          t.formTranslation
                                                            .appointments
                                                            .appointments
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t
                                                              .appointment_encounter_data
                                                              .upcoming_appointment
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-6" }, [
                                        e(
                                          "div",
                                          { staticClass: "card-body shadow" },
                                          [
                                            e("div", { staticClass: "row" }, [
                                              e("div", { staticClass: "col" }, [
                                                e(
                                                  "h6",
                                                  {
                                                    staticClass:
                                                      "heading-small text-muted mb-4",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .patient_encounter
                                                          .encounters
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-auto" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                                    },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "far fa-calendar-times",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            t._v(" "),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "mt-3 mb-0 text-sm",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-nowrap",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .total +
                                                          " " +
                                                          t.formTranslation
                                                            .patient_encounter
                                                            .encounters
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t
                                                              .appointment_encounter_data
                                                              .total_encounters
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "mt-3 mb-0 text-sm",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-nowrap",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .appointments
                                                          .upcoming +
                                                          " " +
                                                          t.formTranslation
                                                            .patient_encounter
                                                            .encounters
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t
                                                              .appointment_encounter_data
                                                              .upcoming_encounters
                                                          ) +
                                                            "\n                      "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    "profile" === t.currentRouteModule
                                      ? e("div", [
                                          e(
                                            "div",
                                            { staticClass: "card-body" },
                                            [
                                              e(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "heading-small text-muted mb-4",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .basic_information
                                                    )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "pl-lg-4" },
                                                [
                                                  e(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-4",
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
                                                                    for: "first_name",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                          " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .fname
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
                                                                        .patientData
                                                                        .first_name,
                                                                    expression:
                                                                      "patientData.first_name",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class: {
                                                                  " is-invalid":
                                                                    t.submitted &&
                                                                    t.$v
                                                                      .patientData
                                                                      .first_name
                                                                      .$error,
                                                                },
                                                                attrs: {
                                                                  id: "first_name",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .patient
                                                                      .fname_plh,
                                                                  required:
                                                                    "required",
                                                                  name: "name",
                                                                  type: "text",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .patientData
                                                                      .first_name,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.patientData,
                                                                          "first_name",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.submitted &&
                                                              !t.$v.patientData
                                                                .first_name
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
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .fname_required
                                                                        ) +
                                                                          "\n                        "
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
                                                        {
                                                          staticClass:
                                                            "col-md-4",
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
                                                                    for: "last_name",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                          " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .lname
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
                                                                        .patientData
                                                                        .last_name,
                                                                    expression:
                                                                      "patientData.last_name",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class: {
                                                                  " is-invalid":
                                                                    t.submitted &&
                                                                    t.$v
                                                                      .patientData
                                                                      .last_name
                                                                      .$error,
                                                                },
                                                                attrs: {
                                                                  id: "last_name",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .patient
                                                                      .lname_placeholder,
                                                                  required:
                                                                    "required",
                                                                  name: "name",
                                                                  type: "text",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .patientData
                                                                      .last_name,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.patientData,
                                                                          "last_name",
                      