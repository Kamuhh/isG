// app.part21-de-30.js
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
                                                                .last_name
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
                                                                              .lname_required
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
                                                                    for: "email",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                          " +
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
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      t
                                                                        .patientData
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
                                                                    t.$v
                                                                      .patientData
                                                                      .user_email
                                                                      .$error,
                                                                },
                                                                attrs: {
                                                                  id: "email",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .patient
                                                                      .address_placeholder,
                                                                  required:
                                                                    "required",
                                                                  name: "email",
                                                                  type: "email",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .patientData
                                                                      .user_email,
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
                                                                          "user_email",
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
                                                                .user_email
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
                                                                            .email_required
                                                                        ) +
                                                                          "\n                        "
                                                                      ),
                                                                    ]
                                                                  )
                                                                : t.submitted &&
                                                                  !t.$v
                                                                    .patientData
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
                                                                          "\n                        "
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
                                                                    for: "telephone_no",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                          " +
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
                                                                    clearable:
                                                                      "",
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
                                                                      t
                                                                        .patientData
                                                                        .mobile_number,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.patientData,
                                                                          "mobile_number",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      " patientData.mobile_number ",
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
                                                                          "\n                        "
                                                                      ),
                                                                    ]
                                                                  )
                                                                : (t.submitted &&
                                                                    !t.$v
                                                                      .patientData
                                                                      .mobile_number
                                                                      .minLength) ||
                                                                  !t.$v
                                                                    .patientData
                                                                    .mobile_number
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
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .contact_validation_1
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
                                                      t.hideFields.includes(
                                                        "dob"
                                                      )
                                                        ? t._e()
                                                        : e(
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
                                                                        for: "dob",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .common
                                                                            .dob
                                                                        ) +
                                                                          ".\n                        "
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
                                                                              .patientData
                                                                              .dob,
                                                                          expression:
                                                                            "patientData.dob",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      type: "date",
                                                                      name: "doc_birthdate",
                                                                      id: "doc_birthdate",
                                                                      max: new Date()
                                                                        .toISOString()
                                                                        .slice(
                                                                          0,
                                                                          10
                                                                        ),
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .patientData
                                                                          .dob,
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
                                                                              t.patientData,
                                                                              "dob",
                                                                              e
                                                                                .target
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
                                                                    for: "clinic_id",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                          " +
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
                                                              e(
                                                                "multi-select",
                                                                {
                                                                  attrs: {
                                                                    "deselect-label":
                                                                      "",
                                                                    "select-label":
                                                                      "",
                                                                    "tag-placeholder":
                                                                      t
                                                                        .formTranslation
                                                                        .patient
                                                                        .tag_select_clinic_plh,
                                                                    id: "clinic_id",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .patient
                                                                        .search_placeholder,
                                                                    label:
                                                                      "label",
                                                                    loading:
                                                                      t.clinicMultiselectLoader,
                                                                    "track-by":
                                                                      "id",
                                                                    options:
                                                                      t.clinics,
                                                                    multiple:
                                                                      !0,
                                                                    taggable:
                                                                      !0,
                                                                  },
                                                                  scopedSlots:
                                                                    t._u(
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
                                                                          proxy:
                                                                            !0,
                                                                        },
                                                                      ],
                                                                      null,
                                                                      !1,
                                                                      1780630358
                                                                    ),
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .patientData
                                                                        .clinic_id,
                                                                    callback:
                                                                      function (
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
                                                                }
                                                              ),
                                                              t._v(" "),
                                                              t.submitted &&
                                                              !t.$v.patientData
                                                                .clinic_id
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
                                                                            .clinic_is_required
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
                                                      t.hideFields.includes(
                                                        "blood_group"
                                                      )
                                                        ? t._e()
                                                        : e(
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
                                                                        [
                                                                          t._v(
                                                                            "*"
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
                                                                        "col-md-12",
                                                                    },
                                                                    [
                                                                      e(
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
                                                                                  id: "male",
                                                                                  name: "gender",
                                                                                  value:
                                                                                    "male",
                                                                                },
                                                                              domProps:
                                                                                {
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
                                                                            }
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "label",
                                                                            {
                                                                              staticClass:
                                                                                "custom-control-label",
                                                                              attrs:
                                                                                {
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
                                                                                  id: "female",
                                                                                  name: "gender",
                                                                                  value:
                                                                                    "female",
                                                                                },
                                                                              domProps:
                                                                                {
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
                                                                            }
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "label",
                                                                            {
                                                                              staticClass:
                                                                                "custom-control-label",
                                                                              attrs:
                                                                                {
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
                                                                              t._v(
                                                                                " "
                                                                              ),
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
                                                                          t
                                                                            .patientData
                                                                            .blood_group,
                                                                        callback:
                                                                          function (
                                                                            e
                                                                          ) {
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
                                                                          attrs:
                                                                            {
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
                                                                                t._s(
                                                                                  n
                                                                                )
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
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              t.hideFields.includes(
                                                "address"
                                              ) &&
                                              t.hideFields.includes("city") &&
                                              t.hideFields.includes(
                                                "country"
                                              ) &&
                                              t.hideFields.includes(
                                                "postal_code"
                                              )
                                                ? t._e()
                                                : e("hr", {
                                                    staticClass: "my-4",
                                                  }),
                                              t._v(" "),
                                              t.hideFields.includes(
                                                "address"
                                              ) &&
                                              t.hideFields.includes("city") &&
                                              t.hideFields.includes(
                                                "country"
                                              ) &&
                                              t.hideFields.includes(
                                                "postal_code"
                                              )
                                                ? t._e()
                                                : e(
                                                    "h6",
                                                    {
                                                      staticClass:
                                                        "heading-small text-muted mb-4",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .contact_info
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
                                                      t.hideFields.includes(
                                                        "address"
                                                      )
                                                        ? t._e()
                                                        : e(
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
                                                                  e(
                                                                    "textarea",
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
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            t
                                                                              .patientData
                                                                              .address,
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
                                                                                t.patientData,
                                                                                "address",
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
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      t.hideFields.includes(
                                                        "city"
                                                      )
                                                        ? t._e()
                                                        : e(
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .patientData
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
                                                                        t
                                                                          .patientData
                                                                          .city,
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
                                                                              t.patientData,
                                                                              "city",
                                                                              e
                                                                                .target
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
                                                        "country"
                                                      )
                                                        ? t._e()
                                                        : e(
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .patientData
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
                                                                        t
                                                                          .patientData
                                                                          .country,
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
                                                                              t.patientData,
                                                                              "country",
                                                                              e
                                                                                .target
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .patientData
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
                                                                        t
                                                                          .patientData
                                                                          .postal_code,
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
                                                                              t.patientData,
                                                                              "postal_code",
                                                                              e
                                                                                .target
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
                                                      t.$store.state
                                                        .userDataModule.user
                                                        .addOns.kiviPro
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-4",
                                                            },
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
                                                                    "\n                        " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .choose_language
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(" "),
                                                              e(
                                                                "multi-select",
                                                                {
                                                                  attrs: {
                                                                    "deselect-label":
                                                                      "",
                                                                    "select-label":
                                                                      "",
                                                                    id: "choose_language",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .choose_language,
                                                                    label:
                                                                      "label",
                                                                    "track-by":
                                                                      "lang",
                                                                    options:
                                                                      t.kc_available_translations,
                                                                    multiple:
                                                                      !1,
                                                                  },
                                                                  scopedSlots:
                                                                    t._u(
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
                                                                          proxy:
                                                                            !0,
                                                                        },
                                                                      ],
                                                                      null,
                                                                      !1,
                                                                      1780630358
                                                                    ),
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .patientData
                                                                        .choose_language,
                                                                    callback:
                                                                      function (
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
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : t._e(),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              t.showCustomField
                                                ? e("div", [
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
                                                              .doctor
                                                              .extra_detail
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass: "pl-lg-4",
                                                      },
                                                      [
                                                        e(
                                                          "edit-custom-fields",
                                                          {
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
                                                          }
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ])
                                                : t._e(),
                                            ]
                                          ),
                                          t._v(" "),
                                          e(
                                            "div",
                                            { staticClass: "card-footer" },
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
                                                          "float-right",
                                                      },
                                                      [
                                                        !t.loading &&
                                                        t.kcCheckPermission(
                                                          "patient_edit"
                                                        )
                                                          ? e(
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
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .save
                                                                  ) +
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            )
                                                          : t.loading
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
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ])
                                      : t._e(),
                                    t._v(" "),
                                    "report" === t.currentRouteModule &&
                                    1 == t.userData.addOns.kiviPro &&
                                    t.kcCheckPermission("patient_report")
                                      ? e(
                                          "div",
                                          [
                                            e("patientReport", {
                                              attrs: {
                                                patient_profile_id:
                                                  t.$route.params.id,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    "appointment" === t.currentRouteModule &&
                                    1 == t.userData.addOns.kiviPro &&
                                    t.kcCheckPermission("appointment_list")
                                      ? e(
                                          "div",
                                          [
                                            e("Appointment", {
                                              attrs: {
                                                patient_profile_id:
                                                  t.$route.params.id,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t._l(
                                      t.patientData.custom_forms,
                                      function (n, i) {
                                        return t.currentRouteModule ===
                                          "custom_form_" + n.id
                                          ? e("div", { key: i }, [
                                              e(
                                                "div",
                                                { staticClass: "card-body" },
                                                [
                                                  e(
                                                    "div",
                                                    { staticClass: "pl-lg-4" },
                                                    [
                                                      t.currentRouteModule ===
                                                      "custom_form_" + n.id
                                                        ? e("CustomForm", {
                                                            attrs: {
                                                              data: t.customFormDataUpdate(
                                                                n,
                                                                t.patientData.ID
                                                              ),
                                                              viewMode: !1,
                                                              customFormModal:
                                                                t.currentRouteModule ===
                                                                "custom_form_" +
                                                                  n.id,
                                                              useModal: !1,
                                                            },
                                                          })
                                                        : t._e(),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ])
                                          : t._e();
                                      }
                                    ),
                                  ],
                                  2
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
            );
          },
          [],
          !1,
          null,
          "5e30814e",
          null
        ).exports),
      kt = n(143),
      St = n.n(kt),
      Tt = n(406),
      Dt = {
        name: "WidgetSetting",
        display: "Table",
        order: 8,
        components: { draggable: St.a, "chrome-color-picker": Tt.Chrome },
        data: function () {
          return {
            widgetConfigData: {},
            submitted: !1,
            listLoader: !0,
            dragging: !1,
            request_status: "off",
            dropDownOption: [
              { id: 1, label: "phone_email" },
              { id: 2, label: "show_phone_number" },
              { id: 3, label: "show_email_address" },
              { id: 4, label: "hide_contact_details" },
            ],
            loader: !1,
            widgetLoaderPreview: "",
            formLoader: !0,
            widgetListOrder: [],
            widgetLoader: "",
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.widgetLoader = this.formTranslation.common.no_file_chosen),
            (this.widgetConfigData = this.defaultWidgetData()),
            this.widgetEdit(),
            this.init(),
            this.getWidgetLoader(),
            this.getModule();
        },
        validations: {
          widgetConfigData: {
            showClinicImage: {},
            showClinicAddress: {},
            clinicContactDetails: {},
            showDoctorImage: {},
            showDoctorExperience: {},
            doctorContactDetails: {},
            showDoctorSpeciality: {},
            showDoctorDegree: {},
            showDoctorRating: {},
            showServiceImage: {},
            skip_service_when_single: {},
            showServicetype: {},
            showServicePrice: {},
            showServiceDuration: {},
            primaryColor: {},
            primaryHoverColor: {},
            secondaryColor: {},
            secondaryHoverColor: {},
            widget_print: {},
            afterWoocommerceRedirect: {},
            widgetLoader: {},
          },
        },
        methods: {
          init: function () {
            var t = this;
            this.dropDownOption = this.dropDownOption.map(function (e) {
              return (e.label = t.formTranslation.widget_setting[e.label]), e;
            });
          },
          checkMove: function (t) {
            return this.isDraggable(t.draggedContext);
          },
          isDraggable: function (t) {
            var e = t.index,
              n = t.futureIndex;
            return !(
              this.widgetConfigData.list[e].fixed ||
              this.widgetConfigData.list[n].fixed
            );
          },
          defaultWidgetData: function () {
            return {
              showClinicImage: "1",
              showClinicAddress: "1",
              clinicContactDetails: "",
              showDoctorImage: "1",
              showDoctorExperience: "1",
              doctorContactDetails: "",
              showDoctorSpeciality: "1",
              showDoctorDegree: "1",
              showDoctorRating: "1",
              showServiceImage: "1",
              skip_service_when_single: "0",
              showServicetype: "1",
              showServicePrice: "1",
              showServiceDuration: "1",
              primaryColor: "#7093e5",
              primaryHoverColor: "#948f8f",
              secondaryColor: "#f68685",
              secondaryHoverColor: "#df504e",
              widget_print: "1",
              afterWoocommerceRedirect: "1",
              list: [],
            };
          },
          getWidgetLoader: function () {
            var t = this;
            (this.formLoader = !0),
              Object(s.a)("get_widget_loader", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.widgetLoaderPreview = e.data.url),
                    (t.formLoader = !1);
                })
                .catch(function (e) {
                  t.formLoader = !1;
                });
          },
          uploadWidgetLoader: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.widgetLoaderPreview = n.url),
                (t.widgetLoader = n.filename),
                Object(s.b)("upload_widget_loader", { widget_loader: n.id })
                  .then(function (e) {
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.widgetLoaderPreview = e.data.data),
                        displayMessage(e.data.message))
                      : displayErrorMessage(e.data.message);
                  })
                  .catch(function (t) {});
            }),
              e.open();
          },
          handleSubmit: function () {
            var t = this;
            (this.submitted = !0),
              (this.loader = !0),
              this.$v.$touch(),
              this.$v.$invalid
                ? (this.loader = !1)
                : Object(I.n)("widgetSettingForm") &&
                  Object(s.b)("widget_setting_save", {
                    data: this.widgetConfigData,
                    list: this.widgetListOrder,
                  })
                    .then(function (e) {
                      (t.loader = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? displayMessage(e.data.message)
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loader = !1),
                        (t.submitted = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          widgetEdit: function () {
            var t = this;
            (this.formLoader = !0),
              Object(s.a)("get_widget_setting", {})
                .then(function (e) {
                  (t.formLoader = !1),
                    (t.listLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.widgetConfigData = e.data.data),
                      (t.widgetConfigData.list = e.data.widgetOrder)),
                    void 0 !== e.data.widgetOrder &&
                      e.data.widgetOrder.length > 0 &&
                      (t.widgetListOrder = e.data.widgetOrder);
                })
                .catch(function (e) {
                  (t.listLoader = !1),
                    (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          printStatusChange: function () {
            1 != this.widgetConfigData.widget_print &&
              (this.widgetConfigData.afterWoocommerceRedirect = !1);
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
          cssProps: function () {
            return { "--color-spinner": this.widgetConfigData.primaryColor };
          },
        },
        watch: {},
        formTranslation: function () {
          return this.$store.state.staticDataModule.langTranslateData;
        },
      },
      Lt =
        (n(672),
        Object(h.a)(
          Dt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { style: t.cssProps },
              [
                t.formLoader
                  ? e(
                      "div",
                      { staticClass: "page-loader-section" },
                      [e("loader-component-2")],
                      1
                    )
                  : e(
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
                          e("div", { staticClass: "col-md-12" }, [
                            e("h2", [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t.formTranslation.widget_setting
                                      .widget_setting
                                  ) +
                                  "\n            "
                              ),
                              "off" == t.request_status
                                ? e(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#widget-setting",
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
                        e(
                          "form",
                          {
                            attrs: {
                              id: "widgetSettingForm",
                              name: "widgetSettingForm",
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
                            1 == t.userData.addOns.kiviPro
                              ? e("div", { staticClass: "row p-2" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("h2", [
                                      t._v(
                                        "\n              " +
                                          t._s(
                                            t.formTranslation.widget_setting
                                              .clinic_setting
                                          ) +
                                          "\n            "
                                      ),
                                    ]),
                                  ]),
                                ])
                              : t._e(),
                            t._v(" "),
                            1 == t.userData.addOns.kiviPro
                              ? e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-4" }, [
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
                                                              id: "show-clinic-image",
                                                              name: "show-clinic-image",
                                                              switch: "",
                                                            },
                                                            model: {
                                                              value:
                                                                t
                                                                  .widgetConfigData
                                                                  .showClinicImage,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.widgetConfigData,
                                                                    "showClinicImage",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "widgetConfigData.showClinicImage",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .widget_setting
                                                                      .show_clinic_image
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
                                      e("div", { staticClass: "col-md-4" }, [
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
                                                              id: "show-clinic-address",
                                                              name: "show-clinic-address",
                                                              switch: "",
                                                            },
                                                            model: {
                                                              value:
                                                                t
                                                                  .widgetConfigData
                                                                  .showClinicAddress,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.widgetConfigData,
                                                                    "showClinicAddress",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "widgetConfigData.showClinicAddress",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .widget_setting
                                                                      .show_clinic_address
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
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .widget_setting
                                                      .contact_details
                                                  ) + " "
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
                                                    options: t.dropDownOption,
                                                    placeholder:
                                                      t.formTranslation.settings
                                                        .tag_plh_option,
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
                                                      t.widgetConfigData
                                                        .clinicContactDetails,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.widgetConfigData,
                                                        "clinicContactDetails",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "widgetConfigData.clinicContactDetails",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ])
                              : t._e(),
                            t._v(" "),
                            1 == t.userData.addOns.kiviPro
                              ? e("hr", { staticClass: "p-2 m-0" })
                              : t._e(),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.formTranslation.widget_setting
                                          .doctor_setting
                                      ) +
                                      "\n            "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-doctor-image",
                                                          name: "show-doctor-image",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showDoctorImage,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showDoctorImage",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showDoctorImage",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_doctor_image
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-doctor-experience",
                                                          name: "show-doctor-experience",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showDoctorExperience,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showDoctorExperience",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showDoctorExperience",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_doctor_experience
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
                                  e("div", { staticClass: "col-md-4" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "mode" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.widget_setting
                                                .contact_details
                                            ) + " "
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
                                              options: t.dropDownOption,
                                              placeholder:
                                                t.formTranslation.settings
                                                  .tag_plh_option,
                                            },
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
                                              value:
                                                t.widgetConfigData
                                                  .doctorContactDetails,
                                              callback: function (e) {
                                                t.$set(
                                                  t.widgetConfigData,
                                                  "doctorContactDetails",
                                                  e
                                                );
                                              },
                                              expression:
                                                "widgetConfigData.doctorContactDetails",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-doctor-speciality",
                                                          name: "show-doctor-speciality",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showDoctorSpeciality,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showDoctorSpeciality",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showDoctorSpeciality",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_doctor_speciality
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-doctor-degree",
                                                          name: "show-doctor-degree",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showDoctorDegree,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showDoctorDegree",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showDoctorDegree",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_doctor_degree
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-doctor-rating",
                                                          name: "show-doctor-rating",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showDoctorRating,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showDoctorRating",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showDoctorRating",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_doctor_rating
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
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.formTranslation.widget_setting
                                          .service_setting
                                      ) +
                                      "\n            "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-service-image",
                                                          name: "show-service-image",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showServiceImage,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showServiceImage",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showServiceImage",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_service_image
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-service-type",
                                                          name: "show-service-type",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showServicetype,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showServicetype",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showServicetype",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_service_type
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "show-service-price",
                                                          name: "show-service-price",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .showServicePrice,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "showServicePrice",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.showServicePrice",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .show_service_price
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
                                  t.userData.addOns.kiviPro
                                    ? e("div", { staticClass: "col-md-4" }, [
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
                                                              id: "show-service-duration",
                                                              name: "show-service-duration",
                                                              switch: "",
                                                            },
                                                            model: {
                                                              value:
                                                                t
                                                                  .widgetConfigData
                                                                  .showServiceDuration,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.widgetConfigData,
                                                                    "showServiceDuration",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "widgetConfigData.showServiceDuration",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .widget_setting
                                                                      .show_service_duration
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
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "skip-service-when-single",
                                                          name: "skip-service-when-single",
                                                          switch: "",
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .skip_service_when_single,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "skip_service_when_single",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.skip_service_when_single",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .skip_service_when_single
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
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.formTranslation.widget_setting
                                          .loader_setting
                                      ) +
                                      "\n            "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-4" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        { staticClass: "form-control-label" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.widget_setting
                                                .loader_select
                                            ) + " "
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
                                                    id: "widgetLoader",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return (
                                                        e.preventDefault(),
                                                        t.uploadWidgetLoader()
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
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
                                              staticClass: "input-group-text",
                                              attrs: { for: "widgetLoader" },
                                            },
                                            [t._v(t._s(t.widgetLoader))]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-4" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "card-profile-image mt-3 d-flex justify-content-center",
                                      },
                                      [
                                        "" != t.widgetLoaderPreview
                                          ? e("img", {
                                              staticClass:
                                                "navbar-brand-img ml-2 mt-3",
                                              staticStyle: {
                                                "max-height": "100px",
                                              },
                                              attrs: {
                                                src: t.widgetLoaderPreview,
                                                alt: "else",
                                              },
                                            })
                                          : e("div", {
                                              staticClass:
                                                "double-lines-spinner",
                                            }),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.formTranslation.widget_setting
                                          .widget_color
                                      ) +
                                      "\n            "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-3" }, [
                                e(
                                  "label",
                                  { staticClass: "form-control-label" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.widget_setting
                                            .set_widget_primary_color
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.widgetConfigData.primaryColor,
                                      expression:
                                        "widgetConfigData.primaryColor",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-color",
                                  attrs: {
                                    type: "color",
                                    id: "example-color-input",
                                  },
                                  domProps: {
                                    value: t.widgetConfigData.primaryColor,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.widgetConfigData,
                                          "primaryColor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-3" }, [
                                e(
                                  "label",
                                  { staticClass: "form-control-label" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.widget_setting
                                            .set_widget_primary_hover_color
                                        ) +
                                        "\n            "
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
                                        t.widgetConfigData.primaryHoverColor,
                                      expression:
                                        "widgetConfigData.primaryHoverColor",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-color",
                                  attrs: {
                                    type: "color",
                                    id: "example-color-input1",
                                  },
                                  domProps: {
                                    value: t.widgetConfigData.primaryHoverColor,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.widgetConfigData,
                                          "primaryHoverColor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-3" }, [
                                e(
                                  "label",
                                  { staticClass: "form-control-label" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.widget_setting
                                            .set_widget_secondary_color
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.widgetConfigData.secondaryColor,
                                      expression:
                                        "widgetConfigData.secondaryColor",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-color",
                                  attrs: {
                                    type: "color",
                                    id: "example-color-input2",
                                  },
                                  domProps: {
                                    value: t.widgetConfigData.secondaryColor,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.widgetConfigData,
                                          "secondaryColor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-3" }, [
                                e(
                                  "label",
                                  { staticClass: "form-control-label" },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.widget_setting
                                            .set_widget_secondary_hover_color
                                        ) +
                                        "\n            "
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
                                        t.widgetConfigData.secondaryHoverColor,
                                      expression:
                                        "widgetConfigData.secondaryHoverColor",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-color",
                                  attrs: {
                                    type: "color",
                                    id: "example-color-input4",
                                  },
                                  domProps: {
                                    value:
                                      t.widgetConfigData.secondaryHoverColor,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.widgetConfigData,
                                          "secondaryHoverColor",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0 mt-4" }),
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
                                e("div", { staticClass: "row p-2" }, [
                                  e("div", { staticClass: "col-md-12" }, [
                                    e("h2", [
                                      t._v(
                                        "\n                " +
                                          t._s(
                                            t.formTranslation.widget_setting
                                              .widget_order
                                          ) +
                                          "\n              "
                                      ),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  t.listLoader
                                    ? e(
                                        "div",
                                        {
                                          staticClass:
                                            "col-md-12 d-flex justify-content-center",
                                        },
                                        [
                                          e("i", {
                                            staticClass:
                                              "fa fa-spinner fa-spin",
                                            staticStyle: {
                                              "font-size": "50px",
                                            },
                                            attrs: { "aria-hidden": "true" },
                                          }),
                                        ]
                                      )
                                    : e("div", { staticClass: "col-md-6" }, [
                                        e(
                                          "table",
                                          {
                                            staticClass: "table table-striped",
                                          },
                                          [
                                            e(
                                              "thead",
                                              { staticClass: "thead-dark" },
                                              [
                                                e("tr", [
                                                  e("th", {
                                                    staticStyle: {
                                                      width: "10%",
                                                    },
                                                    attrs: { scope: "col" },
                                                  }),
                                                  t._v(" "),
                                                  e(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .static_data
                                                            .dt_lbl_name
                                                        )
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
                                                  move: t.checkMove,
                                                },
                                                model: {
                                                  value: t.widgetListOrder,
                                                  callback: function (e) {
                                                    t.widgetListOrder = e;
                                                  },
                                                  expression: "widgetListOrder",
                                                },
                                              },
                                              t._l(
                                                t.widgetListOrder,
                                                function (n) {
                                                  return t.userData.addOns
                                                    .kiviPro ||
                                                    "clinic" !== n.att_name
                                                    ? e(
                                                        "tr",
                                                        {
                                                          key: n.name,
                                                          class: n.fixed
                                                            ? " "
                                                            : "draggable my_handle",
                                                          staticStyle: {
                                                            float: "unset",
                                                          },
                                                        },
                                                        [
                                                          e(
                                                            "td",
                                                            {
                                                              staticStyle: {
                                                                width: "10%",
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                class:
                                                                  "my_handle " +
                                                                  (n.fixed
                                                                    ? " exclude-this-item"
                                                                    : " fa fa-align-justify"),
                                                              }),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          e("td", [
                                                            t._v(t._s(n.name)),
                                                          ]),
                                                        ]
                                                      )
                                                    : t._e();
                                                }
                                              ),
                                              0
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                ]),
                                t._v(" "),
                                e("br"),
                                t._v(" "),
                                e("hr", { staticClass: "p-2 m-0" }),
                              ]
                            ),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.formTranslation.widget_setting
                                          .widget_print_setting
                                      ) +
                                      "\n            "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-4" }, [
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
                                                          id: "widget-print",
                                                          name: "widget-print",
                                                          switch: "",
                                                        },
                                                        on: {
                                                          change:
                                                            t.printStatusChange,
                                                        },
                                                        model: {
                                                          value:
                                                            t.widgetConfigData
                                                              .widget_print,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.$set(
                                                              t.widgetConfigData,
                                                              "widget_print",
                                                              e
                                                            );
                                                          },
                                                          expression:
                                                            "widgetConfigData.widget_print",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .widget_setting
                                                                  .print
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
                                  1 != t.widgetConfigData.widget_print ||
                                  (1 != t.userData.addOns.kiviPro &&
                                    1 != t.userData.addOns.telemed &&
                                    1 != t.userData.addOns.googlemeet)
                                    ? t._e()
                                    : e("div", { staticClass: "col-md-4" }, [
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
                                                              id: "widget-print-redirect",
                                                              name: "widget-print",
                                                              switch: "",
                                                            },
                                                            model: {
                                                              value:
                                                                t
                                                                  .widgetConfigData
                                                                  .afterWoocommerceRedirect,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.widgetConfigData,
                                                                    "afterWoocommerceRedirect",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "widgetConfigData.afterWoocommerceRedirect",
                                                            },
                                                          },
                                                          [
                                                            e("b", [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .widget_setting
                                                                      .redirectAfterWoocommerce
                                                                  ) +
                                                                  " "
                                                              ),
                                                            ]),
                                                            t._v(" "),
                                                            e("small", [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .widget_setting
                                                                    .redirectAfterWoocommerceNotice
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
                                          disabled: t.loader,
                                        },
                                      },
                                      [
                                        e("i", {
                                          class: t.loader
                                            ? "fa fa-sync fa-spin"
                                            : "fa fa-save",
                                        }),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.loader
                                                ? t.formTranslation.common
                                                    .loading
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
              ],
              1
            );
          },
          [],
          !1,
          null,
          "68aeff36",
          null
        ).exports),
      qt = n(362).a,
      Et =
        (n(674),
        Object(h.a)(
          qt,
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
                                                  t.formTranslation.clinic
                                                    .clinic_list
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.kcCheckPermission("clinic_add")
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
                                                              click: function (
                                                                e
                                                              ) {
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
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .import_data
                                                              ) +
                                                                "\n                          "
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
                                                            name: "clinic.create",
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
                                                                .clinic
                                                                .add_clinic
                                                            ) +
                                                            "\n                            "
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
                            t.kcCheckPermission("clinic_add") &&
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
                                          t.formTranslation.clinic.clinic_name,
                                        value: "clinic_name",
                                      },
                                      {
                                        label: t.formTranslation.clinic.email,
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
                                          t.formTranslation.clinic
                                            .clinic_contact,
                                        value: "contact",
                                      },
                                      {
                                        label:
                                          t.formTranslation.clinic
                                            .dt_lbl_specialties,
                                        value: "specialization",
                                      },
                                      {
                                        label: t.formTranslation.common.address,
                                        value: "address",
                                      },
                                      {
                                        label: t.formTranslation.common.city,
                                        value: "city",
                                      },
                                      {
                                        label: t.formTranslation.common.country,
                                        value: "country",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common.postal_code,
                                        value: "postal_code",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin +
                                          " " +
                                          t.formTranslation.common.fname,
                                        value: "clinic_admin_first_name",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin +
                                          " " +
                                          t.formTranslation.common.lname,
                                        value: "clinic_admin_last_name",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin_email,
                                        value: "clinic_admin_email",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin_country_calling_code,
                                        value:
                                          "clinic_admin_country_calling_code",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin_country_code,
                                        value: "clinic_admin_country_code",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin +
                                          " " +
                                          t.formTranslation.doctor
                                            .doctor_contact,
                                        value: "clinic_admin_contact",
                                      },
                                      {
                                        label:
                                          t.formTranslation.common
                                            .clinic_admin +
                                          " " +
                                          t.formTranslation.doctor.gender,
                                        value: "clinic_admin_gender",
                                      },
                                    ],
                                    module_name:
                                      t.formTranslation.common.clinic,
                                    module_type: "clinic",
                                  },
                                  on: { reloadList: t.getClinicData },
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
                                      { attrs: { id: "clinicPrint" } },
                                      [
                                        e(
                                          "vue-good-table",
                                          {
                                            ref: "dataTable",
                                            attrs: {
                                              columns: t.clinicsList.column,
                                              rows: t.clinicsList.data,
                                              mode: "remote",
                                              "search-options": {
                                                enabled: !0,
                                                placeholder:
                                                  t.formTranslation.common
                                                    .search_clinic_field_data_global_placeholder,
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
                                                  t.formTranslation.common
                                                    .clear,
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
                                                                    t
                                                                      .serverParams
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
                                                                          e
                                                                            .target
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
                                                                      t
                                                                        .serverParams
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
                                                                            n.label,
                                                                        },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          n.label
                                                                        )
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
                                                    "name" == n.column.field
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center",
                                                          },
                                                          [
                                                            "" !=
                                                              n.row
                                                                .profile_image &&
                                                            null !=
                                                              n.row
                                                                .profile_image
                                                              ? e("img", {
                                                                  staticClass:
                                                                    "object-cover",
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
                                                                    height:
                                                                      "45px",
                                                                    width:
                                                                      "45px",
                                                                  },
                                                                })
                                                              : e("b-avatar", {
                                                                  staticClass:
                                                                    "mr-3",
                                                                  attrs: {
                                                                    variant:
                                                                      "primary",
                                                                    text: t.getInitials(
                                                                      n
                                                                        .formattedRow
                                                                        .name
                                                                    ),
                                                                    size: "45px",
                                                                  },
                                                                }),
                                                            t._v(
                                                              "\n                            " +
                                                                t._s(
                                                                  n.formattedRow
                                                                    .name
                                                                ) +
                                                                "\n                            "
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : "status" ==
                                                        n.column.field
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex",
                                                          },
                                                          [
                                                            t.kcCheckPermission(
                                                              "clinic_edit"
                                                            )
                                                              ? e(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    attrs: {
                                                                      name: "check-button",
                                                                      switch:
                                                                        "",
                                                                      value:
                                                                        "1",
                                                                      size: "lg",
                                                                      "unchecked-value":
                                                                        "0",
                                                                      id:
                                                                        "status_change_" +
                                                                        n.row
                                                                          .id,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.changeModuleValueStatus(
                                                                            {
                                                                              module_type:
                                                                                "clinics",
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
                                                            t.kcCheckPermission(
                                                              "clinic_edit"
                                                            )
                                                              ? e(
                                                                  "router-link",
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
                                                                      to: {
                                                                        name: "clinic.edit",
                                                                        params:
                                                                          {
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
                                                            t.kcCheckPermission(
                                                              "clinic_resend_credential"
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
                                                                      "btn btn-outline-warning btn-sm",
                                                                    attrs: {
                                                                      title:
                                                                        t
                                                                          .formTranslation
                                                                          .receptionist
                                                                          .resend_credential,
                                                                      id:
                                                                        "resend_" +
                                                                        n.row
                                                                          .clinic_admin_id,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.resendRequest(
                                                                            n
                                                                              .row
                                                                              .clinic_admin_id
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
                                                              "clinic_delete"
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
                                                                      "btn btn-outline-danger btn-sm",
                                                                    attrs: {
                                                                      id:
                                                                        "user_delete_" +
                                                                        n.index +
                                                                        1,
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
                                                                          return t.deleteClinicData(
                                                                            n.index +
                                                                              1,
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
                                                        )
                                                      : e("div", [
                                                          t._v(
                                                            "\n                            " +
                                                              t._s(
                                                                "name" ==
                                                                  n.column.field
                                                                  ? ""
                                                                  : n
                                                                      .formattedRow[
                                                                      n.column
                                                                        .field
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
                                                  "\n                        " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .no_data_found
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
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
                                                  "clinic_export"
                                                )
                                                  ? e("module-data-export", {
                                                      attrs: {
                                                        module_data:
                                                          t.clinicsList.data,
                                                        module_name:
                                                          t.formTranslation
                                                            .clinic.clinic_list,
                                                        module_type: "clinic",
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
                                                            [
                                                              t._v(
                                                                t._s(n.label)
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
                                                          click:
                                                            t.confirmDelete,
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
      jt = {
        components: { VuePhoneNumberInput: bt.a },
        data: function () {
          return {
            cardTitle: "Add clinic",
            clinicData: {},
            loading: !1,
            submitted: !1,
            buttonText: '<i class="fa fa-file"></i> Save ',
            defaultClinic:
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png",
            defaultImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png",
            adminPreview:
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png",
            formLoader: !1,
            defaultCountryCode: null,
            defaultCountryCode_admin: null,
            defaultUserRegistrationFormSettingData: "on",
          };
        },
        validations: {
          clinicData: {
            name: { required: l.required },
            rif: { required: l.required },
            email: { required: l.required, emailValidate: I.c },
            telephone_no: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            status: { required: l.required },
            city: { required: l.required },
            address: { required: l.required },
            country: { required: l.required },
            postal_code: { required: l.required },
            first_name: { required: l.required },
            last_name: { required: l.required },
            mobile_number: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            user_email: { required: l.required, emailValidate: I.c },
            specialties: { required: l.required },
            gender: { required: l.required },
          },
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.clinicData = this.defaultClinicData()),
            this.init();
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.clinicData.country_code = t.countryCode),
              (this.clinicData.country_calling_code = t.countryCallingCode);
          },
          contactUpdateHandaler_admin: function (t) {
            (this.clinicData.country_code_admin = t.countryCode),
              (this.clinicData.country_calling_code_admin =
                t.countryCallingCode);
          },
          init: function () {
            var t = this;
            void 0 !== this.$route.params.id &&
              ((this.cardTitle = this.formTranslation.common.edit_clinic),
              (this.buttonText =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.common.save),
              (this.formLoader = !0),
              Object(s.a)("clinic_edit", { id: this.$route.params.id })
                .then(function (e) {
                  (t.formLoader = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      ((t.clinicData = e.data.data),
                      (t.clinicData.rif =
                        void 0 !== t.clinicData.rif && null !== t.clinicData.rif
                          ? t.clinicData.rif
                              .toString()
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, "")
                              .slice(0, 15)
                          : ""),
                      (t.clinicData.username =
                        void 0 !== t.clinicData.username &&
                        null !== t.clinicData.username
                          ? t.clinicData.username
                              .toString()
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, "")
                              .slice(0, 15)
                          : t.clinicData.rif),
                      (t.clinicData.user_pass = t.clinicData.username),
                      t.$set(t.clinicData, "rif", t.clinicData.rif),
                      t.$set(t.clinicData, "username", t.clinicData.username),
                      t.$set(t.clinicData, "user_pass", t.clinicData.user_pass),
                      "" !== e.data.data.country_calling_code &&
                        void 0 !== e.data.data.country_calling_code &&
                        (t.defaultCountryCode = e.data.data.country_code),
                      "" !== e.data.data.country_calling_code_admin &&
                        void 0 !== e.data.data.country_calling_code_admin &&
                        (t.defaultCountryCode_admin =
                          e.data.data.country_code_admin),
                      t.clinicData.clinic_profile &&
                        (t.defaultImage = t.clinicData.clinic_profile),
                      t.clinicData.profile_image &&
                        (t.adminPreview = t.clinicData.profile_image));
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.clinic.doctor_record_not_found
                    );
                })),
              this.getDynamicTranslationKey();
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              (function () {
                var e = "";
                void 0 !== t.clinicData.rif &&
                  null !== t.clinicData.rif &&
                  (e = t.clinicData.rif
                    .toString()
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "")
                    .slice(0, 15)),
                  t.$set(t.clinicData, "rif", e),
                  t.$set(t.clinicData, "username", e),
                  t.$set(t.clinicData, "user_pass", e);
              })(),
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
              this.$v.clinicData.$invalid
                ? (this.loading = !1)
                : Object(I.n)("clinicDataForm") &&
                  Object(s.b)("clinic_save", this.clinicData)
                    .then(function (e) {
                      (t.loading = !1),
                        (t.submitted = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            t.$store.dispatch("fetchAllClinic", { self: t }),
                            t.$router.push({ name: "clinic" }))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.submitted = !1),
                        (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          defaultClinicData: function () {
            var t = new Date();
            return (
              t.setFullYear(t.getFullYear() - 18),
              {
                name: "",
                rif: "",
                email: "",
                telephone_no: "",
                country_calling_code: "",
                country_code: "",
                address: "",
                city: "",
                country: "",
                postal_code: "",
                status: 1,
                specialties: [],
                currency_prefix: "$",
                currency_postfix: "",
                clinic_profile: "",
                first_name: "",
                last_name: "",
                mobile_number: "",
                country_calling_code_admin: "",
                country_code_admin: "",
                gender: "",
                user_email: "",
                dob: "",
                profile_image: "",
                username: "",
                user_pass: "",
              }
            );
          },
          addNewSpecialization: function (t) {
            var e = this,
              n = {
                label: t,
                type: "specialization",
                value: t.replace(" ", "_"),
                status: 1,
              },
              i = this;
            Object(s.b)("static_data_save", n)
              .then(function (n) {
                void 0 !== n.data.status &&
                  !0 === n.data.status &&
                  (e.clinicData.specialties.push({
                    id: n.data.insert_id,
                    label: t,
                  }),
                  i.$store.commit("staticDataModule/ADD_OPTION_STATIC_DATA", {
                    dataType: "specialization",
                    option: { id: n.data.insert_id, label: t },
                  }));
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          uploadAdmin: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.adminPreview = n.url), (t.clinicData.profile_image = n.id);
            }),
              e.open();
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.defaultImage = n.url), (t.clinicData.clinic_profile = n.id);
            }),
              e.open();
          },
          getDynamicTranslationKey: function () {
            void 0 !== this.$store.state.staticDataModule &&
              void 0 !== this.$store.state.staticDataModule.langTranslateData &&
              this.$store.state.staticDataModule.langTranslateData !== [] &&
              this.$store.dispatch("staticDataModule/fetchLangTranslateData", {
                filePath: window.request_data.kiviCarePluginURL,
                current: "temp",
                module: "",
              });
          },
          getCountryCodeData: function () {
            var t = this;
            Object(s.a)("get_country_code_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.defaultCountryCode = e.data.data.country_code),
                  (t.defaultCountryCode_admin = e.data.data.country_code));
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
          specialization: function () {
            return this.$store.state.staticDataModule.static_data
              .specialization;
          },
          specializationMultiselectLoader: function () {
            return this.$store.state.staticDataModule.static_data_loader;
          },
        },
      },
      Pt =
        (n(676),
        Object(h.a)(
          jt,
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
                          attrs: { id: "clinicForm", novalidate: !0 },
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
                                                      ? t.formTranslation.clinic
                                                          .edit_clinic
                                                      : t.formTranslation.clinic
                                                          .add_clinic
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.kcCheckPermission("clinic_list")
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
                                                              "\n                                    "
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
                                                                .receptionist
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
                                                      "\n                                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.cancel
                                                        ) +
                                                        "\n                                "
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
                                            staticClass:
                                              "col-md-12 form-control-label",
                                            attrs: { for: "name" },
                                          },
                                          [
                                            t._v(
                                              "\n                                            " +
                                                t._s(
                                                  t.formTranslation.common.name
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
                                              value: t.clinicData.name,
                                              expression: "clinicData.name",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.clinicData.name.$error,
                                          },
                                          attrs: {
                                            id: "name",
                                            placeholder:
                                              t.formTranslation.clinic
                                                .clinic_name_plh,
                                            required: "required",
                                            name: "name",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.clinicData.name,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "name",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.name.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .name_required
                                                  ) +
                                                    "\n                                        "
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
                                            maxlength: "15",
                                          },
                                          domProps: { value: t.clinicData.rif },
                                          on: {
                                            input: function (e) {
                                              if (!e.target.composing) {
                                                var n = e.target.value
                                                  ? e.target.value
                                                      .toUpperCase()
                                                      .replace(/[^A-Z0-9]/g, "")
                                                      .slice(0, 15)
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
                                            staticClass:
                                              "col-md-12 form-control-label",
                                            attrs: { for: "email" },
                                          },
                                          [
                                            t._v(
                                              "\n                                            " +
                                                t._s(
                                                  t.formTranslation.common.email
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
                                              value: t.clinicData.email,
                                              expression: "clinicData.email",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.clinicData.email.$error,
                                          },
                                          attrs: {
                                            id: "email",
                                            placeholder:
                                              t.formTranslation.clinic
                                                .email_plh,
                                            required: "required",
                                            name: "email",
                                            type: "email",
                                          },
                                          domProps: {
                                            value: t.clinicData.email,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "email",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.email.required
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
                                                    "\n                                        "
                                                ),
                                              ]
                                            )
                                          : t.submitted &&
                                            !t.$v.clinicData.email.emailValidate
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
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
                                    e("div", { staticClass: "col-md-4" }, [
                                      e(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass:
                                                "col-md-12 form-control-label",
                                              attrs: { for: "contact_no" },
                                            },
                                            [
                                              t._v(
                                                "\n                                            " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_no
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
                                          e("VuePhoneNumberInput", {
                                            attrs: {
                                              id: "contact_no",
                                              clearable: "",
                                              "default-country-code":
                                                t.defaultCountryCode,
                                              "no-example": "",
                                            },
                                            on: {
                                              update: t.contactUpdateHandaler,
                                            },
                                            model: {
                                              value: t.clinicData.telephone_no,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicData,
                                                  "telephone_no",
                                                  e
                                                );
                                              },
                                              expression:
                                                " clinicData.telephone_no ",
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.clinicData.telephone_no.required
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
                                                      "\n                                            "
                                                  ),
                                                ]
                                              )
                                            : (t.submitted &&
                                                !t.$v.clinicData.telephone_no
                                                  .minLength) ||
                                              !t.$v.clinicData.telephone_no
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
                                                      "\n                                            "
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
                                                  staticClass:
                                                    "col-md-12 form-control-label",
                                                  attrs: { for: "specialties" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                    " +
                                                      t._s(
                                                        t.formTranslation.clinic
                                                          .specialties
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
                                                  id: "specialties",
                                                  "tag-placeholder":
                                                    t.formTranslation.clinic
                                                      .clinic_sp_plh,
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .search_placeholder,
                                                  label: "label",
                                                  "track-by": "id",
                                                  loading:
                                                    t.specializationMultiselectLoader,
                                                  options: t.specialization,
                                                  multiple: !0,
                                                  taggable: !0,
                                                },
                                                on: {
                                                  tag: t.addNewSpecialization,
                                                },
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
                                                  value:
                                                    t.clinicData.specialties,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.clinicData,
                                                      "specialties",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "clinicData.specialties",
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
                                              !t.$v.clinicData.specialties
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
                                                            .clinic
                                                            .clinic_specialities_required
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
                                                  staticClass:
                                                    "col-md-12 form-control-label",
                                                  attrs: { for: "status" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                    " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .status
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
                                                "b-select",
                                                {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    name: "status",
                                                    id: "status",
                                                  },
                                                  model: {
                                                    value: t.clinicData.status,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.clinicData,
                                                        "status",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "clinicData.status",
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
                                                    { attrs: { value: "1" } },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common.active
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
                                                            t.formTranslation
                                                              .common.inactive
                                                          )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.status.required
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
                                                            t.formTranslation
                                                              .appointments
                                                              .status_required
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
                                    t._v(" "),
                                    e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
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
                                                          t.defaultImage +
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
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass:
                                              "col-md-12 form-control-label",
                                            attrs: { for: "address" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common.address
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
                                        e("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.clinicData.address,
                                              expression: "clinicData.address",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            name: "address",
                                            id: "address",
                                            placeholder:
                                              t.formTranslation.clinic
                                                .address_plh,
                                          },
                                          domProps: {
                                            value: t.clinicData.address,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "address",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.address.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .address_required
                                                    ) +
                                                    "\n                                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
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
                                            staticClass:
                                              "col-md-12 form-control-label",
                                            attrs: { for: "city" },
                                          },
                                          [
                                            t._v(
                                              "\n                                            " +
                                                t._s(
                                                  t.formTranslation.common.city
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
                                              value: t.clinicData.city,
                                              expression: "clinicData.city",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid":
                                              t.submitted &&
                                              !t.$v.clinicData.city.$pending &&
                                              !t.$v.clinicData.city.required,
                                          },
                                          attrs: {
                                            id: "city",
                                            placeholder:
                                              t.formTranslation.clinic.city_plh,
                                            name: "city",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.clinicData.city,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "city",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.city.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                                            " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .city_required
                                                    ) +
                                                    "\n                                        "
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
                                            attrs: { for: "country" },
                                          },
                                          [
                                            t._v(
                                              "\n                                            " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .country
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
                                              value: t.clinicData.country,
                                              expression: "clinicData.country",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid":
                                              t.submitted &&
                                              !t.$v.clinicData.country
                                                .$pending &&
                                              !t.$v.clinicData.country.required,
                                          },
                                          attrs: {
                                            id: "country",
                                            placeholder:
                                              t.formTranslation.clinic
                                                .country_plh,
                                            name: "country",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.clinicData.country,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "country",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.country.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                                            " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .country_required
                                                    ) +
                                                    "\n                                        "
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
                                            attrs: { for: "postal_code" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .postal_code
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
                                              value: t.clinicData.postal_code,
                                              expression:
                                                "clinicData.postal_code",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "postal_code",
                                            placeholder:
                                              t.formTranslation.clinic
                                                .pcode_plh,
                                            name: "postal_code",
                                            type: "text",
                                          },
                                          domProps: {
                                            value: t.clinicData.postal_code,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.clinicData,
                                                  "postal_code",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.postal_code.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .postal_code_required
                                                    ) +
                                                    "\n                                            "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("hr"),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e(
                                        "h4",
                                        { staticClass: "text-primary mb-4" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.clinic
                                                .clinic_admin_detail
                                            )
                                          ),
                                        ]
                                      ),
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "first_name" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .fname
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
                                                      t.clinicData.first_name,
                                                    expression:
                                                      "clinicData.first_name",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.first_name
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "first_name",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .fname_plh,
                                                  required: "required",
                                                  name: "first_name",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.clinicData.first_name,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "first_name",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.first_name
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
                                                            .fname_required
                                                        ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
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
                                                    "col-md-12 form-control-label",
                                                  attrs: { for: "last_name" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                            " +
                                                      t._s(
                                                        t.formTranslation.common
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
                                                    rawName: "v-model",
                                                    value:
                                                      t.clinicData.last_name,
                                                    expression:
                                                      "clinicData.last_name",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.last_name
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "last_name",
                                                  placeholder:
                                                    t.formTranslation
                                                      .receptionist.lname_plh,
                                                  required: "required",
                                                  name: "last_name",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.clinicData.last_name,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "last_name",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.last_name
                                                .required
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .lname_required
                                                          ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
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
                                                  attrs: { for: "email" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .email
                                                    ) +
                                                      " \n                                            "
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
                                                      t.clinicData.user_email,
                                                    expression:
                                                      "clinicData.user_email",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.user_email
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "email",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .email_plh,
                                                  required: "required",
                                                  name: "user_email",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.clinicData.user_email,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "user_email",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.user_email
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
                                                            .email_required
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.user_email
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
                                                          t.formTranslation
                                                            .common
                                                            .invalid_email
                                                        ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
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
                                                  attrs: {
                                                    for: "mobile_number",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                            " +
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
                                                  "default-country-code":
                                                    t.defaultCountryCode_admin,
                                                  id: "mobile_number",
                                                  clearable: "",
                                                  "no-example": "",
                                                },
                                                on: {
                                                  update:
                                                    t.contactUpdateHandaler_admin,
                                                },
                                                model: {
                                                  value:
                                                    t.clinicData.mobile_number,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.clinicData,
                                                      "mobile_number",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    " clinicData.mobile_number ",
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.mobile_number
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
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  )
                                                : !t.submitted ||
                                                  (t.$v.clinicData.mobile_number
                                                    .minLength &&
                                                    t.$v.clinicData
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
                                                          "\n                                        "
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
                                                      ".\n                                            "
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.clinicData.dob,
                                                    expression:
                                                      "clinicData.dob",
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
                                                  value: t.clinicData.dob,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
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
                                                    "\n                                            " +
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
                                                            t.clinicData.gender,
                                                          expression:
                                                            "clinicData.gender",
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
                                                          t.clinicData.gender,
                                                          "male"
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.clinicData,
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
                                                            t.clinicData.gender,
                                                          expression:
                                                            "clinicData.gender",
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
                                                          t.clinicData.gender,
                                                          "female"
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (e) {
                                                          return t.$set(
                                                            t.clinicData,
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
                                                                t.clinicData
                                                                  .gender,
                                                              expression:
                                                                "clinicData.gender",
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
                                                              t.clinicData
                                                                .gender,
                                                              "other"
                                                            ),
                                                          },
                                                          on: {
                                                            change: function (
                                                              e
                                                            ) {
                                                              return t.$set(
                                                                t.clinicData,
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
                                              ]),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.gender.required
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .gender_required
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
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
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
                                                        ref: "admin_file",
                                                        staticClass: "p-2",
                                                        staticStyle: {
                                                          color: "transparent",
                                                        },
                                                        attrs: {
                                                          id: "admin_file",
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.uploadAdmin();
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
                                                            for: "admin_file",
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
                                                          t.adminPreview +
                                                          ");",
                                                        attrs: {
                                                          id: "adminImagePreview",
                                                        },
                                                      }),
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
          "06c61725",
          null
        ).exports);
    function Rt(t) {
      return (Rt =
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
    var It = {
        components: { VuePhoneNumberInput: bt.a },
        data: function () {
          return {
            cardTitle: "Edit clinic profile",
            clinicData: {},
            loading: !1,
            submitted: !1,
            editProfileText: '<i class="fa fa-pen-fancy"></i> Edit Profile',
            buttonText: '<i class="fa fa-plus"></i> Add',
            profileImage: "",
            adminPreview:
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png",
            formLoader: !0,
            defaultCountryCode: null,
            defaultCountryCode_admin: null,
            defaultUserRegistrationFormSettingData: "on",
          };
        },
        validations: {
          clinicData: {
            name: { required: l.required },
            email: { required: l.required, emailValidate: I.c },
            telephone_no: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            address: { required: l.required },
            first_name: { required: l.required },
            last_name: { required: l.required },
            mobile_number: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            user_email: { required: l.required, emailValidate: I.c },
            specialties: { required: l.required },
            gender: { required: l.required },
            city: {
              required: l.required,
              alphaSpace: I.a,
              maxLength: Object(l.maxLength)(30),
            },
            country: {
              required: l.required,
              alphaSpace: I.a,
              maxLength: Object(l.maxLength)(30),
            },
            postal_code: {
              required: l.required,
              postalCode: I.j,
              maxLength: Object(l.maxLength)(12),
            },
            status: { required: l.required },
          },
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.state = this.defaultClinicData()),
            (this.profileImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png"),
            this.init();
        },
        filters: {
          clinicSpecialityFormat: function (t) {
            var e = [],
              n = Rt(t);
            return ("object" === n || "array" === n) &&
              null != t &&
              t.length > 0
              ? (t.map(function (t) {
                  e.push(t.label);
                }),
                e.join(" ,"))
              : "-";
          },
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.clinicData.country_code = t.countryCode),
              (this.clinicData.country_calling_code = t.countryCallingCode);
          },
          contactUpdateHandaler_admin: function (t) {
            (this.clinicData.country_code_admin = t.countryCode),
              (this.clinicData.country_calling_code_admin =
                t.countryCallingCode);
          },
          init: function () {
            this.editProfile();
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.profileImage = n.url), (t.clinicData.clinic_profile = n.id);
            }),
              e.open();
          },
          uploadAdmin: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.adminPreview = n.url), (t.clinicData.profile_image = n.id);
            }),
              e.open();
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
              this.$v.clinicData.$invalid
                ? (this.loading = !1)
                : Object(I.n)("clinicDataForm") &&
                  Object(s.b)("clinic_save", this.clinicData)
                    .then(function (e) {
                      (t.loading = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            e.data.choose_language_updated &&
                              t.$store.dispatch(
                                "staticDataModule/refreshDashboardLocale",
                                { self: t }
                              ),
                            t.$store.dispatch("fetchAllClinic", { self: t }))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          defaultClinicData: function () {
            return {
              id: "",
              name: "",
              email: "",
              country_code: "",
              country_calling_code: "",
              telephone_no: "",
              address: "",
              city: "",
              country: "",
              postal_code: "",
              currency_prefix: "$",
              currency_postfix: "",
              status: 1,
              specialties: [],
              profile_image: "",
              country_code_admin: "",
              country_calling_code_admin: "",
              choose_language: "",
            };
          },
          editProfile: function () {
            var t = this;
            (this.formLoader = !0),
              (this.cardTitle =
                this.formTranslation.clinic.edit_clinic_Profile),
              (this.buttonText =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.common.save),
              Object(s.a)("clinic_edit", {})
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.clinicData = e.data.data),
                    "" !== e.data.data.country_calling_code &&
                      void 0 !== e.data.data.country_calling_code &&
                      (t.defaultCountryCode = e.data.data.country_code),
                    "" !== e.data.data.country_calling_code_admin &&
                      void 0 !== e.data.data.country_calling_code_admin &&
                      (t.defaultCountryCode_admin =
                        e.data.data.country_code_admin),
                    t.clinicData.profile_image &&
                      (t.adminPreview = t.clinicData.profile_image),
                    t.clinicData.clinic_profile &&
                      (t.profileImage = t.clinicData.clinic_profile),
                    (t.formLoader = !1),
                    (t.clinicData.choose_language =
                      t.kc_available_translations.find(function (t) {
                        return t.lang === e.data.data.choose_language;
                      })));
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.clinic.plh_record_not_found
                    );
                });
          },
          addNewSpecialization: function (t) {
            var e = this,
              n = {
                label: t,
                type: "specialization",
                value: t.replace(" ", "_"),
                status: 1,
              },
              i = this;
            Object(s.b)("static_data_save", n)
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (i.clinicData.specialties.push({
                    id: e.data.insert_id,
                    label: t,
                  }),
                  i.$store.commit("staticDataModule/ADD_OPTION_STATIC_DATA", {
                    dataType: "specialization",
                    option: { id: e.data.insert_id, label: t },
                  }));
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          getCountryCodeData: function () {
            var t = this;
            Object(s.a)("get_country_code_settings_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.defaultCountryCode = e.data.data.country_code),
                  (t.defaultCountryCode_admin = e.data.data.country_code));
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
          specialization: function () {
            return this.$store.state.staticDataModule.static_data
              .specialization;
          },
          specializationMultiselectLoader: function () {
            return this.$store.state.staticDataModule.static_data_loader;
          },
          kc_available_translations: function () {
            return this.$store.state.userDataModule.user
              .kc_available_translations;
          },
        },
        watch: {},
      },
      Wt =
        (n(678),
        Object(h.a)(
          It,
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
                  : t._e(),
                t._v(" "),
                void 0 === t.formTranslation.common || t.formLoader
                  ? t._e()
                  : e(
                      "b-row",
                      [
                        e(
                          "b-col",
                          {
                            staticClass: "col-xl-9 col-lg-8 order-lg-1 order-2",
                          },
                          [
                            e(
                              "form",
                              {
                                attrs: { id: "clinicDataForm", novalidate: !0 },
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
                                e("div", { staticClass: "card" }, [
                                  e("div", { staticClass: "card-header" }, [
                                    e(
                                      "div",
                                      { staticClass: "row align-items-center" },
                                      [
                                        e("div", { staticClass: "col-8" }, [
                                          e("h3", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.doctor
                                                  .edit_profile
                                              ) + " "
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "card-body" }, [
                                    e(
                                      "h6",
                                      {
                                        staticClass:
                                          "heading-small text-muted mb-4",
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.clinic.clinic_info
                                          )
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "pl-lg-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-lg-6" }, [
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
                                                    "\n                          " +
                                                      t._s(
                                                        t.formTranslation.clinic
                                                          .clinic_name
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
                                                    value: t.clinicData.name,
                                                    expression:
                                                      "clinicData.name",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.name.$error,
                                                },
                                                attrs: {
                                                  id: "name",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_clinic_name,
                                                  required: "required",
                                                  name: "name",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.clinicData.name,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "name",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.name.required
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
                                                            .name_required
                                                        ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                        e("div", { staticClass: "col-lg-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "rif" },
                                                },
                                                [
                                                  t._v(" RIF "),
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
                                                    value: t.clinicData.rif,
                                                    expression:
                                                      "clinicData.rif",
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
                                                  maxlength: "15",
                                                },
                                                domProps: {
                                                  value: t.clinicData.rif,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    if (!e.target.composing) {
                                                      var n = e.target.value
                                                        ? e.target.value
                                                            .toUpperCase()
                                                            .replace(
                                                              /[^A-Z0-9]/g,
                                                              ""
                                                            )
                                                            .slice(0, 15)
                                                        : "";
                                                      t.$set(
                                                        t.clinicData,
                                                        "rif",
                                                        n
                                                      ),
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
                                                      staticClass:
                                                        "invalid-feedback",
                                                    },
                                                    [
                                                      t._v(
                                                        " El RIF es obligatorio "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-lg-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "email" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                          " +
                                                      t._s(
                                                        t.formTranslation.common
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
                                                    value: t.clinicData.email,
                                                    expression:
                                                      "clinicData.email",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.email
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "email",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_email,
                                                  required: "required",
                                                  name: "email",
                                                  type: "email",
                                                },
                                                domProps: {
                                                  value: t.clinicData.email,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "email",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.email.required
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
                                                            .email_required
                                                        ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.email
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
                                                          t.formTranslation
                                                            .common
                                                            .invalid_email
                                                        ) +
                                                          "\n                        "
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
                                        e("div", { staticClass: "col-lg-6" }, [
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
                                                    for: "telephone_no",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                          " +
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
                                                    t.clinicData.telephone_no,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.clinicData,
                                                      "telephone_no",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "clinicData.telephone_no",
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.telephone_no
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
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : (t.submitted &&
                                                    !t.$v.clinicData
                                                      .telephone_no
                                                      .minLength) ||
                                                  !t.$v.clinicData.telephone_no
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
                                                            t.formTranslation
                                                              .common
                                                              .contact_validation_1
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
                                        e("div", { staticClass: "col-lg-6" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "specialties" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                          " +
                                                      t._s(
                                                        t.formTranslation.clinic
                                                          .specialities
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
                                                { staticClass: "kivi-pr" },
                                                [
                                                  e("multi-select", {
                                                    attrs: {
                                                      "deselect-label": "",
                                                      "select-label": "",
                                                      id: "specialties",
                                                      "tag-placeholder":
                                                        t.formTranslation.clinic
                                                          .plh_clinic_specialization,
                                                      placeholder:
                                                        t.formTranslation.clinic
                                                          .search_placeholder,
                                                      label: "label",
                                                      "track-by": "id",
                                                      options: t.specialization,
                                                      multiple: !0,
                                                      loading:
                                                        t.specializationMultiselectLoader,
                                                      taggable: !0,
                                                    },
                                                    on: {
                                                      tag: t.addNewSpecialization,
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
                                                        t.clinicData
                                                          .specialties,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.clinicData,
                                                          "specialties",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "clinicData.specialties",
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "select_clear_btn",
                                                      on: {
                                                        click: function (e) {
                                                          t.clinicData.specialties =
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
                                              !t.$v.clinicData.specialties
                                                .required
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
                                                            t.formTranslation
                                                              .clinic
                                                              .clinic_specialities_required
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
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
                                          " " +
                                            t._s(
                                              t.formTranslation.common
                                                .contact_info
                                            ) +
                                            " "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "pl-lg-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "address" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .address
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
                                              e("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.clinicData.address,
                                                    expression:
                                                      "clinicData.address",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "address",
                                                  id: "address",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_address,
                                                },
                                                domProps: {
                                                  value: t.clinicData.address,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "address",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.address.required
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
                                                            t.formTranslation
                                                              .common
                                                              .address_required
                                                          ) +
                                                          "\n                        "
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
                                                  attrs: { for: "country" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .country
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
                                                    value: t.clinicData.country,
                                                    expression:
                                                      "clinicData.country",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.country
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "country",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_country,
                                                  name: "country",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.clinicData.country,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "country",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.country.required
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
                                                            t.formTranslation
                                                              .common
                                                              .country_required
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.country
                                                    .alphaSpace
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
                                                            t.formTranslation
                                                              .common
                                                              .country_validation_1
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.country
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
                                                            t.formTranslation
                                                              .common
                                                              .country_validation_2
                                                          ) +
                                                          "\n                        "
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
                                                  attrs: { for: "city" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .city
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
                                                    value: t.clinicData.city,
                                                    expression:
                                                      "clinicData.city",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.city.$error,
                                                },
                                                attrs: {
                                                  id: "city",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_city,
                                                  name: "city",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.clinicData.city,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "city",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.city.required
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
                                                            t.formTranslation
                                                              .common
                                                              .city_required
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.city
                                                    .alphaSpace
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
                                                            t.formTranslation
                                                              .common
                                                              .city_validation_1
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.city
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
                                                            t.formTranslation
                                                              .common
                                                              .city_validation_2
                                                          ) +
                                                          "\n                        "
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
                                                  attrs: { for: "postal_code" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .postal_code
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
                                                      t.clinicData.postal_code,
                                                    expression:
                                                      "clinicData.postal_code",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  " is-invalid":
                                                    t.submitted &&
                                                    t.$v.clinicData.postal_code
                                                      .$error,
                                                },
                                                attrs: {
                                                  id: "postal_code",
                                                  placeholder:
                                                    t.formTranslation.clinic
                                                      .plh_pcode,
                                                  name: "postal_code",
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value:
                                                    t.clinicData.postal_code,
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.clinicData,
                                                        "postal_code",
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              t.submitted &&
                                              !t.$v.clinicData.postal_code
                                                .required
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
                                                            t.formTranslation
                                                              .common
                                                              .postal_code_required
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  "" !==
                                                    t.clinicData.postal_code &&
                                                  !t.$v.clinicData.postal_code
                                                    .postalCode
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
                                                            t.formTranslation
                                                              .common
                                                              .postal_code_validation_1
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t.submitted &&
                                                  !t.$v.clinicData.postal_code
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
                                                            t.formTranslation
                                                              .common
                                                              .postal_code_validation_2
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          ),
                                        ]),
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
                                          " " +
                                            t._s(
                                              t.formTranslation.clinic
                                                .clinic_admin_detail
                                            )
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "pl-lg-4" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col-md-8" }, [
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-6" },
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
                                                          for: "first_name",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.fname
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
                                                            t.clinicData
                                                              .first_name,
                                                          expression:
                                                            "clinicData.first_name",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        " is-invalid":
                                                          t.submitted &&
                                                          t.$v.clinicData
                                                            .first_name.$error,
                                                      },
                                                      attrs: {
                                                        id: "first_name",
                                                        placeholder:
                                                          t.formTranslation
                                                            .clinic.fname_plh,
                                                        required: "required",
                                                        name: "first_name",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.clinicData
                                                            .first_name,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.clinicData,
                                                              "first_name",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.clinicData.first_name
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
                                              { staticClass: "col-md-6" },
                                              [
                                                e(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    e(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "col-md-12 form-control-label",
                                                        attrs: {
                                                          for: "last_name",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                              " +
                                                            t._s(
                                                              t.formTranslation
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
                                                            t.clinicData
                                                              .last_name,
                                                          expression:
                                                            "clinicData.last_name",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        " is-invalid":
                                                          t.submitted &&
                                                          t.$v.clinicData
                                                            .last_name.$error,
                                                      },
                                                      attrs: {
                                                        id: "last_name",
                                                        placeholder:
                                                          t.formTranslation
                                                            .receptionist
                                                            .lname_plh,
                                                        required: "required",
                                                        name: "last_name",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.clinicData
                                                            .last_name,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.clinicData,
                                                              "last_name",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.clinicData.last_name
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
                                                                    .common
                                                                    .lname_required
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
                                              { staticClass: "col-md-6" },
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
                                                        attrs: { for: "email" },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.email
                                                          ) +
                                                            "\n                              "
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
                                                            t.clinicData
                                                              .user_email,
                                                          expression:
                                                            "clinicData.user_email",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        " is-invalid":
                                                          t.submitted &&
                                                          t.$v.clinicData
                                                            .user_email.$error,
                                                      },
                                                      attrs: {
                                                        id: "email",
                                                        placeholder:
                                                          t.formTranslation
                                                            .clinic.email_plh,
                                                        required: "required",
                                                        name: "user_email",
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.clinicData
                                                            .user_email,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.clinicData,
                                                              "user_email",
                                                              e.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.clinicData.user_email
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
                                                                  .email_required
                                                              ) +
                                                                "\n                            "
                                                            ),
                                                          ]
                                                        )
                                                      : t.submitted &&
                                                        !t.$v.clinicData
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
                                              { staticClass: "col-md-6" },
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
                                                          for: "mobile_number",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                              " +
                                                            t._s(
                                                              t.formTranslation
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
                                                        id: "mobile_number",
                                                        clearable: "",
                                                        "default-country-code":
                                                          t.defaultCountryCode_admin,
                                                        "no-example": "",
                                                      },
                                                      on: {
                                                        update:
                                                          t.contactUpdateHandaler_admin,
                                                      },
                                                      model: {
                                                        value:
                                                          t.clinicData
                                                            .mobile_number,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.clinicData,
                                                            "mobile_number",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "clinicData.mobile_number",
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.clinicData
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
                                                                "\n                            "
                                                            ),
                                                          ]
                                                        )
                                                      : (t.submitted &&
                                                          !t.$v.clinicData
                                                            .mobile_number
                                                            .minLength) ||
                                                        !t.$v.clinicData
                                                          .mobile_number
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
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .contact_validation_1
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
                                              { staticClass: "col-md-6" },
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
                                                        attrs: { for: "dob" },
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
                                                            t.clinicData.dob,
                                                          expression:
                                                            "clinicData.dob",
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
                                                        value: t.clinicData.dob,
                                                      },
                                                      on: {
                                                        input: function (e) {
                                                          e.target.composing ||
                                                            t.$set(
                                                              t.clinicData,
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
                                                  { staticClass: "form-group" },
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
                                                          "\n                              " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common.gender
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.clinicData
                                                                    .gender,
                                                                expression:
                                                                  "clinicData.gender",
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
                                                                t.clinicData
                                                                  .gender,
                                                                "male"
                                                              ),
                                                            },
                                                            on: {
                                                              change: function (
                                                                e
                                                              ) {
                                                                return t.$set(
                                                                  t.clinicData,
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.clinicData
                                                                    .gender,
                                                                expression:
                                                                  "clinicData.gender",
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
                                                                t.clinicData
                                                                  .gender,
                                                                "female"
                                                              ),
                                                            },
                                                            on: {
                                                              change: function (
                                                                e
                                                              ) {
                                                                return t.$set(
                                                                  t.clinicData,
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
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      t
                                                                        .clinicData
                                                                        .gender,
                                                                    expression:
                                                                      "clinicData.gender",
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
                                                                  checked: t._q(
                                                                    t.clinicData
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
                                                                        t.clinicData,
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
                                                    ]),
                                                    t._v(" "),
                                                    t.submitted &&
                                                    !t.$v.clinicData.gender
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
                                                                    .common
                                                                    .gender_required
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
                                                              t.formTranslation
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
                                                          t.clinicData
                                                            .choose_language,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.clinicData,
                                                            "choose_language",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "clinicData.choose_language",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : t._e(),
                                          ]),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-md-4" }, [
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
                                                              ref: "admin_file",
                                                              staticClass:
                                                                "p-2",
                                                              staticStyle: {
                                                                color:
                                                                  "transparent",
                                                              },
                                                              attrs: {
                                                                id: "admin_file",
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.uploadAdmin();
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
                                                                  for: "admin_file",
                                                                  title:
                                                                    t
                                                                      .formTranslation
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
                                                                t.adminPreview +
                                                                ");",
                                                              attrs: {
                                                                id: "adminImagePreview",
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
                                          ]),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "row mt-4" }, [
                                        e("div", { staticClass: "col-md-4" }, [
                                          e("div", {
                                            staticClass: "form-group",
                                          }),
                                        ]),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e("hr", { staticClass: "my-4" }),
                                    t._v(" "),
                                    e("div", { staticClass: "row pr-2" }, [
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
                                                          )
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
                                                              .clinic.save_btn
                                                          ) +
                                                          "\n                      "
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
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-col",
                          {
                            staticClass: "col-xl-3 col-lg-4 order-lg-2 order-1",
                          },
                          [
                            e("div", { staticClass: "card card-profile" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "row justify-content-center mt-4",
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
                                            staticStyle: {
                                              color: "transparent",
                                            },
                                            attrs: {
                                              id: "clinicfile",
                                              type: "button",
                                            },
                                            on: {
                                              click: function (e) {
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
                                                  rawName: "v-b-tooltip.hover",
                                                  modifiers: { hover: !0 },
                                                },
                                              ],
                                              attrs: {
                                                for: "clinicfile",
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
                                e(
                                  "div",
                                  { staticClass: "text-center kc-profile" },
                                  [
                                    e("h5", { staticClass: "h3" }, [
                                      t._v(
                                        "\n                  " +
                                          t._s(t.clinicData.name) +
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
                                            t._s(t.clinicData.email) +
                                            "\n                "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    "" !== t.clinicData.address
                                      ? e("div", { staticClass: "h5 mt-4" }, [
                                          t._v(
                                            "\n                  " +
                                              t._s(t.clinicData.address) +
                                              "\n                "
                                          ),
                                        ])
                                      : t._e(),
                                    t._v(" "),
                                    e("div", [
                                      t._v(
                                        "\n                  " +
                                          t._s(
                                            t._f("clinicSpecialityFormat")(
                                              t.clinicData.specialties
                                            )
                                          ) +
                                          "\n                "
                                      ),
                                    ]),
                                  ]
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
            );
          },
          [],
          !1,
          null,
          "5a127a5c",
          null
        ).exports),
      Nt = Object(h.a)(
        {},
        function () {
          return this._self._c, this._m(0);
        },
        [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "container-fluid" }, [
              e("div", { staticClass: "row justify-content-center" }, [
                e("div", { staticClass: "col-md-12" }, [
                  e("div", { staticClass: "card p-0" }, [
                    e("div", { staticClass: "card-header" }, [
                      e("h2", [t._v("Version Update (V2.0.0)")]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "card-body" }, [
                      e("ul", [
                        e("li", [
                          e("h3", { staticClass: "alert-heading" }, [
                            t._v("Profile Image"),
                          ]),
                          t._v(" "),
                          e("ul", [
                            e("li", [t._v("New Enhanced Filters and view")]),
                            t._v(" "),
                            e("li", [t._v("The booking widget is updated")]),
                            t._v(" "),
                            e("li", [
                              t._v(
                                "Visiting Type is replaced with services (please check service tab)"
                              ),
                            ]),
                            t._v(" "),
                            e("li", [
                              t._v(
                                "Appointment check-in and check-out flow updated"
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("li", [
                          e("h3", { staticClass: "alert-heading" }, [
                            t._v("Services"),
                          ]),
                          t._v(" "),
                          e("ul", [
                            e("li", [
                              t._v("Added charges and doctor selection"),
                            ]),
                            t._v(" "),
                            e("li", [
                              t._v(
                                "Services will be used for invoicing and other future payment related implementations"
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("li", [
                          e("h3", { staticClass: "alert-heading" }, [
                            t._v("Doctor Sessions"),
                          ]),
                          t._v(" "),
                          e("ul", [
                            e("li", [
                              t._v(
                                "This tab helps you to set sessions for individual Doctors"
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("li", [
                          e("h3", { staticClass: "alert-heading" }, [
                            t._v("Settings"),
                          ]),
                          t._v(" "),
                          e("ul", [
                            e("li", [
                              t._v(
                                " New refined settings with various settings like email, invoice, currency, etc."
                              ),
                            ]),
                            t._v(" "),
                            e("li", [
                              t._v(
                                " Set currency prefix,postfix and decimals points."
                              ),
                            ]),
                            t._v(" "),
                            e("li", [
                              t._v(" Enable/Disable email notification."),
                            ]),
                            t._v(" "),
                            e("li", [
                              t._v(" Individual doctor field customization "),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("li", { staticClass: "pt-2" }, [
                          t._v(
                            "Other than this many more fine-tunings and tweaks are done. Please email at hello@iqonic.design if you face any issues with the update."
                          ),
                        ]),
                        t._v(" "),
                        e("p"),
                        e("h3", [t._v("Note: ")]),
                        t._v(
                          "\n                1) If you face any issue then try deactivating and activating the plugin or contact us. "
                        ),
                        e("br"),
                        t._v(
                          "\n                2) If you want to revert old version. PLease install "
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://wordpress.org/plugins/wp-rollback/",
                              target: "_blank",
                            },
                          },
                          [t._v("wp-rollback ")]
                        ),
                        t._v(" plugin\n            "),
                        e("p"),
                        t._v(" "),
                        e("h3", [
                          t._v(
                            "We will keep improving with your support! Thank You! "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      ).exports,
      Bt = n(363).a,
      Ft =
        (n(680),
        Object(h.a)(
          Bt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-card",
              {
                staticClass: "card-body common-setting",
                attrs: { "header-tag": "header", "footer-tag": "footer" },
              },
              [
                e("NotificationTestModal", { ref: "NotificationTestModal" }),
                t._v(" "),
                t.formLoader
                  ? e(
                      "div",
                      { staticClass: "page-loader-section" },
                      [e("loader-component-2")],
                      1
                    )
                  : e(
                      "div",
                      { staticClass: "col-md-12" },
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
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.formTranslation.settings.pro_settings
                                      ) +
                                      "\n            "
                                  ),
                                  "off" == t.request_status
                                    ? e(
                                        "a",
                                        {
                                          attrs: {
                                            href: "https://apps.iqonic.design/docs/product/kivicare/pro-version/",
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
                              ]),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("form", { attrs: { id: "uploadFile" } }, [
                              e("div", { staticClass: "row p-2" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e("h2", [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.formTranslation.pro_setting
                                            .theme_setting
                                        ) +
                                        "\n            "
                                    ),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-4" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      { staticClass: "form-control-label" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.pro_setting
                                              .set_site_logo
                                          ) + " "
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
                                            void 0 === t.isMediaUpload
                                              ? e("input", {
                                                  staticClass:
                                                    "btn btn-primary px-2",
                                                  attrs: {
                                                    type: "file",
                                                    id: "siteLogo",
                                                    placeholder:
                                                      t.formTranslation.common
                                                        .choose_file,
                                                  },
                                                  on: {
                                                    change: t.uploadsiteLogo,
                                                  },
                                                })
                                              : t._e(),
                                            t._v(" "),
                                            void 0 !== t.isMediaUpload
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-primary px-2",
                                                    attrs: {
                                                      type: "button",
                                                      id: "siteLogo",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return (
                                                          e.preventDefault(),
                                                          t.uploadsiteLogo()
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .choose_file
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                        t._v(" "),
                                        void 0 !== t.isMediaUpload
                                          ? e(
                                              "label",
                                              {
                                                staticClass: "input-group-text",
                                                attrs: { for: "siteLogo" },
                                              },
                                              [t._v(t._s(t.new_site_logo))]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e(
                                    "div",
                                    { staticClass: "card-profile-image" },
                                    [
                                      -1 != t.getSiteLogo &&
                                      null != t.getSiteLogo &&
                                      "" != t.getSiteLogo
                                        ? e("img", {
                                            staticClass:
                                              "navbar-brand-img ml-2",
                                            staticStyle: {
                                              "max-height": "100px",
                                            },
                                            attrs: {
                                              src: t.getSiteLogo,
                                              alt: "get",
                                            },
                                          })
                                        : e("img", {
                                            staticClass:
                                              "navbar-brand-img ml-2",
                                            staticStyle: {
                                              "max-height": "100px",
                                            },
                                            attrs: {
                                              src: t.logoURL,
                                              alt: "else",
                                            },
                                          }),
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
                                      { staticClass: "form-control-label" },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.pro_setting
                                              .set_site_loader
                                          ) + " "
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
                                            void 0 === t.isMediaUpload
                                              ? e("input", {
                                                  staticClass:
                                                    "btn btn-primary px-2",
                                                  attrs: {
                                                    type: "file",
                                                    id: "siteLoader",
                                                    placeholder:
                                                      t.formTranslation.common
                                                        .choose_file,
                                                  },
                                                  on: {
                                                    change: t.uploadSiteLoader,
                                                  },
                                                })
                                              : t._e(),
                                            t._v(" "),
                                            void 0 !== t.isMediaUpload
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-primary px-2",
                                                    attrs: {
                                                      type: "button",
                                                      id: "siteLoader",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return (
                                                          e.preventDefault(),
                                                          t.uploadSiteLoader()
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
                                                          .choose_file
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                        t._v(" "),
                                        void 0 !== t.isMediaUpload
                                          ? e(
                                              "label",
                                              {
                                                staticClass: "input-group-text",
                                                attrs: { for: "siteLoader" },
                                              },
                                              [t._v(t._s(t.new_site_loader))]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-4" }, [
                                  e(
                                    "div",
                                    { staticClass: "card-profile-image" },
                                    [
                                      e("img", {
                                        staticClass: "navbar-brand-img ml-2",
                                        staticStyle: { "max-height": "100px" },
                                        attrs: { src: t.loaderURL },
                                      }),
                                    ]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-4" }, [
                                  e(
                                    "label",
                                    { staticClass: "form-control-label" },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(
                                            t.formTranslation.pro_setting
                                              .set_theme_color
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.themeColor,
                                        expression: "themeColor",
                                      },
                                    ],
                                    staticClass:
                                      "form-control form-control-color",
                                    attrs: {
                                      type: "color",
                                      id: "example-color-input",
                                    },
                                    domProps: { value: t.themeColor },
                                    on: {
                                      change: t.setSiteThemeColor,
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.themeColor = e.target.value);
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row mt-4" }, [
                                e("div", { staticClass: "col-md-2" }, [
                                  e(
                                    "div",
                                    { staticClass: "form-group kc-thm-st" },
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
                                                        id: "rtl",
                                                        name: "rtl",
                                                        value: "true",
                                                        "unchecked-value":
                                                          "false",
                                                        switch: "",
                                                      },
                                                      on: {
                                                        change:
                                                          t.setSiteRTLMode,
                                                      },
                                                      model: {
                                                        value: t.rtlMode,
                                                        callback: function (e) {
                                                          t.rtlMode = e;
                                                        },
                                                        expression: "rtlMode",
                                                      },
                                                    },
                                                    [
                                                      e("b", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .pro_setting
                                                                .rtl_mode
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
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("form", { attrs: { id: "wordpress-logo" } }, [
                              e("div", { staticClass: "row p-2" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e("h2", [
                                    t._v(
                                      "\n              " +
                                        t._s("WordPress Logo") +
                                        "\n            "
                                    ),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row mt-0" }, [
                                e("div", { staticClass: "col-md-4" }, [
                                  e(
                                    "div",
                                    { staticClass: "form-group kc-thm-st" },
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
                                                        id: "enable-wordpress-status",
                                                        name: "enable-wordpress-status",
                                                        value: "1",
                                                        "unchecked-value": "0",
                                                        switch: "",
                                                      },
                                                      on: {
                                                        change:
                                                          t.setWordpressLogoStatus,
                                                      },
                                                      model: {
                                                        value:
                                                          t.EnableWordpressStatus,
                                                        callback: function (e) {
                                                          t.EnableWordpressStatus =
                                                            e;
                                                        },
                                                        expression:
                                                          "EnableWordpressStatus",
                                                      },
                                                    },
                                                    [
                                                      e("b", [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common
                                                                .enable_wordpress_logo_status
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
                              t._v(" "),
                              "1" == t.EnableWordpressStatus
                                ? e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-4" }, [
                                      e("div", { staticClass: "form-group" }, [
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
                                                      id: "wordpressLogo",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return (
                                                          e.preventDefault(),
                                                          t.saveWordpressLogoImage()
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation.common
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
                                                staticClass: "input-group-text",
                                                attrs: { for: "wordpressLogo" },
                                              },
                                              [t._v(t._s(t.new_wordpress_logo))]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "col-md-4" }, [
                                      e(
                                        "div",
                                        { staticClass: "card-profile-image" },
                                        [
                                          e("img", {
                                            staticClass:
                                              "navbar-brand-img ml-2",
                                            staticStyle: {
                                              "max-height": "100px",
                                            },
                                            attrs: {
                                              src: t.wordpressLogoImagePreview,
                                              alt: "else",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.formTranslation.common
                                          .custom_notification
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row mt-0 mb-0" }, [
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
                                                      id: "customNotification-sms",
                                                      name: "enable-sms",
                                                      value: "yes",
                                                      "unchecked-value": "no",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        return t.saveCustomNotification(
                                                          "sms"
                                                        );
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        t.customNotification
                                                          .enableSMS,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.customNotification,
                                                          "enableSMS",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "customNotification.enableSMS",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common.enable_sms
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
                                                      id: "customNotification-whatsapp",
                                                      name: "enable-sms",
                                                      value: "yes",
                                                      "unchecked-value": "no",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        return t.saveCustomNotification(
                                                          "whatsapp"
                                                        );
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        t.customNotification
                                                          .enableWhatsapp,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.customNotification,
                                                          "enableWhatsapp",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "customNotification.enableWhatsapp",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .enable_whatsapp
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
                            t._v(" "),
                            e("hr", { staticClass: "p-2 m-0" }),
                            t._v(" "),
                            e("div", { staticClass: "row p-2" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("h2", [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.formTranslation.pro_setting
                                          .twilio_account_setting
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row mb-0 mt-0" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-5" }, [
                                    e(
                                      "form",
                                      {
                                        attrs: {
                                          id: "smsForm",
                                          name: "smsForm",
                                          novalidate: !0,
                                          enctype: "multipart/form-data",
                                        },
                                        on: {
                                          submit: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.saveSmsConfigData("submit")
                                            );
                                          },
                                        },
                                      },
                                      [
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
                                                    "b-row",
                                                    {
                                                      staticClass: "mt-2 ml-4",
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
                                                                  attrs: {
                                                                    size: "md",
                                                                    id: "enable-sms",
                                                                    name: "enable-sms",
                                                                    value:
                                                                      "true",
                                                                    "unchecked-value":
                                                                      "false",
                                                                    switch: "",
                                                                  },
                                                                  on: {
                                                                    change:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.saveSmsConfigData(
                                                                          "checkbox"
                                                                        );
                                                                      },
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .smsConfigData
                                                                        .enableSMS,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.smsConfigData,
                                                                          "enableSMS",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "smsConfigData.enableSMS",
                                                                  },
                                                                },
                                                                [
                                                                  e("b", [
                                                                    t._v(
                                                                      " " +
                                                                        t._s(
                                                                          t
                                                                            .formTranslation
                                                                            .pro_setting
                                                                            .twilo_sms_configration
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
                                            ]
                                          ),
                                          t._v(" "),
                                          "true" == t.smsConfigData.enableSMS
                                            ? e(
                                                "div",
                                                { staticClass: "col-md-12" },
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
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "form-control-label",
                                                                  attrs: {
                                                                    for: "account_id",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                            " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .pro_setting
                                                                          .account_sid
                                                                      ) +
                                                                      "\n                          "
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
                                                                        .smsConfigData
                                                                        .account_id,
                                                                    expression:
                                                                      "smsConfigData.account_id",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "account_id",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .settings
                                                                      .plh_enter_acc_sid,
                                                                  name: "account_id",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .smsConfigData
                                                                      .account_id,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.smsConfigData,
                                                                          "account_id",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          t.smsSubmitted &&
                                                          !t.$v.smsConfigData
                                                            .account_id.required
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
                                                                        .pro_setting
                                                                        .account_sid +
                                                                        " " +
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .required
                                                                    ) +
                                                                      "\n                        "
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
                                                                  attrs: {
                                                                    for: "auth_token",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .pro_setting
                                                                        .auth_token
                                                                    ) +
                                                                      "\n                          "
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
                                                                        .smsConfigData
                                                                        .auth_token,
                                                                    expression:
                                                                      "smsConfigData.auth_token",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "auth_token",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .settings
                                                                      .plh_auth_token,
                                                                  name: "auth_token",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .smsConfigData
                                                                      .auth_token,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.smsConfigData,
                                                                          "auth_token",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.smsSubmitted &&
                                                              !t.$v
                                                                .smsConfigData
                                                                .auth_token
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
                                                                            .pro_setting
                                                                            .auth_token +
                                                                            " " +
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .required
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
                                                                    for: "to_number",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .pro_setting
                                                                        .phone_number
                                                                    ) +
                                                                      "\n                          "
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
                                                                        .smsConfigData
                                                                        .to_number,
                                                                    expression:
                                                                      "smsConfigData.to_number",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "to_number",
                                                                  placeholder:
                                                                    t
                                                                      .formTranslation
                                                                      .settings
                                                                      .plh_enter_number,
                                                                  name: "to_number",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t
                                                                      .smsConfigData
                                                                      .to_number,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.smsConfigData,
                                                                          "to_number",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.smsSubmitted &&
                                                              !t.$v
                                                                .smsConfigData
                                                                .to_number
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
                                                                            .pro_setting
                                                                            .phone_number +
                                                                            " " +
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .required
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
                                                ]
                                              )
                                            : t._e(),
                                        ]),
                                        t._v(" "),
                                        "true" == t.smsConfigData.enableSMS
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
                  