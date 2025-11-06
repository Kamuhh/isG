// app.part22-de-30.js
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
                                                      t.smsConfigDataLoading
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
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  "true" == t.smsConfigData.enableSMS
                                    ? e(
                                        "div",
                                        { staticClass: "col-md-7" },
                                        [
                                          e("twillo-guide", {
                                            attrs: { "twillo-type": "sms" },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ]),
                                t._v(" "),
                                t.userData.pro_version >= "1.2.0"
                                  ? e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-5" }, [
                                        e(
                                          "form",
                                          {
                                            attrs: {
                                              id: "kcwhatsAppForm",
                                              name: "kcwhatsAppForm",
                                              novalidate: !0,
                                              enctype: "multipart/form-data",
                                            },
                                            on: {
                                              submit: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.saveWhatsAppConfigData(
                                                    "submit"
                                                  )
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
                                                    {
                                                      staticClass: "form-group",
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
                                                                      attrs: {
                                                                        size: "md",
                                                                        id: "enable-whatsapp",
                                                                        name: "enable-whatsapp",
                                                                        value:
                                                                          "true",
                                                                        "unchecked-value":
                                                                          "false",
                                                                        switch:
                                                                          "",
                                                                      },
                                                                      on: {
                                                                        change:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return t.saveWhatsAppConfigData(
                                                                              "checkbox"
                                                                            );
                                                                          },
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          t
                                                                            .whatsAppConfigData
                                                                            .enableWhatsApp,
                                                                        callback:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            t.$set(
                                                                              t.whatsAppConfigData,
                                                                              "enableWhatsApp",
                                                                              e
                                                                            );
                                                                          },
                                                                        expression:
                                                                          "whatsAppConfigData.enableWhatsApp",
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
                                                                                .twilo_whatsapp_configration
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
                                              "true" ==
                                              t.whatsAppConfigData
                                                .enableWhatsApp
                                                ? e(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
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
                                                                    "label",
                                                                    {
                                                                      staticClass:
                                                                        "form-control-label",
                                                                      attrs: {
                                                                        for: "wa_account_id",
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .whatsAppConfigData
                                                                              .wa_account_id,
                                                                          expression:
                                                                            "whatsAppConfigData.wa_account_id",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      type: "text",
                                                                      id: "wa_account_id",
                                                                      placeholder:
                                                                        t
                                                                          .formTranslation
                                                                          .settings
                                                                          .plh_enter_acc_sid,
                                                                      name: "wa_account_id",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .whatsAppConfigData
                                                                          .wa_account_id,
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
                                                                              t.whatsAppConfigData,
                                                                              "wa_account_id",
                                                                              e
                                                                                .target
                                                                                .value
                                                                            );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v(" "),
                                                                  t.whatSubmitted &&
                                                                  !t.$v
                                                                    .whatsAppConfigData
                                                                    .wa_account_id
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
                                                                                .account_sid +
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
                                                                        for: "wa_auth_token",
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .whatsAppConfigData
                                                                              .wa_auth_token,
                                                                          expression:
                                                                            "whatsAppConfigData.wa_auth_token",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      type: "text",
                                                                      id: "wa_auth_token",
                                                                      placeholder:
                                                                        t
                                                                          .formTranslation
                                                                          .settings
                                                                          .plh_auth_token,
                                                                      name: "wa_auth_token",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .whatsAppConfigData
                                                                          .wa_auth_token,
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
                                                                              t.whatsAppConfigData,
                                                                              "wa_auth_token",
                                                                              e
                                                                                .target
                                                                                .value
                                                                            );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v(" "),
                                                                  t.whatSubmitted &&
                                                                  !t.$v
                                                                    .whatsAppConfigData
                                                                    .wa_auth_token
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
                                                                        for: "wa_to_number",
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
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .whatsAppConfigData
                                                                              .wa_to_number,
                                                                          expression:
                                                                            "whatsAppConfigData.wa_to_number",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      type: "text",
                                                                      id: "wa_to_number",
                                                                      placeholder:
                                                                        t
                                                                          .formTranslation
                                                                          .settings
                                                                          .plh_enter_number,
                                                                      name: "wa_to_number",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t
                                                                          .whatsAppConfigData
                                                                          .wa_to_number,
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
                                                                              t.whatsAppConfigData,
                                                                              "wa_to_number",
                                                                              e
                                                                                .target
                                                                                .value
                                                                            );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v(" "),
                                                                  t.whatSubmitted &&
                                                                  !t.$v
                                                                    .whatsAppConfigData
                                                                    .wa_to_number
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
                                            "true" ==
                                            t.whatsAppConfigData.enableWhatsApp
                                              ? e(
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
                                                                  click:
                                                                    function (
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
                                                            t._v(" "),
                                                            t.whatsappConfigDataLoading
                                                              ? e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-primary",
                                                                    attrs: {
                                                                      type: "submit",
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
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      "true" ==
                                      t.whatsAppConfigData.enableWhatsApp
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-7" },
                                            [
                                              e("twillo-guide", {
                                                attrs: {
                                                  "twillo-type": "whatapps",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ])
                                  : t._e(),
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
                                          .google_account_setting
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]),
                            ]),
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
                                              t.saveGoogleCalenderConfigData(
                                                "submit"
                                              )
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
                                                                    id: "google-cal-on",
                                                                    name: "google-cal-on",
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
                                                                        return t.saveGoogleCalenderConfigData(
                                                                          "checkbox"
                                                                        );
                                                                      },
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .googleCalData
                                                                        .enableCal,
                                                                    callback:
                                                                      function (
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
                                                                            .common
                                                                            .google_calendar_configuration
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
                                          "true" == t.googleCalData.enableCal
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
                                                                    for: "client_id",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .google_calendar_client_id
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
                                                                        .googleCalData
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
                                                                    t
                                                                      .googleCalData
                                                                      .client_id,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.googleCalData,
                                                                          "client_id",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.googlecalendarSubmitted &&
                                                              !t.$v
                                                                .googleCalData
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
                                                                        "\n                            " +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .google_calendar_client_id +
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
                                                                    for: "client_secret",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .google_calendar_client_secret
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
                                                                        .googleCalData
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
                                                                    t
                                                                      .googleCalData
                                                                      .client_secret,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.googleCalData,
                                                                          "client_secret",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.googlecalendarSubmitted &&
                                                              !t.$v
                                                                .googleCalData
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
                                                                        "\n                            " +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .google_calendar_client_secret +
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
                                                                    for: "app_name",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .app_name
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
                                                                        .googleCalData
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
                                                                    t
                                                                      .googleCalData
                                                                      .app_name,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.target
                                                                        .composing ||
                                                                        t.$set(
                                                                          t.googleCalData,
                                                                          "app_name",
                                                                          e
                                                                            .target
                                                                            .value
                                                                        );
                                                                    },
                                                                },
                                                              }),
                                                              t._v(" "),
                                                              t.googlecalendarSubmitted &&
                                                              !t.$v
                                                                .googleCalData
                                                                .app_name
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
                                                                            .app_name +
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
                                        "true" == t.googleCalData.enableCal
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
                                                                  "\n                      "
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
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  "true" == t.googleCalData.enableCal
                                    ? e(
                                        "div",
                                        { staticClass: "col-md-7" },
                                        [
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-12" },
                                              [
                                                e(
                                                  "h4",
                                                  { staticClass: "mb-3" },
                                                  [
                                                    t._v(
                                                      "\n                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .guide_to_setup_google_calender
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                          t._v(" "),
                                          e(
                                            "b-list-group",
                                            [
                                              e("b-list-group-item", [
                                                t._v(
                                                  t._s("Step:1") +
                                                    "\n                  "
                                                ),
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
                                                      "\n                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .pro_setting
                                                            .please_refer_link
                                                        )
                                                    ),
                                                  ]
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
                                                      id: "patient-cal-on",
                                                      name: "patient-cal-on",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change:
                                                        t.savePatientCalendarStatus,
                                                    },
                                                    model: {
                                                      value: t.patientCalOn,
                                                      callback: function (e) {
                                                        t.patientCalOn = e;
                                                      },
                                                      expression:
                                                        "patientCalOn",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .setting_for_add_event_in_calendar_for_patient
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
                                        t.formTranslation.patient_encounter
                                          .encounters +
                                          " " +
                                          t.formTranslation.common.settings
                                      ) +
                                      "\n          "
                                  ),
                                ]),
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
                                                      id: "clinical-detail-include",
                                                      name: "clinical-detail-include",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change:
                                                        t.saveEncounterClinicalDetailsIncludeInPrescriptionPrint,
                                                    },
                                                    model: {
                                                      value:
                                                        t.clinicalDetailInclude,
                                                      callback: function (e) {
                                                        t.clinicalDetailInclude =
                                                          e;
                                                      },
                                                      expression:
                                                        "clinicalDetailInclude",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .pro_setting
                                                              .clinical_detail
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
                                                      id: "encounter_custom_field_include",
                                                      name: "encounter_custom_field_include-detail-include",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change:
                                                        t.saveEncounterCustomFieldIncludeInPrescriptionPrint,
                                                    },
                                                    model: {
                                                      value:
                                                        t.encounterCustomFieldInclude,
                                                      callback: function (e) {
                                                        t.encounterCustomFieldInclude =
                                                          e;
                                                      },
                                                      expression:
                                                        "encounterCustomFieldInclude",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .pro_setting
                                                              .include_encounter_custom_fields_in_print
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
                                                      id: "clinical-detail-hide-in-patient",
                                                      name: "clinical-detail-hide-in-patient",
                                                      switch: "",
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        return t.saveEncounterClinicalDetailsHideInPatientDashboard();
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        t.clinicalDetailHideInPatient,
                                                      callback: function (e) {
                                                        t.clinicalDetailHideInPatient =
                                                          e;
                                                      },
                                                      expression:
                                                        "clinicalDetailHideInPatient",
                                                    },
                                                  },
                                                  [
                                                    e("b", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .pro_setting
                                                              .clinical_detail_patient_hide
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
                                          .copy_right_text
                                      ) +
                                      "\n          "
                                  ),
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
                                      staticClass: "form-control-label",
                                      attrs: { for: "client_secret" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.pro_setting
                                            .change_copy_right_text
                                        ) + "\n            "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.copyrighttext,
                                        expression: "copyrighttext",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "copyrighttext",
                                      name: "client_secret",
                                    },
                                    domProps: { value: t.copyrighttext },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.copyrighttext = e.target.value);
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
                                        attrs: { type: "submit" },
                                        on: { click: t.saveSiteCopyrightText },
                                      },
                                      [
                                        e("i", {
                                          class: t.copyrighttextLoading
                                            ? "fa fa-save"
                                            : "fa fa-spinner fa-spin",
                                        }),
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
          "1a304e20",
          null
        ).exports),
      $t = {
        name: "LanguageSetting",
        data: function () {
          return {
            locoTranslateOn: !1,
            langsOption: [],
            show: !1,
            lang: { title: "English", id: "en" },
            selectedLang: { label: "English", id: "en" },
            langTitle: "",
            jsonData: [],
            showNote: !1,
            data: [],
            isLanguageLoading: !0,
            isTranslating: !1,
            filters: !1,
            url:
              window.request_data.kiviCarePluginURL +
              "resources/js/lang/en.json",
            locationUrl: "",
            language: [
              { title: "Abkhaz", id: "ab" },
              { title: "Afar", id: "aa" },
              { title: "Afrikaans", id: "af" },
              { title: "Akan", id: "ak" },
              { title: "Albanian", id: "sq" },
              { title: "Amharic", id: "am" },
              { title: "Arabic", id: "ar" },
              { title: "Aragonese", id: "an" },
              { title: "Armenian", id: "hy" },
              { title: "Assamese", id: "as" },
              { title: "Avaric", id: "av" },
              { title: "Avestan", id: "ae" },
              { title: "Aymara", id: "ay" },
              { title: "Azerbaijani", id: "az" },
              { title: "Bambara", id: "bm" },
              { title: "Bashkir", id: "ba" },
              { title: "Basque", id: "eu" },
              { title: "Belarusian", id: "be" },
              { title: "Bengali", id: "bn" },
              { title: "Bihari", id: "bh" },
              { title: "Bislama", id: "bi" },
              { title: "Bosnian", id: "bs" },
              { title: "Breton", id: "br" },
              { title: "Bulgarian", id: "bg" },
              { title: "Burmese", id: "my" },
              { title: "Catalan; Valencian", id: "ca" },
              { title: "Chamorro", id: "ch" },
              { title: "Chechen", id: "ce" },
              { title: "Chichewa; Chewa; Nyanja", id: "ny" },
              { title: "Chinese", id: "zh" },
              { title: "Chuvash", id: "cv" },
              { title: "Cornish", id: "kw" },
              { title: "Corsican", id: "co" },
              { title: "Cree", id: "cr" },
              { title: "Croatian", id: "hr" },
              { title: "Czech", id: "cs" },
              { title: "Danish", id: "da" },
              { title: "Divehi; Dhivehi; Maldivian;", id: "dv" },
              { title: "Dutch", id: "nl" },
              { title: "English", id: "en" },
              { title: "Esperanto", id: "eo" },
              { title: "Estonian", id: "et" },
              { title: "Ewe", id: "ee" },
              { title: "Faroese", id: "fo" },
              { title: "Fijian", id: "fj" },
              { title: "Finnish", id: "fi" },
              { title: "French", id: "fr" },
              { title: "Fula; Fulah; Pulaar; Pular", id: "ff" },
              { title: "Galician", id: "gl" },
              { title: "Georgian", id: "ka" },
              { title: "German", id: "de" },
              { title: "Greek, Modern", id: "el" },
              { title: "Guaraní", id: "gn" },
              { title: "Gujarati", id: "gu" },
              { title: "Haitian; Haitian Creole", id: "ht" },
              { title: "Hausa", id: "ha" },
              { title: "Hebrew (modern)", id: "he" },
              { title: "Herero", id: "hz" },
              { title: "Hindi", id: "hi" },
              { title: "Hiri Motu", id: "ho" },
              { title: "Hungarian", id: "hu" },
              { title: "Interlingua", id: "ia" },
              { title: "Indonesian", id: "id" },
              { title: "Interlingue", id: "ie" },
              { title: "Irish", id: "ga" },
              { title: "Igbo", id: "ig" },
              { title: "Inupiaq", id: "ik" },
              { title: "Ido", id: "io" },
              { title: "Icelandic", id: "is" },
              { title: "Italian", id: "it" },
              { title: "Inuktitut", id: "iu" },
              { title: "Japanese", id: "ja" },
              { title: "Javanese", id: "jv" },
              { title: "Kalaallisut, Greenlandic", id: "kl" },
              { title: "Kannada", id: "kn" },
              { title: "Kanuri", id: "kr" },
              { title: "Kashmiri", id: "ks" },
              { title: "Kazakh", id: "kk" },
              { title: "Khmer", id: "km" },
              { title: "Kikuyu, Gikuyu", id: "ki" },
              { title: "Kinyarwanda", id: "rw" },
              { title: "Kirghiz, Kyrgyz", id: "ky" },
              { title: "Komi", id: "kv" },
              { title: "Kongo", id: "kg" },
              { title: "Korean", id: "ko" },
              { title: "Kurdish", id: "ku" },
              { title: "Kwanyama, Kuanyama", id: "kj" },
              { title: "Latin", id: "la" },
              { title: "Luxembourgish, Letzeburgesch", id: "lb" },
              { title: "Luganda", id: "lg" },
              { title: "Limburgish, Limburgan, Limburger", id: "li" },
              { title: "Lingala", id: "ln" },
              { title: "Lao", id: "lo" },
              { title: "Lithuanian", id: "lt" },
              { title: "Luba-Katanga", id: "lu" },
              { title: "Latvian", id: "lv" },
              { title: "Manx", id: "gv" },
              { title: "Macedonian", id: "mk" },
              { title: "Malagasy", id: "mg" },
              { title: "Malay", id: "ms" },
              { title: "Malayalam", id: "ml" },
              { title: "Maltese", id: "mt" },
              { title: "Māori", id: "mi" },
              { title: "Marathi (Marāṭhī)", id: "mr" },
              { title: "Marshallese", id: "mh" },
              { title: "Mongolian", id: "mn" },
              { title: "Nauru", id: "na" },
              { title: "Navajo, Navaho", id: "nv" },
              { title: "Norwegian Bokmål", id: "nb" },
              { title: "North Ndebele", id: "nd" },
              { title: "Nepali", id: "ne" },
              { title: "Ndonga", id: "ng" },
              { title: "Norwegian Nynorsk", id: "nn" },
              { title: "Norwegian", id: "no" },
              { title: "Nuosu", id: "ii" },
              { title: "South Ndebele", id: "nr" },
              { title: "Occitan", id: "oc" },
              { title: "Ojibwe, Ojibwa", id: "oj" },
              { title: "Oromo", id: "om" },
              { title: "Oriya", id: "or" },
              { title: "Ossetian, Ossetic", id: "os" },
              { title: "Panjabi, Punjabi", id: "pa" },
              { title: "Pāli", id: "pi" },
              { title: "Persian", id: "fa" },
              { title: "Polish", id: "pl" },
              { title: "Pashto, Pushto", id: "ps" },
              { title: "Portuguese", id: "pt" },
              { title: "Quechua", id: "qu" },
              { title: "Romansh", id: "rm" },
              { title: "Kirundi", id: "rn" },
              { title: "Romanian, Moldavian, Moldovan", id: "ro" },
              { title: "Russian", id: "ru" },
              { title: "Sanskrit (Saṁskṛta)", id: "sa" },
              { title: "Sardinian", id: "sc" },
              { title: "Sindhi", id: "sd" },
              { title: "Northern Sami", id: "se" },
              { title: "Samoan", id: "sm" },
              { title: "Sango", id: "sg" },
              { title: "Serbian", id: "sr" },
              { title: "Scottish Gaelic; Gaelic", id: "gd" },
              { title: "Shona", id: "sn" },
              { title: "Sinhala, Sinhalese", id: "si" },
              { title: "Slovak", id: "sk" },
              { title: "Slovene", id: "sl" },
              { title: "Somali", id: "so" },
              { title: "Southern Sotho", id: "st" },
              { title: "Spanish; Castilian", id: "es" },
              { title: "Sundanese", id: "su" },
              { title: "Swahili", id: "sw" },
              { title: "Swati", id: "ss" },
              { title: "Swedish", id: "sv" },
              { title: "Tamil", id: "ta" },
              { title: "Telugu", id: "te" },
              { title: "Tajik", id: "tg" },
              { title: "Thai", id: "th" },
              { title: "Tigrinya", id: "ti" },
              { title: "Tibetan Standard, Tibetan, Central", id: "bo" },
              { title: "Turkmen", id: "tk" },
              { title: "Tagalog", id: "tl" },
              { title: "Tswana", id: "tn" },
              { title: "Tonga (Tonga Islands)", id: "to" },
              { title: "Turkish", id: "tr" },
              { title: "Tsonga", id: "ts" },
              { title: "Tatar", id: "tt" },
              { title: "Twi", id: "tw" },
              { title: "Tahitian", id: "ty" },
              { title: "Uighur, Uyghur", id: "ug" },
              { title: "Ukrainian", id: "uk" },
              { title: "Urdu", id: "ur" },
              { title: "Uzbek", id: "uz" },
              { title: "Venda", id: "ve" },
              { title: "Vietnamese", id: "vi" },
              { title: "Volapük", id: "vo" },
              { title: "Walloon", id: "wa" },
              { title: "Welsh", id: "cy" },
              { title: "Wolof", id: "wo" },
              { title: "Western Frisian", id: "fy" },
              { title: "Xhosa", id: "xh" },
              { title: "Yiddish", id: "yi" },
              { title: "Yoruba", id: "yo" },
              { title: "Zhuang, Chuang", id: "za" },
            ],
          };
        },
        mounted: function () {
          ["administrator"].includes(this.getUserRole()) ||
            this.$router.push({ name: "403" }),
            (this.selectedLang = this.getLang),
            (this.locationUrl = window.location.href),
            null == this.getLang.id
              ? ((this.lang.id = this.lang.id),
                (this.lang.title = this.lang.title))
              : ((this.lang.id = this.getLang.id),
                (this.lang.title = this.getLang.label),
                (this.show = !0)),
            (this.show = !0),
            this.getJsonFile(),
            this.getAllLangOption(),
            this.getTranslate();
        },
        methods: {
          getAllLangOption: function () {
            var t = this;
            Object(s.b)("get_all_lang_option", {})
              .then(function (e) {
                void 0 !== e.data.status && !0 === e.data.status
                  ? (t.langsOption = e.data.data.lang_option)
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
          langChange: function (t) {
            var e = this,
              n = this.$store.state.userDataModule.user;
            (this.$i18n.locale = t.id),
              Object(s.b)("update_language", { user_id: n.ID, lang: t })
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    (displayMessage(t.data.message),
                    (e.selectedLang = t.data.data),
                    window.location.reload());
                })
                .catch(function (t) {});
          },
          languageFilters: function () {
            this.filters = !this.filters;
          },
          langView: function () {
            (this.langTitle = this.lang.title),
              (this.show = !0),
              this.getJsonFile();
          },
          getJsonFile: function () {
            var t = this;
            (this.isLanguageLoading = !0),
              Object(s.b)("get_json_file", {
                filePath: window.request_data.kiviCarePluginURL,
                current: this.lang.id,
              })
                .then(function (e) {
                  (t.isLanguageLoading = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.jsonData = e.data.data);
                })
                .catch(function (e) {
                  (t.isLanguageLoading = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          hide: function () {
            this.showNote = !1;
          },
          showWarning: function () {
            this.showNote = !0;
          },
          saveLanguage: function () {
            var t = this;
            (this.isTranslating = !0),
              Object(s.b)("save_json_data", {
                data: this.jsonData[this.lang.id],
                file_name: this.lang.id,
                langTitle: this.lang.title,
              })
                .then(function (e) {
                  (t.isTranslating = !1),
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (displayMessage(e.data.message),
                      t.$store.dispatch("userDataModule/fetchUserData", {}),
                      (t.$i18n.locale = t.lang.id),
                      (window.location.href = t.locationUrl),
                      window.location.reload());
                })
                .catch(function (e) {
                  (t.isTranslating = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                });
          },
          onLanguageChange: function (t) {
            this.lang = t;
            var e = JSON.parse(JSON.stringify(this.jsonData.en));
            (this.jsonData[t.id] = e), this.getJsonFile();
          },
          locoTranslate: function () {
            var t = this.locoTranslateOn;
            Object(s.b)("save_loco_translate", { locoState: t })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  (displayMessage(t.data.message), window.location.reload());
              })
              .catch(function (t) {});
          },
          getTranslate: function () {
            var t = this;
            this.locoTranslateOn,
              Object(s.b)("get_loco_translate", { locoState: 0 })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.locoTranslateOn = e.data.data);
                })
                .catch(function (t) {});
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          getLang: function () {
            return this.userData.get_lang;
          },
        },
        watch: { lang: function (t) {} },
      },
      Ht =
        (n(682),
        Object(h.a)(
          $t,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-row",
                  [
                    e("b-col", { attrs: { sm: "12" } }, [
                      e(
                        "form",
                        {
                          attrs: { id: "clinicForm", novalidate: !0 },
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.langView.apply(null, arguments)
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
                                                    t.formTranslation
                                                      .pro_setting
                                                      .custom_langauge_translation
                                                  ) + " "
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
                                                          "\n                                    "
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
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e("h4", [
                                      t._v(
                                        "\n                            " +
                                          t._s(
                                            t.formTranslation.common
                                              .loco_translate
                                          ) +
                                          "\n                            "
                                      ),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "label",
                                      { staticClass: "custom-toggle" },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.locoTranslateOn,
                                              expression: "locoTranslateOn",
                                            },
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            checked: "",
                                          },
                                          domProps: {
                                            checked: Array.isArray(
                                              t.locoTranslateOn
                                            )
                                              ? t._i(t.locoTranslateOn, null) >
                                                -1
                                              : t.locoTranslateOn,
                                          },
                                          on: {
                                            change: [
                                              function (e) {
                                                var n = t.locoTranslateOn,
                                                  i = e.target,
                                                  r = !!i.checked;
                                                if (Array.isArray(n)) {
                                                  var o = t._i(n, null);
                                                  i.checked
                                                    ? o < 0 &&
                                                      (t.locoTranslateOn =
                                                        n.concat([null]))
                                                    : o > -1 &&
                                                      (t.locoTranslateOn = n
                                                        .slice(0, o)
                                                        .concat(
                                                          n.slice(o + 1)
                                                        ));
                                                } else t.locoTranslateOn = r;
                                              },
                                              function (e) {
                                                return t.locoTranslate();
                                              },
                                            ],
                                          },
                                        }),
                                        t._v(" "),
                                        e("span", {
                                          staticClass:
                                            "custom-toggle-slider rounded-circle",
                                          attrs: {
                                            "data-label-off": "No",
                                            "data-label-on": "Yes",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              t.locoTranslateOn
                                ? t._e()
                                : e("div", [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "row d-flex align-items-end",
                                      },
                                      [
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
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .pro_setting
                                                          .set_language
                                                      )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("multi-select", {
                                                attrs: {
                                                  "deselect-label": "",
                                                  "select-label": "",
                                                  "tag-placeholder":
                                                    t.formTranslation.settings
                                                      .tag_plh_option,
                                                  id: "lang_id",
                                                  placeholder:
                                                    t.formTranslation.settings
                                                      .plh_search,
                                                  label: "label",
                                                  "track-by": "id",
                                                  options: t.langsOption,
                                                },
                                                on: { select: t.langChange },
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
                                                  value: t.selectedLang,
                                                  callback: function (e) {
                                                    t.selectedLang = e;
                                                  },
                                                  expression: "selectedLang",
                                                },
                                              }),
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
                                                  attrs: { for: "name" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                                    " +
                                                      t._s(
                                                        t.formTranslation
                                                          .pro_setting
                                                          .add_new_langauge
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
                                                  id: "language",
                                                  label: "title",
                                                  "track-by": "id",
                                                  options: t.language,
                                                },
                                                on: {
                                                  select: t.onLanguageChange,
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
                                                  value: t.lang,
                                                  callback: function (e) {
                                                    t.lang = e;
                                                  },
                                                  expression: "lang",
                                                },
                                              }),
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
                                              e("label", {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "name" },
                                              }),
                                              t._v(" "),
                                              e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "button",
                                                    disabled: t.isTranslating,
                                                  },
                                                  on: { click: t.saveLanguage },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.isTranslating
                                                          ? t.formTranslation
                                                              .common.loading
                                                          : t.formTranslation
                                                              .pro_setting
                                                              .translate
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              t.isTranslating
                                                ? e("b-spinner", {
                                                    attrs: {
                                                      variant: "primary",
                                                      label: "Spinning",
                                                    },
                                                  })
                                                : t._e(),
                                              t._v(" "),
                                              e(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: t.languageFilters,
                                                  },
                                                },
                                                [t._v(" language filters ")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.filters
                                      ? e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            t._l(
                                              t.jsonData.en,
                                              function (n, i) {
                                                return e("span", { key: i }, [
                                                  e(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary mr-2 mt-2 mb-2 text-white",
                                                      attrs: {
                                                        type: "button",
                                                        href: "#" + i,
                                                      },
                                                    },
                                                    [t._v(" " + t._s(i) + " ")]
                                                  ),
                                                ]);
                                              }
                                            ),
                                            0
                                          ),
                                        ])
                                      : t._e(),
                                    t._v(" "),
                                    t.show
                                      ? e("div", { staticClass: "row" }, [
                                          e(
                                            "form",
                                            {
                                              staticClass: "w-100",
                                              attrs: { id: "langSave" },
                                              on: {
                                                submit: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.saveLanguage.apply(
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
                                                { staticClass: "col-md-12" },
                                                [
                                                  t.isLanguageLoading
                                                    ? e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "page-loader-section",
                                                        },
                                                        [
                                                          e(
                                                            "loader-component-2"
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  e(
                                                    "b-card",
                                                    {
                                                      staticClass: "p-0 shadow",
                                                      attrs: {
                                                        "body-class":
                                                          "tanslation-key-scroll",
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
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row text-primary",
                                                                  },
                                                                  [
                                                                    e(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "col-md-3 p-4",
                                                                      },
                                                                      [
                                                                        e(
                                                                          "h3",
                                                                          {
                                                                            staticClass:
                                                                              "text-primary",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "  " +
                                                                                t._s(
                                                                                  t
                                                                                    .formTranslation
                                                                                    .common
                                                                                    .key
                                                                                ) +
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
                                                                          "col-md-6 p-4",
                                                                      },
                                                                      [
                                                                        e(
                                                                          "h3",
                                                                          {
                                                                            staticClass:
                                                                              "text-primary",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              " " +
                                                                                t._s(
                                                                                  t
                                                                                    .formTranslation
                                                                                    .common
                                                                                    .english
                                                                                ) +
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
                                                                          "col-md-3 p-4",
                                                                      },
                                                                      [
                                                                        e(
                                                                          "h3",
                                                                          {
                                                                            staticClass:
                                                                              "text-primary",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              " " +
                                                                                t._s(
                                                                                  t
                                                                                    .lang
                                                                                    .title
                                                                                ) +
                                                                                " "
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
                                                        ],
                                                        null,
                                                        !1,
                                                        2301446102
                                                      ),
                                                    },
                                                    [
                                                      t._v(" "),
                                                      t._l(
                                                        t.jsonData.en,
                                                        function (n, i) {
                                                          return e(
                                                            "div",
                                                            {
                                                              key: i,
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
                                                                        "row",
                                                                    },
                                                                    [
                                                                      e(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "col-md-12 text-center text-primary p-4",
                                                                          staticStyle:
                                                                            {
                                                                              border:
                                                                                "1px solid",
                                                                            },
                                                                          attrs:
                                                                            {
                                                                              id: i,
                                                                            },
                                                                        },
                                                                        [
                                                                          e(
                                                                            "b",
                                                                            [
                                                                              t._v(
                                                                                "  " +
                                                                                  t._s(
                                                                                    i
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
                                                                  t._l(
                                                                    Object.keys(
                                                                      n
                                                                    ),
                                                                    function (
                                                                      r,
                                                                      o
                                                                    ) {
                                                                      return e(
                                                                        "div",
                                                                        {
                                                                          key: o,
                                                                          staticClass:
                                                                            "row p-3",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "col-md-3",
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                "\n                                                    " +
                                                                                  t._s(
                                                                                    r
                                                                                  ) +
                                                                                  "\n                                                "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "col-md-4",
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                "\n                                                    " +
                                                                                  t._s(
                                                                                    n[
                                                                                      r
                                                                                    ]
                                                                                  ) +
                                                                                  "\n                                                "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " "
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "col-md-5",
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
                                                                                            .jsonData[
                                                                                            t
                                                                                              .lang
                                                                                              .id
                                                                                          ][
                                                                                            i
                                                                                          ][
                                                                                            r
                                                                                          ],
                                                                                        expression:
                                                                                          "jsonData[lang.id][key][json1]",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "text",
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        t
                                                                                          .jsonData[
                                                                                          t
                                                                                            .lang
                                                                                            .id
                                                                                        ][
                                                                                          i
                                                                                        ][
                                                                                          r
                                                                                        ],
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
                                                                                            t
                                                                                              .jsonData[
                                                                                              t
                                                                                                .lang
                                                                                                .id
                                                                                            ][
                                                                                              i
                                                                                            ],
                                                                                            r,
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
                                                                      );
                                                                    }
                                                                  ),
                                                                ],
                                                                2
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
                                        ])
                                      : t._e(),
                                  ]),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "button",
                            {
                              staticClass: "btn btn-primary float-right mt-4",
                              attrs: { type: "submit" },
                            },
                            [t._v(t._s(t.formTranslation.common.save))]
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
            );
          },
          [],
          !1,
          null,
          "489d96c8",
          null
        ).exports),
      Yt = n(365).a,
      Ut =
        (n(686),
        Object(h.a)(
          Yt,
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
                          show: Boolean(
                            1 != t.userData.addOns.kiviPro && t.isEncounterTemp
                          ),
                          variant: "white",
                          opacity: 0.4,
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
                                      { staticClass: "align-items-center" },
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
                                              t._v(t._s(t.encounterName)),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        "patient" !== t.getUserRole()
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
                                                            "\n              "
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t.addEncounterButton &&
                                                    t.kcCheckPermission(
                                                      "patient_encounter_add"
                                                    )
                                                      ? e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-primary",
                                                            attrs: {
                                                              to: {
                                                                name: "patient-encounter.create",
                                                                params: {
                                                                  patient_id:
                                                                    t
                                                                      .patientEncountersRequest
                                                                      .login_id,
                                                                },
                                                              },
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.handleEncounterForm(
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
                                                                    ? t
                                                                        .formTranslation
                                                                        .encounter_dashboard
                                                                        .close_form
                                                                    : t
                                                                        .formTranslation
                                                                        .encounter_dashboard
                                                                        .add_encounter
                                                                ) +
                                                                "\n              "
                                                            ),
                                                          ]
                                                        )
                                                      : t.kcCheckPermission(
                                                          "encounters_template_add"
                                                        ) &&
                                                        t.addEncounterTemplateButton
                                                      ? e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-primary",
                                                            attrs: {
                                                              to: {
                                                                name: "patient-encounter.create",
                                                                params: {
                                                                  patient_id:
                                                                    t
                                                                      .patientEncountersRequest
                                                                      .login_id,
                                                                },
                                                              },
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.handleEncounterTemplateForm(
                                                                  {}
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              staticClass:
                                                                "fa fa-plus",
                                                            }),
                                                            t._v(
                                                              "\n                " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .add_encounter_template
                                                                ) +
                                                                "\n              "
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
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
                            t.showAddForm && !t.isEncounterTemp
                              ? e(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      id: "encounterDataForm",
                                      visible: t.showAddForm,
                                    },
                                  },
                                  [
                                    e("Create", {
                                      attrs: {
                                        encounterId: t.encounterId,
                                        patientField: t.patientField,
                                        clinicField: t.clinicField,
                                      },
                                      on: {
                                        getPatientEncountersData:
                                          t.getPatientEncountersData,
                                        closeEncounterForm:
                                          t.closeEncounterForm,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            t.showEditForm && t.encounterId
                              ? e(
                                  "b-collapse",
                                  {
                                    attrs: {
                                      visible: t.showEditForm,
                                      role: "tabpanel",
                                    },
                                  },
                                  [
                                    t.encounterId
                                      ? e("Create", {
                                          attrs: {
                                            encounterId: t.encounterId,
                                            patientField: t.patientField,
                                          },
                                          on: {
                                            getPatientEncountersData:
                                              t.getPatientEncountersData,
                                            closeEncounterForm:
                                              t.closeEncounterForm,
                                          },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                )
                              : t._e(),
                            t._v(" "),
                            t.encounterCustomFormModal
                              ? e("CustomForm", {
                                  attrs: {
                                    data: t.encounterCustomFormData,
                                    viewMode: t.encounterCustomFormViewMode,
                                    customFormModal: t.encounterCustomFormModal,
                                  },
                                  on: {
                                    closeModal: function (e) {
                                      t.encounterCustomFormModal = !1;
                                    },
                                  },
                                })
                              : t._e(),
                            t._v(" "),
                            t.showAddTemplateForm
                              ? e(
                                  "ModalPopup",
                                  {
                                    attrs: {
                                      modalId: t.isEditing
                                        ? "edit-encounter-template"
                                        : "create-encounter-template",
                                      modalSize: "md",
                                      openModal: t.showAddTemplateForm,
                                      modalTitle: t.isEditing
                                        ? t.formTranslation.common
                                            .edit_encounter_template
                                        : t.formTranslation.common
                                            .add_encounter_template,
                                    },
                                    on: {
                                      closeModal: function (e) {
                                        return t.closeEncounterTemplateForm();
                                      },
                                    },
                                  },
                                  [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "template_name" },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation
                                                  .encounter_dashboard
                                                  .template_name
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
                                            value: t.encounter_template.name,
                                            expression:
                                              "encounter_template.name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "template_name",
                                          placeholder:
                                            t.formTranslation
                                              .encounter_dashboard
                                              .template_name_placeholder,
                                        },
                                        domProps: {
                                          value: t.encounter_template.name,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.encounter_template,
                                                "name",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      t.formSubmitted &&
                                      !t.$v.encounter_template.name.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n            " +
                                                  t._s(
                                                    t.formTranslation
                                                      .patient_bill
                                                      .encounter_template_name_required
                                                  ) +
                                                  ". "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                    t._v(" "),
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
                                              "btn btn-outline-primary",
                                            on: {
                                              click: function (e) {
                                                return t.closeEncounterTemplateForm();
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .cancel
                                                ) +
                                                "\n          "
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
                                                return t.addTemplateHandle();
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation
                                                    .encounter_dashboard.add_btn
                                                ) +
                                                "\n          "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
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
                                      on: {
                                        onBillCancel: function (e) {
                                          t.billDetailsModel = !1;
                                        },
                                      },
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
                                      {
                                        staticClass: "mb-0 table-fixed-height",
                                      },
                                      [
                                        e(
                                          "vue-good-table",
                                          {
                                            ref: "dataTable",
                                            attrs: {
                                              columns:
                                                t.patientEncounterList.column,
                                              rows: t.patientEncounterList.data,
                                              "search-options": {
                                                enabled: !0,
                                                placeholder:
                                                  "encounter-template" ==
                                                  t.$route.name
                                                    ? t.formTranslation.common
                                                        .search_encounter_template_field_data_global_placeholder
                                                    : t.formTranslation.common
                                                        .search_encounter_field_data_global_placeholder,
                                              },
                                              mode: "remote",
                                              styleClass: "vgt-table striped",
                                              totalRows: t.totalRows,
                                              "pagination-options": {
                                                enabled: !0,
                                                mode: "pages",
                                              },
                                              "select-options": t.selectOptions,
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
                                                    "encounter_date" === i.field
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-start align-items-center",
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
                                                                          .encounter_date
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
                                                                                  "form-control-sm",
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
                                                                      .encounter_date,
                                                                  callback:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.$set(
                                                                        t
                                                                          .serverParams
                                                                          .columnFilters,
                                                                        "encounter_date",
                                                                        e
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "serverParams.columnFilters.encounter_date",
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
                                                                        (t.serverParams.columnFilters.encounter_date =
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
                                                    "encounter_date" ==
                                                    n.column.field
                                                      ? e("div", [
                                                          t._v(
                                                            "\n                  " +
                                                              t._s(
                                                                n.row
                                                                  .encounter_date
                                                              ) +
                                                              "\n                "
                                                          ),
                                                        ])
                                                      : "patient_id" ==
                                                        n.column.field
                                                      ? e("div", [
                                                          t._v(
                                                            "\n                  " +
                                                              t._s(
                                                                n.row
                                                                  .patient_name
                                                              ) +
                                                              "\n                "
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
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .closed
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
                                                            t.isEncounterTemp ||
                                                            (!n.row
                                                              .encounter_edit_after_close_status &&
                                                              "0" ===
                                                                n.row.status) ||
                                                            "patient" ===
                                                              t.getUserRole() ||
                                                            !t.kcCheckPermission(
                                                              "patient_encounter_edit"
                                                            )
                                                              ? t.isEncounterTemp &&
                                                                (n.row
                                                                  .encounter_edit_after_close_status ||
                                                                  "0" !==
                                                                    n.row
                                                                      .status) &&
                                                                "patient" !==
                                                                  t.getUserRole() &&
                                                                t.kcCheckPermission(
                                                                  "encounters_template_edit"
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
                                                                            .common
                                                                            .edit,
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            return t.editEncounterTemplate(
                                                                              n.row
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
                                                                : t._e()
                                                              : e(
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
                                                                          return t.editEncounterData(
                                                                            n.row,
                                                                            n
                                                                              .row
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
                                                                ),
                                                            t._v(" "),
                                                            (
                                                              t.isEncounterTemp
                                                                ? t.kcCheckPermission(
                                                                    "encounters_template_view"
                                                                  )
                                                                : t.kcCheckPermission(
                                                                    "patient_encounter_view"
                                                                  )
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
                                                                      title:
                                                                        t
                                                                          .formTranslation
                                                                          .patient_encounter
                                                                          .encounter_dashboard,
                                                                      to: {
                                                                        name: "patient-encounter.dashboard",
                                                                        params:
                                                                          {
                                                                            encounter_id:
                                                                              n
                                                                                .row
                                                                                .id,
                                                                          },
                                                                        query: {
                                                                          isEncounterTemp:
                                                                            t.isEncounterTemp,
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
                                                            t._v(" "),
                                                            1 ==
                                                              t.userData.addOns
                                                                .bodyChart &&
                                                            !t.isEncounterTemp &&
                                                            t.kcCheckPermission(
                                                              "body_chart_list"
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
                                                                      title:
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .body_chart,
                                                                      to: {
                                                                        name: "patient-encounter.body-chart",
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
                                                                        "fas fa-x-ray",
                                                                    }),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            t.checkEnableModule(
                                                              "billing"
                                                            ) &&
                                                            "0" ===
                                                              n.row.status &&
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
                                                                          (t.billDetailsModel =
                                                                            !0),
                                                                            (t.encounterId =
                                                                              n.row.id);
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
                                                            t._l(
                                                              n.row
                                                                .custom_forms,
                                                              function (i, r) {
                                                                return (i
                                                                  .conditions
                                                                  .role_id &&
                                                                  0 !==
                                                                    i.conditions
                                                                      .role_id
                                                                      .length &&
                                                                  !i.conditions.role_id.some(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.$store.state.userDataModule.user.roles.includes(
                                                                        e.id
                                                                      );
                                                                    }
                                                                  )) ||
                                                                  1 !=
                                                                    t.userData
                                                                      .addOns
                                                                      .kiviPro ||
                                                                  !t.customFormCondition(
                                                                    n.row,
                                                                    i
                                                                  )
                                                                  ? t._e()
                                                                  : e(
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
                                                                            i
                                                                              .name
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
                                                                            i
                                                                              .name
                                                                              .icon
                                                                              ? i
                                                                                  .name
                                                                                  .icon
                                                                              : "fas fa-book-medical",
                                                                        }),
                                                                      ]
                                                                    );
                                                              }
                                                            ),
                                                            t._v(" "),
                                                            "patient" !==
                                                              t.getUserRole() &&
                                                            (t.isEncounterTemp
                                                              ? ("administrator" ===
                                                                  t.getUserRole() ||
                                                                  ("administrator" !==
                                                                    t.getUserRole() &&
                                                                    n.row
                                                                      .added_by ==
                                                                      t.userData
                                                                        .ID)) &&
                                                                t.kcCheckPermission(
                                                                  "encounters_template_delete"
                                                                )
                                                              : t.kcCheckPermission(
                                                                  "patient_encounter_delete"
                                                                ))
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
                                                                      "btn btn-sm btn-outline-danger",
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
                                                                          return t.deleteEncounterData(
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
                                            e(
                                              "div",
                                              {
                                                attrs: {
                                                  slot: "table-actions",
                                                },
                                                slot: "table-actions",
                                              },
                                              [
                                                !t.isEncounterTemp &&
                                                t.kcCheckPermission(
                                                  "patient_encounter_export"
                                                )
                                                  ? e("module-data-export", {
                                                      attrs: {
                                                        module_data:
                                                          t.patientEncounterList
                                                            .data,
                                                        module_name:
                                                          t.formTranslation
                                                            .patient_bill
                                                            .patients_encounter_list,
                                                        module_type:
                                                          "encounter",
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1
                                            ),
                                            t._v(" "),
                                            t.isEncounterTemp
                                              ? t._e()
                                              : e(
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
                                                                rawName:
                                                                  "v-model",
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
                                                              change: function (
                                                                e
                                                              ) {
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
                                                                  t.globalCheckboxApplyData,
                                                                  "action_perform",
                                                                  e.target
                                                                    .multiple
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
                                                                    value:
                                                                      n.value,
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
                                                              "\n                    " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .apply
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
      Xt = n(341),
      Vt = n(367).a,
      Gt =
        (n(690),
        Object(h.a)(
          Vt,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-row",
              { attrs: { id: "encounterPage" } },
              [
                t.isEncounterTemp
                  ? t._e()
                  : e(
                      "b-col",
                      { attrs: { md: "3" } },
                      [
                        e(
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
                                                        md: "6",
                                                        lg: "12",
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "h3",
                                                        {
                                                          staticClass:
                                                            "encounter-title",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .patient_encounter
                                                                .encounter_details
                                                            )
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
                                      ],
                                      null,
                                      !1,
                                      1169179658
                                    ),
                                  },
                                  [
                                    t._v(" "),
                                    e(
                                      "div",
                                      { staticClass: "row patient-details" },
                                      [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e("div", { staticClass: "mb-0" }, [
                                            e("strong", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common.name
                                                ) + ": "
                                              ),
                                            ]),
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.encounterData.patient_name
                                                )
                                            ),
                                          ]),
                                          t._v(" "),
                                          t.encounterData
                                            .is_patient_unique_id_enable
                                            ? e(
                                                "div",
                                                { staticClass: "mb-0" },
                                                [
                                                  e("strong", [
                                                    t._v(
                                                      t._s(
                                                        t.formTranslation
                                                          .patient.unique_id
                                                      ) + ": "
                                                    ),
                                                  ]),
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.encounterData
                                                          .patient_unique_id
                                                      )
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .email
                                                    ) +
                                                    ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(
                                                t.encounterData.patient_email
                                              ) + " "
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .patient_encounter
                                                        .encounter_date
                                                    ) +
                                                    ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(
                                                t.encounterData.encounter_date
                                              )
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .address
                                                    ) +
                                                    ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(
                                                t.encounterData
                                                  .patient_address ||
                                                  t.formTranslation.common
                                                    .no_records_found
                                              )
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("hr", { staticClass: "m-2 ml-0" }),
                                    t._v(" "),
                                    e(
                                      "div",
                                      { staticClass: "row clinic-details" },
                                      [
                                        e("div", { staticClass: "col-md-12" }, [
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.clinic
                                                      .clinic_name
                                                  ) + ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(t.encounterData.clinic_name)
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.doctor
                                                      .doctor_name
                                                  ) + ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(t.encounterData.doctor_name)
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("div", { staticClass: "mb-0" }, [
                                            e(
                                              "strong",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments.description
                                                  ) + ": "
                                                ),
                                              ]
                                            ),
                                            t._v(
                                              t._s(
                                                t.encounterData.description ||
                                                  t.formTranslation.common
                                                    .no_records_found
                                              )
                                            ),
                                          ]),
                                          t._v(" "),
                                          e(
                                            "div",
                                            { staticClass: "mb-0 mt-1" },
                                            [
                                              e(
                                                "p",
                                                {
                                                  staticClass:
                                                    "mb-0 float-left",
                                                },
                                                [
                                                  1 == t.encounterData.status
                                                    ? e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "badge badge-success p-2",
                                                        },
                                                        [
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common.active
                                                              )
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  0 == t.encounterData.status
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
                                                                  .common.closed
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
                                    t._v(" "),
                                    t.encounterCustomFormModal
                                      ? e("CustomForm", {
                                          attrs: {
                                            data: t.encounterCustomFormData,
                                            viewMode:
                                              t.encounterCustomFormViewMode,
                                            customFormModal:
                                              t.encounterCustomFormModal,
                                          },
                                          on: {
                                            closeModal: function (e) {
                                              t.encounterCustomFormModal = !1;
                                            },
                                          },
                                        })
                                      : t._e(),
                                    t._v(" "),
                                    t.billModel
                                      ? e(
                                          "ModalPopup",
                                          {
                                            attrs: {
                                              modalId: "bill-modal",
                                              modalSize: "lg",
                                              openModal: t.billModel,
                                              modalTitle:
                                                t.formTranslation.patient_bill
                                                  .generate_invoice,
                                            },
                                            on: {
                                              closeModal: function (e) {
                                                t.billModel = !1;
                                              },
                                            },
                                          },
                                          [
                                            e("BillForm", {
                                              attrs: {
                                                encounterId: t.encounterId,
                                                checkOutVal: t.checkOutVal,
                                                appointmentData:
                                                  t.encounterData,
                                                clinic_extra:
                                                  void 0 !==
                                                  t.encounterData.clinic_extra
                                                    ? t.encounterData
                                                        .clinic_extra
                                                    : {},
                                                doctorId:
                                                  t.encounterData.doctor_id,
                                              },
                                              on: {
                                                onBillSaved: t.handleBillSave,
                                                onBillCancel:
                                                  t.handleBillCancel,
                                              },
                                            }),
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
                                                clinic_extra:
                                                  void 0 !==
                                                  t.encounterData.clinic_extra
                                                    ? t.encounterData
                                                        .clinic_extra
                                                    : {},
                                              },
                                              on: {
                                                onBillCancel: function (e) {
                                                  t.billDetailsModel = !1;
                                                },
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            "patient" !== t.getUserRole() &&
                            0 != t.encounterData.status &&
                            t.kcCheckPermission("encounters_template_list")
                              ? e(
                                  "b-col",
                                  {
                                    attrs: {
                                      sm: "12",
                                      id: "patient-details-ecounter-template",
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
                                        e(
                                          "b-overlay",
                                          {
                                            attrs: {
                                              show: Boolean(
                                                1 !=
                                                  t.userData.addOns.kiviPro &&
                                                  !t.isEncounterTemp
                                              ),
                                              variant: "white",
                                              opacity: 0.4,
                                            },
                                            scopedSlots: t._u(
                                              [
                                                {
                                                  key: "overlay",
                                                  fn: function () {
                                                    return [
                                                      e("overlay-message", {
                                                        attrs: {
                                                          addon_type: "pro",
                                                        },
                                                      }),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
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
                                                                md: "6",
                                                                lg: "12",
                                                              },
                                                            },
                                                            [
                                                              e(
                                                                "h3",
                                                                {
                                                                  staticClass:
                                                                    "encounter-title",
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_encounter
                                                                        .ecounter_template
                                                                    )
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
                                              ],
                                              null,
                                              !1,
                                              3280585047
                                            ),
                                          },
                                          [
                                            t._v(" "),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "row patient-details",
                                              },
                                              [
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
                                                              for: "encounterTemplate",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .appointments
                                                                    .encounter_template
                                                                ) +
                                                                "\n                            "
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e("multi-select", {
                                                          attrs: {
                                                            "deselect-label":
                                                              "",
                                                            "select-label": "",
                                                            "tag-placeholder":
                                                              t.formTranslation
                                                                .appointments
                                                                .encounter_template,
                                                            id: "id",
                                                            placeholder:
                                                              t.formTranslation
                                                                .patient_encounter
                                                                .search_plh,
                                                            label:
                                                              "encounters_template_name",
                                                            "track-by": "id",
                                                            loading:
                                                              t.encounterTemplateLoader,
                                                            disabled:
                                                              t.encounterTemplateLoader,
                                                            options:
                                                              t.encounterTemplates,
                                                          },
                                                          on: {
                                                            select:
                                                              t.ChangeEncounterHandler,
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
                                                              t.encounterTemplate,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.encounterTemplate =
                                                                e;
                                                            },
                                                            expression:
                                                              "encounterTemplate",
                                                          },
                                                        }),
                                                      ],
                                                      1
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
                                )
                              : t._e(),
                          ],
                          1
                        ),
                        t._v(" "),
                        t.encounterData.appointment_id &&
                        ((t.encounterData.appointment_report &&
                          t.encounterData.appointment_report.length > 0) ||
                          (t.encounterData.appointment_custom_field &&
                            t.encounterData.appointment_custom_field.length >
                              0))
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
                                                            md: "6",
                                                            lg: "12",
                                                          },
                                                        },
                                                        [
                                                          e("h3", [
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .patient_encounter
                                                                    .patient_extra_details
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
                                          3181997372
                                        ),
                                      },
                                      [
                                        t._v(" "),
                                        t.encounterData.appointment_report &&
                                        t.encounterData.appointment_report
                                          .length > 0
                                          ? e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "mb-0 text-center",
                                                    },
                                                    [
                                                      e("strong", [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .patient
                                                              .medical_report
                                                          ) + " "
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t._l(
                                                    t.encounterData
                                                      .appointment_report,
                                                    function (n, i) {
                                                      return e(
                                                        "div",
                                                        { key: i },
                                                        [
                                                          e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "mt-2",
                                                            },
                                                            [
                                                              e(
                                                                "a",
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
                                                                  attrs: {
                                                                    variant:
                                                                      "outline-primary",
                                                                    title:
                                                                      t
                                                                        .formTranslation
                                                                        .appointments
                                                                        .view_report,
                                                                    href: n.url,
                                                                    target:
                                                                      "_blank",
                                                                  },
                                                                },
                                                                [
                                                                  e("i", {
                                                                    staticClass:
                                                                      "fas fa-external-link-alt mr-1",
                                                                  }),
                                                                  t._v(
                                                                    t._s(
                                                                      n.name
                                                                    ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
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
                                        t._v(" "),
                                        t.encounterData.appointment_report &&
                                        t.encounterData.appointment_report
                                          .length > 0
                                          ? e("hr", { staticClass: "m-2 ml-0" })
                                          : t._e(),
                                        t._v(" "),
                                        t.encounterData
                                          .appointment_custom_field &&
                                        t.encounterData.appointment_custom_field
                                          .length > 0
                                          ? e("div", { staticClass: "row" }, [
                                              e(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "mb-0 text-center",
                                                    },
                                                    [
                                                      e("strong", [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .patient_bill
                                                              .other_info
                                                          ) + " "
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e("div", {
                                                    domProps: {
                                                      innerHTML: t._s(
                                                        t.customFieldContent(
                                                          t.encounterData
                                                            .appointment_custom_field
                                                        )
                                                      ),
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ])
                                          : t._e(),
                                        t._v(" "),
                                        e("hr", {
                                          staticClass:
                                            "m-2 ml-0 print-class d-none",
                                        }),
                                      ]
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
                t._v(" "),
                e(
                  "b-col",
                  { attrs: { md: t.isEncounterTemp ? 12 : 9 } },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "p-0 shadow",
                        attrs: {
                          "header-tag": "header",
                          "footer-tag": "footer",
                          "header-class": "sticky-header",
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
                                      { attrs: { sm: "12", md: "3", lg: "3" } },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.kcCheckPermission(
                                                  "medical_records_list"
                                                ) &&
                                                  !t.hideClinicalDetailsToPatient
                                                  ? t.formTranslation
                                                      .encounter_dashboard.title
                                                  : ""
                                              ) +
                                              " "
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-col",
                                      { attrs: { sm: "12", md: "9", lg: "9" } },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "d-md-flex d-lg-flex d-xl-flex justify-content-end",
                                          },
                                          [
                                            e(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary mb-1",
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
                                                    "\n                "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            t._l(
                                              t.encounterData.custom_forms,
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
                                                    t.encounterData,
                                                    n
                                                  )
                                                  ? t._e()
                                                  : e(
                                                      "button",
                                                      {
                                                        key: i,
                                                        staticClass:
                                                          "btn btn-sm btn-primary mb-1",
                                                        attrs: {
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.customFormOpen(
                                                              t.encounterData,
                                                              n
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        e("i", {
                                                          class:
                                                            n.name &&
                                                            n.name.icon
                                                              ? n.name.icon
                                                              : "fas fa-book-medical",
                                                        }),
                                                        t._v(
                                                          " \n                  " +
                                                            t._s(
                                                              n.name &&
                                                                n.name.text
                                                                ? n.name.text
                                                                : ""
                                                            ) +
                                                            "\n                "
                                                        ),
                                                      ]
                                                    );
                                              }
                                            ),
                                            t._v(" "),
                                            t.userData.addOns.kiviPro &&
                                            !t.isEncounterTemp
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary mb-1",
                                                    attrs: {
                                                      type: "button",
                                                      id: "kc-encounter-print",
                                                      disabled:
                                                        t.isButtonDisabled,
                                                    },
                                                    on: {
                                                      click: t.printEncounter,
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      class: t.iconClass,
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient_encounter
                                                            .print_encounter_btn
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            1 == t.userData.addOns.bodyChart &&
                                            t.kcCheckPermission(
                                              "body_chart_list"
                                            ) &&
                                            !t.isEncounterTemp
                                              ? e(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary mb-1",
                                                    attrs: {
                                                      to: {
                                                        name: "patient-encounter.body-chart",
                                                        params: {
                                                          encounter_id:
                                                            t.encounterId,
                                                        },
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      staticClass:
                                                        "fas fa-x-ray",
                                                    }),
                                                    t._v(
                                                      " \n                  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.body_chart
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            1 == t.userData.addOns.kiviPro &&
                                            t.kcCheckPermission(
                                              "patient_report"
                                            ) &&
                                            !t.isEncounterTemp
                                              ? e(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary mb-1",
                                                    attrs: {
                                                      to: {
                                                        name: "patient-medical-report",
                                                        params: {
                                                          encounter_id:
                                                            t.encounterId,
                                                        },
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      class:
                                                        0 !=
                                                        t.encounterData.status
                                                          ? "fa fa-upload"
                                                          : "fa fa-eye",
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          0 !=
                                                            t.encounterData
                                                              .status
                                                            ? t.formTranslation
                                                                .patient
                                                                .upload_report
                                                            : t.formTranslation
                                                                .reports
                                                                .view_reports_btn
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t.kcCheckPermission(
                                              "patient_bill_add"
                                            ) &&
                                            0 != t.encounterData.status &&
                                            !t.isEncounterTemp
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-outline-danger mb-1 mr-0",
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleEncounterStatus(
                                                          "0"
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      staticClass:
                                                        "fa fa-check",
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient_bill
                                                            .encounter_close
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t.kcCheckPermission(
                                              "patient_bill_add"
                                            ) &&
                                            t.kcCheckPermission(
                                              "patient_appointment_status_change"
                                            ) &&
                                            0 != t.encounterData.status &&
                                            void 0 !==
                                              t.encounterData.appointment_id &&
                                            null !==
                                              t.encounterData.appointment_id
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-outline-danger ml-md-2 ml-ld-2 ml-xl-2 mb-1",
                                                    on: {
                                                      click: function (e) {
                                                        return t.handleEncounterStatus(
                                                          "1"
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      staticClass:
                                                        "fa fa-check",
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient_bill
                                                            .encounter_close_checkout
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            0 == t.encounterData.status &&
                                            t.checkEnableModule("billing") &&
                                            t.kcCheckPermission(
                                              "patient_bill_view"
                                            )
                                              ? e(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary mb-1",
                                                    on: {
                                                      click:
                                                        t.handleBillDetails,
                                                    },
                                                  },
                                                  [
                                                    e("i", {
                                                      staticClass:
                                                        "fa fa-file-invoice",
                                                    }),
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .patient_bill
                                                            .bill_details
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ],
                                          2
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
                        t.kcCheckPermission("medical_records_list") &&
                        !t.hideClinicalDetailsToPatient
                          ? e(
                              "div",
                              { attrs: { id: "print_clinical_details" } },
                              [
                                e(
                                  "b-row",
                                  [
                                    1 != t.userData.addOns.kiviPro ||
                                    1 == t.getEnableEncounter[0].status
                                      ? e(
                                          "b-col",
                                          { attrs: { md: t.getEnableCount } },
                                          [
                                            e("MedicalHistory", {
                                              ref: "medical_history_problems",
                                              attrs: {
                                                updateCounter: t.counter,
                                                recordData: t.problems,
                                                ecounterStatus:
                                                  !0 ===
                                                    t.encounterData
                                                      .encounter_edit_after_close_status ||
                                                  (t.isEncounterTemp
                                                    ? t.kcCheckPermission(
                                                        "encounters_template_edit"
                                                      )
                                                    : t.encounterData.status),
                                                isEcounterTemplateModule:
                                                  t.isEncounterTemp,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    1 != t.userData.addOns.kiviPro ||
                                    1 == t.getEnableEncounter[1].status
                                      ? e(
                                          "b-col",
                                          { attrs: { md: t.getEnableCount } },
                                          [
                                            e("MedicalHistory", {
                                              ref: "medical_history_observation",
                                              attrs: {
                                                updateCounter: t.counter,
                                                recordData: t.observation,
                                                ecounterStatus:
                                                  !0 ===
                                                    t.encounterData
                                                      .encounter_edit_after_close_status ||
                                                  (t.isEncounterTemp
                                                    ? t.kcCheckPermission(
                                                        "encounters_template_edit"
                                                      )
                                                    : t.encounterData.status),
                                                isEcounterTemplateModule:
                                                  t.isEncounterTemp,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    1 != t.userData.addOns.kiviPro ||
                                    1 == t.getEnableEncounter[2].status
                                      ? e(
                                          "b-col",
                                          { attrs: { md: t.getEnableCount } },
                                          [
                                            e("MedicalHistory", {
                                              ref: "medical_history_note",
                                              attrs: {
                                                updateCounter: t.counter,
                                                recordData: t.note,
                                                ecounterStatus:
                                                  !0 ===
                                                    t.encounterData
                                                      .encounter_edit_after_close_status ||
                                                  (t.isEncounterTemp
                                                    ? t.kcCheckPermission(
                                                        "encounters_template_edit"
                                                      )
                                                    : t.encounterData.status),
                                                isEcounterTemplateModule:
                                                  t.isEncounterTemp,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                t.extraClinicalData.length > 0
                                  ? e(
                                      "b-row",
                                      t._l(
                                        t.extraClinicalData,
                                        function (n, i) {
                                          return e(
                                            "b-col",
                                            { key: i, attrs: { md: 4 } },
                                            [
                                              e("MedicalHistory", {
                                                ref: n.ref,
                                                refInFor: !0,
                                                attrs: {
                                                  updateCounter: t.counter,
                                                  recordData: n,
                                                  ecounterStatus:
                                                    !0 ===
                                                      t.encounterData
                                                        .encounter_edit_after_close_status ||
                                                    (t.isEncounterTemp
                                                      ? t.kcCheckPermission(
                                                          "encounters_template_edit"
                                                        )
                                                      : t.encounterData.status),
                                                },
                                              }),
                                            ],
                                            1
                                          );
                                        }
                                      ),
                                      1
                                    )
                                  : t._e(),
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        e(
                          "b-row",
                          {},
                          [
                            e(
                              "b-col",
                              { attrs: { md: "12" } },
                              [
                                t.showCustomField
                                  ? e("Prescription", {
                                      ref: "prescription_ref",
                                      attrs: {
                                        updateCounter: t.counter,
                                        encounterData: {
                                          encounter_id: t.encounterId,
                                          status:
                                            !0 ===
                                            t.encounterData
                                              .encounter_edit_after_close_status
                                              ? "1"
                                              : String(
                                                  Number(
                                                    t.isEncounterTemp
                                                      ? t.kcCheckPermission(
                                                          "encounters_template_edit"
                                                        )
                                                      : t.encounterData.status
                                                  )
                                                ),
                                        },
                                        encounterId: t.encounterId,
                                        isEcounterTemplateModule:
                                          t.isEncounterTemp,
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                            t._v(" "),
                            t.customFieldsLength > 0 &&
                            t.isCustomeFieldExist &&
                            t.checkEnableModule("custom_fields")
                              ? e("b-col", { attrs: { md: "12" } }, [
                                  e(
                                    "form",
                                    {
                                      attrs: {
                                        id: "encounterDataForm",
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
                                        { staticClass: "card shadow p-0" },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "card-header" },
                                            [
                                              e("h4", { staticClass: "mb-0" }, [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .patient_bill.other_info
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          t._v(" "),
                                          e(
                                            "div",
                                            { staticClass: "card-body" },
                                            [
                                              t.showCustomField
                                                ? e("edit-custom-fields", {
                                                    key: t.componentKey,
                                                    attrs: {
                                                      module_type:
                                                        "patient_encounter_module",
                                                      module_id:
                                                        t.customFieldEncounterId,
                                                      customFieldsObj:
                                                        t.customFieldsObj,
                                                      fieldsValue:
                                                        t.customFieldsData,
                                                      doctor_id:
                                                        t.encounterData
                                                          .doctor_id,
                                                      disabledForPatient:
                                                        "patient" ==
                                                        t.getUserRole(),
                                                      ecounterStatus:
                                                        t.encounterData.status,
                                                      encounter_edit_after_close_status:
                                                        t.encounterData
                                                          .encounter_edit_after_close_status,
                                                    },
                                                    on: {
                                                      bindCustomField:
                                                        t.getCustomFieldsValues,
                                                      requiredCustomField:
                                                        t.getRequireFields,
                                                      fieldObject:
                                                        t.handleCustomField,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                          t._v(" "),
                                          "patient" !== t.getUserRole() &&
                                          ("1" === t.encounterData.status ||
                                            ("0" === t.encounterData.status &&
                                              !0 ===
                                                t.encounterData
                                                  .encounter_edit_after_close_status))
                                            ? e(
                                                "div",
                                                { staticClass: "card-footer" },
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
                                                                        type: "submit",
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
                                                                        "   " +
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .loading
                                                                          ) +
                                                                          "\n                                        "
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
                                                                              .encounter_dashboard
                                                                              .presciption_save_btn
                                                                          ) +
                                                                          "\n                                        "
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
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                    ]
                                  ),
                                ])
                              : t._e(),
                          ],
                          1
                        ),
                        t._v(" "),
                        e("div", { staticClass: "print-class mr-3 d-none" }, [
                          e("hr"),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "col-12 d-flex justify-content-end align-items-center",
                              },
                              [
                                e("p", { staticClass: "nameheading" }, [
                                  e("strong", [
                                    t._v(
                                      t._s(
                                        t.formTranslation.patient_encounter
                                          .doctor_signature
                                      )
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                "" !== t.encounterData.doctor_signature
                                  ? e(
                                      "div",
                                      { staticClass: "border-bottom col-4" },
                                      [
                                        e("img", {
                                          attrs: {
                                            src: t.encounterData
                                              .doctor_signature,
                                          },
                                        }),
                                      ]
                                    )
                                  : e("div", {
                                      staticClass: "border-bottom col-4",
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
              ],
              1
            );
          },
          [],
          !1,
          null,
          "5fea796d",
          null
        ).exports),
      Kt = n(370).a,
      Zt =
        (n(692),
        Object(h.a)(
          Kt,
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
                                              t.formTranslation.clinic
                                                .receptionists_list
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.kcCheckPermission("receptionist_add")
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
                                                      "float-right btn btn-sm btn-primary",
                                                    attrs: {
                                                      to: {
                                                        name: "receptionist.create",
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
                                                            .clinic
                                                            .add_receptionist
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
                        t.kcCheckPermission("receptionist_add") &&
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
                                      t.formTranslation.receptionist.first_name,
                                    value: "first_name",
                                  },
                                  {
                                    label:
                                      t.formTranslation.receptionist.last_name,
                                    value: "last_name",
                                  },
                                  {
                                    label: t.formTranslation.receptionist.email,
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
                                      t.formTranslation.receptionist
                                        .receptionist_contact,
                                    value: "contact",
                                  },
                                  {
                                    label:
                                      t.formTranslation.receptionist.gender,
                                    value: "gender",
                                  },
                                ],
                                module_name:
                                  t.formTranslation.common.receptionist,
                                module_type: "receptionist",
                              },
                              on: { reloadList: t.getReceptionistList },
                            })
                          : t._e(),
                        t._v(" "),
                        t.verifyPopupModal
                          ? e(
                              "ModalPopup",
                              {
                                attrs: {
                                  modalId: "appointment-details-modal",
                                  modalSize: "md",
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
                                            "\n                  " +
                                              t._s(
                                                t.verifyModalData.display_name
                                              ) +
                                              "\n                "
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
                                            "\n                  " +
                                              t._s(
                                                t.verifyModalData.mobile_number
                                              ) +
                                              "\n                "
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
                                                "\n                   " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .email
                                                  ) +
                                                  " :\n                "
                                              ),
                                            ]
                                          ),
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.verifyModalData.user_email
                                              ) +
                                              "\n                "
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
                                            "\n                  " +
                                              t._s(
                                                t.verifyModalData.clinic_name
                                              ) +
                                              "\n                "
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
                                            "\n                  " +
                                              t._s(
                                                t.verifyModalData
                                                  .user_registered_formated
                                              ) +
                                              "\n                "
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "row p-2" }, [
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
                                              "\n                  " +
                                                t._s(
                                                  t.verifyButtonLoading
                                                    ? t.formTranslation.common
                                                        .loading
                                                    : t.formTranslation.common
                                                        .verified +
                                                        " " +
                                                        t.formTranslation.clinic
                                                          .receptionist
                                                ) +
                                                "\n                "
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
                                  { attrs: { id: "receptionistPrint" } },
                                  [
                                    e(
                                      "vue-good-table",
                                      {
                                        ref: "dataTable",
                                        attrs: {
                                          columns: t.receptionistsList.column,
                                          rows: t.receptionistsList.data,
                                          mode: "remote",
                                          "search-options": {
                                            enabled: !0,
                                            placeholder:
                                              t.formTranslation.common
                                                .search_receptionist_global_placeholder,
                                          },
                                          totalRows: t.totalRows,
                                          "pagination-options": {
                                            enabled: !0,
                                            mode: "pages",
                                          },
                                          styleClass: "vgt-table striped",
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
                                                          "receptionist_edit"
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
                                                                            "receptionists",
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
                                                          "receptionist_edit"
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
                                                                      .clinic_schedule
                                                                      .dt_lbl_edit,
                                                                  to: {
                                                                    name: "receptionist.edit",
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
                                                          "receptionist_resend_credential"
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
                                                                      .verified,
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
                                                        t.kcCheckPermission(
                                                          "receptionist_delete"
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
                                                                      return t.deleteReceptionistData(
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
                                                      1
                                                    )
                                                  : e("div", [
                                                      t._v(
                                                        "\n                " +
                                                          t._s(
                                                            "display_name" ==
                                                              n.column.field
                                                              ? ""
                                                              : n.formattedRow[
                                                                  n.column.field
                                                                ]
                                                          ) +
                                                          "\n              "
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
                                        e(
                                          "div",
                                          {
                                            attrs: { slot: "table-actions" },
                                            slot: "table-actions",
                                          },
                                          [
                                            t.kcCheckPermission(
                                              "receptionist_export"
                                            )
                                              ? e("module-data-export", {
                                                  attrs: {
                                                    module_data:
                                                      t.receptionistsList.data,
                                                    module_name:
                                                      t.formTranslation.clinic
                                                        .receptionists_list,
                                                    module_type: "receptionist",
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
      Jt = {
        components: { VuePhoneNumberInput: bt.a },
        data: function () {
          return {
            receptionistData: {},
            loading: !1,
            submitted: !1,
            qualificationSubmitted: !1,
            cardTitle: "Add receptionist",
            buttonText: '<i class="fa fa-save"></i> Save',
            price_type: ["range", "fixed"],
            randomString: Object(I.k)(8),
            imagePreview: pluginBASEURL + "assets/images/kc-demo-img.png",
            formLoader: !1,
            clinicMultiselectLoader: !0,
            defaultCountryCode: null,
            defaultUserRegistrationFormSettingData: "on",
          };
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.receptionistData = this.defaultReceptionistData()),
            this.init();
        },
        validations: {
          receptionistData: {
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
            user_email: { required: l.required, emailValidate: I.c },
            mobile_number: {
              required: l.required,
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            user_status: { required: l.required },
            gender: { required: l.required },
            clinic_id: {
              required: Object(l.requiredIf)(function () {
                return (
                  1 == this.userData.addOns.kiviPro &&
                  "administrator" == this.getUserRole()
                );
              }),
            },
            city: {},
            country: {},
            postal_code: {},
          },
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.receptionistData.country_code = t.countryCode),
              (this.receptionistData.country_calling_code =
                t.countryCallingCode);
          },
          init: function () {
            var t = this;
            void 0 !== this.$route.params.id &&
              ((this.cardTitle = this.formTranslation.common.edit_receptionist),
              (this.buttonText =
                '<i class="fa fa-save"></i>' +
                this.formTranslation.common.save),
              (this.formLoader = !0),
              Object(s.a)("receptionist_edit", { id: this.$route.params.id })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    setTimeout(function () {
                      (t.receptionistData = e.data.data),
                        "" !== e.data.data.country_calling_code &&
                          void 0 !== e.data.data.country_calling_code &&
                          (t.defaultCountryCode = e.data.data.country_code),
                        (t.formLoader = !1),
                        t.receptionistData.user_profile &&
                          (t.imagePreview = t.receptionistData.user_profile);
                    }, 200);
                })
                .catch(function (e) {
                  (t.formLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                }));
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.imagePreview = n.url),
                (t.receptionistData.profile_image = n.id);
            }),
              e.open();
          },
          defaultReceptionistData: function () {
            var t = new Date();
            return (
              t.setFullYear(t.getFullYear() - 18),
              {
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
                specialties: [],
                price_type: this.formTranslation.doctor.range,
                price: 0,
                minPrice: 0,
                maxPrice: 0,
                qualifications: [],
                time_slot: 5,
                custom_fields: {},
                user_status: 0,
                clinic_id: "",
                profile_image: "",
              }
            );
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
              this.$v.receptionistData.$invalid
                ? (this.loading = !1)
                : Object(I.n)("receptionistDataForm") &&
                  Object(s.b)("receptionist_save", this.receptionistData)
                    .then(function (e) {
                      (t.loading = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            t.$router.push({ name: "receptionist" }))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
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
          clinics: function () {
            return (
              (this.clinicMultiselectLoader = !1), this.$store.state.clinic
            );
          },
          formTranslation: function () {
            return this.$store.state.staticDataModule.langTranslateData;
          },
        },
      },
      Qt =
        (n(694),
        Object(h.a)(
          Jt,
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
                  : t._e(),
                t._v(" "),
                e("b-col", { attrs: { sm: "12" } }, [
                  e(
                    "form",
                    {
                      attrs: { id: "receptionistDataForm", novalidate: !0 },
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
                                          attrs: { sm: "12", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h3", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.clinic
                                                  .add_receptionist
                                              )
                                            ),
                                          ]),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
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
                                                      "\n                                "
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
                                  e("div", { staticClass: "row p-0" }, [
                                    e("div", { staticClass: "col-md-12 p-0" }, [
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
                                                      "\n                                "
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
                                                    staticClass: "fa fa-save",
                                                  }),
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation
                                                          .receptionist.save_btn
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
                                    ]),
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
                              e("h4", { staticClass: "text-primary mb-4" }, [
                                t._v(
                                  t._s(t.formTranslation.common.basic_details)
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
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "receptionist_id_number" },
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
                                    id: "receptionist_id_number",
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
                                      t._s(t.formTranslation.common.fname) +
                                        " \n                            "
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
                                      value: t.receptionistData.first_name,
                                      expression: "receptionistData.first_name",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    " is-invalid":
                                      t.submitted &&
                                      t.$v.receptionistData.first_name.$error,
                                  },
                                  attrs: {
                                    id: "first_name",
                                    placeholder:
                                      t.formTranslation.receptionist.fname_plh,
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
                                          ) + "\n                            "
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
                                        t._s(t.formTranslation.common.lname) +
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
                                      value: t.receptionistData.last_name,
                                      expression: "receptionistData.last_name",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    " is-invalid":
                                      t.submitted &&
                                      t.$v.receptionistData.last_name.$error,
                                  },
                                  attrs: {
                                    id: "last_name",
                                    placeholder:
                                      t.formTranslation.receptionist.lname_plh,
                                    required: "required",
                                    name: "first_name",
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
                                          "\n                                " +
                                            t._s(
                                              t.formTranslation.common
                                                .lname_required
                                            ) +
                                            "\n                            "
                                        ),
                                      ]
                                    )
                                  : !t.submitted ||
                                    (t.$v.receptionistData.last_name
                                      .minLength &&
                                      t.$v.receptionistData.last_name.maxLength)
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
                                      t._s(t.formTranslation.common.email) + " "
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
                                      value: t.receptionistData.user_email,
                                      expression: "receptionistData.user_email",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    " is-invalid":
                                      t.submitted &&
                                      t.$v.receptionistData.user_email.$error,
                                  },
                                  attrs: {
                                    id: "email",
                                    placeholder:
                                      t.formTranslation.receptionist.email_plh,
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
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t.submitted &&
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
                                          ) + "\n                            "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-8" }, [
                              e("div", { staticClass: "row" }, [
                                1 == t.userData.addOns.kiviPro &&
                                "administrator" == t.getUserRole()
                                  ? e("div", { staticClass: "col-md-6" }, [
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
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation
                                                      .receptionist
                                                      .select_clinic
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
                                          e("multi-select", {
                                            attrs: {
                                              "deselect-label": "",
                                              "select-label": "",
                                              "tag-placeholder":
                                                t.formTranslation.receptionist
                                                  .select_clinic,
                                              id: "clinic_id",
                                              placeholder:
                                                t.formTranslation.receptionist
                                                  .search_placeholder,
                                              label: "label",
                                              loading:
                                                t.clinicMultiselectLoader,
                                              "track-by": "id",
                                              options: t.clinics,
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
                                                            t.formTranslation
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
                                                t.receptionistData.clinic_id,
                                              callback: function (e) {
                                                t.$set(
                                                  t.receptionistData,
                                                  "clinic_id",
                                                  e
                                                );
                                              },
                                              expression:
                                                "receptionistData.clinic_id",
                                            },
                                          }),
                                          t._v(" "),
                                          t.submitted &&
                                          !t.$v.receptionistData.clinic_id
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
                                    ])
                                  : t._e(),
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
                                          id: "mobile_number",
                                          "no-example": "",
                                          clearable: "",
                                        },
                                        on: { update: t.contactUpdateHandaler },
                                        model: {
                                          value:
                                            t.receptionistData.mobile_number,
                                          callback: function (e) {
                                            t.$set(
                                              t.receptionistData,
                                              "mobile_number",
                                              e
                                            );
                                          },
                                          expression:
                                            " receptionistData.mobile_number ",
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
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_num_required
                                                  ) +
                                                  "\n                                    "
                                              ),
                                            ]
                                          )
                                        : !t.submitted ||
                                          (t.$v.receptionistData.mobile_number
                                            .minLength &&
                                            t.$v.receptionistData.mobile_number
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
                                                ) +
                                                  "\n                                    "
                                              ),
                                            ]
                                          ),
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
                                        attrs: { for: "receptionist_dob" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.dob) +
                                            ". \n                                        "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
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
                                            "\n                                        " +
                                              t._s(
                                                t.formTranslation.common.status
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
                                              t.$v.receptionistData.user_status
                                                .$error,
                                          },
                                          attrs: {
                                            name: "status",
                                            id: "status",
                                          },
                                          model: {
                                            value:
                                              t.receptionistData.user_status,
                                            callback: function (e) {
                                              t.$set(
                                                t.receptionistData,
                                                "user_status",
                                                e
                                              );
                                            },
                                            expression:
                                              "receptionistData.user_status",
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
                                      !t.$v.receptionistData.user_status
                                        .required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments
                                                      .status_required
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
                                                      t.receptionistData.gender,
                                                    expression:
                                                      "receptionistData.gender",
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
                                                    t._s(
                                                      t.formTranslation.common
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
                                    !t.$v.receptionistData.gender.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
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
                                  ]),
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
                                      { staticClass: "kivicare-avatar-upload" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "kivicare-avatar-edit",
                                          },
                                          [
                                            e("input", {
                                              ref: "file",
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
                            ]),
                          ]),
                          t._v(" "),
                          e("hr"),
                          t._v(" "),
                          e("div", { staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("h4", { staticClass: "text-primary mb-4" }, [
                                t._v(
                                  t._s(t.formTranslation.doctor.other_details)
                                ),
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
                                    staticClass: "form-control-label",
                                    attrs: { for: "address" },
                                  },
                                  [t._v(t._s(t.formTranslation.common.address))]
                                ),
                                t._v(" "),
                                e("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.receptionistData.address,
                                      expression: "receptionistData.address",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "address",
                                    id: "address",
                                    placeholder:
                                      t.formTranslation.receptionist
                                        .address_plh,
                                  },
                                  domProps: {
                                    value: t.receptionistData.address,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.receptionistData,
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
                                      t._s(t.formTranslation.common.country) +
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
                                      value: t.receptionistData.country,
                                      expression: "receptionistData.country",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "country",
                                    placeholder:
                                      t.formTranslation.receptionist
                                        .country_plh,
                                    name: "country",
                                    type: "text",
                                  },
                                  domProps: {
                                    value: t.receptionistData.country,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.receptionistData,
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
                                  [t._v(t._s(t.formTranslation.common.city))]
                                ),
                                t._v(" "),
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.receptionistData.city,
                                      expression: "receptionistData.city",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "city",
                                    placeholder:
                                      t.formTranslation.receptionist.city_plh,
                                    name: "city",
                                    type: "text",
                                  },
                                  domProps: { value: t.receptionistData.city },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.receptionistData,
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
                                      value: t.receptionistData.postal_code,
                                      expression:
                                        "receptionistData.postal_code",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "postal_code",
                                    placeholder:
                                      t.formTranslation.receptionist.pcode_plh,
                                    name: "postal_code",
                                    type: "text",
                                  },
                                  domProps: {
                                    value: t.receptionistData.postal_code,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.receptionistData,
                                          "postal_code",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
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
          "5c0ae6dc",
          null
        ).exports),
      te = {
        components: { VuePhoneNumberInput: bt.a },
        data: function () {
          return {
            isEditProfile: !1,
            receptionistData: {},
            loading: !1,
            submitted: !1,
            cardTitle: "Edit Profile",
            buttonText: '<i class="fa fa-plus"></i> Add',
            editProfileBtnText: '<i class="fa fa-pen-fancy"></i> Edit Profile',
            profileImage: "",
            formLoader: !0,
            defaultCountryCode: null,
            defaultUserRegistrationFormSettingData: "on",
          };
        },
        mounted: function () {
          this.getCountryCodeData(),
            this.getUserRegistrationFormData(),
            (this.receptionistData = this.defaultReceptionistData()),
            this.init(),
            (this.profileImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png");
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
              minLength: Object(l.minLength)(4),
              maxLength: Object(l.maxLength)(15),
            },
            gender: { required: l.required },
            city: {},
            country: {},
            postal_code: {},
          },
          custom_fields: {},
        },
        filters: {
          dateFormat: function (t) {
            return moment(t).format("YYYY-MM-DD");
          },
        },
        methods: {
          contactUpdateHandaler: function (t) {
            (this.receptionistData.country_code = t.countryCode),
              (this.receptionistData.country_calling_code =
                t.countryCallingCode);
          },
          init: function () {
            var t = this;
            if (void 0 !== this.$store.state.userDataModule.user.ID) {
              var e = this.$store.state.userDataModule.user.ID;
              this.editProfileData(e);
            } else
              this.$store.dispatch("userDataModule/fetchUserData", {}),
                setTimeout(function () {
                  var e = t.$store.state.userDataModule.user.ID;
                  t.editProfileData(e);
                }, 1e3);
          },
          defaultReceptionistData: function () {
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
              address: "",
              city: "",
              state: "",
              country: "",
              postal_code: "",
              user_status: 0,
            };
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.profileImage = n.url),
                (t.receptionistData.profile_image = n.id);
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
              this.$v.receptionistData.$invalid
                ? (this.loading = !1)
                : Object(I.n)("receptionistDataForm") &&
                  Object(s.b)("receptionist_save", this.receptionistData)
                    .then(function (e) {
                      (t.loading = !1),
                        (t.submitted = !0),
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
                        (t.submitted = !0),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          editProfileData: function (t) {
            var e = this;
            void 0 !== t
              ? ((this.cardTitle = this.formTranslation.doctor.edit_profile),
                (this.buttonText =
                  '<i class="fa fa-save"></i>' +
                  this.formTranslation.common.save),
                (this.formLoader = !0),
                Object(s.a)("receptionist_edit", { id: t })
                  .then(function (t) {
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      setTimeout(function () {
                        (e.receptionistData = t.data.data),
                          "" !== t.data.data.country_calling_code &&
                            void 0 !== t.data.data.country_calling_code &&
                            (e.defaultCountryCode = t.data.data.country_code),
                          e.receptionistData.user_profile &&
                            (e.profileImage = e.receptionistData.user_profile),
                          (e.receptionistData.choose_language =
                            e.kc_available_translations.find(function (e) {
                              return e.lang === t.data.data.choose_language;
                            })),
                          (e.isEditProfile = !1);
                      }, 200),
                      (e.formLoader = !1);
                  })
                  .catch(function (t) {
                    (e.formLoader = !1),
                      displayErrorMessage(
                        e.formTranslation.widgets.record_not_found
                      );
                  }))
              : displayErrorMessage(
                  this.formTranslation.receptionist.login_user_not_found
                );
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
          kc_available_translations: function () {
            return this.$store.state.userDataModule.user
              .kc_available_translations;
          },
        },
      },
      ee =
        (n(696),
        Object(h.a)(
          te,
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
                            "form",
                            {
                              attrs: {
                                id: "receptionistDataForm",
                                novalidate: !0,
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
                                          t.formTranslation.doctor
                                            .basic_information
                                        )
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "pl-lg-4" }, [
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
                                                  "\n                      " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .fname
                                                    ) +
                                                    " "
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
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData
                                                      .first_name,
                                                  expression:
                                                    "receptionistData.first_name",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.receptionistData
                                                    .first_name.$error,
                                              },
                                              attrs: {
                                                id: "first_name",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .fname_plh,
                                                required: "required",
                                                name: "name",
                                                type: "text",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.first_name,
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
                                            !t.$v.receptionistData.first_name
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
                                                          .fname_required
                                                      ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : t.submitted &&
                                                !t.$v.receptionistData
                                                  .first_name.alpha
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
                                                            .fname_validation_1
                                                        ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : !t.submitted ||
                                                (t.$v.receptionistData
                                                  .first_name.minLength &&
                                                  t.$v.receptionistData
                                                    .first_name.maxLength)
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
                                                          t.formTranslation
                                                            .common
                                                            .fname_validation_2
                                                        ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                ),
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
                                                attrs: { for: "last_name" },
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .lname
                                                    ) +
                                                    " "
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
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData
                                                      .last_name,
                                                  expression:
                                                    "receptionistData.last_name",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.receptionistData
                                                    .last_name.$error,
                                              },
                                              attrs: {
                                                id: "last_name",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .lname_plh,
                                                required: "required",
                                                name: "name",
                                                type: "text",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.last_name,
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
                                            !t.$v.receptionistData.last_name
                                              .required
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
                                                          t.formTranslation
                                                            .common
                                                            .lname_required
                                                        ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : t.submitted &&
                                                !t.$v.receptionistData.last_name
                                                  .alpha
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
                                                            .lname_validation_1
                                                        ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : !t.submitted ||
                                                (t.$v.receptionistData.last_name
                                                  .minLength &&
                                                  t.$v.receptionistData
                                                    .last_name.maxLength)
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
                                                          t.formTranslation
                                                            .common
                                                            .lname_validation_2
                                                        ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
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
                                                  for: "profile_cedula",
                                                },
                                              },
                                              [
                                                t._v("Cédula "),
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
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData.username,
                                                  expression:
                                                    "receptionistData.username",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.receptionistData.username
                                                    .$error,
                                              },
                                              attrs: {
                                                id: "profile_cedula",
                                                placeholder: "Ingrese cédula",
                                                required: "required",
                                                name: "id_number",
                                                type: "text",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.username,
                                              },
                                              on: {
                                                input: function (e) {
                                                  if (!e.target.composing) {
                                                    var n =
                                                      e.target.value.replace(
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
                                                          t.receptionistData
                                                            .ID ||
                                                        "" ===
                                                          t.receptionistData
                                                            .ID) &&
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
                                            !t.$v.receptionistData.username
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
                                      ]),
                                    ]),
                                    t._v(" "),
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
                                                attrs: { for: "email" },
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .email_address
                                                    ) +
                                                    " "
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
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData
                                                      .user_email,
                                                  expression:
                                                    "receptionistData.user_email",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                " is-invalid":
                                                  t.submitted &&
                                                  t.$v.receptionistData
                                                    .user_email.$error,
                                              },
                                              attrs: {
                                                id: "email",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .email_plh,
                                                required: "required",
                                                name: "email",
                                                type: "email",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.user_email,
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
                                            !t.$v.receptionistData.user_email
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
                                                          .email_required
                                                      ) +
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : t.submitted &&
                                                !t.$v.receptionistData
                                                  .user_email.emailValidate
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
                                                          .invalid_email
                                                      ) +
                                                        "\n                    "
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
                                                attrs: { for: "telephone_no" },
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .contact_no
                                                    ) +
                                                    ". "
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
                                            e("VuePhoneNumberInput", {
                                              attrs: {
                                                id: "telephone_no",
                                                clearable: "",
                                                "default-country-code":
                                                  t.defaultCountryCode,
                                                "no-example": "",
                                              },
                                              on: {
                                                update: t.contactUpdateHandaler,
                                              },
                                              model: {
                                                value:
                                                  t.receptionistData
                                                    .mobile_number,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.receptionistData,
                                                    "mobile_number",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "receptionistData.mobile_number",
                                              },
                                            }),
                                            t._v(" "),
                                            t.submitted &&
                                            !t.$v.receptionistData.mobile_number
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
                                                        "\n                    "
                                                    ),
                                                  ]
                                                )
                                              : !t.submitted ||
                                                (t.$v.receptionistData
                                                  .mobile_number.minLength &&
                                                  t.$v.receptionistData
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
                                                        t.formTranslation.common
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
                                    ]),
                                    t._v(" "),
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
                                                attrs: { for: "dob" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common.dob
                                                  ) + ". "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.receptionistData.dob,
                                                  expression:
                                                    "receptionistData.dob",
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
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .gender
                                                    ) +
                                                    " "
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
                                              { staticClass: "col-md-8" },
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
                                                            t.receptionistData
                                                              .gender,
                                                          expression:
                                                            "receptionistData.gender",
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
                                                          t.receptionistData
                                                            .gender,
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
                                                            t.receptionistData
                                                              .gender,
                                                          expression:
                                                            "receptionistData.gender",
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
                                                          t.receptionistData
                                                            .gender,
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
                                                                t
                                                                  .receptionistData
                                                                  .gender,
                                                              expression:
                                                                "receptionistData.gender",
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
                                                              t.receptionistData
                                                                .gender,
                                                              "other"
                                                            ),
                                                          },
                                                          on: {
                                                            change: function (
                                                              e
                                                            ) {
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
                                            !t.$v.receptionistData.gender
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
                                                          .gender_required
                                                      ) +
                                                        "\n                    "
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
                                        t._s(
                                          t.formTranslation.common.contact_info
                                        )
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
                                              ]
                                            ),
                                            t._v(" "),
                                            e("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData.address,
                                                  expression:
                                                    "receptionistData.address",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                name: "address",
                                                id: "address",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .plh_clinic_add,
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.address,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.receptionistData,
                                                      "address",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
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
                                              ]
                                            ),
                                            t._v(" "),
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData.city,
                                                  expression:
                                                    "receptionistData.city",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                id: "city",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .city_plh,
                                                name: "city",
                                                type: "text",
                                              },
                                              domProps: {
                                                value: t.receptionistData.city,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.receptionistData,
                                                      "city",
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
                                              ]
                                            ),
                                            t._v(" "),
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData.country,
                                                  expression:
                                                    "receptionistData.country",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                id: "country",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .country_plh,
                                                name: "country",
                                                type: "text",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData.country,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.receptionistData,
                                                      "country",
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
                                              ]
                                            ),
                                            t._v(" "),
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    t.receptionistData
                                                      .postal_code,
                                                  expression:
                                                    "receptionistData.postal_code",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                id: "postal_code",
                                                placeholder:
                                                  t.formTranslation.receptionist
                                                    .pcode_plh,
                                                name: "postal_code",
                                                type: "text",
                                              },
                                              domProps: {
                                                value:
                                                  t.receptionistData
                                                    .postal_code,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.receptionistData,
                                                      "postal_code",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      !1 !==
                                      t.$store.state.userDataModule.user.addOns
                                        .kiviPro
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
                                                    "\n                     " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .choose_language
                                                      ) +
                                                      "\n                   "
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
                                                    t.formTranslation.common
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
                                                            "\n               " +
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .no_result_found
                                                              ) +
                                                              "\n             "
                                                          ),
                                                        ];
                                                      },
                                                      proxy: !0,
                                                    },
                                                  ],
                                                  null,
                                                  !1,
                                                  3904652598
                                                ),
                                                model: {
                                                  value:
                                                    t.receptionistData
                                                      .choose_language,
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.receptionistData,
                                                      "choose_language",
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "receptionistData.choose_language",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "card-footer" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col-md-12" }, [
                                      e("div", { staticClass: "float-right" }, [
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
                                                    )
                                                ),
                                              ]
                                            )
                                          : e(
                                              "button",
                                              {
                                                staticClass: "btn btn-primary",
                                                attrs: { type: "submit" },
                                                on: { click: t.handleSubmit },
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
                                                    )
                                                ),
                                              ]
                                            ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
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
                                          ref: "file",
                                          staticClass: "p-2",
                                          staticStyle: { color: "transparent" },
                                          attrs: { id: "file", type: "button" },
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
                              e(
                                "div",
                                { staticClass: "text-center" },
                                [
                                  e("h5", { staticClass: "h3" }, [
                                    t._v(
                                      "\n              " +
                                        t._s(t.receptionistData.display_name) +
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
                                          t._s(t.receptionistData.user_email) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  t._l(
                                    t.receptionistData.clinic_id,
                                    function (n) {
                                      var i;
                                      return null !==
                                        (i = t.receptionistData) &&
                                        void 0 !== i &&
                                        null !== (i = i.clinic_id) &&
                                        void 0 !== i &&
                                        i.length
                                        ? e(
                                            "div",
                                            { key: n.id, staticClass: "h5" },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-hospital-user text-primary",
                                              }),
                                              t._v(
                                                "\n              " +
                                                  t._s(n.label) +
                                                  "\n            "
                                              ),
                                            ]
                                          )
                                        : t._e();
                                    }
                                  ),
                                ],
                                2
                              ),
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
          "5b7b4e2e",
          null
        ).exports),
      ne = n(371).a,
      ie = Object(h.a)(
        ne,
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
                                            t.formTranslation.custom_field
                                              .custom_field_list
                                          ) + " "
                                        ),
                                        "off" == t.request_status
                                          ? e(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#custom-fileds",
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
                                  t.kcCheckPermission("custom_field_add")
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
                                                      name: "custom-field.create",
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
                                                          .custom_field
                                                          .add_custom_field
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
                      t.kcCheckPermission("custom_field_add") &&
                      t.kivicareCompareVersion(
                        t.requireProVersion,
                        t.userData.pro_version
                      )
                        ? e("module-data-import", {
                            ref: "module_data_import",
                            attrs: {
                              required_data: [
                                {
                                  label: t.formTranslation.common.module,
                                  value: "module",
                                },
                                {
                                  label: t.formTranslation.common.label,
                                  value: "label",
                                },
                                {
                                  label: t.formTranslation.common.input_type,
                                  value: "input_type",
                                },
                                {
                                  label: t.formTranslation.common.options,
                                  value: "options",
                                },
                              ],
                              module_name: t.formTranslation.common.customField,
                              module_type: "customField",
                            },
                            on: { reloadList: t.getCustomFieldList },
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
                              e("div", { attrs: { id: "customFieldPrint" } }, [
                                e(
                                  "div",
                                  { staticClass: "mb-0" },
                                  [
                                    e(
                                      "vue-good-table",
                                      {
                                        ref: "dataTable",
                                        attrs: {
                                          columns: t.customFieldList.column,
                                          rows: t.customFieldList.data,
                                          mode: "remote",
                                          "search-options": {
                                            enabled: !0,
                                            placeholder:
                                              t.formTranslation.common
                                                .search_custom_field_data_global_placeholder,
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
                                          "on-column-filter": t.onColumnFilter,
                                          "on-page-change": t.onPageChange,
                                          "on-per-page-change":
                                            t.onPerPageChange,
                                          "on-search": t.globalFilter,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "table-row",
                                            fn: function (n) {
                                              return [
                                                "fields" == n.column.field
                                                  ? e("div", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t._f("fields")(
                                                              n.row.fields
                                                            )
                                                          )
                                                      ),
                                                    ])
                                                  : "input_type" ==
                                                    n.column.field
                                                  ? e("div", [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.getInputTypeText(
                                                              JSON.parse(
                                                                n.row.fields
                                                              )
                                                            )
                                                          )
                                                      ),
                                                    ])
                                                  : "status" == n.column.field
                                                  ? e(
                                                      "div",
                                                      { staticClass: "d-flex" },
                                                      [
                                                        t.kcCheckPermission(
                                                          "custom_field_edit"
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
                                                                            "custom_field",
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
                                                                    "  "
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    )
                                                  : "module_type" ==
                                                    n.column.field
                                                  ? e("div", [
                                                      t._v(
                                                        "\n                    " +
                                                          t._s(
                                                            t.getModuleTypeText(
                                                              n.row.module_type
                                                            )
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ])
                                                  : "actions" == n.column.field
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        t.kcCheckPermission(
                                                          "custom_field_edit"
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
                                                                    name: "custom-field.edit",
                                                                    params: {
                                                                      id: n.row
                                                                        .id,
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
                                                          "custom_field_delete"
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
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.deleteCustomFieldData(
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
                                                      1
                                                    )
                                                  : e("div", [
                                                      t._v(
                                                        "\n                    " +
                                                          t._s(
                                                            t._f("typeFiled")(
                                                              n.formattedRow[
                                                                n.column.field
                                                              ]
                                                            )
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
                                        e(
                                          "div",
                                          {
                                            attrs: { slot: "table-actions" },
                                            slot: "table-actions",
                                          },
                                          [
                                            t.kcCheckPermission(
                                              "custom_field_export"
                                            )
                                              ? e("module-data-export", {
                                                  attrs: {
                                                    module_data:
                                                      t.customFieldList.data,
                                                    module_name:
                                                      t.formTranslation
                                                        .custom_field
                                                        .custom_field_list,
                                                    module_type: "custom_field",
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
      ).exports;
    function re(t) {
      return (re =
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
    function oe(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != re(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != re(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == re(e) ? e : e + "";
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
    var ae = n(372).a,
      se = Object(h.a)(
        ae,
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
                    attrs: { id: "customFieldDataForm", novalidate: !0 },
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
                                      { attrs: { sm: "12", md: "8", lg: "8" } },
                                      [
                                        e("h3", { staticClass: "mb-0" }, [
                                          t._v(t._s(t.cardTitle)),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.kcCheckPermission("custom_field_list")
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
                                                          t.formTranslation
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
                                  e("div", { staticClass: "col-md-12 p-0" }, [
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
                                                    "\n                                    "
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
                                                    "\n                                    "
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
                                  ]),
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
                          e("div", { staticClass: "col-md-4" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "module_type" },
                                },
                                [
                                  t._v(
                                    "\n                                    " +
                                      t._s(t.formTranslation.common.module) +
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
                                { staticClass: "kivi-pr" },
                                [
                                  e("multi-select", {
                                    staticClass: "text-capitalize",
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      id: "module_type",
                                      "tag-placeholder":
                                        t.formTranslation.custom_field
                                          .tag_module_plh,
                                      placeholder:
                                        t.formTranslation.custom_field
                                          .select_module_plh,
                                      label: "label",
                                      "track-by": "id",
                                      options:
                                        "doctor" !== t.getUserRole()
                                          ? t.moduleType
                                          : t.doctorType,
                                    },
                                    on: { input: t.onChangeModule },
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
                                      value: t.customFieldData.module_type,
                                      callback: function (e) {
                                        t.$set(
                                          t.customFieldData,
                                          "module_type",
                                          e
                                        );
                                      },
                                      expression: "customFieldData.module_type",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "span",
                                    {
                                      staticClass: "select_clear_btn",
                                      on: {
                                        click: function (e) {
                                          t.customFieldData.module_type = "";
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
                              !t.$v.customFieldData.module_type.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                                    " +
                                          t._s(
                                            t.formTranslation.clinic_schedule
                                              .module_type_required
                                          ) +
                                          "\n                                "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          "doctor" !== t.getUserRole()
                            ? e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass:
                                        "form-control-label d-inline-block",
                                      attrs: { for: "specialties" },
                                    },
                                    [
                                      t._v(
                                        "\n                                    " +
                                          t._s(
                                            t.formTranslation.common.doctor
                                          ) +
                                          "\n"
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
                                            t.formTranslation.custom_field
                                              .tag_doctors_plh,
                                          placeholder:
                                            t.formTranslation.custom_field
                                              .doctors_plh,
                                          label: "label",
                                          "track-by": "id",
                                          options: t.doctors,
                                          loading: t.doctorMultiselectLoader,
                                          searchable: !0,
                                          disabled:
                                            !t.isDoctorSelectionEnabled ||
                                            void 0 !== t.$route.params.id,
                                          multiple: t.multiple,
                                          taggable: t.taggable,
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
                                          value: t.customFieldData.module_id,
                                          callback: function (e) {
                                            t.$set(
                                              t.customFieldData,
                                              "module_id",
                                              e
                                            );
                                          },
                                          expression:
                                            "customFieldData.module_id",
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          staticClass: "select_clear_btn",
                                          on: {
                                            click: function (e) {
                                              t.customFieldData.module_id = "";
                                            },
                                          },
                                        },
                                        [t._v("×")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ])
                            : t._e(),
                          t._v(" "),
                          e("div", { staticClass: "col-md-4" }, [
                            e("div", { staticClass: "from-group" }, [
                              t.showDoctorModule
                                ? e(
                                    "div",
                                    [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "label" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.custom_field
                                                .label
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "cursor-pointer",
                                              attrs: { id: "doctorModule" },
                                            },
                                            [
                                              t._v(
                                                "(" +
                                                  t._s(
                                                    t.formTranslation
                                                      .custom_field
                                                      .where_it_look_like
                                                  ) +
                                                  " "
                                              ),
                                              e("i", {
                                                staticClass:
                                                  "fa fa-question-circle",
                                              }),
                                              t._v(")"),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-tooltip",
                                        {
                                          staticClass: "test",
                                          attrs: {
                                            target: "doctorModule",
                                            triggers: "hover",
                                          },
                                        },
                                        [
                                          e("span", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.custom_field
                                                    .shows_in_doc_creation_form
                                                )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.showEncounterModule
                                ? e(
                                    "div",
                                    [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "label" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.custom_field
                                                .label
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "cursor-pointer",
                                              attrs: { id: "encounterModule" },
                                            },
                                            [
                                              t._v(
                                                "(" +
                                                  t._s(
                                                    t.formTranslation
                                                      .custom_field
                                                      .where_it_look_like
                                                  ) +
                                                  " "
                                              ),
                                              e("i", {
                                                staticClass:
                                                  "fa fa-question-circle",
                                              }),
                                              t._v(") "),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-tooltip",
                                        {
                                          attrs: {
                                            target: "encounterModule",
                                            triggers: "hover",
                                            classd: "test",
                                          },
                                        },
                                        [
                                          e("span", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.custom_field
                                                    .shows_in_patient_encounter_dashboard
                                                )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.showPatientModule
                                ? e(
                                    "div",
                                    [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "label" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.custom_field
                                                .label
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "cursor-pointer",
                                              attrs: { id: "patientModule" },
                                            },
                                            [
                                              t._v(
                                                "(" +
                                                  t._s(
                                                    t.formTranslation
                                                      .custom_field
                                                      .where_it_look_like
                                                  ) +
                                                  " "
                                              ),
                                              e("i", {
                                                staticClass:
                                                  "fa fa-question-circle",
                                              }),
                                              t._v(") "),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-tooltip",
                                        {
                                          staticClass: "test",
                                          attrs: {
                                            target: "patientModule",
                                            triggers: "hover",
                                          },
                                        },
                                        [
                                          e("span", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.custom_field
                                                    .shows_in_patient_creation_form
                                                )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              t.showAppointmentModule
                                ? e(
                                    "div",
                                    [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "label" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.custom_field
                                                .label
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                id: "appointmentModule",
                                              },
                                            },
                                            [
                                              t._v(
                                                "(" +
                                                  t._s(
                                                    t.formTranslation
                                                      .custom_field
                                                      .where_it_look_like
                                                  ) +
                                                  " "
                                              ),
                                              e("i", {
                                                staticClass:
                                                  "fa fa-question-circle",
                                              }),
                                              t._v(") "),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "b-tooltip",
                                        {
                                          staticClass: "test",
                                          attrs: {
                                            target: "appointmentModule",
                                            triggers: "hover",
                                          },
                                        },
                                        [
                                          e("span", [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.custom_field
                                                    .shows_in_patient_creation_form
                                                )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t._v(" "),
                              e("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.fieldData.label,
                                    expression: "fieldData.label",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  " is-invalid":
                                    t.submitted && t.$v.fieldData.label.$error,
                                },
                                attrs: {
                                  type: "text",
                                  id: "label",
                                  name: "label",
                                  placeholder:
                                    t.formTranslation.custom_field
                                      .field_label_plh,
                                },
                                domProps: { value: t.fieldData.label },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.fieldData,
                                        "label",
                                        e.target.value
                                      );
                                  },
                                },
                              }),
                              t._v(" "),
                              "" !== t.fieldData.name
                                ? e("span", { staticClass: "text-primary" }, [
                                    e("small", [
                                      t._v(
                                        "(" +
                                          t._s(
                                            t.formTranslation.custom_field
                                              .filed_name
                                          ) +
                                          ' "' +
                                          t._s(t.fieldData.name) +
                                          '")'
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                              t._v(" "),
                              t.submitted && !t.$v.fieldData.label.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                              " +
                                          t._s(
                                            t.formTranslation.custom_field
                                              .label_required
                                          ) +
                                          "\n                            "
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.submitted && t.uniqueFieldName
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                              " +
                                          t._s(
                                            t.formTranslation.custom_field
                                              .field_name_used
                                          ) +
                                          "\n                            "
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
                            e("div", { staticClass: "from-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "type" },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(
                                        t.formTranslation.custom_field
                                          .input_type
                                      ) +
                                      " "
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
                                      id: "type",
                                      placeholder:
                                        t.formTranslation.custom_field
                                          .input_type_plh,
                                      label: "label",
                                      "track-by": "id",
                                      options: t.inputType,
                                      required: "",
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
                                      value: t.fieldData.type,
                                      callback: function (e) {
                                        t.$set(t.fieldData, "type", e);
                                      },
                                      expression: "fieldData.type",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "span",
                                    {
                                      staticClass: "select_clear_btn",
                                      on: {
                                        click: function (e) {
                                          t.fieldData.type = "";
                                        },
                                      },
                                    },
                                    [t._v("×")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted && !t.$v.fieldD