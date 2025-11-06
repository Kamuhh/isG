// app.part25-de-30.js
   e.target.multiple ? n : n[0]
                                          );
                                        },
                                      },
                                    },
                                    [
                                      e("option", { attrs: { value: "1" } }, [
                                        t._v(
                                          t._s(t.formTranslation.common.active)
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("option", { attrs: { value: "0" } }, [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.inactive
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.submitted && !t.$v.taxData.status.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.appointments
                                                .status_required
                                            ) + "\n              "
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
        "76797ed3",
        null
      ).exports,
      On = {
        data: function () {
          return { tabIndex: 0, showSupportLink: "on" };
        },
        mounted: function () {
          this.linkClass(0), this.getRequestHelper();
        },
        methods: {
          getRequestHelper: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.showSupportLink = window.request_data.link_show_hide);
          },
          linkClass: function (t) {
            return this.tabIndex === t
              ? ["bg-primary", "text-white", "tab-custom-class"]
              : ["bg-white", "text-primary"];
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          kiviPro: function () {
            return this.userData.addOns.kiviPro;
          },
        },
      },
      wn = Object(h.a)(
        On,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "row", attrs: { id: "kivicare_get_help" } },
            [
              e(
                "div",
                { staticClass: "col-md-12" },
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
                                          " " +
                                            t._s(
                                              t.formTranslation.common.get_help
                                            ) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  "off" == t.showSupportLink && 1 == t.kiviPro
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
                                              e(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  attrs: {
                                                    href: "https://iqonic.desky.support/login",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                  },
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fas fa-external-link-alt",
                                                  }),
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.formTranslation.common
                                                          .get_support
                                                      ) +
                                                      "  "
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
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "col-md-12" },
                          [
                            e(
                              "b-card",
                              { attrs: { "no-body": "" } },
                              [
                                e(
                                  "b-tabs",
                                  {
                                    attrs: { pills: "", card: "", fill: "" },
                                    model: {
                                      value: t.tabIndex,
                                      callback: function (e) {
                                        t.tabIndex = e;
                                      },
                                      expression: "tabIndex",
                                    },
                                  },
                                  [
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common.shortcodes,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("shortcode-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common
                                              .lbl_telemed_pro_pro,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("telemed-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common
                                              .lbl_woocommerce_pro,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("woocommerce-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common
                                              .lbl_google_calendar_pro,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("google-calendar-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common
                                              .lbl_sms_pro,
                                        },
                                      },
                                      [e("b-card-text", [e("sms-help")], 1)],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.pro_setting
                                              .set_language,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("language-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.appointments
                                              .appointments,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("appointment-help")],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title:
                                            t.formTranslation.common.holiday,
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          [e("holiday-help")],
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
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]
          );
        },
        [],
        !1,
        null,
        "45304c80",
        null
      ).exports,
      An = {
        data: function () {
          return {
            tabIndex: 0,
            showSupportLink: "on",
            getProImage:
              window.request_data.kiviCarePluginURL +
              "assets/images/getProImage.png",
          };
        },
        mounted: function () {
          this.linkClass(0),
            this.getRequestHelper(),
            (this.getProImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/getProImage.png");
        },
        methods: {
          getRequestHelper: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.showSupportLink = window.request_data.link_show_hide);
          },
          linkClass: function (t) {
            return this.tabIndex === t
              ? ["bg-primary", "text-white", "tab-custom-class"]
              : ["bg-white", "text-primary"];
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          kiviPro: function () {
            return this.userData.addOns.kiviPro;
          },
        },
      },
      xn = Object(h.a)(
        An,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "row", attrs: { id: "kivicare_get_help" } },
            [
              e(
                "div",
                { staticClass: "col-md-12" },
                [
                  e("b-card", {
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
                                  { attrs: { sm: "12", md: "12", lg: "12" } },
                                  [
                                    e("div", { staticClass: "get-pro-image" }, [
                                      e(
                                        "a",
                                        {
                                          attrs: {
                                            href: "https://codecanyon.net/item/kivicare-pro-clinic-patient-management-system-ehr-addon/30690654?utm_source=referral&utm_medium=kivicare-free-plugin-to-upgrade-pro&utm_campaign=kivicare-free-plugin-upgrade",
                                            target: "_blank",
                                          },
                                        },
                                        [
                                          e("img", {
                                            attrs: {
                                              src: t.getProImage,
                                              alt: "Generic placeholder image",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("br"),
                                    t._v(" "),
                                    e("div", [
                                      e(
                                        "h2",
                                        {
                                          staticClass: "text-center text-dark",
                                        },
                                        [
                                          t._v(
                                            "One Time Payment Life Time Access !"
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("p", { staticClass: "text-center" }, [
                                        e("b", [
                                          t._v(
                                            "Kivicare is the most affordable self-hosted EHR solution for new-age practice."
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "get-pro-button-container",
                                      },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "get-pro-button" },
                                          [
                                            e(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-md btn-outline-primary",
                                                attrs: {
                                                  type: "button",
                                                  href: "https://codecanyon.net/item/kivicare-pro-clinic-patient-management-system-ehr-addon/30690654?utm_source=referral&utm_medium=kivicare-free-plugin-to-upgrade-pro&utm_campaign=kivicare-free-plugin-upgrade",
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                    " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .get_pro_now
                                                    ) +
                                                    "\n                                "
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
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]
          );
        },
        [],
        !1,
        null,
        "3457d012",
        null
      ).exports,
      zn =
        (n(346),
        {
          data: function () {
            return {
              clinic: [],
              patientclinic: {},
              loading: !1,
              submitted: !1,
              buttonText: '<i class="fa fa-save"></i> Save',
              clinicMultiselectLoader: !0,
            };
          },
          mounted: function () {
            this.getClinic(), this.getPatientClinic();
          },
          methods: {
            handleSubmit: function () {
              var t = this;
              (this.loading = !0),
                Object(s.b)("patient_clinic_check_out", {
                  data: this.patientclinic,
                })
                  .then(function (e) {
                    (t.loading = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (displayMessage(e.data.message),
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
            getClinic: function () {
              var t = this;
              (this.clinicMultiselectLoader = !0),
                Object(s.a)("get_static_data", { data_type: "clinics" })
                  .then(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (t.clinic = e.data.data)
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.clinicMultiselectLoader = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            },
            getPatientClinic: function () {
              var t = this;
              Object(s.a)("get_static_data", { data_type: "patient_clinic" })
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? void 0 !== e.data.data &&
                      e.data.data.length > 0 &&
                      e.data.data.length > 0 &&
                      (t.patientclinic = e.data.data[0])
                    : displayErrorMessage(e.data.message);
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
          },
        }),
      Cn = Object(h.a)(
        zn,
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
                                    { staticClass: "align-items-center" },
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
                                                t.formTranslation.patient
                                                  .clinic_check_out_in
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
                            [
                              e("b-col", [
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
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "doctor_id" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                        " +
                                                      t._s(
                                                        t.formTranslation.clinic
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
                                                      .patient_encounter
                                                      .tag_select_clinic_plh,
                                                  id: "clinic_id",
                                                  placeholder:
                                                    t.formTranslation
                                                      .patient_encounter
                                                      .tag_select_clinic_plh,
                                                  label: "label",
                                                  "track-by": "id",
                                                  options: t.clinic,
                                                  loading:
                                                    t.clinicMultiselectLoader,
                                                  disabled:
                                                    t.clinicMultiselectLoader,
                                                },
                                                scopedSlots: t._u([
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
                                                ]),
                                                model: {
                                                  value: t.patientclinic,
                                                  callback: function (e) {
                                                    t.patientclinic = e;
                                                  },
                                                  expression: "patientclinic",
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
                                              t.loading
                                                ? e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      staticStyle: {
                                                        "margin-top": "28px",
                                                      },
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
                                                          "\n                      "
                                                      ),
                                                    ]
                                                  )
                                                : e(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary rtl-ml-2",
                                                      staticStyle: {
                                                        "margin-top": "28px",
                                                      },
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
                                                              .patient_encounter
                                                              .save_btn
                                                          ) +
                                                          "\n                      "
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
    function kn(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    function Sn() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          Tn(
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
          : (Tn((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), Tn(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        Tn(u, "constructor", c),
        Tn(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        Tn(c, r, "GeneratorFunction"),
        Tn(u),
        Tn(u, r, "Generator"),
        Tn(u, i, function () {
          return this;
        }),
        Tn(u, "toString", function () {
          return "[object Generator]";
        }),
        (Sn = function () {
          return { w: o, m: p };
        })()
      );
    }
    function Tn(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (Tn = function (t, e, n, i) {
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
            Tn(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function Dn(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    n(347);
    var Ln = {
        components: { ModalPopup: u.a },
        data: function () {
          return {
            apiRequest: {
              method: "GET",
              url: "",
              body: JSON.stringify({ apikey: "" }),
              headers: [{ key: "Content-Type", value: "application/json" }],
            },
            apiResponse: null,
            showStatusCodeAlert: !1,
            isModalOpen: !1,
            isTestSubmitted: !1,
            isLoading: !1,
            viewMode: 1,
            queryParams: [],
            requestStatus: "off",
            isDynamicKeyTabActive: !1,
            dynamicKeys: [],
            dynamicsKeysloading: !1,
            collections: [],
            modalLoading: !1,
            modalData: { name: "", type: "sms" },
            iseditIndex: "",
          };
        },
        validations: {
          apiRequest: {
            method: { required: l.required },
            url: { required: l.required },
          },
        },
        mounted: function () {
          this.initializeModule(), this.getDynamicKeys(), this.getApiList();
        },
        methods: {
          executeApiRequest: function () {
            var t,
              e = this;
            return ((t = Sn().m(function t() {
              var n;
              return Sn().w(
                function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        if (
                          ((t.p = 0),
                          (e.isTestSubmitted = !0),
                          (e.isLoading = !0),
                          e.$v.$touch(),
                          !e.$v.apiRequest.$invalid)
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (e.isLoading = !1), t.a(2);
                      case 1:
                        (e.isTestSubmitted = !1), e.sendRequest(), (t.n = 3);
                        break;
                      case 2:
                        (t.p = 2), (n = t.v), e.handleApiResponse(n.response);
                      case 3:
                        return (t.p = 3), (e.isLoading = !1), t.f(3);
                      case 4:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[0, 2, 3, 4]]
              );
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (i, r) {
                var o = t.apply(e, n);
                function a(t) {
                  Dn(o, i, r, a, s, "next", t);
                }
                function s(t) {
                  Dn(o, i, r, a, s, "throw", t);
                }
                a(void 0);
              });
            })();
          },
          parseJsonInput: function (t) {
            try {
              return JSON.parse(this.replaceDynamicKeys(t) || "{}");
            } catch (t) {
              return {};
            }
          },
          handleApiResponse: function (t) {
            (this.viewMode = 2),
              (this.apiResponse = {
                status: t ? t.status : "error",
                data: t ? t.body : null,
              }),
              (this.showStatusCodeAlert = !0);
          },
          parseQueryParams: function (t) {
            var e = [],
              n = t.split("?")[1];
            return (
              n &&
                n.split("&").forEach(function (t) {
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
                            if ("string" == typeof t) return kn(t, 2);
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
                                ? kn(t, 2)
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
                    })(t.split("=")),
                    i = n[0],
                    r = n[1];
                  e.push({ key: i, value: r });
                }),
              e
            );
          },
          addQueryParam: function () {
            this.queryParams.push({ key: "", value: "" });
          },
          removeQueryParam: function (t) {
            this.queryParams.splice(t, 1);
          },
          addHeaderData: function () {
            this.apiRequest.headers.push({ key: "", value: "" });
          },
          removeHeaderData: function (t) {
            this.apiRequest.headers.splice(t, 1);
          },
          addDynamicKey: function () {
            this.dynamicKeys.push({ key: "", value: "" });
          },
          removeDynamicKey: function (t) {
            this.dynamicKeys.splice(t, 1);
          },
          editApiData: function (t, e) {
            (this.apiRequest = {
              method: t.method,
              url: t.url,
              body: t.body,
              headers: t.headers,
            }),
              (this.modalData = { name: t.name, type: t.type }),
              (this.viewMode = 1),
              (this.iseditIndex = e + 1);
          },
          deleteApiData: function (t) {
            this.collections.splice(t, 1), this.saveApiListCall(!1);
          },
          saveDynamicKeys: function () {
            var t = this;
            (this.dynamicsKeysloading = !0),
              Object(s.b)("custom_notification_save_dynamic_keys", {
                data: this.dynamicKeys,
              })
                .then(function (e) {
                  void 0 !== e.data.status && !0 === e.data.status
                    ? displayMessage(e.data.message)
                    : displayErrorMessage(e.data.message),
                    (t.dynamicsKeysloading = !1);
                })
                .catch(function (e) {
                  (t.dynamicsKeysloading = !1),
                    displayErrorMessage(
                      t.formTranslation.common.server_error + "."
                    );
                });
          },
          saveApiList: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.iseditIndex)
              this.collections.splice(this.iseditIndex - 1, 1, {
                name: this.modalData.name,
                type: this.modalData.type,
                method: this.apiRequest.method,
                url: this.apiRequest.url,
                headers: this.apiRequest.headers,
                body: this.apiRequest.body,
              }),
                this.saveApiListCall(!0);
            else if (e) {
              if (
                ((this.isTestSubmitted = !0),
                this.$v.$touch(),
                this.$v.apiRequest.$invalid)
              )
                return;
              (this.isTestSubmitted = !1), (this.isModalOpen = !0);
            } else {
              var n = this.collections.some(function (e) {
                  return e.name === t.modalData.name;
                }),
                i = this.collections.some(function (e) {
                  return e.type === t.modalData.type;
                });
              if (n)
                return void displayErrorMessage(
                  "Name already exists. Cannot add the same name."
                );
              if (i)
                return void displayErrorMessage(
                  "Notification type already exists. Cannot add the same notification type."
                );
              (this.modalLoading = !0),
                this.collections.push({
                  name: this.modalData.name,
                  type: this.modalData.type,
                  method: this.apiRequest.method,
                  url: this.apiRequest.url,
                  headers: this.apiRequest.headers,
                  body: this.apiRequest.body,
                }),
                this.saveApiListCall(!0);
            }
          },
          saveApiListCall: function () {
            var t = this,
              e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
            Object(s.b)("custom_notification_save_api_configuration_list", {
              data: this.collections,
            })
              .then(function (n) {
                e &&
                  (void 0 !== n.data.status && !0 === n.data.status
                    ? (displayMessage(n.data.message),
                      (t.isModalOpen = !1),
                      (t.modalData = { name: "", type: "sms" }),
                      (t.apiRequest = {
                        method: "GET",
                        url: "",
                        body: JSON.stringify({ apikey: "" }),
                        headers: [
                          { key: "Content-Type", value: "application/json" },
                        ],
                      }),
                      (t.iseditIndex = ""))
                    : displayErrorMessage(n.data.message),
                  (t.modalLoading = !1));
              })
              .catch(function (n) {
                e &&
                  ((t.modalLoading = !1),
                  displayErrorMessage(
                    t.formTranslation.common.server_error + "."
                  ));
              });
          },
          getApiList: function () {
            var t = this;
            Object(s.a)("custom_notification_get_api_configuration_list", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.collections = e.data.data);
              })
              .catch(function (t) {});
          },
          getDynamicKeys: function () {
            var t = this;
            Object(s.a)("custom_notification_get_dynamic_keys", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.dynamicKeys = e.data.data);
              })
              .catch(function (t) {});
          },
          replaceDynamicKeys: function (t) {
            return (
              this.dynamicKeys.forEach(function (e) {
                t = t.replace(e.key, e.value);
              }),
              t
            );
          },
          initializeModule: function () {
            var t = window.request_data.link_show_hide;
            void 0 !== t && "" !== t && (this.requestStatus = t);
          },
          clearForm: function () {
            (this.apiRequest = {
              method: "GET",
              url: "",
              body: JSON.stringify({ apikey: "" }),
              headers: [{ key: "Content-Type", value: "application/json" }],
            }),
              (this.openModal = { name: "", type: "sms" }),
              (this.queryParams = []),
              (this.iseditIndex = "");
          },
          sendRequest: function () {
            var t = this;
            Object(s.b)("send_custom_notification_request", this.apiRequest)
              .then(function (e) {
                void 0 !== e.data.status &&
                  "success" === e.data.status &&
                  t.handleApiResponse(e);
              })
              .catch(function (t) {});
          },
        },
        computed: {
          responseClass: function () {
            return this.apiResponse
              ? this.apiResponse.status >= 200 && this.apiResponse.status < 300
                ? "alert-success"
                : "alert-danger"
              : "";
          },
          userModuleData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {
          "apiRequest.url": function (t) {
            this.queryParams = this.parseQueryParams(t);
          },
          queryParams: {
            deep: !0,
            handler: function (t) {
              if ("GET" === this.apiRequest.method) {
                var e = t
                  .filter(function (t) {
                    return "" !== t.key.trim() || "" !== t.value.trim();
                  })
                  .map(function (t) {
                    return "".concat(t.key, "=").concat(t.value);
                  })
                  .join("&");
                this.apiRequest.url =
                  this.apiRequest.url.split("?")[0] + (e ? "?".concat(e) : "");
              }
            },
          },
        },
      },
      qn =
        (n(718),
        Object(h.a)(
          Ln,
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
                          show: !t.userModuleData.addOns.kiviPro,
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
                                              md: "12",
                                              lg: "12",
                                            },
                                          },
                                          [
                                            e("h2", { staticClass: "mb-0" }, [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .custom_notification
                                                ) + "\n                "
                                              ),
                                              "off" == t.requestStatus
                                                ? e(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "https://apps.iqonic.design/docs/product/kivicare/pro-version/custom-notification/",
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
                              { attrs: { id: "api-builder" } },
                              [
                                e(
                                  "b-col",
                                  { attrs: { sm: "12", md: "12", lg: "12" } },
                                  [
                                    e(
                                      "b-tabs",
                                      [
                                        e(
                                          "b-tab",
                                          {
                                            attrs: {
                                              title:
                                                t.formTranslation.common.form,
                                              active: 1 === t.viewMode,
                                            },
                                            on: {
                                              click: function (e) {
                                                t.viewMode = 1;
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "form",
                                              {
                                                staticClass: "mt-2",
                                                on: {
                                                  submit: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.executeApiRequest.apply(
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
                                                  { staticClass: "form-group" },
                                                  [
                                                    e(
                                                      "label",
                                                      { attrs: { for: "url" } },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.url
                                                          )
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
                                                      "b-input-group",
                                                      {
                                                        scopedSlots: t._u([
                                                          {
                                                            key: "prepend",
                                                            fn: function () {
                                                              return [
                                                                e(
                                                                  "select",
                                                                  {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            t
                                                                              .apiRequest
                                                                              .method,
                                                                          expression:
                                                                            "apiRequest.method",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          e
                                                                        ) {
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
                                                                            t.apiRequest,
                                                                            "method",
                                                                            e
                                                                              .target
                                                                              .multiple
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
                                                                          value:
                                                                            "GET",
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .get
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    e(
                                                                      "option",
                                                                      {
                                                                        attrs: {
                                                                          value:
                                                                            "POST",
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            t
                                                                              .formTranslation
                                                                              .common
                                                                              .post
                                                                          )
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
                                                        e("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.apiRequest
                                                                  .url,
                                                              expression:
                                                                "apiRequest.url",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "url",
                                                            autocomplete: "on",
                                                          },
                                                          domProps: {
                                                            value:
                                                              t.apiRequest.url,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.apiRequest,
                                                                  "url",
                                                                  e.target.value
                                                                );
                                                            },
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        t.isTestSubmitted &&
                                                        !t.$v.apiRequest.url
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
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.isTestSubmitted &&
                                                        !t.$v.apiRequest.method
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
                                                                      t
                                                                        .formTranslation
                                                                        .Method +
                                                                        " " +
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .required
                                                                    ) +
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    e(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: "header-data",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.headers
                                                          ) +
                                                            "  \n                      "
                                                        ),
                                                        t.apiRequest.headers
                                                          .length
                                                          ? t._e()
                                                          : e(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-primary btn-sm",
                                                                attrs: {
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    t.addHeaderData,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .add_header
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t._l(
                                                      t.apiRequest.headers,
                                                      function (n, i) {
                                                        return e(
                                                          "div",
                                                          {
                                                            key: i,
                                                            staticClass:
                                                              "d-flex mb-2 align-items-center",
                                                          },
                                                          [
                                                            e("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value: n.key,
                                                                  expression:
                                                                    "header.key",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control mr-2",
                                                              attrs: {
                                                                type: "text",
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .enter_key,
                                                              },
                                                              domProps: {
                                                                value: n.key,
                                                              },
                                                              on: {
                                                                input:
                                                                  function (e) {
                                                                    e.target
                                                                      .composing ||
                                                                      t.$set(
                                                                        n,
                                                                        "key",
                                                                        e.target
                                                                          .value
                                                                      );
                                                                  },
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            e("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    n.value,
                                                                  expression:
                                                                    "header.value",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control mr-2",
                                                              attrs: {
                                                                list: "header-list-suggestion",
                                                                type: "text",
                                                                placeholder:
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .enter_value,
                                                              },
                                                              domProps: {
                                                                value: n.value,
                                                              },
                                                              on: {
                                                                input:
                                                                  function (e) {
                                                                    e.target
                                                                      .composing ||
                                                                      t.$set(
                                                                        n,
                                                                        "value",
                                                                        e.target
                                                                          .value
                                                                      );
                                                                  },
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            e(
                                                              "datalist",
                                                              {
                                                                attrs: {
                                                                  id: "header-list-suggestion",
                                                                },
                                                              },
                                                              t._l(
                                                                t.dynamicKeys,
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
                                                                            n.key,
                                                                        },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          n.key
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
                                                                  "btn btn-outline-danger btn-sm",
                                                                attrs: {
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.removeHeaderData(
                                                                        i
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
                                                                      .remove
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    t._v(" "),
                                                    t.apiRequest.headers.length
                                                      ? e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-primary btn-sm",
                                                            attrs: {
                                                              type: "button",
                                                            },
                                                            on: {
                                                              click:
                                                                t.addHeaderData,
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .add_header
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ],
                                                  2
                                                ),
                                                t._v(" "),
                                                "GET" === t.apiRequest.method
                                                  ? e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group",
                                                      },
                                                      [
                                                        e(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: "query-params",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .query_parameters
                                                              ) +
                                                                "  \n                      "
                                                            ),
                                                            t.queryParams
                                                              ? t._e()
                                                              : e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-primary btn-sm",
                                                                    attrs: {
                                                                      type: "button",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.addQueryParam,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .add_query_parameter
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(
                                                          t.queryParams,
                                                          function (n, i) {
                                                            return e(
                                                              "div",
                                                              {
                                                                key: i,
                                                                staticClass:
                                                                  "d-flex mb-2 align-items-center",
                                                              },
                                                              [
                                                                e("input", {
                                                                  directives: [
                                                                    {
                                                                      name: "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        n.key,
                                                                      expression:
                                                                        "param.key",
                                                                    },
                                                                  ],
                                                                  staticClass:
                                                                    "form-control mr-2",
                                                                  attrs: {
                                                                    type: "text",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .enter_key,
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      n.key,
                                                                  },
                                                                  on: {
                                                                    input:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        e.target
                                                                          .composing ||
                                                                          t.$set(
                                                                            n,
                                                                            "key",
                                                                            e
                                                                              .target
                                                                              .value
                                                                          );
                                                                      },
                                                                  },
                                                                }),
                                                                t._v(" "),
                                                                e("input", {
                                                                  directives: [
                                                                    {
                                                                      name: "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        n.value,
                                                                      expression:
                                                                        "param.value",
                                                                    },
                                                                  ],
                                                                  staticClass:
                                                                    "form-control mr-2",
                                                                  attrs: {
                                                                    list: "query-list-suggestion",
                                                                    type: "text",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .enter_value,
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      n.value,
                                                                  },
                                                                  on: {
                                                                    input:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        e.target
                                                                          .composing ||
                                                                          t.$set(
                                                                            n,
                                                                            "value",
                                                                            e
                                                                              .target
                                                                              .value
                                                                          );
                                                                      },
                                                                  },
                                                                }),
                                                                t._v(" "),
                                                                e(
                                                                  "datalist",
                                                                  {
                                                                    attrs: {
                                                                      id: "query-list-suggestion",
                                                                    },
                                                                  },
                                                                  t._l(
                                                                    t.dynamicKeys,
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
                                                                                n.key,
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              n.key
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
                                                                      "btn btn-outline-danger btn-sm",
                                                                    attrs: {
                                                                      type: "button",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.removeQueryParam(
                                                                            i
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
                                                                          .remove
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                        t._v(" "),
                                                        t.queryParams
                                                          ? e(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-primary btn-sm",
                                                                attrs: {
                                                                  type: "button",
                                                                },
                                                                on: {
                                                                  click:
                                                                    t.addQueryParam,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .add_query_parameter
                                                                  )
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ],
                                                      2
                                                    )
                                                  : e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group",
                                                      },
                                                      [
                                                        e(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: "body",
                                                            },
                                                          },
                                                          [t._v("Body")]
                                                        ),
                                                        t._v(" "),
                                                        e("textarea", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.apiRequest
                                                                  .body,
                                                              expression:
                                                                "apiRequest.body",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: { rows: "5" },
                                                          domProps: {
                                                            value:
                                                              t.apiRequest.body,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.apiRequest,
                                                                  "body",
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
                                                    staticClass:
                                                      "d-flex justify-content-end",
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline-danger",
                                                        attrs: {
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: t.clearForm,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.clear
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    t.isLoading
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
                                                            t._v(
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
                                                              "btn btn-outline-primary",
                                                            attrs: {
                                                              type: "submit",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .send_request
                                                              )
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
                                                          type: "button",
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            return t.saveApiList(
                                                              !0
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.save
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            t.isModalOpen
                                              ? e(
                                                  "ModalPopup",
                                                  {
                                                    attrs: {
                                                      modalId: "bill-modal",
                                                      modalSize: "sm",
                                                      openModal: t.isModalOpen,
                                                      modalTitle:
                                                        t.formTranslation.common
                                                          .save_custom_notification,
                                                    },
                                                    on: {
                                                      closeModal: function (e) {
                                                        t.isModalOpen = !1;
                                                      },
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
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common.name
                                                                )
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
                                                                t.modalData
                                                                  .name,
                                                              expression:
                                                                "modalData.name",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "text",
                                                            id: "name",
                                                            placeholder:
                                                              t.formTranslation
                                                                .common
                                                                .enter_name,
                                                          },
                                                          domProps: {
                                                            value:
                                                              t.modalData.name,
                                                          },
                                                          on: {
                                                            input: function (
                                                              e
                                                            ) {
                                                              e.target
                                                                .composing ||
                                                                t.$set(
                                                                  t.modalData,
                                                                  "name",
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
                                                              for: "type",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .notification_type
                                                                ) +
                                                                " "
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  t.modalData
                                                                    .type,
                                                                expression:
                                                                  "modalData.type",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
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
                                                                  t.modalData,
                                                                  "type",
                                                                  e.target
                                                                    .multiple
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
                                                                  value: "sms",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .sms
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                              "option",
                                                              {
                                                                attrs: {
                                                                  value:
                                                                    "whatsapp",
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .whatsapp
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
                                                              click: function (
                                                                e
                                                              ) {
                                                                t.isModalOpen =
                                                                  !1;
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                      " +
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .cancel
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
                                                              "btn btn-primary",
                                                            attrs: {
                                                              disabled:
                                                                t.modalLoading,
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.saveApiList(
                                                                  !1
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                      " +
                                                                t._s(
                                                                  t.modalLoading
                                                                    ? t
                                                                        .formTranslation
                                                                        .common
                                                                        .loading
                                                                    : t
                                                                        .formTranslation
                                                                        .common
                                                                        .save
                                                                ) +
                                                                "\n                    "
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
                                        t._v(" "),
                                        e(
                                          "b-tab",
                                          {
                                            attrs: {
                                              title:
                                                t.formTranslation.common
                                                  .response,
                                              active: 2 === t.viewMode,
                                            },
                                            on: {
                                              click: function (e) {
                                                t.viewMode = 2;
                                              },
                                            },
                                          },
                                          [
                                            t.showStatusCodeAlert
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass: "alert",
                                                    class: t.responseClass,
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.status_code
                                                        ) +
                                                        ": " +
                                                        t._s(
                                                          t.apiResponse
                                                            ? t.apiResponse
                                                                .status
                                                            : ""
                                                        ) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass: "mt-4",
                                                staticStyle: {
                                                  "max-height": "600px",
                                                  "overflow-y": "auto",
                                                },
                                              },
                                              [
                                                e("pre", [
                                                  t._v(t._s(t.apiResponse)),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-tab",
                                          {
                                            attrs: {
                                              title:
                                                t.formTranslation.common
                                                  .dynamic_keys,
                                              active: 3 === t.viewMode,
                                            },
                                            on: {
                                              click: function (e) {
                                                t.viewMode = 3;
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "form",
                                              {
                                                on: {
                                                  submit: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.saveDynamicKeys.apply(
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
                                                  { staticClass: "form-group" },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass: "row mb-2",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-5",
                                                          },
                                                          [
                                                            e("label", [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common.key
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-5",
                                                          },
                                                          [
                                                            e("label", [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .value
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-2",
                                                          },
                                                          [
                                                            e("label", [
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .action
                                                                )
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e("hr", {
                                                      staticClass:
                                                        "mt-2 mb-2 m-0",
                                                    }),
                                                    t._v(" "),
                                                    t._l(
                                                      t.dynamicKeys,
                                                      function (n, i) {
                                                        return e(
                                                          "div",
                                                          {
                                                            key: i,
                                                            staticClass:
                                                              "row mb-2",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-5",
                                                              },
                                                              [
                                                                e("input", {
                                                                  directives: [
                                                                    {
                                                                      name: "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        n.key,
                                                                      expression:
                                                                        "dynamicKey.key",
                                                                    },
                                                                  ],
                                                                  staticClass:
                                                                    "form-control mr-2",
                                                                  attrs: {
                                                                    type: "text",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .enter_key,
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      n.key,
                                                                  },
                                                                  on: {
                                                                    input:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        e.target
                                                                          .composing ||
                                                                          t.$set(
                                                                            n,
                                                                            "key",
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
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-5",
                                                              },
                                                              [
                                                                e("input", {
                                                                  directives: [
                                                                    {
                                                                      name: "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        n.value,
                                                                      expression:
                                                                        "dynamicKey.value",
                                                                    },
                                                                  ],
                                                                  staticClass:
                                                                    "form-control mr-2",
                                                                  attrs: {
                                                                    list: "dynamic-key-list-suggestion",
                                                                    type: "text",
                                                                    placeholder:
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .enter_value,
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      n.value,
                                                                  },
                                                                  on: {
                                                                    input:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        e.target
                                                                          .composing ||
                                                                          t.$set(
                                                                            n,
                                                                            "value",
                                                                            e
                                                                              .target
                                                                              .value
                                                                          );
                                                                      },
                                                                  },
                                                                }),
                                                                t._v(" "),
                                                                e(
                                                                  "datalist",
                                                                  {
                                                                    attrs: {
                                                                      id: "dynamic-key-list-suggestion",
                                                                    },
                                                                  },
                                                                  t._l(
                                                                    [
                                                                      "[dynamic_reciever_number]",
                                                                      "[dynamic_sms_body]",
                                                                    ],
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
                                                                  0
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-2",
                                                              },
                                                              [
                                                                e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-outline-danger btn-sm",
                                                                    attrs: {
                                                                      type: "button",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.removeDynamicKey(
                                                                            i
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
                                                                          .remove
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-start align-items-center",
                                                      },
                                                      [
                                                        e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-primary btn-sm",
                                                            attrs: {
                                                              type: "button",
                                                            },
                                                            on: {
                                                              click:
                                                                t.addDynamicKey,
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .add_dynamic_key
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t.dynamicKeys.length
                                                          ? e(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-primary btn-sm",
                                                                attrs: {
                                                                  type: "submit",
                                                                  disabled:
                                                                    t.dynamicsKeysloading,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    t.dynamicsKeysloading
                                                                      ? t
                                                                          .formTranslation
                                                                          .common
                                                                          .loading
                                                                      : "Save dynamic keys"
                                                                  )
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-tab",
                                          {
                                            attrs: {
                                              title:
                                                t.formTranslation.common
                                                  .collections,
                                              active: 4 === t.viewMode,
                                            },
                                            on: {
                                              click: function (e) {
                                                t.viewMode = 4;
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "table",
                                              { staticClass: "w-100" },
                                              [
                                                e("thead", [
                                                  e("tr", [
                                                    e("th", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.id
                                                        )
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("th", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.name
                                                        )
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("th", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .doctor.type
                                                        )
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("th", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.action
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                ]),
                                                t._v(" "),
                                                e(
                                                  "tbody",
                                                  t._l(
                                                    t.collections,
                                                    function (n, i) {
                                                      return e(
                                                        "tr",
                                                        { key: n.id },
                                                        [
                                                          e("td", [
                                                            t._v(t._s(i + 1)),
                                                          ]),
                                                          t._v(" "),
                                                          e("td", [
                                                            t._v(
                                                              t._s(
                                                                n.name
                                                                  ? n.name
                                                                  : "-"
                                                              )
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          e("td", [
                                                            t._v(
                                                              t._s(
                                                                "sms" === n.type
                                                                  ? t
                                                                      .formTranslation
                                                                      .common
                                                                      .sms
                                                                  : t
                                                                      .formTranslation
                                                                      .common
                                                                      .whatsapp
                                                              )
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          e("td", [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-start align-items-center",
                                                              },
                                                              [
                                                                e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-sm btn-outline-primary",
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.editApiData(
                                                                            n,
                                                                            i
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .clinic_schedule
                                                                          .dt_lbl_edit
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" "),
                                                                e(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn btn-sm btn-outline-danger",
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.deleteApiData(
                                                                            i
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .clinic_schedule
                                                                          .dt_lbl_dlt
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                  0
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
      En = n(390).a,
      jn = Object(h.a)(
        En,
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
                        show: !t.userData.addOns.kiviPro,
                        variant: "white",
                        opacity: 0.2,
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
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.formTranslation.common
                                                  .custom_form_list
                                              ) + " "
                                            ),
                                            "off" == t.request_status
                                              ? e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "https://apps.iqonic.design/docs/product/kivicare/clinic-admin/settings/#custom-form",
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
                                      t.kcCheckPermission("custom_form_add")
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
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: {
                                                        to: {
                                                          name: "custom-form.create",
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
                                                              .common.add_form
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
                                    { attrs: { id: "customFormPrint" } },
                                    [
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
                                                  t.customFormList.column,
                                                rows: t.customFormList.data,
                                                mode: "remote",
                                                "search-options": {
                                                  enabled: !0,
                                                  placeholder:
                                                    t.formTranslation.common
                                                      .search_custom_form_data_global_placeholder,
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
                                                "on-sort-change":
                                                  t.onSortChange,
                                                "on-column-filter":
                                                  t.onColumnFilter,
                                                "on-page-change":
                                                  t.onPageChange,
                                                "on-per-page-change":
                                                  t.onPerPageChange,
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
                                                            {
                                                              staticClass:
                                                                "d-flex",
                                                            },
                                                            [
                                                              t.kcCheckPermission(
                                                                "custom_form_edit"
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
                                                                                  "custom_form",
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
                                                              "1" ===
                                                              n.row.status
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
                                                                    n.row
                                                                      .module_type
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                          ])
                                                        : "actions" ===
                                                          n.column.field
                                                        ? e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "btn-group",
                                                            },
                                                            [
                                                              t.kcCheckPermission(
                                                                "custom_form_edit"
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
                                                                            .edit,
                                                                        to: {
                                                                          name: "custom-form.edit",
                                                                          params:
                                                                            {
                                                                              id: n
                                                                                .row
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
                                                                "custom_form_delete"
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
                                                                            return t.deleteCustomFormData(
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
                                                                  t._f(
                                                                    "typeFiled"
                                                                  )(
                                                                    n
                                                                      .formattedRow[
                                                                      n.column
                                                                        .field
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
                                            ]
                                          ),
                                        ],
                                        1
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
    function Pn(t) {
      return (Pn =
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
    function Rn(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != Pn(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != Pn(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Pn(e) ? e : e + "";
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
    var In = n(391).a,
      Wn =
        (n(720),
        Object(h.a)(
          In,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "row" }, [
              t.load
                ? t._e()
                : e("div", { staticClass: "col-12 col-md-3" }, [
                    e("div", [
                      e("div", { staticClass: "card" }, [
                        e(
                          "div",
                          {
                            staticClass:
                              "card-header d-flex justify-content-between align-items-center",
                          },
                          [
                            e("h2", [
                              e("i", {
                                staticClass: "fas fa-chevron-left text-primary",
                                on: { click: t.handlePrevClick },
                              }),
                            ]),
                            t._v(" "),
                            e(
                              "h2",
                              { staticClass: "text-center text-primary" },
                              [t._v(t._s(t.titleList[t.controllerType]))]
                            ),
                            t._v(" "),
                            e("h2", [
                              e("i", {
                                staticClass:
                                  "fas fa-chevron-right text-primary",
                                on: { click: t.handleNextClick },
                              }),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        "fieldList" === t.controllerType
                          ? e("div", { staticClass: "card-body" }, [
                              e(
                                "div",
                                { staticClass: "card-container" },
                                t._l(t.inputType, function (n) {
                                  return e(
                                    "div",
                                    {
                                      key: n.id,
                                      staticClass:
                                        "card d-flex justify-start gap-1 align-items-center cursor-pointer",
                                      on: {
                                        click: function (e) {
                                          return t.addNewField(n);
                                        },
                                      },
                                    },
                                    [
                                      e("div", { staticClass: "card-icon" }, [
                                        e("i", { class: n.icon }),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "card-label" }, [
                                        t._v(t._s(n.label)),
                                      ]),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        "formTitle" === t.controllerType
                          ? e("div", { staticClass: "card-body" }, [
                              e("div", { staticClass: "card-container" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-12" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "formtext" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .form_title
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.customFormData.name.text,
                                            expression:
                                              "customFormData.name.text",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        domProps: {
                                          value: t.customFormData.name.text,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.customFormData.name,
                                                "text",
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
                                  e("div", { staticClass: "col-12" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "formtext" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .form_title_color
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
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
                                              value:
                                                t.customFormData.name.color,
                                              expression:
                                                "customFormData.name.color",
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
                                                t.customFormData.name,
                                                "color",
                                                e.target.multiple ? n : n[0]
                                              );
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "option",
                                            {
                                              attrs: { value: "text-primary" },
                                            },
                                            [t._v(" " + t._s("Primary"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            {
                                              attrs: {
                                                value: "text-secondary",
                                              },
                                            },
                                            [t._v(" " + t._s("Secondary"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            {
                                              attrs: { value: "text-warning" },
                                            },
                                            [t._v(" " + t._s("Warning"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            { attrs: { value: "text-danger" } },
                                            [t._v(" " + t._s("Danger"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            { attrs: { value: "text-dark" } },
                                            [t._v(" " + t._s("Dark"))]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-12" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "formtext" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .form_title_alignment
                                            ) + " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v(" *")]
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
                                              value:
                                                t.customFormData.name.align,
                                              expression:
                                                "customFormData.name.align",
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
                                                t.customFormData.name,
                                                "align",
                                                e.target.multiple ? n : n[0]
                                              );
                                            },
                                          },
                                        },
                                        [
                                          e(
                                            "option",
                                            { attrs: { value: "text-center" } },
                                            [t._v(" " + t._s("Center"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            { attrs: { value: "text-left" } },
                                            [t._v(" " + t._s("Left"))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "option",
                                            { attrs: { value: "text-right" } },
                                            [t._v(" " + t._s("Right"))]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ])
                          : t._e(),
                        t._v(" "),
                        "fieldEdit" === t.controllerType
                          ? e("div", { staticClass: "card-body" }, [
                              e("div", { staticClass: "card-container" }, [
                                ["heading", "hr"].includes(t.fieldData.type.id)
                                  ? e("div", [
                                      "heading" === t.fieldData.type.id
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group mb-2",
                                                },
                                                [
                                                  e(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "form-control-label",
                                                      attrs: { for: "label" },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .heading_title
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
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.fieldData.label,
                                                        expression:
                                                          "fieldData.label",
                                                      },
                                                    ],
                                                    staticClass: "form-control",
                                                    class: {
                                                      " is-invalid":
                                                        !t.fieldValidation
                                                          .label,
                                                    },
                                                    attrs: {
                                                      type: "text",
                                                      id: "label",
                                                      name: "label",
                                                      placeholder:
                                                        t.formTranslation.common
                                                          .heading_title,
                                                      required: "",
                                                    },
                                                    domProps: {
                                                      value: t.fieldData.label,
                                                    },
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
                                                  t.fieldValidation.label
                                                    ? t._e()
                                                    : e(
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
                                                                  .heading_title +
                                                                  " " +
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .required
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
                                      t._v(" "),
                                      "heading" === t.fieldData.type.id
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group mb-2",
                                                },
                                                [
                                                  e(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "form-control-label",
                                                      attrs: { for: "label" },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.heading_tag
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
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.fieldData.tag,
                                                          expression:
                                                            "fieldData.tag",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "form-control",
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
                                                            t.fieldData,
                                                            "tag",
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
                                                            value: "h1",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 1")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "h2",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 2")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "h3",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 3")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "h4",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 4")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "h5",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 5")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "h6",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Heading 6")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: { value: "p" },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s("Paragraph")
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "div",
                                                          },
                                                        },
                                                        [t._v(t._s("Div"))]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ])
                                  : e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "div",
                                          { staticClass: "form-group mb-2" },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "label" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation
                                                      .custom_field.label
                                                  ) + " "
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [t._v(" *")]
                                                ),
                                              ]
                                            ),
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
                                                  !t.fieldValidation.label,
                                              },
                                              attrs: {
                                                type: "text",
                                                id: "label",
                                                name: "label",
                                                placeholder:
                                                  t.formTranslation.custom_field
                                                    .field_label_plh,
                                                required: "",
                                              },
                                              domProps: {
                                                value: t.fieldData.label,
                                              },
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
                                            t.fieldValidation.label
                                              ? t._e()
                                              : e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                            " +
                                                        t._s(
                                                          t.formTranslation
                                                            .custom_field
                                                            .label_required
                                                        ) +
                                                        "\n                          "
                                                    ),
                                                  ]
                                                ),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "div",
                                          { staticClass: "form-group mb-2" },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "type" },
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation
                                                        .custom_field.input_type
                                                    ) +
                                                    " "
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
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
                                                  class: {
                                                    " is-invalid":
                                                      !t.fieldValidation.type,
                                                  },
                                                  attrs: {
                                                    id: "type",
                                                    placeholder:
                                                      t.formTranslation
                                                        .custom_field
                                                        .input_type_plh,
                                                    label: "label",
                                                    "track-by": "id",
                                                    options: t.inputType,
                                                    required: "",
                                                    disabled: t.editMode,
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
                                                    value: t.fieldData.type,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.fieldData,
                                                        "type",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "fieldData.type",
                                                  },
                                                }),
                                                t._v(" "),
                                                t.fieldValidation.type
                                                  ? t._e()
                                                  : e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                            " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common
                                                                .input_type +
                                                                " " +
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .required
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
                                      t.selected_field_type_file_upload
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group mb-2",
                                                },
                                                [
                                                  e(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "form-control-label",
                                                      attrs: {
                                                        for: "file_upload_type",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common.file_type
                                                        ) +
                                                          "\n                    "
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
                                                        class: {
                                                          " is-invalid":
                                                            !t.fieldValidation
                                                              .file_upload_type,
                                                        },
                                                        attrs: {
                                                          "deselect-label": "",
                                                          "select-label": "",
                                                          id: "file_upload_type",
                                                          "tag-placeholder":
                                                            t.formTranslation
                                                              .common
                                                              .select_allowed_file_type,
                                                          placeholder:
                                                            t.formTranslation
                                                              .common
                                                              .select_allowed_file_type,
                                                          label: "text",
                                                          "track-by": "id",
                                                          options:
                                                            t.file_upload_type_options,
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
                                                            t.fieldData
                                                              .file_upload_type,
                                                          callback: function (
                                                            e
                                                          ) {
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
                                                      t._v(" "),
                                                      t.fieldValidation
                                                        .file_upload_type
                                                        ? t._e()
                                                        : e(
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
                                                                      .file_type +
                                                                      " " +
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .required
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
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      [
                                        "textarea",
                                        "number",
                                        "text",
                                        "multi_select",
                                      ].includes(t.fieldData.type.id)
                                        ? e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group mb-2",
                                                },
                                                [
                                                  e(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "form-control-label",
                                                      attrs: {
                                                        for: "placeholder",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .custom_field
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
                                                        value:
                                                          t.fieldData
                                                            .placeholder,
                                                        expression:
                                                          "fieldData.placeholder",
                                                      },
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      id: "placeholder",
                                                      name: "placeholder",
                                                      placeholder:
                                                        t.formTranslation
                                                          .custom_field
                                                          .placeholder_plh,
                                                      required: "",
                                                    },
                                                    domProps: {
                                                      value:
                                                        t.fieldData.placeholder,
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
                                                ]
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      t.selected_field_type_file_upload
                                        ? t._e()
                                        : e(
                                            "div",
                                            { staticClass: "col-md-12" },
                                            [
                                              t.selectDisabled
                                                ? t._e()
                                                : e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-group mb-2",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "form-control-label",
                                                          attrs: {
                                                            for: "options",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .custom_field
                                                                .options
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "kivi-pr",
                                                        },
                                                        [
                                                          e("multi-select", {
                                                            class: {
                                                              " is-invalid":
                                                                !t
                                                                  .fieldValidation
                                                                  .options,
                                                            },
                                                            attrs: {
                                                              "deselect-label":
                                                                "",
                                                              "select-label":
                                                                "",
                                                              id: "options",
                                                              "tag-placeholder":
                                                                t
                                                                  .formTranslation
                                                                  .custom_field
                                                                  .tag_add_new_option_plh,
                                                              placeholder:
                                                                t
                                                                  .formTranslation
                                                                  .custom_field
                                                                  .serach_plh,
                                                              label: "text",
                                                              "track-by": "id",
                                                              options:
                                                                t.fieldOptions,
                                                              multiple: !0,
                                                              taggable: !0,
                                                            },
                                                            on: {
                                                              tag: t.addOption,
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
                                                                t.fieldData
                                                                  .options,
                                                              callback:
                                                                function (e) {
                                                                  t.$set(
                                                                    t.fieldData,
                                                                    "options",
                                                                    e
                                                                  );
                                                                },
                                                              expression:
                                                                "fieldData.options",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-primary",
                                                        },
                                                        [
                                                          e("small", [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .note_options
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      t.fieldValidation.options
                                                        ? t._e()
                                                        : e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "invalid-feedback",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                               " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .note_options +
                                                                      " " +
                                                                      t
                                                                        .formTranslation
                                                                        .common
                                                                        .required
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
                                      e("div", { staticClass: "col-md-12" }, [
                                        e(
                                          "div",
                                          { staticClass: "form-group mb-2" },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "isRequired-1" },
                                              },
                                              [
                                                t._v(
                                                  "\n                    " +
                                                    t._s(
                                                      t.formTranslation
                                                        .custom_field.validation
                                                    ) +
                                                    "\n                  "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e("div", { staticClass: "px-2" }, [
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      t.fieldData.is_required,
                                                    expression:
                                                      "fieldData.is_required",
                                                  },
                                                ],
                                                staticClass:
                                                  "kivicare_settings_custom_field_checkbox",
                                                attrs: {
                                                  type: "checkbox",
                                                  id: "isRequired-1",
                                                  name: "isRequired",
                                                },
                                                domProps: Rn(
                                                  {
                                                    checked:
                                                      t.fieldData.is_required,
                                                  },
                                                  "checked",
                                                  Array.isArray(
                                                    t.fieldData.is_required
                                                  )
                                                    ? t._i(
                                                        t.fieldData.is_required,
                                                        null
                                                      ) > -1
                                                    : t.fieldData.is_required
                                                ),
                                                on: {
                                                  change: function (e) {
                                                    var n =
                                                        t.fieldData.is_required,
                                                      i = e.target,
                                                      r = !!i.checked;
                                                    if (Array.isArray(n)) {
                                                      var o = t._i(n, null);
                                                      i.checked
                                                        ? o < 0 &&
                                                          t.$set(
                                                            t.fieldData,
                                                            "is_required",
                                                            n.concat([null])
                                                          )
                                                        : o > -1 &&
                                                          t.$set(
                                                            t.fieldData,
                                                            "is_required",
                                                            n
                                                              .slice(0, o)
                                                              .concat(
                                                                n.slice(o + 1)
                                                              )
                                                          );
                                                    } else
                                                      t.$set(
                                                        t.fieldData,
                                                        "is_required",
                                                        r
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label d-inline-block",
                                                  attrs: {
                                                    for: "isRequired-1",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(
                                                        t.formTranslation
                                                          .custom_field
                                                          .mandatory_field
                                                      ) +
                                                      "\n                    "
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-12 p-0" }, [
                                  e("div", { staticClass: "form-group mb-2" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "class" },
                                      },
                                      [
                                        t._v(
                                          t._s(t.formTranslation.common.class)
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.fieldData.class,
                                          expression: "fieldData.class",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "class",
                                        name: "class",
                                        placeholder:
                                          t.formTranslation.common
                                            .add_field_classes,
                                        required: "",
                                      },
                                      domProps: { value: t.fieldData.class },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.fieldData,
                                              "class",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                              ]),
                            ])
                          : t._e(),
                        t._v(" "),
                        "formSetting" === t.controllerType
                          ? e("div", { staticClass: "card-body" }, [
                              e("div", { staticClass: "card-container" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "module_type" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.module_type
                                          ) + " "
                                        ),
                                        e(
                                          "span",
                                          { staticClass: "text-danger" },
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
                                            id: "module_type",
                                            placeholder:
                                              t.formTranslation.common
                                                .module_type,
                                            label: "label",
                                            "track-by": "id",
                                            options: t.moduleType,
                                            disabled: t.editMode,
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
                                            value: t.customFormData.module_type,
                                            callback: function (e) {
                                              t.$set(
                                                t.customFormData,
                                                "module_type",
                                                e
                                              );
                                            },
                                            expression:
                                              "customFormData.module_type",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "field_status" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.status
                                          ) + " "
                                        ),
                                        e(
                                          "span",
                                          { staticClass: "text-danger" },
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
                                                  t.formTranslation.common
                                                    .active,
                                              },
                                              {
                                                id: 0,
                                                label:
                                                  t.formTranslation.common
                                                    .inactive,
                                              },
                                            ],
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
                                            value: t.customFormData.status,
                                            callback: function (e) {
                                              t.$set(
                                                t.customFormData,
                                                "status",
                                                e
                                              );
                                            },
                                            expression: "customFormData.status",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "col-md-12" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "form_icon" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.common.form_icon
                                          )
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", { staticClass: "kivi-pr" }, [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.customFormData.name.icon,
                                            expression:
                                              "customFormData.name.icon",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "form_icon",
                                          placeholder:
                                            t.formTranslation.common
                                              .form_icon_placeholder,
                                        },
                                        domProps: {
                                          value: t.customFormData.name.icon,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.customFormData.name,
                                                "icon",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                t._v(" "),
                                t.customFormData.module_type &&
                                "appointment_module" ===
                                  t.customFormData.module_type.id
                                  ? e("div", [
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
                                                attrs: { for: "field_status" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .show_if_appointment_status
                                                  ) + " "
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
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
                                                    id: "show_mode",
                                                    placeholder:
                                                      t.formTranslation.common
                                                        .show_if_appointment_status,
                                                    label: "label",
                                                    "track-by": "id",
                                                    options: [
                                                      {
                                                        id: "1",
                                                        label:
                                                          this.formTranslation
                                                            .appointments
                                                            .booked,
                                                      },
                                                      {
                                                        id: "2",
                                                        label:
                                                          this.formTranslation
                                                            .appointments
                                                            .check_out,
                                                      },
                                                      {
                                                        id: "4",
                                                        label:
                                                          this.formTranslation
                                                            .appointments
                                                            .check_in,
                                                      },
                                                    ],
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
                                                      t.customFormData
                                                        .conditions
                                                        .appointment_status,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.customFormData
                                                          .conditions,
                                                        "appointment_status",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "customFormData.conditions.appointment_status",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
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
                                                attrs: { for: "show_mode" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .show_in
                                                  ) + " "
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
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
                                                    id: "show_mode",
                                                    placeholder:
                                                      t.formTranslation.common
                                                        .show_in,
                                                    label: "label",
                                                    "track-by": "id",
                                                    options: [
                                                      {
                                                        id: "encounter",
                                                        label: "Encounter",
                                                      },
                                                      {
                                                        id: "appointment",
                                                        label: "Appointment",
                                                      },
                                                    ],
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
                                                      t.customFormData
                                                        .conditions.show_mode,
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.customFormData
                                                          .conditions,
                                                        "show_mode",
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "customFormData.conditions.show_mode",
                                                  },
                                                }),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "text-primary",
                                                  },
                                                  [
                                                    e("small", [
                                                      t._v(
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .custom_form_appointment_note
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
                                      ]),
                                    ])
                                  : t._e(),
                                t._v(" "),
                                1 == t.userData.addOns.kiviPro &&
                                ["administrator"].includes(t.getUserRole())
                                  ? e("div", { staticClass: "col-md-12" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "show_mode" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.widgets
                                                  .clinics
                                              ) + " "
                                            ),
                                            e(
                                              "span",
                                              { staticClass: "text-danger" },
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
                                                id: "show_mode",
                                                placeholder:
                                                  t.formTranslation.widgets
                                                    .clinics,
                                                label: "label",
                                                "track-by": "id",
                                                options: t.clinics,
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
                                                  t.customFormData.conditions
                                                    .clinic_ids,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.customFormData.conditions,
                                                    "clinic_ids",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "customFormData.conditions.clinic_ids",
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "span",
                                              { staticClass: "text-primary" },
                                              [
                                                e("small", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .custom_form_clinic_note
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ])
                                  : t._e(),
                                t._v(" "),
                                1 == t.userData.addOns.kiviPro &&
                                ["administrator"].includes(t.getUserRole())
                                  ? e("div", { staticClass: "col-md-12" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "show_role" },
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.widgets.roles
                                              ) + " "
                                            ),
                                            e(
                                              "span",
                                              { staticClass: "text-danger" },
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
                                                id: "show_role",
                                                placeholder:
                                                  t.formTranslation.widgets
                                                    .roles,
                                                label: "label",
                                                "track-by": "id",
                                                options: t.all_roles,
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
                                                  t.customFormData.conditions
                                                    .role_id,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.customFormData.conditions,
                                                    "role_id",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "customFormData.conditions.role_id",
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "span",
                                              { staticClass: "text-primary" },
                                              [
                                                e("small", [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.common
                                                        .custom_form_role_note
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ])
                                  : t._e(),
                              ]),
                            ])
                          : t._e(),
                      ]),
                    ]),
                  ]),
              t._v(" "),
              t.load
                ? t._e()
                : e(
                    "div",
                    { staticClass: "col-12 col-md-9" },
                    [
                      e(
                        "b-row",
                        [
                          t.customFormLoading
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
                                attrs: {
                                  id: "customFormDataForm",
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
                                                        md: "8",
                                                        lg: "8",
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "h3",
                                                        { staticClass: "mb-0" },
                                                        [
                                                          t._v(
                                                            t._s(t.cardTitle)
                                                          ),
                                                        ]
                                                      ),
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
                                                            "d-flex justify-content-end align-items-center",
                                                        },
                                                        [
                                                          e(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm btn-primary d-flex justify-content-center align-items-center",
                                                              attrs: {
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    t.controllerType =
                                                                      "formSetting";
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                staticClass:
                                                                  "fa fa-cogs",
                                                              }),
                                                              t._v(
                                                                t._s(
                                                                  t
                                                                    .formTranslation
                                                                    .common
                                                                    .form_setting
                                                                ) +
                                                                  " \n                    "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          t.patientCustomFormModal
                                                            ? e("CustomForm", {
                                                                attrs: {
                                                                  data: t.customFormData,
                                                                  fields: t
                                                                    .customFormData
                                                                    .form_data
                                                                    ? t
                                                                        .customFormData
                                                                        .form_data
                                                                    : [],
                                                                  viewMode: !0,
                                                                  customFormModal:
                                                                    t.patientCustomFormModal,
                                                                },
                                                                on: {
                                                                  closeModal:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.patientCustomFormModal =
                                                                        !1;
                                                                    },
                                                                },
                                                              })
                                                            : t._e(),
                                                          t._v(" "),
                                                          e(
                                                            "button",
                                                            {
                                                              class: {
                                                                "btn btn-sm btn-primary d-flex justify-content-center align-items-center":
                                                                  !0,
                                                                disabled:
                                                                  0 ==
                                                                  t
                                                                    .customFormData
                                                                    .form_data
                                                                    .length,
                                                              },
                                                              attrs: {
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    t.patientCustomFormModal =
                                                                      0 !==
                                                                      t
                                                                        .customFormData
                                                                        .form_data
                                                                        .length;
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                staticClass:
                                                                  "fa fa-eye",
                                                              }),
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t
                                                                      .formTranslation
                                                                      .common
                                                                      .preview
                                                                  ) +
                                                                  "\n                    "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          t.kcCheckPermission(
                                                            "custom_form_list"
                                                          )
                                                            ? e(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "btn btn-sm btn-primary d-flex justify-content-center align-items-center",
                                                                  attrs: {
                                                                    type: "button",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
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
                                                                          .common
                                                                          .back
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
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
                                              e("div", { staticClass: "row" }, [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-md-12 p-0",
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-end",
                                                      },
                                                      [
                                                        t.formLoading
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
                                                                      t
                                                                        .formTranslation
                                                                        .common
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
                                                            staticClass:
                                                              "btn btn-outline-danger",
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
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !1,
                                      994956886
                                    ),
                                  },
                                  [
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass: "p-2",
                                        class:
                                          "formSetting" === t.controllerType
                                            ? " field-border"
                                            : "",
                                      },
                                      [
                                        e("div", { staticClass: "row" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "col-12 d-flex justify-content-end",
                                              on: {
                                                click: function (e) {
                                                  t.controllerType =
                                                    "formSetting";
                                                },
                                              },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fa fa-edit text-primary cursor-pointer",
                                                attrs: { role: "button" },
                                              }),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e(
                                          "h2",
                                          {
                                            class:
                                              t.nameClass +
                                              ("formTitle" === t.controllerType
                                                ? " field-border mb-2"
                                                : " mb-2"),
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.customFormData.name &&
                                                  t.customFormData.name.text
                                                  ? t.customFormData.name.text
                                                  : ""
                                              ) + " "
                                            ),
                                            e("span", [
                                              e("i", {
                                                class:
                                                  "fa fa-edit " +
                                                  (t.customFormData.name &&
                                                  t.customFormData.name.color
                                                    ? t.customFormData.name
                                                        .color
                                                    : "text-primary"),
                                                on: {
                                                  click: function (e) {
                                                    t.controllerType =
                                                      "formTitle";
                                                  },
                                                },
                                              }),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          { staticClass: "mt-2" },
                                          [
                                            e(
                                              "draggable",
                                              {
                                                staticClass: "row mb-2",
                                                attrs: {
                                                  list: t.customFormData
                                                    .form_data,
                                                },
                                              },
                                              [
                                                t._l(
                                                  t.customFormData.form_data,
                                                  function (n, i) {
                                                    return e(
                                                      "div",
                                                      {
                                                        key: i,
                                                        class:
                                                          ([
                                                            "hr",
                                                            "heading",
                                                          ].includes(n.type.id)
                                                            ? "col-md-12 "
                                                            : "col-md-6 ") +
                                                          (n.name ===
                                                            t.fieldData.name &&
                                                          "fieldEdit" ===
                                                            t.controllerType
                                                            ? "field-border"
                                                            : ""),
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
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-between align-items-center",
                                                              },
                                                              [
                                                                [
                                                                  "heading",
                                                                  "hr",
                                                                ].includes(
                                                                  n.type.id
                                                                )
                                                                  ? t._e()
                                                                  : e(
                                                                      "label",
                                                                      {
                                                                        attrs: {
                                                                          for:
                                                                            n.name +
                                                                            "_" +
                                                                            i,
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            n.label
                                                                          ) +
                                                                            "\n                          "
                                                                        ),
                                                                        e(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "text-danger",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                n.is_required &&
                                                                                  [
                                                                                    "1",
                                                                                    "true",
                                                                                  ].includes(
                                                                                    n.is_required.toString()
                                                                                  )
                                                                                  ? "*"
                                                                                  : ""
                                                                              ) +
                                                                                "\n                      "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                t._v(" "),
                                                                e("span", [
                                                                  e("i", {
                                                                    staticClass:
                                                                      "fa fa-edit text-primary cursor-pointer",
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.editFormFieldData(
                                                                            n
                                                                          );
                                                                        },
                                                                    },
                                                                  }),
                                                                  t._v("  "),
                                                                  e("i", {
                                                                    staticClass:
                                                                      "fa fa-trash text-danger cursor-pointer",
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return t.deleteField(
                                                                            i
                                                                          );
                                                                        },
                                                                    },
                                                                  }),
                                                                ]),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            "text" ===
                                                              n.type.id ||
                                                            "number" ===
                                                              n.type.id
                                                              ? e("input", {
                                                                  staticClass:
                                                                    "form-control",
                                                                  class:
                                                                    n.class,
                                                                  attrs: {
                                                                    id:
                                                                      n.name +
                                                                      "_" +
                                                                      i,
                                                                    placeholder:
                                                                      n.placeholder,
                                                                    type: n.type
                                                                      .id,
                                                                  },
                                                                })
                                                              : "heading" ===
                                                                n.type.id
                                                              ? e(
                                                                  "div",
                                                                  [
                                                                    e(
                                                                      n.tag
                                                                        ? n.tag
                                                                        : "h2",
                                                                      {
                                                                        tag: "component",
                                                                        class:
                                                                          n.class,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            n.label
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              : "hr" ===
                                                                n.type.id
                                                              ? e("div", [
                                                                  e("hr", {
                                                                    class:
                                                                      n.class,
                                                                  }),
                                                                ])
                                                              : "file_upload" ===
                                                                n.type.id
                                                              ? e("div", [
                                                                  e(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "input-group kivi-choose-file",
                                                                    },
                                                                    [
                                                                      e(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "input-group-prepend",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "button",
                                                                            {
                                                                              staticClass:
                                                                                "btn btn-primary",
                                                                              class:
                                                                                n.class,
                                                                              attrs:
                                                                                {
                                                                                  type: "button",
                                                                                  id:
                                                                                    n.name +
                                                                                    "_" +
                                                                                    i,
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
                                                                          attrs:
                                                                            {
                                                                              for:
                                                                                n.name +
                                                                                "_" +
                                                                                i,
                                                                            },
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .no_file_chosen
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ])
                                                              : "select" ===
                                                                n.type.id
                                                              ? e(
                                                                  "b-select",
                                                                  {
                                                                    staticClass:
                                                                      "form-control text-capitalize",
                                                                    class:
                                                                      n.class,
                                                                    attrs: {
                                                                      id:
                                                                        n.name +
                                                                        "_" +
                                                                        i,
                                                                    },
                                                                  },
                                                                  [
                                                                    e(
                                                                      "option",
                                                                      {
                                                                        attrs: {
                                                                          value:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              t
                                                                                .formTranslation
                                                                                .common
                                                                                .select_option
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    t._v(" "),
                                                                    t._l(
                                                                      n.options,
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
                                                                                  n.id,
                                                                              },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                n.text
                                                                              )
                                                                            ),
                                                                          ]
                                                                        );
                                                                      }
                                                                    ),
                                                                  ],
                                                                  2
                                                                )
                                                              : "radio" ===
                                                                n.type.id
                                                              ? e(
                                                                  "div",
                                                                  t._l(
                                                                    n.options,
                                                                    function (
                                                                      i,
                                                                      r
                                                                    ) {
                                                                      return e(
                                                                        "div",
                                                                        {
                                                                          key: r,
                                                                          staticClass:
                                                                            "custom-control custom-radio custom-control-inline",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "input",
                                                                            {
                                                                              staticClass:
                                                                                "custom-control-input",
                                                                              class:
                                                                                n.class,
                                                                              attrs:
                                                                                {
                                                                                  type: "radio",
                                                                                  id:
                                                                                    n.name +
                                                                                    "_" +
                                                                                    r,
                                                                                  name:
                                                                                    "custom_field_" +
                                                                                    n.id,
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
                                                                                  for:
                                                                                    n.name +
                                                                                    "_" +
                                                                                    r,
                                                                                },
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                t._s(
                                                                                  i.text
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      );
                                                                    }
                                                                  ),
                                                                  0
                                                                )
                                                              : "checkbox" ===
                                                                n.type.id
                                                              ? e(
                                                                  "div",
                                                                  t._l(
                                                                    n.options,
                                                                    function (
                                                                      i,
                                                                      r
                                                                    ) {
                                                                      return e(
                                                                        "div",
                                                                        {
                                                                          key: r,
                                                                          staticClass:
                                                                            "custom-control custom-checkbox custom-control-inline",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "input",
                                                                            {
                                                                              staticClass:
                                                                                "custom-control-input",
                                                                              class:
                                                                                n.class,
                                                                              attrs:
                                                                                {
                                                                                  type: "checkbox",
                                                                                  id:
                                                                                    n.name +
                                                                                    "_" +
                                                                                    r,
                                                                                  name:
                                                                                    "custom_field_" +
                                                                                    n.id,
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
                                                                                  for:
                                                                                    n.name +
                                                                                    "_" +
                                                                                    r,
                                                                                },
                                                                            },
                                                                            [
                                                                              t._v(
                                                                                t._s(
                                                                                  i.text
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      );
                                                                    }
                                                                  ),
                                                                  0
                                                                )
                                                              : "calendar" ===
                                                                n.type.id
                                                              ? e("div", [
                                                                  e("input", {
                                                                    class:
                                                                      n.class,
                                                                    attrs: {
                                                                      type: "date",
                                                                      id: "doc_birthdate",
                                                                    },
                                                                  }),
                                                                ])
                                                              : "textarea" ===
                                                                n.type.id
                                                              ? e("textarea", {
                                                                  staticClass:
                                                                    "form-control",
                                                                  class:
                                                                    n.class,
                                                                  attrs: {
                                                                    id:
                                                                      n.name +
                                                                      "_" +
                                                                      i,
                                                                    placeholder:
                                                                      n.placeholder,
                                                                    name:
                                                                      "custom_field_" +
                                                                      n.id,
                                                                  },
                                                                })
                                                              : "multi_select" ===
                                                                n.type.id
                                                              ? e(
                                                                  "multi-select",
                                                                  {
                                                                    class:
                                                                      n.class,
                                                                    attrs: {
                                                                      id:
                                                                        n.name +
                                                                        "_" +
                                                                        i,
                                                                      placeholder:
                                                                        n.placeholder,
                                                                      name:
                                                                        "custom_field_" +
                                                                        n.id,
                                                                      label:
                                                                        "text",
                                                                      "track-by":
                                                                        "id",
                                                                      options:
                                                                        n.options,
                                                                      multiple:
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
                                                                            proxy:
                                                                              !0,
                                                                          },
                                                                        ],
                                                                        null,
                                                                        !0
                                                                      ),
                                                                  }
                                                                )
                                                              : t._e(),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    );
                                                  }
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-md-6 d-flex justify-content-start align-items-center mt-2",
                                                  },
                                                  [
                                                    e(
                                                      "i",
                                                      {
                                                        staticClass:
                                                          "fa fa-plus text-primary cursor-pointer",
                                                        on: {
                                                          click: function (e) {
                                                            t.controllerType =
                                                              "fieldList";
                                                          },
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .common.add
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
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
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Nn = n(392).a,
      Bn =
        (n(722),
        Object(h.a)(
          Nn,
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
                                        {
                                          attrs: { sm: "8", md: "8", lg: "8" },
                                        },
                                        [
                                          e("h2", { staticClass: "mb-0" }, [
                                            t._v(
                                              t._s(
                                                t.$t(
                                                  "common.encounter_body_chart_settings"
                                                )
                                              ) + " "
                                            ),
                                            "off" == t.request_status
                                              ? e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "#",
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
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-overlay",
                  {
                    attrs: {
                      show: 1 != t.userData.addOns.bodyChart,
                      variant: "white",
                      opacity: t.overlayOpacity,
                    },
                    scopedSlots: t._u([
                      {
                        key: "overlay",
                        fn: function () {
                          return [
                            e("overlay-message", {
                              attrs: { addon_type: "bodyChart" },
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
                        staticClass: "card-body",
                        attrs: {
                          "header-tag": "header",
                          "footer-tag": "footer",
                        },
                      },
                      [
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-6" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "theme" },
                                },
                                [
                                  t._v(
                                    "\n                          " +
                                      t._s(t.$t("common.theme_mode")) +
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      id: "theme",
                                      options: t.themeOptions,
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
                                      value: t.setting_data.theme,
                                      callback: function (e) {
                                        t.$set(t.setting_data, "theme", e);
                                      },
                                      expression: "setting_data.theme",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted && !t.$v.setting_data.theme.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        t._s(
                                          t.$t("common.theme_mode") +
                                            " " +
                                            t.$t(
                                              "patient_encounter.is_required"
                                            )
                                        ) + "\n                        "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-6" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "menuBarPosition" },
                                },
                                [
                                  t._v(
                                    "\n                          " +
                                      t._s(t.$t("common.menu_bar_position")) +
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      id: "menuBarPosition",
                                      options: t.positionOptions,
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
                                      value: t.setting_data.menuBarPosition,
                                      callback: function (e) {
                                        t.$set(
                                          t.setting_data,
                                          "menuBarPosition",
                                          e
                                        );
                                      },
                                      expression:
                                        "setting_data.menuBarPosition",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted &&
                              !t.$v.setting_data.menuBarPosition.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        t._s(
                                          t.$t("common.theme_mode") +
                                            " " +
                                            t.$t(
                                              "patient_encounter.is_required"
                                            )
                                        ) + "\n                        "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-6" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "replaceOrNewAfterEditImage" },
                                },
                                [
                                  t._v(
                                    "\n                          " +
                                      t._s(
                                        t.$t("common.image_handle_preference")
                                      ) +
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      "custom-label": t.formatLabel,
                                      id: "replaceOrNewAfterEditImage",
                                      options: ["new", "replace"],
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "noResult",
                                        fn: function () {
                                          return [
                                            t._v(
                                              "\n                            " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .no_result_found
                                                ) +
                                                "\n                            "
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ]),
                                    model: {
                                      value:
                                        t.setting_data
                                          .replaceOrNewAfterEditImage,
                                      callback: function (e) {
                                        t.$set(
                                          t.setting_data,
                                          "replaceOrNewAfterEditImage",
                                          e
                                        );
                                      },
                                      expression:
                                        "setting_data.replaceOrNewAfterEditImage",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted &&
                              !t.$v.setting_data.replaceOrNewAfterEditImage
                                .required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        t._s(
                                          t.$t(
                                            "common.image_handle_preference"
                                          ) +
                                            " " +
                                            t.$t(
                                              "patient_encounter.is_required"
                                            )
                                        ) + "\n                        "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-6" }, [
                            e("div", { staticClass: "form-group" }, [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "menu" },
                                },
                                [
                                  t._v(
                                    "\n                          " +
                                      t._s(t.$t("common.menu_items")) +
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      id: "menuBarPosition",
                                      placeholder:
                                        t.formTranslation.common
                                          .select_menu_items,
                                      options: t.menuOptions,
                                      label: "label",
                                      "track-by": "id",
                                      multiple: !0,
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
                                      value: t.setting_data.menu,
                                      callback: function (e) {
                                        t.$set(t.setting_data, "menu", e);
                                      },
                                      expression: "setting_data.menu",
                                    },
                                  }),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.submitted && !t.$v.setting_data.menu.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        t._s(
                                          t.$t("common.theme_mode") +
                                            " " +
                                            t.$t(
                                              "patient_encounter.is_required"
                                            )
                                        ) + "\n                        "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("hr", { staticClass: "m-1" }),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("h2", [
                              t._v(
                                "\n                        " +
                                  t._s(t.$t("common.image_template")) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-4" }, [
                            e("p", { staticClass: "font-weight-bold" }, [
                              t._v(
                                "\n                        " +
                                  t._s(t.$t("common.name")) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-4" }, [
                            e("p", { staticClass: "font-weight-bold" }, [
                              t._v(
                                "\n                        " +
                                  t._s(t.$t("common.image")) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-2" }, [
                            e("p", { staticClass: "font-weight-bold" }, [
                              t._v(
                                "\n                        " +
                                  t._s(t.$t("common.default")) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-md-2" }, [
                            e("p", { staticClass: "font-weight-bold" }, [
                              t._v(
                                "\n                        " +
                                  t._s(t.$t("common.action")) +
                                  "\n                    "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        t._l(t.setting_data.defaultImageData, function (n, i) {
                          return e("div", { key: i, staticClass: "row" }, [
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: n.name,
                                      expression: "index.name",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    placeholder: t.formTranslation.common.name,
                                  },
                                  domProps: { value: n.name },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(n, "name", e.target.value);
                                    },
                                  },
                                }),
                                t._v(" "),
                                t.submitted &&
                                !t.$v.setting_data.defaultImageData.$each[i]
                                  .name.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          t._s(
                                            t.$t("common.name") +
                                              " " +
                                              t.$t(
                                                "patient_encounter.is_required"
                                              )
                                          ) + "\n                        "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-4" }, [
                              e("div", { staticClass: "form-group" }, [
                                e("div", { staticClass: "input-group" }, [
                                  e(
                                    "div",
                                    { staticClass: "input-group-prepend" },
                                    [
                                      e(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "button",
                                            id: "body_chart_image_upload_" + i,
                                          },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.fileUpload(i)
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
                                      staticClass:
                                        "input-group-text file-label",
                                      attrs: {
                                        for: "body_chart_image_upload_" + i,
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          n.filename
                                            ? n.filename
                                            : t.$t("common.no_file_chosen")
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                t.submitted &&
                                !t.$v.setting_data.defaultImageData.$each[i].url
                                  .required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          t._s(
                                            t.$t("common.file") +
                                              " " +
                                              t.$t(
                                                "patient_encounter.is_required"
                                              )
                                          ) + "\n                        "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-2" }, [
                              n.id
                                ? e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      {
                                        staticClass:
                                          "form-control-label d-flex justify-content-start align-items-center",
                                        staticStyle: { gap: "0.5rem" },
                                      },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                t.setting_data.defaultImage,
                                              expression:
                                                "setting_data.defaultImage",
                                            },
                                          ],
                                          staticStyle: {
                                            transform: "scale(1.5)",
                                          },
                                          attrs: { type: "radio" },
                                          domProps: {
                                            value: n.id,
                                            checked: t._q(
                                              t.setting_data.defaultImage,
                                              n.id
                                            ),
                                          },
                                          on: {
                                            change: function (e) {
                                              return t.$set(
                                                t.setting_data,
                                                "defaultImage",
                                                n.id
                                              );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        e("span", [
                                          t._v(t._s(t.$t("common.default"))),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.submitted && !t.defaultImageDataSelected
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.$t("common.default") +
                                                  " " +
                                                  t.$t(
                                                    "patient_encounter.is_required"
                                                  )
                                              ) + "\n                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ])
                                : t._e(),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "col-md-2" }, [
                              e(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: !0 },
                                    },
                                  ],
                                  staticClass: "btn btn-sm btn-danger",
                                  attrs: {
                                    title:
                                      t.formTranslation.clinic_schedule
                                        .dt_lbl_dlt,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.removeImage(i);
                                    },
                                  },
                                },
                                [e("i", { staticClass: "fa fa-trash" })]
                              ),
                            ]),
                          ]);
                        }),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-12" }, [
                            e(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-primary",
                                on: { click: t.addNewImage },
                              },
                              [
                                t._v(
                                  "\n                        " +
                                    t._s(t.$t("common.add_new_image")) +
                                    "\n                    "
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e(
                            "div",
                            {
                              staticClass: "col-12 d-flex justify-content-end",
                            },
                            [
                              t.loading
                                ? e(
                                    "button",
                                    { staticClass: "btn btn-primary" },
                                    [
                                      e("i", {
                                        staticClass: "fa fa-spinner fa-spin",
                                      }),
                                      t._v(
                                        "\n                        " +
                                          t._s(t.$t("common.loading")) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                : e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: { click: t.saveSettingData },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-save" }),
                                      t._v(
                                        "\n                        " +
                                          t._s(t.$t("common.save")) +
                                          "\n                    "
                                      ),
                                    ]
                                  ),
                            ]
                          ),
                        ]),
                      ],
                      2
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
          "6dc96458",
          null
        ).exports),
      Fn = n(393).a,
      $n =
        (n(724),
        Object(h.a)(
          Fn,
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
                          show: 1 != t.userData.addOns.bodyChart,
                          variant: "white",
                          opacity: t.overlayOpacity,
                        },
                        scopedSlots: t._u([
                          {
                            key: "overlay",
                            fn: function () {
                              return [
                                e("overlay-message", {
                                  attrs: { addon_type: "bodyChart" },
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
                                                t._s(t.$t("common.body_chart"))
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
                                                        return t.$router.go(-1);
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                                      " +
                                                        t._s(
                                                          t.$t("common.back")
                                                        ) +
                                                        "\n                                  "
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                "1" ==
                                                  t.encounter_data.status &&
                                                t.kcCheckPermission(
                                                  "body_chart_add"
                                                )
                                                  ? e(
                                                      "router-link",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-primary",
                                                        attrs: {
                                                          to: {
                                                            name: "patient-encounter.body-create",
                                                            params: {
                                                              encounter_id:
                                                                t.$route.params
                                                                  .encounter_id,
                                                            },
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
                                                              t.$t(
                                                                "common.add_new_image"
                                                              )
                                                            ) +
                                                            "\n                                "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
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
                            t._v(" "),
                            t.kcCheckPermission("body_chart_list")
                              ? e(
                                  "b-row",
                                  [
                                    e(
                                      "b-col",
                                      {
                                        attrs: { sm: "12", md: "12", lg: "12" },
                                      },
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
                                          { attrs: { id: "bodyChartPrint" } },
                                          [
                                            e(
                                              "vue-good-table",
                                              {
                                                ref: "dataTable",
                                                attrs: {
                                                  columns:
                                                    t.bodyChartData.column,
                                                  rows: t.bodyChartData.data,
                                                  mode: "remote",
                                                  "search-options": {
                                                    enabled: !0,
                                                    placeholder:
                                                      t.formTranslation.common
                                                        .search_body_chart_data_global_placeholder,
                                                  },
                                                  totalRows: t.totalRows,
                                                  "pagination-options": {
                                                    enabled: !0,
                                                    mode: "pages",
                                                  },
                                                  styleClass:
                                                    "vgt-table striped",
                                                  compactMode: "",
                                                },
                                                on: {
                                                  "on-sort-change":
                                                    t.onSortChange,
                                                  "on-column-filter":
                                                    t.onColumnFilter,
                                                  "on-page-change":
                                                    t.onPageChange,
                                                  "on-per-page-change":
                                                    t.onPerPageChange,
                                                  "on-search": t.globalFilter,
                                                },
                                                scopedSlots: t._u(
                                                  [
                                                    {
                                                      key: "table-row",
                                                      fn: function (n) {
                                                        return [
                                                          "name" ==
                                                          n.column.field
                                                            ? e(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "d-flex align-items-center",
                                                                },
                                                                [
                                                                  n.row
                                                                    .chart_image
                                                                    ? e("img", {
                                                                        staticClass:
                                                                          "object-cover",
                                                                        staticStyle:
                                                                          {
                                                                            "border-radius":
                                                                              "50%",
                                                                            "margin-right":
                                                                              "1rem",
                                                                          },
                                                                        attrs: {
                                                                          src: n
                                                                            .row
                                                                            .chart_image,
                                                                          alt: "chart_image",
                                                                          height:
                                                                            "45px",
                                                                          width:
                                                                            "45px",
                                                                        },
                                                                      })
                                                                    : e(
                                                                        "b-avatar",
                                                                        {
                                                                          staticClass:
                                                                            "mr-3",
                                                                          attrs:
                                                                            {
                                                                              variant:
                                                                                "primary",
                                                                              text: t.getInitials(
                                                                                n
                                                                                  .formattedRow
                                                                                  .name
                                                                              ),
                                                                              size: "45px",
                                                                            },
                                                                        }
                                                                      ),
                                                                  t._v(
                                                                    "\n                                        " +
                                                                      t._s(
                                                                        n
                                                                          .formattedRow
                                                                          .name
                                                                      ) +
                                                                      "\n                                    "
                                                                  ),
                                                                ],
                                                                1
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          "patient_name" ==
                                                          n.column.field
                                                            ? e("div", [
                                                                t._v(
                                                                  "                                                        \n                                        " +
                                                                    t._s(
                                                                      t
                                                                        .encounter_data
                                                                        .patient_name
                                                                    ) +
                                                                    "\n                                    "
                                                                ),
                                                              ])
                                                            : t._e(),
                                                          t._v(" "),
                                                          "doctor_name" ==
                                                          n.column.field
                                                            ? e("div", [
                                                                t._v(
                                                                  "                                                        \n                                        " +
                                                                    t._s(
                                                                      t
                                                                        .encounter_data
                                                                        .doctor_name
                                                                    ) +
                                                                    "\n                                    "
                                                                ),
                                                              ])
                                                            : t._e(),
                                                          t._v(" "),
                                                          "status" ==
                                                          n.column.field
                                                            ? e("div", [
                                                                "0" ==
                                                                t.encounter_data
                                                                  .status
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
                                                                "1" ==
                                                                t.encounter_data
                                                                  .status
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
                                                                  t.kcCheckPermission(
                                                                    "body_chart_edit"
                                                                  ) &&
                                                                  "1" ==
                                                                    t
                                                                      .encounter_data
                                                                      .status
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
                                                                          attrs:
                                                                            {
                                                                              to: {
                                                                                name: "patient-encounter.body-edit",
                                                                                params:
                                                                                  {
                                                                                    body_chart_id:
                                                                                      n
                                                                                        .row
                                                                                        .id,
                                                                                    encounter_id:
                                                                                      n
                                                                                        .row
                                                                                        .encounter_id,
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
                                                                          e(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fa fa-pen-alt",
                                                                            }
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : t._e(),
                                                                  t._v(" "),
                                                                  t.kcCheckPermission(
                                                                    "body_chart_view"
                                                                  )
                                                                    ? e(
                                                                        "a",
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
                                                                            "btn btn-outline-primary btn-sm",
                                                                          attrs:
                                                                            {
                                                                              href: n
                                                                                .row
                                                                                .chart_image,
                                                                              target:
                                                                                "_blank",
                                                                              title:
                                                                                t
                                                                                  .formTranslation
                                                                                  .common
                                                                                  .view,
                                                                            },
                                                                        },
                                                                        [
                                                                          e(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fas fa-eye",
                                                                            }
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : t._e(),
                                                                  t._v(" "),
                                                                  t.kcCheckPermission(
                                                                    "body_chart_download"
                                                                  )
                                                                    ? e(
                                                                        "a",
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
                                                                            "btn btn-outline-primary btn-sm",
                                                                          attrs:
                                                                            {
                                                                              href: n
                                                                                .row
                                                                                .chart_image,
                                                                              download:
                                                                                n
                                                                                  .row
                                                                                  .chart_image,
                                                                              title:
                                                                                t
                                                                                  .formTranslation
                                                                                  .common
                                                                                  .download,
                                                                            },
                                                                        },
                                                                        [
                                                                          e(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fas fa-download",
                                                                            }
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : t._e(),
                                                                  t._v(" "),
                                                                  t.kcCheckPermission(
                                                                    "body_chart_delete"
                                                                  ) &&
                                                                  "1" ==
                                                                    t
                                                                      .encounter_data
                                                                      .status
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
                                                                          attrs:
                                                                            {
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
                                                                                return t.deleteBodyChartData(
                                                                                  n.index +
                                                                                    1,
                                                                                  n
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
                                                              )
                                                            : [
                                                                "name",
                                                                "doctor_name",
                                                                "status",
                                                                "patient_name",
                                                              ].includes(
                                                                n.column.field
                                                              )
                                                            ? t._e()
                                                            : e("div", [
                                                                t._v(
                                                                  "\n                                        " +
                                                                    t._s(
                                                                      n
                                                                        .formattedRow[
                                                                        n.column
                                                                          .field
                                                                      ]
                                                                        ? n
                                                                            .formattedRow[
                                                                            n
                                                                              .column
                                                                              .field
                                                                          ]
                                                                        : "-"
                                                                    ) +
                                                                    "\n                                    "
                                                                ),
                                                              ]),
                                                        ];
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  !1,
                                                  2173745823
                                                ),
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "text-center",
                                                    attrs: {
                                                      slot: "emptystate",
                                                    },
                                                    slot: "emptystate",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                                    " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .no_data_found
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
                                      ]
                                    ),
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
      Hn = (n(726), n(728), n(609)),
      Yn = n.n(Hn);
    const Un = { includeUI: { initMenu: "filter" } },
      Xn = { cssMaxWidth: 700, cssMaxHeight: 500 };
    var Vn = {
        name: "TuiImageEditor",
        props: {
          includeUi: { type: Boolean, default: !0 },
          options: { type: Object, default: () => Xn },
        },
        mounted() {
          let t = Xn;
          this.includeUi && (t = Object.assign(Un, this.options)),
            (this.editorInstance = new Yn.a(this.$refs.tuiImageEditor, t)),
            this.addEventListener();
        },
        destroyed() {
          Object.keys(this.$listeners).forEach((t) => {
            this.editorInstance.off(t);
          }),
            this.editorInstance.destroy(),
            (this.editorInstance = null);
        },
        methods: {
          addEventListener() {
            Object.keys(this.$listeners).forEach((t) => {
              this.editorInstance.on(t, (...e) => this.$emit(t, ...e));
            });
          },
          getRootElement() {
            return this.$refs.tuiImageEditor;
          },
          invoke(t, ...e) {
            let n = null;
            if (this.editorInstance[t]) n = this.editorInstance[t](...e);
            else if (t.indexOf(".") > -1) {
              const i = this.getMethod(this.editorInstance, t);
              "function" == typeof i && (n = i(...e));
            }
            return n;
          },
          getMethod(t, e) {
            const { first: n, rest: i } = this.parseDotMethodName(e),
              r = "Object" !== t.constructor.name,
              o = typeof t[n];
            let a;
            return (
              (a = r && "function" === o ? t[n].bind(t) : t[n]),
              i.length > 0 ? this.getMethod(a, i) : a
            );
          },
          parseDotMethodName(t) {
            const e = t.indexOf(".");
            let n = t,
              i = "";
            return (
              e > -1 &&
                ((n = t.substring(0, e)), (i = t.substring(e + 1, t.length))),
              { first: n, rest: i }
            );
          },
        },
      },
      Gn = {
        name: "ImageEdit",
        components: {
          "tui-image-editor": Object(h.a)(
            Vn,
            function () {
              return (0, this._self._c)("div", {
                ref: "tuiImageEditor",
                staticStyle: { width: "100%", height: "100%" },
              });
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
        },
        data: function () {
          return {
            imageEditorOptions: {
              cssMaxWidth: document.documentElement.clientWidth,
              cssMaxHeight: 768,
              usageStatistics: !1,
              includeUI: {
                loadImage: {
                  path: "",
                  name: "SampleImage",
                  title: "",
                  description: "",
                },
                uiSize: { width: "100%", height: "1000px" },
                theme: {},
                themeMode: "WhiteTheme",
                menuBarPosition: "left",
              },
            },
            encounterData: {},
            loading: !0,
            buttonLoading: !1,
            templateImage: [],
            submitted: !1,
          };
        },
        validations: {
          imageEditorOptions: {
            includeUI: { loadImage: { title: { required: l.required } } },
          },
        },
        mounted: function () {
          var t, e;
          1 == this.userData.addOns.bodyChart &&
            (this.$route.params.encounter_id || this.$route.params.body_chart_id
              ? ((this.imageEditorOptions.includeUI.loadImage.encounter_id =
                  null !== (t = this.$route) &&
                  void 0 !== t &&
                  null !== (t = t.params) &&
                  void 0 !== t &&
                  t.encounter_id
                    ? this.$route.params.encounter_id
                    : 0),
                (this.imageEditorOptions.includeUI.loadImage.body_chart_id =
                  null !== (e = this.$route) &&
                  void 0 !== e &&
                  null !== (e = e.params) &&
                  void 0 !== e &&
                  e.body_chart_id
                    ? this.$route.params.body_chart_id
                    : 0),
                this.init())
              : this.$router.push({ name: "403" }));
        },
        methods: {
          init: function () {
            var t = this,
              e = Object.assign(
                {},
                this.imageEditorOptions.includeUI.loadImage
              );
            Object(s.a)("encounter_body_chart_data_edit", e)
              .then(function (e) {
                if (void 0 !== e.data.status && !0 === e.data.status) {
                  var n = e.data.data;
                  (t.templateImage = n.setting.defaultImageData),
                    (t.encounterData = n.encounter_data),
                    (t.imageEditorOptions.includeUI.menuBarPosition =
                      n.setting.menuBarPosition),
                    (t.imageEditorOptions.includeUI.menu = n.setting.menu),
                    (t.imageEditorOptions.includeUI.themeMode =
                      n.setting.theme),
                    (t.imageEditorOptions.includeUI.theme =
                      n.setting.theme_data),
                    (t.imageEditorOptions.includeUI.locale =
                      n.setting.langauge),
                    (t.imageEditorOptions.includeUI.mobileDefaultHeight =
                      n.setting.mobile_default_height),
                    window.innerWidth <= 680 &&
                      ((t.imageEditorOptions.includeUI.menuBarPosition =
                        "bottom"),
                      (t.imageEditorOptions.includeUI.uiSize.height =
                        t.imageEditorOptions.includeUI.mobileDefaultHeight)),
                    (t.imageEditorOptions.includeUI.locale =
                      n.setting.langauge),
                    t.updateImageData(n.image),
                    (t.loading = !1),
                    setTimeout(function () {
                      t.loadImage();
                    }, 500);
                } else (t.loading = !1), displayErrorMessage(e.data.message);
              })
              .catch(function (e) {
                (t.loading = !1),
                  displayErrorMessage(
                    t.formTranslation.common.internal_server_error
                  );
              });
          },
          selectImage: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              t.updateImageData(n), t.loadImage();
            }),
              e.open();
          },
          updateImageData: function (t) {
            t.title &&
              (this.imageEditorOptions.includeUI.loadImage.title = t.title),
              t.description &&
                (this.imageEditorOptions.includeUI.loadImage.description =
                  t.description),
              t.encounter_id &&
                (this.imageEditorOptions.includeUI.loadImage.encounter_id =
                  t.encounter_id),
              (this.imageEditorOptions.includeUI.loadImage.url = t.url),
              (this.imageEditorOptions.includeUI.loadImage.id = t.id),
              (this.imageEditorOptions.includeUI.loadImage.mime = t.mime),
              (this.imageEditorOptions.includeUI.loadImage.extension =
                t.extension ? t.extension : t.subtype),
              (this.imageEditorOptions.includeUI.loadImage.name = t.name);
          },
          selectTemplate: function (t) {
            this.updateImageData(t), this.loadImage();
          },
          downloadImage: function () {
            var t,
              e,
              n = this.imageEditorInstance.getImageName(),
              i = this.imageEditorInstance.toDataURL();
            window.File && window.FileList && window.FileReader
              ? ((e = (t = this.base64ToBlob(i)).type.split("/")[1]),
                n.split(".").pop() !== e && (n += "." + e),
                saveAs(t, n))
              : (window.open().document.body.innerHTML =
                  '<img src="' + i + '">');
          },
          viewImage: function () {
            var t = this.imageEditorInstance.toDataURL();
            if (window.File && window.FileList && window.FileReader) {
              var e = this.base64ToBlob(t),
                n = URL.createObjectURL(e);
              window.open(n, "_blank");
            } else
              window.open().document.body.innerHTML = '<img src="' + t + '">';
          },
          base64ToBlob: function (t) {
            var e,
              n,
              i,
              r,
              o = "";
            for (
              e = t.replace(/data:(image\/.+);base64,/, function (t, e) {
                return (o = e), "";
              }),
                r = (e = atob(e)).length,
                n = new Uint8Array(r),
                i = 0;
              i < r;
              i += 1
            )
              n[i] = e.charCodeAt(i);
            return new Blob([n], { type: o });
          },
          saveImage: function () {
            var t = this;
            if (
              this.imageEditorInstance &&
              ((this.submitted = !0),
              this.$v.$touch(),
              !this.$v.imageEditorOptions.$invalid)
            ) {
              var e = Object.assign(
                {},
                this.imageEditorOptions.includeUI.loadImage
              );
              (e.image_path = this.imageEditorInstance.toDataURL()),
                (this.submitted = !1),
                (this.buttonLoading = !0),
                Object(s.b)("encounter_body_chart_data_save", e)
                  .then(function (e) {
                    (t.buttonLoading = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (displayMessage(e.data.message), t.$router.go(-1))
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.buttonLoading = !1),
                      displayErrorMessage(
                        t.formTranslation.common.internal_server_error
                      );
                  });
            }
          },
          reloadDefaultImage: function () {
            this.imageEditorInstance &&
              (this.imageEditorInstance.clearObjects(),
              this.imageEditorInstance.clearUndoStack(),
              this.imageEditorInstance.clearRedoStack());
          },
          loadImage: function () {
            var t = this;
            if (this.imageEditorInstance) {
              var e = this.imageEditorOptions.includeUI.loadImage;
              this.imageEditorInstance.clearObjects().then(function () {
                t.imageEditorInstance
                  .loadImageFromURL(e.url, e.name)
                  .then(function (e) {
                    var n = e.newHeight > 1e3 ? 1e3 : e.newHeight + 170;
                    t.imageEditorInstance.ui.resizeEditor({
                      uiSize: {
                        width: "100%",
                        height:
                          window.innerWidth <= 680
                            ? t.imageEditorOptions.includeUI.mobileDefaultHeight
                            : n + "px",
                      },
                      imageSize: {
                        oldHeight: e.oldHeight,
                        oldWidth: e.oldWidth,
                        newHeight: e.newHeight,
                        newWidth: e.newWidth,
                      },
                    }),
                      t.imageEditorInstance.ui.activeMenuEvent();
                  })
                  .catch(function (t) {});
              });
            }
          },
          customFieldContent: function (t) {
            var e = "";
            return (
              t.forEach(function (t, n) {
                (e +=
                  '<div class="mt-2"> <p class="mb-0"><span class="font-weight-bold">'),
                  (e += t.label),
                  (e += ": </span>"),
                  (e +=
                    null !== t.field_data
                      ? Array.isArray(t.field_data)
                        ? t.field_data.join(", ")
                        : t.field_data
                      : " "),
                  (e += "</p></div>");
              }),
              e
            );
          },
        },
        computed: {
          imageEditorInstance: function () {
            return this.$refs.tuiImageEditor &&
              this.$refs.tuiImageEditor.editorInstance
              ? this.$refs.tuiImageEditor.editorInstance
              : "";
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      Kn =
        (n(734),
        Object(h.a)(
          Gn,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e("b-card", {
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
                                { attrs: { sm: "12", md: "4", lg: "4" } },
                                [
                                  e("h3", { staticClass: "mb-0" }, [
                                    t._v(
                                      t._s(
                                        t.$t("common.edit") +
                                          " " +
                                          t.$t("common.image")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "b-col",
                                { attrs: { sm: "12", md: "8", lg: "8" } },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "d-flex justify-content-end",
                                    },
                                    [
                                      e(
                                        "button",
                                        {
                                          staticClass: "btn btn-sm btn-primary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function (e) {
                                              return t.$router.go(-1);
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                            " +
                                              t._s(t.$t("common.back")) +
                                              "\n                        "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      !t.loading &&
                                      t.templateImage.length > 0 &&
                                      t.kcCheckPermission(
                                        "body_chart_select_template"
                                      )
                                        ? e(
                                            "b-dropdown",
                                            {
                                              attrs: {
                                                variant: "link",
                                                "no-caret": "",
                                                right: "",
                                                "toggle-class":
                                                  "btn btn-sm btn-primary mr-2",
                                              },
                                              scopedSlots: t._u(
                                                [
                                                  {
                                                    key: "button-content",
                                                    fn: function () {
                                                      return [
                                                        e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-primary",
                                                            attrs: {
                                                              type: "button",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                    " +
                                                                t._s(
                                                                  t.$t(
                                                                    "common.select_template"
                                                                  )
                                                                ) +
                                                                "\n                                "
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e("button", {
                                                          staticClass: "d-none",
                                                        }),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  },
                                                ],
                                                null,
                                                !1,
                                                2107219896
                                              ),
                                            },
                                            [
                                              t._v(" "),
                                              t._l(
                                                t.templateImage,
                                                function (n, i) {
                                                  var r;
                                                  return e(
                                                    "b-dropdown-item",
                                                    {
                                                      key: i,
                                                      on: {
                                                        click: function (e) {
                                                          return t.selectTemplate(
                                                            n
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e(
                                                        "b-card",
                                                        {
                                                          staticClass: "mb-3",
                                                          style:
                                                            n.id ==
                                                            (null ===
                                                              (r =
                                                                t.imageEditorOptions) ||
                                                            void 0 === r ||
                                                            null ===
                                                              (r =
                                                                r.includeUI) ||
                                                            void 0 === r ||
                                                            null ===
                                                              (r =
                                                                r.loadImage) ||
                                                            void 0 === r
                                                              ? void 0
                                                              : r.id)
                                                              ? "border-color:var(--primary)"
                                                              : "",
                                                          attrs: {
                                                            "img-src": n.url,
                                                            "img-height": "150",
                                                            "body-class":
                                                              "d-flex justify-content-center align-items-center",
                                                            "img-alt":
                                                              "Card image",
                                                            "img-left": "",
                                                          },
                                                        },
                                                        [
                                                          e("b-card-text", [
                                                            t._v(
                                                              "\n                                        " +
                                                                t._s(n.name) +
                                                                "\n                                    "
                                                            ),
                                                          ]),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  );
                                                }
                                              ),
                                            ],
                                            2
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      !t.loading &&
                                      t.kcCheckPermission(
                                        "body_chart_upload_image"
                                      )
                                        ? e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-primary",
                                              attrs: { type: "button" },
                                              on: { click: t.selectImage },
                                            },
                                            [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.$t(
                                                      "common.upload_new_image"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      !t.loading &&
                                      t.kcCheckPermission("body_chart_edit")
                                        ? e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-primary",
                                              attrs: { id: "reload_image" },
                                              on: {
                                                click: t.reloadDefaultImage,
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                            " +
                                                  t._s(t.$t("common.reset")) +
                                                  "\n                        "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      t.loading
                                        ? t._e()
                                        : e(
                                            "b-dropdown",
                                            {
                                              staticClass: "pr-0",
                                              attrs: {
                                                variant: "link",
                                                "no-caret": "",
                                                right: "",
                                                "toggle-class":
                                                  "btn btn-sm btn-primary",
                                                open: t.buttonLoading,
                                              },
                                              scopedSlots: t._u(
                                                [
                                                  {
                                                    key: "button-content",
                                                    fn: function () {
                                                      return [
                                                        e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-sm btn-primary",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                    " +
                                                                t._s(
                                                                  t.buttonLoading
                                                                    ? t.$t(
                                                                        "Saving..."
                                                                      )
                                                                    : t.$t(
                                                                        "common.save"
                                                                      )
                                                                ) +
                                                                "\n                                "
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
                                                1832058802
                                              ),
                                            },
                                            [
                                              t._v(" "),
                                              t.kcCheckPermission(
                                                "body_chart_view"
                                              )
                                                ? e(
                                                    "b-dropdown-item",
                                                    {
                                                      on: {
                                                        click: t.viewImage,
                                                      },
                                                    },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "fas fa-eye",
                                                      }),
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.$t("common.view")
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                              t._v(" "),
                                              t.kcCheckPermission(
                                                "body_chart_download"
                                              )
                                                ? e(
                                                    "b-dropdown-item",
                                                    {
                                                      on: {
                                                        click: t.downloadImage,
                                                      },
                                                    },
                                                    [
                                                      e("i", {
                                                        staticClass:
                                                          "fas fa-download",
                                                      }),
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.$t(
                                                              "common.download"
                                                            )
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                              t._v(" "),
                                              t.kcCheckPermission(
                                                "body_chart_save"
                                              )
                                                ? e(
                                                    "div",
                                                    [
                                                      t.buttonLoading
                                                        ? e("b-dropdown-item", [
                                                            e("i", {
                                                              staticClass:
                                                                "fa fa-sync fa-spin",
                                                            }),
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  t.$t(
                                                                    "common.loading"
                                                                  )
                                                                ) +
                                                                "\n                                "
                                                            ),
                                                          ])
                                                        : e(
                                                            "b-dropdown-item",
                                                            {
                                                              attrs: {
                                                                id: "save_image",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.saveImage,
                                                              },
                                                            },
                                                            [
                                                              e("i", {
                                                                staticClass:
                                                                  "fas fa-save",
                                                              }),
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    t.$t(
                                                                      "common.save_image"
                                                                    )
                                                                  ) +
                                                                  "\n                                "
                                                              ),
                                                            ]
                                                          ),
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
                t._v(" "),
                t.loading
                  ? e("div", { staticClass: "row" }, [
                      e(
                        "div",
                        {
                          staticClass: "col-12",
                          staticStyle: { height: "400px" },
                        },
                        [e("loader-component-2")],
                        1
                      ),
                    ])
                  : e(
                      "div",
                      { staticClass: "row mb-2" },
                      [
                        e(
                          "b-col",
                          { attrs: { sm: "12", md: "12", lg: "12" } },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    staticClass: "mb-2",
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
                                                      "v-b-toggle.collapse-1",
                                                    modifiers: {
                                                      "collapse-1": !0,
                                                    },
                                                  },
                                                ],
                                                staticClass: "pl-1",
                                                attrs: {
                                                  type: "button",
                                                  block: "",
                                                  variant:
                                                    "link shadow-none text-left",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                " +
                                                    t._s(
                                                      t.$t(
                                                        "patient_encounter.encounter_details"
                                                      )
                                                    ) +
                                                    "\n                            "
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
                                          id: "collapse-1",
                                          accordion: "my-accordion",
                                          role: "tabpanel",
                                        },
                                      },
                                      [
                                        e("b-card-body", [
                                          e(
                                            "div",
                                            { staticClass: "row ml-2" },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e("strong", [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .common.name
                                                          ) + ": "
                                                        ),
                                                      ]),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .patient_name
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  "" !==
                                                  t.encounterData
                                                    .patient_unique_id
                                                    ? e(
                                                        "div",
                                                        { staticClass: "mb-0" },
                                                        [
                                                          e("strong", [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .patient
                                                                  .unique_id
                                                              ) + ": "
                                                            ),
                                                          ]),
                                                          t._v(
                                                            t._s(
                                                              t.encounterData
                                                                .patient_unique_id
                                                            ) +
                                                              "\n                                    "
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.email
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .patient_email
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .patient_encounter
                                                                .encounter_date
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .encounter_date
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .common.address
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .patient_address ||
                                                            t.formTranslation
                                                              .common
                                                              .no_records_found
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("hr", {
                                                staticClass:
                                                  "m-2 ml-0 d-md-none",
                                              }),
                                              t._v(" "),
                                              e(
                                                "div",
                                                { staticClass: "col-md-6" },
                                                [
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "clinic.clinic_name"
                                                              )
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .clinic_name
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "doctor.doctor_name"
                                                              )
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .doctor_name
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      e(
                                                        "strong",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "appointments.description"
                                                              )
                                                            ) + ": "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        t._s(
                                                          t.encounterData
                                                            .description ||
                                                            t.$t(
                                                              "common.no_records_found"
                                                            )
                                                        ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass: "mb-0 mt-1",
                                                    },
                                                    [
                                                      e(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "mb-0 float-left",
                                                        },
                                                        [
                                                          1 ==
                                                          t.encounterData.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success p-2",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                                                " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .active
                                                                      )
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          0 ==
                                                          t.encounterData.status
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "\n                                                " +
                                                                      t._s(
                                                                        t
                                                                          .formTranslation
                                                                          .common
                                                                          .closed
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
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          (t.encounterData
                                            .appointment_custom_field &&
                                            t.encounterData
                                              .appointment_custom_field.length >
                                              0) ||
                                          (t.encounterData.appointment_report &&
                                            t.encounterData.appointment_report
                                              .length > 0)
                                            ? e("div", [
                                                e("hr", {
                                                  staticClass: "mb-1",
                                                }),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  { staticClass: "row ml-2" },
                                                  [
                                                    t.encounterData
                                                      .appointment_report &&
                                                    t.encounterData
                                                      .appointment_report
                                                      .length > 0
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                              },
                                                              [
                                                                e("strong", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient
                                                                        .medical_report
                                                                    ) +
                                                                      "\n                                            "
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
                                                                                    .view_report,
                                                                                href: n.url,
                                                                                target:
                                                                                  "_blank",
                                                                              },
                                                                          },
                                                                          [
                                                                            e(
                                                                              "i",
                                                                              {
                                                                                staticClass:
                                                                                  "fas fa-external-link-alt mr-1",
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              t._s(
                                                                                n.name
                                                                              ) +
                                                                                "\n                                                "
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
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    e("hr", {
                                                      staticClass:
                                                        "m-2 ml-0 d-md-none",
                                                    }),
                                                    t._v(" "),
                                                    t.encounterData
                                                      .appointment_custom_field &&
                                                    t.encounterData
                                                      .appointment_custom_field
                                                      .length > 0
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-6",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                              },
                                                              [
                                                                e("strong", [
                                                                  t._v(
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .patient_bill
                                                                        .other_info
                                                                    ) +
                                                                      "\n                                            "
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            e("div", {
                                                              domProps: {
                                                                innerHTML: t._s(
                                                                  t.customFieldContent(
                                                                    t
                                                                      .encounterData
                                                                      .appointment_custom_field
                                                                  )
                                                                ),
                                                              },
                                                            }),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ])
                                            : t._e(),
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
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-col",
                          { attrs: { sm: "12", md: "12", lg: "12" } },
                          [
                            e(
                              "b-card",
                              { staticClass: "mb-2", attrs: { "no-body": "" } },
                              [
                                e(
                                  "b-card-header",
                                  { attrs: { "header-tag": "header" } },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center text-primary",
                                      },
                                      [
                                        e(
                                          "b-button",
                                          {
                                            staticClass: "pl-1",
                                            attrs: {
                                              type: "button",
                                              block: "",
                                              variant:
                                                "link shadow-none text-left",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                            " +
                                                t._s(
                                                  t.$t("common.image_details")
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
                                e("b-card-body", [
                                  e("div", { staticClass: "row ml-2" }, [
                                    e("div", { staticClass: "col-md-6" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          { attrs: { for: "image-title" } },
                                          [
                                            t._v(
                                              "\n                                    " +
                                                t._s(
                                                  t.$t("common.image_title")
                                                ) +
                                                "\n                                    "
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
                                              value:
                                                t.imageEditorOptions.includeUI
                                                  .loadImage.title,
                                              expression:
                                                "imageEditorOptions.includeUI.loadImage.title",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "image-title",
                                            placeholder:
                                              t.formTranslation.common
                                                .enter_image_title,
                                          },
                                          domProps: {
                                            value:
                                              t.imageEditorOptions.includeUI
                                                .loadImage.title,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.imageEditorOptions.includeUI
                                                    .loadImage,
                                                  "title",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.imageEditorOptions.includeUI
                                          .loadImage.title.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                                    " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .image_title_required
                                                    ) +
                                                    "\n                                "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "col-md-6" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e("label", [
                                          t._v(
                                            "\n                                    " +
                                              t._s(
                                                t.$t("common.image_description")
                                              ) +
                                              "\n                                "
                                          ),
                                        ]),
                                        t._v(" "),
                                        e("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                t.imageEditorOptions.includeUI
                                                  .loadImage.description,
                                              expression:
                                                "imageEditorOptions.includeUI.loadImage.description",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "image-title",
                                            placeholder:
                                              t.formTranslation.common
                                                .enter_image_description,
                                          },
                                          domProps: {
                                            value:
                                              t.imageEditorOptions.includeUI
                                                .loadImage.description,
                                          },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.imageEditorOptions.includeUI
                                                    .loadImage,
                                                  "description",
                                                  e.target.value
                                                );
                                            },
                                          },
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
                        t._v(" "),
                        e(
                          "div",
                          {
                            class:
                              "col-12 " +
                              t.imageEditorOptions.includeUI.themeMode,
                          },
                          [
                            e("tui-image-editor", {
                              ref: "tuiImageEditor",
                              attrs: { options: t.imageEditorOptions },
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
          "8b6c1e50",
          null
        ).exports),
      Zn = n(95),
      Jn = n(141),
      Qn = n(407),
      ti = n(69);
    function ei(t) {
      return (ei =
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
    function ni() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          ii(
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
          : (ii((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), ii(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        ii(u, "constructor", c),
        ii(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        ii(c, r, "GeneratorFunction"),
        ii(u),
        ii(u, r, "Generator"),
        ii(u, i, function () {
          return this;
        }),
        ii(u, "toString", function () {
          return "[object Generator]";
        }),
        (ni = function () {
          return { w: o, m: p };
        })()
      );
    }
    function ii(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (ii = function (t, e, n, i) {
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
            ii(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function ri(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function oi(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = t.apply(e, n);
          function a(t) {
            ri(o, i, r, a, s, "next", t);
          }
          function s(t) {
            ri(o, i, r, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function ai(t, e) {
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
    function si(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ai(Object(n), !0).forEach(function (e) {
              li(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ai(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function li(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != ei(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != ei(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == ei(e) ? e : e + "";
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
    var ci = {
        data: function () {
          return {
            name: "webhooks",
            column: [],
            rows: [],
            totalRows: 0,
            isRowLoading: !1,
            isColumnLoading: !1,
            serverParams: {
              columnFilters: { module_name: "", event_name: "" },
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
              searchTerm: "",
              type: "list",
            },
            oldServerParams: { columnFilters: {}, searchTerm: "", perPage: 10 },
            deleteRowId: -1,
            apiEndpoint: {
              list: "webhooks_list",
              column: "webhooks_column",
              delete: "webhooks_delete",
              clone: "webhooks_clone",
            },
            delete_ele: "webhook_delete_",
            clone_ele: "webhook_clone_",
            globalCheckboxApplyData: {},
            globalCheckboxApplyDataActions: [],
            column_label_hashmap: {},
            eventNameColumn: {},
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
              this.init();
        },
        methods: si(
          si(
            si({}, Jn),
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
                return oi(
                  ni().m(function e() {
                    var n;
                    return ni().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (t.isRowLoading = !0),
                              (e.n = 1),
                              Object(Zn.c)(t.apiEndpoint.list, t.serverParams)
                            );
                          case 1:
                            (n = e.v),
                              (t.rows = n.rows || []),
                              (t.totalRows = n.response.total_row || 0),
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
              formatColumnData: function (t) {
                var e,
                  n,
                  i,
                  r = this;
                Object.keys(t).forEach(function (e) {
                  var n;
                  null !== (n = t[e]) &&
                    void 0 !== n &&
                    null !== (n = n.filterOptions) &&
                    void 0 !== n &&
                    n.enabled &&
                    (r.serverParams.columnFilters[e] = "");
                }),
                  null != t &&
                    t.module_name &&
                    null != t &&
                    null !== (e = t.module_name) &&
                    void 0 !== e &&
                    null !== (e = e.filterOptions) &&
                    void 0 !== e &&
                    e.filterDropdownItems &&
                    t.module_name.filterOptions.filterDropdownItems.forEach(
                      function (t) {
                        r.column_label_hashmap[t.value] = t.text;
                      }
                    ),
                  null != t &&
                    t.event_name &&
                    null != t &&
                    null !== (n = t.event_name) &&
                    void 0 !== n &&
                    null !== (n = n.filterOptions) &&
                    void 0 !== n &&
                    n.filterDropdownItemsCopy &&
                    Object.keys(
                      t.event_name.filterOptions.filterDropdownItemsCopy
                    ).forEach(function (e) {
                      t.event_name.filterOptions.filterDropdownItemsCopy[
                        e
                      ].forEach(function (t) {
                        r.column_label_hashmap[t.value] = t.text;
                      });
                    }),
                  null != t &&
                    t.methods &&
                    null != t &&
                    null !== (i = t.methods) &&
                    void 0 !== i &&
                    null !== (i = i.filterOptions) &&
                    void 0 !== i &&
                    i.filterDropdownItems &&
                    t.methods.filterOptions.filterDropdownItems.forEach(
                      function (t) {
                        r.column_label_hashmap[t.value] = t.text;
                      }
                    ),
                  (this.eventNameColumn = null == t ? void 0 : t.event_name);
              },
              cloneData: function (t) {
                var e = this;
                return oi(
                  ni().m(function n() {
                    var i;
                    return ni().w(function (n) {
                      for (;;)
                        switch (n.n) {
                          case 0:
                            return (
                              (i = { cloneEle: e.clone_ele, id: t }),
                              (n.n = 1),
                              Object(Zn.a)(e.apiEndpoint.clone, i)
                            );
                          case 1:
                            if (!n.v) {
                              n.n = 2;
                              break;
                            }
                            return (n.n = 2), e.getTableData();
                          case 2:
                            return n.a(2);
                        }
                    }, n);
                  })
                )();
              },
            },
            Object(ti.b)("tableModule", ["fetchTableColumns"])
          ),
          {},
          {
            getTableColumn: function () {
              var t = this;
              return oi(
                ni().m(function e() {
                  var n;
                  return ni().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (t.isColumnLoading = !0),
                            (e.n = 1),
                            t.fetchTableColumns({
                              endpoint: t.apiEndpoint.column,
                              module: "webhooks",
                            })
                          );
                        case 1:
                          (n = e.v) &&
                            ((t.column = Object.values(n)),
                            t.formatColumnData(n)),
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
      di = Object(h.a)(
        ci,
        function () {
          var t,
            e = this,
            n = e._self._c;
          return n(
            "b-row",
            [
              n(
                "b-col",
                { attrs: { sm: "12" } },
                [
                  n(
                    "b-overlay",
                    {
                      attrs: {
                        show: !(
                          null !== (t = e.userData) &&
                          void 0 !== t &&
                          null !== (t = t.addOns) &&
                          void 0 !== t &&
                          t.webhooks
                        ),
                        variant: "white",
                        opacity: e.overlayOpacity,
                      },
                      scopedSlots: e._u([
                        {
                          key: "overlay",
                          fn: function () {
                            return [
                              n("overlay-message", {
                                attrs: { addon_type: e.name },
                              }),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      e._v(" "),
                      n(
                        "b-card",
                        {
                          staticClass: "p-0 shadow",
                          attrs: {
                            "body-class": "p-0",
                            "header-tag": "header",
                            "footer-tag": "footer",
                          },
                          scopedSlots: e._u([
                            {
                              key: "header",
                              fn: function () {
                                return [
                                  n(
                                    "b-row",
                                    [
                                      n(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "8", lg: "8" },
                                        },
                                        [
                                          n("h3", { staticClass: "mb-0" }, [
                                            e._v(
                                              "\n                " +
                                                e._s(
                                                  e.formTranslation.webhooks
                                                    .webhooks_list ||
                                                    "Webhooks list"
                                                ) +
                                                "\n              "
                                            ),
                                          ]),
                                        ]
                                      ),
                                      e._v(" "),
                                      n(
                                        "b-col",
                                        {
                                          attrs: { sm: "12", md: "4", lg: "4" },
                                        },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-end",
                                            },
                                            [
                                              n(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  attrs: {
                                                    to: {
                                                      name: "".concat(
                                                        e.name,
                                                        ".create"
                                                      ),
                                                    },
                                                  },
                                                },
                                                [
                                                  n("i", {
                                                    staticClass: "fa fa-plus",
                                                  }),
                                                  e._v(
                                                    "\n                  " +
                                                      e._s(
                                                        e.formTranslation
                                                          .webhooks
                                                          .new_webhook ||
                                                          "New webhook"
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
                          e._v(" "),
                          n(
                            "b-row",
                            [
                              n(
                                "b-col",
                                { attrs: { sm: "12", md: "12", lg: "12" } },
                                [
                                  n(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            e.isColumnLoading || e.isRowLoading,
                                          expression:
                                            "isColumnLoading || isRowLoading",
                                        },
                                      ],
                                    },
                                    [n("loader-component-2")],
                                    1
                                  ),
                                  e._v(" "),
                                  n(
                                    "div",
                                    { attrs: { id: e.name + "Print" } },
                                    [
                                      n(
                                        "vue-good-table",
                                        {
                                          ref: "dataTable",
                                          attrs: {
                                            columns: e.column,
                                            rows: e.rows,
                                            mode: "remote",
                                            "search-options": {
                                              enabled: !0,
                                              placeholder:
                                                e.formTranslation.common
                                                  .search_webhooks_data_global_placeholder,
                                            },
                                            totalRows: e.totalRows,
                                            "pagination-options": {
                                              enabled: !0,
                                              mode: "pages",
                                            },
                                            "select-options": {
                                              enabled: e.column,
                                              selectOnCheckboxOnly: !0,
                                              selectionInfoClass:
                                                "text-primary bg-white",
                                              selectionText:
                                                e.formTranslation.common
                                                  .rows_selected,
                                              clearSelectionText:
                                                e.formTranslation.common.clear,
                                              disableSelectInfo: !1,
                                              selectAllByGroup: !0,
                                            },
                                            styleClass: "vgt-table striped",
                                            compactMode: "",
                                          },
                                          on: {
                                            "on-sort-change": e.onSortChange,
                                            "on-column-filter":
                                              e.onColumnFilter,
                                            "on-page-change": e.onPageChange,
                                            "on-per-page-change":
                                              e.onPerPageChange,
                                            "on-search": e.globalFilter,
                                            "on-selected-rows-change":
                                              function (t) {
                                                e.globalCheckboxApplyData.data =
                                                  t;
                                              },
                                          },
                                          scopedSlots: e._u([
                                            {
                                              key: "column-filter",
                                              fn: function (t) {
                                                var i,
                                                  r,
                                                  o = t.column,
                                                  a = t.updateFilters;
                                                return [
                                                  "event_name" === o.field &&
                                                  null !==
                                                    (i = e.eventNameColumn) &&
                                                  void 0 !== i &&
                                                  null !==
                                                    (i = i.filterOptions) &&
                                                  void 0 !== i &&
                                                  i.enabled
                                                    ? n("div", [
                                                        n(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  e.serverParams
                                                                    .columnFilters
                                                                    .event_name,
                                                                expression:
                                                                  "serverParams.columnFilters.event_name",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "vgt-select",
                                                            on: {
                                                              change: [
                                                                function (t) {
                                                                  var n =
                                                                    Array.prototype.filter
                                                                      .call(
                                                                        t.target
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
                                                                  e.$set(
                                                                    e
                                                                      .serverParams
                                                                      .columnFilters,
                                                                    "event_name",
                                                                    t.target
                                                                      .multiple
                                                                      ? n
                                                                      : n[0]
                                                                  );
                                                                },
                                                                function () {
                                                                  a(
                                                                    o,
                                                                    e
                                                                      .serverParams
                                                                      .columnFilters
                                                                      .event_name
                                                                  );
                                                                },
                                                              ],
                                                            },
                                                          },
                                                          [
                                                            n(
                                                              "option",
                                                              {
                                                                attrs: {
                                                                  value: "",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                        " +
                                                                    e._s(
                                                                      e
                                                                        .serverParams
                                                                        .columnFilters
                                                                        .module_name &&
                                                                        null !==
                                                                          (r =
                                                                            e.eventNameColumn) &&
                                                                        void 0 !==
                                                                          r &&
                                                                        null !==
                                                                          (r =
                                                                            r.filterOptions) &&
                                                                        void 0 !==
                                                                          r &&
                                                                        null !==
                                                                          (r =
                                                                            r.filterDropdownItemsCopy) &&
                                                                        void 0 !==
                                                                          r &&
                                                                        r[
                                                                          e
                                                                            .serverParams
                                                                            .columnFilters
                                                                            .module_name
                                                                        ]
                                                                        ? o
                                                                            .filterOptions
                                                                            .placeholder
                                                                        : e
                                                                            .formTranslation
                                                                            .webhooks
                                                                            .please_first_select_module
                                                                    ) +
                                                                    "\n                      "
                                                                ),
                                                              ]
                                                            ),
                                                            e._v(" "),
                                                            e._l(
                                                              e.eventNameColumn
                                                                .filterOptions
                                                                .filterDropdownItemsCopy[
                                                                e.serverParams
                                                                  .columnFilters
                                                                  .module_name
                                                              ],
                                                              function (t, i) {
                                                                return n(
                                                                  "option",
                                                                  {
                                                                    key: i,
                                                                    domProps: {
                                                                      value:
                                                                        t.value,
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      "\n                        " +
                                                                        e._s(
                                                                          t.text
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
                                                    : e._e(),
                                                ];
                                              },
                                            },
                                            {
                                              key: "table-row",
                                              fn: function (t) {
                                                return [
                                                  "status" === t.column.field
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass: "d-flex",
                                                        },
                                                        [
                                                          n("b-form-checkbox", {
                                                            attrs: {
                                                              name: "check-button",
                                                              switch: "",
                                                              value: "1",
                                                              size: "lg",
                                                              "unchecked-value":
                                                                "0",
                                                              id:
                                                                "status_change_" +
                                                                t.row.id,
                                                            },
                                                            on: {
                                                              change: function (
                                                                n
                                                              ) {
                                                                return e.changeModuleValueStatus(
                                                                  {
                                                                    module_type:
                                                                      e.name,
                                                                    id: t.row
                                                                      .id,
                                                                    value:
                                                                      t.row
                                                                        .status,
                                                                  }
                                                                );
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                t.row.status,
                                                              callback:
                                                                function (n) {
                                                                  e.$set(
                                                                    t.row,
                                                                    "status",
                                                                    n
                                                                  );
                                                                },
                                                              expression:
                                                                "props.row.status",
                                                            },
                                                          }),
                                                          e._v(" "),
                                                          "1" ===
                                                          t.row.status.toString()
                                                            ? n(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success",
                                                                },
                                                                [
                                                                  e._v(
                                                                    "\n                      " +
                                                                      e._s(
                                                                        e
                                                                          .formTranslation
                                                                          .common
                                                                          .active
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                          e._v(" "),
                                                          "0" ===
                                                          t.row.status.toString()
                                                            ? n(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  e._v(
                                                                    "\n                      " +
                                                                      e._s(
                                                                        e
                                                                          .formTranslation
                                                                          .common
                                                                          .inactive
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                        ],
                                                        1
                                                      )
                                                    : "last_log" ===
                                                      t.column.field
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          "1" ===
                                                          t.row.last_log.toString()
                                                            ? n(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-success",
                                                                },
                                                                [
                                                                  e._v(
                                                                    "\n                      " +
                                                                      e._s(
                                                                        e
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .success
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                          e._v(" "),
                                                          "0" ===
                                                          t.row.last_log.toString()
                                                            ? n(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "badge badge-danger",
                                                                },
                                                                [
                                                                  e._v(
                                                                    "\n                      " +
                                                                      e._s(
                                                                        e
                                                                          .formTranslation
                                                                          .webhooks
                                                                          .failed
                                                                      ) +
                                                                      "\n                    "
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                        ]
                                                      )
                                                    : "actions" ===
                                                      t.column.field
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
                                                        },
                                                        [
                                                          n(
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
                                                                  e
                                                                    .formTranslation
                                                                    .clinic_schedule
                                                                    .dt_lbl_edit,
                                                                to: {
                                                                  name: "".concat(
                                                                    e.name,
                                                                    ".edit"
                                                                  ),
                                                                  params: {
                                                                    id: t.row
                                                                      .id,
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "fa fa-pen-alt",
                                                              }),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          n(
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
                                                                "btn btn-outline-secondary btn-sm",
                                                              attrs: {
                                                                id:
                                                                  e.clone_ele +
                                                                  t.row.id,
                                                                title:
                                                                  e
                                                                    .formTranslation
                                                                    .common
                                                                    .clone,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (n) {
                                                                    return e.cloneData(
                                                                      t.row.id
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "fa fa-clone",
                                                              }),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          n(
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
                                                                  e
                                                                    .formTranslation
                                                                    .webhooks
                                                                    .view_logs,
                                                                to: {
                                                                  name: "".concat(
                                                                    e.name,
                                                                    ".log"
                                                                  ),
                                                                  params: {
                                                                    webhook_id:
                                                                      t.row.id,
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "fa fa-table",
                                                              }),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          n(
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
                                                                  e.delete_ele +
                                                                  t.row.id,
                                                                title:
                                                                  e
                                                                    .formTranslation
                                                                    .clinic_schedule
                                                                    .dt_lbl_dlt,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (n) {
                                                                    return e.deleteData(
                                                                      t.row.id
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "fa fa-trash",
                                                              }),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    : n("div", [
                                                        e._v(
                                                          "\n                    " +
                                                            e._s(
                                                              e
                                                                .column_label_hashmap[
                                                                t.formattedRow[
                                                                  t.column.field
                                                                ]
                                                              ] ||
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
                                          n(
                                            "div",
                                            {
                                              staticClass: "text-center",
                                              attrs: { slot: "emptystate" },
                                              slot: "emptystate",
                                            },
                                            [
                                              e._v(
                                                "\n                  " +
                                                  e._s(
                                                    e.isRowLoading
                                                      ? ""
                                                      : e.formTranslation.common
                                                          .no_data_found
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                          e._v(" "),
                                          e._v(" "),
                                          n(
                                            "div",
                                            {
                                              attrs: {
                                                slot: "selected-row-actions",
                                              },
                                              slot: "selected-row-actions",
                                            },
                                            [
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex justify-content-end align-items-center",
                                                },
                                                [
                                                  n(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            e
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
                                                          var n =
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
                                                          e.$set(
                                                            e.globalCheckboxApplyData,
                                                            "action_perform",
                                                            t.target.multiple
                                                              ? n
                                                              : n[0]
                                                          );
                                                        },
                                                      },
                                                    },
                                                    e._l(
                                                      e.globalCheckboxApplyDataActions,
                                                      function (t) {
                                                        return n(
                                                          "option",
                                                          {
                                                            domProps: {
                                                              value: t.value,
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "\n                        " +
                                                                e._s(t.label) +
                                                                "\n                      "
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    0
                                                  ),
                                                  e._v(" "),
                                                  n(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "ml-2 btn btn-sm btn-primary",
                                                      on: {
                                                        click: function (t) {
                                                          return e.helperGlobalAction(
                                                            t,
                                                            e.getTableData
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                      " +
                                                          e._s(
                                                            e.formTranslation
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
    function ui() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          pi(
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
          : (pi((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), pi(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        pi(u, "constructor", c),
        pi(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        pi(c, r, "GeneratorFunction"),
        pi(u),
        pi(u, r, "Generator"),
        pi(u, i, function () {
          return this;
        }),
        pi(u, "toString", function () {
          return "[object Generator]";
        }),
        (ui = function () {
          return { w: o, m: p };
        })()
      );
    }
    function pi(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (pi = function (t, e, n, i) {
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
            pi(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function hi(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function fi(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = t.apply(e, n);
          function a(t) {
            hi(o, i, r, a, s, "next", t);
          }
          function s(t) {
            hi(o, i, r, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var bi = (function () {
        var t = fi(
          ui().m(function t(e, n) {
            var i, r, o, a, l;
            return ui().w(
              function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      return (
                        (t.p = 0),
                        (o = Object.assign({}, n)),
                        (t.n = 1),
                        Object(s.a)(e, o)
                      );
                    case 1:
                      return (
                        (a = t.v),
                        t.a(
                          2,
                          null != a &&
                            null !== (i = a.data) &&
                            void 0 !== i &&
                            i.status &&
                            !0 === a.data.status &&
                            null != a &&
                            null !== (r = a.data) &&
                            void 0 !== r &&
                            r.data
                            ? a.data.data
                            : null
                        )
                      );
                    case 2:
                      return (
                        (t.p = 2),
                        t.v,
                        displayErrorMessage(
                          null === (l = window) ||
                            void 0 === l ||
                            null === (l = l.__kivicarelang) ||
                            void 0 === l ||
                            null === (l = l.widgets) ||
                            void 0 === l
                            ? void 0
                            : l.record_not_found
                        ),
                        t.a(2, null)
                      );
                  }
              },
              t,
              null,
              [[0, 2]]
            );
          })
        );
        return function (e, n) {
          return t.apply(this, arguments);
        };
      })(),
      mi = (function () {
        var t = fi(
          ui().m(function t(e, n) {
            var i, r, o, a;
            return ui().w(
              function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      return (
                        (t.p = 0),
                        (r = Object.assign({}, n)),
                        (t.n = 1),
                        Object(s.b)(e, r)
                      );
                    case 1:
                      if (
                        null == (o = t.v) ||
                        null === (i = o.data) ||
                        void 0 === i ||
                        !i.status ||
                        !0 !== o.data.status
                      ) {
                        t.n = 2;
                        break;
                      }
                      return displayMessage(o.data.message), t.a(2, !0);
                    case 2:
                      return displayErrorMessage(o.data.message), t.a(2, !1);
                    case 3:
                      t.n = 5;
                      break;
                    case 4:
                      return (
                        (t.p = 4),
                        t.v,
                        displayErrorMessage(
                          null === (a = window) ||
                            void 0 === a ||
                            null === (a = a.__kivicarelang) ||
                            void 0 === a ||
                            null === (a = a.widgets) ||
                            void 0 === a
                            ? void 0
                            : a.record_not_found
                        ),
                        t.a(2, !1)
                      );
                    case 5:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 4]]
            );
          })
        );
        return function (e, n) {
          return t.apply(this, arguments);
        };
      })(),
      gi = (n(736), n(610)),
      vi = n.n(gi),
      _i = {
        props: {
          value: [String, Number, Object, Array],
          showBtns: [Boolean],
          expandedOnStart: { type: Boolean, default: !1 },
          mode: { type: String, default: "tree" },
          modes: {
            type: Array,
            default: function () {
              return ["tree", "code", "form", "text", "view"];
            },
          },
          lang: { type: String, default: "en" },
        },
        watch: {
          value: {
            immediate: !0,
            async handler(t) {
              this.internalChange ||
                (await this.setEditor(t), (this.error = !1), this.expandAll());
            },
            deep: !0,
          },
        },
        data() {
          return {
            editor: null,
            error: !1,
            json: this.value,
            internalChange: !1,
            expandedModes: ["tree", "view", "form"],
            locale: {
              it: { save: "SALVA" },
              en: { save: "SAVE" },
              zh: { save: "保存" },
            },
          };
        },
        mounted() {
          let t = this,
            e = {
              mode: this.mode,
              modes: this.modes,
              onChange() {
                try {
                  let e = t.editor.get();
                  (t.json = e),
                    (t.error = !1),
                    t.$emit("json-change", e),
                    (t.internalChange = !0),
                    t.$emit("input", e),
                    t.$nextTick(function () {
                      t.internalChange = !1;
                    });
                } catch (e) {
                  (t.error = !0), t.$emit("has-error", e);
                }
              },
              onModeChange() {
                t.expandAll();
              },
            };
          this.editor = new vi.a(
            this.$el.querySelector(".jsoneditor-vue"),
            e,
            this.json
          );
        },
        methods: {
          expandAll() {
            this.expandedOnStart &&
              this.expandedModes.includes(this.editor.getMode()) &&
              this.editor.expandAll();
          },
          onSave() {
            this.$emit("json-save", this.json);
          },
          async setEditor(t) {
            this.editor && this.editor.set(t);
          },
        },
      },
      yi =
        (n(738),
        Object(h.a)(
          _i,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e("div", { staticClass: "jsoneditor-vue" }),
              t._v(" "),
              !1 !== t.showBtns
                ? e("div", { staticClass: "jsoneditor-btns" }, [
                    e(
                      "button",
                      {
                        staticClass: "json-save-btn",
                        attrs: { type: "button", disabled: t.error },
                        on: {
                          click: function (e) {
                            return t.onSave();
                          },
                        },
                      },
                      [t._v(t._s(t.locale[t.lang].save))]
                    ),
                  ])
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          "9b72cb1a",
          null
        ).exports);
    function Mi(t) {
      return (Mi =
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
    function Oi(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    function wi() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          Ai(
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
          : (Ai((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), Ai(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        Ai(u, "constructor", c),
        Ai(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        Ai(c, r, "GeneratorFunction"),
        Ai(u),
        Ai(u, r, "Generator"),
        Ai(u, i, function () {
          return this;
        }),
        Ai(u, "toString", function () {
          return "[object Generator]";
        }),
        (wi = function () {
          return { w: o, m: p };
        })()
      );
    }
    function Ai(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (Ai = function (t, e, n, i) {
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
            Ai(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function xi(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function zi(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = t.apply(e, n);
          function a(t) {
            xi(o, i, r, a, s, "next", t);
          }
          function s(t) {
            xi(o, i, r, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Ci(t, e) {
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
    function ki(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ci(Object(n), !0).forEach(function (e) {
              Si(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ci(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Si(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != Mi(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, "string");
              if ("object" != Mi(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == Mi(e) ? e : e + "";
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
    var Ti = {
        components: { vueJsonEditor: yi },
        data: function () {
          return {
            isColumnLoading: !1,
            formData: {},
            apiEndpoint: {
              edit: "webhooks_edit",
              save: "webhooks_save",
              column: "webhooks_column",
            },
            name: "webhooks",
            loading: !1,
            submitted: !1,
            cardTitle: "",
            formLoader: !0,
            eventNameOption: [],
            formStep: 1,
            statusOptions: [],
            dynamicKeysOption: [],
            contentTypeOption: [],
            moduleNameOption: [],
            allEventNameOption: [],
            webhooksMethodsOption: [],
            moduleNameOptionsValue: [],
            eventNameOptionsValue: [],
            statusOptionsValue: [],
            webhooksMethodsOptionValue: [],
            httpGetMethodName: "GET",
            jsonEditorError: !1,
            copyToolTipText: "",
          };
        },
        validations: {
          formData: {
            step_1: {
              name: { required: l.required },
              module_name: { required: l.required },
              event_name: { required: l.required },
              status: { required: l.required },
            },
            step_2: {
              methods: { required: l.required },
              webhook_data: {
                url: { required: l.required },
                headers: {
                  $each: {
                    key: { required: l.required },
                    value: { required: l.required },
                  },
                },
                query_parameters: {
                  $each: {
                    key: { required: l.required },
                    value: { required: l.required },
                  },
                },
                form_data: {
                  $each: {
                    key: { required: l.required },
                    value: { required: l.required },
                  },
                },
              },
            },
          },
        },
        mounted: function () {
          var t;
          (["administrator"].includes(this.getUserRole()) &&
            null != this &&
            null !== (t = this.userData) &&
            void 0 !== t &&
            null !== (t = t.addOns) &&
            void 0 !== t &&
            t.webhooks) ||
            this.$router.push({ name: "403" }),
            (this.copyToolTipText =
              this.formTranslation.settings.click_to_copy),
            this.init();
        },
        methods: ki(
          ki(
            {
              init: function () {
                this.getStatusOption(),
                  (this.contentTypeOption = this.getContentTypeOption()),
                  this.getTableColumn(),
                  (this.formData = this.defaultFormData()),
                  this.$route.params.id
                    ? ((this.formData.step_1.id = this.$route.params.id),
                      (this.cardTitle =
                        this.formTranslation.webhooks.edit_webhook),
                      this.getEditFormData())
                    : ((this.cardTitle =
                        this.formTranslation.webhooks.create_webhook),
                      (this.formLoader = !1));
              },
              getEditFormData: function () {
                var t = this;
                return zi(
                  wi().m(function e() {
                    var n;
                    return wi().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (t.formLoader = !0),
                              (e.n = 1),
                              bi(t.apiEndpoint.edit, { id: t.editID })
                            );
                          case 1:
                            (n = e.v)
                              ? ((t.formData = n), t.generateEventNameOption())
                              : t.navigateToListPage(),
                              (t.formLoader = !1);
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  })
                )();
              },
              getStatusOption: function () {
                (this.statusOptions = {
                  yes: this.formTranslation.common.active,
                  no: this.formTranslation.common.inactive,
                }),
                  (this.statusOptionsValue = Object.keys(this.statusOptions));
              },
              getContentTypeOption: function () {
                return [
                  {
                    value: "form_data",
                    text: this.formTranslation.webhooks.form_data,
                  },
                  {
                    value: "json_data",
                    text: this.formTranslation.webhooks.json_data,
                  },
                ];
              },
              navigateToListPage: function () {
                this.$router.push({ name: this.name });
              },
              defaultFormData: function () {
                return {
                  step_1: {
                    id: "",
                    name: "",
                    module_name: "",
                    event_name: "",
                    status: "",
                  },
                  step_2: {
                    methods: "POST",
                    webhook_data: {
                      url: "",
                      headers: [],
                      query_parameters: [],
                      content_type: "",
                      form_data: [],
                      json_data: { id: "{{id}}" },
                    },
                  },
                  user_id: "",
                };
              },
              handleSubmit: function () {
                var t;
                this.jsonEditorError &&
                this.formData.step_2.methods !== this.httpGetMethodName &&
                "json_data" ===
                  (null === (t = this.formData.step_2) ||
                  void 0 === t ||
                  null === (t = t.webhook_data) ||
                  void 0 === t ||
                  null === (t = t.content_type) ||
                  void 0 === t
                    ? void 0
                    : t.value)
                  ? displayErrorMessage(
                      this.formTranslation.webhooks.please_enter_valid_json
                    )
                  : ((this.loading = !0),
                    (this.submitted = !0),
                    this.validateFormData("step_2")
                      ? (this.loading = !1)
                      : ((this.submitted = !1), this.saveFormData()));
              },
              saveFormData: function () {
                var t = this;
                return zi(
                  wi().m(function e() {
                    return wi().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (t.loading = !0),
                              (e.n = 1),
                              mi(t.apiEndpoint.save, t.formData)
                            );
                          case 1:
                            e.v && t.navigateToListPage(), (t.loading = !1);
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  })
                )();
              },
              validateFormData: function (t) {
                return (
                  this.$v.$touch(),
                  this.$nextTick(function () {
                    var t =
                      document.querySelector(".is-invalid") ||
                      document.querySelector(".invalid-feedback");
                    t &&
                      t.scrollIntoView({ block: "center", behavior: "smooth" });
                  }),
                  this.$v.formData[t].$invalid
                );
              },
              updateFormStep: function (t) {
                if (2 === t) {
                  if (((this.submitted = !0), this.validateFormData("step_1")))
                    return;
                  this.submitted = !1;
                }
                this.formStep = t;
              },
              parseQueryParams: function (t) {
                var e = [],
                  n = t.split("?")[1];
                return (
                  n &&
                    n.split("&").forEach(function (t) {
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
                                if ("string" == typeof t) return Oi(t, 2);
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
                                    ? Oi(t, 2)
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
                        })(t.split("=")),
                        i = n[0],
                        r = n[1];
                      e.push({ key: i, value: r });
                    }),
                  e
                );
              },
              pushData: function (t) {
                var e;
                null !== (e = this.formData.step_2) &&
                  void 0 !== e &&
                  null !== (e = e.webhook_data) &&
                  void 0 !== e &&
                  e[t] &&
                  this.formData.step_2.webhook_data[t].push({
                    key: "",
                    value: "",
                  });
              },
              popData: function (t, e) {
                var n;
                null !== (n = this.formData.step_2) &&
                  void 0 !== n &&
                  null !== (n = n.webhook_data) &&
                  void 0 !== n &&
                  n[t] &&
                  this.formData.step_2.webhook_data[t].splice(e, 1);
              },
              customLabel: function (t, e) {
                var n;
                return null != e &&
                  null !== (n = e[t]) &&
                  void 0 !== n &&
                  n.text
                  ? e[t].text
                  : null != e && e[t]
                  ? e[t]
                  : t;
              },
              generateModuleOption: function (t) {
                var e,
                  n = [],
                  i = [];
                null != t &&
                  null !== (e = t.filterOptions) &&
                  void 0 !== e &&
                  e.filterDropdownItems &&
                  t.filterOptions.filterDropdownItems.forEach(function (t) {
                    (n[t.value] = t.text), i.push(t.value);
                  }),
                  (this.moduleNameOption = n),
                  (this.moduleNameOptionsValue = i);
              },
              generateAllEventOption: function (t) {
                var e;
                null != t &&
                  null !== (e = t.filterOptions) &&
                  void 0 !== e &&
                  e.filterDropdownItemsCopy &&
                  (this.allEventNameOption =
                    t.filterOptions.filterDropdownItemsCopy),
                  this.editID &&
                    !this.eventNameOptionsValue.length &&
                    (this.generateEventNameOption(),
                    this.generateDynamicKeysOptions());
              },
              generateWebhookMethodOption: function (t) {
                var e,
                  n = [],
                  i = [];
                null != t &&
                  null !== (e = t.filterOptions) &&
                  void 0 !== e &&
                  e.filterDropdownItems &&
                  t.filterOptions.filterDropdownItems.forEach(function (t) {
                    (n[t.value] = t.text), i.push(t.value);
                  }),
                  (this.webhooksMethodsOption = n),
                  (this.webhooksMethodsOptionValue = i);
              },
              generateEventNameOption: function () {
                var t,
                  e = this.formData.step_1.module_name;
                if (
                  null !== (t = this.allEventNameOption) &&
                  void 0 !== t &&
                  t[e]
                ) {
                  (this.eventNameOptionsValue = []),
                    (this.eventNameOption = []);
                  var n = this.allEventNameOption[e];
                  for (var i in n) {
                    var r = n[i].value;
                    this.eventNameOptionsValue.push(r),
                      (this.eventNameOption[r] = n[i]);
                  }
                }
              },
              generateDynamicKeysOptions: function () {
                var t,
                  e = this.formData.step_1.event_name;
                this.dynamicKeysOption =
                  null !== (t = this.eventNameOption) &&
                  void 0 !== t &&
                  null !== (t = t[e]) &&
                  void 0 !== t &&
                  t.dynamic_keys
                    ? this.eventNameOption[e].dynamic_keys
                    : [];
              },
              formatColumnData: function (t) {
                null != t &&
                  t.module_name &&
                  this.generateModuleOption(t.module_name),
                  null != t &&
                    t.event_name &&
                    this.generateAllEventOption(t.event_name),
                  null != t &&
                    t.methods &&
                    this.generateWebhookMethodOption(t.methods);
              },
              moduleNameChange: function () {
                (this.formData.step_1.event_name = ""),
                  this.generateEventNameOption();
              },
            },
            Object(ti.b)("tableModule", ["fetchTableColumns"])
          ),
          {},
          {
            getTableColumn: function () {
              var t = this;
              return zi(
                wi().m(function e() {
                  var n;
                  return wi().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (t.isColumnLoading = !0),
                            (e.n = 1),
                            t.fetchTableColumns({
                              endpoint: t.apiEndpoint.column,
                              module: "webhooks",
                            })
                          );
                        case 1:
                          (n = e.v) && t.formatColumnData(n),
                            (t.isColumnLoading = !1);
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            jsonEditorChange: function (t) {
              this.jsonEditorError = this.isJsonString(t);
            },
            isJsonString: function (t) {
              try {
                JSON.parse(t);
              } catch (t) {
                return !1;
              }
              return !0;
            },
            jsonError: function () {
              this.jsonEditorError = !0;
            },
            copyToClipboard: I.b,
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
          selectedMethodType: function () {
            return this.formData.step_2.methods;
          },
          selectedContentType: function () {
            var t;
            return null === (t = this.formData.step_2.webhook_data) ||
              void 0 === t ||
              null === (t = t.content_type) ||
              void 0 === t
              ? void 0
              : t.value;
          },
          editID: function () {
            return this.formData.step_1.id;
          },
        },
        watch: {
          "formData.step_1.event_name": function () {
            this.generateDynamicKeysOptions();
          },
          "formData.step_2.webhook_data.url": function (t) {
            this.formData.step_2.webhook_data.query_parameters =
              this.parseQueryParams(t);
          },
          "formData.step_2.webhook_data.query_parameters": {
            deep: !0,
            handler: function (t) {
              if (this.selectedMethodType === this.httpGetMethodName) {
                var e = t
                  .filter(function (t) {
                    return "" !== t.key.trim() || "" !== t.value.trim();
                  })
                  .map(function (t) {
                    return "".concat(t.key, "=").concat(t.value);
                  })
                  .join("&");
                this.formData.step_2.webhook_data.url =
                  this.formData.step_2.webhook_data.url.split("?")[0] +
                  (e ? "?".concat(e) : "");
              }
            },
          },
        },
      },
      Di =
        (n(740),
        Object(h.a)(
          Ti,
          function () {
            var t,
              e,
              n,
              i,
              r = this,
              o = r._self._c;
            return o(
              "b-row",
              [
                r.formLoader || r.isColumnLoading
                  ? o(
                      "div",
                      { staticClass: "page-loader-section" },
                      [o("loader-component-2")],
                      1
                    )
                  : o("b-col", { attrs: { sm: "12" } }, [
                      o(
                        "form",
                        { attrs: { novalidate: !0 } },
                        [
                          o(
                            "b-card",
                            {
                              staticClass: "p-0 shadow",
                              attrs: {
                                "header-tag": "header",
                                "footer-tag": "footer",
                              },
                              scopedSlots: r._u([
                                {
                                  key: "header",
                                  fn: function () {
                                    return [
                                      o(
                                        "b-row",
                                        [
                                          o(
                                            "b-col",
                                            {
                                              attrs: {
                                                sm: "12",
                                                md: "8",
                                                lg: "8",
                                              },
                                            },
                                            [
                                              o("h3", { staticClass: "mb-0" }, [
                                                r._v(r._s(r.cardTitle)),
                                              ]),
                      