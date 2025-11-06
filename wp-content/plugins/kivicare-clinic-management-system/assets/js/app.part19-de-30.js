// app.part19-de-30.js
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
                                          value: t.doctorData.first_name,
                                          expression: "doctorData.first_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.first_name.$error,
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
                                        value: t.doctorData.first_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "first_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.doctorData.first_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .fname_required
                                              ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.doctorData.first_name.alpha
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .fname_validation_1
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.doctorData.first_name.minLength &&
                                          t.$v.doctorData.first_name.maxLength)
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
                                                "\n                                    "
                                            ),
                                          ]
                                        ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "last_name" },
                                      },
                                      [
                                        t._v(
                                          "\n                                       " +
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
                                          value: t.doctorData.last_name,
                                          expression: "doctorData.last_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.last_name.$error,
                                      },
                                      attrs: {
                                        id: "last_name",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_lame,
                                        required: "required",
                                        name: "first_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.last_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
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
                                    !t.$v.doctorData.last_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                                        " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_required
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.doctorData.last_name.alpha
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_validation_1
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.doctorData.last_name.minLength &&
                                          t.$v.doctorData.last_name.maxLength)
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
                                                "\n                                    "
                                            ),
                                          ]
                                        ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "id_number" },
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
                                          value: t.doctorData.username,
                                          expression: "doctorData.username",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.username.$error,
                                      },
                                      attrs: {
                                        id: "id_number",
                                        placeholder: "Ingrese cédula",
                                        required: "required",
                                        name: "id_number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.username,
                                      },
                                      on: {
                                        input: function (e) {
                                          if (!e.target.composing) {
                                            var n = e.target.value.replace(
                                              /\D+/g,
                                              ""
                                            );
                                            t.$set(t.doctorData, "username", n),
                                              (void 0 === t.doctorData.ID ||
                                                null === t.doctorData.ID ||
                                                "" === t.doctorData.ID) &&
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
                                    !t.$v.doctorData.username.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [t._v("La cédula es requerida")]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
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
                                          value: t.doctorData.user_email,
                                          expression: "doctorData.user_email",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.user_email.$error,
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
                                        value: t.doctorData.user_email,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
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
                                    !t.$v.doctorData.user_email.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
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
                                      : t.submitted &&
                                        !t.$v.doctorData.user_email
                                          .emailValidate
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .invalid_email
                                              ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                void 0 === t.doctorData.ID
                                  ? e(
                                      "div",
                                      { staticClass: "col-md-4 form-group" },
                                      [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "user_pass" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .password
                                              )
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
                                              value: t.doctorData.user_pass,
                                              expression:
                                                "doctorData.user_pass",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "user_pass",
                                            placeholder:
                                              t.formTranslation.setup_wizard
                                                .plh_enter_pwd,
                                            required: "required",
                                            name: "user_pass",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.doctorData.user_pass,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.doctorData,
                                                  "user_pass",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.doctorData.user_pass.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .pwd_required
                                                  ) +
                                                    "\n                                    "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "mobile_number" },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .contact_no
                                            )
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
                                          value: t.doctorData.mobile_number,
                                          expression:
                                            "doctorData.mobile_number",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.mobile_number.$error,
                                      },
                                      attrs: {
                                        id: "mobile_number",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_contct,
                                        required: "required",
                                        name: "mobile_number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.mobile_number,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "mobile_number",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.doctorData.mobile_number.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
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
                                      : !t.submitted ||
                                        (t.$v.doctorData.mobile_number
                                          .minLength &&
                                          t.$v.doctorData.mobile_number
                                            .maxLength)
                                      ? t.submitted &&
                                        !t.$v.doctorData.mobile_number
                                          .phoneNumber
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .contact_validation_2
                                                ) +
                                                  "\n                                    "
                                              ),
                                            ]
                                          )
                                        : t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .contact_validation_1
                                              ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "doc_birthdate" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.dob) +
                                            ". "
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
                                          value: t.doctorData.dob,
                                          expression: "doctorData.dob",
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
                                      domProps: { value: t.doctorData.dob },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "dob",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted && !t.$v.doctorData.dob.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .dob_required
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "gender" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.gender
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
                                    e("div", { attrs: { id: "gender" } }, [
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
                                                value: t.doctorData.gender,
                                                expression: "doctorData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "male",
                                              name: "gender",
                                              value: "male",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.doctorData.gender,
                                                "male"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
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
                                              attrs: { for: "male" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common.male
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
                                                value: t.doctorData.gender,
                                                expression: "doctorData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "female",
                                              name: "gender",
                                              value: "female",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.doctorData.gender,
                                                "female"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
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
                                              attrs: { for: "female" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .female
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
                                                value: t.doctorData.gender,
                                                expression: "doctorData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "other",
                                              name: "gender",
                                              value: "other",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.doctorData.gender,
                                                "other"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
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
                                              attrs: { for: "other" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common.other
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "last_name" },
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
                                          t.formTranslation.setup_wizard
                                            .plh_doc_specialization,
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_search,
                                        label: "label",
                                        "track-by": "id",
                                        options: t.doctorSpecialization,
                                        multiple: !0,
                                        taggable: !0,
                                        loading:
                                          t.specializationMultiselectLoader,
                                        disabled:
                                          t.specializationMultiselectLoader,
                                      },
                                      on: { tag: t.addNewSpecialization },
                                      scopedSlots: t._u([
                                        {
                                          key: "noResult",
                                          fn: function () {
                                            return [
                                              t._v(
                                                "\n                                            " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .no_result_found
                                                  ) +
                                                  "\n                                            "
                                              ),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ]),
                                      model: {
                                        value: t.doctorData.specialties,
                                        callback: function (e) {
                                          t.$set(
                                            t.doctorData,
                                            "specialties",
                                            e
                                          );
                                        },
                                        expression: "doctorData.specialties",
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
                                            t.formTranslation.clinic
                                              .note_specialization
                                          )
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.doctorData.specialties.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                                             " +
                                                t._s(
                                                  t.formTranslation.doctor
                                                    .doctor_specialization_required
                                                ) +
                                                "\n                                        "
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
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "price_type" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.doctor.fees_type
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
                                    e("div", { attrs: { id: "price_type" } }, [
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
                                                value: t.doctorData.price_type,
                                                expression:
                                                  "doctorData.price_type",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "range",
                                              name: "price_type",
                                              value: "range",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.doctorData.price_type,
                                                "range"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function (e) {
                                                  return t.$set(
                                                    t.doctorData,
                                                    "price_type",
                                                    "range"
                                                  );
                                                },
                                                t.handleResetCharge,
                                              ],
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label",
                                              attrs: { for: "range" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.doctor.range
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
                                                value: t.doctorData.price_type,
                                                expression:
                                                  "doctorData.price_type",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "fixed",
                                              name: "price_type",
                                              value: "fixed",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.doctorData.price_type,
                                                "fixed"
                                              ),
                                            },
                                            on: {
                                              change: [
                                                function (e) {
                                                  return t.$set(
                                                    t.doctorData,
                                                    "price_type",
                                                    "fixed"
                                                  );
                                                },
                                                t.handleResetCharge,
                                              ],
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label",
                                              attrs: { for: "fixed" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.doctor.fixed
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.doctorData.price_type.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                                         " +
                                                t._s(
                                                  t.formTranslation.doctor
                                                    .fees_type_required
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "price" },
                                      },
                                      [
                                        t._v("Fees "),
                                        e(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [t._v("*")]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    void 0 !== t.doctorData.price_type &&
                                    "fixed" === t.doctorData.price_type
                                      ? e("div", [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.doctorData.price,
                                                expression: "doctorData.price",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              " is-invalid":
                                                t.submitted &&
                                                t.$v.doctorData.price.$error,
                                            },
                                            attrs: {
                                              id: "price",
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_enter_fees,
                                              name: "price",
                                              min: "0",
                                              type: "number",
                                            },
                                            domProps: {
                                              value: t.doctorData.price,
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  t.$set(
                                                    t.doctorData,
                                                    "price",
                                                    e.target.value
                                                  );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.doctorData.price.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                " +
                                                      t._s(
                                                        t.formTranslation.doctor
                                                          .doc_fee_required
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              )
                                            : t.submitted &&
                                              !t.$v.doctorData.price.minValue
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                 " +
                                                      t._s(
                                                        t.formTranslation.doctor
                                                          .doc_fee_validation_1
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              )
                                            : t.submitted &&
                                              !t.$v.doctorData.price.maxValue
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                 " +
                                                      t._s(
                                                        t.formTranslation.doctor
                                                          .doc_fee_validation_2
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ])
                                      : t._e(),
                                    t._v(" "),
                                    void 0 !== t.doctorData.price_type &&
                                    "range" === t.doctorData.price_type
                                      ? e(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.doctorData.minPrice,
                                                  expression:
                                                    "doctorData.minPrice",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.doctorData.minPrice
                                                    .$error,
                                              },
                                              attrs: {
                                                type: "number",
                                                min: "0",
                                                placeholder:
                                                  t.formTranslation.setup_wizard
                                                    .plh_min_price_range,
                                              },
                                              domProps: {
                                                value: t.doctorData.minPrice,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.doctorData,
                                                      "minPrice",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-prepend bg-gray",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-text",
                                                  },
                                                  [
                                                    t._v(
                                                      "  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.to
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.doctorData.maxPrice,
                                                  expression:
                                                    "doctorData.maxPrice",
                                                },
                                              ],
                                              staticClass: "form-control pl-2",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.doctorData.maxPrice
                                                    .$error,
                                              },
                                              attrs: {
                                                type: "number",
                                                placeholder:
                                                  t.formTranslation.setup_wizard
                                                    .plh_max_price_range,
                                                min: 0,
                                              },
                                              domProps: {
                                                value: t.doctorData.maxPrice,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.doctorData,
                                                      "maxPrice",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            !t.submitted ||
                                            (t.$v.doctorData.minPrice
                                              .required &&
                                              t.$v.doctorData.maxPrice.required)
                                              ? t.submitted &&
                                                !t.$v.doctorData.minPrice
                                                  .minValue
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                                 " +
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor
                                                              .doc_fee_validation_4
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.doctorData.maxPrice
                                                    .minimumValue
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                                 " +
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor
                                                              .doc_fee_validation_5
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  )
                                                : !t.submitted ||
                                                  (t.$v.doctorData.minPrice
                                                    .maxValue &&
                                                    t.$v.doctorData.maxPrice
                                                      .maxValue)
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                              " +
                                                          t._s(
                                                            t.formTranslation
                                                              .doctor
                                                              .doc_fee_validation_6
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  )
                                              : e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                                                " +
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor
                                                            .doc_fee_validation_3
                                                        ) +
                                                        "\n                                            "
                                                    ),
                                                  ]
                                                ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h4", { staticClass: "text-primary mb-2" }, [
                                  t._v(
                                    " " +
                                      t._s(
                                        t.formTranslation.doctor
                                          .qualification_speciality_details
                                      )
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row mb-4" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-sm text-center table-bordered custom-table",
                                  },
                                  [
                                    e("thead", { staticClass: "thead-light" }, [
                                      e("tr", [
                                        e("th", [
                                          t._v(
                                            t._s(t.formTranslation.common.sr_no)
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("th", [
                                          t._v(
                                            t._s(
                                              t.formTranslation.doctor.degree
                                            )
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("th", [
                                          t._v(
                                            t._s(
                                              t.formTranslation.doctor
                                                .college_university
                                            )
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("th", [
                                          t._v(
                                            t._s(t.formTranslation.doctor.year)
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("th", [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common.action
                                            )
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    void 0 !== t.doctorData.qualifications &&
                                    t.doctorData.qualifications.length > 0
                                      ? e(
                                          "tbody",
                                          t._l(
                                            t.doctorData.qualifications,
                                            function (n, i) {
                                              return e("tr", [
                                                e("td", [t._v(t._s(++i))]),
                                                t._v(" "),
                                                e("td", [t._v(t._s(n.degree))]),
                                                t._v(" "),
                                                e("td", [
                                                  t._v(t._s(n.university)),
                                                ]),
                                                t._v(" "),
                                                e("td", [t._v(t._s(n.year))]),
                                                t._v(" "),
                                                e("td", [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group",
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
                                                              t.formTranslation
                                                                .common.edit,
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return t.editQualification(
                                                                i
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
                                                              t.formTranslation
                                                                .clinic_schedule
                                                                .dt_lbl_dlt,
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return t.deleteQualification(
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
                                              { attrs: { colspan: "5" } },
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
                                                        t.formTranslation.common
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
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h4", { staticClass: "text-primary mb-2" }, [
                                  t._v(t._s(t.qualificationTitle)),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "degree" },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.doctor.degree
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
                                        value: t.qualification.degree,
                                        expression: "qualification.degree",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.qualificationSubmitted &&
                                        t.$v.qualification.degree.$error,
                                    },
                                    attrs: {
                                      id: "degree",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_degree,
                                      name: "degree",
                                      type: "text",
                                    },
                                    domProps: { value: t.qualification.degree },
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
                                  !t.$v.qualification.degree.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.doctor
                                                  .degree_required
                                              ) +
                                              "\n                                    "
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
                                      attrs: { for: "university" },
                                    },
                                    [
                                      t._v(
                                        "  " +
                                          t._s(
                                            t.formTranslation.doctor.university
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
                                        value: t.qualification.university,
                                        expression: "qualification.university",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.qualificationSubmitted &&
                                        t.$v.qualification.university.$error,
                                    },
                                    attrs: {
                                      id: "university",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_university,
                                      name: "university",
                                      type: "text",
                                    },
                                    domProps: {
                                      value: t.qualification.university,
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
                                  !t.$v.qualification.university.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.doctor
                                                  .university_required
                                              ) +
                                              "\n                                    "
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
                                        attrs: { for: "year" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.doctor.year) +
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
                                      "b-select",
                                      {
                                        staticClass: "form-control",
                                        class: {
                                          " is-invalid":
                                            t.qualificationSubmitted &&
                                            t.$v.qualification.year.$error,
                                        },
                                        attrs: { name: "year", id: "year" },
                                        model: {
                                          value: t.qualification.year,
                                          callback: function (e) {
                                            t.$set(t.qualification, "year", e);
                                          },
                                          expression: "qualification.year",
                                        },
                                      },
                                      [
                                        e("option", { attrs: { value: "" } }, [
                                          t._v(
                                            "  " +
                                              t._s(
                                                t.formTranslation.doctor
                                                  .select_year
                                              )
                                          ),
                                        ]),
                                        t._v(" "),
                                        t._l(
                                          t.qualificationYears,
                                          function (n) {
                                            return e(
                                              "option",
                                              { domProps: { value: n } },
                                              [t._v(t._s(n))]
                                            );
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                    t._v(" "),
                                    t.qualificationSubmitted &&
                                    !t.$v.qualification.year.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.doctor
                                                    .year_required
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
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row mb-3" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "float-left" }, [
                                  e("button", {
                                    staticClass: "btn btn-sm btn-primary",
                                    attrs: { type: "button" },
                                    domProps: {
                                      innerHTML: t._s(t.qualificationBtn),
                                    },
                                    on: { click: t.addQualification },
                                  }),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "p-0 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row mb-4 mt-4" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e(
                                  "div",
                                  { staticClass: "float-right" },
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
                                              "   " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .loading
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        )
                                      : e("b-button", {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            variant: "primary",
                                            type: "submit",
                                          },
                                          domProps: {
                                            innerHTML: t._s(t.buttonText),
                                          },
                                          on: { click: t.complete },
                                        }),
                                  ],
                                  1
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("b-card-footer", { class: "pb-0 mb-3" }, [
                            e("div", { staticClass: "row" }, [
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
                                          "  " +
                                            t._s(
                                              t.formTranslation.setup_wizard
                                                .previous
                                            ) +
                                            "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-6 pr-0" }, [
                                t.nextLoader ||
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
                                          "  " +
                                            t._s(
                                              t.formTranslation.common.loading
                                            ) +
                                            "\n                            "
                                        ),
                                      ]
                                    )
                                  : e("button", {
                                      staticClass:
                                        "btn btn-primary float-right",
                                      attrs: {
                                        type: "button",
                                        disabled: !(
                                          t.doctorsData.dataList.length > 0
                                        ),
                                      },
                                      domProps: {
                                        innerHTML: t._s(t.nextButtonText),
                                      },
                                      on: { click: t.handleNexClick },
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
          "f4a3bf56",
          null
        ).exports),
      P = n(353).a,
      R = Object(h.a)(
        P,
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
                        staticClass: "p-0 pb-0 shadow",
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
                                  { attrs: { sm: "12", md: "8", lg: "8" } },
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
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-8" }, [
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "h4",
                                    { staticClass: "text-primary mb-4" },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.setup_wizard
                                            .add_session_details
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e(
                                "div",
                                { staticClass: "table-responsive mb-0" },
                                [
                                  e(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-bordered table-sm text-center custom-table",
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
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .session_doctors
                                                )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .days
                                                )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation
                                                    .doctor_session
                                                    .morning_session
                                                )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation
                                                    .doctor_session
                                                    .evening_session
                                                )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
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
                                      void 0 !== t.clinicData.clinic_sessions &&
                                      t.clinicData.clinic_sessions.length > 0
                                        ? e(
                                            "tbody",
                                            t._l(
                                              t.clinicData.clinic_sessions,
                                              function (n, i) {
                                                return e("tr", [
                                                  e("td", [t._v(t._s(++i))]),
                                                  t._v(" "),
                                                  e(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-capitalize",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(n.doctors.label)
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-capitalize",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(n.days.join(", "))
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e("td", [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t._f(
                                                            "timeObjectToString"
                                                          )(n.s_one_start_time)
                                                        ) +
                                                        " " +
                                                        t._s(" to ") +
                                                        " " +
                                                        t._s(
                                                          t._f(
                                                            "timeObjectToString"
                                                          )(n.s_one_end_time)
                                                        )
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("td", [
                                                    "" !==
                                                      n.s_two_start_time.HH &&
                                                    "" !== n.s_two_end_time.HH
                                                      ? e("span", [
                                                          t._v(
                                                            "\n                                            " +
                                                              t._s(
                                                                t._f(
                                                                  "timeObjectToString"
                                                                )(
                                                                  n.s_two_start_time
                                                                )
                                                              ) +
                                                              " " +
                                                              t._s(" to ") +
                                                              " " +
                                                              t._s(
                                                                t._f(
                                                                  "timeObjectToString"
                                                                )(
                                                                  n.s_two_end_time
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          ),
                                                        ])
                                                      : e("span", [
                                                          t._v(" - "),
                                                        ]),
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
                                                                return t.editSessionData(
                                                                  i
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
                                                                return t.deleteSessionData(
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
                                                  attrs: { colspan: "6" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .setup_wizard
                                                          .no_sessions_found
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("hr"),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("h4", { staticClass: "text-primary mb-4" }, [
                                t._v(t._s(t.clinicSessionTitle)),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row form-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "col-md-2 form-control-label",
                                attrs: { for: "clinicSessionDoctor" },
                              },
                              [
                                t._v(
                                  "\n                            " +
                                    t._s(t.formTranslation.common.doctors) +
                                    " "
                                ),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "col-md-4" },
                              [
                                e("multi-select", {
                                  attrs: {
                                    "deselect-label": "",
                                    "select-label": "",
                                    id: "clinicSessionDoctor",
                                    "tag-placeholder":
                                      t.formTranslation.setup_wizard
                                        .plh_select_session_doc,
                                    placeholder:
                                      t.formTranslation.setup_wizard.plh_search,
                                    label: "label",
                                    "track-by": "id",
                                    options: t.doctors,
                                  },
                                  on: {
                                    select: t.sessionDoctorsValidation,
                                    remove: t.sessionDoctorsValidation,
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
                                    value: t.clinicSession.doctors,
                                    callback: function (e) {
                                      t.$set(t.clinicSession, "doctors", e);
                                    },
                                    expression: "clinicSession.doctors",
                                  },
                                }),
                                t._v(" "),
                                t.sessionSubmitted &&
                                !t.$v.clinicSession.doctors.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.doctor_session
                                              .session_doc_required
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.sessionSubmitted &&
                                t.sessionDoctorValidationCheck
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.doctor_session
                                              .doc_already_added
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row form-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "col-md-2 form-control-label",
                                attrs: { for: "time_slot" },
                              },
                              [
                                t._v(
                                  t._s(
                                    t.formTranslation.setup_wizard
                                      .time_slot_minute
                                  ) + " "
                                ),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "col-md-4" },
                              [
                                e(
                                  "b-select",
                                  {
                                    staticClass: "form-control text-capitalize",
                                    attrs: {
                                      name: "time_slot",
                                      id: "time_slot",
                                    },
                                    on: { change: t.sessionDoctorsValidation },
                                    model: {
                                      value: t.clinicSession.time_slot,
                                      callback: function (e) {
                                        t.$set(t.clinicSession, "time_slot", e);
                                      },
                                      expression: "clinicSession.time_slot",
                                    },
                                  },
                                  t._l(t.time_slots, function (n) {
                                    return e(
                                      "option",
                                      { domProps: { value: n } },
                                      [t._v(t._s(n))]
                                    );
                                  }),
                                  0
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            t.submitted &&
                            !t.$v.clinicSession.time_slot.required
                              ? e("div", { staticClass: "invalid-feedback" }, [
                                  t._v(
                                    "\n                             " +
                                      t._s(
                                        t.formTranslation.appointments
                                          .time_slot_required
                                      ) +
                                      "\n                        "
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row form-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "col-md-2 form-control-label",
                                attrs: { for: "week_days" },
                              },
                              [
                                t._v(
                                  t._s(t.formTranslation.common.action) +
                                    "\n                           " +
                                    t._s(
                                      t.formTranslation.doctor_session.week_days
                                    )
                                ),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "col-md-8" },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "custom-control custom-checkbox d-inline mr-2",
                                    attrs: { id: "check_all_days_form" },
                                  },
                                  [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.daysAll,
                                          expression: "daysAll",
                                        },
                                      ],
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        id: "check_all_days",
                                        type: "checkbox",
                                        name: "check_all_days",
                                      },
                                      domProps: {
                                        value: 1,
                                        checked: Array.isArray(t.daysAll)
                                          ? t._i(t.daysAll, 1) > -1
                                          : t.daysAll,
                                      },
                                      on: {
                                        change: [
                                          function (e) {
                                            var n = t.daysAll,
                                              i = e.target,
                                              r = !!i.checked;
                                            if (Array.isArray(n)) {
                                              var o = t._i(n, 1);
                                              i.checked
                                                ? o < 0 &&
                                                  (t.daysAll = n.concat([1]))
                                                : o > -1 &&
                                                  (t.daysAll = n
                                                    .slice(0, o)
                                                    .concat(n.slice(o + 1)));
                                            } else t.daysAll = r;
                                          },
                                          t.handleAllDaysChecked,
                                        ],
                                      },
                                    }),
                                    t._v(" "),
                                    e(
                                      "label",
                                      {
                                        staticClass:
                                          "custom-control-label text-capitalize",
                                        attrs: { for: "check_all_days" },
                                      },
                                      [
                                        t._v(
                                          "  " +
                                            t._s(t.formTranslation.common.all) +
                                            " "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                t._l(t.days, function (n, i) {
                                  return e(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox d-inline mr-2",
                                      attrs: { id: "week_days" },
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.clinicSession.days,
                                            expression: "clinicSession.days",
                                          },
                                        ],
                                        staticClass: "custom-control-input",
                                        class: {
                                          " is-invalid":
                                            t.sessionSubmitted &&
                                            t.$v.clinicSession.days.$error,
                                        },
                                        attrs: {
                                          id: n + i,
                                          type: "checkbox",
                                          name: "days[]",
                                        },
                                        domProps: {
                                          value: n,
                                          checked: Array.isArray(
                                            t.clinicSession.days
                                          )
                                            ? t._i(t.clinicSession.days, n) > -1
                                            : t.clinicSession.days,
                                        },
                                        on: {
                                          change: [
                                            function (e) {
                                              var i = t.clinicSession.days,
                                                r = e.target,
                                                o = !!r.checked;
                                              if (Array.isArray(i)) {
                                                var a = n,
                                                  s = t._i(i, a);
                                                r.checked
                                                  ? s < 0 &&
                                                    t.$set(
                                                      t.clinicSession,
                                                      "days",
                                                      i.concat([a])
                                                    )
                                                  : s > -1 &&
                                                    t.$set(
                                                      t.clinicSession,
                                                      "days",
                                                      i
                                                        .slice(0, s)
                                                        .concat(i.slice(s + 1))
                                                    );
                                              } else
                                                t.$set(
                                                  t.clinicSession,
                                                  "days",
                                                  o
                                                );
                                            },
                                            t.handleUncheckDays,
                                          ],
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control-label text-capitalize",
                                          attrs: { for: n + i },
                                        },
                                        [t._v(" " + t._s(n) + " ")]
                                      ),
                                    ]
                                  );
                                }),
                                t._v(" "),
                                t.sessionSubmitted &&
                                !t.$v.clinicSession.days.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback mt-2" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.doctor_session
                                              .days_required
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.weekDaysValidationCheck
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback mt-2" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.doctor_session
                                              .days_already_exist
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              2
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-6" }, [
                              e("div", { staticClass: "row form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "col-md-4 form-control-label",
                                    attrs: { for: "s_one_start_time" },
                                  },
                                  [
                                    t._v(
                                      "\n                                   " +
                                        t._s(
                                          t.formTranslation.doctor_session
                                            .morning_session
                                        ) +
                                        " "
                                    ),
                                    e("span", { staticClass: "text-danger" }, [
                                      t._v("*"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "col-md-8" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-6" }, [
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "s_one_start_time",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .open_time
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("vue-timepicker", {
                                            attrs: {
                                              "auto-scroll": "",
                                              format: "HH:mm",
                                              id: "s_one_start_time",
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_start_time,
                                              "minute-interval": 5,
                                              "close-on-complete": "",
                                            },
                                            on: {
                                              change: t.generateTimeSlotTime,
                                            },
                                            model: {
                                              value:
                                                t.clinicSession
                                                  .s_one_start_time,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicSession,
                                                  "s_one_start_time",
                                                  e
                                                );
                                              },
                                              expression:
                                                "clinicSession.s_one_start_time",
                                            },
                                          }),
                                          t._v(" "),
                                          !t.sessionSubmitted ||
                                          t.$v.clinicSession.s_one_start_time.HH
                                            .required ||
                                          t.$v.clinicSession.s_one_start_time.mm
                                            .required
                                            ? t._e()
                                            : e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .start_time_required
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              ),
                                          t._v(" "),
                                          t.sessionSubmitted &&
                                          !t.$v.clinicSession.s_one_start_time
                                            .maxTime
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .start_time_smaller_then_end
                                                    ) +
                                                      "\n                                                "
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
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "s_one_end_time" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .close_time
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("vue-timepicker", {
                                            attrs: {
                                              "auto-scroll": "",
                                              format: "HH:mm",
                                              id: "s_one_end_time",
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_end_time,
                                              "minute-interval": 5,
                                              "close-on-complete": "",
                                            },
                                            on: {
                                              change: t.generateTimeSlotTime,
                                            },
                                            model: {
                                              value:
                                                t.clinicSession.s_one_end_time,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicSession,
                                                  "s_one_end_time",
                                                  e
                                                );
                                              },
                                              expression:
                                                "clinicSession.s_one_end_time",
                                            },
                                          }),
                                          t._v(" "),
                                          !t.sessionSubmitted ||
                                          t.$v.clinicSession.s_one_end_time.HH
                                            .required ||
                                          t.$v.clinicSession.s_one_end_time.mm
                                            .required
                                            ? t._e()
                                            : e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .end_time_required
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              ),
                                          t._v(" "),
                                          t.sessionSubmitted &&
                                          !t.$v.clinicSession.s_one_end_time
                                            .minTime
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .end_time_bigger_then_start
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "col-md-4 form-control-label",
                                    attrs: { for: "s_two_start_time" },
                                  },
                                  [
                                    t._v(
                                      "\n                                    " +
                                        t._s(
                                          t.formTranslation.doctor_session
                                            .evening_session
                                        ) +
                                        " "
                                    ),
                                    e("span", { staticClass: "text-danger" }, [
                                      t._v("*"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e("div", { staticClass: "col-md-8" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-6" }, [
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "s_two_start_time",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .open_time
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("vue-timepicker", {
                                            attrs: {
                                              id: "s_two_start_time",
                                              "auto-scroll": "",
                                              format: "HH:mm",
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_start_time,
                                              "minute-interval": 5,
                                              "close-on-complete": "",
                                            },
                                            on: {
                                              change: t.generateTimeSlotTime,
                                            },
                                            model: {
                                              value:
                                                t.clinicSession
                                                  .s_two_start_time,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicSession,
                                                  "s_two_start_time",
                                                  e
                                                );
                                              },
                                              expression:
                                                "clinicSession.s_two_start_time",
                                            },
                                          }),
                                          t._v(" "),
                                          t.sessionSubmitted &&
                                          !t.$v.clinicSession.s_two_start_time
                                            .minTime
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .start_time_smaller_then_first_session_end_time
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          t.sessionSubmitted &&
                                          !t.$v.clinicSession.s_two_start_time
                                            .maxTime
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .start_time_smaller_then_end
                                                    ) +
                                                      "\n                                                "
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
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "s_two_end_time" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.setup_wizard
                                                    .close_time
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          e("vue-timepicker", {
                                            attrs: {
                                              "auto-scroll": "",
                                              format: "HH:mm",
                                              id: "s_two_end_time",
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_end_time,
                                              "minute-interval": 5,
                                              "close-on-complete": "",
                                            },
                                            on: {
                                              change: t.generateTimeSlotTime,
                                            },
                                            model: {
                                              value:
                                                t.clinicSession.s_two_end_time,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicSession,
                                                  "s_two_end_time",
                                                  e
                                                );
                                              },
                                              expression:
                                                "clinicSession.s_two_end_time",
                                            },
                                          }),
                                          t._v(" "),
                                          t.s_two_end_time_required_validation
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .end_time_required
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          t.sessionSubmitted &&
                                          !t.$v.clinicSession.s_two_end_time
                                            .minTime
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-2",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation
                                                        .doctor_session
                                                        .end_time_bigger_then_start
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-6" }, [
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "label",
                                    { staticClass: "form-control-label" },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.setup_wizard
                                            .session_demo
                                        )
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("hr", { staticClass: "my-2" }),
                                ]),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row mt-2 session_slots" },
                                [
                                  e("div", { staticClass: "col-md-12" }, [
                                    void 0 !== t.timeSlots.length &&
                                    t.timeSlots.length > 0
                                      ? e(
                                          "div",
                                          t._l(t.timeSlots, function (n, i) {
                                            return e(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                e(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                                                " +
                                                        t._s(
                                                          t.formTranslation
                                                            .appointments
                                                            .session
                                                        ) +
                                                        " " +
                                                        t._s(i + 1) +
                                                        "\n                                            "
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e("br"),
                                                t._v(" "),
                                                t._l(n, function (n) {
                                                  return e(
                                                    "div",
                                                    { staticClass: "d-inline" },
                                                    [
                                                      !1 === n.isValid
                                                        ? e(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-custom mr-2 mb-2 cursor-pointer badge-danger",
                                                            },
                                                            [
                                                              e("del", [
                                                                t._v(
                                                                  t._s(n.time)
                                                                ),
                                                              ]),
                                                            ]
                                                          )
                                                        : e(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-custom mr-2 mb-2 cursor-pointer badge-outline-primary",
                                                            },
                                                            [t._v(t._s(n.time))]
                                                          ),
                                                      t._v(" "),
                                                      !1 === n.isValid
                                                        ? e("span", [
                                                            e("br"),
                                                            t._v(" "),
                                                            e(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "form-control-label text-danger",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .setup_wizard
                                                                      .invalid_time_slot
                                                                  )
                                                                ),
                                                                e("b", [
                                                                  t._v(
                                                                    t._s(
                                                                      n.timeSlotDiff
                                                                    )
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                              ],
                                              2
                                            );
                                          }),
                                          0
                                        )
                                      : e("div", [
                                          e(
                                            "p",
                                            {
                                              staticClass:
                                                "text-primary mb-0 small",
                                            },
                                            [
                                              e("b", [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments
                                                      .no_time_slots_found
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12 mb-4" }, [
                              e("div", { staticClass: "float-right" }, [
                                e("button", {
                                  staticClass: "btn btn-sm btn-primary",
                                  attrs: {
                                    type: "button",
                                    disabled: t.weekDaysValidationCheck,
                                  },
                                  domProps: {
                                    innerHTML: t._s(t.sessionButtonText),
                                  },
                                  on: { click: t.addSessionData },
                                }),
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
                                      staticClass: "btn btn-primary float-left",
                                      attrs: { type: "button" },
                                      on: { click: t.handlePrevClick },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "fa fa-angle-double-left",
                                        attrs: { "aria-hidden": "true" },
                                      }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.setup_wizard
                                              .previous
                                          ) +
                                          "Previous\n                            "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-6 pr-0" }, [
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
                                        "  " +
                                          t._s(
                                            t.formTranslation.common.loading
                                          ) +
                                          "\n                            "
                                      ),
                                    ]
                                  )
                                : e("button", {
                                    staticClass: "btn btn-primary float-right",
                                    attrs: {
                                      type: "submit",
                                      disabled: !(
                                        void 0 !==
                                          t.clinicData.clinic_sessions &&
                                        t.clinicData.clinic_sessions.length > 0
                                      ),
                                    },
                                    domProps: {
                                      innerHTML: t._s(t.nextButtonText),
                                    },
                                    on: { click: t.handleSubmit },
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
        "266fb635",
        null
      ).exports,
      I = n(24),
      W = {
        name: "SetupStep5",
        data: function () {
          return {
            stepStatus: !1,
            submitted: !1,
            loading: !1,
            cardTitle: "Receptionist",
            receptionistData: {},
            saveNextBtn:
              'Save & Finish <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
          };
        },
        mounted: function () {
          this.init();
        },
        validations: {
          receptionistData: {
            first_name: {
              required: l.required,
              alpha: l.alpha,
              minLength: Object(l.minLength)(2),
              maxLength: Object(l.maxLength)(15),
            },
            last_name: {
              required: l.required,
              alpha: l.alpha,
              minLength: Object(l.minLength)(2),
              maxLength: Object(l.maxLength)(15),
            },
            username: { required: l.required },
            user_email: { required: l.required, emailValidate: I.c },
            mobile_number: {
              required: l.required,
              phoneNumber: I.i,
              minLength: Object(l.minLength)(6),
              maxLength: Object(l.maxLength)(15),
            },
          },
        },
        methods: {
          init: function () {
            (this.receptionistData = this.defaultReceptionistData()),
              this.getCurrentStepStatus();
          },
          defaultReceptionistData: function () {
            var t = new Date();
            return (
              t.setFullYear(t.getFullYear() - 18),
              {
                ID: "",
                first_name: "",
                last_name: "",
                username: "",
                user_email: "",
                user_pass: "",
                mobile_number: "",
                gender: "male",
                dob: "",
                about_me: "",
              }
            );
          },
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          handleSubmit: function () {
            var t = this;
            if (
              ((this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.receptionistData.$invalid)
            )
              this.loading = !1;
            else if (Object(I.n)("ReceptionistDataFrom")) {
              var e = this;
              Object(s.b)("setup_receptionist", this.receptionistData)
                .then(function (n) {
                  (t.loading = !1),
                    (t.submitted = !1),
                    void 0 !== n.data.status && !0 === n.data.status
                      ? t.$store
                          .dispatch(
                            "userDataModule/updateSetupStep",
                            t.currentStep
                          )
                          .then(function () {
                            t.$store
                              .dispatch("userDataModule/finishSetup", {})
                              .then(function () {
                                displayMessage(
                                  "Clinic setup finish successfully"
                                ),
                                  e.$router.push({ name: "dashboard" });
                              });
                          })
                      : displayErrorMessage(n.data.message);
                })
                .catch(function (e) {
                  (t.loading = !1),
                    (t.submitted = !1),
                    displayErrorMessage("Internal server error");
                });
            }
          },
          getCurrentStepStatus: function () {
            var t = this;
            Object(s.b)("get_setup_step_status", { step: 4 })
              .then(function (e) {
                if (void 0 !== e.data.status && !0 === e.data.status) {
                  var n = e.data.data;
                  (t.stepStatus = !0),
                    (t.receptionistData = t.setReceptionistData(n[0])),
                    t.complete();
                }
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          setReceptionistData: function (t) {
            return (
              (this.receptionistData = {}),
              {
                ID: t.ID,
                first_name: t.first_name,
                last_name: t.last_name,
                username: t.username,
                user_email: t.user_email,
                mobile_number: t.mobile_number,
                gender: t.gender,
                dob: t.dob,
                about_me: t.about_me,
                address: t.address,
                city: t.city,
                state: t.state,
                country: t.country,
                postal_code: t.postal_code,
              }
            );
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "receptionist" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
        },
      },
      N =
        (n(646),
        Object(h.a)(
          W,
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
                      attrs: { id: "ReceptionistDataFrom", novalidate: !0 },
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
                            e("h3", { staticClass: "mb-0" }, [
                              t._v(t._s(t.cardTitle)),
                            ]),
                          ]),
                          t._v(" "),
                          e("b-card-body", { staticClass: "pb-0" }, [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-8" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e(
                                      "h4",
                                      { staticClass: "text-primary mb-4" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common
                                              .basic_details
                                          ) + " "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "setup_cedula" },
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
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.receptionistData.username,
                                          expression:
                                            "receptionistData.username",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.receptionistData.username.$error,
                                      },
                                      attrs: {
                                        id: "setup_cedula",
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
                                            t.$set(
                                              t.receptionistData,
                                              "username",
                                              n
                                            ),
                                              (void 0 ===
                                                t.receptionistData.ID ||
                                                null ===
                                                  t.receptionistData.ID ||
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
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "first_name" },
                                    },
                                    [
                                      t._v(
                                        t._s(t.formTranslation.common.fname)
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.receptionistData.first_name,
                                          expression:
                                            "receptionistData.first_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.receptionistData.first_name
                                            .$error,
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
                                        value: t.receptionistData.first_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.receptionistData,
                                              "first_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.receptionistData.first_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .fname_required
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.receptionistData.first_name.alpha
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .fname_validation_1
                                                ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.receptionistData.first_name
                                          .minLength &&
                                          t.$v.receptionistData.first_name
                                            .maxLength)
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
                                                "\n                                        "
                                            ),
                                          ]
                                        ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "last_name" },
                                    },
                                    [
                                      t._v(
                                        "\n                                      " +
                                          t._s(t.formTranslation.common.lname)
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.receptionistData.last_name,
                                          expression:
                                            "receptionistData.last_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.receptionistData.last_name
                                            .$error,
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
                                        value: t.receptionistData.last_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.receptionistData,
                                              "last_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.receptionistData.last_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                                            " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_required
                                                ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.receptionistData.last_name.alpha
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "   " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_validation_1
                                                ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.receptionistData.last_name
                                          .minLength &&
                                          t.$v.receptionistData.last_name
                                            .maxLength)
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
                                                "\n                                        "
                                            ),
                                          ]
                                        ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
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
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.receptionistData.user_email,
                                          expression:
                                            "receptionistData.user_email",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.receptionistData.user_email
                                            .$error,
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
                                        value: t.receptionistData.user_email,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.receptionistData,
                                              "user_email",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.receptionistData.user_email.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .email_required
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.receptionistData.user_email
                                      .emailValidate
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .invalid_email
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "mobile_number" },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common.contact_no
                                          )
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.receptionistData.mobile_number,
                                          expression:
                                            "receptionistData.mobile_number",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.receptionistData.mobile_number
                                            .$error,
                                      },
                                      attrs: {
                                        id: "mobile_number",
                                        placeholder:
                                          t.formTranslation.setup_wizard
                                            .plh_enter_contct,
                                        required: "required",
                                        name: "mobile_number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.receptionistData.mobile_number,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.receptionistData,
                                              "mobile_number",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.receptionistData.mobile_number
                                      .required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .contact_num_required
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.receptionistData.mobile_number
                                          .minLength &&
                                          t.$v.receptionistData.mobile_number
                                            .maxLength)
                                      ? t.submitted &&
                                        !t.$v.receptionistData.mobile_number
                                          .phoneNumber
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                '                                             class="invalid-feedback">' +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_validation_2
                                                  ) +
                                                  "\n\n                                        "
                                              ),
                                            ]
                                          )
                                        : t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .contact_validation_1
                                              ) +
                                                "\n                                        "
                                            ),
                                          ]
                                        ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "dob" },
                                    },
                                    [
                                      t._v(
                                        '                                             class="invalid-feedback">' +
                                          t._s(t.formTranslation.common.dob) +
                                          "\n. "
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "col-sm-8" }, [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.receptionistData.dob,
                                          expression: "receptionistData.dob",
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
                                        value: t.receptionistData.dob,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.receptionistData,
                                              "dob",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-4 form-control-label",
                                      attrs: { for: "gender" },
                                    },
                                    [
                                      t._v(
                                        '                                             class="invalid-feedback">' +
                                          t._s(
                                            t.formTranslation.common.gender
                                          ) +
                                          "\n "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "col-sm-8",
                                      attrs: { id: "gender" },
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
                                                rawName: "v-model",
                                                value:
                                                  t.receptionistData.gender,
                                                expression:
                                                  "receptionistData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "male",
                                              name: "gender",
                                              value: "male",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.receptionistData.gender,
                                                "male"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
                                                return t.$set(
                                                  t.receptionistData,
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
                                                '                                             class="invalid-feedback">' +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .male
                                                  ) +
                                                  "\n"
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
                                                  t.receptionistData.gender,
                                                expression:
                                                  "receptionistData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "female",
                                              name: "gender",
                                              value: "female",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.receptionistData.gender,
                                                "female"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
                                                return t.$set(
                                                  t.receptionistData,
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
                                              attrs: { for: "female" },
                                            },
                                            [
                                              t._v(
                                                '                                             class="invalid-feedback">' +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .female
                                                  ) +
                                                  "\n"
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
                                                  t.receptionistData.gender,
                                                expression:
                                                  "receptionistData.gender",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "radio",
                                              id: "other",
                                              name: "gender",
                                              value: "other",
                                            },
                                            domProps: {
                                              checked: t._q(
                                                t.receptionistData.gender,
                                                "other"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
                                                return t.$set(
                                                  t.receptionistData,
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
                                                '                                             class="invalid-feedback">' +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .other
                                                  ) +
                                                  "\n"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
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
                                            "\n                                "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-6" }, [
                                e("div", { staticClass: "float-right" }, [
                                  t.loading ||
                                  void 0 === t.currentStep.nextStep ||
                                  "" === t.currentStep.nextStep
                                    ? e(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary float-right",
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
                                            " " +
                                              t._s(
                                                t.formTranslation.common.loading
                                              ) +
                                              "                                "
                                          ),
                                        ]
                                      )
                                    : e("button", {
                                        staticClass:
                                          "btn btn-primary float-right",
                                        attrs: { type: "submit" },
                                        domProps: {
                                          innerHTML: t._s(t.saveNextBtn),
                                        },
                                        on: { click: t.handleSubmit },
                                      }),
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
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "463b6fc6",
          null
        ).exports),
      B = {
        name: "UniqueIdSetting",
        components: {},
        data: function () {
          return {
            patientdata: {},
            formLoader: !0,
            loading: !1,
            request_status: "off",
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.patientdata = this.defaultData()),
            this.edit(),
            this.getModule();
        },
        methods: {
          defaultData: function () {
            return {
              prefix_value: "",
              postfix_value: "",
              enable: !1,
              only_number: !1,
            };
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              Object(s.b)("patient_id_config", this.patientdata)
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
          edit: function () {
            var t = this;
            (this.formLoader = !0),
              Object(s.a)("edit_patient_id_config", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.patientdata = e.data.data),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
        formTranslation: function () {
          return this.$store.state.staticDataModule.langTranslateData;
        },
      },
      F = Object(h.a)(
        B,
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
                                          .patient_setting
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
                    : e(
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
                                                    id: "checkbox-1",
                                                    name: "checkbox-1",
                                                    switch: "",
                                                  },
                                                  on: {
                                                    change: t.handleSubmit,
                                                  },
                                                  model: {
                                                    value: t.patientdata.enable,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.patientdata,
                                                        "enable",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "patientdata.enable",
                                                  },
                                                },
                                                [
                                                  e("b", [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient
                                                            .patient_unique_setting
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
                            t.patientdata.enable
                              ? e("div", { staticClass: "col-md-12" }, [
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
                                                        id: "checkbox-only-number",
                                                        name: "checkbox-only-number",
                                                        switch: "",
                                                      },
                                                      model: {
                                                        value:
                                                          t.patientdata
                                                            .only_number,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.patientdata,
                                                            "only_number",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "patientdata.only_number",
                                                      },
                                                    },
                                                    [
                                                      e("b", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .patient
                                                                .only_number_in_patient_unique_id
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
                                ])
                              : t._e(),
                            t._v(" "),
                            t.patientdata.enable
                              ? e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-6" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "prefix_value" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.patient
                                                  .lbl_prefix
                                              ) + "\n                "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.patientdata.prefix_value,
                                              expression:
                                                "patientdata.prefix_value",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "prefix_value",
                                            name: "prefix_value",
                                          },
                                          domProps: {
                                            value: t.patientdata.prefix_value,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.patientdata,
                                                  "prefix_value",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    t.patientdata.enable
                                      ? e("div", { staticClass: "col-md-6" }, [
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
                                                    for: "postfix_value",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.patient
                                                        .lbl_postfix
                                                    ) + "\n                "
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
                                                      t.patientdata
                                                        .postfix_value,
                                                    expression:
                                                      "patientdata.postfix_value",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "postfix_value",
                                                  name: "postfix_value",
                                                },
                                                domProps: {
                                                  value:
                                                    t.patientdata.postfix_value,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.patientdata,
                                                        "postfix_value",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ])
                                      : t._e(),
                                  ]),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            t.patientdata.enable
                              ? e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "d-flex justify-content-end",
                                    },
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
                                                  "\n            "
                                              ),
                                            ]
                                          ),
                                    ]
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]
                      ),
                ]
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
    function $() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          H(
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
          : (H((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), H(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        H(u, "constructor", c),
        H(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        H(c, r, "GeneratorFunction"),
        H(u),
        H(u, r, "Generator"),
        H(u, i, function () {
          return this;
        }),
        H(u, "toString", function () {
          return "[object Generator]";
        }),
        ($ = function () {
          return { w: o, m: p };
        })()
      );
    }
    function H(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (H = function (t, e, n, i) {
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
            H(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function Y(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function U(t) {
      return (U =
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
    var X = {
        data: function () {
          return {
            moduleList: [],
            encounter_module: [],
            prescription_module: [],
            moduleConfigMessage: { module_config: "" },
            request_status: "0",
            formLoader: !0,
          };
        },
        mounted: function () {
          this.init();
        },
        filters: {
          moduleLabelFilter: function (t) {
            return t.replace("_", " ");
          },
        },
        components: { UniqueIdSetting: F },
        methods: {
          init: function () {
            this.getModules();
          },
          getModules: function () {
            var t = this;
            (this.formLoader = !0),
              Object(s.a)("module_list", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.moduleList = e.data.data),
                    window.request_data.proActive &&
                      null != e.data.encounter &&
                      null != U(e.data.encounter.status) &&
                      1 == e.data.encounter.status &&
                      (t.encounter_module = e.data.encounter.data),
                    window.request_data.proActive &&
                      null != e.data.prescriptionModules &&
                      null != U(e.data.prescriptionModules.status) &&
                      1 == e.data.prescriptionModules.status &&
                      (t.prescription_module =
                        e.data.prescriptionModules.data)),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getEncounterModules: function () {
            var t = this;
            Object(s.b)("encounter_module_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.encounter_module = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          getPrescriptionModules: function () {
            var t = this;
            Object(s.b)("prescription_module_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.prescription_module = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
          handleSubmit: function () {
            var t,
              e = this;
            return ((t = $().m(function t() {
              return $().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      return (
                        (t.n = 1),
                        Object(s.b)("module_save", {
                          modules: e.moduleList,
                          encounter_modules: e.encounter_module,
                          prescription_module: e.prescription_module,
                        })
                          .then(function (t) {
                            void 0 !== t.data.status &&
                              !0 === t.data.status &&
                              (displayMessage(t.data.message),
                              e.$store.dispatch(
                                "userDataModule/updateSetupStep",
                                e.currentStep
                              ),
                              e.$store.dispatch(
                                "userDataModule/fetchUserData"
                              ));
                          })
                          .catch(function (t) {
                            displayErrorMessage(
                              e.formTranslation.common.internal_server_error
                            );
                          })
                      );
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
                  Y(o, i, r, a, s, "next", t);
                }
                function s(t) {
                  Y(o, i, r, a, s, "throw", t);
                }
                a(void 0);
              });
            })();
          },
          saveSetting: function () {
            var t = this;
            Object(s.b)("module_save", {
              modules: this.moduleList,
              updateStep: !1,
              encounter_modules: this.encounter_module,
              prescription_module: this.prescription_module,
            })
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (displayMessage(e.data.message),
                  t.$store.dispatch("userDataModule/fetchUserData"));
              })
              .catch(function (e) {
                displayErrorMessage(
                  t.formTranslation.common.internal_server_error
                );
              });
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "configuration" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {},
      },
      V = Object(h.a)(
        X,
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
              : e(
                  "div",
                  [
                    t._l(t.moduleList, function (n, i) {
                      return e("div", { key: i, staticClass: "row mt-2" }, [
                        n.length > 0
                          ? e(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                e(
                                  "h4",
                                  {
                                    staticClass: "text-capitalize text-primary",
                                  },
                                  [t._v(t._s(t._f("moduleLabelFilter")(i)))]
                                ),
                                t._v(" "),
                                t._l(n, function (n, i) {
                                  return e(
                                    "div",
                                    { key: i, staticClass: "ml-3" },
                                    [
                                      e(
                                        "b-form-checkbox",
                                        {
                                          attrs: {
                                            "unchecked-value": "0",
                                            value: "1",
                                            name: "check-button",
                                          },
                                          model: {
                                            value: n.status,
                                            callback: function (e) {
                                              t.$set(n, "status", e);
                                            },
                                            expression: "value.status",
                                          },
                                        },
                                        [
                                          e("b", [
                                            t._v(" " + t._s(n.label) + " "),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  );
                                }),
                              ],
                              2
                            )
                          : t._e(),
                      ]);
                    }),
                    t._v(" "),
                    1 == t.userData.addOns.kiviPro
                      ? e("div", { staticClass: "row" }, [
                          e(
                            "div",
                            { staticClass: "col-md-12" },
                            [
                              e(
                                "h4",
                                { staticClass: "text-capitalize text-primary" },
                                [
                                  t._v(
                                    t._s(
                                      t.formTranslation.patient_encounter
                                        .encounter_module
                                    )
                                  ),
                                ]
                              ),
                              t._v(" "),
                              t._l(t.encounter_module, function (n, i) {
                                return e(
                                  "div",
                                  { key: i, staticClass: "ml-3" },
                                  t._l(n, function (n, i) {
                                    return e(
                                      "div",
                                      { key: i },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              "unchecked-value": "0",
                                              value: "1",
                                              name: "check-button",
                                            },
                                            model: {
                                              value: n.status,
                                              callback: function (e) {
                                                t.$set(n, "status", e);
                                              },
                                              expression: "en.status",
                                            },
                                          },
                                          [
                                            e("b", [
                                              t._v(" " + t._s(n.label) + " "),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                );
                              }),
                            ],
                            2
                          ),
                        ])
                      : t._e(),
                    t._v(" "),
                    e("br"),
                    t._v(" "),
                    1 == t.userData.addOns.kiviPro
                      ? e("div", { staticClass: "row" }, [
                          e(
                            "div",
                            { staticClass: "col-md-12" },
                            [
                              e(
                                "h4",
                                { staticClass: "text-capitalize text-primary" },
                                [
                                  t._v(
                                    t._s(
                                      t.formTranslation.reports
                                        .prescription_module
                                    )
                                  ),
                                ]
                              ),
                              t._v(" "),
                              t._l(t.prescription_module, function (n, i) {
                                return e(
                                  "div",
                                  { key: i, staticClass: "ml-3" },
                                  t._l(n, function (n, i) {
                                    return e(
                                      "div",
                                      { key: i },
                                      [
                                        e(
                                          "b-form-checkbox",
                                          {
                                            attrs: {
                                              "unchecked-value": "0",
                                              value: "1",
                                              name: "check-button",
                                            },
                                            model: {
                                              value: n.status,
                                              callback: function (e) {
                                                t.$set(n, "status", e);
                                              },
                                              expression: "en.status",
                                            },
                                          },
                                          [
                                            e("b", [
                                              t._v(" " + t._s(n.label) + " "),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                );
                              }),
                            ],
                            2
                          ),
                        ])
                      : t._e(),
                  ],
                  2
                ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      G = {
        name: "moduleConfig",
        components: { ModuleConfig: V },
        data: function () {
          return {
            loading: !1,
            cardTitle: "Configuration",
            moduleList: [],
            saveNextBtn:
              'Save & Next <i class="fa fa-angle-double-right" aria-hidden="true"></i>',
          };
        },
        mounted: function () {
          this.$emit("can-continue", { value: !0 }), this.init();
        },
        methods: {
          init: function () {
            this.getModules();
          },
          getModules: function () {
            var t = this;
            Object(s.a)("module_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.moduleList = e.data.data);
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              this.$refs.moduleConfiguration.handleSubmit().then(function () {
                t.loading = !0;
              });
          },
          handleNextClick: function () {
            this.$refs.moduleConfiguration.handleSubmit();
          },
          handlePrevClick: function () {
            this.$store.commit(
              "userDataModule/HANDLE_PREV_STEP",
              this.currentStep
            );
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "configuration" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
        },
      },
      K = Object(h.a)(
        G,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e("b-col", { attrs: { sm: "12", md: "12", lg: "12" } }, [
                e("div", { staticClass: "card p-0 shadow" }, [
                  e("div", { staticClass: "card-header" }, [
                    e("h3", { staticClass: "mb-0" }, [t._v(t._s(t.cardTitle))]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "card-body" }, [
                    e("div", { staticClass: "row" }, [
                      e(
                        "div",
                        { staticClass: "col-md-8" },
                        [e("ModuleConfig", { ref: "moduleConfiguration" })],
                        1
                      ),
                    ]),
                  ]),
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
                                on: { click: t.handlePrevClick },
                              },
                              [
                                e("i", {
                                  staticClass: "fa fa-angle-double-left",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                t._v(" Previous\n                        "),
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
                          : e("button", {
                              staticClass: "btn btn-primary float-right",
                              attrs: { type: "button" },
                              domProps: { innerHTML: t._s(t.saveNextBtn) },
                              on: { click: t.handleNextClick },
                            }),
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
        null,
        null
      ).exports,
      Z = {
        data: function () {
          return { tempColor: localStorage.getItem("temp_color") };
        },
        mounted: function () {
          var t = this;
          this.init(),
            setTimeout(function () {
              !0 === t.userData.addOns.kiviPro &&
                document.documentElement.style.setProperty(
                  "--primary",
                  t.getColor
                );
            }, 1e3);
        },
        methods: {
          init: function () {},
          handleActiveStep: function (t) {
            this.$store.commit("userDataModule/HANDLE_ACTIVE_STEP", t);
          },
        },
        computed: {
          setups: function () {
            return this.$store.state.userDataModule.setups;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          getColor: function () {
            return "" == this.tempColor || null == this.tempColor
              ? this.userData.theme_color
              : this.tempColor;
          },
        },
      },
      J = {
        name: "clinicSetup",
        components: {
          SetupWizard: Object(h.a)(
            Z,
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "b-row",
                [
                  e("b-col", { attrs: { sm: "12 text-center mb-3" } }, [
                    e("div", { staticClass: "card p-0 shadow m-0" }, [
                      e(
                        "div",
                        { staticClass: "card-body p-0" },
                        t._l(t.setups, function (n, i) {
                          return e(
                            "div",
                            {
                              key: i,
                              staticClass:
                                "d-inline-flex flex-row custom-stepper",
                            },
                            [
                              n.completed
                                ? e("div", { staticClass: "p-2 text-center" }, [
                                    e(
                                      "p",
                                      {
                                        staticClass: "stepper-icon",
                                        class:
                                          t.$route.name === n.routeName
                                            ? "bg-primary "
                                            : "bg-success",
                                      },
                                      [
                                        n.completed
                                          ? e("i", {
                                              staticClass: "fa fa-check",
                                            })
                                          : e("i", { class: n.icon }),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "h4",
                                      {
                                        class:
                                          t.$route.name === n.routeName
                                            ? "text-primary "
                                            : "text-success",
                                      },
                                      [t._v(t._s(n.title))]
                                    ),
                                  ])
                                : e("div", { staticClass: "p-2 text-center" }, [
                                    e(
                                      "p",
                                      {
                                        staticClass: "stepper-icon",
                                        class:
                                          t.$route.name === n.routeName
                                            ? "bg-primary "
                                            : "bg-light ",
                                      },
                                      [e("i", { class: n.icon })]
                                    ),
                                    t._v(" "),
                                    e(
                                      "h4",
                                      {
                                        class:
                                          t.$route.name === n.routeName
                                            ? "text-primary "
                                            : "text-light ",
                                      },
                                      [t._v(t._s(n.title))]
                                    ),
                                  ]),
                            ]
                          );
                        }),
                        0
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e(
                    "b-col",
                    { attrs: { sm: "12" } },
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
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          Footer: n(409).a,
        },
        data: function () {
          return {
            logoURL: "",
            clinicSetupSteps: [
              {
                icon: "description",
                name: "first",
                title: "Steps",
                subtitle: "Step detail",
                component: D,
                completed: !0,
              },
              {
                icon: "settings",
                name: "second",
                title: "Modules",
                subtitle: "Module Configuration",
                component: K,
                completed: !1,
              },
              {
                icon: "local_hospital",
                name: "third",
                title: "Clinic",
                subtitle: "Clinic detail",
                component: q,
                completed: !1,
              },
              {
                icon: "account_circle",
                name: "forth",
                title: "Doctors",
                subtitle: "Doctors Detail",
                component: j,
                completed: !1,
              },
              {
                icon: "query_builder",
                name: "fifth",
                title: "Timing",
                subtitle: "Clinic Session",
                component: R,
                completed: !1,
              },
            ],
            extraModule: {
              receptionist: {
                icon: "query_builder",
                name: "six",
                title: "Receptionist",
                subtitle: "Receptionist Detail",
                component: N,
                completed: !1,
              },
            },
            stepStatus: {},
            currentActiveStep: { index: 1, name: "second" },
            moduleList: [],
          };
        },
        mounted: function () {
          "setup" === this.$route.name &&
            this.$router.push({ name: "setup.step1" }),
            this.init();
        },
        methods: {
          init: function () {
            (this.logoURL =
              window.request_data.kiviCarePluginURL +
              "assets/images/logo-banner.png"),
              this.getModules();
          },
          defaultSetupSteps: function () {
            return {};
          },
          dbStatusUpdate: function () {},
          finishSetup: function (t) {
            var e = this;
            Object(s.b)("setup_finish", {})
              .then(function (t) {
                void 0 !== t.data.status && !0 === t.data.status
                  ? (localStorage.setItem("setup_status", !0),
                    e.$emit("visible", !0),
                    setTimeout(function () {
                      location.reload();
                    }, 1e3),
                    displayMessage(t.data.message))
                  : displayErrorMessage(t.data.message);
              })
              .catch(function (t) {
                (e.loading = !1), displayErrorMessage("Internal server error");
              });
          },
          getModules: function () {
            var t = this;
            Object(s.a)("module_list", {})
              .then(function (e) {
                if (void 0 !== e.data.status && !0 === e.data.status) {
                  var n = e.data.data;
                  t.removeDisableModule(n);
                }
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          removeDisableModule: function (t) {
            if (
              void 0 !== t.module_config &&
              ("receptionist" === t.module_config[0].name &&
                "0" === t.module_config[0].status &&
                this.clinicSetupSteps.splice(5, 1),
              "receptionist" === t.module_config[0].name &&
                "1" === t.module_config[0].status)
            ) {
              var e = this.clinicSetupSteps.filter(function (t) {
                return "six" === t.name;
              });
              (void 0 !== e && 0 !== e.length) ||
                this.clinicSetupSteps.push(this.extraModule.receptionist);
            }
          },
        },
      },
      Q = Object(h.a)(
        J,
        function () {
          var t = this._self._c;
          return t(
            "b-container",
            [
              t(
                "b-row",
                [
                  t(
                    "b-col",
                    {
                      staticClass: "my-4",
                      attrs: { sm: "12", md: "12", lg: "12" },
                    },
                    [
                      t("img", {
                        staticClass: "d-block mx-auto",
                        attrs: { src: this.logoURL, height: "80", alt: "..." },
                      }),
                    ]
                  ),
                  this._v(" "),
                  t(
                    "b-col",
                    {
                      staticClass: "float-right",
                      attrs: { sm: "12", md: "12", lg: "12" },
                    },
                    [t("SetupWizard")],
                    1
                  ),
                ],
                1
              ),
              this._v(" "),
              t("Footer"),
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
      tt = n(354).a,
      et = Object(h.a)(
        tt,
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
                                            t.formTranslation.static_data
                                              .listing_data
                                          ) + " "
                                        ),
                                        "off" == t.request_status
                                          ? e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#listing",
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
                                  t.kcCheckPermission("static_data_add")
                                    ? e(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "4", lg: "4" },
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-end",
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
                                                            .common.import_data
                                                        ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                              t._v(" "),
                                              e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  attrs: {
                                                    to: {
                                                      name: "static-data.create",
                                                    },
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.handleStaticDataForm(
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
                                                              .common
                                                              .close_form_btn
                                                          : t.formTranslation
                                                              .static_data
                                                              .add_list_data_btn
                                                      ) +
                                                      "\n                        "
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
                      ]),
                    },
                    [
                      t._v(" "),
                      t.userData.addOns.kiviPro &&
                      t.kcCheckPermission("static_data_add") &&
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
                                    t.formTranslation.static_data.dt_lbl_name,
                                  value: "name",
                                },
                                {
                                  label:
                                    t.formTranslation.static_data.dt_lbl_type,
                                  value: "type",
                                },
                              ],
                              module_name:
                                t.formTranslation.static_data.listing_data,
                              module_type: "static_data",
                            },
                            on: { reloadList: t.getStaticData },
                          })
                        : t._e(),
                      t._v(" "),
                      t.showAddForm
                        ? e("Create", {
                            attrs: { "static-id": t.staticId },
                            on: {
                              getStaticData: t.getStaticData,
                              closeForm: t.closeForm,
                            },
                          })
                        : t._e(),
                      t._v(" "),
                      t.showEditForm && t.staticId
                        ? e("Create", {
                            attrs: { "static-id": t.staticId },
                            on: {
                              getStaticData: t.getStaticData,
                              closeForm: t.closeForm,
                            },
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
                              e("div", { staticClass: "mb-0" }, [
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
                                  { attrs: { id: "printStaticData" } },
                                  [
                                    e(
                                      "vue-good-table",
                                      {
                                        ref: "dataTable",
                                        attrs: {
                                          columns: t.staticDataList.column,
                                          rows: t.staticDataList.data,
                                          mode: "remote",
                                          "search-options": {
                                            enabled: !0,
                                            placeholder:
                                              t.formTranslation.common
                                                .search_listing_data_global_placeholder,
                                          },
                                          totalRows: t.totalRows,
                                          "pagination-options": {
                                            enabled: !0,
                                            mode: "pages",
                                          },
                                          "select-options": {
                                            enabled:
                                              t.kcCheckPermission(
                                                "static_data_edit"
                                              ),
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
                                          "on-column-filter": t.onColumnFilter,
                                          "on-page-change": t.onPageChange,
                                          "on-per-page-change":
                                            t.onPerPageChange,
                                          "on-selected-rows-change": function (
                                            e
                                          ) {
                                            t.globalCheckboxApplyData.data = e;
                                          },
                                          "on-search": t.globalFilter,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "table-row",
                                            fn: function (n) {
                                              return [
                                                "status" == n.column.field
                                                  ? e(
                                                      "div",
                                                      { staticClass: "d-flex" },
                                                      [
                                                        t.kcCheckPermission(
                                                          "static_data_edit"
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
                                                                            "static_data",
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
                                                          : e(
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
                                                            ),
                                                      ],
                                                      1
                                                    )
                                                  : "actions" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        t.kcCheckPermission(
                                                          "static_data_edit"
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .clinic_schedule
                                                                      .dt_lbl_edit,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.editStaticData(
                                                                        n.row,
                                                                        n.row.id
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
                                                        "administrator" ==
                                                          t.getUserRole() &&
                                                        t.kcCheckPermission(
                                                          "static_data_delete"
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
                                                                    t
                                                                      .formTranslation
                                                                      .clinic_schedule
                                                                      .dt_lbl_dlt,
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.deleteListingData(
                                                                        n.row,
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
                                                        "\n                          " +
                                                          t._s(
                                                            n.formattedRow[
                                                              n.column.field
                                                            ]
                                                          ) +
                                                          "\n                        "
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
                                              "\n                          " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .no_data_found
                                                ) +
                                                "\n                        "
                                            ),
                                          ]
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
                                                              e.target.options,
                                                              function (t) {
                                                                return t.selected;
                                                              }
                                                            )
                                                            .map(function (t) {
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
                                                        [
                                                          t._v(
                                                            "\n                                " +
                                                              t._s(n.label) +
                                                              "\n                              "
                                                          ),
                                                        ]
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
                                                      click: function (e) {
                                                        t.helperGlobalAction(
                                                          t.globalCheckboxApplyData,
                                                          t.getStaticData,
                                                          function (e) {
                                                            return (t.pageLoader =
                                                              e);
                                                          }
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                              " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.apply
                                                        ) +
                                                        "\n                            "
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
                                          {
                                            attrs: { slot: "table-actions" },
                                            slot: "table-actions",
                                          },
                                          [
                                            t.kcCheckPermission(
                                              "static_data_export"
                                            )
                                              ? e("module-data-export", {
                                                  attrs: {
                                                    module_data:
                                                      t.staticDataList.data,
                                                    module_name:
                                                      t.formTranslation
                                                        .static_data
                                                        .listing_data,
                                                    module_type: "listing_data",
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
        null,
        null
      ).exports,
      nt = n(340),
      it = n(355).a,
      rt =
        (n(651),
        Object(h.a)(
          it,
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
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.service
                                                .service_list
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.kcCheckPermission("service_add")
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
                                                t.userData.addOns.kiviPro &&
                                                t.kivicareCompareVersion(
                                                  t.requireProVersion,
                                                  t.userData.pro_version
                                                )
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
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary",
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleServiceDataForm(
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
                                                      "\n                " +
                                                        t._s(
                                                          t.visible
                                                            ? t.formTranslation
                                                                .service
                                                                .close_form_btn
                                                            : t.formTranslation
                                                                .service
                                                                .add_service_btn
                                                        ) +
                                                        "\n              "
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
                        ]),
                      },
                      [
                        t._v(" "),
                        t.userData.addOns.kiviPro &&
                        t.kcCheckPermission("service_add") &&
                        t.kivicareCompareVersion(
                          t.requireProVersion,
                          t.userData.pro_version
                        )
                          ? e("module-data-import", {
                              ref: "module_data_import",
                              attrs: {
                                required_data: [
                                  {
                                    label: t.formTranslation.service.category,
                                    value: "category",
                                  },
                                  {
                                    label: t.formTranslation.service.name,
                                    value: "name",
                                  },
                                  {
                                    label: t.formTranslation.service.charges,
                                    value: "charges",
                                  },
                                  {
                                    label:
                                      t.formTranslation.service.doctor +
                                      " " +
                                      t.formTranslation.service.id,
                                    value: "doctor_id",
                                  },
                                ],
                                module_name: t.formTranslation.common.service,
                                module_type: "service",
                              },
                              on: { reloadList: t.getServiceData },
                            })
                          : t._e(),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            attrs: {
                              id: "static-data-add-tab",
                              visible: t.showAddForm,
                            },
                          },
                          [
                            t.showAddForm
                              ? e("Create", {
                                  attrs: { serviceId: -1 },
                                  on: {
                                    getServiceData: t.getServiceData,
                                    closeForm: t.closeForm,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-2",
                            attrs: {
                              id: "static-data-edit-tab",
                              visible: t.showEditForm,
                            },
                          },
                          [
                            t.serviceId && t.showEditForm
                              ? e("Create", {
                                  attrs: { serviceId: t.serviceId },
                                  on: {
                                    getServiceData: t.getServiceData,
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
                                e(
                                  "div",
                                  [
                                    e(
                                      "vue-good-table",
                                      {
                                        ref: "dataTable",
                                        attrs: {
                                          columns: t.serviceList.column,
                                          rows: t.serviceList.data,
                                          mode: "remote",
                                          "search-options": {
                                            enabled: !0,
                                            placeholder:
                                              t.formTranslation.common
                                                .search_service_field_data_global_placeholder,
                                          },
                                          totalRows: t.totalRows,
                                          "pagination-options": {
                                            enabled: !0,
                                            mode: "pages",
                                          },
                                          "select-options": {
                                            enabled:
                                              t.kcCheckPermission(
                                                "service_edit"
                                              ) ||
                                              t.kcCheckPermission(
                                                "service_delete"
                                              ),
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
                                          "on-column-filter": t.onColumnFilter,
                                          "on-page-change": t.onPageChange,
                                          "on-per-page-change":
                                            t.onPerPageChange,
                                          "on-search": t.globalFilter,
                                          "on-selected-rows-change": function (
                                            e
                                          ) {
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
                                                "service_type" === i.field
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
                                                                  .service_type,
                                                              expression:
                                                                "serverParams.columnFilters.service_type",
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
                                                                  t.serverParams
                                                                    .columnFilters,
                                                                  "service_type",
                                                                  e.target
                                                                    .multiple
                                                                    ? n
                                                                    : n[0]
                                                                );
                                                              },
                                                              function (e) {
                                                                return r(
                                                                  i,
                                                                  t.serverParams
                                                                    .columnFilters
                                                                    .service_type
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
                                                            t.serviceCategory,
                                                            function (n, i) {
                                                              return e(
                                                                "option",
                                                                {
                                                                  key: i,
                                                                  domProps: {
                                                                    value:
                                                                      n.value,
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(n.text)
                                                                  ),
                                                                ]
                                                              );
                                                            }
                                                          ),
                                                        ],
                                                        2
                                                      ),
                                                    ])
                                                  : "duration" === i.field
                                                  ? e(
                                                      "div",
                                                      [
                                                        e("VueTimepicker", {
                                                          attrs: {
                                                            id: "duration",
                                                            name: "duration",
                                                            "minute-interval": 5,
                                                          },
                                                          on: {
                                                            change: function (
                                                              e
                                                            ) {
                                                              return r(
                                                                i,
                                                                t.serverParams
                                                                  .columnFilters
                                                                  .duration
                                                              );
                                                            },
                                                          },
                                                          model: {
                                                            value:
                                                              t.serverParams
                                                                .columnFilters
                                                                .duration,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.serverParams
                                                                  .columnFilters,
                                                                "duration",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "serverParams.columnFilters.duration",
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
                                                "name" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex align-items-center position-relative",
                                                      },
                                                      [
                                                        "" != n.row.image &&
                                                        null != n.row.image
                                                          ? e("img", {
                                                              staticStyle: {
                                                                "border-radius":
                                                                  "50%",
                                                                "margin-right":
                                                                  "1rem",
                                                              },
                                                              attrs: {
                                                                src: n.row
                                                                  .image,
                                                                alt: "service_image",
                                                                height: "45px",
                                                                width: "45px",
                                                              },
                                                            })
                                                          : e("b-avatar", {
                                                              staticClass:
                                                                "mr-3",
                                                              attrs: {
                                                                variant:
                                                                  "primary",
                                                                text: t.getInitials(
                                                                  n.formattedRow
                                                                    .name
                                                                ),
                                                                size: "45px",
                                                              },
                                                            }),
                                                        t._v(
                                                          "\n                  " +
                                                            t._s(
                                                              n.formattedRow
                                                                .name
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                        "yes" ==
                                                        n.row.telemed_service
                                                          ? e("i", {
                                                              staticClass:
                                                                "fa fa-video kc-telemed-service",
                                                              attrs: {
                                                                title:
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .telemed,
                                                              },
                                                            })
                                                          : t._e(),
                                                      ],
                                                      1
                                                    )
                                                  : "status" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-start align-items-center",
                                                      },
                                                      [
                                                        t.kcCheckPermission(
                                                          "service_edit"
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
                                                                            "doctor_service",
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
                                                        e("div", [
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
                                                            : e(
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
                                                              ),
                                                        ]),
                                                      ],
                                                      1
                                                    )
                                                  : "actions" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        t.kcCheckPermission(
                                                          "service_edit"
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  type: "button",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .clinic_schedule
                                                                      .dt_lbl_edit,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.editServiceData(
                                                                        n.row,
                                                                        n.row.id
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
                                                          "service_delete"
                                                        ) &&
                                                        ![
                                                          "telemed",
                                                          "Telemed",
                                                        ].includes(n.row.name)
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
                                                                      return t.deleteServiceData(
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
                                                      ]
                                                    )
                                                  : "duration" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                  " +
                                                            t._s(
                                                              t.formatDuration(
                                                                n.row.duration
                                                              )
                                                            ) +
                                                            "\n                "
                                                        ),
                                                      ]
                                                    )
                                                  : e("div", [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(
                                                            n.formattedRow[
                                                              n.column.field
                                                            ]
                                                          ) +
                                                          "\n                "
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
                                              "\n                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .no_data_found
                                                ) +
                                                "\n              "
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
                                              "service_export"
                                            )
                                              ? e("module-data-export", {
                                                  attrs: {
                                                    module_data:
                                                      t.serviceList.data,
                                                    module_name:
                                                      t.formTranslation.service
                                                        .service_list,
                                                    module_type: "services",
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
                                                              e.target.options,
                                                              function (t) {
                                                                return t.selected;
                                                              }
                                                            )
                                                            .map(function (t) {
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
                                                      "\n                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.apply
                                                        ) +
                                                        "\n                  "
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
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      ot = n(138),
      at = n(356).a,
      st =
        (n(653),
        Object(h.a)(
          at,
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
                                        e("h3", { staticClass: "h3 mb-0" }, [
                                          t._v(
                                            t._s(
                                              t.formTranslation.doctor
                                                .doctors_list
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.kcCheckPermission("doctor_add")
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
                                                      "float-right btn btn-sm btn-primary rtl-left",
                                                    attrs: {
                                                      to: {
                                                        name: "doctor.create",
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
                                                            .doctor.add_doctor
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
                        t.userData.addOns.kiviPro &&
                        t.kcCheckPermission("doctor_add") &&
                        t.kivicareCompareVersion(
                          t.requireProVersion,
                          t.userData.pro_version
                        )
                          ? e("module-data-import", {
                              ref: "module_data_import",
                              attrs: {
                                required_data: [
                                  {
                                    label: t.formTranslation.doctor.first_name,
                                    value: "first_name",
                                  },
                                  {
                                    label: t.formTranslation.doctor.last_name,
                                    value: "last_name",
                                  },
                                  {
                                    label: t.formTranslation.doctor.email,
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
                                      t.formTranslation.doctor.doctor_contact,
                                    value: "contact",
                                  },
                                  {
                                    label: t.formTranslation.doctor.gender,
                                    value: "gender",
                                  },
                                  {
                                    label:
                                      t.formTranslation.doctor.specilization,
                                    value: "specialization",
                                  },
                                ],
                                module_name: t.formTranslation.common.doctors,
                                module_type: "doctor",
                              },
                              on: { reloadList: t.getDoctorList },
                            })
                          : t._e(),
                        t._v(" "),
                        t.doctorServiceOpen
                          ? e(
                              "ModalPopup",
                              {
                                attrs: {
                                  modalId: "doctor-list-modal",
                                  modalSize: "xl",
                                  openModal: t.doctorServiceOpen,
                                  modalTitle:
                                    t.formTranslation.common.service_add,
                                },
                                on: {
                                  closeModal: function (e) {
                                    t.doctorServiceOpen = !1;
                                  },
                                },
                              },
                              [
                                e("doctorService", {
                                  attrs: {
                                    props_doctor_id: t.serviceDoctorId,
                                    serviceId: -1,
                                  },
                                  on: {
                                    closeServiceModal: t.closeServiceModal,
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        t.doctorTelemedConfigurationModal
                          ? e(
                              "ModalPopup",
                              {
                                attrs: {
                                  modalId: "doctor-list-modal",
                                  modalSize: "lg",
                                  openModal: t.doctorTelemedConfigurationModal,
                                  modalTitle:
                                    t.formTranslation.widgets.zoom_config,
                                },
                                on: {
                                  closeModal: function (e) {
                                    t.doctorTelemedConfigurationModal = !1;
                                  },
                                },
                              },
                              [
                                t.doctorTelemedConfigurationLoader
                                  ? e(
                                      "div",
                                      { staticClass: "page-loader-section" },
                                      [e("loader-component-2")],
                                      1
                                    )
                                  : e("div", { staticClass: "m-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-5" }, [
                                          e(
                                            "form",
                                            {
                                              attrs: {
                                                id: "doctor_zoom_configuration",
                                                novalidate: !0,
                                              },
                                              on: {
                                                submit: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.handleZoomConfigurationSubmit.apply(
                                                      null,
                                                      arguments
                                                    )
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e("div", [
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
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "lg",
                                                                  name: "check-button",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    t.telemed
                                                                      .enableTeleMed,
                                                                  callback:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.$set(
                                                                        t.telemed,
                                                                        "enableTeleMed",
                                                                        e
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "telemed.enableTeleMed",
                                                                },
                                                              },
                                                              [
                                                                e(
                                                                  "span",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        top: "0px !important",
                                                                      },
                                                                  },
                                                                  [
                                                                    e("small", [
                                                                      t._v(
                                                                        "(" +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .status +
                                                                              ":" +
                                                                              ([
                                                                                "true",
                                                                                !0,
                                                                              ].includes(
                                                                                t
                                                                                  .telemed
                                                                                  .enableTeleMed
                                                                              )
                                                                                ? "On"
                                                                                : "Off")
                                                                          ) +
                                                                          ")"
                                                                      ),
                                                                    ]),
                                                                  ]
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
                                                t._v(" "),
                                                ["true", !0].includes(
                                                  t.telemed.enableTeleMed
                                                )
                                                  ? e("div", [
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
                                                                    "label",
                                                                    {
                                                                      staticClass:
                                                                        "form-control-label",
                                                                      attrs: {
                                                                        for: "api_key",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .doctor
                                                                            .api_key
                                                                        ) + " "
                                                                      ),
                                                                      e(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "text-danger",
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(" "),
                                                                  e("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .telemed
                                                                              .api_key,
                                                                          expression:
                                                                            "telemed.api_key",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    class: {
                                                                      " is-invalid":
                                                                        t.telemedSubmitted &&
                                                                        t.$v
                                                                          .telemed
                                                                          .api_key
                                                                          .$error,
                                                                    },
                                                                    attrs: {
                                                                      type: "text",
                                                                      id: "api_key",
                                                                      placeholder:
                                                                        t
                                                                          .formTranslation
                                                                          .doctor
                                                                          .API_key_plh,
                                                                      name: "api_key",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .telemed
                                                                          .api_key,
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
                                                                              t.telemed,
                                                                              "api_key",
                                                                              e
                                                                                .target
                                                                                .value
                                                                            );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v(" "),
                                                                  t.telemedSubmitted &&
                                                                  !t.$v.telemed
                                                                    .api_key
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
                                                                                .api_key_required
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
                                                                    "form-group",
                                                                },
                                                                [
                                                                  e(
                                                                    "label",
                                                                    {
                                                                      staticClass:
                                                                        "form-control-label",
                                                                      attrs: {
                                                                        for: "api_secret",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .doctor
                                                                            .api_secret
                                                                        ) + " "
                                                                      ),
                                                                      e(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "text-danger",
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(" "),
                                                                  e("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .telemed
                                                                              .api_secret,
                                                                          expression:
                                                                            "telemed.api_secret",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    class: {
                                                                      " is-invalid":
                                                                        t.telemedSubmitted &&
                                                                        t.$v
                                                                          .telemed
                                                                          .api_secret
                                                                          .$error,
                                                                    },
                                                                    attrs: {
                                                                      type: "text",
                                                                      id: "api_secret",
                                                                      placeholder:
                                                                        t
                                                                          .formTranslation
                                                                          .doctor
                                                                          .API_secret_plh,
                                                                      name: "api_secret",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .telemed
                                                                          .api_secret,
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
                                                                              t.telemed,
                                                                              "api_secret",
                                                                              e
                                                                                .target
                                                                                .value
                                                                            );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v(" "),
                                                                  t.telemedSubmitted &&
                                                                  !t.$v.telemed
                                                                    .api_secret
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
                                                                                .api_secret_required
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
                                                        ]
                                                      ),
                                                    ])
                                                  : t._e(),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "row mt-4" },
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
                                                              "d-flex justify-content-start",
                                                          },
                                                          [
                                                            e(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-primary btn-sm",
                                                                attrs: {
                                                                  type: "submit",
                                                                  disabled:
                                                                    t.telemedFormLoader,
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  class:
                                                                    t.telemedFormLoader
                                                                      ? "fa fa-sync fa-spin"
                                                                      : "fa fa-save",
                                                                }),
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t.telemedFormLoader
                                                                        ? t
                                                                            .formTranslation
                                                                            .common
                                                                            .loading
                                                                        : t
                                                                            .formTranslation
                                                                            .common
                                                                            .test_and_save
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
                                                                  "btn btn-outline-primary btn-sm",
                                                                attrs: {
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    t.telemedConfigurationModalClose,
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
                                              ]),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        ["true", !0].includes(
                                          t.telemed.enableTeleMed
                                        )
                                          ? e(
                                              "div",
                                              { staticClass: "col-md-7" },
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
                                                          "h4",
                                                          {
                                                            staticClass:
                                                              "text-primary mb-3",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .doctor
                                                                  .zoom_configuration_guide
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group",
                                                  [
                                                    e("b-list-group-item", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.zoom_step1
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
                                                            "\n                    " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .doctor
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
                                                            .doctor.zoom_step2
                                                        ) +
                                                          "\n                  "
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
                                                                .doctor
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
                                                          t.formTranslation
                                                            .doctor.zoom_step3
                                                        )
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("b-list-group-item", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.zoom_step4
                                                        ) + "\n                "
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("b-list-group-item", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.zoom_step5
                                                        ) + "\n                "
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
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        t.doctorCustomFormModal
                          ? e("CustomForm", {
                              attrs: {
                                data: t.doctorCustomFormData,
                                viewMode: t.doctorCustomFormViewMode,
                                customFormModal: t.doctorCustomFormModal,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.doctorCustomFormModal = !1;
                                },
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        t.appointmentReviewModal
                          ? e("AppointmentReviewCard", {
                              attrs: {
                                appointmentDetails: {},
                                doctor_id: t.select_doctor_id,
                                appointmentReviewModal:
                                  t.appointmentReviewModal,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.appointmentReviewModal = !1;
                                },
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        t.verifyPopupModal
                          ? e(
                              "ModalPopup",
                              {
                                attrs: {
                                  modalId: "verifymodal",
                                  modalSize: "lg",
                                  openModal: t.verifyPopupModal,
                                  modalTitle: t.formTranslation.common.verified,
                                },
                                on: {
                                  closeModal: function (e) {
                                    t.verifyPopupModal = !1;
                                  },
                                },
                              },
                              [
                                e("div", { staticClass: "m-2" }, [
                                  e(
                                    "div",
                                    { staticClass: "row border-bottom p-2" },
                                    [
                                      e("div", { staticClass: "col-6" }, [
                                        e("p", { staticClass: "mb-0" }, [
                                          e(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .dt_lbl_name
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.verifyModalData.display_name
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-6" }, [
                                        e("p", { staticClass: "mb-0" }, [
                                          e(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_no
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.verifyModalData.mobile_number
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "row border-bottom p-2" },
                                    [
                                      e("div", { staticClass: "col-12" }, [
                                        e("p", { staticClass: "mb-0" }, [
                                          e(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .email
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.verifyModalData.user_email
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "row border-bottom p-2" },
                                    [
                                      e("div", { staticClass: "col-6" }, [
                                        e("p", { staticClass: "mb-0" }, [
                                          e(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.clinic
                                                      .clinic
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.verifyModalData.clinic_name
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-6" }, [
                                        e("p", { staticClass: "mb-0" }, [
                                          e(
                                            "span",
                                            { staticClass: "font-weight-bold" },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.formTranslation.patient
                                                      .reg_date
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                t.verifyModalData
                                                  .user_registered_formated
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "row" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "col-12 d-flex justify-content-end",
                                      },
                                      [
                                        e(
                                          "button",
                                          {
                                            staticClass: "btn btn-primary mt-2",
                                            attrs: {
                                              disabled: t.verifyButtonLoading,
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.verifyUser(
                                                  t.verifyModalData
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(
                                                  t.verifyButtonLoading
                                                    ? t.formTranslation.common
                                                        .loading
                                                    : t.formTranslation.common
                                                        .verified +
                                                        " " +
                                                        t.formTranslation
                                                          .service.dt_lbl_doctor
                                                ) +
                                                "\n              "
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
                                  { attrs: { id: "doctorPrint" } },
                                  [
                                    e(
                                      "vue-good-table",
                                      {
                                        ref: "dataTable",
                                        attrs: {
                                          columns: t.doctorsList.column,
                                          rows: t.doctorsList.data,
                                          mode: "remote",
                                          "search-options": {
                                            enabled: !0,
                                            placeholder:
                                              t.formTranslation.common
                                                .search_doctor_global_placeholder,
                                          },
                                          totalRows: t.totalRows,
                                          "pagination-options": {
                                            enabled: !0,
                                            mode: "pages",
                                          },
                                          styleClass: "vgt-table striped",
                                          "select-options": {
                                            enabled:
                                              t.kcCheckPermission(
                                                "doctor_edit"
                                              ) ||
                                              t.kcCheckPermission(
                                                "doctor_resend_credential"
                                              ) ||
                                              t.kcCheckPermission(
                                                "doctor_delete"
                                              ),
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
                                          "compact-mode": "",
                                        },
                                        on: {
                                          "on-sort-change": t.onSortChange,
                                          "on-column-filter": t.onColumnFilter,
                                          "on-page-change": t.onPageChange,
                                          "on-per-page-change":
                                            t.onPerPageChange,
                                          "on-search": t.globalFilter,
                                          "on-selected-rows-change": function (
                                            e
                                          ) {
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
                                                "specialties" === i.field
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
                                                                  .specialties,
                                                              expression:
                                                                "serverParams.columnFilters.specialties",
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
                                                                  t.serverParams
                                                                    .columnFilters,
                                                                  "specialties",
                                                                  e.target
                                                                    .multiple
                                                                    ? n
                                                                    : n[0]
                                                                );
                                                              },
                                                              function (e) {
                                                                return r(
                                                                  i,
                                                                  t.serverParams
                                                                    .columnFilters
                                                                    .specialties
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
                                                            t.specialization,
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
                                                                      "\n                    "
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
                                                "display_name" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex align-items-center",
                                                      },
                                                      [
                                                        "" !=
                                                          n.row.profile_image &&
                                                        null !=
                                                          n.row.profile_image
                                                          ? e("img", {
                                                              staticStyle: {
                                                                "border-radius":
                                                                  "50%",
                                                                "margin-right":
                                                                  "1rem",
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
                                                              staticClass:
                                                                "mr-3",
                                                              attrs: {
                                                                variant:
                                                                  "primary",
                                                                text: t.getInitials(
                                                                  n.formattedRow
                                                                    .display_name
                                                                ),
                                                                size: "45px",
                                                              },
                                                            }),
                                                        t._v(
                                                          "\n                  " +
                                                            t._s(
                                                              n.formattedRow
                                                                .display_name
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : "specialties" ==
                                                    n.column.field
                                                  ? e("div", [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(
                                                            t.getSpeciality(
                                                              n.row.specialties
                                                            )
                                                          ) +
                                                          "\n                "
                                                      ),
                                                    ])
                                                  : "user_status" ==
                                                    n.column.field
                                                  ? e(
                                                      "div",
                                                      { staticClass: "d-flex" },
                                                      [
                                                        "no" !==
                                                          n.row
                                                            .user_deactivate &&
                                                        t.kcCheckPermission(
                                                          "doctor_edit"
                                                        )
                                                          ? e(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  name: "check-button",
                                                                  switch: "",
                                                                  value: "0",
                                                                  size: "lg",
                                                                  "unchecked-value":
                                                                    "1",
                                                                  id:
                                                                    "status_change_" +
                                                                    n.row.ID,
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.changeModuleValueStatus(
                                                                        {
                                                                          module_type:
                                                                            "doctors",
                                                                          id: n
                                                                            .row
                                                                            .ID,
                                                                          value:
                                                                            n
                                                                              .row
                                                                              .user_status,
                                                                        }
                                                                      );
                                                                    },
                                                                },
                                                                model: {
                                                                  value:
                                                                    n.row
                                                                      .user_status,
                                                                  callback:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.$set(
                                                                        n.row,
                                                                        "user_status",
                                                                        e
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "props.row.user_status",
                                                                },
                                                              }
                                                            )
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
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .active
                                                                    ) +
                                                                    "\n                  "
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
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .inactive +
                                                                        ("no" ==
                                                                        n.row
                                                                          .user_deactivate
                                                                          ? " (" +
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .not_verified +
                                                                            ")"
                                                                          : "")
                                                                    ) +
                                                                    " "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ],
                                                      1
                                                    )
                                                  : "actions" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        t.kcCheckPermission(
                                                          "doctor_edit"
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
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .edit,
                                                                  to: {
                                                                    name: "doctor.edit",
                                                                    params: {
                                                                      id: n.row
                                                                        .ID,
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
                                                          "doctor_resend_credential"
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
                                                                    t
                                                                      .formTranslation
                                                                      .receptionist
                                                                      .resend_credential,
                                                                  id:
                                                                    "resend_" +
                                                                    n.row.ID,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
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
                                                          "doctor_session_add"
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
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .add_session,
                                                                  to: {
                                                                    name: "doctor-session.create",
                                                                    params: {
                                                                      id: n.row
                                                                        .ID,
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-calendar",
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "service_add"
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .service_add,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.addService(
                                                                        n.row.ID
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-server",
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        "no" ==
                                                          n.row
                                                            .user_deactivate &&
                                                        "administrator" ===
                                                          t.getUserRole()
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .verify,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      (t.verifyPopupModal =
                                                                        !0),
                                                                        (t.verifyModalData =
                                                                          n.row);
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fas fa-check-circle",
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        1 ==
                                                          t.userData.addOns
                                                            .kiviPro &&
                                                        t.kcCheckPermission(
                                                          "patient_review_get"
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
                                                                staticClass:
                                                                  "btn-sm",
                                                                attrs: {
                                                                  variant:
                                                                    "outline-success",
                                                                  id:
                                                                    "doctor_rating" +
                                                                    n.row.ID,
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .patient_review,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      (t.select_doctor_id =
                                                                        n.row.ID),
                                                                        (t.appointmentReviewModal =
                                                                          !0);
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-star",
                                                                  attrs: {
                                                                    "aria-hidden":
                                                                      "true",
                                                                  },
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t._l(
                                                          n.row.custom_forms,
                                                          function (i, r) {
                                                            return 1 ==
                                                              t.userData.addOns
                                                                .kiviPro &&
                                                              t.customFormCondition(
                                                                n.row,
                                                                i
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
                                                                    key: r,
                                                                    staticClass:
                                                                      "btn btn-sm btn-outline-primary",
                                                                    attrs: {
                                                                      title:
                                                                        i.name &&
                                                                        i.name
                                                                          .text
                                                                          ? i
                                                                              .name
                                                                              .text
                                                                          : "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
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
                                                                        i.name
                                                                          .icon
                                                                          ? i
                                                                              .name
                                                                              .icon
                                                                          : "fas fa-book-medical",
                                                                    }),
                                                                  ]
                                                                )
                                                              : t._e();
                                                          }
                                                        ),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "doctor_delete"
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
                                                                    t
                                                                      .formTranslation
                                                                      .clinic_schedule
                                                                      .dt_lbl_dlt,
                                                                  id:
                                                                    "user_delete_" +
                                                                    n.index +
                                                                    1,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.deleteDoctorData(
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
                                                      ],
                                                      2
                                                    )
                                                  : e("div", [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(
                                                            "display_name" ==
                                                              n.column.field
                                                              ? ""
                                                              : n.formattedRow[
                                                                  n.column.field
                                                                ]
                                                          ) +
                                                          "\n                "
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
                                              "\n                " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .no_data_found
                                                ) +
                                                "\n              "
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
                                            t.kcCheckPermission("doctor_export")
                                              ? e("module-data-export", {
                                                  attrs: {
                                                    module_data:
                                                      t.doctorsList.data,
                                                    module_name:
                                                      t.formTranslation.doctor
                                                        .doctors_list,
                                                    module_type: "doctor",
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
                                                              e.target.options,
                                                              function (t) {
                                                                return t.selected;
                                                              }
                                                            )
                                                            .map(function (t) {
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
                                                      "\n                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.apply
                                                        ) +
                                                        "\n                  "
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
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      lt = n(357).a,
      ct =
        (n(657),
        Object(h.a)(
          lt,
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
                          attrs: {
                            id: "doctorDataForm",
                            name: "doctorDataForm",
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
                                                    t.$route.params.id
                                                      ? t.formTranslation.doctor
                                                          .edit_doctor
                                                      : t.formTranslation.doctor
                                                          .add_doctor
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
                                                  e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: { type: "button" },
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
                                                          "\n                    "
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
                                                            "\n                    "
                                                        ),
                                                      ]
                                                    )
                                                  : e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-primary rtl-ml-2",
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
                                                                .doctor.save_btn
                                                            ) +
                                                            "\n                    "
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
                                                      "\n                      " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.cancel
                                                        ) +
                                                        "\n                    "
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
                                    "h2",
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
                                          t._s(t.formTranslation.common.fname)
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
                                          value: t.doctorData.first_name,
                                          expression: "doctorData.first_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.first_name.$error,
                                      },
                                      attrs: {
                                        id: "first_name",
                                        placeholder:
                                          t.formTranslation.doctor.doctor_name,
                                        required: "required",
                                        name: "first_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.first_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "first_name",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.submitted &&
                                    !t.$v.doctorData.first_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .fname_required
                                              ) + "\n                  "
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
                                        attrs: { for: "last_name" },
                                      },
                                      [
                                        t._v(
                                          "\n                    " +
                                            t._s(t.formTranslation.common.lname)
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
                                          value: t.doctorData.last_name,
                                          expression: "doctorData.last_name",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.last_name.$error,
                                      },
                                      attrs: {
                                        id: "last_name",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .lname_placeholder,
                                        required: "required",
                                        name: "last_name",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.last_name,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
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
                                    !t.$v.doctorData.last_name.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .lname_required
                                                ) +
                                                "\n                  "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.doctorData.last_name.minLength &&
                                          t.$v.doctorData.last_name.maxLength)
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
                                                "\n                  "
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
                                        attrs: { for: "id_number" },
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
                                          value: t.doctorData.username,
                                          expression: "doctorData.username",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.username.$error,
                                      },
                                      attrs: {
                                        id: "id_number",
                                        placeholder: "Ingrese cédula",
                                        required: "required",
                                        name: "id_number",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.username,
                                      },
                                      on: {
                                        input: function (e) {
                                          if (!e.target.composing) {
                                            var n = e.target.value.replace(
                                              /\D+/g,
                                              ""
                                            );
                                            t.$set(t.doctorData, "username", n),
                                              (void 0 === t.doctorData.ID ||
                                                null === t.doctorData.ID ||
                                                "" === t.doctorData.ID) &&
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
                                    !t.$v.doctorData.username.required
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
                                          value: t.doctorData.user_email,
                                          expression: "doctorData.user_email",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.doctorData.user_email.$error,
                                      },
                                      attrs: {
                                        id: "email",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .email_placeholder,
                                        required: "required",
                                        name: "user_email",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.user_email,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
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
                                    !t.$v.doctorData.user_email.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .email_required
                                              ) + "\n                  "
                                            ),
                                          ]
                                        )
                                      : t.submitted &&
                                        !t.$v.doctorData.user_email
                                          .emailValidate
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .invalid_email
                                              ) + "\n                  "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                1 == t.userData.addOns.kiviPro &&
                                "administrator" == t.getUserRole()
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
                                                "\n                          " +
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
                                                t.formTranslation.doctor
                                                  .tag_select_clinic_plh,
                                              id: "clinic_id",
                                              placeholder:
                                                t.formTranslation.doctor
                                                  .search_placeholder,
                                              label: "label",
                                              "track-by": "id",
                                              options: t.clinics,
                                              multiple: !0,
                                              taggable: !0,
                                              loading:
                                                t.clinicMultiselectLoader,
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
                                                            t.formTranslation
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
                                              value: t.doctorData.clinic_id,
                                              callback: function (e) {
                                                t.$set(
                                                  t.doctorData,
                                                  "clinic_id",
                                                  e
                                                );
                                              },
                                              expression:
                                                "doctorData.clinic_id",
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.doctorData.clinic_id.required
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
                                                        .clinic_is_required
                                                    ) + "\n                  "
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
                                      e("VuePhoneNumberInput", {
                                        attrs: {
                                          id: "mobile_number",
                                          "default-country-code":
                                            t.defaultCountryCode,
                                          clearable: "",
                                          "no-example": "",
                                        },
                                        on: { update: t.contactUpdateHandaler },
                                        model: {
                                          value: t.doctorData.mobile_number,
                                          callback: function (e) {
                                            t.$set(
                                              t.doctorData,
                                              "mobile_number",
                                              e
                                            );
                                          },
                                          expression:
                                            " doctorData.mobile_number ",
                                        },
                                      }),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.doctorData.mobile_number.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n                    " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_num_required
                                                  ) +
                                                  "\n                  "
                                              ),
                                            ]
                                          )
                                        : !t.submitted ||
                                          (t.$v.doctorData.mobile_number
                                            .minLength &&
                                            t.$v.doctorData.mobile_number
                                              .maxLength)
                                        ? t._e()
                                        : e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .contact_validation_1
                                                ) + "\n                  "
                                              ),
                                            ]
                                          ),
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
                                        attrs: { for: "dob" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.dob) +
                                            ". \n                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.doctorData.dob,
                                          expression: "doctorData.dob",
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
                                      domProps: { value: t.doctorData.dob },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "dob",
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
                                e("div", { staticClass: "col-md-8" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-6" }, [
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "specialization" },
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
                                                t.$v.doctorData.specialties
                                                  .$error,
                                            },
                                            attrs: {
                                              "deselect-label": "",
                                              "select-label": "",
                                              id: "specialization",
                                              "tag-placeholder":
                                                t.formTranslation.doctor
                                                  .tag_doc_sp_plh,
                                              placeholder:
                                                t.formTranslation.doctor
                                                  .add_sp_plh,
                                              label: "label",
                                              "track-by": "id",
                                              options: t.doctorSpecialization,
                                              multiple: !0,
                                              taggable: !0,
                                              loading:
                                                t.specializationMultiselectLoader,
                                            },
                                            on: { tag: t.addNewSpecialization },
                                            scopedSlots: t._u([
                                              {
                                                key: "noResult",
                                                fn: function () {
                                                  return [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common
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
                                              value: t.doctorData.specialties,
                                              callback: function (e) {
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
                                          !t.$v.doctorData.specialties.required
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
                                                        t.formTranslation.doctor
                                                          .doctor_specialization_required
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
                                    e("div", { staticClass: "col-md-6" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "no_of_experience" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .experience_year
                                              ) + " "
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
                                                t.doctorData.no_of_experience,
                                              expression:
                                                "doctorData.no_of_experience",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "number",
                                            name: "no_of_experience",
                                            id: "no_of_experience",
                                            placeholder:
                                              t.formTranslation.doctor
                                                .experience_plh,
                                          },
                                          domProps: {
                                            value:
                                              t.doctorData.no_of_experience,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.doctorData,
                                                  "no_of_experience",
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
                                            attrs: { for: "gender" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.gender
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
                                        e("div", { staticClass: "col-md-12" }, [
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
                                                    value: t.doctorData.gender,
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
                                                    t.doctorData.gender,
                                                    "male"
                                                  ),
                                                },
                                                on: {
                                                  change: function (e) {
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
                                                  attrs: { for: "male" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
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
                                                    rawName: "v-model",
                                                    value: t.doctorData.gender,
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
                                                  value: "female",
                                                },
                                                domProps: {
                                                  checked: t._q(
                                                    t.doctorData.gender,
                                                    "female"
                                                  ),
                                                },
                                                on: {
                                                  change: function (e) {
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
                                                  attrs: { for: "female" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
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
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.doctorData.gender,
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
                                                      value: "other",
                                                    },
                                                    domProps: {
                                                      checked: t._q(
                                                        t.doctorData.gender,
                                                        "other"
                                                      ),
                                                    },
                                                    on: {
                                                      change: function (e) {
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
                                              )
                                            : t._e(),
                                        ]),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.doctorData.gender.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .gender_required
                                                  ) + "\n                      "
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
                                              attrs: { for: "status" },
                                            },
                                            [
                                              t._v(
                                                "\n                          " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .status
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
                                            "b-select",
                                            {
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.doctorData.user_status
                                                    .$error,
                                              },
                                              attrs: {
                                                name: "status",
                                                id: "status",
                                              },
                                              model: {
                                                value: t.doctorData.user_status,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.doctorData,
                                                    "user_status",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "doctorData.user_status",
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
                                                          .appointments
                                                          .select_status
                                                      )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "option",
                                                { attrs: { value: "0" } },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .active
                                                      )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e(
                                                "option",
                                                { attrs: { value: "1" } },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .inactive
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.doctorData.user_status.required
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
                                                        t.formTranslation
                                                          .appointments
                                                          .status_required
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
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
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
                                ]),
                              ]),
                              t._v(" "),
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
                                          attrs: { for: "signature" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common.signature
                                            ) + "\n                  "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.showCanvas
                                        ? e("vueSignature", {
                                            ref: "signature",
                                            attrs: {
                                              h: "100px",
                                              sigOption: t.signatureOption,
                                              defaultUrl:
                                                t.doctorData.signature,
                                            },
                                          })
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
                                        attrs: { for: "signature" },
                                      },
                                      [t._v(" \n                  ")]
                                    ),
                                    t._v(" "),
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary",
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.$refs.signature.undo()
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.undo)
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        on: {
                                          click: function (e) {
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
                                            t._s(t.formTranslation.common.clear)
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("hr"),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "description" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.appointments
                                                .description
                                            ) + "\n                  "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("vue-editor", {
                                        model: {
                                          value: t.doctorData.description,
                                          callback: function (e) {
                                            t.$set(
                                              t.doctorData,
                                              "description",
                                              e
                                            );
                                          },
                                          expression: "doctorData.description",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("hr"),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "h4",
                                    { staticClass: "text-primary mb-4" },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.doctor
                                            .address_details
                                        )
                                      ),
                                    ]
                                  ),
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
                                      ]
                                    ),
                                    t._v(" "),
                                    e("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.doctorData.address,
                                          expression: "doctorData.address",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "address",
                                        id: "address",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .address_placeholder,
                                      },
                                      domProps: { value: t.doctorData.address },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
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
                                e("div", { staticClass: "col-md-4" }, [
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
                                          ) + " "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.doctorData.country,
                                          expression: "doctorData.country",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "country",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .country_placeholder,
                                        name: "country",
                                        type: "text",
                                      },
                                      domProps: { value: t.doctorData.country },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "country",
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
                                        attrs: { for: "city" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.city)
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.doctorData.city,
                                          expression: "doctorData.city",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "city",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .city_placeholder,
                                        name: "city",
                                        type: "text",
                                      },
                                      domProps: { value: t.doctorData.city },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
                                              "city",
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
                                        attrs: { for: "postal_code" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.postal_code
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
                                          value: t.doctorData.postal_code,
                                          expression: "doctorData.postal_code",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "postal_code",
                                        placeholder:
                                          t.formTranslation.doctor
                                            .pcode_placeholder,
                                        name: "postal_code",
                                        type: "text",
                                      },
                                      domProps: {
                                        value: t.doctorData.postal_code,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.doctorData,
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
                              e("hr"),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "row" },
                                [
                                  e("div", { staticClass: "col-md-8" }, [
                                    e(
                                      "h4",
                                      { staticClass: "text-primary mb-3" },
                                      [t._v(t._s(t.qualificationTitle))]
                                    ),
                                  ]),
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
                                          e("button", {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName:
                                                  "v-b-toggle.qualification-add-tab",
                                                modifiers: {
                                                  "qualification-add-tab": !0,
                                                },
                                              },
                                            ],
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: { type: "button" },
                                            domProps: {
                                              innerHTML: t._s(
                                                t.qualificationBtn
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
                              t._v(" "),
                              e(
                                "b-collapse",
                                {
                                  staticClass: "mt-2",
                                  attrs: { id: "qualification-add-tab" },
                                },
                                [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "degree" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor.degree
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
                                              value: t.qualification.degree,
                                              expression:
                                                "qualification.degree",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.qualificationSubmitted &&
                                              t.$v.qualification.degree.$error,
                                          },
                                          attrs: {
                                            id: "degree",
                                            placeholder:
                                              t.formTranslation.doctor
                                                .degree_plh,
                                            name: "degree",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.qualification.degree,
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
                                        !t.$v.qualification.degree.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .degree_required
                                                  ) + "\n                    "
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
                                              "col-md-12 form-control-label",
                                            attrs: { for: "rif" },
                                          },
                                          [
                                            t._v(
                                              "\n                                            RIF "
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
                                          },
                                          domProps: { value: t.clinicData.rif },
                                          on: {
                                            input: function (e) {
                                              if (!e.target.composing) {
                                                var n = e.target.value
                                                  ? e.target.value
                                                      .toUpperCase()
                                                      .replace(/[^A-Z0-9]/g, "")
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
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [t._v(" El RIF es obligatorio ")]
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
                                            attrs: { for: "university" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .university
                                              )
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
                                              value: t.qualification.university,
                                              expression:
                                                "qualification.university",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.qualificationSubmitted &&
                                              t.$v.qualification.university
                                                .$error,
                                          },
                                          attrs: {
                                            id: "university",
                                            placeholder:
                                              t.formTranslation.doctor
                                                .university_plh,
                                            name: "university",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.qualification.university,
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
                                        !t.$v.qualification.university.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .university_required
                                                  ) + "\n                    "
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
                                              attrs: { for: "year" },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.doctor.year
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
                                            "b-select",
                                            {
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.qualificationSubmitted &&
                                                  t.$v.qualification.year
                                                    .$error,
                                              },
                                              attrs: {
                                                name: "year",
                                                id: "year",
                                              },
                                              model: {
                                                value: t.qualification.year,
                                                callback: function (e) {
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
                                                { attrs: { value: "" } },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.doctor
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
                                                      domProps: { value: n },
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
                                          !t.$v.qualification.year.required
                                            ? e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .year_required
                                                    ) + "\n                    "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
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
                                          t.loading
                                            ? e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
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
                                                        t.formTranslation.common
                                                          .loading
                                                      ) +
                                                      "\n                  "
                                                  ),
                                                ]
                                              )
                                            : e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: t.addQualification,
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
                                          t._v(" "),
                                          e(
                                            "button",
                                            {
                                              directives: [
                                                {
                                                  name: "b-toggle",
                                                  rawName:
                                                    "v-b-toggle.qualification-add-tab",
                                                  modifiers: {
                                                    "qualification-add-tab": !0,
                                                  },
                                                },
                                              ],
                                              staticClass:
                                                "btn btn-sm btn-outline-primary",
                                              attrs: { type: "button" },
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
                                    ]),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              e("div", { staticClass: "row mb-4 mt-3" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    { staticClass: "table-responsive mb-0" },
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
                                            { staticClass: "thead-light" },
                                            [
                                              e("tr", [
                                                e("th", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .sr_no
                                                    )
                                                  ),
                                                ]),
                                                t._v(" "),
                                                e("th", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .degree
                                                    )
                                                  ),
                                                ]),
                                                t._v(" "),
                                                e("th", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .college_university
                                                    )
                                                  ),
                                                ]),
                                                t._v(" "),
                                                e("th", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.doctor
                                                        .year
                                                    )
                                                  ),
                                                ]),
                                                t._v(" "),
                                                e("th", [
                                                  t._v(
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
                                          void 0 !==
                                            t.doctorData.qualifications &&
                                          t.doctorData.qualifications.length > 0
                                            ? e(
                                                "tbody",
                                                t._l(
                                                  t.doctorData.qualifications,
                                                  function (n, i) {
                                                    return e("tr", { key: i }, [
                                                      e("td", [
                                                        t._v(t._s(++i)),
                                                      ]),
                                                      t._v(" "),
                                                      e("td", [
                                                        t._v(t._s(n.degree)),
                                                      ]),
                                                      t._v(" "),
                                                      e("td", [
                                                        t._v(
                                                          t._s(n.university)
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e("td", [
                                                        t._v(t._s(n.year)),
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  type: "button",
                                                                  href: "#",
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
                                                                      return t.editQualification(
                                                                        i
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
                                                    { attrs: { colspan: "5" } },
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
                                                              t.formTranslation
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
                                ]),
                              ]),
                              t._v(" "),
                              t.teleMedEn
                                ? e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e("hr", { staticClass: "my-4" }),
                                    ]),
                                  ])
                                : t._e(),
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
                                                  .other_detail
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
                                                module_type: "doctor_module",
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
                                                module_type: "doctor_module",
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
          "5f7bbb85",
          null
        ).exports),
      dt = n(358).a,
      ut =
        (n(659),
        Object(h.a)(
          dt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { attrs: { id: "doctor_profile" } },
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
                        t.appointmentReviewModal
                          ? e("AppointmentReviewCard", {
                              attrs: {
                                appointmentDetails: {},
                                doctor_id: t.select_doctor_id,
                                appointmentReviewModal:
                                  t.appointmentReviewModal,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.appointmentReviewModal = !1;
                                },
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        e("b-col", { staticClass: "col-xl-9 order-xl-1" }, [
                          e(
                            "div",
                            { staticClass: "card" },
                            [
                              e(
                                "div",
                                { staticClass: "card-header pb-0 border-0" },
                                [
                                  e("div", { staticClass: "row" }, [
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
                                                  "editProfile" === t.viewMode,
                                              },
                                              on: {
                                                click: function (e) {
                                                  t.viewMode = "editProfile";
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            t._l(
                                              t.doctorData.custom_forms,
                                              function (n, i) {
                                                return (!n.conditions.role_id ||
                                                  0 ===
                                                    n.conditions.role_id
                                                      .length ||
                                                  n.conditions.role_id.some(
                                                    function (e) {
                                                      return t.$store.state.userDataModule.user.roles.includes(
                                                        e.id
                                                      );
                                                    }
                                                  )) &&
                                                  1 ==
                                                    t.userData.addOns.kiviPro &&
                                                  t.doctorData.custom_forms &&
                                                  t.doctorData.custom_forms
                                                    .length &&
                                                  t.customFormCondition(
                                                    t.doctorData,
                                                    n
                                                  )
                                                  ? e("b-tab", {
                                                      key: i,
                                                      attrs: {
                                                        title:
                                                          n.name && n.name.text
                                                            ? n.name.text
                                                            : "",
                                                        active:
                                                          t.viewMode ===
                                                          "custom_form_" + n.id,
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.viewMode =
                                                            "custom_form_" +
                                                            n.id;
                                                        },
                                                      },
                                                    })
                                                  : t._e();
                                              }
                                            ),
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              "editProfile" === t.viewMode
                                ? e(
                                    "form",
                                    {
                                      attrs: {
                                        id: "doctorDataForm",
                                        enctype: "multipart/form-data",
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
                                                            "\n                            " +
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
                                                              t.doctorData
                                                                .first_name,
                                                            expression:
                                                              "doctorData.first_name",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        class: {
                                                          " is-invalid":
                                                            t.submitted &&
                                                            t.$v.doctorData
                                                              .first_name
                                                              .$error,
                                                        },
                                                        attrs: {
                                                          id: "first_name",
                                                          placeholder:
                                                            t.formTranslation
                                                              .doctor.fname_plh,
                                                          required: "required",
                                                          name: "name",
                                                          type: "text",
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.doctorData
                                                              .first_name,
                                                        },
                                                        on: {
                                                          input: function (e) {
                                                            e.target
                                                              .composing ||
                                                              t.$set(
                                                                t.doctorData,
                                                                "first_name",
                                                                e.target.value
                                                              );
                                                          },
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      t.submitted &&
                                                      !t.$v.doctorData
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
                                                                  "\n                          "
                                                              ),
                                                            ]
                                                          )
                                                        : !t.submitted ||
                                                          (t.$v.doctorData
                                                            .first_name
                                                            .minLength &&
                                                            t.$v.doctorData
                                                              .first_name
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
                                                                      .fname_validation_2
                                                                  ) +
                                                                  "\n                          "
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
                                                { staticClass: "col-md-6" },
                                                [
                                                  e(
                                                    "div",
                                                    {
         